# Moedim / MoedimAI Website Implementation Sprints
> Developer-ready sprint breakdown from `MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`
> Updated: 2026-05-17
> Owner: Codex as CTO/CMO scope owner; implementation owner assigned by Obi per sprint.

---

## 0. Program Principle

The website is not just a marketing brochure and not just an ecommerce store.

It is the public trust and conversion system for Moedim:

1. Global recognition and AI/search discoverability.
2. B2B buyer acquisition for cosmetic, fragrance, wellness, and ingredient buyers.
3. B2C ecommerce for oils and botanicals.
4. Buyer-facing traceability, lot evidence, and document access.
5. Investor, press, farmer, and partner credibility.

The core market position remains:

> **Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.**

---

## 1. Technical Starting Assumptions

These are the default implementation assumptions unless Obi changes them before build.

| Area | Decision |
|---|---|
| App structure | Build a dedicated Next.js website app, separate from the current admin platform UI. |
| Public brand | Use `Moedim` for consumer/product pages. |
| Technical trust brand | Use `MoedimAI` for verification, buyer, portal, and platform language. |
| Trust mark | Use `Moedim Verified` for lots, technical docs, COAs, evidence packets, and product proof. |
| Farmer program | Use `Jaribu by Moedim` for farmer-facing recruitment language. |
| CMS | Sanity. |
| Database/Auth | Supabase for website data, portal auth, product/order metadata, RFQs, documents. |
| Portal auth | Supabase magic links. |
| B2C payments | M-Pesa first for Kenya, Stripe for international cards/wallets when entity is ready. |
| Email | Resend for transactional and nurture email. |
| Analytics | Plausible, Vercel Analytics, PostHog opt-in events, Sentry. |
| Hosting | Vercel preferred for Next.js; Cloudflare in front for DNS/WAF/cache. |
| Admin platform | Existing `admin.moedimai.com` remains the operational/admin application. The website may link to it but should not absorb its workflows. |

If the developer needs a branch name in this repo, use:

```text
codex/website-w1-foundation
codex/website-w2-geo-data-foundation
...
```

If this becomes a new repo, use the same sprint names without the repo prefix.

---

## 2. Definition Of Done For Every Website Sprint

Every sprint must include:

- Responsive desktop and mobile layouts.
- Accessibility pass for keyboard navigation, color contrast, labels, and focus states.
- SEO metadata for all public pages touched.
- Structured data where relevant.
- Analytics events for every conversion action.
- Sentry instrumentation for user-facing failures.
- No placeholder stock claims that imply certification, organic status, lab results, or volume not yet proven.
- No medical claims.
- No "chemical-free" claims.
- No public buyer document download without access rules.
- Updated documentation in this folder.
- A short launch/test checklist for Obi.

Every PR should state:

- What audience the sprint serves.
- What conversion it improves.
- What data is captured.
- Which pages were added or changed.
- Which analytics events were added.
- Which items remain intentionally out of scope.

---

## 3. Sprint Map

| Sprint | Business outcome | Can start now? | Main owner |
|---|---|---:|---|
| W0 | Final preflight decisions and content inventory | Yes | Codex/Obi |
| W1 | Website foundation and brand system | Yes | Developer |
| W2 | GEO, CMS, and data foundation | Yes | Developer |
| W3 | Public recognition spine | After W1/W2 | Developer + writer |
| W4 | B2B buyer funnel v1 | After W2 | Developer |
| W5 | Product pages and shop shell | After W2 | Developer |
| W6 | Kenya checkout and transactional emails | After W5 | Developer |
| W7 | International checkout and shipping | After W6 + entity/payment decisions | Developer |
| W8 | Buyer portal foundation | After W2/W4 | Developer |
| W9 | Lot traceability and buyer documents | After W8 + evidence model | Developer |
| W10 | Journal and evidence library | After W2/W3 | Developer + writer |
| W11 | CRM and nurture workflow | After W4/W8 | Developer |
| W12 | Production hardening | After W3-W11 | Developer |
| W13 | Soft launch | After W12 | Obi + developer |
| W14 | Public launch | After W13 | Obi + developer |

---

## Sprint W0 - Website Preflight Decisions

**Goal:** Remove ambiguity so the developer can build without re-litigating the product.

**Branch:** no code branch required, or `codex/website-w0-preflight` if decisions are documented in repo.

### Scope

