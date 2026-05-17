/**
 * Sanity environment values. Read at module load so missing keys fail loud
 * once Studio or content reads are exercised. Empty defaults keep W2 builds
 * green before Vivian provisions the Sanity project.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

/** Server-only read token for draft / preview mode. Never expose to client. */
export const readToken = process.env.SANITY_API_READ_TOKEN ?? "";

export const isConfigured = Boolean(projectId);
