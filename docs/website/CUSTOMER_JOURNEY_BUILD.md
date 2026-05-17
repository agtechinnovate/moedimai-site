# Customer Journey Build — D2C + B2B Sample

> Supersedes `/Users/obi/Documents/MoedimAI_Customer_Journey_Build_v1.md` (v1 draft).
> Updated for V3 brand architecture: Moedim for consumer, MoedimAI for B2B/platform, Moedim Verified as trust mark, Jaribu by Moedim for farmer recruitment.
> Companion to [`MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](./MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md), [`WEBSITE_IMPLEMENTATION_SPRINTS.md`](./WEBSITE_IMPLEMENTATION_SPRINTS.md), [`WEBSITE_LIGHT_ADMIN_BUILD.md`](./WEBSITE_LIGHT_ADMIN_BUILD.md).
> Updated: 2026-05-17

---

## 0. Brand architecture as it appears in customer-facing copy

Locked per V3 §1 and `WEBSITE_W0_PREFLIGHT.md` §3.

| Customer touchpoint | Brand label used |
|---|---|
| `/`, `/shop`, `/shop/product/[slug]`, cart, checkout, customer order emails, retail packaging | **Moedim** |
| `/buyers`, `/wholesale`, `/about`, `/investors`, `/approach`, `/portal/*`, RFQ confirmations, sample-request emails, technical buyer pack | **MoedimAI** |
| Product trust strip, `/lot/[lot_number]`, evidence-drawer headers, COA cover sheets, buyer-portal documents | **Moedim Verified** |
| `/farmers`, farmer recruitment emails, WhatsApp script | **Jaribu by Moedim** |

**Never:** lead consumer pages with "AI" as the emotional hook. Don't use "MoedimAI" in `/` hero copy. Don't use "Moedim" alone in `/investors` or `/buyers`. Don't use "Jaribu" outside the farmer recruitment surface.

---

## 1. Architecture summary

**Stack** (per V3 §10 + W0):
- Frontend + API: Next.js 14 App Router, TypeScript strict, Tailwind, shadcn/ui
- Database: Supabase Postgres, separate project from platform DB (per W0 §2.3). Region to be selected before W2 after checking Supabase availability, Kenya/admin latency, EU buyer/data needs, and operational simplicity.
- Auth: Supabase Auth — magic link for retail customers, magic link for approved B2B (gated by approval flag), email+password+TOTP for admin
- Payments: M-Pesa Daraja STK Push (KE retail, W6); Stripe Checkout with PayPal Payment Method (international + B2B samples, W7)
- Tax invoicing: KRA eTIMS via Slade360 (recommended, pending due diligence — W-A4)
- Email: Resend with React Email
- Edge / CDN: Cloudflare in front of Vercel — WAF, image polish, edge caching
- Errors: Sentry
- Analytics: Plausible (cookie-less primary), PostHog (opt-in funnel events), Vercel Analytics (CWV)
- CMS: Sanity for journal + product long-form content (per W-A1)
- Shipping: Shippo aggregator → DHL Express / FedEx / Aramex internationally; Pickup Mtaani + Sendy domestically (per W-A5)
- Background jobs: Vercel Cron

**Two journey types in this doc:**
1. **D2C Kenyan retail buyer** — anonymous → purchase → marketing list. M-Pesa rail. KES only at launch. Domestic ship.
2. **Foreign bulk buyer requesting samples** — anonymous → RFQ → admin approval → approved buyer portal → sample order. Stripe rail. International ship. Samples gate-kept; bulk RFQ pipeline is the long game and the moat.

---

## 2. Authentication model

| Audience | Identity | Sign-in | Session | DB role |
|---|---|---|---|---|
| Anonymous visitor | none | none | Plausible event only | `anon` |
| Retail customer (Moedim) | email | Supabase magic link (post-purchase, optional pre-purchase) | JWT, 30-day | `authenticated`, `customers.id = auth.uid()` |
| Approved B2B buyer (MoedimAI) | email | Supabase magic link, gated by `b2b_contacts.approval_status = 'approved'` | JWT, 30-day | `authenticated`, `b2b_contacts.id = auth.uid()` |
| Admin (light admin) | email | Supabase email+password + TOTP | JWT, 8h idle | `authenticated`, role check against `admin_users.role` |

---

## 3. Marketing data model

Brief covered transactional emails. This adds the CRM:

```sql
marketing_contacts (
  id uuid pk,
  email text unique not null,
  phone text,
  full_name text,
  customer_id uuid fk,
  b2b_contact_id uuid fk,
  source text not null,
  -- 'checkout_optin' | 'newsletter' | 'rfq' | 'sample_request' | 'imported' | 'coa_download'
  consent_given_at timestamptz not null,
  consent_method text not null,
  status text not null default 'active',
  -- active | unsubscribed | bounced | complained
  resend_audience_id text,
  tags text[],
  last_engaged_at timestamptz,
  created_at, updated_at
)

email_events (
  id uuid pk,
  contact_id uuid fk,
  email_type text not null,            -- 'transactional' | 'marketing' | 'sequence'
  template text not null,
  resend_message_id text,
  event_type text not null,
  -- 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'complained' | 'unsubscribed'
  payload jsonb,
  created_at timestamptz default now()
)

marketing_sequence_enrolments (
  id uuid pk,
  contact_id uuid fk,
  sequence_slug text not null,
  current_step integer default 0,
  next_send_at timestamptz,
  status text not null default 'active',
  exit_reason text,
  created_at, updated_at
)

b2b_contacts (
  id uuid pk,
  supabase_uid uuid unique,            -- nullable until approved + invited
  company_name text not null,
  company_country text not null,
  contact_name text not null,
  contact_role text,
  email text unique not null,
  phone text,
  website text,
  business_reg_number text,
  certifications text[],
  intended_use text,
  intended_markets text[],
  estimated_annual_volume_kg numeric,
  approval_status text not null default 'pending',
  approval_notes text,
  approved_by uuid fk,
  approved_at timestamptz,
  rejected_at timestamptz,
  first_rfq_id uuid fk,
  portal_invited_at timestamptz,
  portal_first_signin_at timestamptz,
  portal_last_signin_at timestamptz,
  created_at, updated_at
)

b2b_team_members (
  id uuid pk,
  b2b_contact_id uuid fk not null,
  email text unique not null,
  full_name text,
  role text default 'member',           -- 'admin' | 'member' | 'viewer'
  supabase_uid uuid unique,
  invited_at timestamptz,
  first_signin_at timestamptz,
  last_signin_at timestamptz,
  created_at, updated_at
)

sample_requests (
  id uuid pk,
  reference text unique not null,       -- 'SAMPLE-2026-001'
  b2b_contact_id uuid fk not null,
  triggered_by_rfq_id uuid fk,
  status text not null default 'pending_payment',
  -- pending_payment → paid → packing → shipped → delivered → followed_up
  shipping_address jsonb not null,
  oils_requested jsonb not null,        -- [{product_slug, size_ml, qty}]
  sample_fee_cents integer,             -- USD cents (deprecated, see sample_request_items)
  shipping_fee_cents integer not null,
  total_fee_cents integer not null,
  currency text not null default 'USD',
  stripe_payment_intent_id text,
  stripe_charge_id text,
  tracking_carrier text,
  tracking_number text,
  shipped_at timestamptz,
  delivered_at timestamptz,
  lot_references jsonb,                 -- {product_slug: lot_number}
  created_at, updated_at
)

sample_request_items (
  id uuid pk,
  sample_request_id uuid fk,
  product_id uuid fk,
  size_ml integer not null default 5,   -- 5ml samples locked per W0
  qty integer not null default 1,
  unit_fee_usd_cents integer not null default 2500,  -- $25 per bottle per W0
  lot_reference text                    -- populated at packing
)

coa_downloads (
  id uuid pk,
  email text not null,
  company text,
  country text,
  product_slug text not null,
  lot_code text,
  downloaded_at timestamptz default now(),
  ip_country text,
  marketing_opt_in boolean default false
)
```

Resend audiences mirror the segmentation: `retail-active`, `retail-lapsed`, `b2b-prospects`, `b2b-approved`, `b2b-customers`, `coa-downloaders`. Sync direction is Supabase → Resend.

---

## 4. D2C journey — Moedim consumer (Kenya retail buyer)

The full flow from "first visit" to "in the marketing CRM, ready for follow-up."

All consumer-facing copy uses **Moedim** brand. The trust strip on product pages and the lot traceability page reference **Moedim Verified**.

### Step 1 — First visit (anonymous)

**User does:** Lands on `www.moedimai.com` from a search query.

**Frontend:**
- Cloudflare resolves DNS, serves cached homepage at edge if available, else passes through to Vercel
- Next.js renders the homepage SSR-then-cached (60s ISR)
- `next/font` loads Fraunces + Inter with `display: swap`
- Cookie banner appears per V3 §11 — 3-category vanilla, GPC header honored, Consent Mode v2 wired

**Backend:** Nothing. Static page.

**Data captured:**
- Plausible pageview (cookie-less, no PII)
- Cloudflare access log (30-day retention)

**Failure modes:**
- Vercel down → Cloudflare serves stale cache up to 7 days
- Cloudflare down → fallback DNS to Vercel direct

### Step 2 — Browse Moedim shop

**User does:** Clicks the "Shop botanicals" door on the homepage (V3 §2 four-door pattern) → lands on `/shop`.

**Frontend:**
- `/shop` renders 13-product grid SSG with 60s ISR
- Filter chips at top: All / Skin & Hair / Mind & Mood / Breathe & Relief / Carriers / The Rare Collection
- Each card shows: hero image, name, Latin name, short description, price-from in KES, "View" CTA
- Page emits `CollectionPage` + `ItemList` JSON-LD

**Data captured:**
- Plausible event: `shop_viewed`
- Plausible event: `collection_filtered` with `{collection}`

### Step 3 — View a product

**User does:** Clicks a card → `/shop/product/leleshwa`.

**Frontend per V3 §5:**
- Hero photo gallery, product name (Fraunces), Latin name (Fraunces italic), trust strip with Moedim Verified badge + KEBS permit + organic status + Kenya origin
- Size selector (10ml for essential oils, 30ml for botanical/carrier oils)
- Quantity stepper + "Add to Cart" (gold primary CTA) + "Request Bulk Quote" (secondary CTA → opens RFQ drawer pointing at `/wholesale`)
- About-the-oil (Sanity CMS-driven editorial content)
- Technical Specifications drawer, closed by default, labelled "For bulk buyers and formulators"
  - When expanded: lot number, harvest date, distillation date, ISO standard reference, chemotype marker table with horizontal stacked bars (teal for actual value, gold for ISO band), evidence status badges per document type (active / pending / sample / expired / not_applicable per W0 §2.6), COA + SDS + TDS download links, "Request a bulk quote with this spec" CTA
- 8-stage chemotype journey timeline
- Meet-the-farmers section (only if photo consent on file)
- Uses + FAQ accordion (emits `FAQPage` schema)
- Related products

**Backend:**
- Server-rendered with active published lot data joined in
- Page emits `Product` + `Offer` + `BreadcrumbList` + `FAQPage` + `AggregateRating` (when reviews exist) JSON-LD
- `.md` sibling route `/shop/product/leleshwa.md` returns Markdown version for LLM ingestion

**Data captured:**
- `product_viewed` Plausible event
- If specs drawer expanded: `specs_drawer_expanded` event (leading indicator of B2B intent)
- If COA downloaded: `coa_downloaded` event + row in `coa_downloads` if gated by email capture

### Step 4 — Add to cart

**User does:** Picks quantity, clicks "Add to Cart."

**Frontend:**
- Cart state lives in `localStorage` under `moedim:cart:v1`
- Shape: `{ items: [{ variant_id, slug, name, size_ml, price_kes_cents, qty }], updated_at }`
- Toast: "Added to cart. View cart →"
- Cart icon updates count

**Data captured:** `added_to_cart` Plausible event

### Step 5 — Cart review

**User does:** Clicks cart icon → `/cart`.

**Frontend:**
- Reads `localStorage` cart
- Calls `GET /api/cart/validate` with cart contents to refresh prices and stock
- If a variant is out of stock or deactivated, response includes `{ removed: [variant_id], reason }`
- Renders line items + subtotal + shipping estimate ("calculated at checkout") + total
- "Checkout" CTA

### Step 6 — Begin checkout

**User does:** Clicks "Checkout."

**Frontend (`/checkout`, SSR, no cache):**
- Three sections: Contact (email, phone in E.164 with `+254` prefix), Shipping address (line1, line2, city, county, postal code; country locked to KE), Payment (M-Pesa STK Push — only KE retail rail in W6; international payment options activate in W7)
- Marketing opt-in checkbox: "Email me about new oils, farmer stories, and offers from Moedim. Unsubscribe anytime." Unchecked by default per DPA 2019 affirmative consent.
- Sticky order summary on right

**Data captured:** `checkout_started` Plausible event

### Step 7 — Submit checkout

**Frontend:**
- Client-side Zod validation
- `POST /api/checkout` with `{ items, contact, address, marketing_opt_in }`
- Disable button, show spinner

**Backend `POST /api/checkout`:**

1. Server-side Zod validation
2. Re-validate cart against current `product_variants` (price + stock)
3. **Database transaction:**
   - `INSERT INTO customers ON CONFLICT (email) DO UPDATE` — upsert
   - `INSERT INTO addresses` (`is_default = true` if first)
   - Compute shipping: lookup `shipping_rates` by county + total weight in grams (Pickup Mtaani default, Sendy upgrade option)
   - Compute VAT: 16% if Moedim Africa Ltd is VAT-registered; else 0
   - `INSERT INTO orders` with status `pending_payment`, `order_number` from sequence (`MOE-2026-NNNNN`)
   - `INSERT INTO order_items` per line, snapshot price + product name + SKU
   - Reserve stock: `UPDATE product_variants SET stock_qty = stock_qty - qty` (check constraint prevents negative)
4. **If `marketing_opt_in = true`:**
   - `INSERT INTO marketing_contacts ON CONFLICT (email) DO UPDATE` with `source='checkout_optin'`, `consent_method='checkbox_at_checkout'`
   - Tags: `['retail']` plus per-product tags
   - Enqueue Resend audience sync
5. **Initiate M-Pesa STK Push via `lib/mpesa/client.ts`:**
   - Daraja auth token (cached 1h TTL)
   - `STKPush` request: `BusinessShortCode`, `Password`, `Timestamp`, `TransactionType=CustomerPayBillOnline`, `Amount`, `PartyA=phone`, `PartyB=BusinessShortCode`, `PhoneNumber`, `CallBackURL`, `AccountReference=order_number`, `TransactionDesc=order_number`
   - Daraja returns `MerchantRequestID`, `CheckoutRequestID`, `ResponseCode`, `ResponseDescription`, `CustomerMessage`
6. `INSERT INTO payments` with `checkout_request_id`, `phone`, `amount_kes_cents`, `status='pending'`, `initiated_at`
7. Audit log entry
8. Return `{ orderId, orderNumber, checkoutRequestId }` (HTTP 200)

**Failure modes at this step:**
- Stock changed mid-checkout → 409 with revised cart
- Daraja auth fails → 502, retry once then user-facing error
- Daraja STKPush rejects → 400 with explicit error
- DB transaction fails → no row written, no charge

### Step 8 — STK Push pending modal

**User sees:** "Check your phone for the M-Pesa prompt. Enter your PIN to complete the purchase."

**Frontend:**
- Modal with 60s countdown
- Polls `GET /api/orders/[id]/status` every 3 seconds
- Returns: `pending_payment` (keep polling), `paid` (success → redirect), `failed` (retry), `timeout` (retry)

### Step 9 — M-Pesa PIN entry + callback

**User does:** On phone, sees Safaricom STK prompt, enters PIN.

**Backend `POST /api/payments/mpesa-callback`:**

1. Cloudflare IP allowlist check (only Safaricom IP ranges)
2. Parse payload — `ResultCode=0` means success
3. **Idempotency check:** `SELECT FROM payments WHERE checkout_request_id = $1` — if status in (`success`, `failed`), 200 no-op
4. **DB transaction:**
   - Success: `UPDATE payments SET status='success', mpesa_receipt, completed_at, callback_payload`
   - Success: `UPDATE orders SET payment_status='success', status='paid'`
   - Failure: `UPDATE payments SET status='failed', last_error`
   - Failure: `UPDATE orders SET payment_status='failed', status='pending_payment'`; release stock
5. Audit log
6. Return 200 to Safaricom always (otherwise infinite retries)

**If callback never arrives:** Vercel Cron `mpesa-status-poll` every 60s picks up `payments` rows where status='pending' AND `initiated_at < now() - 30s`. Calls Daraja Transaction Status API. After 5 minutes total, marks `timeout`, releases stock.

### Step 10 — Background pipeline on `paid` status

Three workflows fire in parallel:

**10a. eTIMS invoice submission** (Slade360 per W-A4):
- Vercel Cron `etims-submit-pending` every 60s picks up `paid` orders without `etims_invoices.status='success'`
- Builds payload: seller (Moedim Africa Ltd KE entity for KE orders, Moedai LLC for international), buyer, line items, VAT, total
- POSTs to integrator
- Success: stores `kra_invoice_number`, `digital_signature`, `qr_code_data`, `verification_url`; generates PDF via `lib/etims/pdf.ts`, stores in Supabase Storage at `etims-invoices/{orderNumber}.pdf`
- Failure: increments `retry_count`, exponential backoff (1m / 5m / 30m / 2h / 12h). After 5 attempts: `failed`, surfaces in admin retry queue.

**10b. Order confirmation email:**
- Triggered when `etims_invoices.pdf_url` is non-null
- Resend with template `order_confirmation` (Moedim brand, gold "AI" wordmark — wait, no: Moedim consumer brand, no "AI" in consumer email)
- Subject: "Your Moedim order is confirmed"
- Attaches eTIMS invoice PDF
- Records `email_events` `sent` → Resend webhook updates `delivered`, `opened`, `clicked`, `bounced`

**10c. Marketing list sync + welcome sequence enrolment (if opted in):**
- Vercel Cron `resend-audience-sync` every 5min adds contact to `retail-active` audience + per-oil audiences for purchased products
- `INSERT INTO marketing_sequence_enrolments` with `sequence_slug='welcome_retail'`, `next_send_at = now() + 24h`
- Welcome sequence (Moedim brand):
  - Day 1: "Welcome to Moedim. African botanicals, traceable to the lot."
  - Day 3: "How to use your [first oil they bought]"
  - Day 7: "Meet the farmers behind your bottle" (Jaribu by Moedim story link)
  - Day 14: "The Rare Collection — oils only Kenya can grow"

### Step 11 — Confirmation page `/checkout/confirmation/[orderNumber]`

**Frontend (SSR):** order number, line items, total, shipping address, estimated delivery, "We've sent your receipt to [email]. Your KRA-compliant invoice is attached." Track-order CTA → `/account/orders/[orderNumber]`. First-time customer prompt to create an account via magic link.

**Data captured:** `order_confirmed` Plausible event with `{order_id, amount_kes_cents, item_count}`

### Step 12 — Email receipt

**Email template `order_confirmation` (Moedim brand):**
- Moedim wordmark (no "AI" — consumer brand only)
- "Thanks for your order, [first name]."
- Order summary + total in KES
- "Your KRA invoice is attached as a PDF" — eTIMS PDF with QR
- "We're packing your order. You'll hear from us when it ships."
- Footer: legal address, unsubscribe link (marketing only — transactional emails have no unsubscribe per CAN-SPAM/DPA)

### Step 13 — Fulfilment (admin manual)

**Vivian / fulfilment** signs in to website light admin, sees order in queue.

1. `/admin/orders` shows new orders with status `paid`
2. Click order → detail
3. Click "Mark Packing" → status → `packing`, audit log
4. Per line item, enter `lot_reference` (e.g. `LOT-KE-2026-007`) — validated against `lots` table (must exist + be `is_published`)
5. Click "Mark Packed" → `fulfilment_status = packed`
6. Add tracking: courier (Pickup Mtaani / Sendy) + tracking number
7. Click "Mark Shipped" → `status='shipped'`, `fulfilment_status='shipped'`, `shipped_at`
8. Trigger `shipping_notification` email

**Backend trigger validates:** cannot move to `shipped` if any `order_items.lot_reference` is null.

### Step 14 — Shipping notification

Template `shipping_notification` (Moedim brand): "Your Moedim order is on its way." Tracking + ETA + "Reply to this email with questions."

### Step 15 — Delivery

Admin marks delivered (or carrier API webhook in v1.1). `UPDATE orders SET status='delivered', delivered_at`. Trigger `delivery_confirmation` email. 24h delay → `review_request` email.

### Step 16 — Review request

Template `review_request` (24h after delivery): "How are you enjoying your [product]?" Star widget → `/products/[slug]/review?order=[id]&token=[hmac]`. Token = HMAC of `order_id + variant_id + secret`, 30-day expiry.

`POST /api/reviews` validates token, inserts `reviews` row with `is_verified_purchase = true`, `status = 'pending'` for unverified or auto-`published` for verified per W-B13 hybrid policy.

### Step 17 — Marketing follow-up (long tail)

For customers in `marketing_contacts` with `status='active'`:
- Welcome sequence (Step 10c)
- First-purchase follow-up (Day +21): "How did the [product] work for you? Try [related]"
- Lapsed-buyer win-back (Day +90): "We've added 3 new oils. Come see what's new."
- Seasonal campaigns (manual sends from admin)
- Abandoned cart sequence (4h, 24h, 72h after cart abandoned, only if marketing_opt_in=true)

All Vercel-Cron driven. Every marketing email has List-Unsubscribe header (RFC 8058 one-click).

### Step 18 — Data the customer ends up in

After one purchase:

| Table | Rows | Purpose |
|---|---|---|
| `customers` | 1 | Identity for transactional |
| `addresses` | 1+ | Shipping |
| `orders` | 1 | The purchase |
| `order_items` | 1+ | Line items with lot_reference |
| `payments` | 1 | M-Pesa receipt |
| `etims_invoices` | 1 | KRA invoice record |
| `marketing_contacts` | 1 (if opted in) | CRM contact |
| `marketing_sequence_enrolments` | 1+ | Welcome drip |
| `email_events` | many | Every email engagement |
| `reviews` | 0-1 per product | If submitted |
| `audit_log` | many | Change history |

Resend audiences they're in: `retail-active` + per-oil audiences for each product purchased.

---

## 5. B2B journey — MoedimAI / Moedim Verified for foreign bulk buyer

Per V3 §14, B2B trust is the moat. This is the highest-leverage flow.

All B2B-facing copy uses **MoedimAI** for the platform/verification framing and **Moedim Verified** as the trust mark on documents.

Samples are gated: only **approved** businesses can request samples. Approval is manual review by admin within 48 hours per RFQ SLA (W0 §3).

### Step 1 — First visit (anonymous foreign buyer)

Lands on `www.moedimai.com` from B2B-intent query (e.g. "Kenyan Leleshwa oil supplier").

Cloudflare `cf-ipcountry` header is non-KE → homepage shows the "I source cosmetic ingredients" door prominently (V3 four-door pattern). Currency switcher (W7+) defaults to USD or EUR based on country.

**Data captured:** Plausible pageview + country.

### Step 2 — Reaches `/buyers` or `/wholesale`

Per V3 §5 buyer page structure:
- Hero: "Verified African botanicals for cosmetic, fragrance, and wellness buyers."
- Current and upcoming product list (the 13 SKUs in their kg-scale form)
- Supply form: essential oils, carrier oils, dried botanicals, hydrosols (form types per V3 §7)
- Trust proof — Moedim Verified evidence framework
- Technical document examples
- RFQ CTA → `/wholesale`
- Sample request CTA → `/wholesale` (gated)
- Buyer portal preview ("Approved buyers get a dedicated portal at /portal")
- 8-10 FAQ with `FAQPage` schema

**Data captured:** `buyers_viewed`, `wholesale_viewed`.

### Step 3 — Explores product technical drawer (optional but high-intent)

User clicks into `/shop/product/[slug]`, expands the Technical Specifications drawer. Drawer shows the published lot's chemotype with ISO bands AND the document evidence-status panel:

```
Moedim Verified — evidence status for this lot
─────────────────────────────────────────────────
COA (GC-MS chromatogram)         ● Active
SDS / MSDS                       ● Active
IFRA certificate of conformity   ● Active
Allergen statement               ● Active
Pesticide residue panel          ◐ Pending — Q2 2027 lab cycle
Heavy metals panel               ● Active
Microbiology panel               ● Active
Organic conversion evidence      ◐ In conversion — Y2 of 3
Phytosanitary clearance          ○ Per shipment
```

The "Download COA" button is gated by email capture for non-`/wholesale`-page downloads (the `/wholesale` page COA is a marketing asset, ungated):

**Modal:** "Enter your email to download the Moedim Verified COA for lot LOT-KE-2026-007"

`POST /api/coa-download` with `{ email, company, country, product_slug, lot_code }`:
- `INSERT INTO coa_downloads`
- Sign Supabase Storage URL valid 15 minutes
- `INSERT INTO marketing_contacts` with `source='coa_download'`, tags `['b2b', 'prospect']`, status `prospect`
- Does NOT subscribe to marketing unless explicit opt-in checkbox ticked

### Step 4 — Submits RFQ

Returns to `/wholesale`, fills RFQ form per V3 §5 and `WEBSITE_IMPLEMENTATION_SPRINTS.md` W4:

- Company name * + Contact name * + Role/title + Email * + Phone + Country * + Website
- Business registration number (optional, speeds approval)
- Products of interest (multi-select from 13)
- Estimated annual volume in kg
- Desired chemotype spec (free text)
- Intended use (cosmetic_formulation / fragrance / reseller / aromatherapy_brand / food_grade / research / other)
- Intended markets (multi-select country list)
- Certifications held (Ecocert / COSMOS / USDA Organic / ISO 22716 / Sedex / B Corp / other)
- Required documents per shipment (multi-select from V3 §7 evidence taxonomy)
- Timeline (sample_now / first_PO_this_season / next_season / exploring)
- Message *
- How did you hear about us?

**Backend `POST /api/rfq`:**

1. Zod validation
2. Rate limit: 3 per IP per minute
3. **DB transaction:**
   - Generate `reference = RFQ-2026-NNN` from sequence
   - `INSERT INTO b2b_contacts ON CONFLICT (email) DO UPDATE` — first-time `approval_status='pending'`, returning approved companies keep `approved`
   - `INSERT INTO rfqs` with all fields + `b2b_contact_id` + `status='new'`
   - `INSERT INTO marketing_contacts` with `source='rfq'`, tags `['b2b','prospect']`
4. Resend email to `vivian@moedimai.com` + `sales@moedimai.com` with RFQ summary + admin link
5. (No Slack per W0 — email alert is the channel)
6. Resend auto-reply to buyer (template `rfq_received`, MoedimAI brand):
   - "Thank you. We've received your inquiry. Reference: RFQ-2026-NNN."
   - "Our team reviews every inquiry within 48 hours. If approved, you'll receive a sample request link to receive 5ml of each oil you're interested in for evaluation."
   - "Questions? Reply to this email — Vivian."
7. Audit log entry
8. Return 200 with `{ reference }`

**Frontend after submit:** success screen with reference number. `rfq_submitted` Plausible event with `{country, oils_count, volume_kg, intended_use}`.

### Step 5 — Admin reviews RFQ

Per `WEBSITE_LIGHT_ADMIN_BUILD.md` §6.

Vivian or sales sees new RFQ in `/admin/b2b/rfqs`. Approval checklist:
- [ ] Company exists (Google / Companies House / website check)
- [ ] Industry fits (cosmetics / fragrance / personal care / aromatherapy)
- [ ] Volume realistic (not "1kg of everything")
- [ ] Country makes commercial sense (no embargo)
- [ ] No therapeutic / medical claim intent
- [ ] Certifications align (or willing to align)

Three buttons:
- **Approve** — sets `b2b_contacts.approval_status='approved'`, `approved_by`, `approved_at`. Triggers approval email.
- **Hold for info** — sends a custom email asking for more info; status stays `pending`.
- **Reject** — sets `rejected_at`. Triggers polite decline email.

**On Approve backend:**
1. `UPDATE b2b_contacts SET approval_status='approved', approved_by, approved_at`
2. `UPDATE rfqs SET status='approved_for_sample'`
3. Generate Supabase Auth magic-link signup invitation
4. Resend email template `b2b_approved` (MoedimAI + Moedim Verified branding):
   - "Welcome to the MoedimAI buyer program, [contact name]."
   - "Your sample request link: https://www.moedimai.com/b2b/sample-request?token=[hmac]"
   - "This link is valid for 14 days. Each sample is 5ml of essential oil at $25 plus international shipping (~$35-60 to your country)."
   - "Each sample ships with a Moedim Verified evidence packet — COA, SDS, IFRA, and allergen statement for the lot."
   - "After your samples arrive, we'll schedule a 30-minute call to discuss volumes and pricing."
5. Move `marketing_contacts.tags` from `['b2b','prospect']` to `['b2b','approved']`
6. Sync to Resend audience `b2b-approved`
7. Audit log

### Step 6 — Buyer opens sample request link

Frontend `/b2b/sample-request?token=...`:
1. Server validates HMAC token, 14-day expiry
2. Loads `b2b_contact` + original RFQ
3. Renders sample-request page (MoedimAI brand):
   - Header: "Welcome, [contact name] of [company name]."
   - "Choose up to 5 oils for your sample kit. Each 5ml bottle ships with the Moedim Verified evidence packet for the active lot."
   - Multi-select grid of 13 oils with RFQ-interest oils pre-checked
   - Quantity per oil locked at 1 × 5ml
   - International shipping address form (country pre-filled from RFQ)
   - Pricing breakdown: $25 per bottle + Shippo-quoted carrier options (DHL Express recommended)
   - "Pay with credit card" CTA → Stripe Checkout (W7)

**Data captured:** `sample_request_started` Plausible event.

### Step 7 — Buyer pays via Stripe (W7)

Frontend `POST /api/b2b/sample-request` with `{ oils, shipping_address }`:
- Server creates `sample_requests` + `sample_request_items` (one per oil, $25/each at 5ml each)
- Server quotes shipping via Shippo (DHL Express + alternatives)
- Server creates Stripe Checkout Session with line items + selected shipping rate
- Stripe Checkout includes PayPal Payment Method per W-B14
- Returns Stripe Checkout URL

Buyer pays on Stripe-hosted page.

**Backend `POST /api/stripe/webhook`:**
1. Verify Stripe signature
2. On `checkout.session.completed`:
   - `UPDATE sample_requests SET status='paid', stripe_payment_intent_id, stripe_charge_id`
   - Resend `sample_paid_confirmation` email to buyer
   - Resend alert to Vivian: "Sample request RFQ-2026-NNN paid. Pack and ship to [country]."
3. Audit log

### Step 8 — Sample fulfilment

Vivian / fulfilment in `/admin/sample-requests/[id]`:
1. Mark Packing
2. Per oil, enter `lot_reference` (pulled from `lots` where product matches + `is_published`)
3. Pack samples with per-bottle Moedim Verified evidence card (COA cover sheet + SDS + IFRA + allergen) + printed "Welcome to MoedimAI" letter
4. International carrier label via Shippo → DHL Express
5. Mark Shipped → `status='shipped'`, `tracking_carrier`, `tracking_number`, `shipped_at`
6. Resend `sample_shipped` email with tracking link

### Step 9 — Sample arrives

Auto-update via Shippo carrier webhook → `status='delivered'`, `delivered_at`. Resend `sample_delivered` email (MoedimAI brand): "Your Moedim Verified samples have arrived. Take 7 days to evaluate. We'll be in touch."

### Step 10 — Sample follow-up sequence

Vercel-Cron-driven on `marketing_sequence_enrolments` with `sequence_slug='b2b_sample_nurture'`:
- **Day +1 after delivery:** "Your samples landed. Here's how to evaluate them properly." (PDF: evaluation guide)
- **Day +7:** "Ready to discuss volumes? Vivian's Calendly link." (Calendly embed per W-B8)
- **Day +14:** "Quick favor — what worked, what didn't?" (single-question form)
- **Day +30:** segmented by `intended_use`, e.g. "We're running a pilot on Leleshwa for European cosmetics brands. Interested?"

If buyer responds at any point: status moves to `quoted`, admin handles 1:1.

### Step 11 — RFQ pipeline progression

Admin updates `rfqs.status` as deal progresses:
- `approved_for_sample` → `quoted` (formal quote sent)
- `quoted` → `won` (contract signed) or `lost` (no go)
- `won` triggers separate downstream: contract execution, ICS onboarding, lot reservation — handled in platform admin, not website light admin

### Step 12 — Approved buyer signs in to portal

Post-approval, buyer is invited via magic link to `/portal/login` (per `WEBSITE_IMPLEMENTATION_SPRINTS.md` W8). Once authenticated, portal surfaces:
- `/portal/dashboard` — open orders, recent activity, pipeline value
- `/portal/catalog` — live kg-scale availability per crop, current published lots with Moedim Verified chemotype
- `/portal/orders` — historical orders (sample + future bulk POs)
- `/portal/documents` — per-shipment Moedim Verified document bundle (COA, organic cert, GC-MS report, SDS/MSDS, IFRA, allergen, phytosanitary, commercial invoice) — signed-URL downloads, 15-min TTL, every download logged
- `/portal/account` — multi-user team invitations via `b2b_team_members`

All `/portal/*` routes: `noindex, nofollow` per V3 §8.

### Step 13 — Data the B2B contact ends up in

After successful sample shipment:

| Table | Rows | Purpose |
|---|---|---|
| `b2b_contacts` | 1 | Company profile + approval status |
| `b2b_team_members` | 1+ | Individual contacts within company |
| `rfqs` | 1+ | Each RFQ submitted |
| `sample_requests` | 1+ | Each sample order |
| `sample_request_items` | many | Per-bottle pricing + lot reference |
| `coa_downloads` | 0+ | Pre-RFQ downloads |
| `marketing_contacts` | 1 | CRM contact |
| `marketing_sequence_enrolments` | 1+ | B2B nurture |
| `email_events` | many | All emails sent + engagement |
| `b2b_activities` | many | Full activity timeline |
| `audit_log` | many | Change history |

Resend audiences: `b2b-approved` plus tags by `intended_use`, `country`, `volume_band`.

---

## 6. Cross-cutting concerns

### 6.1 Marketing consent and compliance (DPA 2019 + GDPR)

- All marketing emails require affirmative opt-in (unchecked default)
- Double-opt-in for newsletter signups from outside a transaction (`/contact`, footer signup)
- Every marketing email: List-Unsubscribe header (RFC 8058) + visible unsubscribe link
- `marketing_contacts.consent_given_at`, `consent_method`, `status` = audit trail
- DPA deletion request: `DELETE /api/account/me` anonymises `orders.customer_id = null` while keeping order rows for KRA 7-year requirement
- ODPC data controller registration must be live before any marketing email

### 6.2 Transactional vs marketing email separation

- **Transactional** (order confirmation, shipping, eTIMS invoice, sample shipped) — sent regardless of marketing opt-in. No unsubscribe link.
- **Marketing** (welcome sequence, win-back, campaigns, abandoned cart) — only if `marketing_opt_in=true`. Always has unsubscribe.

`email_events.email_type` field separates these for reporting.

### 6.3 PII and encryption

- KRA PIN (optional B2B invoice): encrypted at rest via pgcrypto AES-256
- Phone: plaintext (required for M-Pesa), RLS gates access
- Email: plaintext (required for Resend), RLS gates access
- Stripe card data: never touches our servers (Stripe Checkout hosted)
- All Supabase Storage objects: private buckets with signed URLs, 15-min TTL

### 6.4 Idempotency

- M-Pesa callbacks: idempotent on `checkout_request_id`
- Stripe webhooks: idempotent on `stripe_event_id` (stored in `webhook_events`)
- eTIMS submissions: idempotent on `order_id` (one invoice per order)
- Email sends: idempotent on `(template, contact_id, sequence_step)`

### 6.5 Rate limiting

- Cloudflare edge: 100 req/min per IP for `*`
- Middleware: 5/min on `/api/checkout`, 3/min on `/api/rfq`, 100/min on `/api/payments/mpesa-callback` (Safaricom IP allowlist)
- Stripe webhook: no rate limit (signature verified)

### 6.6 Observability

Every step emits:
- Sentry breadcrumbs on failures
- Plausible event on user-visible state transitions
- Supabase `audit_log` row on every business-state mutation
- Vercel logs (7-day retention)
- Cloudflare logs (30-day retention)

Nightly Vercel Cron assembles a digest email to `vivian@moedimai.com`:
- New orders, GMV, M-Pesa success rate, eTIMS success rate, Sentry error count
- New RFQs, pending RFQs >24h, approved RFQs awaiting sample request
- Sample requests in fulfilment
- Marketing sequence health

(No Slack per W0.)

---

## 7. What an incoming developer reads first

1. [`MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](./MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md) — strategy + positioning
2. [`WEBSITE_IMPLEMENTATION_SPRINTS.md`](./WEBSITE_IMPLEMENTATION_SPRINTS.md) — sprint plan
3. [`WEBSITE_W0_PREFLIGHT.md`](./WEBSITE_W0_PREFLIGHT.md) — locked decisions
4. [`WEBSITE_OPEN_DECISIONS.md`](./WEBSITE_OPEN_DECISIONS.md) — outstanding decisions
5. This doc — customer journey deep-dive
6. [`WEBSITE_LIGHT_ADMIN_BUILD.md`](./WEBSITE_LIGHT_ADMIN_BUILD.md) — operator-side deep-dive

---

*Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.*