- Confirm whether the website app is a new repo or a `/website` package in this repo.
- Confirm hosting target: Vercel recommended for the Next.js site.
- Confirm CMS: Sanity recommended.
- Confirm product list for first launch.
- Confirm whether checkout launches with M-Pesa only, Stripe only, or both.
- Confirm whether the first version of buyer portal can use sample/mock technical documents.
- Gather brand assets: logo, colors, typography, product photos, founder photos, farm photos.
- Gather legal basics: entity name, address, privacy policy, terms, refund policy.

### Deliverables

- Final technical setup note.
- Content inventory sheet.
- Product launch list.
- First buyer evidence checklist.
- Open decisions list with owner and deadline.

### Acceptance Criteria

- Developer knows where to build.
- Developer knows the CMS.
- Developer knows which payment provider is first.
- Developer has enough placeholder-safe content to build W1-W4.

### Out Of Scope

- Full brand redesign.
- Full ecommerce implementation.
- Buyer portal implementation.

---

## Sprint W1 - Foundation And Brand System

**Goal:** Create the technical and visual foundation of the website.

**Branch:** `codex/website-w1-foundation`

### Scope

- Scaffold Next.js app.
- Add Tailwind and shadcn/ui.
- Create global layout, navigation, footer, and responsive shell.
- Implement brand tokens for Moedim, MoedimAI, Moedim Verified, and Jaribu.
- Set up base routes:
  - `/`
  - `/buyers`
  - `/shop`
  - `/journal`
  - `/contact`
- Add analytics base:
  - Vercel Analytics
  - Plausible
  - Sentry
  - basic PostHog event wrapper
- Add environment validation.
- Add CI:
  - lint
  - typecheck
  - build
  - basic accessibility check
  - Lighthouse smoke if practical.

### Deliverables

- Running website app.
- Shared layout and navigation.
- Reusable page sections:
  - hero
  - CTA band
  - audience path cards
  - product card
  - trust/evidence card
  - FAQ block
  - quote/testimonial block
- Placeholder-safe content.

### Acceptance Criteria

- Developer can run the app locally.
- Homepage shell loads on mobile and desktop.
- Navigation separates buyers, shop, journal, and contact.
- Build passes.
- No claims about certification or lab results are shown unless marked as sample/coming soon.

### Out Of Scope

- Real checkout.
- Buyer portal auth.
- Final product content.
- Final imagery.

---

## Sprint W2 - GEO, CMS, And Data Foundation

**Goal:** Build the content and data structure that makes the site indexable, citable, and maintainable.

**Branch:** `codex/website-w2-geo-data-foundation`

### Scope

- Add Sanity project and schemas for:
  - pages
  - journal posts
  - products
  - product evidence documents
  - FAQs
  - team members
  - press items
  - buyer resources
- Add Supabase schema for:
  - RFQs
  - B2B contacts
  - buyer companies
  - sample requests
  - product SKUs
  - public lot records
  - document metadata
  - analytics/referrer events if needed.
- Add `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`.
- Add Markdown mirror route pattern for public pages.
- Add JSON-LD helpers for:
  - Organization
  - WebSite
  - Product
  - Article
  - FAQPage
  - BreadcrumbList.
- Seed 13 initial products.

### Deliverables

- CMS models.
- Supabase migrations.
- Seed data.
- GEO utilities.
- Public metadata helpers.

### Acceptance Criteria

- A product can be managed through CMS/data seed.
- Public pages can output HTML metadata, JSON-LD, and Markdown mirror content.
- Sitemaps and LLM files are generated.
- Build passes.

### Out Of Scope

- Checkout.
- Portal login.
- Live RFQ admin workflow.

---

## Sprint W3 - Recognition Spine

**Goal:** Launch the public pages that explain Moedim to the world.

**Branch:** `codex/website-w3-recognition-spine`

### Scope

- Build final page templates for:
  - `/`
  - `/about`
  - `/approach`
  - `/team`
  - `/press`
  - `/contact`
  - `/farmers`
  - `/investors`
- Homepage must route four audiences:
  - ingredient buyers
  - retail consumers
  - investors/partners
  - farmers.
- Add press kit scaffold:
  - company boilerplate
  - founder bio
  - logo downloads
  - media contact
  - fact sheet.
- Add contact routing by audience.

### Deliverables

- Recognition pages.
- Audience-routing homepage.
- Contact forms connected to storage/email.
- Press kit starter.

### Acceptance Criteria

- A buyer understands Moedim in under 60 seconds.
- A consumer can reach the shop path.
- A farmer can reach the Jaribu path.
- An investor can understand the thesis.
- Contact form submissions persist and send notifications.

### Out Of Scope

- Full ecommerce.
- Buyer portal.
- Paid ad landing pages.

