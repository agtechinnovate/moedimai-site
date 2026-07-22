/**
 * Sentry browser-side scaffolding. Activates only when NEXT_PUBLIC_SENTRY_DSN is set.
 *
 * W1 ships this as a no-op stub. Full Sentry wiring (sourcemaps upload,
 * error boundaries, alert routing) lands in Sprint W12 production hardening.
 */
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SENTRY_DSN) {
  // Dynamic import so unconfigured builds skip the entire @sentry/nextjs payload.
  // Wired in W12 — see WEBSITE_IMPLEMENTATION_SPRINTS.md Sprint W12.
  console.info("[sentry] DSN detected; full client wiring lands in W12.");
}

export {};
