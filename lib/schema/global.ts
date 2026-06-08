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
    "Kenyan essential oils",
    "African botanicals",
    "Cold-pressed botanical oils",
    "Organic essential oils",
    "Rosemary essential oil",
    "Lavender essential oil",
    "Moringa oil",
    "Baobab oil",
    "Neem oil",
    "Agricultural supply chain",
    "Smallholder farmer programs",
    "EU organic certification",
    "USDA organic certification",
    "Kenyan agriculture",
    "GC-MS chemotype verification",
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
    "Steam-distilled essential oils from Kenya",
    "Cold-pressed botanical oils from Kenya",
    "Buyer-ready traceability and documentation packets",
    "Verified agricultural supply chain operating system",
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
    "Kenyan essential oils, cold-pressed botanical oils, and verified African agricultural supply.",
  publisher: { "@id": `${baseUrl}/#organization` },
  inLanguage: "en",
} as const;
