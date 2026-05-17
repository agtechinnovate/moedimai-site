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
  title: {
    default: "Moedim — verified African botanicals",
    template: "%s · Moedim",
  },
  description:
    "Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients. Sprint W1 preview.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Moedim",
    title: "Moedim — verified African botanicals",
    description:
      "Moedim turns African smallholder botanicals into verified, traceable, buyer-ready ingredients.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1A36",
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
