-- Migration 0008 — Row-level security policies.
-- Pattern per W2 close-gate clarification:
--   anon                   public content only
--   authenticated buyer    self-owned rows only
--   approved buyer         approved portal resources only
--   website admin          role-scoped via admin_users with audit logging
--   service role           server-only, never browser; bypasses RLS by design
--
-- "Admin bypass" is NOT a policy — admins are granted explicit role-scoped
-- access via current_admin_role() checks. The service role used by trusted
-- server routes/cron jobs is the only path that sidesteps RLS, and it is
-- never present in client code (see lib/env.ts getServerEnv()).

BEGIN;

-- =========================================================================
-- admin_users
-- =========================================================================
-- Admins can read all admin_users; sales/fulfilment can read only themselves.
CREATE POLICY admin_users_self_select
  ON admin_users FOR SELECT
  USING (
    supabase_uid = auth.uid()
    OR current_admin_role() = 'admin'
  );

-- Only admins can insert/update/delete admin_users.
CREATE POLICY admin_users_admin_write
  ON admin_users FOR ALL
  USING (current_admin_role() = 'admin')
  WITH CHECK (current_admin_role() = 'admin');

-- =========================================================================
-- products / product_variants / product_images / product_descriptions
-- Public read where status = 'active'. Admin write.
-- =========================================================================
CREATE POLICY products_anon_select
  ON products FOR SELECT
  USING (status = 'active');

CREATE POLICY products_admin_write
  ON products FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY product_variants_anon_select
  ON product_variants FOR SELECT
  USING (
    is_active
    AND EXISTS (
      SELECT 1 FROM products p
      WHERE p.id = product_variants.product_id AND p.status = 'active'
    )
  );

CREATE POLICY product_variants_admin_write
  ON product_variants FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY product_images_anon_select
  ON product_images FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM products p
      WHERE p.id = product_images.product_id AND p.status = 'active'
    )
  );

CREATE POLICY product_images_admin_write
  ON product_images FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY product_descriptions_anon_select
  ON product_descriptions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM products p
      WHERE p.id = product_descriptions.product_id AND p.status = 'active'
    )
  );

CREATE POLICY product_descriptions_admin_write
  ON product_descriptions FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

-- =========================================================================
-- lots / lot_evidence_status / chemotype_*
-- Public reads gated by lots.is_published. Admin write.
-- =========================================================================
CREATE POLICY lots_anon_select
  ON lots FOR SELECT
  USING (is_published);

CREATE POLICY lots_admin_write
  ON lots FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY lot_evidence_anon_select
  ON lot_evidence_status FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM lots l
      WHERE l.id = lot_evidence_status.lot_id AND l.is_published
    )
  );

CREATE POLICY lot_evidence_admin_write
  ON lot_evidence_status FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY chemotype_profiles_anon_select
  ON chemotype_profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM lots l
      WHERE l.id = chemotype_profiles.lot_id AND l.is_published
    )
    -- Reference-only profiles are hidden from anon even if their lot is "published"
    -- (defensive — published reference lots are forbidden in production).
    AND is_reference_only = false
  );

CREATE POLICY chemotype_profiles_admin_write
  ON chemotype_profiles FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY chemotype_markers_anon_select
  ON chemotype_markers FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM chemotype_profiles cp
        JOIN lots l ON l.id = cp.lot_id
       WHERE cp.id = chemotype_markers.chemotype_profile_id
         AND l.is_published
         AND cp.is_reference_only = false
    )
  );

CREATE POLICY chemotype_markers_admin_write
  ON chemotype_markers FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

-- =========================================================================
-- marketing_contacts / email_events / marketing_sequence_enrolments
-- Anon DENY. Self-read possible if a contact's supabase_uid is wired in
-- (future work). Admin read/write with audit.
-- =========================================================================
CREATE POLICY marketing_contacts_admin_all
  ON marketing_contacts FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY email_events_admin_select
  ON email_events FOR SELECT
  USING (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY marketing_seq_admin_all
  ON marketing_sequence_enrolments FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

-- =========================================================================
-- consent_log
-- Inserts allowed from any session (cookie banner submission). Reads admin-only.
-- =========================================================================
CREATE POLICY consent_log_anon_insert
  ON consent_log FOR INSERT
  WITH CHECK (true);

CREATE POLICY consent_log_admin_select
  ON consent_log FOR SELECT
  USING (current_admin_role() IN ('admin', 'sales'));

-- =========================================================================
-- b2b_contacts / rfqs
-- Anon DENY. Approved buyer can read OWN row only (portal). Admin read/write.
-- =========================================================================
CREATE POLICY b2b_contacts_self_select
  ON b2b_contacts FOR SELECT
  USING (
    (supabase_uid = auth.uid() AND approval_status = 'approved')
    OR current_admin_role() IN ('admin', 'sales')
  );

CREATE POLICY b2b_contacts_admin_write
  ON b2b_contacts FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

CREATE POLICY rfqs_self_select
  ON rfqs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM b2b_contacts bc
      WHERE bc.id = rfqs.b2b_contact_id
        AND bc.supabase_uid = auth.uid()
        AND bc.approval_status = 'approved'
    )
    OR current_admin_role() IN ('admin', 'sales')
  );

CREATE POLICY rfqs_admin_write
  ON rfqs FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

-- =========================================================================
-- internal_wholesale_targets
-- Admin-only. Never exposed to any other role.
-- =========================================================================
CREATE POLICY internal_targets_admin_all
  ON internal_wholesale_targets FOR ALL
  USING (current_admin_role() IN ('admin', 'sales'))
  WITH CHECK (current_admin_role() IN ('admin', 'sales'));

-- =========================================================================
-- audit_log
-- Admin read-only. Writes are via SECURITY DEFINER triggers (defined in 0009).
-- =========================================================================
CREATE POLICY audit_log_admin_select
  ON audit_log FOR SELECT
  USING (current_admin_role() IN ('admin', 'sales'));

COMMIT;
