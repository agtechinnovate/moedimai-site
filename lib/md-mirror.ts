/**
 * Markdown mirror helpers.
 *
 * Every public page has a sibling `.md` route that returns plain Markdown.
 * LLMs and AI retrieval systems consume these directly — no HTML parsing
 * required. The pattern is exposed via this module so each route handler
 * stays a 1-liner.
 *
 * Convention (per engineering brief §4.2):
 *   /about       <-> /about.md
 *   /shop        <-> /shop.md
 *   /shop/product/leleshwa <-> /shop/product/leleshwa.md
 */
import { NextResponse } from "next/server";

export type MdMirrorContent = {
  title: string;
  oneLine: string;
  body: string;
};

export function markdownResponse(content: MdMirrorContent) {
  const md = [`# ${content.title}`, "", `> ${content.oneLine}`, "", content.body].join("\n");
  return new NextResponse(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // No cache here so updates flow immediately. CDN layer (Cloudflare in W11)
      // can override with edge cache TTL once routes stabilise.
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