---

## Sprint W4 - B2B Buyer Funnel V1

**Goal:** Let a serious buyer request supply, documents, samples, or a quote.

**Branch:** `codex/website-w4-buyer-funnel`

### Scope

- Build `/buyers`.
- Build `/wholesale`.
- Add RFQ form with:
  - company
  - contact
  - country
  - buyer type
  - product interests
  - target volume
  - target delivery date
  - required documents
  - certification requirements
  - notes.
- Add "Request sample" intent capture.
- Add B2B resource download capture.
- Add RFQ confirmation email.
- Add internal notification to Vivian/Obi.
- Add simple admin RFQ list or export.
- Add technical buyer pack placeholder.

### Deliverables

- Buyer funnel pages.
- RFQ backend.
- RFQ storage.
- RFQ emails.
- Basic admin visibility.

### Acceptance Criteria

- Buyer can submit an RFQ.
- RFQ is stored with source page and product interests.
- Obi/Vivian receives notification.
- Buyer receives confirmation.
- Analytics tracks RFQ started, RFQ submitted, resource downloaded, sample requested.

### Out Of Scope

- Fully authenticated buyer portal.
- Automated pricing.
- Auto sample approval.
- PO generation.

---

## Sprint W5 - Product Pages And Shop Shell

**Goal:** Create a credible consumer and buyer-facing product catalog.

**Branch:** `codex/website-w5-products-shop`

### Scope

- Build `/shop`.
- Build collection pages.
- Build `/shop/product/[slug]`.
- Add product detail structure for each SKU:
  - product name
  - botanical name
  - origin
  - production method
  - size options
  - use guidance
  - safety disclaimer
  - buyer technical panel
  - evidence status
  - traceability promise.
- Add "Consumer" and "Wholesale" CTAs on product pages.
- Add product evidence drawer:
  - COA status
  - SDS/MSDS status
  - GC-MS status
  - IFRA status
  - organic status
  - allergen status
  - pesticide/metals/microbiology status.

### Deliverables

- Product catalog.
- Product page template.
- 13 seeded product pages.
- Evidence drawer.

### Acceptance Criteria

- Retail buyer can browse products.
- B2B buyer can understand technical readiness.
- Product pages do not imply unavailable lab evidence.
- Analytics tracks product viewed, wholesale CTA clicked, add-to-cart clicked.

### Out Of Scope

- Payment.
- Inventory automation.
- Live lot-specific availability.

---

## Sprint W6 - Kenya Checkout And Transactional Emails

**Goal:** Let Kenyan retail customers place orders using the first supported payment path.

**Branch:** `codex/website-w6-ke-checkout`

### Scope

- Cart.
- Checkout.
- Customer contact and delivery form.
- M-Pesa payment flow.
- Order confirmation page.
- Order confirmation email.
- Admin order notification.
- Customer account basics if low-risk.
- Basic inventory decrement or order reservation.

### Deliverables

- Working retail cart and checkout.
- M-Pesa payment integration.
- Transactional email.
- Order records.

### Acceptance Criteria

- Customer can add product to cart.
- Customer can complete checkout.
- Payment success creates order.
- Payment failure shows a clear retry state.
- Obi/Vivian can see the order.
- No double-charge or duplicate-order behavior in normal retry path.

### Out Of Scope

- International checkout.
- Complex fulfillment automation.
- Subscriptions.

---

## Sprint W7 - International Checkout And Shipping

**Goal:** Let international customers buy with realistic shipping and payment options.

**Branch:** `codex/website-w7-international-checkout`

### Scope

- Stripe cards/wallets.
- PayPal/wallet support where available.
- International address validation.
- Shipping rates through Shippo or direct carrier APIs.
- DHL/FedEx/Aramex rate support.
- Shipping labels if credentials are ready.
- Tracking email.
- eTIMS integration only if credentials and integrator are ready.

### Deliverables

- International checkout.
- Shipping rate flow.
- Tracking flow.
- Payment webhooks.

### Acceptance Criteria

- International order can be placed in test mode.
- Payment webhook creates a reliable order state.
- Failed payment and failed shipping rate states are clear.
- Fraud/risk notes are captured.

### Out Of Scope

- B2B PO payments.
- Trade finance.
- Automated customs documentation beyond checkout basics.

---

## Sprint W8 - Buyer Portal Foundation

**Goal:** Approved buyers can log in and view a trusted procurement dashboard.

**Branch:** `codex/website-w8-buyer-portal`

### Scope

