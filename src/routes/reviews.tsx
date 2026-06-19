import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.9★ from 820+ Denver Homeowners | Summit Climate" },
      { name: "description", content: "Read real reviews from Denver, Boulder, Lakewood, Aurora, and Castle Rock homeowners about our HVAC repair, installation, and maintenance services." },
      { property: "og:title", content: "Reviews — Summit Climate Co." },
      { property: "og:description", content: "4.9★ average across 820+ Google reviews." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Summit Climate Co.",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "827" },
      }),
    }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Sarah K.", city: "Wash Park, Denver", text: "Furnace died at 11pm on a Sunday. Marcus was at our door by 12:30am with the part on his truck. Heat back on before sunrise. Unreal." },
  { name: "David M.", city: "Boulder", text: "Got three quotes for a new heat pump. Summit was the only company that actually did a load calculation. Install was flawless and came in under budget." },
  { name: "Priya R.", city: "Centennial", text: "Honest pricing, no upsells, and the tech taught me how to maintain my system. This is how every contractor should run." },
  { name: "Mike T.", city: "Lakewood", text: "Replaced our 25-year-old AC with a heat pump. Bills are down 30% and the house is quieter than it's ever been." },
  { name: "Jenna W.", city: "Highlands Ranch", text: "Annual maintenance plan is worth every penny. Caught a failing capacitor before it left us without AC in July." },
  { name: "Carlos A.", city: "Aurora", text: "Showed up on time, in uniform, and gave me a flat price before starting. Repair was done in 45 minutes. Plus the office called to follow up the next day." },
  { name: "Rachel B.", city: "Arvada", text: "Two other companies told us we needed a $14k replacement. Summit cleaned the flame sensor for $189 and it's been running great ever since." },
  { name: "Tom S.", city: "Castle Rock", text: "Installed a full Mitsubishi mini-split system in our finished basement. Crew was meticulous — you'd never know they were here." },
  { name: "Alicia G.", city: "Westminster", text: "Best contractor experience I've had in 20 years of homeownership. Already recommended them to three neighbors." },
  { name: "Ben L.", city: "Englewood", text: "They wear shoe covers, put down floor protection, and clean up after themselves. Sounds basic — almost no one does it. Summit does." },
  { name: "Hannah F.", city: "Golden", text: "The financing made a full system replacement actually doable for us. 0% for 18 months, approved in five minutes." },
  { name: "Greg P.", city: "Littleton", text: "Honest, fast, and reasonably priced. Will not use anyone else." },
];

function ReviewsPage() {
  return (
    <>
      <Section tone="dark">
        <SectionHeading
          tone="light"
          eyebrow="What neighbors say"
          title="4.9 stars. 820+ reviews. No fake fluff."
          subtitle="We've earned our reputation one driveway at a time. Here's a small sample of what Denver homeowners are saying about us."
        />
        <div className="mt-8 flex flex-wrap items-center gap-6 text-primary-foreground/80">
          <div className="flex items-center gap-2"><span className="font-display text-4xl font-extrabold text-accent">4.9</span><div className="flex flex-col gap-0.5"><div className="flex gap-0.5 text-accent">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current"/>)}</div><span className="text-xs uppercase tracking-wider">Google · 827 reviews</span></div></div>
          <div className="flex items-center gap-2"><span className="font-display text-4xl font-extrabold text-accent">A+</span><span className="text-xs uppercase tracking-wider">BBB accredited<br />since 2013</span></div>
          <div className="flex items-center gap-2"><span className="font-display text-4xl font-extrabold text-accent">5.0</span><span className="text-xs uppercase tracking-wider">Angi Super<br />Service Award</span></div>
        </div>
      </Section>

      <Section>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-xs">
                <span className="font-bold text-primary">{r.name}</span>
                <span className="text-muted-foreground"> · {r.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground">
            Experience it yourself <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}