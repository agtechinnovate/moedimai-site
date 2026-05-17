import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * Public Sanity client. Reads published content only.
 *
 * Until `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, the client is created with
 * a placeholder project id so the module loads without error. Queries against
 * an unconfigured client return empty arrays at runtime — pages render their
 * placeholder-safe fallback content instead of crashing.
 */
export const client = createClient({
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

/**
 * Server-side preview client. Reads drafts. Requires SANITY_API_READ_TOKEN.
 * Wired in W10 (Journal) for live draft previews.
 */
export function getPreviewClient(token: string) {
  return createClient({
    projectId: projectId || "unconfigured",
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "previewDrafts",
    token,
  });
}
