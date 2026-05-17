-- Migration 0006 — RFQs + B2B contacts.
-- SCHEMA FOUNDATION ONLY in W2. No live POST /api/rfq endpoint. The form +
-- ingestion logic ship in W4 (B2B buyer funnel). Migration runs now so the
-- shape is stable when W4 begins.

BEGIN;

CREATE TABLE b2b_contacts (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supabase_uid            uuid UNIQUE,                    -- nullable until approved + invited
  company_name            text NOT NULL,
  company_country         text NOT NULL,
  contact_name            text NOT NULL,
  contact_role            text,
  email                   citext UNIQUE NOT NULL,
  phone                   text,
  website                 text,
  business_reg_number     text,
  certifications          text[] NOT NULL DEFAULT '{}',
  intended_use            text,
  intended_markets        text[] NOT NULL DEFAULT '{}',
  estimated_annual_volume_kg numeric(12, 2),
  approval_status         text NOT NULL DEFAULT 'pending' CHECK (approval_status IN (
                            'pending', 'approved', 'hold', 'rejected'
                          )),
  approval_notes          text,
  approved_by             uuid REFERENCES admin_users(id),
  approved_at             timestamptz,
  rejected_at             timestamptz,
  portal_invited_at       timestamptz,
  portal_first_signin_at  timestamptz,
  portal_last_signin_at   timestamptz,
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX b2b_contacts_approval_idx ON b2b_contacts (approval_status);
CREATE INDEX b2b_contacts_country_idx  ON b2b_contacts (company_country);

CREATE TRIGGER b2b_contacts_set_updated_at
  BEFORE UPDATE ON b2b_contacts
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

COMMENT ON TABLE b2b_contacts IS
  'Persistent B2B company profiles. PII: contact_name, email, phone. RLS in 0010 ensures: anon DENY, self-read for portal-authenticated approved buyer only, admin-role read/write with audit.';

CREATE TABLE rfqs (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference               text UNIQUE NOT NULL,           -- RFQ-2026-NNN
  b2b_contact_id          uuid NOT NULL REFERENCES b2b_contacts(id) ON DELETE RESTRICT,
  source_page             text,                            -- e.g. /wholesale, /shop/product/leleshwa
  oils_of_interest        jsonb,                           -- [{ product_slug, target_volume_kg }]
  target_volume_kg        numeric(12, 2),
  desired_chemotype_spec  text,
  intended_use            text,
  required_certifications text[] NOT NULL DEFAULT '{}',
  required_documents      text[] NOT NULL DEFAULT '{}',
  timeline                text,
  heard_about_us          text,
  message                 text,
  status                  text NOT NULL DEFAULT 'new' CHECK (status IN (
                            'new', 'contacted', 'qualified', 'sampling',
                            'quoted', 'won', 'lost', 'approved_for_sample'
                          )),
  assigned_to             uuid REFERENCES admin_users(id),
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX rfqs_status_idx ON rfqs (status, created_at DESC);
CREATE INDEX rfqs_contact_idx ON rfqs (b2b_contact_id);

CREATE TRIGGER rfqs_set_updated_at
  BEFORE UPDATE ON rfqs
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

COMMENT ON TABLE rfqs IS
  'B2B requests for quote. SCHEMA FOUNDATION ONLY in W2 — no live /api/rfq endpoint. Insert path arrives in W4.';

-- Pipeline valuation source — admin-only.
CREATE TABLE internal_wholesale_targets (
  id                      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id              uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  target_price_usd_cents  integer NOT NULL CHECK (target_price_usd_cents >= 0),
  effective_from          date NOT NULL DEFAULT CURRENT_DATE,
  effective_to            date,
  notes                   text,
  created_by              uuid REFERENCES admin_users(id),
  created_at              timestamptz NOT NULL DEFAULT now(),
  updated_at              timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX internal_wholesale_targets_product_idx
  ON internal_wholesale_targets (product_id, effective_from DESC);

CREATE TRIGGER internal_wholesale_targets_set_updated_at
  BEFORE UPDATE ON internal_wholesale_targets
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

COMMENT ON TABLE internal_wholesale_targets IS
  'Internal USD/kg targets per oil for pipeline valuation. NEVER exposed publicly.';

ALTER TABLE b2b_contacts                ENABLE ROW LEVEL SECURITY;
ALTER TABLE rfqs                        ENABLE ROW LEVEL SECURITY;
ALTER TABLE internal_wholesale_targets  ENABLE ROW LEVEL SECURITY;

COMMIT;
