import type { MetadataRoute } from "next";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-08");

  return [
    { url: `${PUBLIC_SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${PUBLIC_SITE_URL}/buyers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${PUBLIC_SITE_URL}/bioeconomy`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${PUBLIC_SITE_URL}/thesis`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${PUBLIC_SITE_URL}/jaribu`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${PUBLIC_SITE_URL}/buyers.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${PUBLIC_SITE_URL}/bioeconomy.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${PUBLIC_SITE_URL}/thesis.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${PUBLIC_SITE_URL}/jaribu.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${PUBLIC_SITE_URL}/llms.txt`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${PUBLIC_SITE_URL}/llms-full.txt`, lastModified, changeFrequency: "weekly", priority: 0.6 },
  ];
}
