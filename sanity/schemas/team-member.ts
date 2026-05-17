import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Anchor slug (e.g. vivian-nwakah)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / job title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short bio (60 words)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "longBio",
      title: "Long bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "knowsAbout",
      title: "Areas of expertise",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "alumniOf",
      title: "Previous companies (for Person schema)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "photo",
      title: "Headshot",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter / X URL",
      type: "url",
    }),
    defineField({
      name: "publicConsent",
      title: "Public-display consent on file?",
      description:
        "Required before this profile is published on the public site per DPA 2019. Vivian + lawyer confirm.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
