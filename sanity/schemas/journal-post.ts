import { defineField, defineType } from "sanity";

export const journalPost = defineType({
  name: "journalPost",
  title: "Journal post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title (H1)",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Use (consumer education)", value: "use" },
          { title: "Origin (farmer + supply chain stories)", value: "origin" },
          { title: "Science (chemotype, lab evidence, regulatory)", value: "science" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "audienceHub",
      title: "Audience hub",
      type: "string",
      options: {
        list: [
          { title: "Wellness (consumer)", value: "wellness" },
          { title: "Sourcing (B2B buyer)", value: "sourcing" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "oneLineSummary",
      title: "One-line summary",
      description: "Max 200 chars. Feeds meta description + Answer Block.",
      type: "string",
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "leadParagraph",
      title: "Lead paragraph",
      description: "50–100 words that completely answer the post's headline question.",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        {
          type: "object",
          name: "factBlock",
          title: "Fact block",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "source", title: "Source URL", type: "url" },
            { name: "sourceTitle", title: "Source title", type: "string" },
          ],
        },
        {
          type: "object",
          name: "pullQuote",
          title: "Pull quote",
          fields: [
            { name: "text", title: "Quote text", type: "text", rows: 2 },
            { name: "attribution", title: "Attribution", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "teamMember" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last updated",
      type: "datetime",
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "relatedPosts",
      title: "Related posts (min 2 required)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "journalPost" }] }],
      validation: (Rule) => Rule.min(2),
    }),
    defineField({
      name: "relatedProducts",
      title: "Related products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "citations",
      title: "Citations",
      description: "External sources cited inline in this post.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "publication", title: "Publication", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQ block (3–6 questions)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
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
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
});
