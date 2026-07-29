import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact and support",
  description:
    "Contact MoedimAI for Moedim Field support, privacy requests, and security reporting.",
};

const SUPPORT_ROUTES = [
  {
    title: "Moedim Field support",
    body: "For sign-in, assigned-work, sync, or device-readiness help, contact your organization administrator first. If the issue still needs Moedim support, email our support address.",
    action: (
      <a
        href="mailto:info@moedimai.com?subject=Moedim%20Field%20support"
        className="text-gold-500 underline-offset-4 hover:underline"
      >
        info@moedimai.com
      </a>
    ),
  },
  {
    title: "Privacy and deletion requests",
    body: "You may ask to access, correct, delete, restrict, or object to eligible processing. The privacy notice explains the request route, identity checks, retention limits, and records that may need to be kept.",
    action: (
      <Link href="/privacy" className="text-gold-500 underline-offset-4 hover:underline">
        Read the privacy notice
      </Link>
    ),
  },
  {
    title: "Security concerns",
    body: "Report suspected account compromise, unsafe access, or another security concern through the security-reporting route. Do not send passwords, authentication codes, or full personal records by ordinary email.",
    action: (
      <Link href="/security" className="text-gold-500 underline-offset-4 hover:underline">
        Read the security reporting guide
      </Link>
    ),
  },
] as const;

export default function ContactPage() {
  return (
    <section className="container py-16 md:py-20">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-500">
        Contact and support
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
        Start with the route that matches what you need.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream-50/85">
        MoedimAI Incorporated supports authorized customers and field teams. The public app does not
        create customer accounts, sell subscriptions, or provide emergency services.
      </p>
      <div className="mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
        {SUPPORT_ROUTES.map(({ title, body, action }) => (
          <article
            key={title}
            className="flex flex-col rounded-md border border-cream-50/10 bg-navy-900/40 p-5"
          >
            <h2 className="font-display text-xl text-cream-50">{title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-50/75">{body}</p>
            <p className="mt-5 text-sm">{action}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-4xl text-xs leading-relaxed text-cream-50/55">
        Include the affected service, what happened, when it happened, and a safe way to contact
        you. Do not include passwords, one-time codes, access tokens, national-ID images, or another
        person&apos;s records.
      </p>
    </section>
  );
}
