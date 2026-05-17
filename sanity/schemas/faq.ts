import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question (phrased the way a user types into ChatGPT)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer (2–4 sentences, stand-alone if extracted)",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: [
          { title: "Buyer (B2B)", value: "buyer" },
          { title: "Consumer (D2C)", value: "consumer" },
          { title: "Investor", value: "investor" },
          { title: "Farmer (Jaribu)", value: "farmer" },
          { title: "Press", value: "press" },
          { title: "Mixed / general", value: "mixed" },
        ],
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "audience" },
  },
});
