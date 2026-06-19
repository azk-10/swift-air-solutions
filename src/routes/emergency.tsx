import { createFileRoute } from "@tanstack/react-router";
import { Phone, Siren, Clock3, ShieldCheck, AlertTriangle } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency HVAC Repair in Denver — Summit Climate" },
      { name: "description", content: "No heat? No AC? Carbon monoxide alarm? Call now — real Denver technicians answer 24/7 with no after-hours fee." },
      { property: "og:title", content: "24/7 Emergency HVAC — Summit Climate Co." },
      { property: "og:description", content: "Live techs answer day or night. 90-minute typical emergency response across the Denver metro." },
      { property: "og:url", content: "/emergency" },
    ],
    links: [{ rel: "canonical", href: "/emergency" }],
  }),
  component: EmergencyPage,
});

const promises = [
  { icon: Phone, title: "A human answers", body: "Every call, day or night. No voicemail, no robot." },
  { icon: Clock3, title: "90-minute response", body: "Typical arrival for emergency calls inside the metro." },
  { icon: ShieldCheck, title: "No after-hours fee", body: "You pay the same flat rate at 2am as you do at 2pm." },
];

const issues = [
  "Furnace not igniting or short-cycling",
  "AC blowing warm air or frozen up",
  "Carbon monoxide detector alarming",
  "Burning smell or unusual noises",
  "Water leaking from indoor unit",
  "Thermostat unresponsive in extreme weather",
];

function EmergencyPage() {
  return (
    <>
      <section className="relative bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-foreground/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
              <Siren className="h-3.5 w-3.5" /> 24 / 7 / 365
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We answer when others don't.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-accent-foreground/90">
              Real Denver-based technicians on call every hour of every day. Holidays, weekends, blizzards — your comfort can't wait, and neither do we.
            </p>
            <a href={SITE.phoneHref} className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-5 text-lg font-extrabold text-primary-foreground shadow-xl transition hover:bg-primary-deep">
              <Phone className="h-6 w-6" /> {SITE.phone}
            </a>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {promises.map((p) => (
                <div key={p.title} className="rounded-xl border border-accent-foreground/20 bg-accent-foreground/10 p-4">
                  <p.icon className="h-5 w-5" />
                  <p className="mt-3 font-display text-base font-bold">{p.title}</p>
                  <p className="mt-1 text-sm text-accent-foreground/85">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pt-2">
            <QuoteForm defaultUrgency="emergency" />
          </div>
        </div>
      </section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Common emergencies"
              title="What we treat as a same-night call."
              subtitle="If you're seeing any of the below, don't wait until morning — pick up the phone."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {issues.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm font-medium">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}