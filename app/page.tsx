import Link from "next/link";
import { CATEGORY_FAQS, CROP_FAMILIES } from "@/lib/content/seo";
import { Schema, faqPage } from "@/lib/schema";

interface AudienceDoor {
  eyebrow: string;
  title: string;
  body: string;
  href: "/buyers" | "/bioeconomy" | "/thesis" | "/jaribu";
  cta: string;
}

const DOORS: AudienceDoor[] = [
  {
    eyebrow: "I NEED A SUPPLY-CHAIN PARTNER",
    title: "Supply chain benchmarking",
    body: "Benchmark buyer-ready outcomes back to source across farmers, growing, value addition, quality evidence, logistics, distribution, and export.",
    href: "/buyers",
    cta: "See supply-chain support",
  },
  {
    eyebrow: "I AM AN INVESTOR OR PARTNER",
    title: "AI for the bioeconomy",
    body: "Technology and AI for African bioeconomy supply chains: source records, satellite and weather signals, processing, logistics, verification, and buyer-ready outcomes.",
    href: "/bioeconomy",
    cta: "See bioeconomy layer",
  },
  {
    eyebrow: "I AM A FARMER",
    title: "Jaribu by MoedimAI",
    body: "Farmer intake, cell planning, organic support, and buyer-readiness evidence for smallholder producers entering verified supply networks.",
    href: "/jaribu",
    cta: "Get in touch",
  },
];

const VERIFICATION_STAGES = [
  { name: "Soil & site", detail: "EUDR, organic, and source context" },
  { name: "Planting & inputs", detail: "Approved inputs and field evidence" },
  { name: "Cultivation", detail: "GLOBALG.A.P. and crop-stage controls" },
  { name: "Harvest", detail: "Plot-level traceability and readiness" },
  { name: "Processing", detail: "Steam distillation, drying, cold press" },
  { name: "Certification", detail: "COA, NOP, DDS, and buyer packets" },
  { name: "Shipment", detail: "Custody, logistics, distribution, export" },
];

const INDUSTRY_MARKETS = [
  "Cosmetic actives and oils",
  "Pharmaceutical pre-grade actives",
  "Nutraceutical standardized extracts",
  "Chemical bio-based feedstocks",
  "Food and beverage flavor and function",
];

