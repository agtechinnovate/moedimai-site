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
    eyebrow: "I NEED A CROP OPERATING PARTNER",
    title: "Managed African crop programs",
    body: "Coordinate farmers, growing, harvest readiness, crop benchmarking, quality evidence, and movement toward distribution or export.",
    href: "/buyers",
    cta: "See crop support",
  },
  {
    eyebrow: "I AM AN INVESTOR OR PARTNER",
    title: "AI for the bioeconomy",
    body: "Technology and AI for African bioeconomy supply chains: crops, satellite and weather signals, processing, logistics, and buyer-ready evidence.",
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
            African crop management
            <br />
            from farmer to distribution.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cream-50/90 md:text-lg">
            MoedimAI helps companies manage the crops they grow or source in Africa: farmer
            networks, growing programs, AI-supported satellite and weather intelligence, harvest
            readiness, benchmarking, value addition, logistics routing, quality evidence, and
            movement into processing, distribution, or export. Imani Pamoja is the connected
            trading and export company for African farm output.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/buyers"
              data-analytics-event="buyer_click"
              data-analytics-label="home hero crop support"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              See crop support
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
              <dd className="mt-1 text-cream-50">Programs benchmarked</dd>
            </div>
            <div>
              <dt className="text-cream-50/70">Harvest</dt>
              <dd className="mt-1 text-cream-50">Readiness tracked</dd>
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
            One operating graph, three public entry points: enterprise buyers, capital partners,
            and producers entering verified supply.
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
            <p className="text-xs uppercase tracking-[0.2em] text-gold-500">Bioeconomy technology</p>
            <h2 className="mt-3 max-w-3xl font-sans text-xl font-semibold leading-snug text-cream-50 md:text-2xl">
              Technology and AI for Africa&apos;s bioeconomy supply chains.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-cream-50/75">
              MoedimAI connects crop production, satellite and weather signals, value addition,
              processing, steam distillation, drying, cold press, logistics routing, quality
              evidence, and export readiness in one governed operating layer.
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
            around the crop, farmer network, buyer specification, benchmark, harvest window,
            quality evidence, and route to market.
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
