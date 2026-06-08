import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";
import PlausibleProvider from "next-plausible";
import type { ReactNode } from "react";
import { env } from "@/lib/env";

/**
 * Analytics scaffolding for Sprint W1.
 *
 * - Plausible: cookie-less, primary. Activates when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set.
 * - GA4: activates when NEXT_PUBLIC_GA_MEASUREMENT_ID is set and records CTA events.
 * - Vercel Analytics: Core Web Vitals real-user monitoring. Auto-detects on Vercel.
 * - PostHog: gated by cookie banner (deferred to W12). Stub only.
 * - Sentry: see sentry.client.config / sentry.server.config when added.
 */
export function AnalyticsProviders({ children }: { children: ReactNode }) {
  const plausibleDomain = env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  const content = (
    <>
      {children}
      <Script src="/ga.js" strategy="afterInteractive" />
      <VercelAnalytics />
    </>
  );

  if (!plausibleDomain) {
    return content;
  }

  return (
    <PlausibleProvider domain={plausibleDomain} trackOutboundLinks>
      {content}
    </PlausibleProvider>
  );
}
