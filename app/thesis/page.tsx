/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CATEGORY_FAQS } from "@/lib/content/seo";
import { Schema, breadcrumbList, faqPage } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "African crop management operating system thesis",
  description:
    "MoedimAI is an operating system for managing African crop programs, farmer networks, harvest readiness, benchmarking, and export-ready agricultural supply.",
  alternates: {
    canonical: "/thesis",
    types: {
      "text/markdown": [{ url: "/thesis.md", title: "Company thesis markdown" }],
    },
  },
  openGraph: {
    title: "MoedimAI African crop management thesis",
    description:
      "A thesis for managing African crop programs from farmer networks and growing to harvest readiness, benchmarking, distribution, and export.",
    url: "/thesis",
    images: [
      {
        url: "/images/vivian-at-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Vivian Nwakah at the MoedimAI Mount Kenya facility",
      },
    ],
  },
};

const baseUrl = PUBLIC_SITE_URL;

const thesisPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/thesis#webpage`,
  url: `${baseUrl}/thesis`,
  name: "MoedimAI African crop management thesis",
  description:
    "An operating thesis for managing African crop programs from farmer networks and growing to harvest readiness, benchmarking, distribution, and export.",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: [
    { "@id": `${baseUrl}/#organization` },
    "Agricultural bioeconomy",
    "Trade infrastructure for agriculture",
    "Specification-driven production",
    "Chemotype verification",
    "Smallholder agriculture",
  ],
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/vivian-at-facility.jpg`,
  },
} as const;

const JOURNEY_STAGES: ReadonlyArray<{ name: string; signal: string; sub: string }> = [
  { name: "Producer", signal: "Identity", sub: "farmer, plot, consent" },
  { name: "Cell", signal: "Context", sub: "location, crop, group" },
  { name: "Specification", signal: "Target", sub: "buyer end state" },
  { name: "Field", signal: "Evidence", sub: "stage logs, inspections" },
  { name: "Sensing", signal: "Risk", sub: "weather, NDVI, alerts" },
  { name: "Quality", signal: "Lab", sub: "QC and chemistry" },
  { name: "Lot", signal: "Custody", sub: "mass balance, movement" },
  { name: "Buyer", signal: "Packet", sub: "ready evidence" },
];

export default function ThesisPage() {
  return (
    <>
      <Schema
        data={[
          thesisPageSchema,
          faqPage(CATEGORY_FAQS),
          breadcrumbList([{ name: "Company thesis", path: "/thesis" }]),
        ]}
      />
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
            The operating system for managed African crop programs.
          </h1>
          <p className="mt-8 max-w-3xl text-base text-cream-50/85 md:text-lg">
            MoedimAI turns farmer networks, crop plans, field support, weather and satellite
            signals, quality records, benchmarks, and buyer or distributor requirements into a
            governed operating graph. Imani Pamoja is the connected agricultural trading and export
            company for African farm output.
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
              const isTarget = stage.name === "Specification" || stage.name === "Buyer";
              return (
                <li
                  key={stage.name}
                  className={[
                    "rounded-md border p-4",
                    isTarget
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
                      isTarget ? "text-gold-500" : "text-teal-300",
                    ].join(" ")}
                  >
                    {stage.name}
                  </p>
                  <p className="mt-2 font-display text-2xl text-cream-50">{stage.signal}</p>
                  <p className="mt-1 text-xs text-cream-50/65">{stage.sub}</p>
                </li>
              );
            })}
          </ol>
          <h2 id="journey" className="sr-only">
            The specification-driven operating journey
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
              Farmers to managed crop programs
            </h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              MoedimAI helps companies organize farmer networks, crop plans, field teams, and
              growing-stage evidence so African crop programs can be managed against a clear output
              target.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">
              02 · Organic, climate, health
            </p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">
              Output, risk, and readiness
            </h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Crop performance, harvest readiness, quality evidence, and distribution requirements
              become operating facts instead of scattered field notes. Satellite and weather signals
              help teams pre-empt risk before it affects output.
            </p>
          </article>
          <article className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold-500">03 · The data layer</p>
            <h3 className="mt-4 font-display text-2xl text-cream-50">The dataset is the asset</h3>
            <p className="mt-4 text-sm text-cream-50/80 md:text-base">
              Every permitted field record, benchmark, quality result, custody event, and buyer or
              distributor packet compounds into a dataset companies can use to manage better crop
              programs over time.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-10 md:py-12">
          <div className="border-l-2 border-gold-500 pl-6">
            <p className="text-xs uppercase tracking-[0.22em] text-gold-500">The ecosystem</p>
            <p className="mt-3 text-base text-cream-50/85 md:text-lg">
              Companies need partners that can manage farmers, crops, output, quality, and
              distribution readiness together. Insurance, banks, DFIs, buyers, processors, and
              exporters all benefit when crop performance is visible and benchmarked.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="sr-only">Inside the operation</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
            <img
              src="/images/vivian-at-facility.jpg"
              alt="Vivian Nwakah at the Mount Kenya distillation facility"
              className="h-80 w-full object-cover md:h-96"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">
              Vivian Nwakah at the Mount Kenya distillation facility.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
            <img
              src="/images/qc-team.jpg"
              alt="QC team at work in the MoedimAI processing facility"
              className="h-80 w-full object-cover md:h-96"
            />
            <figcaption className="px-4 py-3 text-xs text-cream-50/60">
              QC team on the floor at the Mount Kenya facility.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <dt className="font-display text-3xl text-gold-500 md:text-4xl">Farmers</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Network setup and field coordination</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-gold-500 md:text-4xl">Crops</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Program planning and growing support</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-gold-500 md:text-4xl">Benchmarks</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Output, quality, and harvest readiness</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-gold-500 md:text-4xl">Export</dt>
              <dd className="mt-3 text-sm text-cream-50/75">Distribution readiness through Imani Pamoja</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-md">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">At a glance</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">Founder</dt>
              <dd className="text-cream-50">Vivian Nwakah</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">Operating focus</dt>
              <dd className="text-cream-50">African crop programs</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">Trading route</dt>
              <dd className="text-cream-50">Imani Pamoja</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cream-50/10 pb-3">
              <dt className="text-cream-50/60">US entity</dt>
              <dd className="text-cream-50">Delaware</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-cream-50/60">Trust mark</dt>
              <dd className="text-gold-500">MoedimAI Verified</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-cream-50/10">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Common questions</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-cream-50 md:text-4xl">
            The category MoedimAI is building.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {CATEGORY_FAQS.map((faq) => (
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

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-3xl text-cream-50 md:text-4xl">
            Investor and partner contact
          </h2>
          <p className="mt-6 max-w-2xl text-base text-cream-50/85 md:text-lg">
            For investor materials, partnership inquiries, or research collaboration, contact Vivian
            Nwakah, Founder and CEO, at{" "}
            <a
              href="mailto:vivian@moedim.ai"
              className="text-gold-500 underline-offset-4 hover:underline"
            >
              vivian@moedim.ai
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:vivian@moedim.ai?subject=Investor%20information%20request"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Contact now
            </a>
            <a
              href="mailto:vivian@moedim.ai?subject=Book%20a%20call"
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
