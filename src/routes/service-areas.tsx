import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { SERVICE_AREAS, SITE } from "@/lib/site";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Denver Metro HVAC | Summit Climate" },
      { name: "description", content: "Same-day HVAC service across Denver, Aurora, Lakewood, Boulder, Centennial, Westminster, Arvada, and 15+ more Front Range cities." },
      { property: "og:title", content: "Denver Metro HVAC Service Areas" },
      { property: "og:description", content: "Three Denver dispatch hubs covering the entire Front Range." },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <Section tone="dark">
        <SectionHeading
          tone="light"
          eyebrow="Where we work"
          title="A technician minutes from your door."
          subtitle="We dispatch from three Denver-area hubs to keep response times short across the entire Front Range."
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-primary">Cities we serve</h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium sm:grid-cols-3">
              {SERVICE_AREAS.map((c) => (
                <li key={c} className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {c}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <p className="font-display text-lg font-bold text-primary">Don't see your city?</p>
              <p className="mt-1 text-sm text-muted-foreground">We service most of the Denver metro and surrounding mountain communities. Give us a call — odds are we're already there.</p>
              <a href={SITE.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              title="Summit Climate service area"
              src="https://www.google.com/maps?q=Denver%20Colorado&output=embed"
              width="100%"
              height="540"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[540px] w-full border-0"
            />
          </div>
        </div>
      </Section>
    </>
  );
}