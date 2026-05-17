import { defineField, defineType } from "sanity";

/**
 * Generic marketing page — used for /about, /approach, /buyers (the editorial parts),
 * /investors, /farmers, /press cover copy. Sprint W3 (Recognition Spine) will
 * populate these.
 */
export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title (browser tab + H1)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "audience",
      title: "Primary audience",
      type: "string",
      options: {
        list: [
          { title: "All", value: "all" },
          { title: "Buyer (B2B)", value: "buyer" },
          { title: "Consumer (D2C)", value: "consumer" },
          { title: "Investor", value: "investor" },
          { title: "Farmer (Jaribu)", value: "farmer" },
          { title: "Press", value: "press" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "oneLine",
      title: "Answer-block one-liner",
      description:
        "First citable sentence on the page. Lead with a fact, not poetry. Keep under 200 chars.",
      type: "string",
      validation: (Rule) => Rule.max(220),
    }),
    defineField({
      name: "leadParagraph",
      title: "Lead paragraph",
      description: "50–100 words that completely answer the page's headline question.",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "answerFacts",
      title: "Answer-block facts",
      description: "Definition-list pairs surfaced in the page hero.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "faqs",
      title: "FAQ entries",
      description: "Used to emit FAQPage schema. 6–10 questions recommended on audience pages.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      description: "Overrides title in <title>. 50–60 chars ideal.",
    }),
    defineField({
      name: "seoDescription",
      title: "Meta description",
      type: "text",
      rows: 2,
      description: "150–160 chars.",
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: "ogImage",
      title: "OG image (1200×630)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "updatedAt",
      title: "Last updated",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "audience" },
  },
});
