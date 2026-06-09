import { CATEGORY_PAGES, categoryMarkdown, getCategoryPage } from "@/lib/content/category-leadership";
import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

type RouteParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return CATEGORY_PAGES.map((page) => ({ slug: page.slug }));
}

export function GET(_request: Request, { params }: RouteParams) {
  const page = getCategoryPage(params.slug);

  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  return markdownResponse({
    title: page.title,
    oneLine: page.description,
    body: categoryMarkdown(page),
  });
}
