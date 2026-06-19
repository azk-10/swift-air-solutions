import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import { Section, SectionHeading } from "@/components/site/Section";
import { TrustBadges } from "@/components/site/TrustBadges";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Summit Climate Co. — Denver's Family-Owned HVAC Team" },
      { name: "description", content: "Family-owned since 2011. Meet the NATE-certified technicians and the values behind Denver's most-trusted heating & cooling company." },
      { property: "og:title", content: "About Summit Climate Co." },
      { property: "og:description", content: "A family-owned Denver HVAC company built on craftsmanship, honesty, and a lifetime guarantee." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: teamImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Treat your home like ours", body: "Floor protection, shoe covers, and a spotless work area — every visit, no exceptions." },
  { icon: ShieldCheck, title: "Tell you the truth", body: "If you don't need a new system, we'll say so. Honesty wins every time." },
  { icon: Award, title: "Master the craft", body: "40+ hours of in-house training per technician per year. We never stop learning." },
  { icon: Users, title: "Hire neighbors", body: "Every tech lives in the Denver metro and gets paid a salary — not commission." },
];

function AboutPage() {
  return (
    <>
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Our story"
              title="Built by a family. Trusted by yours."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/80">
              <p>Summit Climate Co. started in 2011 when Marcus and Elena Reyes — a master technician and a small-business operator — got fed up with watching Denver homeowners get sold systems they didn't need.</p>
              <p>Fifteen years later we're still family-owned, still answer the phone ourselves on weekends, and still believe the best marketing is a job done right the first time. Today our team of 32 NATE-certified technicians serves more than 8,000 homes a year across the Front Range.</p>
              <p>We are not the cheapest company in Denver, and we'll never claim to be. We are, we believe, the most honest — and over 820 five-star reviews say our neighbors agree.</p>
            </div>
            <div className="mt-8">
              <TrustBadges tone="dark" />
            </div>
          </div>
          <img src={teamImg} alt="Summit Climate technicians in front of service vans with Rocky Mountains behind them" width={1400} height={900} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)]" />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we believe"
          title="Four values, no exceptions."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-soft text-accent">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-3">
          {[
            { k: "15", v: "Years serving Denver" },
            { k: "32", v: "NATE-certified technicians" },
            { k: "8,000+", v: "Homes serviced each year" },
            { k: "4.9★", v: "From 820+ Google reviews" },
            { k: "Lifetime", v: "Workmanship guarantee" },
            { k: "100%", v: "Live phone answer rate" },
          ].map((s) => (
            <div key={s.v} className="border-b border-border pb-4 last:border-b-0 lg:border-b-0 lg:border-r lg:pr-6 lg:[&:nth-child(3n)]:border-r-0">
              <p className="font-display text-4xl font-extrabold text-accent">{s.k}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground">
            Get a free quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}