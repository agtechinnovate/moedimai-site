# PII Inventory — Website Database

> Sprint W2 close-gate artefact per `WEBSITE_OPEN_DECISIONS.md` security gate.
> Classifies every column in the website Supabase project that holds personal,
> business-sensitive, or regulated data. Every row is justified — fields without
> a load-bearing reason should not be stored.

**Scope:** the **website** Supabase project only. The platform DB (existing
`admin.moedimai.com` backing store) has its own PII inventory tracked
separately in the platform repo.

**Classification scale:**

| Class | Meaning | Example |
|---|---|---|
| PII-1 | Direct personal identifier | full name, email, phone, government ID |
| PII-2 | Indirect / linkable personal data | IP address, user agent, anonymous visitor ID |
| Business | Company-confidential or commercially sensitive | RFQ volume, internal target price |
| Public | Already public or intentionally publishable | product name, ISO standard |
| Audit | System / audit metadata | timestamps, action types, actor ids |

**Retention defaults:**

- Tax / KRA records: 7 years (regulatory).
- Marketing consent: kept active until withdrawn; withdrawal logged.
- Audit log: 7 years.
- Anonymous consent records (`consent_log`): 2 years for analytical comparison.

---

## Tables shipping in W2 (live)

### `admin_users` — website operators

| Column | Class | Justification | Retention |
|---|---|---|---|
| `id` | Audit | Surrogate key | While account exists |
| `supabase_uid` | PII-2 | Links to auth.users for session | While account exists |
| `email` | PII-1 | Sign-in identity | While account exists |
| `full_name` | PII-1 | UI display | While account exists |
| `role` | Business | Authorization decisions | While account exists |
| `calendly_url` | PII-2 | Optional B2B follow-up | While account exists |
| `is_active` / `totp_required` / `notes` | Audit | Operational metadata | While account exists |

### `products`, `product_variants`, `product_images`, `product_descriptions`

| Column | Class | Notes |
|---|---|---|
| All | Public | Product catalogue intended to be public. `cogs_kes_cents` on variants is **Business** and admin-only via RLS. |

### `lots`, `lot_evidence_status`

| Column | Class | Notes |
|---|---|---|
| `lot_number`, `harvest_date`, `distillation_date` | Public when `is_published = true` | Buyer-facing lot identity |
| `origin_cell` | Business | Coarse region only; never specific farm GPS |
| `farmer_count`, `total_yield_kg` | Business | Aggregate; no farmer identity disclosed |
| `qty_remaining_kg` | Business | Internal inventory |
| `notes` | Business | Internal commentary |
| `evidence_status_overall`, per-doc `status` | Public when lot published | Honest evidence state |
| `storage_path` | Business | Reference to private bucket asset |

### `chemotype_profiles`, `chemotype_markers`

| Column | Class | Notes |
|---|---|---|
| `analysis_type`, `compound_name`, `percentage`, `iso_min`, `iso_max` | Public when lot published | The moat |
| `lab_name`, `test_date`, `raw_coa_storage_path` | Business | Lab partner identity; raw COA path |
| `is_reference_only`, `notes` | Audit | Internal QA |

### `marketing_contacts`

| Column | Class | Justification | Retention |
|---|---|---|---|
| `email` | PII-1 | Newsletter delivery — load-bearing | Until unsubscribe + 30 days |
| `phone` | PII-1 | SMS marketing (v1.1) — load-bearing if opted in | Until unsubscribe + 30 days |
| `full_name` | PII-1 | Personalisation in emails | Until unsubscribe + 30 days |
| `source`, `tags`, `status` | Business | Segmentation | Until unsubscribe + 30 days |
| `consent_given_at` | Audit | DPA 2019 / GDPR proof | Permanent (compliance) |
| `consent_method`, `consent_ip`, `consent_user_agent` | PII-2 | Audit trail for consent. IP retained 90 days only. | 90 days for IP / UA, indefinite for method |
| `resend_audience_id` | Business | Provider link | While active |
| `last_engaged_at`, `unsubscribed_at` | Audit | Lifecycle | Permanent |

### `email_events`

| Column | Class | Notes |
|---|---|---|
| `contact_id` | PII-2 (linkable) | Joins to marketing_contacts |
| `template`, `event_type`, `payload` | Audit | Engagement record. Payload may contain message content snippets — admin-only via RLS. |
| `resend_message_id` | Business | Provider link |

### `marketing_sequence_enrolments`

| Column | Class | Notes |
|---|---|---|
| `contact_id` | PII-2 | Joins to marketing_contacts |
| `sequence_slug`, `current_step`, `next_send_at`, `status` | Audit | Drip state |
| `exit_reason` | Audit | Compliance + ops |

### `consent_log`

| Column | Class | Justification | Retention |
|---|---|---|---|
| `visitor_anon_id` | PII-2 | Random cookie-banner ID. Not linkable without the cookie. | 2 years |
| `contact_id` | PII-2 | Optional join when contact identifies later | 2 years |
| `consent_categories` | Audit | DPA / GDPR proof | 2 years |
| `user_agent`, `ip_country` | PII-2 | Aggregated demographics only; **no IP address stored** | 2 years |
| `gpc_signal` | Audit | Global Privacy Control evidence | 2 years |

### `audit_log`