export default function HomePage() {
  return (
    <>
      <Schema data={faqPage(CATEGORY_FAQS)} />
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/lavender-field.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/60 to-navy-900/30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900"
        />
        <div className="container relative py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">
            Rooted in Africa. Refined for the world.
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            AI supply chain platform and verification engine
            <br />
            driving Africa&apos;s bioeconomy.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cream-50/90 md:text-lg">
            MoedimAI is the technology layer for bioeconomy supply chains. It benchmarks buyer-ready
            outcomes back to the beginning and throughout the supply chain: farmer networks, crop
            programs, AI-supported satellite and weather intelligence, harvest readiness, value
            addition, processing, quality evidence, logistics routing, distribution, and export.
            Imani Pamoja is the connected trading and export company for African farm output.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/buyers"
              data-analytics-event="buyer_click"
              data-analytics-label="home hero crop support"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              See supply-chain support
            </Link>
            <Link
              href="/bioeconomy"
              data-analytics-event="bioeconomy_click"
              data-analytics-label="home hero bioeconomy"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              AI for bioeconomy
            </Link>
          </div>
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 text-sm md:grid-cols-4">
            <div>
              <dt className="text-cream-50/70">Farmers</dt>
              <dd className="mt-1 text-cream-50">Networks managed</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">Crops</dt>
              <dd className="mt-1 text-cream-50">Source benchmarked</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">Supply</dt>
              <dd className="mt-1 text-cream-50">Outcome benchmarked</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">Export</dt>
              <dd className="mt-1 text-cream-50">Imani Pamoja</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="audience-doors"
        className="border-t border-cream-50/10 bg-navy-800/40"
      >
        <div className="container py-16 md:py-20">
          <h2 id="audience-doors" className="font-display text-2xl text-cream-50 md:text-3xl">
            Choose your path
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-cream-50/70 md:text-base">
            One operating graph, three public entry points: enterprise supply-chain teams, capital
            partners, and producers entering verified supply.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DOORS.map((door) => (
              <AudienceDoorCard key={door.href} door={door} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cream-50/10">
        <div className="container py-16 md:py-20">
          <div className="mb-10 rounded-md border border-cream-50/10 bg-navy-800/35 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500">
              Bioeconomy technology
            </p>
            <h2 className="mt-3 max-w-3xl font-sans text-xl font-semibold leading-snug text-cream-50 md:text-2xl">
              Technology and AI for Africa&apos;s bioeconomy supply chains.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-cream-50/75">
              MoedimAI is the technology layer that connects source records, crop production,
              satellite and weather signals, value addition, processing, steam distillation, drying,
              cold press, logistics routing, quality evidence, distribution readiness, export
              pathways, and buyer specifications in one governed supply-chain benchmarking layer.
            </p>
            <Link
              href="/bioeconomy"
              data-analytics-event="bioeconomy_click"
              data-analytics-label="home bioeconomy note"
              className="mt-4 inline-flex text-sm font-medium text-gold-500 underline-offset-4 hover:underline"
            >
              Read the bioeconomy technology page
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Crop coverage</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-cream-50 md:text-4xl">
            Built for the crop families companies grow and source across African agriculture.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-cream-50/75 md:text-base">
            MoedimAI is not limited to one botanical line. The operating model can be configured
            around the crop, farmer network, buyer specification, benchmark, harvest window, quality
            evidence, and route to market.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {CROP_FAMILIES.map((family) => (
              <article
                key={family.name}
                className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6"
              >
                <h3 className="font-display text-xl text-cream-50">{family.name}</h3>
                <p className="mt-3 text-sm leading-6 text-cream-50/75">{family.crops}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold-500">
                  {family.use}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="verification-engine"
        className="border-t border-cream-50/10 bg-navy-900"
      >
        <div className="container grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Verification engine</p>
            <h2
              id="verification-engine"
              className="mt-4 max-w-xl scroll-mt-28 font-display text-3xl leading-tight text-cream-50 md:text-4xl"
            >
              From buyer specification to shipment evidence.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-cream-50/75 md:text-base">
              MoedimAI benchmarks agricultural production against international standards at every
              stage, from soil to shipment. A buyer&apos;s specification becomes controls that
              producers and processors can follow, and evidence that buyers, certifiers, and
              financiers can trust.
            </p>
            <div className="mt-6 rounded-md border-l-2 border-gold-500 bg-cream-50/[0.04] p-5 text-sm leading-6 text-cream-50/85">
              Built in Kenya and scaling across Africa, MoedimAI turns verified production into
              sustainable export revenue for African producers and more bankable supply for global
              markets.
            </div>
          </div>

          <div className="rounded-lg border border-cream-50/10 bg-navy-800/45 p-5 md:p-6">
            <div className="flex flex-wrap gap-2">
              {INDUSTRY_MARKETS.map((market) => (
                <span
                  key={market}
                  className="rounded-md border border-cream-50/10 bg-navy-900/60 px-3 py-2 text-xs text-cream-50/75"
                >
                  {market}
                </span>
              ))}
            </div>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {VERIFICATION_STAGES.map((stage, index) => (
                <div
                  key={stage.name}
                  className="rounded-md border border-cream-50/10 bg-navy-900/55 p-4"
                >
                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-sans text-base font-semibold text-cream-50">
                    {stage.name}
                  </h3>
                  <p className="text-cream-50/68 mt-1 text-sm leading-5">{stage.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-gold-500/30 bg-gold-500/10 p-4">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
                Evidence out
              </p>
              <p className="mt-2 text-sm leading-6 text-cream-50/85">
                Verified, certifier-ready, bankable supply for EU, US, Asia, AfCFTA, and
                intra-African trade routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-50/10">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Common questions</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-cream-50 md:text-4xl">
            Clear answers for buyers, partners, and search systems.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {CATEGORY_FAQS.slice(0, 6).map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6"
              >
                <h3 className="font-display text-xl text-cream-50">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-cream-50/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cream-50/10">
        <div className="container py-16 text-center md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Get in touch</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            Talk to Vivian directly.
          </h2>
          <p className="mt-4 text-base text-cream-50/85 md:text-lg">
            Buyer inquiries, investor introductions, partnership conversations, press.
          </p>
          <p className="mt-6">
            <a
              href="mailto:vivian@moedim.ai"
              data-analytics-event="email_click"
              data-analytics-label="home contact email"
              className="font-display text-2xl text-gold-500 underline-offset-4 hover:underline md:text-3xl"
            >
              vivian@moedim.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function AudienceDoorCard({ door }: { door: AudienceDoor }) {
  return (
    <Link
      href={door.href}
      data-analytics-event="audience_path_click"
      data-analytics-label={door.title}
      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
    >
      <article className="flex h-full flex-col justify-between rounded-lg border border-cream-50/10 bg-navy-900/60 p-6 transition-colors hover:border-gold-500/40 hover:bg-navy-900">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold-500">
            {door.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-xl text-cream-50 md:text-2xl">{door.title}</h3>
          <p className="mt-3 text-sm text-cream-50/75 md:text-base">{door.body}</p>
        </div>
        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-cream-50/70">{door.cta}</span>
          <span className="text-gold-500 transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </article>
    </Link>
  );
}