- `/portal/login`
- `/portal/verify`
- `/portal/dashboard`
- `/portal/catalog`
- `/portal/account`
- Supabase magic-link auth.
- Buyer company/team model.
- Portal route protection.
- Portal noindex.
- Admin approval status for buyer accounts.

### Deliverables

- Buyer portal auth.
- Dashboard shell.
- Catalog shell.
- Account/team page.

### Acceptance Criteria

- Only approved buyers can access portal.
- Unapproved users see a pending-review state.
- Portal pages are noindexed.
- Login events and portal page views are logged.

### Out Of Scope

- Final documents.
- Lot traceability.
- Ordering through portal.

---

## Sprint W9 - Lot Traceability And Buyer Documents

**Goal:** Buyers can review a lot and download controlled technical evidence.

**Branch:** `codex/website-w9-lots-documents`

### Scope

- Public `/lot/[lot_number]`.
- Portal documents.
- Signed document URLs.
- Download audit log.
- Document categories:
  - COA
  - GC-MS
  - SDS/MSDS
  - IFRA statement
  - allergen statement
  - pesticide residue
  - heavy metals
  - microbiology
  - organic evidence
  - chain of custody.
- Public lot page hides confidential buyer and farmer PII.
- Portal view shows fuller evidence for approved buyers.

### Deliverables

- Lot traceability page.
- Document library.
- Signed downloads.
- Access logging.

### Acceptance Criteria

- Public can view basic lot story without sensitive data.
- Approved buyer can download authorized documents.
- Every document download is logged.
- Document status is clear: available, pending, sample, expired, not applicable.

### Out Of Scope

- Automatic lab parsing.
- Legal verification of every standard.
- Buyer-specific price sheets.

---

## Sprint W10 - Journal And Evidence Library

**Goal:** Build the content engine for search, AI citation, buyer education, and global recognition.

**Branch:** `codex/website-w10-journal-evidence`

### Scope

- `/journal`.
- `/journal/[slug]`.
- Evidence library index.
- First 6-10 high-value articles.
- Markdown mirror output.
- Article schema.
- Author schema.
- Internal linking between journal, products, buyers, and evidence.
- Share-of-model query baseline.

### Suggested First Articles

- "How cosmetic buyers verify essential oils before purchase"
- "Why GC-MS is not the same as pesticide testing"
- "Kenyan rosemary oil: buyer evidence checklist"
- "How smallholder traceability works from farmer to lot"
- "Organic conversion for smallholder botanical farms"
- "What a buyer should ask before sourcing African botanicals"

### Deliverables

- Journal system.
- Evidence library.
- First content batch.
- AI/search discoverability scaffolding.

### Acceptance Criteria

- Articles have strong metadata and JSON-LD.
- AI/Markdown mirrors exist.
- Articles link to buyer funnel and product pages.
- Analytics tracks article views and assisted conversions.

### Out Of Scope

- Daily publishing workflow.
- Automated AI content generation.

---

## Sprint W11 - CRM And Nurture

**Goal:** Help Vivian run B2B follow-up without spreadsheet drift.

**Branch:** `codex/website-w11-crm-nurture`

### Scope

- B2B account 360.
- RFQ status pipeline.
- Sample request approval.
- Sample checkout link generation.
- Email sequence templates:
  - RFQ received
  - sample approved
  - sample shipped
  - follow-up after delivery
  - technical docs available
  - quote follow-up.
- Manual email logging.
- Download/contact activity timeline.

### Deliverables

- B2B CRM dashboard.
- Sample approval workflow.
- Nurture email system.
- Activity timeline.

### Acceptance Criteria

- Vivian can see all RFQs and their status.
- Vivian can approve a sample request.
- Buyer receives the right email.
- Activity is recorded against the buyer/company.

### Out Of Scope

- Fully automated sales assistant.
- Contract generation.
- PO/invoice workflow.

---

## Sprint W12 - Production Hardening

**Goal:** Make the site safe, fast, measurable, and launchable.

**Branch:** `codex/website-w12-production-hardening`

### Scope

- Cloudflare DNS/WAF/cache.
- Security headers.
- CSP.
- Rate limiting on forms.
- Bot protection.
- Sentry alert routing.
- Performance pass.
- Accessibility pass.
- Cookie and consent banner if required.
- Privacy policy, terms, refund, shipping, buyer terms.
- Search Console.
- Merchant feed basics.

### Deliverables

- Hardened production setup.
- Legal/policy pages.
- Monitoring.
- Performance/accessibility report.

### Acceptance Criteria