| Column | Class | Notes |
|---|---|---|
| `actor_id`, `actor_email`, `actor_role` | PII-1 / Audit | Snapshot at action time |
| `before`, `after` (jsonb) | Mixed | May contain PII depending on the entity changed. Admin-only via RLS. |
| `ip_address`, `user_agent` | PII-2 | 90-day retention via scheduled cleanup (W12) |
| `action`, `entity_type`, `entity_id`, `created_at` | Audit | Standard audit metadata |

---

## Tables shipping in W2 as **schema foundation only** (no live endpoint)

These tables exist in W2 so the shape is stable. No live `/api/*` endpoint
writes to them in W2. Ingestion arrives in the owning sprint.

### `b2b_contacts` — owning sprint **W4**

| Column | Class | Justification | Retention |
|---|---|---|---|
| `email`, `contact_name`, `phone` | PII-1 | Required for B2B engagement | Until contact withdraws + 7 years (commercial record) |
| `company_name`, `company_country`, `business_reg_number`, `website` | Business | Approval review | Same |
| `certifications`, `intended_use`, `intended_markets`, `estimated_annual_volume_kg` | Business | Pipeline qualification | Same |
| `approval_status`, `approval_notes`, `approved_by`, `approved_at`, `rejected_at` | Audit | Decision record | Same |
| `portal_*_at` | Audit | Portal sign-in lifecycle | Same |
| `supabase_uid` | PII-2 | Auth linkage | Same |

### `rfqs` — owning sprint **W4**

| Column | Class | Notes |
|---|---|---|
| `reference`, `status`, `assigned_to` | Audit | Pipeline metadata |
| `oils_of_interest`, `target_volume_kg`, `desired_chemotype_spec`, `intended_use`, `required_*`, `timeline`, `heard_about_us`, `message` | Business | RFQ content |
| `b2b_contact_id` | PII-2 | Joins to b2b_contacts |

### `internal_wholesale_targets` — owning sprint **W11**

| Column | Class | Notes |
|---|---|---|
| `target_price_usd_cents` | Business (Restricted) | Internal pipeline valuation only. Never exposed publicly. Admin-only via RLS. |
| `effective_from`, `effective_to`, `notes` | Business | Pricing strategy notes |
| `created_by` | Audit | Action attribution |

---

## Storage buckets

All private by default. Only `product-images` is public.

| Bucket | Public? | Class of contents | Access path |
|---|---|---|---|
| `product-images` | Yes | Public (Brand) | Direct fetch |
| `lot-photos` | **No** | Business (per-lot, may include identity cues) | Admin direct read; signed URL for approved buyer (W9) |
| `farm-photos` | **No** | PII-1 (farmer identity visible) | Admin direct read; **never** public without explicit per-photo consent |
| `coa-pdfs` | **No** | Business (lab evidence) | Signed URL 15-min TTL for approved buyer (W9) |
| `etims-invoices` | **No** | PII-1 + Business (customer name, KRA number, line items) | Signed URL for the customer who owns the order (W6+) |
| `b2b-documents` | **No** | Business (contracts, NDAs, custom COAs) | Admin direct read; signed URL for approved buyer (W11) |
| `evidence-packets` | **No** | Business (full evidence bundles) | Signed URL for approved buyer (W9) |

---

## Server-only secrets

These never appear in client code. Validated via `lib/env.ts` `getServerEnv()`
which throws if accessed in browser context.

| Variable | Purpose | Where used |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Bypasses RLS for trusted server work | API routes, Vercel Cron jobs |
| `SANITY_API_READ_TOKEN` | Reads Sanity drafts | Preview routes (W10+) |
| `SANITY_WEBHOOK_SECRET` | Verifies Sanity revalidation webhooks | Revalidation route (W10+) |

The CI build fails if any of these appear in the client bundle. The guard
is implemented in `website/scripts/check-client-secrets.sh`, wired into
`.github/workflows/website-ci.yml` as the step **"Verify no server-only
secrets in client bundle"**, and runnable locally via
`npm run check:client-secrets` after `npm run build`. The grep scans
`.next/static/**` (the client-shipped output) for the literal env var
names listed above. `.next/server/**` is intentionally not checked since
server bundles legitimately reference these vars.

---

## Withdrawal and deletion

A customer or buyer can request data deletion via `vivian@moedimai.com`.
The handler (manual at W2, automated in W12):

1. Identifies all rows in this inventory containing the subject's PII-1 data.
2. For order/invoice records subject to KRA 7-year retention: anonymises
   PII-1 fields (`customer.email → null`, name → 'redacted') while keeping
   the row.
3. For non-regulated records (marketing contact, RFQ where applicable):
   hard-deletes the row.
4. Records a `data_deletion_request` audit entry with subject, requested-at,
   completed-at, and the row ids touched.

---

## Open items for W3+

- **W6** adds `customers`, `addresses`, `orders`, `order_items`, `payments`,
  `etims_invoices`. KRA PIN field on customers will be encrypted at rest
  via `pgcrypto` (`pgp_sym_encrypt(value, key)` with a key from
  `SUPABASE_SERVICE_ROLE_KEY`-adjacent secret).
- **W8** adds `b2b_team_members`, `b2b_orders`. PII handling identical to
  the W2 schema-only fields.
- **W11** adds `b2b_activities`, `b2b_communications`, `b2b_documents`.
  Email body content (PII-mixed) admin-only via RLS; inbound emails parsed
  by Resend Inbound never expose third-party PII to the public surface.
- **v1.1** adds `sms_consent`, `sms_messages`. Same consent / withdrawal
  pattern as email.

This inventory is extended sprint-by-sprint. Each new sprint's PR must
update this file as part of the close-gate checklist.
