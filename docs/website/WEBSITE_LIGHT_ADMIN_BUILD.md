# Website Light Admin — Build Spec

> Supersedes `/Users/obi/Documents/MoedimAI_Admin_Backend_Build_v1.md` (v1 draft, written before V3 brand and scope discipline).
> **Scope: the website's own light admin only.** Does NOT cover the existing platform admin at `admin.moedimai.com`.
> Companion to [`MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](./MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md), [`WEBSITE_IMPLEMENTATION_SPRINTS.md`](./WEBSITE_IMPLEMENTATION_SPRINTS.md), [`CUSTOMER_JOURNEY_BUILD.md`](./CUSTOMER_JOURNEY_BUILD.md).
> Updated: 2026-05-17

---

## 0. Scope boundary — read this first

There are **two distinct admin surfaces** in the MoedimAI ecosystem. This document covers only the second.

| Admin surface | What it manages | Where it lives | Owned by |
|---|---|---|---|
| **Platform admin** (existing, out of scope here) | Farmer operations, harvest QC, M-Pesa payments TO farmers, ICS, certification workflows, organic conversion clocks, plot/cell/hub management, processing runs, lot creation from harvest, internal supply-chain data | Existing `admin.moedimai.com` per the `moedim-platform` repo | Existing platform team |
| **Website light admin** (this doc) | Product CMS, retail order ops, RFQ workflow, sample request fulfilment, buyer portal management, reviews moderation, journal publishing, marketing audiences, website analytics | `manage.moedimai.com` (locked W0 cleanup) — same Next.js app as the website, served via subdomain routing | Website implementation owner per sprint |

**The website light admin does not absorb platform admin workflows.** Where the website needs farmer or harvest data (e.g. to display a published lot's farmer story), it reads from a public API exposed by the platform — not from the platform admin UI.

If a workflow described below sounds like it belongs in platform admin (e.g. "approve a farmer's organic conversion"), it does not belong here. Surface it back to Codex for routing.

---

## 1. Roles + permissions

Three operator personas for the website light admin:

| Role | Who | What they do |
|---|---|---|
| `admin` | Obi, Vivian (when wearing CTO hat) | Full access. Settings, integrations, role management. |
| `sales` | Vivian, future B2B account managers | Orders, B2B pipeline, marketing audiences, reports. |
| `fulfilment` | Pack + ship operator | Order queue only — mark packed, mark shipped, enter lot references. |

Enforced two ways:
1. Server-side middleware on every `/api/admin/*` route reads `admin_users.role` and rejects.
2. UI hides menu items / buttons per role.

Permissions matrix:

```
Module                    admin   sales   fulfilment
─────────────────────────────────────────────────────
Dashboard                  ✓       ✓       limited
Orders                     ✓       ✓       view + fulfilment only
  mark packed              ✓       ✓       ✓
  mark shipped             ✓       ✓       ✓
  refund                   ✓       ✓       ✗
  retry eTIMS              ✓       ✓       ✗
Customers (retail)         ✓       ✓       ✗
  view PII                 ✓       ✓       ✗
  export                   ✓       ✓       ✗
  delete (DPA request)     ✓       ✗       ✗
B2B pipeline               ✓       ✓       ✗
  approve RFQ              ✓       ✓       ✗
  send communication       ✓       ✓       ✗
Sample requests            ✓       ✓       view + fulfilment only
Inventory (website SKUs)   ✓       ✓       ✗
  create lot record        ✓       ✓       ✗
  publish lot              ✓       ✓       ✗
  adjust stock             ✓       ✓       ✗
Products & content         ✓       ✓       ✗
Marketing audiences        ✓       ✓       ✗
Marketing campaigns        ✓       ✓       ✗
Marketing sequences        ✓       ✓       ✗
Reviews moderation         ✓       ✓       ✗
Reports                    ✓       ✓       limited
Settings                   ✓       ✗       ✗
User management            ✓       ✗       ✗
Integrations               ✓       ✗       ✗
Audit log                  ✓       view    ✗
```

**Lot records here are website-side mirrors,** not the canonical platform lot rows. They reference platform lot codes (e.g. `LOT-KE-2026-007`) but the website admin's role is to attach chemotype/COA artifacts for buyer-facing display, not to manage the underlying lot lifecycle.

---

## 2. Information architecture

Light admin URLs are served from `manage.moedimai.com` (locked in W0 cleanup — see §14.1 for the DNS boundary):

```
/dashboard                    home
/orders
  /[id]                       detail
/customers
  /[id]                       360 view
/b2b
  /pipeline                   Kanban
  /accounts
  /accounts/[id]              account 360
  /rfqs
  /samples
  /tasks
/inventory
  /products
  /products/[id]              editor
  /lots
  /lots/[id]                  lot detail with chemotype attachment
  /stock
/marketing
  /audiences
  /campaigns
  /campaigns/[id]
  /sequences
  /sequences/[id]
  /templates
  /performance
/sms                          (v1.1, not W1-W14)
  /audiences
  /campaigns
  /templates
  /performance
/reviews                      moderation queue
/portal-buyers                approved-buyer account management
  /[id]                       buyer company detail
  /invitations                magic-link invitation queue
/reports
  /sales
  /cohorts
  /marketing
  /b2b-pipeline
  /etims-reconciliation
  /mpesa-reconciliation
/settings
  /shipping
  /tax
  /integrations
  /users
  /audit-log
```

---

## 3. Dashboard

First screen on sign-in. Mobile-responsive.

**Top strip — today (live):**
- Orders count
- GMV in KES
- M-Pesa success rate (last 24h)
- eTIMS success rate (last 24h)
- Failed jobs requiring attention (badge with count)

**Three columns:**

| Column | Content | Driven by |
|---|---|---|
| Action Required | Failed eTIMS retries, M-Pesa reconciliation mismatches, RFQs awaiting approval >24h, low-stock alerts, refund requests, reviews pending moderation | Live queries |
| Recent Activity | Latest 10 events — new orders, paid orders, new RFQs, approved RFQs, sample shipments | `audit_log` filtered to user-visible actions |
| This Week | Revenue chart, top products, RFQ count, sample shipments | Pre-aggregated nightly + live deltas |

Pinned shortcuts: New campaign · New SMS broadcast · Adjust stock · Attach COA to lot.

Built with shadcn/ui card components, `recharts` for the few charts on this screen.

---

## 4. Orders module

### Orders list `/orders`

Filters: status, payment status, date range, county, customer search, order number, lot reference, value range, fulfilment status.

Columns: order number, customer name, county, total KES, status pill, payment status pill, fulfilment status pill, created_at.

Bulk actions (admin/sales): export CSV, bulk add to marketing audience, bulk retry eTIMS.

Saved views: "Awaiting packing", "Shipped today", "Failed eTIMS", "Refund requests".

### Order detail `/orders/[id]`

Two columns. Left = order data. Right = activity timeline + actions.

**Left column sections:**
1. Header — order number, status pills, customer name, total
2. Line items — variant, qty, unit price, snapshot product name + SKU, **lot reference field** (editable until shipped)
3. Customer — name, email, phone (WhatsApp click-to-message), order count + LTV
4. Shipping — full address, county, postal code
5. Payment — M-Pesa receipt, paid_at, processor fee, net revenue
6. eTIMS — KRA invoice number, status, retry count, last error, PDF, retry button
7. Fulfilment — courier, tracking, shipped_at, delivered_at

**Right column:** action buttons in priority order — Mark Packed → Mark Shipped → Retry eTIMS → Refund → Add Note → Send Customer Email. Timeline from `audit_log`.

Mark Packed and Mark Shipped flows: same as prior spec. `order_items.lot_reference` enforced not-null before `shipped` status (DB trigger).

Refund flow (admin/sales only):
- Modal: refund type (full / partial), amount, reason
- M-Pesa B2C reversal via Daraja Transaction Reversal API, OR manual M-Pesa send-money + reconcile
- `INSERT INTO refunds` (`id, order_id, type, amount_kes_cents, reason, mpesa_reversal_id, status, initiated_by, created_at`)
- Trigger `refund_initiated` email
- eTIMS credit note submission via integrator

---

## 5. Retail customer management

### Customers list `/customers`

Filters: county, marketing opt-in, has-purchased, LTV range, last-order-date, total-orders, tags, email search.

Columns: name, email, phone, total orders, LTV (KES), last order, marketing status, tags.

Bulk actions: add to audience, apply tag, export CSV, send manual email, send manual SMS (admin/sales only, requires SMS opt-in).

### Customer 360 `/customers/[id]`

Header: name, email, phone, county, account created date, LTV, total orders, last seen.

Tabs:

| Tab | Content |
|---|---|
| Overview | LTV, AOV, repeat rate, favourite product, last 5 events |
| Orders | All orders, drill into any |
| Addresses | Default + alternates |
| Reviews | Reviews submitted, moderation status |
| Marketing | Opt-in status, consent timestamp, audience memberships, sequence enrolments, email_events + sms_messages |
| Notes | Free-text operator notes |
| Audit | Per-customer audit_log |

Manual actions: one-off email (Resend), one-off SMS (admin/sales only), add tag, add to / remove from audience, enrol in / exit sequence, refund last order, DPA data-deletion request.

**LTV calculation:** `SUM(orders.total_kes_cents)` where `payment_status = 'success'` and `status != 'refunded'`, minus partial refunds. Pre-computed nightly + on-demand refresh.

---

## 6. B2B Client Management — the lightweight CRM

The highest-leverage module. Per V3 §14, B2B trust is the moat. The website light admin's CRM is where Vivian and future B2B account managers run that motion.

### 6.1 Pipeline `/b2b/pipeline`

Kanban view across 7 stages of `rfqs.status`:

```
New      Contacted   Qualified   Sampling   Quoted   Won      Lost
─────    ─────────   ─────────   ────────   ──────   ───      ────
[card]   [card]      [card]      [card]     [card]   [card]   [card]
```

Each card: company name, country flag, top 2 products of interest, estimated annual volume, weighted pipeline value (USD), days in stage, owner avatar.

Drag-and-drop between columns updates `rfqs.status` + writes `audit_log` + `b2b_activities` entry.

Status definitions per `MoedimAI_Customer_Journey_Build_v1.md` (now [`CUSTOMER_JOURNEY_BUILD.md`](./CUSTOMER_JOURNEY_BUILD.md)).

Pipeline value computation: `estimated_annual_volume_kg × internal_target_price_per_kg_usd × stage_weight`. Stage weights: new 5% / contacted 10% / qualified 25% / sampling 40% / quoted 60% / won 100% / lost 0%.

Internal target prices live in `internal_wholesale_targets` (admin-only, never exposed publicly).

### 6.2 B2B accounts list `/b2b/accounts`

Filters: country, approval status, intended use, certifications held, volume band, last-activity date, owner, tags.

Columns: company, country, approval status, total RFQs, total sample orders, current pipeline value, last activity, owner.

### 6.3 B2B account 360 `/b2b/accounts/[id]`

The single most-used screen for the sales role. Three-column desktop layout, single-column mobile.

**Header strip:** Company name, country flag, website link, approval status badge, owner (assignable dropdown), tags, action buttons (Email · Log Call · Schedule Meeting · Add Task · Add Note).

**Column 1 — Company profile (editable inline):** company name, country, website, registration number, contact name/role/email/phone, certifications (multi-select), intended use, intended markets, estimated annual volume, volume band (auto-derived: small <500kg, medium 500-5,000kg, large 5,000-50,000kg, enterprise >50,000kg), internal classification (prospect / strategic / opportunistic / partner), notes (markdown).

**Column 2 — Activity timeline + tasks:**
Unified feed: RFQ submitted, status changes, approval decision, sample request placed / shipped / delivered, email sent, email received (inbound threading), call logged (duration + notes), meeting booked (Calendly webhook), note added, tag changed, stage change, owner change.

Sorted reverse-chronological. Filter by activity type.

Tasks panel: open tasks for this account, due date, assignee, "Add task" button.

**Column 3 — Deal facts + assets:**
Current pipeline stage with indicator, pipeline value (weighted + unweighted), all RFQs, all sample requests, documents (uploaded contracts, NDAs, custom COAs), engagement score (email open rate + reply rate + days since last touch).

### 6.4 Activities / tasks / communications / documents — schema

```sql
b2b_activities (
  id uuid pk,
  b2b_contact_id uuid fk not null,
  activity_type text not null,
  -- 'rfq_submitted' | 'status_change' | 'email_sent' | 'email_received'
  -- | 'call_logged' | 'meeting_scheduled' | 'meeting_held' | 'note_added'
  -- | 'task_completed' | 'document_uploaded' | 'sample_shipped'
  -- | 'sample_delivered' | 'stage_change' | 'tag_change' | 'owner_change'
  subject text,
  body_md text,
  duration_minutes integer,
  related_entity_type text,
  related_entity_id uuid,
  actor_id uuid fk,
  created_at timestamptz default now()
)

b2b_tasks (
  id uuid pk,
  b2b_contact_id uuid fk not null,
  title text not null,
  description text,
  due_date date,
  assignee_id uuid fk,
  priority text default 'normal',
  status text default 'open',
  completed_at timestamptz,
  completed_by uuid fk,
  created_by uuid fk,
  created_at, updated_at
)

b2b_communications (
  id uuid pk,
  b2b_contact_id uuid fk not null,
  direction text not null,             -- 'outbound' | 'inbound'
  channel text not null,               -- 'email' | 'sms' | 'whatsapp' | 'call' | 'meeting' | 'in_app'
  subject text,
  body_text text,
  body_html text,
  attachments jsonb,
  resend_message_id text,
  twilio_message_id text,
  from_address text,
  to_address text,
  cc_addresses text[],
  email_thread_id text,
  sent_at timestamptz,
  received_at timestamptz,
  read_at timestamptz,
  actor_id uuid fk,
  created_at timestamptz default now()
)

b2b_documents (
  id uuid pk,
  b2b_contact_id uuid fk not null,
  doc_type text not null,              -- 'nda' | 'contract' | 'custom_coa' | 'quote' | 'invoice' | 'other'
  filename text not null,
  storage_url text not null,
  size_bytes integer,
  uploaded_by uuid fk,
  notes text,
  created_at
)
```

### 6.5 Send-email-from-admin

Modal: From dropdown (sales@moedimai.com / vivian@moedimai.com), To, Subject, body (rich text + markdown), template picker with merge tags, attachments, schedule.

`POST /api/admin/b2b/[id]/email`:
1. Validate operator role
2. Render template with merge tags
3. Send via Resend with `tags: ['b2b', 'manual', account_id]`
4. `INSERT INTO b2b_communications` direction='outbound'
5. `INSERT INTO b2b_activities` type='email_sent'
6. Resend webhook updates engagement into `email_events`

### 6.6 Receive-email-into-admin

**Reply-to threading via Resend Inbound (per W-B2).** Outbound emails set `reply-to: thread+ACCOUNTID-TOKEN@reply.moedimai.com`. Buyer replies → Resend Inbound parses → token decodes to `b2b_contact_id` + thread → auto-attaches to `b2b_communications`.

Unmatched inbound emails queue for manual triage in an "Unmatched inbox" view.

### 6.7 Calendar / meeting booking

Each operator has a `calendly_url` field on `admin_users` (per W-B8 locked answer: Calendly). Account 360 "Schedule Meeting" button opens Calendly modal with operator's link, prefilled invitee = `contact_email`. Calendly webhook on `invitee.created` → match invitee email to `b2b_contacts` → `INSERT INTO b2b_activities` type `meeting_scheduled`. Marketing sequences pause automatically when a meeting is scheduled (prevents nurture spam during active sales conversation).

---

## 7. Marketing campaign manager

### 7.1 Audiences `/marketing/audiences`

Mirrors Resend audiences. Each: name, slug, source filter (DB predicate), live member count, Resend audience ID.

Default audiences:
- `retail-active` — customers with marketing_opt_in=true and last_order <90 days
- `retail-lapsed` — opted in, no order in 90+ days
- `retail-high-value` — LTV > KES 10,000
- `b2b-prospects` — b2b_contacts where approval_status in (pending, rejected)
- `b2b-approved` — approval_status=approved
- `b2b-customers` — at least 1 won deal
- `coa-downloaders` — coa_downloads with marketing_opt_in=true, no purchase yet
- Per-product: `bought-rosemary`, `bought-leleshwa`, etc.

Custom audiences via query builder UI (predicate stored as JSON, recomputed nightly + on-demand).

### 7.2 Templates `/marketing/templates`

Library: subject, preview text, body (React Email components), merge tags, category (transactional / marketing / sequence), last edited.

CRUD with version history (every save → `template_versions` snapshot).

### 7.3 Campaigns `/marketing/campaigns`

One-off broadcasts. Create flow:
1. Name + objective
2. Audience(s) — select, live member count
3. Optional filter on top of audience
4. Template select or compose
5. Preview with sample recipient
6. Send test to operator's own email
7. Schedule (now / specific UTC / Africa/Nairobi)
8. Review estimated audience + cost
9. Approve and queue

Vercel Cron picks up scheduled campaigns at `scheduled_at`, batches recipients in groups of 100, dispatches via Resend. `campaign_sends` row per recipient with Resend webhook engagement events written to `email_events`.

Failure handling: bounce → mark contact `bounced` + remove from audience. Complaint → hard-stop all future marketing.

### 7.4 Sequences `/marketing/sequences`

Multi-step drip triggered by an event.

Sequences seeded at launch:

| Slug | Trigger | Steps | Audience |
|---|---|---|---|
| `welcome_retail` | First purchase | 4 emails / 14 days | retail-active |
| `first_purchase_followup` | 21d after first delivery | 1 email | retail-active |
| `abandoned_cart` | Cart event no checkout | 3 emails (4h / 24h / 72h) | any opted-in |
| `lapsed_retail_winback` | 90 days no purchase | 2 emails | retail-lapsed |
| `b2b_sample_nurture` | Sample delivered | 4 emails / 30 days | b2b-approved w/ sample |
| `b2b_cold_followup` | RFQ approved + no sample 14d | 2 emails | b2b-approved no sample |
| `coa_downloader_to_rfq` | COA downloaded + no RFQ 7d | 2 emails | coa-downloaders |
| `review_request` | Order delivered + 24h | 1 email | retail-active |

Sequence editor: node-based step builder (linear at launch, branching v1.1). Per step: delay, condition (skip if X), template. Per-step performance (opens, clicks, replies, exits).

Runtime: triggers write to `marketing_sequence_enrolments` with `next_send_at = now() + step_delay`. Vercel Cron every 5 minutes selects rows where `next_send_at <= now()`, advances.

### 7.5 Performance `/marketing/performance`

Per campaign + per sequence: Sent / Delivered / Opened / Clicked / Replied / Unsubscribed / Bounced / Complained. CTR, open rate, conversion rate (sent → purchase or RFQ within 7d attribution window). Revenue attributed via UTM params on every link: `utm_source=resend&utm_medium=email&utm_campaign=[slug]&utm_content=[template]`.

---

## 8. SMS campaign manager (v1.1, deferred)

Per W0, SMS module is deferred to v1.1 (not in W1-W14 sprints). Schema seeded in W2 so it's ready, but UI ships after public launch. Apply for Africa's Talking sender ID `MOEDIMAI` immediately (CA approval is ~2 weeks).

Provider: Africa's Talking primary (KE), Twilio secondary (international). Cost: ~KES 0.80-1.00 per SMS in KE.

**Schema seeded in W2:**

```sql
sms_consent (
  id uuid pk,
  phone text unique not null,
  customer_id uuid fk,
  marketing_opt_in boolean default false,
  transactional_opt_out boolean default false,
  opted_in_at timestamptz,
  opted_out_at timestamptz,
  source text,
  created_at, updated_at
)

sms_messages (
  id uuid pk,
  phone text not null,
  customer_id uuid fk,
  b2b_contact_id uuid fk,
  direction text not null,
  channel text not null default 'sms',
  message_type text not null,
  body text not null,
  template_slug text,
  campaign_id uuid fk,
  at_message_id text,
  status text not null default 'queued',
  cost_kes_cents integer,
  delivery_callback_payload jsonb,
  sent_at timestamptz,
  delivered_at timestamptz,
  created_at
)

sms_templates (
  id uuid pk,
  slug text unique not null,
  category text not null,
  body text not null,
  merge_tags text[],
  active boolean default true,
  created_by uuid fk,
  created_at, updated_at
)

sms_campaigns (
  id uuid pk,
  name text not null,
  template_id uuid fk,
  audience_filter jsonb,
  scheduled_at timestamptz,
  status text default 'draft',
  total_recipients integer,
  delivered_count integer,
  failed_count integer,
  total_cost_kes_cents integer,
  created_by uuid fk,
  approved_by uuid fk,
  created_at, updated_at
)
```

Transactional SMS triggers run from W6 onward (order paid → SMS, shipped → SMS, etc.) via direct Africa's Talking integration. The campaign UI is v1.1.

Marketing SMS budget guardrail: KES 5,000 per campaign requires admin role to approve.

---

## 9. Inventory (website-side)

### 9.1 Products `/inventory/products`

Already covered in Sprint W5 of the implementation sprints. CRUD with image upload, variants, descriptions, collections, Sanity CMS link for long-form content.

### 9.2 Lots `/inventory/lots`

The chemotype moat surfaced for buyers. The lot record here is the website-side mirror; canonical lot rows live in the platform DB.

**List view:** filters by product, harvest date range, status (published / draft), in spec / out of spec. Columns: lot_number, product, harvest_date, distillation_date, origin_cell, yield_kg, qty_remaining (website allocation), published, evidence_status.

**Lot detail `/inventory/lots/[id]`:**
- Header: lot number, product, dates, origin
- Chemotype profile: lab name, test date, COA PDF (upload + view), ISO compliance toggle, marker table editor with drag-and-drop sort, live visualisation preview
- Evidence status: per-document type (COA / GC-MS / SDS-MSDS / IFRA / allergen / pesticide / heavy metals / microbiology / organic / chain-of-custody / phytosanitary) shows status (active / pending / sample / expired / not_applicable)
- Inventory: initial yield (kg), allocated to sample requests, allocated to retail orders, remaining
- Publish toggle (admin/sales only) — flips `is_published`, lot becomes visible on product page + `/lot/[lot_number]`
- Audit log

### 9.3 Stock adjustments `/inventory/stock`

For real-world changes not from sales: breakage, spillage, returns, write-offs, restocks.

```sql
stock_adjustments (
  id uuid pk,
  variant_id uuid fk,
  lot_id uuid fk,
  qty_delta integer not null,
  reason text not null,
  notes text,
  adjusted_by uuid fk,
  created_at
)
```

Trigger writes to `audit_log` and updates `product_variants.stock_qty` + `lots.qty_remaining` atomically.

---

## 10. Reviews moderation

Per W-B13 (hybrid): verified-purchase reviews auto-publish, unverified reviews pre-moderate.

`/reviews` queue:
- Filters: status (pending / published / hidden), product, verified-purchase, date range
- Columns: customer, product, rating, title, body preview, verified badge, created_at, action
- Actions: publish, hide, reply (Resend), flag as spam

`POST /api/admin/reviews/[id]/moderate` updates status + audit log.

---

## 11. Buyer portal management

The portal itself is at `/portal/*` on the public website. The light admin manages who has access.

`/portal-buyers` list:
- Filters: approval status, country, last sign-in, volume band
- Columns: company name, primary contact email, approval status, last sign-in, total orders, total documents downloaded

`/portal-buyers/[id]` (which is the same record as `/b2b/accounts/[id]` — same `b2b_contacts` row, just a different lens):
- Sign-in history
- Document download log (every download is audited)
- Multi-user team management (`b2b_team_members` table)
- Manual magic-link invitation

`/portal-buyers/invitations` queue:
- Pending invitations sent but not yet activated
- Resend invitation, revoke invitation

---

## 12. Reports

Each report: filters + visualisations + CSV export.

| Report | Contents |
|---|---|
| Sales | Revenue by day/week/month/quarter, GMV vs net, orders count, AOV, top products, new vs returning, geographic distribution |
| Cohorts | Acquisition month cohorts, repeat purchase rate, LTV curve |
| Marketing | Per audience / sequence / campaign — engagement, conversion, revenue attributed |
| B2B pipeline | Weighted + unweighted value, stage breakdown, win rate by country / intended use / volume band, time-in-stage, 90-day forecast |
| eTIMS reconciliation | Daily paid orders vs eTIMS submitted vs successful, retry queue depth, monthly export for accountant |
| M-Pesa reconciliation | Daily orders paid vs Safaricom transaction log, mismatches flagged, settlement amount per day |

---

## 13. Settings

`/settings/shipping` — UI for `shipping_zones` + `shipping_rates` (KE Pickup Mtaani + Sendy hybrid per W-A5; international via Shippo per W-B9).
`/settings/tax` — VAT registration status, KRA PIN, eTIMS integrator config.
`/settings/integrations` — API keys + config for Resend, Africa's Talking, Twilio, Slade360 (when locked), M-Pesa Daraja, Stripe, Cloudflare, Calendly per-operator, Sentry, Plausible.
`/settings/users` — invite / 2FA enforcement / disable / audit.
`/settings/audit-log` — full system audit, filterable.

---

## 14. Architecture notes

### 14.1 Codebase relationship to website app

The website light admin lives in the same Next.js app as the website (per W0 §2.1 — `/website` package or new repo). Subdomain routing chooses which route group to render: `manage.moedimai.com` → `(admin)` route group, `www.moedimai.com` → marketing/shop route groups.

**DNS boundary (locked W0):**
- `admin.moedimai.com` — existing platform admin only (farmer ops, QC, harvest, M-Pesa to farmers, ICS, certification, internal supply chain). Out of scope for the website build.
- `manage.moedimai.com` — website light admin (this doc).

No DNS collision. The website build does not touch `admin.moedimai.com`.

### 14.2 Real-time updates

Supabase Realtime for `/orders`, `/b2b/pipeline`, `/admin/etims` retry queue. Toast notification + list refresh on new row.

### 14.3 Search

Cmd+K global search (v1.1) hits a single endpoint searching orders, customers, B2B accounts, RFQs, products via Postgres `tsvector`.

### 14.4 File uploads

Supabase Storage private buckets:
- `product-images` — public via signed URL
- `coa-pdfs` — private, 15-min signed URLs
- `etims-invoices` — private, customer-only signed URLs
- `b2b-documents` — admin-only signed URLs
- `lot-photos` — public

### 14.5 Background jobs (Vercel Cron)

| Job | Frequency | Purpose |
|---|---|---|
| `mpesa-status-poll` | 60s | Resolve pending STK Push timeouts |
| `mpesa-reconcile` | nightly 02:00 EAT | Compare Safaricom log to payments |
| `etims-submit-pending` | 60s | Submit eTIMS for new paid orders |
| `etims-retry-failed` | 5 min | Retry failed invoices with backoff |
| `resend-audience-sync` | 5 min | Push marketing_contacts to Resend |
| `marketing-sequence-tick` | 5 min | Advance enrolments past next_send_at |
| `sms-marketing-tick` | 5 min | Send scheduled SMS marketing (v1.1) |
| `daily-digest-email` | nightly 21:00 EAT | Ops summary to vivian@moedimai.com |
| `low-stock-alert` | hourly | Notify admin when variant <5 units |
| `b2b-stage-stale` | nightly | Flag B2B accounts stuck >X days |
| `ltv-refresh` | nightly | Recompute customer LTV |
| `report-cache-refresh` | hourly | Precompute report aggregates |

---

## 15. Failure modes and manual override paths

For every automated workflow there is a manual operator path:

| Failure | Surface | Manual override |
|---|---|---|
| M-Pesa callback never arrives | Order stays `pending_payment` >5min → admin alert | "Force resolve" in order detail after verifying Safaricom dashboard |
| eTIMS fails 5x | Failed in retry queue → dashboard counter | "Manual invoice" admin form pastes KRA number from integrator dashboard |
| Resend API down | Email events queue locally, admin alert if backlog >100 | Wait, drains automatically |
| Africa's Talking down | SMS queued, status `failed` | Retry job kicks in; manual retry UI |
| Stripe webhook missed | Sample request stays `pending_payment` | Admin marks paid after verifying Stripe Dashboard |
| Cloudflare blocks legit traffic | 403s in Sentry | Admin checks WAF logs + allowlists IP |
| Inbound email parse fails | Unmatched inbox | Operator triages + assigns to account |

Principle: the system never gets stuck because an integration is down. Vivian always has a manual path.

---

## 16. Audit log retention

All admin actions write to `audit_log`. Retention: 7 years (KRA financial record requirement, applied to all admin actions for consistency).

---

## 17. Scope and timing

Per `WEBSITE_IMPLEMENTATION_SPRINTS.md`:

- **W3** — admin auth + role check + dashboard shell
- **W4** — RFQ admin queue + manual approval workflow + technical buyer pack
- **W5** — product CRUD + lot CRUD + evidence-status surfacing
- **W6** — orders queue + manual fulfilment + KE refund flow
- **W7** — international orders + Stripe refund flow
- **W8/W9** — buyer portal account management + magic-link invitation queue
- **W11** — full CRM module: pipeline Kanban, account 360 with activity timeline, tasks, inbound email parsing, marketing campaign builder, sequence editor
- **v1.1 post-W14** — SMS campaign UI, Cmd+K search, advanced reports

What W1-W3 ships of the admin is intentionally minimal: enough to run the soft launch and process the first orders. The full CRM lands in W11.

---

*Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.*
