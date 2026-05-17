/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface NavItem {
  label: string;
  href: "/" | "/buyers" | "/thesis" | "/jaribu";
}

const NAV_ITEMS: NavItem[] = [
  { label: "Buyers", href: "/buyers" },
  { label: "Thesis", href: "/thesis" },
  { label: "Jaribu", href: "/jaribu" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-cream-50/10 bg-navy-900/80 backdrop-blur supports-[backdrop-filter]:bg-navy-900/60">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="MoedimAI home">
          <img
            src="/images/moedimai-logo-dark.png"
            alt="MoedimAI"
            className="h-10 w-auto md:h-12"
          />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-cream-50/80 transition-colors hover:bg-cream-50/5 hover:text-cream-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
