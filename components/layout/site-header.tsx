/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface NavItem {
  label: string;
  href: "/" | "/buyers" | "/bioeconomy" | "/about" | "/thesis" | "/jaribu";
}

const NAV_ITEMS: NavItem[] = [
  { label: "Buyers", href: "/buyers" },
  { label: "Bioeconomy", href: "/bioeconomy" },
  { label: "About", href: "/about" },
  { label: "Thesis", href: "/thesis" },
  { label: "Jaribu", href: "/jaribu" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-cream-50/10 bg-navy-900/80 backdrop-blur supports-[backdrop-filter]:bg-navy-900/60">
      <div className="container flex flex-col items-start gap-3 py-4 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Link href="/" className="flex items-center" aria-label="MoedimAI home">
          <img
            src="/images/moedimai-logo-dark.png"
            alt="MoedimAI"
            className="h-10 w-auto shrink-0 md:h-12"
          />
        </Link>
        <nav
          aria-label="Primary"
          className="flex w-full flex-wrap items-center gap-x-1 gap-y-1 sm:w-auto sm:gap-x-1 md:gap-x-2"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-analytics-event="nav_click"
              data-analytics-label={item.label}
              className="rounded-md px-2 py-2 text-xs text-cream-50/80 transition-colors hover:bg-cream-50/5 hover:text-cream-50 sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
