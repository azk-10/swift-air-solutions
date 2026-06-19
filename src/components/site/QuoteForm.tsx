import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitQuote } from "@/lib/quote.functions";

type Props = { variant?: "card" | "page"; defaultUrgency?: "emergency" | "today" | "this_week" | "quote_only" };

export function QuoteForm({ variant = "card", defaultUrgency = "today" }: Props) {
  const submit = useServerFn(submitQuote);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("AC Repair");
  const [urgency, setUrgency] = useState<Props["defaultUrgency"]>(defaultUrgency);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const res = await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
          service,
          urgency: urgency!,
          message: String(fd.get("message") ?? ""),
        },
      });
      toast.success(res.message);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      toast.error("Please double-check your info and try again.");
    } finally {
      setLoading(false);
    }
  }

  const isPage = variant === "page";

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-7 ${isPage ? "" : ""}`}
    >
      <div className="mb-5">
        <h3 className="font-display text-2xl font-extrabold tracking-tight text-primary">Get a free quote</h3>
        <p className="mt-1 text-sm text-muted-foreground">No-pressure estimate. Same-day callback, 7 days a week.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required maxLength={80} placeholder="Jane Doe" className="mt-1.5" />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" required type="tel" maxLength={30} placeholder="(720) 555-0140" className="mt-1.5" />
        </div>
        {isPage && (
          <div className="sm:col-span-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" name="email" type="email" maxLength={200} placeholder="you@example.com" className="mt-1.5" />
          </div>
        )}
        <div className={isPage ? "sm:col-span-1" : "sm:col-span-2"}>
          <Label>Service needed</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="AC Repair">AC Repair</SelectItem>
              <SelectItem value="Heating Repair">Heating / Furnace Repair</SelectItem>
              <SelectItem value="New Installation">New System Installation</SelectItem>
              <SelectItem value="Maintenance">Tune-Up / Maintenance</SelectItem>
              <SelectItem value="Indoor Air Quality">Indoor Air Quality</SelectItem>
              <SelectItem value="Other">Something Else</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className={isPage ? "sm:col-span-1" : "sm:col-span-2"}>
          <Label>How urgent?</Label>
          <Select value={urgency} onValueChange={(v) => setUrgency(v as typeof urgency)}>
            <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="emergency">🚨 Emergency — no heat / no AC</SelectItem>
              <SelectItem value="today">Today if possible</SelectItem>
              <SelectItem value="this_week">Within this week</SelectItem>
              <SelectItem value="quote_only">Just gathering quotes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {isPage && (
          <div className="sm:col-span-2">
            <Label htmlFor="message">Describe the issue (optional)</Label>
            <Textarea id="message" name="message" maxLength={1500} rows={4} className="mt-1.5" placeholder="What's going on with your system?" />
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition hover:bg-accent/90 disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Request my quote <ArrowRight className="h-4 w-4" /></>}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">By submitting you agree to be contacted about your service request.</p>
    </form>
  );
}