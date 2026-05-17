/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company thesis",
  description:
    "Chemotype-verification infrastructure for African organic exports. Climate-resilient agriculture with value addition in Kenya and blockchain provenance.",
};

const JOURNEY_STAGES: ReadonlyArray<{ name: string; weight: string; sub: string }> = [
  { name: "Seedling", weight: "30%", sub: "cultivar fit" },
  { name: "Soil", weight: "8%", sub: "pH, inputs" },
  { name: "Growing", weight: "12%", sub: "stress events" },
  { name: "Harvest", weight: "18%", sub: "bloom, timing" },
  { name: "Field to Still", weight: "8%", sub: "hours, temp" },
  { name: "Processing", weight: "15%", sub: "pressure, time" },
  { name: "QC", weight: "5%", sub: "GC-MS vs target" },
  { name: "EU Logistics", weight: "4%", sub: "cool, dark, fast" },
];

export default function ThesisPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/vivian-at-facility.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900"
        />
        <div className="container relative py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">
            Investor thesis
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            Chemotype-verification infrastructure for African organic exports.
          </h1>
          <p className="mt-8 max-w-3xl text-base text-cream-50/85 md:text-lg">
            Climate-resilient agriculture with value addition in Kenya and blockchain provenance. We
            turn voice, paper, and community-led informality into structured field data that prices
            specs for buyers, prices risk for insurers, and fuels research for African institutions.
          </p>
        </div>
      </section>

      <section aria-labelledby="journey" className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <div className="flex items-baseline justify-between gap-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cream-50/60">Buyer spec</p>
            <p className="text-xs uppercase tracking-[0.2em] text-cream-50/60">EU port</p>
          </div>
          <ol className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {JOURNEY_STAGES.map((stage, idx) => {
              const weightNum = parseInt(stage.weight, 10);
              const isHigh = weightNum >= 15;
              return (
                <li
                  key={stage.name}
                  className={[
                    "rounded-md border p-4",
                    isHigh
                      ? "border-gold-500/50 bg-gold-500/10"
                      : "border-teal-300/30 bg-teal-500/5",
                  ].join(" ")}
                >
                  <p className="text-[0.65rem] uppercase tracking-wider text-cream-50/55">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p
                    className={[
                      "mt-1 font-display text-lg leading-tight",
                      isHigh ? "text-gold-500" : "text-teal-300",
                    ].join(" ")}
                  >
                    {stage.name}
                  </p>
                  <p className="mt-2 font-display text-2xl text-cream-50">{stage.weight}</p>
                  <p className="mt-1 text-xs text-cream-50/65">{stage.sub}</p>
                </li>
              );
            })}
          </ol>
          <h2 id="journey" className="sr-only">
            The chemotype journey
          </h2>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">
              01 · Value addition in Kenya
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">
              Biomass to finished product
            </h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              We buy biomass from farmers at above-market prices, distill, cold-press, dry, and
              package in Kenya. Finished essential oils, cold-press oils, and botanical powders ship
              to EU, US, and local buyers.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">
              02 · Organic, climate, health
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">
              One foundation, three outcomes
            </h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Every farmer converts to EU 2018/848 and USDA NOP. No synthetic pesticides means no
              chemical residues, no chemical exposure for families, and soil that regenerates.
              Satellite and market data pre-empt unfavourable climate conditions.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">03 · The data layer</p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">The dataset is the asset</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Every stage log, soil test, GC-MS result, and harvest weight is structured and
              queryable across nine export-ready crops. By end of 2027 we will hold a library of
              African chemotype profiles tied to operational decisions at smallholder scale.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-10 md:py-12">
          <div className="border-l-2 border-gold-500 pl-6">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-500">The ecosystem</p>
            <p className="mt-3 text-base text-cream-50/85 md:text-lg">
              Insurance prices climate and yield risk. Banks and DFIs lend against verified
              performance. Research institutions advance crop science.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="sr-only">Inside the operation</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40 md:col-span-2">
            <img
              src="/images/processing-tanks-wide.jpg"
              alt="Stainless steel distillation tanks at the Mount Kenya processing facility"
              className="h-64 w-full object-cover md:h-80"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">
              Mount Kenya distillation facility
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
            <img
              src="/images/vivian-at-facility.jpg"
              alt="Vivian Nwakah at the distillation facility"
              className="h-64 w-full object-cover md:h-80"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">Founder on site</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
            <img
              src="/images/processing-tank-closeup.jpg"
              alt="Close-up of a single stainless steel distillation tank"
              className="h-64 w-full object-cover md:h-80"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">
              Steam distillation column
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40 md:col-span-2">
            <img
              src="/images/qc-packaging.jpg"
              alt="Packaging and QC operators in the Moedim facility"
              className="h-64 w-full object-cover md:h-80"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">Packaging and QC</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
            <img
              src="/images/farm-landscape.jpg"
              alt="Land near the Mount Kenya processing facility"
              className="h-64 w-full object-cover md:h-80"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">On the ground</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <dt className="font-display text-4xl text-gold-500 md:text-5xl">300</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Farmers live, 3,000 in pipeline</dd>
            </div>
            <div>
              <dt className="font-display text-4xl text-gold-500 md:text-5xl">9</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Crops, including tree crops</dd>
            </div>
            <div>
              <dt className="font-display text-4xl text-gold-500 md:text-5xl">5 t/day</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Processing capacity</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-gold-500 md:text-4xl">Multi-layer</dt>
              <dd className="mt-3 text-sm text-cream-50/75">
                Supply available across own farms and partner inventory.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-cream-50 md:text-4xl">
              What we are building
            </h2>
            <div className="mt-6 space-y-5 text-base text-cream-50/85 md:text-lg">
              <p>
                Moedim sits at the intersection of three structural shifts in the global botanical
                supply chain.
              </p>
              <p>
                The first is that EU and US buyers no longer accept commodity-grade African
                botanicals. They buy chemical profiles, not crops. A cosmetics buyer in Provence
                does not buy lavender, they buy linalyl acetate 30 to 45 percent and camphor below
                0.5 percent. African producers who cannot prove their chemotype on a Certificate of
                Analysis are excluded from the highest-value tier of the market.
              </p>
              <p>
                The second is that smallholder agriculture across sub-Saharan Africa is digitally
                invisible. The same farmer who can be GAP certified, organic certified, and
                chemotype-verified in Provence or Bulgaria cannot be in Kenya, because the data
                infrastructure does not exist. Buyers either pay a premium to certified Northern
                Hemisphere producers or accept unverifiable risk from African suppliers. There is no
                third option today.
              </p>
              <p>
                The third is that Africa is structurally well-positioned to grow these crops.
                Climate, soil, altitude, and labour economics are aligned. The single missing layer
                is verification. We are building the verification layer.
              </p>
            </div>
          </div>
          <aside className="lg:pt-3">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-500">At a glance</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
                <dt className="text-cream-50/60">Founder</dt>
                <dd className="text-cream-50">Vivian Nwakah</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
                <dt className="text-cream-50/60">Operations</dt>
                <dd className="text-cream-50">Mount Kenya</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
                <dt className="text-cream-50/60">EU platform</dt>
                <dd className="text-cream-50">Rotterdam</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
                <dt className="text-cream-50/60">US entity</dt>
                <dd className="text-cream-50">Delaware</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-cream-50/60">Trust mark</dt>
                <dd className="text-gold-500">Moedim Verified</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-3xl text-cream-50 md:text-4xl">
            How the model compounds
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base text-cream-50/85 md:text-lg">
            <p>
              Verified chemotype data has three buyer audiences, and each one strengthens the
              others.
            </p>
            <p>
              Cosmetic, fragrance, and wellness buyers buy spec-matched oils with full traceability.
              They pay organic-certified premium pricing because the chemotype proves it.
            </p>
            <p>
              Insurance underwriters and development finance institutions price climate and yield
              risk against verified historical performance. A farmer with three seasons of GC-MS,
              NDVI, and harvest weight data is a different risk class to a farmer with none. We are
              not the insurer. We make the underwriting possible.
            </p>
            <p>
              Research institutions across Africa gain a queryable library of indigenous and
              naturalized crop chemotypes. This is publication-grade scientific infrastructure that
              does not exist today for the crops we work in.
            </p>
            <p>
              The same data layer serves all three. The buyers fund operations, the insurers price
              the risk, the researchers build the science. Each one increases the value of the data
              for the next.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-3xl text-cream-50 md:text-4xl">Where we are</h2>
        <div className="mt-6 max-w-3xl space-y-5 text-base text-cream-50/85 md:text-lg">
          <p>
            Three hundred farmers are live in the Mount Kenya smallholder network today. Three
            thousand are in pipeline for the next eighteen months. Nine crops are in commercial
            production across essential oils and cold-pressed botanicals. Five tonnes per day of
            processing capacity is operational. Supply is available across multiple layers, from
            partner-sourced inventory to forward harvests from our own farms. Request more
            information for current availability and lead times.
          </p>
          <p>
            Operations span three jurisdictions. Mount Kenya is the production base. Rotterdam is
            the EU port and distribution operation. Delaware is the US holding entity.
          </p>
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-3xl text-cream-50 md:text-4xl">
            Investor and partner contact
          </h2>
          <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
            For investor materials, partnership inquiries, or research collaboration, contact Vivian
            Nwakah, Founder and CEO, at{" "}
            <a
              href="mailto:vivian@moedimai.com"
              className="text-gold-500 underline-offset-4 hover:underline"
            >
              vivian@moedimai.com
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:vivian@moedimai.com?subject=Investor%20information%20request"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Request more information
            </a>
            <a
              href="mailto:vivian@moedimai.com?subject=Book%20a%20call"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
