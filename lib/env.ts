import { z } from "zod";

/**
 * Zod-typed environment validation.
 *
 * Two surfaces:
 *  - `publicEnv` — values exposed to the browser. Must never include secrets.
 *  - `serverEnv` — server-only values (Supabase service role, Sanity write tokens,
 *    Sentry auth tokens). Importing `serverEnv` from a client component fails
 *    at build time via the "use server" guard below.
 *
 * All values are optional in dev so the foundation builds without keys.
 * Production builds should set the variables their features depend on.
 */

const publicSchema = z.object({
  // Site
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),

  // Analytics — all optional
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().min(1).optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().default("https://us.i.posthog.com"),

  // Sentry browser DSN
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional().or(z.literal("")),

  // Sanity — read-only project metadata. Studio also needs these.
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1).default("production"),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1).default("2025-01-01"),

  // Supabase — anon key only. The anon key respects RLS; it is not a secret
  // in the privacy sense but is rate-limited and capability-scoped.
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
});

const serverSchema = z.object({
  SENTRY_ENV: z.enum(["development", "preview", "production"]).default("development"),

  // Sanity write tokens — used only by server-side preview / revalidation routes.
  // Never exposed to the browser.
  SANITY_API_READ_TOKEN: z.string().min(1).optional(),
  SANITY_WEBHOOK_SECRET: z.string().min(1).optional(),

  // Supabase service role — server-only. Bypasses RLS. Reserved for
  // trusted API routes and Vercel Cron jobs.
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
});

const publicParsed = publicSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

if (!publicParsed.success) {
  // eslint-disable-next-line no-console
  console.error(
    "❌ Invalid public environment variables:",
    publicParsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid public environment variables");
}

export const env = publicParsed.data;
export type Env = z.infer<typeof publicSchema>;

/**
 * Server-only env. Throws at import time on the client.
 *
 * Use:
 *   import { serverEnv } from "@/lib/env";  // server modules only
 *
 * If imported from a `"use client"` module, Next.js will fail the build because
 * `process.env.SUPABASE_SERVICE_ROLE_KEY` is undefined in the client bundle.
 * We re-assert that with an explicit runtime check.
 */
export function getServerEnv() {
  if (typeof window !== "undefined") {
    throw new Error(
      "serverEnv accessed in browser context. Server-only env vars must never reach the client bundle.",
    );
  }

  const parsed = serverSchema.safeParse({
    SENTRY_ENV: process.env.SENTRY_ENV,
    SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    SANITY_WEBHOOK_SECRET: process.env.SANITY_WEBHOOK_SECRET,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  });

  if (!parsed.success) {
    // eslint-disable-next-line no-console
    console.error("❌ Invalid server environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid server environment variables");
  }

  return parsed.data;
}

export type ServerEnv = z.infer<typeof serverSchema>;
