import { ShieldCheck, Award, BadgeCheck, Star, Leaf, Wrench } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "NATE Certified" },
  { icon: BadgeCheck, label: "BBB A+ Rated" },
  { icon: Star, label: "4.9★ on Google (820+)" },
  { icon: Leaf, label: "EPA 608 Certified" },
  { icon: Wrench, label: "Lifetime Workmanship" },
];

export function TrustBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-primary-foreground/85" : "text-foreground/70";
  const icon = tone === "dark" ? "text-accent" : "text-accent";
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${text}`}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <Icon className={`h-4 w-4 ${icon}`} />
          {label}
        </li>
      ))}
    </ul>
  );
}