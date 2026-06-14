import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CANONICAL_ONE_LINER,
  CATEGORY_KEYWORDS,
  CATEGORY_PAGES,
  getCategoryPage,
} from "@/lib/content/category-leadership";
import type { CategoryPage } from "@/lib/content/category-leadership";
import { Schema, breadcrumbList, faqPage } from "@/lib/schema";
import { PUBLIC_SITE_URL } from "@/lib/site-url";

type PageParams = {
  slug: string;
};

export function generateStaticParams(): PageParams[] {
  return CATEGORY_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const page = getCategoryPage(params.slug);
  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [page.ownedPhrase, ...CATEGORY_KEYWORDS],
    alternates: {
      canonical: `/${page.slug}`,
      types: {
        "text/markdown": [{ url: `/${page.slug}.md`, title: `${page.title} markdown` }],
      },
    },
    openGraph: {
      type: "article",
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      images: [
        {
          url: "/images/moedimai-social-card.png",
          width: 1200,
          height: 630,
          alt: "MoedimAI AI supply chain platform driving Africa's bioeconomy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/moedimai-social-card.png"],
    },
  };
}

export default function CategoryLeadershipPage({ params }: { params: PageParams }) {
  const page = getCategoryPage(params.slug);

  if (!page) {
    notFound();
  }

  const relatedPages = page.relatedSlugs
    .map((slug) => getCategoryPage(slug))
    .filter((relatedPage): relatedPage is CategoryPage => Boolean(relatedPage));

  const pageUrl = `${PUBLIC_SITE_URL}/${page.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": page.kind === "report" || page.kind === "knowledge" ? "Article" : "WebPage",
    "@id": `${pageUrl}#article`,
    headline: page.title,
    name: page.title,
    description: page.description,
    url: pageUrl,
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    author: { "@id": `${PUBLIC_SITE_URL}/about#founder` },
    publisher: { "@id": `${PUBLIC_SITE_URL}/#organization` },
    mainEntityOfPage: pageUrl,
    about: [page.ownedPhrase, "MoedimAI", "AI supply chain platform Africa", "Africa's bioeconomy"],
    isPartOf: { "@id": `${PUBLIC_SITE_URL}/#website` },
  } as const;

  return (
    <>
      <Schema
        data={[
          articleSchema,
          faqPage(page.faqs),
          breadcrumbList([{ name: page.shortTitle, path: `/${page.slug}` }]),
        ]}
      />
      <article className="border-b border-cream-50/10">
        <section className="container py-14 md:py-20">
          <div className="max-w-4xl">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 font-sans text-3xl font-semibold leading-tight text-cream-50 md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-cream-50/80 md:text-lg">
              {page.lede}
            </p>
            <p className="mt-5 max-w-3xl rounded-md border border-cream-50/10 bg-navy-800/50 p-4 text-sm leading-6 text-cream-50/75">
              {CANONICAL_ONE_LINER}
            </p>
          </div>
        </section>

        <section className="border-t border-cream-50/10 bg-navy-800/30">
          <div className="container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-9">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-sans text-2xl font-semibold text-cream-50">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-cream-50/75 md:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="font-sans text-2xl font-semibold text-cream-50">Direct answers</h2>
                <div className="mt-5 grid gap-4">
                  {page.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="rounded-md border border-cream-50/10 bg-navy-900/55 p-5"
                    >
                      <h3 className="font-sans text-base font-semibold text-cream-50">
                        {faq.question}
                      </h3>
                      <p className="text-cream-50/72 mt-3 text-sm leading-6">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-md border border-cream-50/10 bg-navy-900/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-500">Owned phrase</p>
                <p className="mt-3 text-sm leading-6 text-cream-50/80">{page.ownedPhrase}</p>
              </div>

              <div className="rounded-md border border-cream-50/10 bg-navy-900/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-500">Sources</p>
                <ul className="mt-3 space-y-3 text-sm leading-6">
                  {page.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 underline-offset-4 hover:underline"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-cream-50/10 bg-navy-900/70 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-500">Related</p>
                <ul className="mt-3 space-y-3 text-sm leading-6">
                  {relatedPages.map((relatedPage) => (
                    <li key={relatedPage.slug}>
                      <Link
                        href={`/${relatedPage.slug}` as Route}
                        className="text-cream-50/80 underline-offset-4 hover:text-cream-50 hover:underline"
                      >
                        {relatedPage.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-gold-500/35 bg-gold-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-500">Contact</p>
                <p className="mt-3 text-sm leading-6 text-cream-50/80">
                  Demo, buyer, investor, and partnership inquiries.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vivian%40moedim.ai&su=MoedimAI%20demo%20request"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="demo_click"
                  data-analytics-label={`${page.slug} sidebar`}
                  className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300"
                >
                  {page.ctaLabel ?? "Request a demo"}
                </a>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
