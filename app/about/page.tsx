import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Schema, breadcrumbList } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About MoedimAI",
  description:
    "About MoedimAI and founder Vivian Nwakah. MoedimAI is the enterprise intelligence and execution platform for agricultural value chains.",
  alternates: {
    canonical: "/about",
    types: {
      "text/markdown": [{ url: "/about.md", title: "About MoedimAI markdown" }],
    },
  },
  openGraph: {
    title: "About MoedimAI",
    description:
      "Enterprise agricultural technology developed through real operating experience, connecting field work, remote intelligence, processing, quality, logistics, and evidence.",
    url: "/about",
  },
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${PUBLIC_SITE_URL}/about#founder`,
  name: "Vivian Nwakah",
  jobTitle: "Founder and Chief Executive Officer",
  image: `${PUBLIC_SITE_URL}/images/vivian-nwakah-headshot.jpg`,
  sameAs: ["https://www.linkedin.com/in/viviannwakah/"],
  worksFor: { "@id": `${PUBLIC_SITE_URL}/#organization` },
  knowsAbout: [
    "AI supply chain platform Africa",
    "Supply chain benchmarking Africa",
    "AI for Africa bioeconomy",
    "African bioeconomy supply chains",
    "Chemotype traceability",
    "Compliance infrastructure",
    "Regulated markets",
    "Agricultural bioeconomy operating systems",
    "Agricultural value addition",
    "End-to-end agricultural supply chains",
    "Farmer network operations",
    "Logistics routing for agriculture",
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PUBLIC_SITE_URL}/about#webpage`,
  url: `${PUBLIC_SITE_URL}/about`,
  name: "About MoedimAI",
  description:
    "MoedimAI is the enterprise intelligence and execution platform for agricultural value chains, founded by Vivian Nwakah.",
  about: { "@id": `${PUBLIC_SITE_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${PUBLIC_SITE_URL}/images/vivian-nwakah-headshot.jpg`,
  },
};

const OPERATING_SCOPE = [
  "Source records, organizations, producer networks, field teams, and agricultural programmes",
  "Moedim Field, satellite, weather, testing, drone, and IoT intelligence",
  "Customer, market, certification, and programme requirements translated into benchmarks",
  "Processing, quality, documentation, and custody evidence",
  "Logistics, delivery readiness, and verified outcome records",
];

