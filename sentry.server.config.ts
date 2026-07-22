/**
 * Sentry server-side scaffolding. Activates only when NEXT_PUBLIC_SENTRY_DSN is set.
 *
 * W1 ships this as a no-op stub. Full Sentry wiring lands in Sprint W12.
 */
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  console.info("[sentry] DSN detected; full server wiring lands in W12.");
}

export {};
