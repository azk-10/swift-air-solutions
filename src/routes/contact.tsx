import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Summit Climate — Get a Free HVAC Quote in Denver" },
      { name: "description", content: "Call (720) 555-0140 or request a free quote online. Same-day callback, 7 days a week, across the Denver metro." },
      { property: "og:title", content: "Contact Summit Climate Co." },
      { property: "og:description", content: "Free quotes, same-day callback, 7 days a week." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Get in touch"
              title="Let's get your home comfortable again."
              subtitle="Call us anytime, or send a quote request and we'll be back to you within an hour during business hours — and within four, evenings and weekends."
            />
            <ul className="mt-10 space-y-5 text-primary-foreground/90">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Phone · 24/7</p>
                  <a href={SITE.phoneHref} className="font-display text-2xl font-extrabold hover:text-accent">{SITE.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-lg font-semibold hover:text-accent">{SITE.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Office</p>
                  <p className="text-base font-medium">{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground"><Clock className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Hours</p>
                  <p className="text-base font-medium">Office: Mon–Fri 7am–7pm · Sat 8am–4pm<br />Emergency dispatch: 24 / 7 / 365</p>
                </div>
              </li>
            </ul>
          </div>
          <QuoteForm variant="page" />
        </div>
      </Section>

      <Section tone="muted">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
          <iframe
            title="Summit Climate Co. office location"
            src="https://www.google.com/maps?q=4180+W+38th+Ave+Denver+CO&output=embed"
            width="100%"
            height="440"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[440px] w-full border-0"
          />
        </div>
      </Section>
    </>
  );
}