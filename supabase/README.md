# `website/supabase/` — website database

Migrations + storage policies + RLS tests for the **separate website Supabase project**.

Not the platform admin DB. Per W0 §2.3 and the W2 region decision, this project is a fresh Supabase project in `eu-west-1` (London / Ireland) or `eu-west-2` if `eu-west-1` is unavailable.

## Layout

```
website/supabase/
├── migrations/
│   ├── 0001_init_extensions.sql        pgcrypto, citext
│   ├── 0002_audit_log.sql              append-only audit trail
│   ├── 0003_admin_users.sql            operator identity + current_admin_role()
│   ├── 0004_products_and_lots.sql      products, variants, lots, chemotype, evidence-status enum
│   ├── 0005_marketing_and_consent.sql  marketing_contacts, email_events, sequences, consent_log
│   ├── 0006_rfqs_b2b_contacts.sql      SCHEMA FOUNDATION ONLY — ingestion ships in W4
│   ├── 0007_storage_buckets.sql        7 buckets — only product-images is public
│   ├── 0008_rls_policies.sql           5-role pattern across every table
│   ├── 0009_audit_triggers.sql         business-state change auditing
│   └── 0010_seed_products.sql          13 launch SKUs with honest evidence statuses
└── tests/
    └── rls.sql                          12 RLS proof tests (anon deny, buyer isolation)
```

## Setup (manual — one-off per environment)

1. Create a fresh Supabase project in **eu-west-1** (or eu-west-2 if unavailable). Do **not** reuse the platform admin DB.
2. Note the project URL and anon key — set as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in the website env.
3. Note the service role key — set as `SUPABASE_SERVICE_ROLE_KEY` server-side only.
4. Run migrations:

```bash
# Using psql with the migration role connection string
for f in website/supabase/migrations/0*.sql; do
  echo "Applying $f"
  psql "$WEBSITE_MIGRATION_URL" -v ON_ERROR_STOP=1 -f "$f"
done
```

5. Run the RLS proof tests against the same project:

```bash
psql "$WEBSITE_MIGRATION_URL" -v ON_ERROR_STOP=1 -f website/supabase/tests/rls.sql
# Exit code 0 = all 12 RLS tests passed.
```

## RLS test notes

`tests/rls.sql` exercises the `anon` and `authenticated` Postgres roles that Supabase provides. The tests use `SET LOCAL request.jwt.claim.sub = '<uuid>'` to simulate a logged-in user — this is Supabase's auth.uid() injection. Running these tests against vanilla Postgres without the Supabase auth schema will fail because the roles do not exist. Always run against the actual website Supabase project.

The test script ends with `ROLLBACK` so it leaves the database clean. No fixtures persist.

## What's NOT in W2

- No `customers`, `addresses`, `orders`, `order_items`, `payments`, `etims_invoices` — owned by W6 / W7.
- No `reviews` — owned by W5.
- No `sample_requests*` — owned by W8.
- No `b2b_team_members`, `b2b_orders`, `b2b_activities`, `b2b_tasks`, `b2b_communications`, `b2b_documents` — owned by W8 / W9 / W11.
- No `sms_*` tables — owned by v1.1.
- No `coa_downloads` — owned by W4.

Each owning sprint will add a numbered migration extending this directory.

## PII inventory

See `docs/website/PII_INVENTORY.md` for column-by-column classification, retention rules, and withdrawal-and-deletion procedure.
