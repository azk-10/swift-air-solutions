
# HVAC Contractor Website — Build Plan

A premium, lead-generation focused site for a fictional established HVAC company. I'll name it **"Summit Climate Co."** (serving the Denver metro area) so copy, service areas, and reviews feel concrete and real — easy to rename later.

## Design System

- **Palette** (oklch tokens in `src/styles.css`):
  - Deep navy blue `#0B1E3F` (primary)
  - Clean white `#FFFFFF` (background)
  - Vibrant orange `#FF6B1A` (accent / CTAs)
  - Warm cool grays for surfaces and borders
- **Typography**: Bricolage Grotesque (display headings) + Inter (body) — loaded via `<link>` in `__root.tsx`. Strong hierarchy: oversized hero headlines, confident section titles.
- **Motion**: Subtle fade/slide-in on scroll via Framer Motion, controlled and non-distracting.
- **Components**: shadcn/ui (Button, Card, Accordion, Form, Input, Select, Dialog) restyled via semantic tokens.

## Routes (TanStack Start, file-based)

```text
src/routes/
  __root.tsx                 — shell, header, footer, emergency top bar, mobile sticky Call Now
  index.tsx                  — Home
  services.tsx               — Services overview (Heating, AC Repair, Installation, Maintenance)
  emergency.tsx              — 24/7 Emergency Repair
  service-areas.tsx          — Service Areas
  about.tsx                  — About
  reviews.tsx                — Reviews / Testimonials
  contact.tsx                — Contact / Get a Quote
  sitemap[.]xml.ts           — server route sitemap
```

Each route gets unique `head()` metadata (title, description, og:title/description, og:url, canonical).

## Page Composition

**Global (in `__root.tsx`)**
- Top emergency bar: "24/7 Emergency Service · (720) 555-0140"
- Sticky header with logo, nav, phone CTA, "Get a Quote" button
- Mobile-only fixed bottom bar: large orange "Call Now" + "Quote" buttons
- Footer: services, areas, hours, license #, social, NAP block

**Home (`index.tsx`)**
1. Hero: large headline, subhead, dual CTA (Call / Get Quote), trust strip (Licensed · Insured · NATE-Certified · BBB A+)
2. Quick-quote form card overlapping hero (name, phone, issue, urgency select)
3. Services grid (4 cards → link to /services)
4. Emergency banner stripe (orange) → /emergency
5. Why Choose Us (6 trust points with icons)
6. Before/After gallery (placeholder images via `data-lov-image-placeholder`)
7. Reviews carousel (3–5 testimonials, 5-star ratings)
8. Service areas teaser map placeholder + city list
9. Financing section (0% APR for 18 months, Wells Fargo-style copy)
10. FAQ accordion (6 questions)
11. Final CTA band

**Services** — overview + 4 detailed sections (Heating, AC Repair, Installation, Maintenance plans w/ tiered pricing), each with CTA.

**Emergency** — bold red/orange hero, "We answer 24/7", response-time promise, common emergencies list, large call button, mini-quote form.

**Service Areas** — Denver metro + 20 surrounding cities (Aurora, Lakewood, Boulder, Centennial, Westminster, etc.), map embed placeholder (`<iframe>` with generic Google Maps URL), per-city blurbs.

**About** — Founder story (est. 2011), team values, certifications, community involvement, awards.

**Reviews** — 12+ testimonials in masonry grid, aggregate rating block, review-platform badges (Google, Yelp, Angi, BBB).

**Contact** — Full quote form (zod-validated), phone, email, hours table, address, map placeholder, response-time promise.

## Key Features

- **Instant Quote Form**: React Hook Form + zod (name, phone, email, service type, urgency [Emergency/Today/This week/Just a quote], message). Submits to a TanStack `createServerFn` that logs and returns success (no backend wiring requested — toast success).
- **Sticky mobile Call Now**: fixed bottom bar shown via `md:hidden`.
- **Emergency banner**: persistent top strip + dedicated page.
- **Trust badges**: inline SVG row (Licensed CO LIC #..., Insured, NATE-Certified, EPA, BBB A+, Google Guaranteed).
- **Before/After gallery**: 6 placeholder image generations of HVAC installs.
- **Google Maps**: `<iframe>` embed placeholder pointed at Denver coordinates.
- **Financing block**: tiered options with Apply CTA.

## SEO

- Per-route unique meta + canonical + og:url (relative paths since no domain set)
- JSON-LD on `__root.tsx`: `LocalBusiness` / `HVACBusiness` schema (name, phone, address, geo, openingHours, areaServed, aggregateRating)
- JSON-LD on reviews page: `Review` items
- JSON-LD on FAQ section: `FAQPage`
- Semantic HTML: single H1 per page, proper section/article/nav landmarks
- Image alt text on all generated images
- `public/robots.txt` (allow all) + `src/routes/sitemap[.]xml.ts` server route covering all routes

## Performance

- Generate hero images as `.jpg`, preload LCP image via leaf route `head().links`
- Lazy-mount below-the-fold sections where reasonable
- No heavy libs beyond framer-motion + lucide-react
- Fonts via `<link rel="preconnect">` + `<link rel="stylesheet">` (Google Fonts)

## Assets (generated)

- 1 hero image (HVAC tech on residential install, premium photography)
- 6 before/after gallery images
- 1 about/team image
- Inline SVG logo + trust badges

## Technical Notes

- Tailwind v4 tokens in `src/styles.css` under `@theme inline`; semantic color tokens only — no hardcoded `text-white`/`bg-[#...]`
- All forms use zod validation per security guidance
- Phone numbers use `tel:` links throughout
- All copy generated to sound like an established premium contractor (10+ yrs, family-owned, certified)

## Out of Scope (can add later)

- Real form backend (Lovable Cloud) — currently logs server-side and shows success toast
- Real Google Maps API key (using public embed URL)
- CMS for reviews/projects
- Blog
