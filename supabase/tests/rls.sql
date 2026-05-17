-- RLS proof tests for W2 close-gate.
-- Run after all migrations against a fresh website Supabase project.
-- Every test that fails will RAISE and abort. Greenlight = no output.
--
-- Run with:
--   psql "$WEBSITE_DATABASE_URL" -v ON_ERROR_STOP=1 -f website/supabase/tests/rls.sql

\set ON_ERROR_STOP on

BEGIN;

-- =========================================================================
-- Fixtures
-- =========================================================================
-- One placeholder admin user, two simulated B2B contacts, two RFQs.
-- We use SET LOCAL to switch the session role for each block.

-- Admin user
INSERT INTO admin_users (supabase_uid, email, role)
VALUES ('00000000-0000-0000-0000-000000000a01', 'admin-test@moedim.test', 'admin');

-- Two B2B contacts (one approved, one pending)
INSERT INTO b2b_contacts (id, supabase_uid, company_name, company_country,
                          contact_name, email, approval_status)
VALUES
  ('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000b01',
   'Buyer Alpha Ltd', 'NL', 'Alice', 'alice@buyer-alpha.test', 'approved'),
  ('22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000b02',
   'Buyer Beta GmbH', 'DE', 'Bob', 'bob@buyer-beta.test', 'pending');

-- One RFQ per buyer
INSERT INTO rfqs (reference, b2b_contact_id, message, status)
VALUES
  ('RFQ-TEST-001', '11111111-1111-1111-1111-111111111111', 'Alpha test', 'new'),
  ('RFQ-TEST-002', '22222222-2222-2222-2222-222222222222', 'Beta test', 'new');

-- Marketing contact + email event + sequence enrolment
INSERT INTO marketing_contacts (email, source, consent_given_at, consent_method)
VALUES ('newsletter-test@moedim.test', 'newsletter', now(), 'double_optin');

-- =========================================================================
-- Test 1: anon CANNOT read marketing_contacts
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM marketing_contacts;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 1 FAILED: anon read % marketing_contacts rows (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 2: anon CANNOT read b2b_contacts
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM b2b_contacts;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 2 FAILED: anon read % b2b_contacts rows (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 3: anon CANNOT read rfqs
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM rfqs;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 3 FAILED: anon read % rfqs rows (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 4: anon CANNOT read audit_log
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM audit_log;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 4 FAILED: anon read % audit_log rows (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 5: anon CANNOT read internal_wholesale_targets
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM internal_wholesale_targets;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 5 FAILED: anon read % internal_wholesale_targets rows (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 6: anon CAN read active products
-- (after a status flip, otherwise zero — flip Rosemary to active for the test).
-- =========================================================================
UPDATE products SET status = 'active' WHERE slug = 'rosemary';

DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM products WHERE slug = 'rosemary';
  IF v_count <> 1 THEN
    RAISE EXCEPTION 'TEST 6 FAILED: anon read % active rosemary products (expected 1)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 7: anon CANNOT read draft products
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM products WHERE status = 'draft';
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 7 FAILED: anon read % draft products (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 8: anon CANNOT read unpublished lots
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM lots;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 8 FAILED: anon read % lots (expected 0 — none published)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 9: anon CANNOT read chemotype_profiles when lot is unpublished
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  -- Add a chemotype profile on a placeholder lot
  INSERT INTO chemotype_profiles (lot_id, analysis_type, is_reference_only, notes)
  SELECT id, 'gc_ms_essential_oil', false, 'test profile'
  FROM lots WHERE lot_number LIKE 'PLACEHOLDER-ROSEMARY' LIMIT 1;

  SET LOCAL ROLE anon;
  SELECT count(*) INTO v_count FROM chemotype_profiles;
  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 9 FAILED: anon read % chemotype_profiles (expected 0)', v_count;
  END IF;
END $$;
RESET ROLE;

-- =========================================================================
-- Test 10: approved buyer Alice CAN read OWN rfqs, CANNOT read Bob's
-- =========================================================================
-- Note: this test simulates Alice's session by setting auth.uid() via
-- a temporary auth_jwt local. In a real Supabase environment, the JWT is
-- set per-request. We approximate by setting the request.jwt.claim.sub.
DO $$
DECLARE
  v_alice_count integer;
  v_bob_count integer;
BEGIN
  -- Simulate Alice (approved buyer)
  SET LOCAL ROLE authenticated;
  SET LOCAL request.jwt.claim.sub = '00000000-0000-0000-0000-000000000b01';

  SELECT count(*) INTO v_alice_count FROM rfqs WHERE reference = 'RFQ-TEST-001';
  SELECT count(*) INTO v_bob_count   FROM rfqs WHERE reference = 'RFQ-TEST-002';

  IF v_alice_count <> 1 THEN
    RAISE EXCEPTION 'TEST 10a FAILED: approved buyer Alice could not read own RFQ (got %, expected 1)', v_alice_count;
  END IF;

  IF v_bob_count <> 0 THEN
    RAISE EXCEPTION 'TEST 10b FAILED: approved buyer Alice could read Bob''s RFQ (got %, expected 0)', v_bob_count;
  END IF;
END $$;
RESET ROLE;
RESET request.jwt.claim.sub;

-- =========================================================================
-- Test 11: pending (not-yet-approved) buyer Bob CANNOT read own rfqs
-- =========================================================================
DO $$
DECLARE
  v_count integer;
BEGIN
  SET LOCAL ROLE authenticated;
  SET LOCAL request.jwt.claim.sub = '00000000-0000-0000-0000-000000000b02';

  SELECT count(*) INTO v_count FROM rfqs WHERE reference = 'RFQ-TEST-002';

  IF v_count <> 0 THEN
    RAISE EXCEPTION 'TEST 11 FAILED: pending buyer Bob read % own RFQ rows (expected 0 — not yet approved)', v_count;
  END IF;
END $$;
RESET ROLE;
RESET request.jwt.claim.sub;

-- =========================================================================
-- Test 12: consent_log insert allowed from anon (cookie banner submit)
-- =========================================================================
DO $$
BEGIN
  SET LOCAL ROLE anon;
  INSERT INTO consent_log (visitor_anon_id, consent_categories, gpc_signal)
  VALUES ('test-visitor', '{"essential":true,"analytics":false,"marketing":false}'::jsonb, false);
END $$;
RESET ROLE;

-- =========================================================================
-- Cleanup — leave the DB clean.
-- =========================================================================
ROLLBACK;
