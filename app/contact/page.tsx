import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support and privacy requests",
  description:
    "Contact MoedimAI for app support, account access, privacy choices, or a security concern.",
};

const SUPPORT_EMAIL = "vivian@moedim.ai";

export default function ContactPage() {
  return (
    <section className="container py-16 md:py-20">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        Support and privacy requests
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Tell us what you need help with.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream-50/85">
        This is the public support route for Moedim Field and MoedimAI operating services. Choose
        the request below so it reaches the right review path. Do not send passwords, authentication
        codes, identity documents, or detailed field evidence by ordinary email.
      </p>

      <div className="mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
        <article className="rounded-md border border-cream-50/10 bg-navy-900/40 p-5">
          <h2 className="font-display text-xl text-cream-50">App and account support</h2>
          <p className="mt-2 text-sm leading-relaxed text-cream-50/75">
            Ask for help with sign-in, an organization-issued account, device activation, an
            assigned roster, offline work, or synchronization. Include the app version and a short
            description of what happened, but never include your password.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Moedim%20Field%20support`}
            className="hover:bg-gold-400 mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-gold-500 px-5 py-3 font-sans text-sm font-semibold text-navy-900 transition"
          >
            Email app support
          </a>
        </article>

        <article className="rounded-md border border-gold-500/25 bg-navy-900 p-5">
          <h2 className="font-display text-xl text-cream-50">Privacy or account deletion</h2>
          <p className="mt-2 text-sm leading-relaxed text-cream-50/80">
            Request access, correction, deletion, restriction, or another privacy choice. We may
            need to verify your identity. We will explain if certification, contract, safety,
            dispute, audit, or legal duties require us to retain a limited record.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Privacy%20or%20account%20deletion%20request`}
            className="hover:bg-gold-400 mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-gold-500 px-5 py-3 font-sans text-sm font-semibold text-navy-900 transition"
          >
            Request privacy help or deletion
          </a>
        </article>
      </div>

      <article className="mt-8 max-w-4xl rounded-md border border-cream-50/10 bg-navy-900/40 p-6">
        <h2 className="font-display text-2xl text-cream-50">Security concern</h2>
        <p className="mt-3 text-sm leading-relaxed text-cream-50/80">
          If you believe an account, device, record, or Moedim service may be unsafe, use the
          security-reporting instructions. They explain what to include and what not to send by
          email.
        </p>
        <Link
          href="/security"
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md border border-gold-500 px-5 py-3 font-sans text-sm font-semibold text-gold-500 transition hover:bg-gold-500/10"
        >
          Read security reporting guidance
        </Link>
      </article>

      <p className="mt-8 max-w-4xl text-xs leading-relaxed text-cream-50/55">
        Public contact:{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-gold-500 underline-offset-4 hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>
        . MoedimAI Incorporated handles requests under the privacy notice and the program or
        organization terms that apply to the account.
      </p>
    </section>
  );
}
