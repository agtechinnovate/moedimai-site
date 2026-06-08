/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { BrandMark } from "@/components/layout/brand-mark";
import { PROOF_CASE_FAQS } from "@/lib/content/seo";
import { Schema, breadcrumbList, faqPage } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Buyer-grade supply proof case",
  description:
    "Imani Pamoja is the tenant-zero proof case for MoedimAI's buyer-grade agricultural supply verification, with lot traceability, lab evidence, and export documentation.",
  alternates: {
    canonical: "/buyers",
    types: {
      "text/markdown": [{ url: "/buyers.md", title: "Buyer-grade proof case markdown" }],
    },
  },
  openGraph: {
    title: "MoedimAI buyer-grade supply proof case",
    description:
      "A botanical and oil proof case for verified agricultural supply, lab-backed quality evidence, and buyer-ready documentation.",
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

const PROOF_CASE_LINES: ReadonlyArray<{ name: string; latin: string; note: string }> = [
  {
    name: "Baobab oil",
    latin: "Adansonia digitata",
    note: "Cold-pressed botanical oil line for buyer-grade evidence workflows.",
  },
  {
    name: "Moringa oil",
    latin: "Moringa oleifera",
    note: "Cold-pressed botanical oil line tied to producer, lot, and quality records.",
  },
  {
    name: "Avocado oil",
    latin: "Persea americana",
    note: "Oil line used to prove specification-driven production and buyer packet readiness.",
  },
];

const SPEC_ROWS: ReadonlyArray<{ label: string; value: React.ReactNode }> = [
  { label: "Proof case", value: "Imani Pamoja tenant-zero network" },
  { label: "Public scale", value: "600+ farmers onboarded, ~900 acres, 20 cells" },
  { label: "EU operations", value: "Rotterdam" },
  { label: "US holding", value: "Delaware" },
  { label: "Trust mark", value: <BrandMark surface="verified" size="sm" /> },
  { label: "Current oil lines", value: "Baobab, moringa, avocado" },
  { label: "Volume", value: "Sample and buyer conversations by request" },
  { label: "Documentation", value: "GC-MS or FAME profile per lot, COA, traceability record" },
];

const buyerPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/buyers#webpage`,
  url: `${baseUrl}/buyers`,
  name: "MoedimAI buyer-grade supply proof case",
  description:
    "Imani Pamoja demonstrates buyer-grade agricultural supply verification with quality evidence, traceability records, and export documentation.",
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
  "@id": `${baseUrl}/buyers#proof-case-lines`,
  name: "Imani Pamoja tenant-zero botanical oil proof case",
  itemListElement: PROOF_CASE_LINES.map((oil, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Product",
      name: oil.name,
      description: oil.note,
      brand: { "@id": `${baseUrl}/#organization` },
      manufacturer: { "@id": `${baseUrl}/#organization` },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Botanical name", value: oil.latin },
        { "@type": "PropertyValue", name: "Origin", value: "Kenya" },
      ],
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
          faqPage(PROOF_CASE_FAQS),
          breadcrumbList([{ name: "Buyer-grade proof case", path: "/buyers" }]),
        ]}
      />
      <section className="container py-16 md:py-20">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
          Tenant-zero proof case
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          <BrandMark surface="moedimai" size="lg" /> buyer-grade supply verification in the field.
        </h1>
        <p className="mt-6 max-w-3xl text-base text-cream-50/85 md:text-lg">
          Imani Pamoja is the live botanical and oil proof case for MoedimAI&apos;s agricultural
          operating system. The point is not that MoedimAI is an ingredients company; the point is
          that buyer specifications, farmer records, satellite and weather reads, lab evidence, lot
          traceability, and export documentation can be governed in one system.
        </p>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-2xl text-cream-50 md:text-3xl">
            Current proof-case lines
          </h2>

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
            {PROOF_CASE_LINES.map((oil) => (
              <li
                key={oil.name}
                className="rounded-md border border-cream-50/10 bg-navy-900/40 px-4 py-3"
              >
                <p className="font-display text-lg text-cream-50">{oil.name}</p>
                <p className="font-display text-sm italic text-cream-50/65">{oil.latin}</p>
                <p className="mt-3 text-sm text-cream-50/70">{oil.note}</p>
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
            <h3 className="mt-3 font-display text-xl text-cream-50">Request a sample.</h3>
            <p className="mt-3 text-sm text-cream-50/80">
              Share the buyer specification, destination market, evidence requirements, and sample
              needs. We confirm whether the proof-case network has a relevant lot or data packet.
            </p>
          </li>
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">2</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">Place an order.</h3>
            <p className="mt-3 text-sm text-cream-50/80">
              MoedimAI works backward from the buyer specification and checks whether production,
              lab, custody, and documentation evidence can support the target.
            </p>
          </li>
          <li className="rounded-lg border border-cream-50/10 bg-navy-900/40 p-6">
            <p className="font-display text-3xl text-gold-500">3</p>
            <h3 className="mt-3 font-display text-xl text-cream-50">
              Receive with full documentation.
            </h3>
            <p className="mt-3 text-sm text-cream-50/80">
              Buyer-ready packets are designed to include quality evidence, lot traceability,
              origin records, custody events, and export documentation tied to the same graph.
            </p>
          </li>
        </ol>
      </section>

      <section className="border-t border-cream-50/10">
        <div className="container py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-gold-500">Common questions</p>
          <h2 className="mt-4 font-display text-3xl text-cream-50 md:text-4xl">
            How the proof case translates to buyer-grade supply.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PROOF_CASE_FAQS.map((faq) => (
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
