/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "How MoedimAI works with smallholder farmers, runs internal control under EU 2018/848 and USDA NOP, processes biomass, and verifies every lot before dispatch.",
};

const STEPS: ReadonlyArray<{ kicker: string; name: string; body: string }> = [
  {
    kicker: "01 · Farmer onboarding",
    name: "Jaribu",
    body: "Smallholder farmers join Jaribu by MoedimAI. We pay above-market prices for biomass, provide organic input support, and bring each plot through the conversion clock to EU 2018/848 and USDA NOP.",
  },
  {
    kicker: "02 · Internal Control System",
    name: "ICS",
    body: "Every farmer sits inside a Group of Operators certificate. Field coordinators inspect plots, log non-conformities, and keep the audit trail current for external certifiers.",
  },
  {
    kicker: "03 · Processing",
    name: "Distill, press, dry, pack",
    body: "Biomass is delivered to the Mount Kenya facility. Essential oils are steam-distilled. Cold-pressed oils are extracted unrefined. Powders are dried to spec. Everything is filled and labelled with lot codes.",
  },
  {
    kicker: "04 · Quality control",
    name: "GC-MS and FAME",
    body: "Essential oils are GC-MS profiled. Cold-pressed oils get a fatty acid profile. Pesticide residue, heavy metals, microbiology, and allergens are tested per shipment.",
  },
  {
    kicker: "05 · Dispatch",
    name: "MoedimAI Verified",
    body: "Every lot ships with a MoedimAI Verified evidence packet: COA, SDS, IFRA where relevant, allergen statement, chain of custody, and phytosanitary clearance.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/qc-team.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/80 to-navy-900"
        />
        <div className="container relative py-20 md:py-28">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-gold-500">
            Our approach
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-cream-50 md:text-6xl">
            From smallholder plot to verified lot.
          </h1>
          <p className="mt-8 max-w-3xl text-base text-cream-50/85 md:text-lg">
            Five steps connect the farm gate to the EU port. Every step is logged, every lot is
            tested, every shipment carries the evidence.
          </p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.name} className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-gold-500">{step.kicker}</p>
              <h2 className="mt-4 font-display text-2xl text-cream-50">{step.name}</h2>
              <p className="mt-3 text-sm text-cream-50/80 md:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
              <img
                src="/images/vivian-at-facility.jpg"
                alt="Vivian Nwakah at the Mount Kenya distillation facility"
                className="h-80 w-full object-cover md:h-96"
              />
              <figcaption className="px-4 py-3 text-xs text-cream-50/60">
                Mount Kenya distillation facility.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
              <img
                src="/images/qc-team.jpg"
                alt="QC team at work in the MoedimAI processing facility"
                className="h-80 w-full object-cover md:h-96"
              />
              <figcaption className="px-4 py-3 text-xs text-cream-50/60">
                QC floor, Mount Kenya.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">
              Organic by construction
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">EU and USDA aligned</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Every farmer converts to EU 2018/848 and USDA NOP. The conversion clock is tracked per
              plot, not per farmer.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">Hub-first quality</p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">QC at the collection hub</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Biomass is graded and priced at the hub, not at the farm. Payment is triggered by QC
              acceptance and sent via M-Pesa.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">
              Provenance, not paperwork
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">Weight-tracked chain</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Every join from plot to harvest to distillation run to lot to shipment carries a
              weight in kilograms. Buyers can trace any lot back to the contributing plots.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 text-center md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Talk to us</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            For technical questions on the process.
          </h2>
          <p className="mt-6">
            <a
              href="mailto:vivian@moedimAI.com?subject=Approach%20enquiry"
              className="font-display text-2xl text-gold-500 underline-offset-4 hover:underline md:text-3xl"
            >
              vivian@moedimAI.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
