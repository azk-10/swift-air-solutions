import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ArrowRight, Snowflake, Flame, Wrench, Settings2, Siren, ShieldCheck,
  Clock3, ThumbsUp, BadgePercent, Sparkles, Star, MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import furnaceImg from "@/assets/project-furnace.jpg";
import acImg from "@/assets/project-ac.jpg";
import thermoImg from "@/assets/project-thermostat.jpg";
import ductsImg from "@/assets/project-ducts.jpg";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { QuoteForm } from "@/components/site/QuoteForm";
import { TrustBadges } from "@/components/site/TrustBadges";
import { Section, SectionHeading } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denver HVAC Repair & Installation — Summit Climate Co." },
      { name: "description", content: "24/7 HVAC repair, AC, heating, and installation in Denver. Same-day service, transparent flat-rate pricing, 4.9★ from 800+ neighbors." },
      { property: "og:title", content: "Denver HVAC — Summit Climate Co." },
      { property: "og:description", content: "Denver's premium heating & cooling team. 24/7 emergency service, NATE-certified technicians, lifetime workmanship guarantee." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Snowflake, title: "AC Repair & Tune-Ups", body: "Fast diagnostics on every brand. Most repairs done same-day with parts on the truck." },
  { icon: Flame, title: "Heating & Furnace", body: "Furnaces, heat pumps, boilers. Safety-first repair from technicians who train year-round." },
  { icon: Wrench, title: "New System Install", body: "Right-sized Trane, Carrier, and Lennox systems. Up to $3,000 in manufacturer rebates." },
  { icon: Settings2, title: "Maintenance Plans", body: "Two visits a year, priority scheduling, and 15% off any repair. From $14/month." },
];

const whyUs = [
  { icon: Clock3, title: "On time, every time", body: "Two-hour arrival windows. If we're late, your diagnostic is free." },
  { icon: ShieldCheck, title: "Upfront flat pricing", body: "You approve the price before we lift a wrench. No hourly surprises." },
  { icon: ThumbsUp, title: "Lifetime workmanship", body: "We stand behind every install for as long as you own your home." },
  { icon: BadgePercent, title: "0% financing", body: "Approved in minutes. 18 months same-as-cash on qualifying systems." },
  { icon: Sparkles, title: "Clean & respectful", body: "Floor protection, shoe covers, and a spotless work area — guaranteed." },
  { icon: Siren, title: "24/7 real humans", body: "A live person answers every emergency call, day or night, holidays included." },
];

const reviews = [
  { name: "Sarah K.", city: "Highlands, Denver", text: "Furnace died at 11pm on a Sunday. Marcus was at our door by 12:30am with the part on his truck. Heat back on before sunrise. Unreal service." },
  { name: "David M.", city: "Boulder", text: "Got three quotes for a new heat pump. Summit was the only company that actually did a load calculation. Install was flawless and came in under budget." },
  { name: "Priya R.", city: "Centennial", text: "Honest pricing, no upsells, and the technician spent 20 minutes teaching me how to maintain my system. This is how every contractor should run." },
];

