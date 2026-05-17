import { defineField, defineType } from "sanity";

/**
 * Gated B2B downloads — Technical Buyer Pack, sample COA, fact sheets, etc.
 * Capturing the email + company is handled in Supabase (`coa_downloads`-style
 * table arrives in W4). This schema owns the asset metadata + access rules.
 */
export const buyerResource = defineType({
  name: "buyerResource",
  title: "Buyer resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: {
        list: [
          { title: "Technical buyer pack", value: "tech_buyer_pack" },
          { title: "Sample COA (template)", value: "sample_coa" },
          { title: "Sourcing fact sheet", value: "fact_sheet" },
          { title: "Sustainability brief", value: "sustainability_brief" },
          { title: "Compliance / regulatory primer", value: "compliance" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "What's in this download",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "asset",
      title: "Downloadable asset (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "previewImage",
      title: "Preview image / cover",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gated",
      title: "Email-gated?",
      description:
        "If true, /buyers and /wholesale require email capture before serving the asset.",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "audience",
      title: "Audience tag",
      type: "string",
      options: {
        list: [
          { title: "Cosmetic formulator", value: "cosmetic_formulator" },
          { title: "Fragrance house", value: "fragrance_house" },
          { title: "Distributor / reseller", value: "distributor" },
          { title: "Aromatherapy brand", value: "aromatherapy_brand" },
          { title: "Research / academic", value: "research" },
          { title: "Mixed", value: "mixed" },
        ],
      },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "kind", media: "previewImage" },
  },
});
