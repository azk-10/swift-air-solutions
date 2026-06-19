import { createFileRoute, Link } from "@tanstack/react-router";
import { Snowflake, Flame, Wrench, Settings2, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "HVAC Services in Denver — AC, Heating, Install & Maintenance" },
      { name: "description", content: "AC repair, heating, new installations, and maintenance plans across the Denver metro. Flat-rate pricing, NATE-certified techs, lifetime workmanship." },
      { property: "og:title", content: "HVAC Services — Summit Climate Co." },
      { property: "og:description", content: "Heating, cooling, installation, and maintenance — done right the first time." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const blocks = [
  {
    id: "ac",
    icon: Snowflake,
    title: "Air Conditioning Repair & Service",
    intro: "Most AC repairs done same-day. We diagnose, quote, and fix in a single visit — and never charge for hours we didn't work.",
    bullets: [
      "All brands serviced (Trane, Carrier, Lennox, Goodman, York, Rheem, Bryant)",
      "Refrigerant leak detection & EPA-certified recovery",
      "Capacitor, contactor, and compressor replacement",
      "Smart thermostat installation & integration",
    ],
  },
  {
    id: "heating",
    icon: Flame,
    title: "Heating, Furnaces & Heat Pumps",
    intro: "Colorado winters don't wait. We service gas furnaces, electric furnaces, heat pumps, and boilers — and we keep the most common parts on every truck.",
    bullets: [
      "Ignition, flame sensor, and inducer motor repair",
      "Carbon monoxide & safety inspections",
      "Cold-climate heat pump experts",
      "Boiler service & radiator balancing",
    ],
  },
  {
    id: "install",
    icon: Wrench,
    title: "New System Installation",
    intro: "We start with a Manual J load calculation — not a guess — so your system is sized to your home, not the last home we visited.",
    bullets: [
      "Factory-authorized Trane, Carrier, Lennox & Mitsubishi dealer",
      "Full ductwork design and replacement",
      "Heat pumps qualifying for federal tax credits",
      "Lifetime workmanship guarantee on every install",
    ],
  },
  {
    id: "maintenance",
    icon: Settings2,
    title: "Maintenance Plans",
    intro: "Two precision tune-ups a year keep your system running 25% longer and your utility bills measurably lower.",
    bullets: [
      "Spring AC tune-up + fall heating tune-up",
      "Priority emergency dispatch",
      "15% discount on any repair",
      "No diagnostic fees, ever",
    ],
    plans: [
      { name: "Comfort", price: "$14/mo", perks: ["2 tune-ups/yr", "Priority dispatch", "10% off repairs"] },
      { name: "Comfort+", price: "$24/mo", perks: ["Everything in Comfort", "Free diagnostics", "15% off repairs", "Filter replacement"] },
      { name: "Total Care", price: "$39/mo", perks: ["Everything in Comfort+", "20% off repairs", "Free service calls", "10-yr parts coverage"] },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <Section tone="dark">
        <SectionHeading
          eyebrow="Our services"
          tone="light"
          title="Whole-home comfort, handled."
          subtitle="Repairs, installs, and maintenance — backed by a lifetime workmanship guarantee and the most experienced technicians in the metro."
        />
      </Section>

      {blocks.map((b, i) => (
        <Section key={b.id} id={b.id} tone={i % 2 === 0 ? "default" : "muted"}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent text-accent-foreground shadow-[var(--shadow-accent)]">
                <b.icon className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">{b.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground">
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold text-primary">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {b.bullets.map((bl) => (
                  <li key={bl} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{bl}</span>
                  </li>
                ))}
              </ul>
              {b.plans && (
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {b.plans.map((p, idx) => (
                    <div key={p.name} className={`rounded-2xl border p-5 ${idx === 1 ? "border-accent bg-accent-soft" : "border-border bg-card"}`}>
                      <p className="font-display text-lg font-bold text-primary">{p.name}</p>
                      <p className="mt-1 font-display text-3xl font-extrabold text-primary">{p.price}</p>
                      <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                        {p.perks.map((pk) => <li key={pk} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{pk}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}