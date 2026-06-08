import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const lastModified = new Date("2026-06-08");

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/buyers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/thesis`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/jaribu`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/buyers.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/thesis.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/jaribu.md`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/llms.txt`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/llms-full.txt`, lastModified, changeFrequency: "weekly", priority: 0.6 },
  ];
}
