/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-cream-50/10 bg-navy-900/85 backdrop-blur supports-[backdrop-filter]:bg-navy-900/70">
      <div className="container flex flex-col items-start gap-3 py-4 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Link href="/" className="flex items-center" aria-label="MoedimAI home">
          <img
            src="/images/moedimai-logo-dark.png"
            alt="MoedimAI"
            className="h-10 w-auto shrink-0 md:h-12"
          />
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vivian%40moedim.ai&su=MoedimAI%20demo%20request"
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="demo_click"
          data-analytics-label="header request demo"
          className="inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
        >
          Request a demo
        </a>
      </div>
    </header>
  );
}
