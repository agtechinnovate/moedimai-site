import Image from "next/image";
import Link from "next/link";
import { JourneyMap } from "@/components/home/journey-map";
import { FieldAppPreview } from "@/components/home/platform-graphics";
import { CATEGORY_FAQS } from "@/lib/content/seo";
import { Schema, faqPage } from "@/lib/schema";

const CAPABILITIES = [
  {
    label: "Execute",
    title: "Moedim Field",
    body: "Offline field execution for plot registration, inputs, crop stages, inspections and harvest readiness. Each activity becomes part of the wider MoedimAI operating record.",
  },
  {
    label: "Observe",
    title: "Satellite, weather and drone intelligence",
    body: "Remote and environmental signals expand visibility across plots, production areas and harvest windows.",
  },
  {
    label: "Measure",
    title: "IoT and connected operations",
    body: "Continuous measurements across processing, storage, custody and logistics help teams protect quality and respond to changing conditions.",
  },
  {
    label: "Benchmark",
    title: "AI-supported process intelligence",
    body: "Specifications and live operating data become stage-specific benchmarks, guidance and visible next actions.",
  },
  {
    label: "Verify",
    title: "Quality, certification and evidence",
    body: "Laboratory results, COAs, GC-MS, organic, EUDR, GLOBALG.A.P. and other requirements remain connected to the relevant lot and decision.",
  },
  {
    label: "Deliver",
    title: "Logistics and customer readiness",
    body: "Custody, condition, routing and export documentation support a confident handoff and a verifiable delivery record.",
  },
] as const;

const IMPLEMENTATION_STEPS = [
  [
    "01",
    "Understand",
    "Define the crop, product, customer, market, quality target, operating constraints and evidence requirements.",
  ],
  [
    "02",
    "Configure",
    "Translate those requirements into stages, benchmarks, roles, permissions and reporting.",
  ],
  [
    "03",
    "Connect",
    "Bring together field activity, satellite, weather, IoT, laboratory, processing and logistics data.",
  ],
  [
    "04",
    "Deploy",
    "Prepare teams, devices and workflows. Launch Moedim Field and the enterprise command centre.",
  ],
  [
    "05",
    "Improve",
    "Review performance, deviations and evidence quality, then strengthen the operating model using real results.",
  ],
] as const;

