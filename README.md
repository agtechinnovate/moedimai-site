# Moedim / MoedimAI Website

Sprint **W2: GEO, CMS, and data foundation** (current).
Previous sprint: W1 — Foundation and brand system (merged).

Dedicated Next.js 14 App Router app for the Moedim / MoedimAI public site. This repository is the dedicated public website repo.

This is the _website_ app — distinct from the existing platform admin at `admin.moedimai.com` (which manages farmer ops, QC, harvest, M-Pesa to farmers, ICS, and certification).

| Surface                                          | URL                                          | Owner                                   |
| ------------------------------------------------ | -------------------------------------------- | --------------------------------------- |
| Public website (this app)                        | `www.moedimai.com`                           | Website implementation owner per sprint |
| Website light admin (this app, subdomain routed) | `manage.moedimai.com` (added in Sprints W3+) | Website implementation owner            |
| Platform admin (existing, separate codebase)     | `admin.moedimai.com`                         | Existing platform team                  |

---

## What shipped in W1

- Next.js 14 App Router + TypeScript strict
- Tailwind CSS with brand tokens for the four V3 brand layers
- shadcn/ui base config + `Button` primitive
- Global layout, navigation, footer
- Five placeholder-safe routes: `/`, `/buyers`, `/shop`, `/journal`, `/contact`
- Analytics scaffolding: Vercel Analytics, Plausible (`next-plausible`), PostHog stub, Sentry stub
- Zod-typed env validation
- ESLint + Prettier + tsc + Next build in CI

## What ships in W2

- **Sanity CMS layer** — `sanity/` directory with 8 schema types (page, journalPost, product, evidenceDocument, faq, teamMember, pressItem, buyerResource) + Sanity client + image URL builder + Studio config (`sanity.config.ts`)
- **Website Supabase project schema foundation** — 10 numbered migrations in `supabase/migrations/` covering admin_users, products + variants + images + descriptions, lots + chemotype + per-document evidence status, marketing CRM + email events + sequence enrolments + cookie consent log, RFQs + B2B contacts (schema only), internal pipeline targets, append-only audit log, 7 storage buckets, RLS policies, audit triggers
- **GEO + search files** — dynamic `app/robots.ts` (16 AI crawlers allowlisted), dynamic `app/sitemap.ts`, static `public/llms.txt` + `public/llms-full.txt`
- **Markdown mirror routes** — `/buyers.md`, `/shop.md`, `/journal.md`, `/contact.md` for direct LLM ingestion
- **JSON-LD helpers** — `lib/schema/` for Organization, WebSite, Product, Article, FAQPage, BreadcrumbList. Organization + WebSite emitted on every page via root layout.
- **13 launch products seeded** — all SKUs in Supabase with honest evidence status (`pending` for every doc type at W2; flips to `active` lot-by-lot in W9)
- **RLS proof tests** — 12 tests in `supabase/tests/rls.sql` covering anon-deny, draft-deny, buyer-isolation, consent-log-insert
- **PII inventory** — `docs/website/PII_INVENTORY.md` classifies every column

## What does **not** ship in W2

- Checkout (W6 Kenya / W7 international)
- Buyer portal login (W8) — `b2b_contacts` is schema-only; auth-flow integration is W8
- Live RFQ admin workflow (W4) — `rfqs` is schema-only; no `/api/rfq` endpoint
- Sample checkout (W8)
- Order fulfilment (W6+)
- eTIMS workflow (W6)
- Website light admin UI (W3+)
- Recognition spine pages (W3): `/about`, `/approach`, `/team`, `/press`, `/farmers`, `/investors`
- Wholesale page UI (W4): `/wholesale`
- Lot traceability page (W9): `/lot/[lot_number]`
- Journal posts and product pages (W5 / W10)
- Final photography (commissioned during W0–W2, lands in W3)

---

## Local development

Prerequisites: Node 18.17+; Node 20 is recommended for parity with CI.

```bash
cp .env.example .env.local      # optional; all env values default safely
npm install
npm run dev                     # http://localhost:3000
```

Other scripts:

```bash
npm run lint                    # ESLint, no warnings allowed
npm run typecheck               # tsc --noEmit
npm run build                   # next build
npm run format                  # prettier --write
npm run format:check            # prettier --check
npm run check:client-secrets    # fail if a server-only env reference
                                # leaked into .next/static/ (run after build)
```

---

## Directory layout

