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
    "MoedimAI is trade infrastructure for the agricultural bioeconomy, turning fragmented production into verified, financeable, exportable, buyer-ready supply.",
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
    "Trade infrastructure for agriculture",
    "Agricultural bioeconomy operating systems",
    "Verifiable agricultural supply chains",
    "Specification-driven agricultural production",
    "Buyer-grade supply verification",
    "Financeable agricultural supply",
    "Multi-tenant agritech platforms",
    "Smallholder farm verification",
    "Satellite and weather intelligence for agriculture",
    "GC-MS chemotype verification",
    "African botanical oil proof cases",
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
    "Agricultural bioeconomy operating system",
    "Specification-driven supply verification",
    "Buyer-ready traceability and documentation packets",
    "Satellite and weather operating intelligence",
    "Enterprise agricultural operating graph",
    "Imani Pamoja botanical proof case",
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
    "Trade infrastructure for the agricultural bioeconomy: verified, financeable, exportable, buyer-ready supply.",
  publisher: { "@id": `${baseUrl}/#organization` },
  inLanguage: "en",
} as const;
