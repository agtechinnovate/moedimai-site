/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { BrandMark } from "@/components/layout/brand-mark";
import { BUYER_FAQS, CROP_FAMILIES } from "@/lib/content/seo";
import { Schema, breadcrumbList, faqPage } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "African crop management and export-ready supply",
  description:
    "MoedimAI helps companies manage African crop programs, farmer networks, growing, harvesting, benchmarking, quality evidence, and movement to distribution or export.",
  alternates: {
    canonical: "/buyers",
    types: {
      "text/markdown": [{ url: "/buyers.md", title: "African crop management markdown" }],
    },
  },
  openGraph: {
    title: "MoedimAI African crop management and export-ready supply",
    description:
      "Farmer network management, crop benchmarking, harvest readiness, quality evidence, and distribution or export support for African agriculture.",
    url: "/buyers",
    images: [
      {
        url: "/images/rosemary-plant.jpg",
        width: 1200,
        height: 630,
        alt: "Rosemary from the MoedimAI Kenyan supply network",
      },
    ],
  },
};

const baseUrl = PUBLIC_SITE_URL;

const SPEC_ROWS: ReadonlyArray<{ label: string; value: React.ReactNode }> = [
  { label: "Trading route", value: "Imani Pamoja agricultural trading and export company" },
  { label: "Operating role", value: "Farmer networks, crop programs, harvest readiness, benchmarks" },
  { label: "EU operations", value: "Rotterdam" },
  { label: "US holding", value: "Delaware" },
  { label: "Trust mark", value: <BrandMark surface="verified" size="sm" /> },
  { label: "Crop scope", value: "Aromatics, botanicals, oilseeds, produce, grains, pulses, tree crops, spices, fiber, biomass" },
  { label: "Engagement", value: "Crop program, sourcing, distribution, export, or buyer-spec conversation by request" },
  { label: "Evidence", value: "Field checks, quality records, benchmarks, traceability, custody, and export documentation" },
];

const buyerPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/buyers#webpage`,
  url: `${baseUrl}/buyers`,
  name: "MoedimAI African crop management and export-ready supply",
  description:
    "MoedimAI helps companies manage African crop programs, farmer networks, growing, harvesting, benchmarking, quality evidence, and movement to distribution or export.",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/rosemary-plant.jpg`,
  },
} as const;

const buyerProductListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${baseUrl}/buyers#crop-families`,
  name: "African crop families MoedimAI can support",
  itemListElement: CROP_FAMILIES.map((family, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Thing",
      name: family.name,
      description: `${family.crops}. ${family.use}.`,
      brand: { "@id": `${baseUrl}/#organization` },
    },
  })),
} as const;

export default function BuyersPage() {
  return (
    <>
      <Schema
        data={[
          buyerPageSchema,
          buyerProductListSchema,
          faqPage(BUYER_FAQS),
          breadcrumbList([{ name: "African crop management", path: "/buyers" }]),
        ]}
      />
      <section className="container py-16 md:py-20">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
          African crop operating partner
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          <BrandMark surface="moedimai" size="lg" /> manages crop programs from farmer to distribution.
        </h1>
        <p className="mt-6 max-w-3xl text-base text-cream-50/85 md:text-lg">
          MoedimAI is for companies looking for a partner to manage crops grown in Africa and keep
          the operating picture clear: farmers, growing, field support, harvest readiness,
          benchmarking, quality evidence, and movement toward processors, distributors, exporters,
          or buyers. Imani Pamoja is the connected agricultural trading and export company for
          African farm output.
        </p>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">
            Crop programs MoedimAI can support
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-cream-50/75 md:text-base">
            The platform is built around crop programs, not a single product catalogue. Each
            program can be configured around the crop, farmer network, growth stage, benchmark,
            buyer specification, quality evidence, and route to market.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
              <img
                src="/images/rosemary-plant.jpg"
                alt="Rosemary plant close-up"
                className="h-48 w-full object-cover md:h-56"
              />
            </figure>
            <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
              <img
                src="/images/immortelle-jar.jpg"
                alt="Dried immortelle in a glass jar"
                className="h-48 w-full object-cover md:h-56"
              />
            </figure>
            <figure className="overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/40">
              <img
                src="/images/botanical-powder.jpg"
                alt="Cold-pressed botanical powder with scoop"
                className="h-48 w-full object-cover md:h-56"
              />
            </figure>
          </div>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CROP_FAMILIES.map((family) => (
              <li
                key={family.name}
                className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3"
              >
                <p className="font-display text-lg text-cream-50">{family.name}</p>
                <p className="mt-2 text-sm text-cream-50/70">{family.crops}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-gold-500">
                  {family.use}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl text-cream-50 md:text-3xl">
          How buyer engagement works
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">1</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">Define the crop program.</h3>
            <p className="mt-3 text-sm text-cream-50/80">
              Share the crop, country or region, target output, buyer or distributor requirements,
              farmer-network needs, and evidence requirements.
            </p>
          </li>
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">2</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">Manage growing and harvest.</h3>
            <p className="mt-3 text-sm text-cream-50/80">
              MoedimAI tracks farmers, crop stages, field support, weather and satellite signals,
              harvest readiness, quality checks, and benchmarks against the target.
            </p>
          </li>
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">3</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">
              Move toward distribution.
            </h3>
            <p className="mt-3 text-sm text-cream-50/80">
              When supply is ready, the same operating record supports aggregation, custody,
              processing, distribution, export documentation, and buyer-facing evidence.
            </p>
          </li>
        </ol>
      </section>

      <section className="border-t border-cream-50/10">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Common questions</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            How MoedimAI supports African crop programs.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {BUYER_FAQS.map((faq) => (
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
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">Specifications</h2>
          <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[max-content_1fr]">
            {SPEC_ROWS.map((row) => (
              <div key={row.label} className="contents">
                <dt className="text-sm text-cream-50/60">{row.label}</dt>
                <dd className="text-sm text-cream-50">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="mailto:vivian@moedim.ai?subject=Buyer%20information%20request"
              className="inline-flex h-12 items-center justify-center rounded-md bg-gold-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Contact now
            </a>
            <a
              href="mailto:vivian@moedim.ai?subject=RFQ%20submission"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold-500 px-6 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Submit an RFQ
            </a>
          </div>
          <p className="mt-6 text-sm text-cream-50/70">
            Direct contact:{" "}
            <a
              href="mailto:vivian@moedim.ai"
              className="text-gold-500 underline-offset-4 hover:underline"
            >
              vivian@moedim.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
