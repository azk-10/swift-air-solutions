import { Link } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 shadow-[0_-10px_30px_-15px_oklch(0_0_0/0.25)] backdrop-blur md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
      >
        <Calendar className="h-4 w-4" /> Free Quote
      </Link>
    </div>
  );
}