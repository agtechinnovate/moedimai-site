# Moedim / MoedimAI Website Master Plan v3
> CTO + CMO rewrite of `MoedimAI_Master_Plan website_v2.md`
> Updated: 2026-05-17
> Purpose: global recognition, B2B buyer acquisition, B2C sales, and long-term buyer trust.

---

## 0. Executive Thesis

Moedim should not present itself as only an essential-oils ecommerce store, and it should not present itself as only an AI software platform.

The winning global position is:

> **Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.**

That sentence contains the whole business:

- **African smallholder botanicals**: the origin story and defensible supply base.
- **Verified**: lab evidence, certification path, COAs, SDS/MSDS, IFRA, organic records, and audit trails.
- **Traceable**: farmer, plot, cell, harvest, processing run, lot, shipment, and buyer document chain.
- **Buyer-ready ingredients**: the site must convert serious cosmetic, wellness, and ingredient buyers, not just inspire general admiration.

The v2 plan is directionally strong. This v3 keeps its essence:

1. One Next.js application.
2. GEO/LLM-optimized public content.
3. D2C ecommerce.
4. B2B procurement funnel.
5. Authenticated buyer portal.
6. Public lot traceability.
7. Journal/content engine.
8. Admin/CRM workflows.

The major v3 correction is **brand and funnel discipline**. One site can serve multiple audiences, but each audience needs its own door, language, trust proof, and call to action.

---

## 1. Brand Architecture

| Brand layer | Use | Why |
|---|---|---|
| **Moedim** | Public product brand, B2C storefront, packaging, farmer-facing story | Warmer, more human, better for oils and botanicals. |
| **MoedimAI** | Verification engine, traceability platform, buyer portal, intelligence layer | Stronger for B2B trust, procurement, data, and technology credibility. |
| **Moedim Verified** | Trust mark on product pages, lot pages, COA packets, buyer portal | Makes the platform layer visible without making the consumer brand feel too technical. |
| **Jaribu by Moedim** | Farmer recruitment and field program language | Lets the farmer program have its own human identity while staying under the Moedim umbrella. |

Use `Moedim` for consumers, `MoedimAI` for B2B/investor/technical audiences, and `Moedim Verified` when describing traceability, lab evidence, and buyer-facing trust packets.

Avoid leading consumer pages with "AI" as the emotional hook. For B2C buyers, AI can feel synthetic or cold. For B2B buyers, AI is useful only if it strengthens evidence, predictability, and traceability.

---

## 2. Website System

The site remains one Next.js application serving four product surfaces:

1. **Global recognition engine**: public pages optimized for search, AI citation, press, investors, and buyers.
2. **D2C ecommerce**: retail purchase of oils and botanical products.
3. **B2B procurement funnel**: RFQ, sample request, technical documents, buyer qualification.
4. **Authenticated buyer portal**: approved buyers see supply, orders, lot documents, COAs, and shipment history.

The homepage needs an early "choose your path" section:

| Door | CTA | Route |
|---|---|---|
| "I source cosmetic ingredients" | View buyer supply desk | `/buyers` |
| "I want to buy oils" | Shop botanicals | `/shop` |
| "I am an investor or partner" | See company thesis | `/investors` |
| "I am a farmer" | Join Jaribu | `/farmers` |

This prevents the biggest risk in v2: B2B buyers feeling like they landed in a consumer store, or consumers feeling like they landed in a procurement data room.

---

## 3. Unified URL Map

### Public recognition and trust pages

```text
/                              Homepage
/about                         Company, entities, founder, mission
/approach                      Source-to-buyer operating model
/buyers                        B2B procurement landing page
/wholesale                     RFQ and sample-kit funnel
/farmers                       Jaribu farmer recruitment
/investors                     Investor/partner landing page
/team                          Team and partner credibility
/press                         Press kit, coverage, awards
/contact                       Audience-routed contact forms
/journal                       Knowledge and evidence hub
/journal/[slug]                Articles, reports, explainers
```

### Ecommerce

```text
/shop                          Product grid
/shop/[collection]             Collection pages
/shop/product/[slug]           Product pages
/cart                          Cart
/checkout                      Checkout
/checkout/confirmation/[order] Confirmation
/account                       Customer order history
/account/orders/[orderNumber]  Customer order detail
```

### B2B procurement and portal

```text
/buyers                        Procurement story and trust proof
/wholesale                     RFQ form
/b2b/sample-request?token=...  Approved sample purchase
/lot/[lot_number]              Public lot traceability
/portal/login                  Approved buyer magic-link login
/portal/dashboard              Buyer overview
/portal/catalog                Live kg-scale availability
/portal/orders                 Orders
/portal/documents              COA / GC-MS / organic cert / SDS / IFRA docs
/portal/account                Buyer profile and team
```

