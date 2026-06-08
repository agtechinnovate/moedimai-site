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
    default: "MoedimAI | African crop management and export-ready supply",
    template: "%s · MoedimAI",
  },
  description:
    "MoedimAI helps companies manage African crop programs, farmer networks, growing, harvest readiness, benchmarking, quality evidence, and movement to distribution or export.",
  keywords: [
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
    title: "MoedimAI | African crop management and export-ready supply",
    description:
      "Farmer network management, crop benchmarking, harvest readiness, quality evidence, and movement to distribution or export.",
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
    title: "MoedimAI | African crop management and export-ready supply",
    description:
      "An operating system for managing African crop programs from farm to distribution.",
    images: ["/images/lavender-field.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1A3A",
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