const AUDIENCES = [
  {
    eyebrow: "Agricultural enterprises",
    title: "Operate against a defined requirement",
    body: "Manage field production, processing, quality and logistics against a commercial, customer or programme requirement.",
  },
  {
    eyebrow: "Institutions and programme operators",
    title: "Turn programme requirements into operating controls",
    body: "Configure requirements as operational benchmarks and maintain the evidence needed for oversight, reporting and delivery.",
  },
  {
    eyebrow: "Investors and strategic partners",
    title: "See the technology and growth thesis",
    body: "Explore the platform, data advantage, operating model and opportunity across agricultural value chains.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Schema data={faqPage(CATEGORY_FAQS)} />

      <section
        className="border-b border-cream-50/10 bg-navy-900"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91, 143, 181, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 143, 181, 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="container py-14 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.26em] text-teal-300">
            Amsterdam · New York · Nairobi
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-4xl leading-[1.08] text-cream-50 md:text-6xl">
            <span className="text-teal-300">Enterprise intelligence</span> for agricultural value
            chains, from field operations to global delivery.
          </h1>
          <p className="mt-7 max-w-3xl text-[15px] leading-6 text-cream-50/80 md:text-lg md:leading-8">
            MoedimAI connects field operations, satellite and weather intelligence, IoT signals,
            processing, quality and logistics in one system. AI-supported benchmarking evaluates
            performance against the required specification, giving teams a clear view of progress,
            required actions and supporting evidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="mailto:vivian@moedim.ai?subject=MoedimAI%20platform%20information"
              data-analytics-event="platform_information_click"
              data-analytics-label="home hero"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              Request platform information
            </a>
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-semibold text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              Explore the platform
            </a>
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-20 border-b border-cream-50/10 bg-navy-900">
        <div className="mx-auto max-w-[1200px] px-8 py-[72px]">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-teal-300">The journey</p>
          <h2 className="mt-4 max-w-3xl font-display text-[34px] font-medium leading-[1.15] text-cream-50">
            One journey, segmented, with the right technology on each segment.
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.6] text-cream-50/70">
            Field stages run on the Moedim Field app with satellite, drone, and testing. Processing
            runs on patent-pending guidance and benchmarking. Logistics runs on sensors. And every
            record lands on one blockchain document chain, from spec alignment to delivery.
          </p>
          <JourneyMap />
        </div>
      </section>

      <section id="platform" className="scroll-mt-24 border-b border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300">
            The intelligence and control layer
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
            Connect field operations, processing, quality and delivery in one platform.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-cream-50/70">
            MoedimAI is configured around each organisation&apos;s crop, product, customer
            requirement, standard and destination market. The platform connects the information,
            operating controls and evidence needed to move from production requirements to a
            verified result.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="border border-cream-50/10 bg-navy-900/55 p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-gold-500">
                  {capability.label}
                </p>
                <h3 className="mt-3 font-display text-xl text-cream-50">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream-50/65">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="moedim-field" className="scroll-mt-24 border-b border-cream-50/10">
        <div className="container grid items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-teal-300">Moedim Field</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
              Field execution connected to enterprise intelligence.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-cream-50/75">
              Moedim Field is the mobile field component of MoedimAI, available through the Apple
              App Store and Google Play. It equips authorised field teams to register plots, record
              inputs, document crop stages, complete inspections and confirm harvest readiness,
              including in areas without connectivity.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream-50/70">
              When the work synchronises, it becomes part of the wider MoedimAI operating record,
              where it can be evaluated alongside satellite, weather, IoT, processing and quality
              data.
            </p>
            <ul className="mt-7 grid gap-4 text-sm leading-6 text-cream-50/70 sm:grid-cols-2">
              <li className="border-l-2 border-gold-500 pl-4">
                Offline work that synchronises when connectivity returns.
              </li>
              <li className="border-l-2 border-gold-500 pl-4">
                Plot-level records connected to the authorised programme.
              </li>
              <li className="border-l-2 border-gold-500 pl-4">
                Guided checks, inspections and evidence requirements.
              </li>
              <li className="border-l-2 border-gold-500 pl-4">
                Field activity that supports downstream operating decisions.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Moedim Field store availability">
              <div className="rounded-md border border-cream-50/20 bg-black px-5 py-3">
                <p className="text-[10px] uppercase tracking-[0.08em] text-white/65">
                  Available through the
                </p>
                <p className="text-base font-semibold text-white">Apple App Store</p>
              </div>
              <div className="rounded-md border border-cream-50/20 bg-black px-5 py-3">
                <p className="text-[10px] uppercase tracking-[0.08em] text-white/65">
                  Available through
                </p>
                <p className="text-base font-semibold text-white">Google Play</p>
              </div>
            </div>
          </div>
          <FieldAppPreview />
        </div>
      </section>

      <section className="border-b border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300">
            Platform and guided implementation
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
            Technology configured around the way your organisation works.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-cream-50/70">
            MoedimAI works with each organisation to define the required result, configure the value
            chain, connect the relevant data sources, prepare Moedim Field, onboard teams and
            improve the operating model over time.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {IMPLEMENTATION_STEPS.map(([number, title, body]) => (
              <article key={number} className="border-t border-gold-500 pt-5">
                <p className="text-xs text-gold-500">{number}</p>
                <h3 className="mt-3 text-base font-semibold text-cream-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream-50/60">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-solutions" className="scroll-mt-24 border-b border-cream-50/10">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300">Enterprise solutions</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
            For organisations working across agricultural value chains.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <article key={audience.eyebrow} className="border border-cream-50/10 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-gold-500">
                  {audience.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-xl text-cream-50">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream-50/65">{audience.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:vivian@moedim.ai?subject=MoedimAI%20enterprise%20deployment"
              className="inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-semibold text-navy-900 hover:bg-gold-300"
            >
              Discuss a platform deployment
            </a>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-md border border-gold-500 px-5 text-sm font-semibold text-cream-50 hover:bg-gold-500/10"
            >
              About MoedimAI
            </Link>
          </div>
        </div>
      </section>

      <section
        id="moedim-harvest"
        aria-labelledby="harvest-heading"
        className="scroll-mt-24 border-y-8 border-[#202D6E] bg-[#F7F2E7] text-[#202D6E]"
      >
        <div className="container grid items-center gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D6B]">
              Agricultural product sourcing
            </p>
            <p className="mt-3 font-display text-2xl text-[#202D6E]">
              Moedim <span className="text-[#A08040]">Harvest</span>
            </p>
            <h2 id="harvest-heading" className="mt-3 font-display text-3xl leading-tight">
              Looking to source agricultural products?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#202D6E]/75">
              Moedim Harvest is MoedimAI&apos;s separate sister company. It develops supply
              programmes and distributes agricultural products to global markets. Moedim Harvest
              manages the commercial and distribution relationship. MoedimAI provides the
              technology, monitoring, benchmarking and guided support behind the operation.
            </p>
            <div className="mt-6 border-l-4 border-[#C9A961] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E7D6B]">
                Featured Harvest programme
              </p>
              <h3 className="mt-2 font-display text-2xl">Baobab Oil, Cold-Pressed</h3>
              <p className="mt-1 text-sm italic text-[#202D6E]/65">Adansonia digitata</p>
              <p className="mt-2 text-sm leading-6 text-[#202D6E]/70">
                A lightweight African seed oil for skin, hair and body formulations. Programme
                stage: buyer-led development.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.moedimharvest.com/ingredients/baobab-oil-cold-pressed"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="harvest_click"
                data-analytics-label="baobab programme"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#C9A961] px-5 text-sm font-semibold text-[#202D6E] hover:bg-[#b99a54]"
              >
                View the Baobab Oil programme
              </a>
              <a
                href="https://www.moedimharvest.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="harvest_click"
                data-analytics-label="harvest company"
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#202D6E] px-5 text-sm font-semibold hover:bg-[#202D6E]/5"
              >
                Go to Moedim Harvest
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-[#8FCFC5] bg-white p-2 shadow-xl">
            <Image
              src="/images/moedim-harvest-baobab-tree.webp"
              alt="A mature baobab tree representing the Moedim Harvest Baobab Oil programme"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-800/40">
        <div className="container py-16 text-center md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300">
            Start the conversation
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
            Find out how MoedimAI could support your organisation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cream-50/70">
            Tell us about your organisation, operating model and requirements. We will explain the
            relevant platform capabilities and what an initial deployment could involve.
          </p>
          <a
            href="mailto:vivian@moedim.ai?subject=MoedimAI%20platform%20information"
            data-analytics-event="platform_information_click"
            data-analytics-label="home final cta"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-semibold text-navy-900 hover:bg-gold-300"
          >
            Request platform information
          </a>
        </div>
      </section>
    </>
  );
}
