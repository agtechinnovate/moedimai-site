import { env } from "@/lib/env";

const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

/**
 * Organization JSON-LD. Emitted on every page via the root layout.
 * Canonical identity record for MoedimAI.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "MoedimAI",
  alternateName: ["Moedim Africa", "Moedai LLC"],
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/images/moedimai-logo-light.png`,
  },
  description:
    "MoedimAI turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.",
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
    "Organic essential oils",
    "Agricultural supply chain",
    "Smallholder farmer programs",
    "EU organic certification",
    "USDA organic certification",
    "Kenyan agriculture",
    "African botanicals",
    "GC-MS chemotype verification",
  ],
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Place", name: "European Union" },
    { "@type": "Country", name: "United States" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "vivian@moedimAI.com",
    contactType: "general",
  },
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
  publisher: { "@id": `${baseUrl}/#organization` },
} as const;
