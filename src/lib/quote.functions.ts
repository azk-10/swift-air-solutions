import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(80),
  urgency: z.enum(["emergency", "today", "this_week", "quote_only"]),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    // In production this would email the office / write to CRM.
    console.log("[QUOTE]", {
      received_at: new Date().toISOString(),
      ...data,
    });
    return { ok: true as const, message: "Request received. We'll call you shortly." };
  });