const EXPERIENCE = [
  {
    label: "Medsaf",
    body: "Founded one of Nigeria's first tech-enabled pharmaceutical procurement platforms, scaling verified medicine access and standardized procurement workflows across 950+ hospitals and clinics.",
  },
  {
    label: "Enterprise AI",
    body: "Led AI-enabled systems work at Pfizer, translating executive priorities into governance, workflow change, and controlled operating-model adoption.",
  },
  {
    label: "Regulated Infrastructure",
    body: "Built across government, institutional, clinical, distributor, producer, processor, and buyer networks in high-trust, frontier-market environments.",
  },
  {
    label: "Global Recognition",
    body: "Speaker and panelist at Harvard, Stanford, Princeton, and the Milken Institute; featured in Forbes, Financial Times, and BBC; VivaTech Best Female Founder and Seedstars winner.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Schema
        data={[
          breadcrumbList([{ name: "About MoedimAI", path: "/about" }]),
          aboutPageSchema,
          founderSchema,
        ]}
      />

      <section className="border-b border-cream-50/10 bg-navy-900">
        <div className="container py-16 md:py-20">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
            About MoedimAI
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-3xl leading-tight text-cream-50 md:text-5xl">
            Agricultural technology developed through real operating experience.
          </h1>
          <p className="text-cream-50/78 mt-6 max-w-3xl text-base leading-7 md:text-lg">
            MoedimAI Inc. is a Delaware public benefit corporation building the intelligence and
            execution platform for agriculture. The platform connects field operations, remote
            intelligence, processing, quality, logistics, and evidence so organizations can
            benchmark performance against the result they need to deliver.
          </p>
          <p className="text-cream-50/72 mt-4 max-w-3xl text-base leading-7">
            The model is being proven through real agricultural value chains in Kenya and is
            designed for enterprises and institutions operating across crops, countries, and
            destination markets.
          </p>
          <p className="text-cream-50/72 mt-4 max-w-3xl text-base leading-7">
            Our separate sister company{" "}
            <a
              href="https://www.moedimharvest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 underline-offset-4 hover:underline"
            >
              Moedim Harvest
            </a>{" "}
            develops agricultural supply programmes and distributes products to global markets.
            MoedimAI provides the technology, monitoring, benchmarking, and guided support behind
            the operation.
          </p>
        </div>
      </section>

      <section className="border-b border-cream-50/10 bg-navy-800/35">
        <div className="container grid gap-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">Founder</p>
            <h2 className="mt-3 font-sans text-2xl font-semibold text-cream-50 md:text-3xl">
              Founded by Vivian Nwakah.
            </h2>
            <div className="mt-6 max-w-sm overflow-hidden rounded-lg border border-cream-50/10 bg-navy-900/70">
              <Image
                src="/images/vivian-nwakah-headshot.jpg"
                alt="Vivian Nwakah, founder and CEO of MoedimAI"
                width={1156}
                height={1200}
                className="aspect-[4/5] w-full object-cover object-[center_34%]"
                priority
              />
            </div>
          </div>
          <div className="text-cream-50/76 space-y-5 text-sm leading-7 md:text-base">
            <p>
              Vivian Nwakah is a founder and systems builder focused on AI, chemotype traceability,
              compliance infrastructure, and regulated markets. She builds the infrastructure that
              turns fragmented, informal markets into regulated, benchmarkable supply systems.
            </p>
            <p>
              Through MoedimAI, she is applying that operating-infrastructure pattern to
              agricultural value chains by connecting the required outcome with field activity,
              remote intelligence, processing, laboratory, certification, logistics, and delivery
              evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-50/10">
        <div className="container py-14 md:py-16">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
            Why this founder fits MoedimAI
          </p>
          <h2 className="mt-4 max-w-3xl font-sans text-2xl font-semibold leading-snug text-cream-50 md:text-3xl">
            Experience building regulated infrastructure in high-trust markets.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {EXPERIENCE.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-cream-50/10 bg-navy-900/50 p-5"
              >
                <h3 className="font-sans text-base font-semibold text-cream-50">{item.label}</h3>
                <p className="text-cream-50/72 mt-2 text-sm leading-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cream-50/10">
        <div className="container py-14 md:py-16">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
            Operating scope
          </p>
          <h2 className="mt-4 max-w-3xl font-sans text-2xl font-semibold leading-snug text-cream-50 md:text-3xl">
            A technology company for the full agricultural supply chain.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {OPERATING_SCOPE.map((item) => (
              <div key={item} className="rounded-md border border-cream-50/10 bg-navy-900/50 p-5">
                <p className="text-cream-50/78 text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-14 md:py-16">
          <div className="rounded-lg border border-cream-50/10 bg-navy-800/45 p-6 md:p-8">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
              Public contact
            </p>
            <h2 className="mt-3 font-sans text-2xl font-semibold text-cream-50">
              For platform, investor, partnership, and press inquiries.
            </h2>
            <p className="text-cream-50/76 mt-4 max-w-2xl text-sm leading-6">
              Use the public MoedimAI contact email for platform information, deployment
              conversations, strategic partnerships, investor discussions, and press inquiries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:vivian@moedim.ai?subject=MoedimAI%20introduction"
                data-analytics-event="email_click"
                data-analytics-label="about email"
                className="inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300"
              >
                Email MoedimAI
              </a>
              <a
                href="https://www.linkedin.com/in/viviannwakah/"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="linkedin_click"
                data-analytics-label="about linkedin"
                className="inline-flex h-11 items-center justify-center rounded-md border border-gold-500 px-5 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10"
              >
                Vivian on LinkedIn
              </a>
              <Link
                href="/#platform"
                data-analytics-event="platform_click"
                data-analytics-label="about platform"
                className="inline-flex h-11 items-center justify-center rounded-md border border-gold-500 px-5 text-sm font-medium text-cream-50 transition-colors hover:bg-gold-500/10"
              >
                Explore the platform
              </Link>
              <a
                href="https://www.moedimharvest.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="harvest_click"
                data-analytics-label="about product sourcing"
                className="inline-flex h-11 items-center justify-center rounded-md border border-cream-50/25 px-5 text-sm font-medium text-cream-50 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                Agricultural product sourcing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
