import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

/**
 * Sanity Studio configuration for the Moedim website CMS.
 *
 * Deploy with `npx sanity deploy` (hosted Studio) or run locally with
 * `npx sanity dev`. The Studio is not embedded in the Next.js app at W2 —
 * that decision belongs in W3+ once visual/auth boundaries are settled.
 */
export default defineConfig({
  name: "moedim-website",
  title: "Moedim Website",
  projectId: projectId || "unconfigured",
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
