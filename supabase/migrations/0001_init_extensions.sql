-- Migration 0001 — initialise required extensions.
-- Target: a freshly provisioned website Supabase project (NOT the platform DB).

BEGIN;

-- UUID generation (pgcrypto provides gen_random_uuid()).
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Citext for case-insensitive email comparisons.
CREATE EXTENSION IF NOT EXISTS citext;

COMMIT;
