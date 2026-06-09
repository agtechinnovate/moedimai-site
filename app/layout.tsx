import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AnalyticsProviders } from "@/components/analytics/providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Schema, organizationSchema, websiteSchema } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_SITE_URL),
  applicationName: "MoedimAI",
  title: {
    default: "MoedimAI | Technology infrastructure for Africa's agricultural bioeconomy",
    template: "%s · MoedimAI",
  },
  description:
    "MoedimAI is building the technology infrastructure layer for Africa's agricultural bioeconomy, connecting farmers, processors, certifiers, buyers, funders, and programme operators on one governed operating graph.",
  keywords: [
    "Africa bioeconomy infrastructure",
    "technology infrastructure for Africa's agricultural bioeconomy",
    "bioeconomy operating system",
    "bioeconomy MRV platform",
    "bioeconomy observatory software",
    "verified bioeconomy supply chains",
    "AfCFTA agricultural trade infrastructure",
    "climate MRV for African agriculture",
    "AI for bioeconomy value chains",
    "African crop management partner",
    "manage crops grown in Africa",
    "African agricultural export partner",
    "farmer network management Africa",
    "crop program management Africa",
    "harvest readiness benchmarking",
    "crop benchmarking platform",
    "export-ready agricultural supply",
    "agricultural distribution readiness",
    "African farm production management",
    "trade infrastructure for agriculture",
    "agricultural bioeconomy operating system",
    "bioeconomy agriculture company",
    "Africa bioeconomy agriculture company",
    "African bioeconomy company",
    "circular bioeconomy agriculture",
    "bioeconomy agriculture platform",
    "biomass value chain Africa",
    "bio based value chains Africa",
    "agricultural value addition Africa",
    "agro-processing value addition Africa",
    "steam distillation crop processing",
    "drying processing cold press agriculture",
    "agricultural logistics routing Africa",
    "end to end agricultural supply chain Africa",
    "verifiable agricultural supply chain",
    "specification-driven agricultural production",
    "buyer-grade supply verification",
    "financeable agricultural supply",
    "multi-tenant agritech platform",
    "smallholder farm verification",
    "chemotype verification platform",
    "EUDR due diligence supply chain",
    "verified agricultural supply chain",
    "African agricultural crop programs",
  ],
  creator: "MoedimAI",
  publisher: "MoedimAI",
  category: "Agricultural production management",
  verification: {
    other: {
      "msvalidate.01": "F590464E50673F8106374C2FC6DAB795",
    },
  },
  manifest: "/site.webmanifest?v=20260609",
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260609", sizes: "any" },
      { url: "/favicon-16x16.png?v=20260609", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=20260609", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png?v=20260609", sizes: "48x48", type: "image/png" },
      { url: "/icon-48.png?v=20260609", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png?v=20260609", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png?v=20260609", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=20260609", sizes: "512x512", type: "image/png" },
      { url: "/icon.png?v=20260609", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=20260609", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": [
        { url: "/llms.txt", title: "AI agent index" },
        { url: "/llms-full.txt", title: "AI agent full context" },
      ],
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MoedimAI",
    title: "MoedimAI | Technology infrastructure for Africa's agricultural bioeconomy",
    description:
      "AI and operating infrastructure for African bioeconomy supply chains, crop management, value addition, verification, logistics routing, and buyer-ready supply.",
    images: [
      {
        url: "/images/lavender-field.jpg",
        width: 1200,
        height: 630,
        alt: "MoedimAI Kenyan botanical field",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoedimAI | Technology infrastructure for Africa's agricultural bioeconomy",
    description:
      "AI and operating infrastructure for African bioeconomy supply chains from farm to distribution.",
    images: ["/images/lavender-field.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0D13",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-navy-900 text-cream-50 antialiased">
        <Schema data={[organizationSchema, websiteSchema]} />
        <AnalyticsProviders>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </AnalyticsProviders>
      </body>
    </html>
  );
}
