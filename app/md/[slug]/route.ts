import {
  CATEGORY_PAGES,
  categoryMarkdown,
  getCategoryPage,
} from "@/lib/content/category-leadership";
import { markdownResponse } from "@/lib/md-mirror";

export const dynamic = "force-static";

type RouteParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return CATEGORY_PAGES.map((page) => ({ slug: page.slug }));
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;
  const page = getCategoryPage(slug);

  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  return markdownResponse({
    title: page.title,
    oneLine: page.description,
    body: categoryMarkdown(page),
  });
}