### Discovery and AI ingestion

```text
/robots.txt
/llms.txt
/llms-full.txt
/sitemap.xml
/sitemap-shop.xml
/sitemap-journal.xml
/sitemap-lots.xml
/*.md mirror routes for all public pages
```

---

## 4. Audience Strategy

### B2B buyers

B2B buyers are the highest-value audience and should get the strongest trust infrastructure.

The site must answer:

- What products are available now or soon?
- What botanical/species name and production method?
- What country, region, and supply volume?
- What certifications or conversion status?
- Which documents are available: COA, GC-MS, SDS/MSDS, IFRA, allergen, pesticide, heavy metals, microbiology, organic evidence?
- What is the MOQ?
- Can I request a sample or speak to someone technical?
- Can I trust the supply chain?

Funnel:

```text
Search / AI answer / LinkedIn / referral
  -> /buyers
  -> product technical page or /wholesale
  -> RFQ
  -> admin approval
  -> sample request link
  -> sample checkout
  -> nurture sequence
  -> buyer portal
  -> quote / PO
```

### B2C buyers

B2C should be trust-led ecommerce, not vague wellness claims. Product pages should emphasize origin, transparency, safe-use guidance, lot-level traceability, and responsible sourcing.

Funnel:

```text
Social / search / journal / referral
  -> product or collection page
  -> trust proof
  -> cart
  -> checkout
  -> post-purchase education
  -> repeat purchase
```

### Investors and partners

The investor/partner path should explain that Moedim is building data and trust infrastructure for African smallholder botanical supply, not just a consumer oil brand.

### Farmers

The farmer path should sit under Jaribu by Moedim and explain recruitment, training, crop programs, inputs, certification support, and offtake without overpromising income.

---

## 5. Page Strategy

### Homepage

Must communicate:

- Moedim's category.
- Buyer-ready African botanicals.
- The verification/trust layer.
- The product/farmer origin.
- The four audience paths.

The homepage should not become a generic hero plus product grid. It needs to function as global positioning, not just retail storefront.

### `/buyers`

Primary B2B conversion page. It should include:

- Current and upcoming products.
- Supply form: essential oils, carrier oils, dried botanicals, hydrosols.
- Trust proof.
- Technical document examples.
- RFQ CTA.
- Sample request CTA.
- Buyer portal preview.

### `/wholesale`

RFQ and sample funnel. It should collect company, contact, country, buyer type, products, target volume, target delivery date, required documents, certification requirements, and notes.

### `/shop/product/[slug]`

Each product page should serve both consumer and buyer needs without confusing them:

- Consumer story and safe-use guidance.
- Botanical and production facts.
- Origin and traceability.
- Evidence status drawer.
- Retail purchase CTA.
- Wholesale/sample CTA.

### `/lot/[lot_number]`

Public traceability page. It should show safe, non-confidential lot proof:

- product
- origin
- processing method
- lot status
- evidence status
- document availability status
- no farmer PII
- no buyer-confidential terms

### `/journal`

The journal is a trust and discovery engine. It should publish buyer-useful, evidence-led content rather than generic brand storytelling.

---

## 6. GEO / AI Citation Strategy

Technical GEO requirements:

- server-rendered HTML
- excellent metadata
- JSON-LD
- `llms.txt`
- `llms-full.txt`
- Markdown mirrors
- crawlable product and evidence pages
- AI-safe summaries
- strong internal linking

Authority requirements:

- original evidence
- real founder and farmer story
- technical product documents
- traceable lots
- high-quality explainers
- clear dates and authorship
- no unsupported claims

AI-citation target queries include:

- "Kenyan rosemary essential oil supplier"
- "African botanical ingredients for cosmetics"
- "traceable essential oils from smallholder farmers"
- "GC-MS tested African essential oils"
- "organic conversion smallholder botanical supply"
- "how to verify essential oil suppliers"

---

## 7. Product And Evidence Strategy

The product system should support all launch SKUs while clearly distinguishing product forms:

| Product form | Evidence emphasis |
|---|---|
| Essential oils | GC-MS, IFRA, SDS/MSDS, allergens, pesticide, heavy metals, microbiology, physical-chemical parameters. |
| Carrier oils | Fatty acid profile, peroxide value, acid value, iodine value, saponification value, tocopherols, mycotoxin where relevant. |
| Dried botanicals | moisture, microbial, pesticide, heavy metals, identity, origin. |
| Hydrosols | microbiology, preservation, pH, storage, SDS/MSDS where relevant. |

The evidence library should separate:

- sample documents
- pending documents
- expired documents
- active lot-specific documents
- not-applicable documents

This protects trust. It is better to show "pending" honestly than imply evidence that does not exist.

---

## 8. Buyer Portal Strategy

The buyer portal should start simple:

