import { Phone, Siren } from "lucide-react";
import { SITE } from "@/lib/site";

export function EmergencyBar() {
  return (
    <div className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
        <div className="flex min-w-0 items-center gap-2">
          <Siren className="h-4 w-4 shrink-0 text-accent" />
          <span className="truncate font-medium">24/7 Emergency Service · No after-hours fee</span>
        </div>
        <a href={SITE.phoneHref} className="flex shrink-0 items-center gap-1.5 font-semibold hover:text-accent">
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{SITE.phone}</span><span className="sm:hidden">Call</span>
        </a>
      </div>
    </div>
  );
}