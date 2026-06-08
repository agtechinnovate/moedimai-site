import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { AnalyticsProviders } from "@/components/analytics/providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { env } from "@/lib/env";
import { Schema, organizationSchema, websiteSchema } from "@/lib/schema";
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
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  applicationName: "MoedimAI",
  title: {
    default: "MoedimAI | Kenyan essential oils and verified botanical supply",
    template: "%s · MoedimAI",
  },
  description:
    "MoedimAI supplies Kenyan essential oils, cold-pressed botanical oils, and verified African agricultural supply with lot traceability, GC-MS profiles, and buyer-ready documentation.",
  keywords: [
    "Kenyan essential oils",
    "African botanicals",
    "organic rosemary oil Kenya",
    "lavender essential oil Kenya",
    "moringa oil Kenya",
    "baobab oil supplier",
    "GC-MS essential oil supplier",
    "traceable botanical ingredients",
    "verified agricultural supply chain",
    "Mount Kenya botanicals",
  ],
  creator: "MoedimAI",
  publisher: "MoedimAI",
  category: "Agricultural ingredients",
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
    title: "MoedimAI | Kenyan essential oils and verified botanical supply",
    description:
      "Kenyan essential oils and cold-pressed botanical oils backed by lot traceability, GC-MS profiles, and buyer-ready documentation.",
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
    title: "MoedimAI | Kenyan essential oils and verified botanical supply",
    description:
      "Traceable African botanicals for cosmetic, fragrance, and wellness buyers.",
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
