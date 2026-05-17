import { defineField, defineType } from "sanity";

/**
 * Editorial product content. Pairs with the `products` row in the website
 * Supabase project — they share `slug`. Sanity owns long-form copy, story,
 * imagery, and FAQ. Supabase owns price, variants, stock, lots, and
 * evidence statuses.
 */
export const product = defineType({
  name: "product",
  title: "Product (editorial)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product name (consumer-facing)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (must match Supabase products.slug)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "latinName",
      title: "Latin binomial",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productType",
      title: "Product type",
      type: "string",
      options: {
        list: [
          { title: "Essential oil", value: "essential_oil" },
          { title: "Botanical / carrier oil", value: "botanical_oil" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collections",
      title: "Collections",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Skin & Hair", value: "skin-and-hair" },
          { title: "Mind & Mood", value: "mind-and-mood" },
          { title: "Breathe & Relief", value: "breathe-and-relief" },
          { title: "Carriers & Botanical Oils", value: "carriers" },
          { title: "The Rare Collection", value: "rare-kenyan" },
        ],
      },
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
      ],
    }),
    defineField({
      name: "oneLineSummary",
      title: "One-line summary",
      type: "string",
      validation: (Rule) => Rule.max(220),
    }),
    defineField({
      name: "aboutBody",
      title: "About this oil",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "originRegion",
      title: "Origin region (broad)",
      type: "string",
      description: "e.g. 'Kenyan Highlands, 2000m'. Never disclose specific farm coordinates.",
    }),
    defineField({
      name: "processMethod",
      title: "Process method",
      type: "string",
      options: {
        list: [
          { title: "Steam distilled", value: "steam_distilled" },
          { title: "Cold pressed, unrefined", value: "cold_pressed_unrefined" },
          { title: "CO2 extracted", value: "co2_extracted" },
        ],
      },
    }),
    defineField({
      name: "aromaProfile",
      title: "Aroma profile (essential oils)",
      type: "string",
    }),
    defineField({
      name: "textureProfile",
      title: "Texture profile (botanical oils)",
      type: "string",
    }),
    defineField({
      name: "isoStandard",
      title: "ISO standard reference",
      description: "e.g. ISO 3515 for English Lavender. Leave blank for oils without an ISO.",
      type: "string",
    }),
    defineField({
      name: "howItWasMade",
      title: "How it was made (8-stage journey notes)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stage",
              title: "Stage",
              type: "string",
              options: {
                list: [
                  "seedling",
                  "soil",
                  "growing",
                  "harvest",
                  "field-to-still",
                  "processing",
                  "qc",
                  "eu-logistics",
                ],
              },
            },
            { name: "note", title: "Note (1 sentence)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "farmerStory",
      title: "Farmer story (requires photo consent)",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Only publish if signed photo consent is on file per DPA 2019. Default to omitting until consent confirmed.",
    }),
    defineField({
      name: "faqs",
      title: "FAQ entries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    defineField({
      name: "relatedProducts",
      title: "Related products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(180),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "latinName", media: "heroImage" },
  },
});
