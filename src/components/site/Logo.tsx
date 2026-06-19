import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-primary-foreground" : "text-primary";
  const sub = variant === "light" ? "text-primary-foreground/70" : "text-muted-foreground";
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent shadow-[var(--shadow-accent)] transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 20l5-12 4 8 3-6 6 10" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${text}`}>Summit Climate</span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${sub}`}>Heating · Cooling · Air</span>
      </span>
    </Link>
  );
}