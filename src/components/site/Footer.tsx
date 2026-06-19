import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SERVICE_AREAS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 pb-28 md:pb-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Family-owned and operated since {SITE.established}. NATE-certified technicians, transparent pricing, and lifetime workmanship guarantee.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-widest text-primary-foreground/50">{SITE.license}</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/80 hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Service Areas</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-primary-foreground/80">
              {SERVICE_AREAS.slice(0, 12).map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span></li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{SITE.hours}</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Licensed · Bonded · Insured · EPA Certified · NATE Certified</p>
        </div>
      </div>
    </footer>
  );
}