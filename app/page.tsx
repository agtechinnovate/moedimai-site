import Image from "next/image";
import Link from "next/link";
import { CATEGORY_FAQS } from "@/lib/content/seo";
import { Schema, faqPage } from "@/lib/schema";

const SIGNAL_GROUPS = [
  {
    label: "Observe",
    title: "Field and remote intelligence",
    body: "Moedim Field records field activity while satellite imagery, weather conditions, drone observations and field testing expand visibility across production areas.",
  },
  {
    label: "Evaluate",
    title: "AI-supported process intelligence",
    body: "Live operating data is evaluated against the relevant specification, quality target, standard or programme requirement so teams can see where attention is needed.",
  },
  {
    label: "Protect",
    title: "IoT and logistics intelligence",
    body: "Connected measurements across processing, storage, custody and logistics help teams protect quality and maintain a reliable delivery record.",
  },
] as const;

const VALUE_CHAIN_STAGES = [
  ["01", "Soil and site", "Location, soil, source and programme requirements"],
  ["02", "Planting and inputs", "Approved inputs, planting and field evidence"],
  ["03", "Cultivation", "Field observations, satellite and weather intelligence"],
  ["04", "Harvest", "Readiness, testing and plot-level traceability"],
  ["05", "Processing", "Operating conditions benchmarked to the required result"],
  ["06", "Quality and certification", "Laboratory, COA, standards and customer evidence"],
  ["07", "Logistics and delivery", "Condition, custody, routing and customer handoff"],
] as const;

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

const FIELD_VISITS = [
  {
    plot: "Plot KE-0417",
    crop: "Moringa",
    task: "Crop stage check · Nakuru cell 3",
    status: "Due",
    statusClass: "bg-gold-500/15 text-gold-300",
  },
  {
    plot: "Plot KE-0233",
    crop: "Avocado",
    task: "Harvest readiness · Nyeri cell 1",
    status: "Ready",
    statusClass: "bg-verifiedGreen-500/20 text-verifiedGreen-300",
  },
  {
    plot: "Plot KE-0561",
    crop: "Moringa",
    task: "Input log · Laikipia cell 2",
    status: "Synced",
    statusClass: "bg-cream-50/10 text-cream-50/70",
  },
] as const;

function FieldPhone() {
  return (
    <div
      aria-label="Moedim Field mobile application preview"
      className="mx-auto w-full max-w-[300px] rounded-[2.5rem] border border-cream-50/20 bg-black p-2.5 shadow-2xl"
    >
      <div className="overflow-hidden rounded-[2rem] bg-navy-800">
        <div className="flex items-center justify-between px-5 pb-1 pt-4 text-[11px] text-cream-50/70">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-black" aria-hidden />
          <span>Online</span>
        </div>
        <div className="border-b border-cream-50/10 px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-500">
            Moedim Field
          </p>
          <p className="mt-1 text-lg font-semibold text-cream-50">Today&apos;s visits</p>
        </div>
        <div className="space-y-3 px-4 py-4">
          {FIELD_VISITS.map((visit) => (
            <article
              key={`${visit.plot}-${visit.crop}`}
              className="rounded-lg border border-cream-50/10 bg-cream-50/[0.04] p-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-cream-50">
                  {visit.plot} · {visit.crop}
                </p>
                <span
                  className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] ${visit.statusClass}`}
                >
                  {visit.status}
                </span>
              </div>
              <p className="mt-1 text-[11px] leading-5 text-cream-50/55">{visit.task}</p>
            </article>
          ))}
          <div className="mt-5 rounded-lg border border-dashed border-gold-500/45 p-3 text-[11px] text-cream-50/65">
            Offline-ready · 12 records queued to sync
          </div>
        </div>
        <div className="px-4 pb-5 pt-2">
          <div className="flex h-11 items-center justify-center rounded-lg bg-gold-500 text-sm font-semibold text-navy-900">
            Capture record
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="container py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.26em] text-teal-300">
            Amsterdam · New York · Nairobi
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-4xl leading-[1.08] text-cream-50 md:text-6xl">
            <span className="text-teal-300">Enterprise intelligence</span> for agricultural value
            chains, from field operations to global delivery.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-cream-50/80 md:text-lg md:leading-8">
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
          <dl className="mt-14 grid gap-4 border-t border-cream-50/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Field intelligence", "Offline activity and plot-level records"],
              ["Remote intelligence", "Satellite, weather, drone and testing signals"],
              ["Operating controls", "Processing, quality, IoT and logistics benchmarks"],
              ["Delivery evidence", "Connected records from requirement to handoff"],
            ].map(([term, detail]) => (
              <div key={term}>
                <dt className="text-sm font-semibold text-cream-50">{term}</dt>
                <dd className="mt-1 text-sm leading-6 text-cream-50/55">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300">
            Connected agricultural intelligence
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
            Every relevant signal, connected to the outcome that matters.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-cream-50/70">
            Agricultural performance cannot be understood from one source. MoedimAI combines field
            observations, satellite imagery, weather conditions, drone and testing evidence, IoT
            measurements, laboratory results, processing records and logistics events. The platform
            evaluates these signals together and shows where attention is needed.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SIGNAL_GROUPS.map((group) => (
              <article key={group.title} className="border border-cream-50/10 bg-navy-900/60 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-500">{group.label}</p>
                <h3 className="mt-3 font-display text-xl text-cream-50">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream-50/65">{group.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cream-50/10">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-300">
            The MoedimAI decision and verification engine
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-cream-50 md:text-4xl">
            Every stage benchmarked. Every stage evidenced.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-cream-50/70">
            Customer specifications, certification standards, quality targets, programme
            requirements and destination-market rules become operating benchmarks. MoedimAI connects
            those benchmarks to the activity and evidence created at each stage.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_CHAIN_STAGES.map(([number, title, detail]) => (
              <article key={number} className="border-l-2 border-gold-500 bg-navy-800/35 p-5">
                <p className="text-xs font-semibold text-gold-500">{number}</p>
                <h3 className="mt-3 text-base font-semibold text-cream-50">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream-50/60">{detail}</p>
              </article>
            ))}
            <article className="border-l-2 border-verifiedGreen-500 bg-navy-800/35 p-5">
              <p className="text-xs font-semibold text-verifiedGreen-300">Evidence record</p>
              <h3 className="mt-3 text-base font-semibold text-cream-50">
                Blockchain-backed documentation
              </h3>
              <p className="mt-2 text-sm leading-6 text-cream-50/60">
                A continuous chain of evidence from specification alignment through delivery.
              </p>
            </article>
          </div>
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
          <FieldPhone />
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
