import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "dark" | "accent";
}) {
  const tones = {
    default: "bg-background text-foreground",
    muted: "bg-surface text-foreground",
    dark: "bg-surface-dark text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
  } as const;
  return (
    <section id={id} className={cn(tones[tone], className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "light" }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]",
      tone === "light" ? "text-accent" : "text-accent",
    )}>
      <span className="h-px w-6 bg-accent" /> {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, tone = "default", align = "left" }: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "default" | "light";
  align?: "left" | "center";
}) {
  const titleColor = tone === "light" ? "text-primary-foreground" : "text-primary";
  const subColor = tone === "light" ? "text-primary-foreground/75" : "text-muted-foreground";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl", titleColor)}>{title}</h2>
      {subtitle && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", subColor)}>{subtitle}</p>}
    </div>
  );
}