- Core Web Vitals are acceptable.
- Public pages pass basic accessibility checks.
- Forms are protected from obvious spam.
- Sentry and analytics are live.
- Search Console can crawl the site.

### Out Of Scope

- Full SOC2-style controls.
- Advanced personalization.

---

## Sprint W13 - Soft Launch

**Goal:** Test real buyer and consumer flows with a controlled audience.

**Branch:** `codex/website-w13-soft-launch`

### Scope

- Invite-only B2C orders.
- Test RFQs with known buyers.
- Test buyer portal access.
- Test sample request flow.
- Test document downloads.
- Run content QA.
- Run mobile QA.
- Fix launch blockers.
- Daily launch dashboard.

### Deliverables

- Soft-launch report.
- Issue list.
- Priority fixes.
- Launch readiness decision.

### Acceptance Criteria

- Obi can place a test order.
- A test buyer can submit RFQ and access portal.
- At least one test document download logs correctly.
- No critical mobile issues remain.
- No false certification/lab claims remain.

### Out Of Scope

- Public press launch.
- Paid ads at scale.

---

## Sprint W14 - Public Launch

**Goal:** Launch the site publicly with a credible conversion funnel.

**Branch:** `codex/website-w14-public-launch`

### Scope

- Public homepage launch.
- Product launch.
- Buyer landing page launch.
- Press release.
- LinkedIn launch.
- Email launch.
- Search Console submission.
- Sitemap submission.
- AI discovery submission where applicable.
- First 30-day KPI dashboard.

### Deliverables

- Public website.
- Launch campaign.
- Monitoring plan.
- 30-day growth plan.

### Acceptance Criteria

- Site is public and stable.
- Buyer RFQ flow works.
- B2C checkout works for enabled markets.
- Portal works for approved buyers.
- Analytics dashboard is live.
- First post-launch backlog is created.

### Out Of Scope

- Full global ecommerce perfection.
- Full buyer portal automation.
- Full evidence automation.

---

## 4. First Developer Assignment

If Obi wants the developer to start now, assign this:

```text
Sprint W1 - Website Foundation And Brand System

Build a dedicated Next.js website app for Moedim/MoedimAI using Tailwind and shadcn/ui.
Create the responsive app shell, global navigation, footer, brand tokens, and placeholder-safe
routes for homepage, buyers, shop, journal, and contact. Add analytics/Sentry scaffolding,
environment validation, CI checks, and a clean local dev setup.

Do not build checkout, buyer portal, RFQ backend, or final content yet.
```

The developer should read, in this order:

1. `docs/website/MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`
2. `docs/website/WEBSITE_IMPLEMENTATION_SPRINTS.md`
3. Current brand assets from Obi, when provided.

---

## 5. Decisions Needed Before Sprint W2

W1 can start immediately with safe assumptions. Before W2, decide:

| Decision | Needed by | Recommendation |
|---|---|---|
| Website location | W1 start | New dedicated Next.js app/repo, or `/website` package if staying in monorepo. |
| CMS | W2 start | Sanity. |
| Supabase project | W2 start | Separate website Supabase project unless there is a reason to share platform DB. |
| Product launch list | W2 start | Keep 13 SKUs, but mark evidence status clearly. |
| Photography | W3 start | Commission real founder/farm/product photography. |
| Checkout first market | W6 start | Kenya first with M-Pesa; international after Stripe/entity is ready. |
| Buyer docs | W9 start | Start with sample/placeholder-safe documents, then replace with real lab docs. |

---

## 6. What Not To Build Yet

Do not build these until their sprint:

- Full checkout before W6.
- International shipping before W7.
- Buyer portal before W8.
- Signed document downloads before W9.
- CRM automation before W11.
- Paid ad landing pages before the recognition spine and buyer funnel are stable.
- Automated lab parsing before the product evidence model is validated.
- Medical or therapeutic claim pages.
- Any certification claim that is not backed by current documentation.

---

## 7. Management View For Obi

The website should be managed through four dashboards over time:

| Dashboard | Purpose | First sprint |
|---|---|---|
| Growth dashboard | Traffic, SEO, AI referrers, conversion paths | W1/W2 |
| B2B pipeline dashboard | RFQs, samples, quotes, buyer status | W4/W11 |
| Ecommerce dashboard | Orders, revenue, product sales, payment success | W6/W7 |
| Trust/evidence dashboard | Lots, docs, downloads, buyer access | W8/W9 |

The first month should focus on:

1. Getting B2B RFQs captured.
2. Getting product pages credible.
3. Getting buyer evidence organized.
4. Getting retail checkout working only after the trust foundation is clear.
