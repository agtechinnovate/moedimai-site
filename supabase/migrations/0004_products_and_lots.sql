-- Migration 0004 — products, variants, images, descriptions, lots, chemotype.
-- Operational product catalog. Editorial copy + imagery live in Sanity and
-- join by `slug`. This table is the source of truth for SKU, price, stock,
-- lot tracking, and evidence statuses.

BEGIN;

-- Five-state evidence taxonomy per W0 §2.6. Used across every evidence-bearing field.
CREATE TYPE evidence_status AS ENUM (
  'active',           -- real, current, on file
  'pending',          -- lab cycle in progress
  'sample',           -- placeholder / template — not a real Moedim lot
  'expired',          -- was active, now stale
  'not_applicable'    -- this evidence type doesn't apply to this product/lot
);

CREATE TYPE product_type AS ENUM ('essential_oil', 'botanical_oil');

CREATE TYPE chemotype_analysis_type AS ENUM ('gc_ms_essential_oil', 'fame_fatty_acid');

CREATE TABLE products (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                  text UNIQUE NOT NULL,           -- matches Sanity product.slug
  name                  text NOT NULL,
  latin_name            text NOT NULL,
  product_type          product_type NOT NULL,
  collections           text[] NOT NULL DEFAULT '{}',   -- skin-and-hair, mind-and-mood, etc.
  status                text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),
  iso_standard          text,                            -- e.g. ISO 3515 — nullable
  process_method        text,
  origin_region         text,
  aroma_profile         text,                            -- essential oils
  texture_profile       text,                            -- botanical oils
  shelf_life_months     integer,
  hs_code               text,                            -- e.g. 3301.29 — customs
  country_of_origin     text NOT NULL DEFAULT 'KE',
  kebs_standard         text,                            -- e.g. KS 2937:2021
  seo_title             text,
  seo_description       text,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX products_status_idx ON products (status);
CREATE INDEX products_collections_idx ON products USING GIN (collections);

CREATE TRIGGER products_set_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE product_variants (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id            uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  sku                   text UNIQUE NOT NULL,
  size_ml               integer NOT NULL CHECK (size_ml > 0),
  bottle_type           text NOT NULL DEFAULT 'amber_dropper'
                        CHECK (bottle_type IN ('amber_dropper', 'pump', 'flip_cap', 'roll_on')),
  -- Pricing in integer cents per currency to avoid floats.
  price_kes_cents       integer NOT NULL CHECK (price_kes_cents >= 0),
  price_usd_cents       integer CHECK (price_usd_cents IS NULL OR price_usd_cents >= 0),
  price_eur_cents       integer CHECK (price_eur_cents IS NULL OR price_eur_cents >= 0),
  cogs_kes_cents        integer CHECK (cogs_kes_cents IS NULL OR cogs_kes_cents >= 0),
  weight_grams          integer NOT NULL DEFAULT 50 CHECK (weight_grams > 0),
  stock_qty             integer NOT NULL DEFAULT 0 CHECK (stock_qty >= 0),
  is_active             boolean NOT NULL DEFAULT true,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX product_variants_product_idx ON product_variants (product_id);
CREATE INDEX product_variants_active_idx  ON product_variants (is_active);

CREATE TRIGGER product_variants_set_updated_at
  BEFORE UPDATE ON product_variants
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE product_images (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id            uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  storage_path          text NOT NULL,                  -- supabase storage path
  alt_text              text NOT NULL,                  -- DESCRIPTIVE alt, not generic
  sort_order            integer NOT NULL DEFAULT 0,
  is_hero               boolean NOT NULL DEFAULT false,
  created_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX product_images_product_idx ON product_images (product_id, sort_order);

-- Long-form marketing copy sourced from Sanity but mirrored here so non-CMS
-- consumers (e.g. .md mirror routes) don't depend on Sanity availability.
CREATE TABLE product_descriptions (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id            uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  section               text NOT NULL CHECK (section IN ('about', 'uses', 'how_made', 'faq', 'farmer_story')),
  body_md               text NOT NULL,
  sort_order            integer NOT NULL DEFAULT 0,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now(),
  UNIQUE (product_id, section, sort_order)
);

CREATE TRIGGER product_descriptions_set_updated_at
  BEFORE UPDATE ON product_descriptions
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Lots — website-side mirror of platform lot codes. Drives the product
-- specs drawer + future /lot/[lot_number] traceability page.
CREATE TABLE lots (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lot_number            text UNIQUE NOT NULL,           -- e.g. LOT-KE-2026-007
  product_id            uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  harvest_date          date,
  distillation_date     date,
  origin_cell           text,                            -- e.g. 'Mt Kenya Cell C3'
  farmer_count          integer,
  total_yield_kg        numeric(12, 3),
  qty_remaining_kg      numeric(12, 3),
  is_published          boolean NOT NULL DEFAULT false,
  evidence_status_overall evidence_status NOT NULL DEFAULT 'pending',
  notes                 text,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX lots_product_idx ON lots (product_id);
CREATE INDEX lots_published_idx ON lots (is_published) WHERE is_published;

CREATE TRIGGER lots_set_updated_at
  BEFORE UPDATE ON lots
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Per-document evidence status for a lot. UNIQUE on (lot_id, doc_type).
CREATE TABLE lot_evidence_status (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lot_id                uuid NOT NULL REFERENCES lots(id) ON DELETE CASCADE,
  doc_type              text NOT NULL CHECK (doc_type IN (
                          'coa_gcms', 'sds', 'ifra', 'allergen', 'pesticide',
                          'heavy_metals', 'microbiology', 'organic',
                          'chain_of_custody', 'phytosanitary', 'tds', 'fame'
                        )),
  status                evidence_status NOT NULL,
  storage_path          text,                            -- private bucket path; null if not yet uploaded
  expires_on            date,
  notes                 text,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lot_id, doc_type)
);

CREATE TRIGGER lot_evidence_status_set_updated_at
  BEFORE UPDATE ON lot_evidence_status
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Chemotype / fatty-acid profiles per lot.
CREATE TABLE chemotype_profiles (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lot_id                uuid NOT NULL REFERENCES lots(id) ON DELETE CASCADE,
  analysis_type         chemotype_analysis_type NOT NULL DEFAULT 'gc_ms_essential_oil',
  iso_compliant         boolean,
  test_date             date,
  lab_name              text,
  raw_coa_storage_path  text,                            -- private bucket only
  notes                 text,
  is_reference_only     boolean NOT NULL DEFAULT false,  -- reference seed rows from Appendix A
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX chemotype_profiles_lot_idx ON chemotype_profiles (lot_id);

CREATE TRIGGER chemotype_profiles_set_updated_at
  BEFORE UPDATE ON chemotype_profiles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE chemotype_markers (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chemotype_profile_id  uuid NOT NULL REFERENCES chemotype_profiles(id) ON DELETE CASCADE,
  compound_name         text NOT NULL,
  percentage            numeric(6, 3),
  iso_min               numeric(6, 3),
  iso_max               numeric(6, 3),
  is_in_spec            boolean,
  sort_order            integer NOT NULL DEFAULT 0,
  created_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX chemotype_markers_profile_idx ON chemotype_markers (chemotype_profile_id, sort_order);

-- Enable RLS on everything in this migration.
ALTER TABLE products              ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants      ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images        ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_descriptions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE lots                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE lot_evidence_status   ENABLE ROW LEVEL SECURITY;
ALTER TABLE chemotype_profiles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE chemotype_markers     ENABLE ROW LEVEL SECURITY;

COMMIT;
