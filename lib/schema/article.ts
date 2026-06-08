import { PUBLIC_SITE_URL } from "@/lib/site-url";

export interface ArticleSchemaInput {
  slug: string;
  headline: string;
  description: string;
  authorName: string;
  authorSlug: string;
  authorRole?: string;
  authorKnowsAbout?: string[];
  publishedAt: string; // ISO datetime
  updatedAt?: string;
  imageUrl?: string;
}

const baseUrl = PUBLIC_SITE_URL;

/**
 * Article JSON-LD for /journal/[slug]. Includes a Person record for the
 * author so AI engines can identify our voice across articles.
 */
export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: input.imageUrl,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/team#${input.authorSlug}`,
      name: input.authorName,
      url: `${baseUrl}/team#${input.authorSlug}`,
      jobTitle: input.authorRole,
      knowsAbout: input.authorKnowsAbout,
    },
    publisher: { "@id": `${baseUrl}/#organization` },
    mainEntityOfPage: `${baseUrl}/journal/${input.slug}`,
  };
}
