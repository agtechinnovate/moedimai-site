/* eslint-disable @next/next/no-img-element */
export function SiteFooter() {
  return (
    <footer className="border-t border-cream-50/10 bg-navy-900">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(240px,340px)]">
          <div>
            <img src="/images/moedimai-logo-dark.png" alt="MoedimAI" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-cream-50/70">
              MoedimAI is the enterprise intelligence and execution platform for agricultural value
              chains.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href="/#platform" className="text-cream-50/70 hover:text-gold-300">
                Platform
              </a>
              <a href="/#moedim-field" className="text-cream-50/70 hover:text-gold-300">
                Moedim Field
              </a>
              <a href="/#enterprise-solutions" className="text-cream-50/70 hover:text-gold-300">
                Enterprise Solutions
              </a>
              <a href="/about" className="text-cream-50/70 hover:text-gold-300">
                About
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream-50/60">
              Contact
            </h2>
            <p className="mt-4 text-sm">
              <a
                href="mailto:vivian@moedim.ai"
                data-analytics-event="email_click"
                data-analytics-label="footer email"
                className="text-gold-500 underline-offset-4 hover:underline"
              >
                vivian@moedim.ai
              </a>
            </p>
            <p className="mt-4 text-sm">
              <a
                href="https://www.moedimharvest.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="harvest_click"
                data-analytics-label="footer moedim harvest"
                className="text-gold-500 underline-offset-4 hover:underline"
              >
                Agricultural product sourcing: Moedim Harvest
              </a>
            </p>
            <p className="mt-2 text-xs text-cream-50/55">
              Separate sister company for supply programmes and global distribution.
            </p>
            <p className="mt-4 text-sm text-cream-50/80">Kenya · Netherlands · United States</p>
            <p className="mt-2 text-xs text-cream-50/55">
              Technology, monitoring and benchmarking from field activity to global delivery.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50 md:flex-row md:items-center">
          <p>© 2026 MoedimAI Inc. A Delaware public benefit corporation.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="/privacy" className="underline-offset-4 hover:text-cream-50 hover:underline">
              Privacy
            </a>
            <a href="/security" className="underline-offset-4 hover:text-cream-50 hover:underline">
              Security
            </a>
            <span>Enterprise intelligence for agricultural value chains.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