```
├── app/
│   ├── (root layout, globals.css)
│   ├── page.tsx                # homepage with four-door pattern
│   ├── buyers/page.tsx
│   ├── shop/page.tsx
│   ├── journal/page.tsx
│   ├── contact/page.tsx
│   ├── buyers.md/route.ts      # Markdown mirror routes (W2)
│   ├── shop.md/route.ts
│   ├── journal.md/route.ts
│   ├── contact.md/route.ts
│   ├── robots.ts               # dynamic robots with AI allowlist (W2)
│   └── sitemap.ts              # dynamic sitemap (W2)
├── components/
│   ├── analytics/providers.tsx
│   ├── layout/
│   │   ├── brand-mark.tsx
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   ├── env.ts                   # publicEnv + getServerEnv() (W2 split)
│   ├── md-mirror.ts             # Markdown mirror utility (W2)
│   ├── schema/                  # JSON-LD helpers (W2)
│   │   ├── index.ts
│   │   ├── schema-component.tsx
│   │   ├── global.ts            # Organization + WebSite
│   │   ├── breadcrumb.ts
│   │   ├── faq.ts
│   │   ├── product.ts
│   │   └── article.ts
│   └── utils.ts
├── sanity/                      # CMS layer (W2)
│   ├── env.ts
│   ├── lib/
│   │   ├── client.ts
│   │   └── image.ts
│   └── schemas/
│       ├── index.ts
│       ├── page.ts
│       ├── journal-post.ts
│       ├── product.ts
│       ├── evidence-document.ts
│       ├── faq.ts
│       ├── team-member.ts
│       ├── press-item.ts
│       └── buyer-resource.ts
├── supabase/                    # Website Supabase project (W2)
│   ├── README.md
│   ├── migrations/
│   │   ├── 0001_init_extensions.sql
│   │   ├── 0002_audit_log.sql
│   │   ├── 0003_admin_users.sql
│   │   ├── 0004_products_and_lots.sql
│   │   ├── 0005_marketing_and_consent.sql
│   │   ├── 0006_rfqs_b2b_contacts.sql
│   │   ├── 0007_storage_buckets.sql
│   │   ├── 0008_rls_policies.sql
│   │   ├── 0009_audit_triggers.sql
│   │   └── 0010_seed_products.sql
│   └── tests/
│       └── rls.sql              # 12 RLS proof tests
├── public/
│   ├── llms.txt                 # AI navigation file (W2)
│   └── llms-full.txt            # Full marketing prose for LLM ingestion (W2)
├── sanity.config.ts             # Sanity Studio config (W2)
├── sentry.client.config.ts
├── sentry.server.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
├── components.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── .env.example
└── package.json
```

---

## Brand discipline

Per V3 §1 and the W0 preflight:

- **Moedim** — consumer / product surface (`/`, `/shop`, retail emails, packaging)
- **MoedimAI** — B2B / verification / platform (`/buyers`, `/wholesale` (W4+), `/portal/*` (W8+), `/about`, `/investors`)
- **Moedim Verified** — trust mark on lots, COA bundles, evidence packets
- **Jaribu by Moedim** — farmer recruitment (`/farmers` in W3)

Use the `<BrandMark surface="…" />` component rather than hardcoding wordmark colours. Don't lead consumer pages with "AI". Don't use brand poetry above the fold.

---

## CI

`.github/workflows/website-ci.yml` runs on PRs and pushes to main:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. `./scripts/check-client-secrets.sh` — fail if any server-only env name appears in `.next/static/**`

PRs fail on any warning or error.

---

## Where to read next

- [`docs/website/MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md`](docs/website/MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md) — strategy and brand architecture
- [`docs/website/WEBSITE_IMPLEMENTATION_SPRINTS.md`](docs/website/WEBSITE_IMPLEMENTATION_SPRINTS.md) — W0–W14 sprint plan
- [`docs/website/WEBSITE_W0_PREFLIGHT.md`](docs/website/WEBSITE_W0_PREFLIGHT.md) — locked decisions
- [`docs/website/WEBSITE_OPEN_DECISIONS.md`](docs/website/WEBSITE_OPEN_DECISIONS.md) — outstanding decisions
- [`docs/website/CUSTOMER_JOURNEY_BUILD.md`](docs/website/CUSTOMER_JOURNEY_BUILD.md) — D2C + B2B journey deep-dive
- [`docs/website/WEBSITE_LIGHT_ADMIN_BUILD.md`](docs/website/WEBSITE_LIGHT_ADMIN_BUILD.md) — operator-side deep-dive

---

_Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients._
