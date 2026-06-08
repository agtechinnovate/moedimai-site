import { PUBLIC_SITE_URL } from "@/lib/site-url";

const baseUrl = PUBLIC_SITE_URL;

/**
 * Organization JSON-LD. Emitted on every page via the root layout.
 * Canonical identity record for MoedimAI.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "MoedimAI",
  alternateName: ["MoedimAI Verified", "Jaribu by MoedimAI"],
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/moedimai-logo-light.png`,
  },
  description:
    "MoedimAI uses technology and AI to help companies manage African crop programs, bioeconomy supply chains, farmer networks, growing, harvest readiness, benchmarking, value addition, quality evidence, logistics routing, and movement to distribution or export.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Vivian Nwakah",
    jobTitle: "Founder & CEO",
  },
  address: [
    { "@type": "PostalAddress", addressCountry: "KE", addressLocality: "Nairobi" },
    { "@type": "PostalAddress", addressCountry: "NL", addressLocality: "Rotterdam" },
    {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "Dover",
      addressRegion: "DE",
    },
  ],
  knowsAbout: [
    "African crop management",
    "African agricultural export programs",
    "Farmer network management",
    "Crop program management",
    "Harvest readiness benchmarking",
    "Crop benchmarking",
    "Agricultural distribution readiness",
    "Farm production management",
    "Trade infrastructure for agriculture",
    "AI for Africa bioeconomy",
    "Bioeconomy agriculture technology",
    "Bioeconomy AI platform",
    "Agricultural bioeconomy operating systems",
    "Circular bioeconomy agriculture",
    "Biomass value chains",
    "Bio-based value chains",
    "Agricultural value addition",
    "Agro-processing value addition",
    "Steam distillation crop processing",
    "Drying and dehydration for agricultural products",
    "Cold press agricultural processing",
    "Agricultural logistics routing",
    "End-to-end agricultural supply chain",
    "Verifiable agricultural supply chains",
    "Specification-driven agricultural production",
    "Buyer-grade supply verification",
    "Financeable agricultural supply",
    "Multi-tenant agritech platforms",
    "Smallholder farm verification",
    "Satellite and weather intelligence for agriculture",
    "AI-assisted agricultural operating intelligence",
    "GC-MS chemotype verification",
    "African agricultural crop programs",
    "Aromatic and essential-oil crops",
    "Botanicals and natural ingredients",
    "Oilseeds and carrier oils",
    "Fresh produce and horticulture",
    "Grains, pulses, and staples",
    "Beverage and tree crops",
    "Spices and specialty crops",
    "Fiber, industrial, and biomass crops",
    "Agricultural supply chain",
    "Smallholder farmer programs",
    "EU organic certification",
    "USDA organic certification",
    "Kenyan agriculture",
    "Lot traceability",
    "Certificate of Analysis documentation",
  ],
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "European Union" },
    { "@type": "Country", name: "United States" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "vivian@moedim.ai",
    contactType: "sales",
    areaServed: ["EU", "US", "KE"],
    availableLanguage: ["English", "Swahili"],
  },
  makesOffer: [
    "African crop program management",
    "Farmer network operations",
    "Crop benchmarking and harvest readiness",
    "Distribution and export readiness support",
    "Imani Pamoja trading and export route",
    "Agricultural bioeconomy operating system",
    "AI bioeconomy agriculture technology",
    "Value-addition processing modules",
    "Steam distillation, drying, and cold-press workflow support",
    "Logistics routing and end-to-end agricultural supply-chain control",
    "Specification-driven supply verification",
    "Buyer-ready traceability and documentation packets",
    "Satellite and weather operating intelligence",
    "Enterprise agricultural operating graph",
    "African agricultural crop program support",
  ],
} as const;

/**
 * WebSite JSON-LD. Emitted alongside Organization.
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: "MoedimAI",
  description:
    "African crop management, farmer network operations, harvest readiness, benchmarking, and export-ready agricultural supply.",
  publisher: { "@id": `${baseUrl}/#organization` },
  inLanguage: "en",
} as const;
