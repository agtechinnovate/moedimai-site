import type { Metadata } from "next";
import Link from "next/link";
import { BIOECONOMY_KEYWORDS, CATEGORY_FAQS, VALUE_ADDITION_MODULES } from "@/lib/content/seo";
import { Schema, breadcrumbList, faqPage } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI supply chain platform for Africa's bioeconomy",
  description:
    "MoedimAI is the technology layer and AI supply chain platform driving Africa's bioeconomy by benchmarking buyer-ready outcomes back to source and across value addition, processing, logistics routing, distribution, and export.",
  keywords: [...BIOECONOMY_KEYWORDS],
  alternates: {
    canonical: "/bioeconomy",
    types: {
      "text/markdown": [
        { url: "/bioeconomy.md", title: "Bioeconomy agriculture company markdown" },
      ],
    },
  },
  openGraph: {
    title: "MoedimAI | AI supply chain platform for Africa's bioeconomy",
    description:
      "Technology-layer AI and supply-chain benchmarking for African bioeconomy supply from source records through value addition, logistics, distribution, export, and buyer-ready outcomes.",
    url: "/bioeconomy",
    images: [
      {
        url: "/images/qc-team.jpg",
        width: 1200,
        height: 630,
        alt: "MoedimAI value-addition and quality operations",
      },
    ],
  },
};

const baseUrl = PUBLIC_SITE_URL;

const bioeconomyFaqs = [CATEGORY_FAQS[0]!, CATEGORY_FAQS[1]!, CATEGORY_FAQS[7]!, CATEGORY_FAQS[8]!];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/bioeconomy#webpage`,
  url: `${baseUrl}/bioeconomy`,
  name: "MoedimAI AI supply chain platform for Africa's bioeconomy",
  description:
    "MoedimAI is the technology layer and AI supply chain platform driving Africa's bioeconomy by benchmarking buyer-ready outcomes back to source and across value addition, logistics routing, distribution, export, and supply records.",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: [
    { "@id": `${baseUrl}/#organization` },
    "AI supply chain platform Africa",
    "Bioeconomy supply chain platform",
    "Supply chain benchmarking Africa",
    "AI bioeconomy agriculture company",
    "Bioeconomy technology company",
    "Circular bioeconomy agriculture",
    "Biomass value chains",
    "Agricultural value addition",
    "Agro-processing",
    "End-to-end agricultural supply chain",
  ],
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/qc-team.jpg`,
  },
} as const;

const moduleSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${baseUrl}/bioeconomy#value-addition-modules`,
  name: "MoedimAI bioeconomy agriculture and value-addition modules",
  itemListElement: VALUE_ADDITION_MODULES.map((module, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Service",
      name: module.name,
      description: module.body,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: { "@type": "Place", name: "Africa" },
    },
  })),
} as const;

export default function BioeconomyPage() {
  return (
    <>
      <Schema
        data={[
          pageSchema,
          moduleSchema,
          faqPage(bioeconomyFaqs),
          breadcrumbList([
            { name: "AI supply chain platform for Africa's bioeconomy", path: "/bioeconomy" },
          ]),
        ]}
      />
      <section className="md:py-18 container py-14">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
          AI for Africa&apos;s bioeconomy
        </p>
        <h1 className="mt-4 max-w-4xl font-sans text-3xl font-semibold leading-tight text-cream-50 md:text-4xl">
          MoedimAI is the AI supply chain platform driving Africa&apos;s bioeconomy.
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-cream-50/80 md:text-base">
          The African bioeconomy depends on crops, biomass, field evidence, satellite and weather
          intelligence, processing capacity, quality records, logistics, and route-to-market
          execution working together. MoedimAI is the technology layer for that bioeconomy: it
          benchmarks the buyer-ready end state back to source and across the chain, from farmers and
          growing to value addition, custody, distribution readiness, export evidence, and supply
          that can meet buyer requirements.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/buyers"
            className="inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300"
          >
            See supply-chain support
          </Link>
          <a
            href="mailto:vivian@moedim.ai?subject=Bioeconomy%20agriculture%20partnership"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gold-500 px-5 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10"
          >
            Contact Vivian
          </a>
        </div>
      </section>

      <section className="border-y border-cream-50/10 bg-navy-800/40">
        <div className="container py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-md border border-cream-50/10 bg-navy-900/50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-gold-500">Technology layer</p>
              <h2 className="mt-3 font-sans text-xl font-semibold text-cream-50">
                AI bioeconomy operations
              </h2>
              <p className="text-cream-50/72 mt-3 text-sm leading-6">
                MoedimAI connects crop production, biomass, quality evidence, satellite and weather
                signals, and bio-based value chains so agricultural output can become benchmarked,
                buyer-ready supply.
              </p>
            </article>
            <article className="rounded-md border border-cream-50/10 bg-navy-900/50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-gold-500">Route</p>
              <h2 className="mt-3 font-sans text-xl font-semibold text-cream-50">Imani Pamoja</h2>
              <p className="text-cream-50/72 mt-3 text-sm leading-6">
                Imani Pamoja is the connected agricultural trading and export company for African
                farm output. MoedimAI benchmarks and manages the operating record behind that
                supply.
              </p>
            </article>
            <article className="rounded-md border border-cream-50/10 bg-navy-900/50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-gold-500">Scope</p>
              <h2 className="mt-3 font-sans text-xl font-semibold text-cream-50">End to end</h2>
              <p className="text-cream-50/72 mt-3 text-sm leading-6">
                The platform spans farmers, crops, harvesting, processing, lots, quality, logistics
                routing, distribution, export evidence, and buyer packets.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="md:py-18 container py-14">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-500">Value addition</p>
        <h2 className="mt-4 max-w-3xl font-sans text-2xl font-semibold leading-snug text-cream-50 md:text-3xl">
          Processing, distillation, drying, cold press, and logistics in one operating record.
        </h2>
        <p className="text-cream-50/72 mt-4 max-w-3xl text-sm leading-6 md:text-base">
          MoedimAI is not only a farm registry and not only traceability. The point is AI-enabled
          supply-chain benchmarking and operational control across the agricultural supply chain,
          including the value-addition steps that turn farm output into buyer-ready or export-ready
          products.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_ADDITION_MODULES.map((module) => (
            <article
              key={module.name}
              className="rounded-md border border-cream-50/10 bg-navy-900/40 p-5"
            >
              <h3 className="font-sans text-lg font-semibold text-cream-50">{module.name}</h3>
              <p className="text-cream-50/72 mt-3 text-sm leading-6">{module.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-50/10 bg-navy-800/40">
        <div className="md:py-18 container py-14">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-500">Search fit</p>
          <h2 className="mt-4 max-w-3xl font-sans text-2xl font-semibold leading-snug text-cream-50 md:text-3xl">
            Clear category language for buyers, operators, and AI agents.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-cream-50/75 md:text-base">
            MoedimAI should be understood as an AI supply chain platform for the African bioeconomy:
            source records, farmer networks, biomass and bio-based value chains, value-addition
            processing, steam distillation, drying, cold press, quality evidence, logistics routing,
            distribution, export, and buyer-ready outcome benchmarking.
          </p>
        </div>
      </section>
    </>
  );
}
