-- Migration 0007 — Supabase Storage buckets.
-- Default-private discipline per W2 close-gate clarification.
-- Only `product-images` is public; all others private with signed URLs.

BEGIN;

-- product-images: brand/product imagery. Public read OK.
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- lot-photos: photos tied to specific lots. PRIVATE by default. Future
-- per-photo opt-in for public display is tracked in `lots` metadata (W3+).
INSERT INTO storage.buckets (id, name, public)
VALUES ('lot-photos', 'lot-photos', false)
ON CONFLICT (id) DO NOTHING;

-- farm-photos: photos with supplier/farmer identity. PRIVATE. DPA consent
-- required for any future public display.
INSERT INTO storage.buckets (id, name, public)
VALUES ('farm-photos', 'farm-photos', false)
ON CONFLICT (id) DO NOTHING;

-- coa-pdfs: lab evidence. PRIVATE. Signed URLs with short TTL only.
INSERT INTO storage.buckets (id, name, public)
VALUES ('coa-pdfs', 'coa-pdfs', false)
ON CONFLICT (id) DO NOTHING;

-- etims-invoices: KRA invoice records. PRIVATE. Customer-only access via
-- signed URLs after authentication. Wired in W6+.
INSERT INTO storage.buckets (id, name, public)
VALUES ('etims-invoices', 'etims-invoices', false)
ON CONFLICT (id) DO NOTHING;

-- b2b-documents: contracts, NDAs, custom COAs. PRIVATE. Admin-only via
-- signed URLs. Wired in W11.
INSERT INTO storage.buckets (id, name, public)
VALUES ('b2b-documents', 'b2b-documents', false)
ON CONFLICT (id) DO NOTHING;

-- evidence-packets: full evidence bundles (COA + SDS + IFRA + allergen).
-- PRIVATE. Signed URLs for approved buyers. Wired in W9.
INSERT INTO storage.buckets (id, name, public)
VALUES ('evidence-packets', 'evidence-packets', false)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS policies.
-- Public bucket: anyone can read.
CREATE POLICY "product-images public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'product-images');

-- Authenticated admins can write to product-images.
CREATE POLICY "admins write product-images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'product-images'
    AND current_admin_role() IS NOT NULL
  );

CREATE POLICY "admins update product-images"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'product-images'
    AND current_admin_role() IS NOT NULL
  );

CREATE POLICY "admins delete product-images"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'product-images'
    AND current_admin_role() IN ('admin', 'sales')
  );

-- Private buckets: NO direct anon access. Reads must go via server-issued
-- signed URLs. The service role generates signed URLs from API routes only.
-- Admins (with role) can read directly via the admin UI.
CREATE POLICY "admins read private buckets"
  ON storage.objects FOR SELECT
  USING (
    bucket_id IN ('lot-photos', 'farm-photos', 'coa-pdfs',
                  'etims-invoices', 'b2b-documents', 'evidence-packets')
    AND current_admin_role() IS NOT NULL
  );

CREATE POLICY "admins write private buckets"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id IN ('lot-photos', 'farm-photos', 'coa-pdfs',
                  'etims-invoices', 'b2b-documents', 'evidence-packets')
    AND current_admin_role() IN ('admin', 'sales', 'fulfilment')
  );

CREATE POLICY "admins update private buckets"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id IN ('lot-photos', 'farm-photos', 'coa-pdfs',
                  'etims-invoices', 'b2b-documents', 'evidence-packets')
    AND current_admin_role() IN ('admin', 'sales')
  );

CREATE POLICY "admins delete private buckets"
  ON storage.objects FOR DELETE
  USING (
    bucket_id IN ('lot-photos', 'farm-photos', 'coa-pdfs',
                  'etims-invoices', 'b2b-documents', 'evidence-packets')
    AND current_admin_role() = 'admin'
  );

COMMENT ON SCHEMA storage IS
  'Buckets default private. Only product-images is public. Private bucket reads must be via server-signed URLs with short TTL.';

COMMIT;
