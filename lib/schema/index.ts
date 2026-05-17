/**
 * JSON-LD schema helpers.
 *
 * Every public page emits at least one schema block. The Schema component
 * renders the JSON-LD as a <script type="application/ld+json"> in the page.
 *
 * Type definitions kept loose (Record<string, unknown>) because Schema.org
 * accepts a large surface and TypeScript's structural typing is more
 * obstructive than helpful here. Validation happens at deploy time via
 * Google Rich Results Test (W12 wires this into CI).
 */
export { Schema } from "./schema-component";
export { organizationSchema, websiteSchema } from "./global";
export { breadcrumbList } from "./breadcrumb";
export { faqPage } from "./faq";
export type { FaqEntry } from "./faq";
export { productSchema } from "./product";
export type { ProductSchemaInput } from "./product";
export { articleSchema } from "./article";
export type { ArticleSchemaInput } from "./article";
