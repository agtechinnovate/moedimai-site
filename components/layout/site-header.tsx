/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface NavItem {
  label: string;
  href: "/buyers" | "/thesis" | "/jaribu";
}

const NAV_ITEMS: NavItem[] = [
  { label: "Buyers", href: "/buyers" },
  { label: "Thesis", href: "/thesis" },
  { label: "Jaribu", href: "/jaribu" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-cream-50/10 bg-navy-900/85 backdrop-blur supports-[backdrop-filter]:bg-navy-900/70">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="MoedimAI home">
          <img
            src="/images/moedimai-logo-dark.png"
            alt="MoedimAI"
            className="h-10 w-auto shrink-0 md:h-12"
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-3 text-sm font-medium text-cream-50/70 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.moedimharvest.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="harvest_click"
            data-analytics-label="header moedim harvest"
            className="ml-2 inline-flex h-11 items-center justify-center rounded-md border border-cream-50/25 px-5 text-sm font-medium text-cream-50 transition-colors hover:border-gold-500 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            Moedim Harvest ↗
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vivian%40moedim.ai&su=MoedimAI%20demo%20request"
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="demo_click"
            data-analytics-label="header request demo"
            className="ml-2 inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            Request a demo
          </a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-cream-50/25 px-4 py-2.5 text-sm font-medium text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300">
            Menu
          </summary>
          <nav
            aria-label="Primary mobile"
            className="absolute right-0 z-[60] mt-2 flex min-w-60 flex-col rounded-lg border border-cream-50/15 bg-navy-900 p-3 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-cream-50/75 transition-colors hover:bg-cream-50/5 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.moedimharvest.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="harvest_click"
              data-analytics-label="mobile header moedim harvest"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-cream-50/75 transition-colors hover:bg-cream-50/5 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              Moedim Harvest ↗
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vivian%40moedim.ai&su=MoedimAI%20demo%20request"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="demo_click"
              data-analytics-label="mobile header request demo"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              Request a demo
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
