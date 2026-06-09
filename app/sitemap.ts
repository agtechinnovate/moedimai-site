import type { MetadataRoute } from "next";
import { AGENT_FILES, CATEGORY_PAGES, INDEXNOW_KEY_FILE } from "@/lib/content/category-leadership";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-09");
  const categoryPages: MetadataRoute.Sitemap = CATEGORY_PAGES.flatMap((page) => [
    {
      url: `${PUBLIC_SITE_URL}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.kind === "report" ? 0.95 : page.kind === "knowledge" ? 0.85 : 0.75,
    },
    {
      url: `${PUBLIC_SITE_URL}/${page.slug}.md`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.kind === "report" ? 0.65 : 0.55,
    },
  ]);

  const agentFiles: MetadataRoute.Sitemap = AGENT_FILES.map((file) => ({
    url: `${PUBLIC_SITE_URL}/${file}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: file === "llms.txt" || file === "answers.md" ? 0.7 : 0.6,
  }));

  return [
    { url: `${PUBLIC_SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${PUBLIC_SITE_URL}/buyers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${PUBLIC_SITE_URL}/bioeconomy`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${PUBLIC_SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${PUBLIC_SITE_URL}/thesis`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${PUBLIC_SITE_URL}/jaribu`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${PUBLIC_SITE_URL}/buyers.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${PUBLIC_SITE_URL}/bioeconomy.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${PUBLIC_SITE_URL}/about.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${PUBLIC_SITE_URL}/thesis.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${PUBLIC_SITE_URL}/jaribu.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    ...categoryPages,
    ...agentFiles,
    {
      url: `${PUBLIC_SITE_URL}/${INDEXNOW_KEY_FILE}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
  ];
}
