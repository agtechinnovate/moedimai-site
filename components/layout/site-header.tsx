/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/#platform" },
  { label: "Moedim Field", href: "/#moedim-field" },
  { label: "Enterprise Solutions", href: "/#enterprise-solutions" },
  { label: "About", href: "/about" },
] as const;

export function SiteHeader() {
  return (
    <>
      <div className="bg-gold-500 px-4 py-2 text-center text-xs font-semibold text-navy-900">
        Moedim Field is available through the Apple App Store and Google Play
      </div>
      <header className="sticky top-0 z-50 border-b border-cream-50/10 bg-navy-900/95 backdrop-blur">
        <div className="container flex min-h-20 items-center justify-between gap-5 py-3">
          <Link href="/" className="flex items-center" aria-label="MoedimAI home">
            <img
              src="/images/moedimai-logo-dark.png"
              alt="MoedimAI"
              className="h-10 w-auto shrink-0 md:h-12"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-cream-50/70 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.moedimharvest.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="harvest_click"
              data-analytics-label="header product sourcing"
              className="ml-2 inline-flex h-11 items-center justify-center rounded-md border border-cream-50/25 px-4 text-sm font-medium text-cream-50 transition-colors hover:border-gold-500 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              Product sourcing
            </a>
            <a
              href="mailto:vivian@moedim.ai?subject=MoedimAI%20platform%20information"
              data-analytics-event="platform_information_click"
              data-analytics-label="header"
              className="ml-2 inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-4 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              Request information
            </a>
          </nav>

          <details className="group relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-cream-50/25 px-4 py-2.5 text-sm font-medium text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300">
              Menu
            </summary>
            <nav
              aria-label="Primary mobile"
              className="absolute right-0 z-[60] mt-2 flex min-w-64 flex-col rounded-lg border border-cream-50/15 bg-navy-900 p-3 shadow-2xl"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-cream-50/75 transition-colors hover:bg-cream-50/5 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.moedimharvest.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="harvest_click"
                data-analytics-label="mobile header product sourcing"
                className="rounded-md px-3 py-2.5 text-sm font-medium text-cream-50/75 transition-colors hover:bg-cream-50/5 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                Product sourcing
              </a>
              <a
                href="mailto:vivian@moedim.ai?subject=MoedimAI%20platform%20information"
                data-analytics-event="platform_information_click"
                data-analytics-label="mobile header"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-gold-500 px-5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
              >
                Request information
              </a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