- magic-link login
- approved buyer status
- dashboard
- catalog
- documents
- orders
- account/team
- download logging

Do not start by building a giant procurement system. Start with controlled trust and evidence access.

Portal principles:

- noindex
- approved buyers only
- signed document URLs
- no farmer PII
- audit every download
- make document status clear

---

## 9. Analytics And KPI Strategy

Website growth metrics:

- organic visits
- AI referrals
- branded search
- buyer page visits
- product page visits
- journal assisted conversions
- RFQ submissions
- sample requests
- portal logins
- document downloads

B2B CRM metrics:

- RFQs by product
- RFQs by country
- average target volume
- required documents requested
- sample requests approved
- samples paid
- samples delivered
- follow-up status
- quote sent
- PO won/lost
- revenue pipeline

B2C metrics:

- sales by SKU
- repeat purchase rate
- review rate
- average order value
- cart abandonment
- payment success
- delivery success
- refund/replacement rate

---

## 10. Technical Stack

Keep the v2 stack direction:

- Next.js
- Tailwind
- shadcn/ui
- Supabase Postgres/Auth/Storage
- Sanity CMS
- Supabase for commerce, product, order, lot, document, and buyer data
- Stripe for international cards/wallets where supported
- M-Pesa for Kenya
- Shippo/DHL/FedEx/Aramex for international shipping
- Resend for email
- Plausible, PostHog opt-in, Vercel Analytics, Sentry
- Cloudflare for DNS, WAF, cache, bot management, admin access

Recommended decisions:

| Decision | Recommendation |
|---|---|
| CMS | Sanity. |
| Portal auth | Supabase Auth magic links. |
| Stripe entity | Not yet approved; MoedimAI Incorporated is the confirmed public website/privacy entity, while the payment seller-of-record requires legal/accounting approval. |
| eTIMS integrator | Slade360, pending final due diligence. |
| KE fulfillment | Pickup Mtaani + Sendy hybrid. |
| Designer | Use a designer for homepage/product/press visual polish. |

---

## 11. Execution Plan

Phase 1: Recognition spine and B2B lead capture.

Phase 2: B2C storefront.

Phase 3: Buyer trust and portal.

Phase 4: Content and GEO growth engine.

Phase 5: Admin, CRM, and automation.

Developer-ready implementation details for these phases live in:

```text
docs/website/WEBSITE_IMPLEMENTATION_SPRINTS.md
```

Use that file when assigning work to a developer; use this master plan for strategy, positioning, and scope.

---

## 12. Messaging Framework

Short:

> Moedim makes African botanicals traceable, verified, and buyer-ready.

B2B:

> MoedimAI gives cosmetic and fragrance buyers verified African botanical supply backed by traceability, lab evidence, and smallholder certification systems.

B2C:

> Moedim offers Kenyan botanical oils with clear origin, safe-use guidance, and lot-level traceability.

Investor:

> Moedim is building the data and trust infrastructure for African smallholder botanical supply.

Do not lead with:

- "AI-powered essential oil store."
- "African luxury oils" without evidence.
- "Chemical-free" claims.
- Medical benefits.
- Generic poetry above the fold.

Lead with:

- verified African botanicals
- buyer-ready evidence
- traceable lots
- smallholder supply made legible
- Kenyan origin and processing capacity
- technical documents and organic path

---

## 13. Open Decisions

| ID | Decision | Recommendation |
|---|---|---|
| W-A1 | CMS | Sanity. |
| W-A2 | Portal auth | Supabase Auth magic links. |
| W-A3 | Stripe entity | Confirm the payment seller-of-record with accountant/lawyer before checkout; do not infer it from the MoedimAI Incorporated public privacy identity. |
| W-A4 | eTIMS integrator | Slade360 pending final quote and API fit. |
| W-A5 | Fulfillment Kenya | Pickup Mtaani + Sendy hybrid. |
| W-A6 | Press/farmer photography | Commission early; do not rely on stock imagery. |
| W-A7 | Designer | Bring in design help for homepage/product/press templates. |
| W-A8 | B2B lead magnet | Build technical buyer pack before launch. |
| W-A9 | Consumer brand naming | Use Moedim for product brand; MoedimAI for verification/platform. |

---

## 14. CTO/CMO Recommendation

Proceed with the v2 plan, but do not let the build become a "big ecommerce site with AI SEO features." The defensible business is the trust layer.

The public site should make three things unmistakable:

1. Moedim has real African botanical supply.
2. Moedim can prove origin, chemistry, and compliance better than informal suppliers.
3. Buyers and consumers can act immediately: request a quote, request a sample, buy retail, or read the evidence.

The highest-priority launch path is:

```text
Homepage
  -> Buyers
  -> Wholesale RFQ
  -> Sample request
  -> Buyer portal
```

Retail ecommerce matters, but B2B trust is the moat.
