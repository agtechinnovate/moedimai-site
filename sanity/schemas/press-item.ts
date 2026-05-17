import { defineField, defineType } from "sanity";

export const pressItem = defineType({
  name: "pressItem",
  title: "Press item",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publication",
      title: "Publication",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "externalUrl",
      title: "External article URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Short summary (1–2 sentences)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: {
        list: [
          { title: "Article / interview", value: "article" },
          { title: "Award / recognition", value: "award" },
          { title: "Podcast / video", value: "podcast" },
          { title: "Press release (ours)", value: "press_release" },
        ],
      },
    }),
    defineField({
      name: "logo",
      title: "Publication logo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "headline", subtitle: "publication", media: "logo" },
  },
  orderings: [
    {
      title: "Most recent first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