const faqs = [
  { q: "How fast can you get to me?", a: "We dispatch from three Denver-area locations and aim for 90-minute response on emergencies, same-day for standard repairs booked before 2pm." },
  { q: "Do you charge a diagnostic fee?", a: "Our standard diagnostic is $89 and is waived completely when you approve the repair. Maintenance plan members never pay a diagnostic fee." },
  { q: "What brands do you service and install?", a: "We service every major residential brand and install Trane, Carrier, Lennox, Mitsubishi, and Rheem as a factory-authorized dealer." },
  { q: "Is financing actually 0%?", a: "Yes — qualified buyers get true 0% APR for 18 months through Wells Fargo Home Projects. We can approve you in under five minutes." },
  { q: "Are your technicians employees?", a: "Every Summit technician is a W-2 employee — background-checked, drug-tested, NATE-certified, and continuously trained at our in-house lab." },
  { q: "What's covered by your warranty?", a: "New systems carry the manufacturer's parts warranty plus our lifetime labor guarantee. Repairs are covered for one full year." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-surface-dark text-primary-foreground">
        <img
          src={heroImg}
          alt="Summit Climate technician servicing a high-efficiency AC unit at a Denver home"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,oklch(0.18_0.07_263/0.95)_0%,oklch(0.24_0.08_263/0.78)_55%,oklch(0.24_0.08_263/0.45)_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent backdrop-blur">
              <Siren className="h-3.5 w-3.5" /> 24/7 Emergency Service
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Denver's most trusted name in <span className="text-accent">heating & cooling.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Family-owned since 2011. NATE-certified technicians, transparent flat-rate pricing, and a lifetime workmanship guarantee on every install.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition hover:bg-accent/90"
              >
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/15"
              >
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10">
              <TrustBadges tone="dark" />
            </div>
          </div>
          <div className="lg:pt-2">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Full-service HVAC for every Denver home"
          subtitle="From a single tune-up to a whole-home system replacement, we handle it end-to-end — permits, install, and follow-up."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, body }) => (
            <Link
              key={title}
              to="/services"
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-soft text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* EMERGENCY BANNER */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-foreground/15">
              <Siren className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">No heat? No AC? We're already on the way.</p>
              <p className="mt-1 text-sm font-medium text-accent-foreground/85">Real technicians answer 24/7 — no voicemail, no after-hours fee.</p>
            </div>
          </div>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition hover:bg-primary-deep"
          >
            <Phone className="h-5 w-5" /> {SITE.phone}
          </a>
        </div>
      </section>

      {/* WHY US */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <SectionHeading
            eyebrow="Why neighbors choose us"
            title="The HVAC experience you wish you'd always had."
            subtitle="No high-pressure sales. No hourly meter running. Just expert work, finished right the first time."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section>
        <SectionHeading
          eyebrow="Recent work"
          title="Installs we're proud to put our name on."
          subtitle="A look at recent residential projects across the Denver metro — from full furnace swaps to ductless mini-split installs."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: furnaceImg, label: "High-efficiency furnace replacement", city: "Wash Park" },
            { src: acImg, label: "16-SEER AC install", city: "Lakewood" },
            { src: thermoImg, label: "Smart thermostat integration", city: "RiNo" },
            { src: ductsImg, label: "Full ductwork retrofit", city: "Castle Rock" },
          ].map((p) => (
            <figure key={p.label} className="group relative overflow-hidden rounded-xl border border-border bg-card">
              <img src={p.src} alt={p.label} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,oklch(0.18_0.07_263/0.92))] p-4 text-primary-foreground">
                <p className="text-sm font-semibold">{p.label}</p>
                <p className="text-xs text-primary-foreground/75">{p.city}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Real reviews"
          tone="light"
          title="4.9★ from 820+ Denver homeowners."
          subtitle="We've earned our reputation one driveway at a time. Here's what neighbors are saying this month."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 grow text-base leading-relaxed text-primary-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-bold text-primary-foreground">{r.name}</span>
                <span className="text-primary-foreground/60"> · {r.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
            Read all 820+ reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Proudly serving the Front Range."
              subtitle="Dispatching from three Denver-area locations means a tech is almost always minutes from your door."
            />
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium text-foreground/85 sm:grid-cols-3">
              {SERVICE_AREAS.map((c) => (
                <li key={c} className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent" /> {c}</li>
              ))}
            </ul>
            <Link to="/service-areas" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
              See full service area <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps?q=Denver%20CO&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[380px] w-full border-0"
            />
          </div>
        </div>
      </Section>

      {/* FINANCING */}
      <Section>
        <div className="grid gap-10 rounded-3xl border border-border bg-gradient-to-br from-primary to-primary-deep p-8 text-primary-foreground sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
              <BadgePercent className="h-4 w-4" /> Financing
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              0% APR for 18 months on qualifying new systems.
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Approved in minutes through Wells Fargo Home Projects. Bundle with Xcel rebates and federal tax credits to save up to $5,400 on a high-efficiency heat pump.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { k: "0%", v: "APR for 18 mo." },
              { k: "$5,400", v: "Avg. rebates & credits" },
              { k: "5 min", v: "Approval decision" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-center">
                <p className="font-display text-3xl font-extrabold text-accent">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">{s.v}</p>
              </div>
            ))}
            <Link to="/contact" className="sm:col-span-3 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground">
              Check my financing options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers, before you call."
            subtitle="Still wondering something? We're happy to talk it through — no obligation."
          />
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="px-5">
                <AccordionTrigger className="text-left font-display text-base font-bold text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-surface-dark text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Comfort is a phone call away.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75">
            Book online or call now — we'll have a tech at your door, often the same day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-4 text-base font-bold text-accent-foreground">
              <Phone className="h-5 w-5" /> {SITE.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-4 text-base font-semibold">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
