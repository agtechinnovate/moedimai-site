import { defineField, defineType } from "sanity";

/**
 * Sample / template / public-facing evidence documents.
 *
 * NOT a substitute for the real lot-level documents stored in private Supabase
 * buckets. This schema is for marketing-page examples (e.g. "What a Moedim
 * Verified COA looks like"). Real lot documents have access rules and stay
 * out of Sanity entirely.
 */
export const evidenceDocument = defineType({
  name: "evidenceDocument",
  title: "Evidence document (sample / template)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "documentType",
      title: "Document type",
      type: "string",
      options: {
        list: [
          { title: "COA — GC-MS chromatogram", value: "coa_gcms" },
          { title: "SDS / MSDS — safety data sheet", value: "sds" },
          { title: "IFRA certificate of conformity", value: "ifra" },
          { title: "Allergen statement", value: "allergen" },
          { title: "Pesticide residue panel", value: "pesticide" },
          { title: "Heavy metals panel", value: "heavy_metals" },
          { title: "Microbiology panel", value: "microbiology" },
          { title: "Organic conversion evidence", value: "organic" },
          { title: "Chain of custody", value: "chain_of_custody" },
          { title: "Phytosanitary certificate", value: "phytosanitary" },
          { title: "Technical data sheet (TDS)", value: "tds" },
          { title: "Fatty acid profile (FAMEs)", value: "fame" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Display status",
      type: "string",
      description:
        "Honest evidence status per W0 §2.6. Never label as 'active' unless the underlying document is real and current.",
      options: {
        list: [
          { title: "Sample (template — not Moedim lot)", value: "sample" },
          { title: "Active (real lot document)", value: "active" },
          { title: "Pending (lab cycle in progress)", value: "pending" },
          { title: "Expired", value: "expired" },
          { title: "Not applicable", value: "not_applicable" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "What this document shows",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "pdfAsset",
      title: "PDF (sample only — real lot docs live in Supabase Storage)",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "previewImage",
      title: "Preview image (1st-page snapshot)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "relatedProduct",
      title: "Related product",
      type: "reference",
      to: [{ type: "product" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "documentType", media: "previewImage" },
  },
});
