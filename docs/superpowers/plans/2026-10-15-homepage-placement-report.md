# Homepage "Placement Report" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 17-section homepage with a 9-section editorial "Placement Report" page in JKKN's main-site brand, built from real college photos, real placement posters and React Bits motion.

**Architecture:** All homepage sections live in `app/components/home/`, read every fact from one typed module `app/components/home/data.ts` (pure, no imports, so Node can test it directly), and share one stylesheet `app/components/home/report.css`. React Bits components are copied into `components/react-bits/` with the shadcn CLI. Navbar and Footer are restyled in place (shared by every route, behaviour unchanged).

**Tech Stack:** Next.js 16.1 App Router · React 19.2 · TypeScript 5 strict · Tailwind CSS v4 (`@theme inline`) · React Bits (SplitText, CountUp, LogoLoop, AnimatedContent, Magnet) via `shadcn@latest` · gsap · motion · Node 24 `node --test` (native TS type-stripping) for data tests.

**Spec:** `docs/superpowers/specs/2026-10-15-homepage-placement-report-design.md` — read §10 (amendments) first; it overrides §6–§8.

## Global Constraints

- Work on branch `feat/homepage-placement-report`; never commit to `main`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Figures (main site): 92 % placement rate · 500+ recruiters · ₹8.5 LPA highest · ₹3.5 LPA average · 50,000+ alumni · 74+ years.
- Terminology: "Learners" (never "student/students"), "Learning Facilitators", "Placement Cell".
- Official names: JKKN Dental College and Hospital · JKKN College of Pharmacy · JKKN College of Nursing · JKKN College of Allied Health Sciences · JKKN College of Engineering and Technology (Autonomous) · JKKN College of Arts and Science (Autonomous).
- Colours: paper `#fbfbee`, ink `#032816`, ink-soft `#3d5a4a`, field `#0b6d41`, field-deep `#085032`, tint `#e8f5ee`, accent `#ffde59`. Yellow appears exactly twice (hero accent tile, last process line).
- Type: Poppins only; five steps — display `clamp(48px, 9vw, 140px)`, title `clamp(36px, 4.6vw, 72px)`, lead `clamp(22px, 2.4vw, 30px)`, body `17px` (16px < 640px), small `13px`.
- Taste house rules: headlines ≤ 2 lines at every width; no eyebrows, monospace, index numbers, thin rules, gradients, shadows at rest (floating menus excepted), glass, emoji, icon-topped card grids, styled accent words. Buttons square-cornered (radius 0).
- Images only from `https://pmqodbfhsejbvfbmsfeq.supabase.co` or `public/`. Never `placements.jkkn.ac.in` (Vercel bot challenge → 403).
- Every animation has a `prefers-reduced-motion: reduce` fallback; no content depends on JS to become visible except CountUp digits (which carry an `sr-only` value).
- Do not delete old components in `app/components/` — other routes import them.

## Review Focus

1. **Reduced motion** — a visitor with `prefers-reduced-motion: reduce` sees every section fully, with no shutter, no marquee travel and no staggered fades. Pinned by the `@media (prefers-reduced-motion: reduce)` block in Task 3 and checked in Task 9 Step 3.
2. **Remote image host not allowlisted** — any image URL outside the Supabase host or `public/` must fail the data test, not the production build. Pinned by `test("every image is local or on an allowlisted host")` in Task 2.
3. **Keyboard use of the college picker** — Tab reaches each panel, Enter/Space selects it, `aria-pressed` reflects state, and the details region announces the change. Pinned in Task 5 Step 5 (manual keyboard check) and the `aria-pressed`/`aria-live` markup.
4. **Phone width (390px)** — no horizontal scroll, headings ≤ 2 lines, offers table readable. Pinned by `test("headline copy fits the two-line budget")` in Task 2 and `inspect.mjs` in Task 9.
5. **Stale figures leaking back** — "12 LPA", "95%", "students" must not appear in homepage data or copy. Pinned by `test("no stale figures or old terminology")` in Task 2 and the grep in Task 8 Step 4.

---

## File map

| File | Responsibility |
|---|---|
| `components.json` (create) | shadcn CLI config so React Bits can be added without `shadcn init` |
| `lib/utils.ts` (create) | `cn()` helper required by shadcn-style components |
| `components/react-bits/*.tsx` (create, via CLI) | SplitText, CountUp, LogoLoop, AnimatedContent, Magnet |
| `app/globals.css` (modify) | add `--report-*` tokens and Tailwind colour names |
| `app/components/home/data.ts` (create) | every homepage fact + pure helpers `formatFigure`, `summariseOffers`, `collegeShortName` |
| `scripts/home-data.test.mjs` (create) | data integrity tests run with `node --test` |
| `app/components/home/report.css` (create) | type steps, grid, ledger, band, wall, shutter, reduced motion |
| `app/components/home/ReportHero.tsx` | section 1 — two-by-two board |
| `app/components/home/ReportLedger.tsx` | section 2 — decimal-aligned figures |
| `app/components/home/CollegeBand.tsx` | section 3 — six unequal photo panels + picker (client) |
| `app/components/home/RecruiterSheet.tsx` | section 4 — logo loop + sector table |
| `app/components/home/ProcessStair.tsx` | section 5 — four stepped lines on the green field |
| `app/components/home/OffersTable.tsx` | section 6 — batch-2025 offers by company |
| `app/components/home/PosterWall.tsx` | section 7 — 22 placement posters |
| `app/components/home/FaqTable.tsx` | section 8 — open questions and answers |
| `app/components/home/ClosingField.tsx` | section 9 — three photos + green field |
| `app/page.tsx` (modify) | compose the nine sections |
| `app/layout.tsx` (modify) | metadata description with the correct figures |
| `app/components/Navbar.tsx` (modify) | flat paper bar, official names |
| `app/components/Footer.tsx` (modify) | inverted footer with full-width wordmark |
| `package.json` (modify) | `test:data` script; deps added by the CLI |

---

### Task 1: Branch, React Bits install, brand tokens

**Files:**
- Create: `components.json`, `lib/utils.ts`, `components/react-bits/{SplitText,CountUp,LogoLoop,AnimatedContent,Magnet}.tsx`
- Modify: `app/globals.css` (`:root` block ends at line 52; `@theme inline` block lines 54–69), `package.json`

**Interfaces:**
- Produces: default exports `SplitText`, `CountUp`, `LogoLoop`, `AnimatedContent`, `Magnet` at `@/components/react-bits/<Name>`; Tailwind colours `paper`, `ink`, `ink-soft`, `field`, `field-deep`, `tint`, `accent-yellow`; CSS vars `--report-*`; `cn(...inputs: ClassValue[]): string` from `@/lib/utils`.

- [ ] **Step 1: Create the branch**

```bash
git switch -c feat/homepage-placement-report
```

- [ ] **Step 2: Write `components.json`**

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

- [ ] **Step 3: Write `lib/utils.ts` and install its deps**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Run: `npm install clsx tailwind-merge`

- [ ] **Step 4: Add the five React Bits components**

Run: `npx shadcn@latest add @react-bits/SplitText-TS-TW @react-bits/CountUp-TS-TW @react-bits/LogoLoop-TS-TW @react-bits/AnimatedContent-TS-TW @react-bits/Magnet-TS-TW --yes`

If the CLI reports an unknown registry `@react-bits`, add this key to `components.json` and rerun the same command:

```json
  "registries": { "@react-bits": "https://reactbits.dev/r/{name}.json" }
```

Expected: five `.tsx` files created and `gsap`, `@gsap/react`, `motion` (or `framer-motion`) added to `package.json`.
Check `git diff -- app/globals.css` — if the CLI touched `globals.css`, revert that file with `git checkout -- app/globals.css`.

- [ ] **Step 5: Move them to `components/react-bits/` and make them client components**

```bash
git status --porcelain --untracked-files=all
```

For each created component file (wherever the CLI put it), move it to `components/react-bits/<Name>.tsx` (`SplitText.tsx`, `CountUp.tsx`, `LogoLoop.tsx`, `AnimatedContent.tsx`, `Magnet.tsx`). If a component came with a `.css` file, move it alongside and keep its relative import. Ensure the first line of each `.tsx` is `"use client";` (add it if missing).

- [ ] **Step 6: Verify the prop contract later tasks rely on**

Run: `grep -nE "export default|interface .*Props|^\s+(text|tag|splitType|delay|duration|from|to|textAlign|separator|startWhen|logos|speed|logoHeight|gap|pauseOnHover|fadeOut|scaleOnHover|ariaLabel|distance|initialOpacity|threshold|padding|magnetStrength|wrapperClassName)\??:" components/react-bits/*.tsx`

Expected: each file has a default export, and these props exist —
SplitText: `text, className, delay (ms), duration (s), splitType, from, to, tag, textAlign`;
CountUp: `to, from, duration, separator, className, startWhen`;
LogoLoop: `logos ({src, alt, title?}[]), speed, direction, logoHeight, gap, pauseOnHover, fadeOut, scaleOnHover, ariaLabel`;
AnimatedContent: `children, distance, duration, delay, initialOpacity, threshold`;
Magnet: `children, padding, magnetStrength, wrapperClassName`.
If a name differs, write the actual name into this plan's later code before using it (e.g. if SplitText has no `tag`, wrap it in `<span className="block">` and drop the prop; the `<h1>` must not contain a `<p>`).

- [ ] **Step 7: Add brand tokens to `app/globals.css`**

Inside `:root`, after `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);`, add:

```css
  /* Placement Report (homepage) — main-site brand, jkkn.ac.in */
  --report-paper: #fbfbee;
  --report-ink: #032816;
  --report-ink-soft: #3d5a4a;
  --report-field: #0b6d41;
  --report-field-deep: #085032;
  --report-tint: #e8f5ee;
  --report-accent: #ffde59;
  --report-margin: clamp(16px, 2.2vw, 32px);
```

Inside `@theme inline`, before `--font-sans`, add:

```css
  --color-paper: var(--report-paper);
  --color-ink: var(--report-ink);
  --color-ink-soft: var(--report-ink-soft);
  --color-field: var(--report-field);
  --color-field-deep: var(--report-field-deep);
  --color-tint: var(--report-tint);
  --color-accent-yellow: var(--report-accent);
```

- [ ] **Step 8: Verify build and lint**

Run: `npm run lint && npm run build`
Expected: both succeed (the homepage is unchanged so far).

- [ ] **Step 9: Commit**

```bash
git add components.json lib/utils.ts components/react-bits app/globals.css package.json package-lock.json
git commit -m "chore: add React Bits components and Placement Report brand tokens

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Homepage data module (TDD)

**Files:**
- Create: `scripts/home-data.test.mjs`, `app/components/home/data.ts`
- Modify: `package.json` (scripts)

**Interfaces:**
- Produces (from `app/components/home/data.ts`):
  - `type CollegeSlug = "dental" | "pharmacy" | "nursing" | "allied-health" | "engineering" | "arts-science"`
  - `type College = { slug: CollegeSlug; name: string; short: string; image: string; imageAlt: string; programmes: string[]; recruiters: string[]; grow: number }`; `colleges: College[]`
  - `type Figure = { id: string; whole: number; fraction?: string; suffix?: string; separator?: boolean; caption: string }`; `figures: Figure[]`; `formatFigure(f: Figure): string`
  - `type Photo = { src: string; alt: string; width: number; height: number }`; `heroImages: { gate: Photo; handover: Photo }`; `closingPhotos: Photo[]`
  - `recruiterLogos: { name: string; src: string; width: number; height: number }[]`; `sectors: { title: string; companies: string[] }[]`
  - `processSteps: { line: string; detail: string }[]`
  - `type Poster = { n: number; college: CollegeSlug; company: string; learners: number }`; `posters: Poster[]`; `companyPackages: Record<string, string>`
  - `type OfferRow = { company: string; colleges: CollegeSlug[]; offers: number; packageLpa: string }`; `summariseOffers(list: Poster[], packages: Record<string, string>): OfferRow[]`; `offerRows: OfferRow[]`; `posterTotal: number`
  - `faqs: { q: string; a: string }[]`; `collegeShortName(slug: CollegeSlug): string`
  - `contact: { email: string; phone: string; phoneHref: string; hours: string; address: string }`

- [ ] **Step 1: Add the test script to `package.json`**

In `"scripts"`, add: `"test:data": "node --test \"scripts/*.test.mjs\""`

- [ ] **Step 2: Write the failing tests — `scripts/home-data.test.mjs`**

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import {
  colleges, figures, formatFigure, heroImages, closingPhotos, recruiterLogos, sectors,
  processSteps, posters, companyPackages, summariseOffers, offerRows, posterTotal,
  faqs, collegeShortName, contact,
} from "../app/components/home/data.ts";

test("six colleges, one per /placements route", () => {
  const routes = readdirSync("app/placements", { withFileTypes: true })
    .filter((d) => d.isDirectory()).map((d) => d.name).sort();
  assert.deepEqual(colleges.map((c) => c.slug).sort(), routes);
});

test("official college names", () => {
  const byslug = Object.fromEntries(colleges.map((c) => [c.slug, c.name]));
  assert.equal(byslug.dental, "JKKN Dental College and Hospital");
  assert.equal(byslug.engineering, "JKKN College of Engineering and Technology (Autonomous)");
  assert.equal(byslug["arts-science"], "JKKN College of Arts and Science (Autonomous)");
  assert.equal(byslug["allied-health"], "JKKN College of Allied Health Sciences");
});

test("figures are the main site's", () => {
  assert.deepEqual(figures.map(formatFigure), ["92", "500+", "8.5", "3.5", "50,000+", "74+"]);
});

test("formatFigure joins whole, fraction and suffix", () => {
  assert.equal(formatFigure({ id: "a", whole: 50000, separator: true, suffix: "+", caption: "" }), "50,000+");
  assert.equal(formatFigure({ id: "b", whole: 8, fraction: ".5", caption: "" }), "8.5");
  assert.equal(formatFigure({ id: "c", whole: 1200, caption: "" }), "1200");
});

test("offers are summarised per company from the posters", () => {
  assert.equal(posters.length, 22);
  assert.ok(!posters.some((p) => p.n === 20), "poster 20 is a defective duplicate");
  const rows = summariseOffers(posters, companyPackages);
  assert.deepEqual(rows.map((r) => [r.company, r.offers, r.packageLpa]), [
    ["Sakthi Auto Component Limited", 93, "2.71"],
    ["Pronoia Insurance Marketing", 42, "4.5"],
    ["Foxconn", 30, "2.00"],
    ["Omega Healthcare", 14, "2.70"],
  ]);
  assert.deepEqual(rows[3].colleges, ["allied-health", "nursing", "pharmacy"]);
  assert.deepEqual(offerRows, rows);
  assert.equal(posterTotal, 179);
});

test("summariseOffers throws on a company with no package", () => {
  assert.throws(() => summariseOffers([{ n: 99, college: "dental", company: "Nobody", learners: 1 }], {}), /Nobody/);
});

test("every image is local or on an allowlisted host", () => {
  const config = readFileSync("next.config.ts", "utf8");
  const hosts = [...config.matchAll(/hostname:\s*"([^"]+)"/g)].map((m) => m[1]);
  const srcs = [
    ...colleges.map((c) => c.image), heroImages.gate.src, heroImages.handover.src,
    ...closingPhotos.map((p) => p.src), ...recruiterLogos.map((l) => l.src),
    ...posters.map((p) => `/alumni/${p.n}.jpg`),
  ];
  for (const src of srcs) {
    if (src.startsWith("/")) assert.ok(existsSync(`public${src}`), `missing public${src}`);
    else assert.ok(hosts.includes(new URL(src).hostname), `host not allowlisted: ${src}`);
  }
});

test("no stale figures or old terminology", () => {
  const text = JSON.stringify({ colleges, figures, sectors, processSteps, faqs, contact, closingPhotos, heroImages });
  assert.doesNotMatch(text, /\bstudents?\b/i);
  assert.doesNotMatch(text, /12 LPA|95%|90.95%|1,?200\+/);
});

test("headline copy fits the two-line budget", () => {
  for (const s of processSteps) assert.ok(s.line.length <= 22, `process line too long: ${s.line}`);
  for (const f of faqs) assert.ok(f.q.length <= 40, `question too long: ${f.q}`);
  assert.ok(faqs.length >= 5 && faqs.length <= 7);
});

test("collegeShortName", () => {
  assert.equal(collegeShortName("arts-science"), "Arts and Science");
  assert.equal(collegeShortName("allied-health"), "Allied Health Sciences");
});

test("every sector and college lists recruiters", () => {
  assert.equal(sectors.length, 6);
  for (const c of colleges) assert.ok(c.recruiters.length >= 5 && c.programmes.length >= 1, c.slug);
  assert.equal(contact.email, "cdc@jkkn.ac.in");
});
```

- [ ] **Step 3: Run the tests to verify they fail**

Run: `npm run test:data`
Expected: FAIL — `Cannot find module .../app/components/home/data.ts`.

- [ ] **Step 4: Write `app/components/home/data.ts`**

```ts
// Every fact on the homepage. Pure data + pure helpers, no imports:
// scripts/home-data.test.mjs loads this file directly with Node's type stripping.

const MEDIA = "https://pmqodbfhsejbvfbmsfeq.supabase.co/storage/v1/object/public/cms-media/general/";

export type CollegeSlug = "dental" | "pharmacy" | "nursing" | "allied-health" | "engineering" | "arts-science";

export type College = {
  slug: CollegeSlug;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  programmes: string[];
  recruiters: string[];
  grow: number;
};

export const colleges: College[] = [
  {
    slug: "dental",
    name: "JKKN Dental College and Hospital",
    short: "Dental",
    image: `${MEDIA}3848aa24-155a-4759-afc2-17987d647e8b.png`,
    imageAlt: "The JKKN Dental College and Hospital building and its yellow name board",
    programmes: ["BDS", "MDS in Orthodontics, Prosthodontics, Periodontics, Oral Surgery, Conservative Dentistry, Paediatric Dentistry, Oral Pathology, Public Health Dentistry and Oral Medicine"],
    recruiters: ["Apollo Hospitals", "Clove Dental", "Manipal Hospitals", "Fortis Healthcare", "Dental Lounge"],
    grow: 5,
  },
  {
    slug: "pharmacy",
    name: "JKKN College of Pharmacy",
    short: "Pharmacy",
    image: `${MEDIA}babdddef-4ba7-4caa-acf2-eda9b4be0199.jpg`,
    imageAlt: "The JKKN College of Pharmacy building",
    programmes: ["B.Pharm", "M.Pharm", "Pharm.D", "D.Pharm"],
    recruiters: ["Omega Healthcare", "Cipla", "Sun Pharma", "Dr. Reddy's", "Hetero", "Lupin", "Aurobindo", "Biocon"],
    grow: 2,
  },
  {
    slug: "nursing",
    name: "JKKN College of Nursing",
    short: "Nursing",
    image: `${MEDIA}f229bf34-b6d0-4435-af52-3479b4ff22e2.webp`,
    imageAlt: "The JKKN College of Nursing building",
    programmes: ["B.Sc. Nursing", "M.Sc. Nursing", "P.B.B.Sc. Nursing"],
    recruiters: ["Omega Healthcare", "Apollo Hospitals", "MIOT Hospitals", "Fortis Healthcare", "KIMS", "Global Hospitals", "Kauvery Hospital"],
    grow: 3,
  },
  {
    slug: "allied-health",
    name: "JKKN College of Allied Health Sciences",
    short: "Allied Health Sciences",
    image: `${MEDIA}0a7ec366-6d23-4745-a201-dcd771b9f47d.jpg`,
    imageAlt: "The JKKN College of Allied Health Sciences building",
    programmes: ["B.Sc. Medical Lab Technology", "B.Sc. Radiology", "B.Sc. Cardiac Technology", "B.Sc. Optometry", "B.Sc. Renal Dialysis", "M.Sc."],
    recruiters: ["Omega Healthcare", "Apollo Diagnostics", "SRL Diagnostics", "Thyrocare", "Narayana Health", "KIMS", "Vijaya Diagnostic Centre"],
    grow: 2,
  },
  {
    slug: "engineering",
    name: "JKKN College of Engineering and Technology (Autonomous)",
    short: "Engineering",
    image: `${MEDIA}f81d3b5b-5d88-4350-a779-e5487830fdbd.JPG`,
    imageAlt: "The JKKN College of Engineering and Technology campus",
    programmes: ["B.E. / B.Tech in CSE, ECE, EEE, Mechanical, Civil and AI & DS", "M.E."],
    recruiters: ["Foxconn", "Pronoia Insurance Marketing", "TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies", "L&T", "Zoho", "Accenture"],
    grow: 3,
  },
  {
    slug: "arts-science",
    name: "JKKN College of Arts and Science (Autonomous)",
    short: "Arts and Science",
    image: `${MEDIA}af856eac-ce3b-4437-9562-203201b209d5.jpg`,
    imageAlt: "The JKKN College of Arts and Science building and sports courts, seen from above",
    programmes: ["B.Sc.", "B.Com", "BBA", "BCA", "M.Sc.", "M.Com", "MBA", "MCA"],
    recruiters: ["Sakthi Auto Component", "Pronoia Insurance Marketing", "Foxconn", "TCS", "Infosys BPO", "Concentrix", "Amazon", "HDFC Bank", "ICICI Bank"],
    grow: 2,
  },
];

export function collegeShortName(slug: CollegeSlug): string {
  const college = colleges.find((c) => c.slug === slug);
  if (!college) throw new Error(`Unknown college: ${slug}`);
  return college.short;
}

export type Figure = {
  id: string;
  whole: number;
  fraction?: string;
  suffix?: string;
  separator?: boolean;
  caption: string;
};

export const figures: Figure[] = [
  { id: "rate", whole: 92, caption: "per cent placement rate across the six colleges" },
  { id: "recruiters", whole: 500, suffix: "+", caption: "recruiting partners" },
  { id: "highest", whole: 8, fraction: ".5", caption: "lakh rupees a year, the highest package" },
  { id: "average", whole: 3, fraction: ".5", caption: "lakh rupees a year, the average package" },
  { id: "alumni", whole: 50000, suffix: "+", separator: true, caption: "alumni placed" },
  { id: "years", whole: 74, suffix: "+", caption: "years of JKKN Institutions" },
];

export function formatFigure(f: Figure): string {
  const whole = f.separator ? f.whole.toLocaleString("en-US") : String(f.whole);
  return `${whole}${f.fraction ?? ""}${f.suffix ?? ""}`;
}

export type Photo = { src: string; alt: string; width: number; height: number };

export const heroImages: { gate: Photo; handover: Photo } = {
  gate: {
    src: `${MEDIA}06032de1-cbb1-498b-bdc1-52e1ffd4c8e9.webp`,
    alt: "The J.K.K. Nattraja Institutions gate in Komarapalayam, its pillars naming the colleges",
    width: 1536,
    height: 864,
  },
  handover: {
    src: "/placement-event.png",
    alt: "A Learner receives her offer letter on stage at the Premier Fine Linens campus drive",
    width: 618,
    height: 626,
  },
};

export const closingPhotos: Photo[] = [
  { src: colleges[0].image, alt: colleges[0].imageAlt, width: 1080, height: 606 },
  { src: colleges[1].image, alt: colleges[1].imageAlt, width: 640, height: 426 },
  { src: colleges[5].image, alt: colleges[5].imageAlt, width: 640, height: 360 },
];

export const recruiterLogos = [
  { name: "TCS", src: `${MEDIA}089ad387-05a5-4004-b25f-25f7e15c4799.png`, width: 305, height: 165 },
  { name: "HCL", src: `${MEDIA}e3afef79-adc6-45c9-91e7-0ed5601ee01c.png`, width: 275, height: 183 },
  { name: "Bosch", src: `${MEDIA}32f2a003-5955-481c-845e-4a189e6bdb38.jpg`, width: 259, height: 194 },
  { name: "Ivy Mobility", src: `${MEDIA}5d1b520f-9bab-4319-be8b-61cee8dcc587.png`, width: 389, height: 130 },
  { name: "Buddi.ai", src: `${MEDIA}5c227ba7-9254-42b0-b821-7b3107d78226.png`, width: 310, height: 162 },
  { name: "Tech Mahindra", src: `${MEDIA}8bed5615-ad87-44ab-bef7-ee1d06adcb7b.png`, width: 422, height: 119 },
  { name: "TVS", src: `${MEDIA}c4daea95-90d0-41e9-a693-bad13eeed614.png`, width: 300, height: 168 },
];

export const sectors = [
  { title: "Healthcare and hospitals", companies: ["Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "MIOT Hospitals", "Kauvery Hospital"] },
  { title: "IT and software", companies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies"] },
  { title: "Pharmaceutical", companies: ["Cipla", "Sun Pharma", "Dr. Reddy's Laboratories", "Hetero Pharma", "Lupin"] },
  { title: "Manufacturing", companies: ["Sakthi Auto Component", "Foxconn", "L&T", "Ashok Leyland", "TVS Motor Company"] },
  { title: "Diagnostics", companies: ["SRL Diagnostics", "Thyrocare", "Apollo Diagnostics", "Vijaya Diagnostic Centre", "Metropolis Healthcare"] },
  { title: "Insurance and services", companies: ["Pronoia Insurance Marketing", "Omega Healthcare", "Concentrix", "HDFC Bank", "ICICI Bank"] },
];

export const processSteps = [
  { line: "First, you register.", detail: "Every final-year Learner signs up with the Placement Cell of their college." },
  { line: "Then you train.", detail: "Aptitude, communication, mock interviews and resumes, taught by our Learning Facilitators." },
  { line: "Recruiters test you.", detail: "Aptitude tests, technical rounds and HR interviews, held on our campus in Komarapalayam." },
  { line: "You leave hired.", detail: "Selected Learners receive their offer letters through the Placement Cell." },
];

export type Poster = { n: number; college: CollegeSlug; company: string; learners: number };

// Transcribed from public/alumni/<n>.jpg (batch 2025, placement 2024-25).
// Poster 20 is left out: same name list as 19 with mismatched photos.
export const posters: Poster[] = [
  { n: 1, college: "allied-health", company: "Omega Healthcare", learners: 2 },
  { n: 2, college: "nursing", company: "Omega Healthcare", learners: 2 },
  { n: 3, college: "pharmacy", company: "Omega Healthcare", learners: 10 },
  { n: 4, college: "arts-science", company: "Foxconn", learners: 7 },
  { n: 5, college: "arts-science", company: "Foxconn", learners: 6 },
  { n: 6, college: "engineering", company: "Foxconn", learners: 7 },
  { n: 7, college: "engineering", company: "Foxconn", learners: 10 },
  { n: 8, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 9, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 10, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 9 },
  { n: 11, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 12, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 13, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 14, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 15, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 16, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 10 },
  { n: 17, college: "arts-science", company: "Sakthi Auto Component Limited", learners: 4 },
  { n: 18, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 8 },
  { n: 19, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 10 },
  { n: 21, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 10 },
  { n: 22, college: "arts-science", company: "Pronoia Insurance Marketing", learners: 10 },
  { n: 23, college: "engineering", company: "Pronoia Insurance Marketing", learners: 4 },
];

export const companyPackages: Record<string, string> = {
  "Sakthi Auto Component Limited": "2.71",
  "Pronoia Insurance Marketing": "4.5",
  Foxconn: "2.00",
  "Omega Healthcare": "2.70",
};

export type OfferRow = { company: string; colleges: CollegeSlug[]; offers: number; packageLpa: string };

export function summariseOffers(list: Poster[], packages: Record<string, string>): OfferRow[] {
  const rows = new Map<string, OfferRow>();
  for (const p of list) {
    const packageLpa = packages[p.company];
    if (packageLpa === undefined) throw new Error(`No package recorded for ${p.company}`);
    const row = rows.get(p.company) ?? { company: p.company, colleges: [], offers: 0, packageLpa };
    row.offers += p.learners;
    if (!row.colleges.includes(p.college)) row.colleges.push(p.college);
    rows.set(p.company, row);
  }
  return [...rows.values()]
    .map((r) => ({ ...r, colleges: [...r.colleges].sort() }))
    .sort((a, b) => b.offers - a.offers);
}

export const offerRows = summariseOffers(posters, companyPackages);
export const posterTotal = offerRows.reduce((sum, r) => sum + r.offers, 0);

export const faqs = [
  {
    q: "What is the placement rate?",
    a: "The Placement Cell reports a 92% placement rate across the six colleges, with more than 500 recruiting partners. Each college has a placement coordinator who works with recruiters in its field.",
  },
  {
    q: "Which companies recruit here?",
    a: "Healthcare, IT, pharmaceutical, manufacturing, diagnostics and service companies, among them Apollo Hospitals, TCS, Infosys, Cipla, Sun Pharma, Foxconn, Sakthi Auto Component and Omega Healthcare.",
  },
  {
    q: "What do recruiters pay?",
    a: "The highest package offered is ₹8.5 LPA and the average is ₹3.5 LPA. Packages vary by programme, college and sector.",
  },
  {
    q: "How does a campus drive work?",
    a: "Learners register with the Placement Cell and complete pre-placement training. Recruiters then hold aptitude tests, technical rounds and HR interviews on campus, and selected Learners receive offer letters through the cell.",
  },
  {
    q: "How are Learners trained?",
    a: "Our Learning Facilitators teach aptitude and reasoning, English communication, group discussion, mock technical and HR interviews and resume writing, with guest lectures from industry before the placement season.",
  },
  {
    q: "Do internships lead to offers?",
    a: "Often. Many recruiters offer pre-placement internships in the pre-final year, and strong interns are offered full-time roles. The Placement Cell arranges summer and semester internships.",
  },
  {
    q: "How can a recruiter visit?",
    a: "Write to cdc@jkkn.ac.in or call +91 98659 10003. The Placement Cell arranges the venue, shortlisting and logistics, for one programme or a pool drive across all six colleges.",
  },
];

export const contact = {
  email: "cdc@jkkn.ac.in",
  phone: "+91 98659 10003",
  phoneHref: "tel:+919865910003",
  hours: "Monday to Saturday, 8 am to 5 pm",
  address: "Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu 638183",
};
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm run test:data`
Expected: PASS, 11 tests.

- [ ] **Step 6: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add package.json scripts/home-data.test.mjs app/components/home/data.ts
git commit -m "feat(home): add Placement Report data module with integrity tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Report stylesheet, hero and ledger

**Files:**
- Create: `app/components/home/report.css`, `app/components/home/ReportHero.tsx`, `app/components/home/ReportLedger.tsx`
- Modify: `app/page.tsx` (temporarily renders only the new sections done so far, so each task is visible)

**Interfaces:**
- Consumes: `heroImages`, `figures`, `formatFigure` from `./data`; `SplitText`, `CountUp` from `@/components/react-bits/*`.
- Produces: CSS classes `report`, `report-x`, `report-grid`, `report-section`, `t-display`, `t-title`, `t-lead`, `t-body`, `t-small`, `tabular`, `grey`, `shutter`, `link-bar`, `press`, `ledger-row`, `ledger-whole`, `ledger-frac`, `ledger-cap`, `college-band`, `band-panel`, `band-label`, `poster-wall`; default exports `ReportHero`, `ReportLedger`.

- [ ] **Step 1: Write `app/components/home/report.css`**

```css
/* Placement Report homepage. Tokens live in app/globals.css (--report-*). */

.report { background: var(--report-paper); color: var(--report-ink); }
.report-x { padding-inline: var(--report-margin); }
.report-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: clamp(12px, 1.6vw, 24px);
}
.report-section { padding-block: clamp(96px, 12vw, 200px); }

/* Five type steps — no others on the homepage. */
.t-display { font-size: clamp(48px, 9vw, 140px); line-height: 0.92; letter-spacing: -0.045em; font-weight: 600; }
.t-title { font-size: clamp(36px, 4.6vw, 72px); line-height: 1; letter-spacing: -0.03em; font-weight: 600; }
.t-lead { font-size: clamp(22px, 2.4vw, 30px); line-height: 1.25; letter-spacing: -0.01em; font-weight: 500; }
.t-body { font-size: 17px; line-height: 1.55; }
.t-small { font-size: 13px; line-height: 1.4; }
@media (max-width: 639px) { .t-body { font-size: 16px; } }

.tabular { font-variant-numeric: tabular-nums lining-nums; }
.grey { filter: grayscale(1) contrast(1.05); }
.link-bar { text-decoration: underline; text-decoration-thickness: 4px; text-underline-offset: 6px; }
.press { transition: transform 160ms var(--ease-out), background-color 160ms ease, color 160ms ease; }
.press:active { transform: scale(0.97); }
.report :focus-visible { outline: 3px solid var(--report-ink); outline-offset: 3px; }
.report .bg-field :focus-visible, .report .bg-field-deep :focus-visible { outline-color: var(--report-paper); }

/* Signature move: the hero photo opens like a shutter. */
.shutter { animation: shutter-clip 1.1s var(--ease-out) both; }
.shutter img { animation: shutter-scale 1.1s var(--ease-out) both; }
@keyframes shutter-clip { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0); } }
@keyframes shutter-scale { from { transform: scale(1.12); } to { transform: scale(1); } }

/* Ledger: figures aligned on the decimal point. Row font-size = display, so em = figure size. */
.ledger-row {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) 1.3em minmax(0, 1fr);
  align-items: baseline;
  column-gap: 0.12em;
  padding-block: 10px;
}
.ledger-whole { text-align: right; }
.ledger-frac { text-align: left; }
.ledger-cap { align-self: baseline; }
@media (max-width: 767px) {
  .ledger-row { grid-template-columns: 52% 1.3em; row-gap: 6px; padding-block: 14px; }
  .ledger-cap { grid-column: 1 / -1; font-size: 15px; }
}

/* College band: six unequal panels; the chosen or hovered one widens. */
.college-band { display: flex; height: 68svh; min-height: 420px; }
.band-panel {
  position: relative; flex: var(--grow) 1 0; min-width: 0; overflow: hidden;
  border: 0; padding: 0; cursor: pointer; background: var(--report-ink);
  transition: flex-grow 500ms var(--ease-out);
}
.band-panel[aria-pressed="true"] { flex-grow: 6; }
@media (hover: hover) { .band-panel:hover { flex-grow: 6; } }
.band-label {
  position: absolute; left: 16px; bottom: 16px; padding: 6px 10px;
  background: rgb(3 40 22 / 0.78); color: var(--report-paper); text-align: left;
}
.band-panel[aria-pressed="true"] .band-label { background: var(--report-paper); color: var(--report-ink); }
@media (max-width: 767px) {
  .college-band { flex-wrap: wrap; height: 84svh; }
  .band-panel { flex: none; height: 28svh; }
  .band-panel:nth-child(1), .band-panel:nth-child(4), .band-panel:nth-child(5) { width: 64%; }
  .band-panel:nth-child(2), .band-panel:nth-child(3), .band-panel:nth-child(6) { width: 36%; }
}

/* Poster wall */
.poster-wall { columns: 4; column-gap: 4px; }
@media (max-width: 1023px) { .poster-wall { columns: 3; } }
@media (max-width: 639px) { .poster-wall { columns: 2; } }

@media (prefers-reduced-motion: reduce) {
  .shutter, .shutter img { animation: none; }
  .band-panel, .press { transition: none; }
  .press:active { transform: none; }
}
```

- [ ] **Step 2: Write `app/components/home/ReportHero.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";
import SplitText from "@/components/react-bits/SplitText";
import { heroImages } from "./data";

export default function ReportHero() {
  const { gate, handover } = heroImages;
  return (
    <section aria-labelledby="hero-title" className="p-2">
      <div className="grid gap-2 lg:h-[calc(100svh-112px-16px)] lg:min-h-[640px] lg:grid-cols-2 lg:grid-rows-2">
        <div className="flex min-h-[30svh] flex-col justify-end bg-tint p-6">
          <h1 id="hero-title">
            <SplitText
              text="JKKN"
              tag="span"
              splitType="chars"
              delay={70}
              duration={0.9}
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="t-display block"
            />
            <span className="t-lead mt-3 block">Placement Cell</span>
          </h1>
        </div>

        <div className="shutter relative aspect-[4/3] overflow-hidden lg:aspect-auto">
          <Image src={gate.src} alt={gate.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="grey object-cover" />
        </div>

        <div className="relative hidden overflow-hidden lg:block">
          <Image src={handover.src} alt={handover.alt} fill sizes="50vw" className="grey object-cover object-top" />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <p className="t-lead bg-field-deep p-6 text-paper">92% of our Learners placed across six colleges.</p>
          <div className="flex flex-col justify-between gap-8 bg-accent-yellow p-6 text-ink">
            <p className="t-lead">500+ recruiters come to Komarapalayam.</p>
            <Link href="/contact" className="press t-body inline-flex w-fit bg-ink px-5 py-3 font-semibold text-paper hover:bg-field">
              Register for placements
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-2 aspect-square overflow-hidden lg:hidden">
        <Image src={handover.src} alt={handover.alt} fill sizes="100vw" className="grey object-cover object-top" />
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `app/components/home/ReportLedger.tsx`**

```tsx
import CountUp from "@/components/react-bits/CountUp";
import { figures, formatFigure } from "./data";

export default function ReportLedger() {
  return (
    <section aria-labelledby="ledger-title" className="report-x report-section">
      <div className="report-grid items-center gap-y-12">
        <h2 id="ledger-title" className="t-title col-span-12 lg:col-span-5">
          <span className="block text-ink-soft">JKKN placements,</span>
          <span className="block">in figures.</span>
        </h2>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          {figures.map((f) => (
            <div key={f.id} className="ledger-row t-display tabular">
              <span className="ledger-whole" aria-hidden="true">
                <CountUp to={f.whole} separator={f.separator ? "," : ""} duration={1.6} />
              </span>
              <span className="ledger-frac" aria-hidden="true">{f.fraction ?? ""}{f.suffix ?? ""}</span>
              <p className="ledger-cap t-body">
                <span className="sr-only">{formatFigure(f)} </span>
                {f.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Render the new sections in `app/page.tsx`**

Replace the whole file with:

```tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReportHero from "./components/home/ReportHero";
import ReportLedger from "./components/home/ReportLedger";
import "./components/home/report.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="report" style={{ paddingTop: 112 }}>
        <ReportHero />
        <ReportLedger />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint && npm run build`
Expected: success. Then `npm run dev` and open `http://localhost:3000`: the board fills the first screen at 1440px (name tile, greyscale gate photo opening like a shutter, greyscale handover photo, green and yellow tiles); figures count up once and sit aligned on the decimal point; at 390px the board stacks into one column with no horizontal scroll.

- [ ] **Step 6: Commit**

```bash
git add app/components/home/report.css app/components/home/ReportHero.tsx app/components/home/ReportLedger.tsx app/page.tsx
git commit -m "feat(home): hero board and decimal-aligned figures ledger

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: College band with picker

**Files:**
- Create: `app/components/home/CollegeBand.tsx`
- Modify: `app/page.tsx` (add `<CollegeBand />` after `<ReportLedger />` with its import)

**Interfaces:**
- Consumes: `colleges`, `CollegeSlug` from `./data`; `AnimatedContent`; CSS `college-band`, `band-panel`, `band-label`.
- Produces: default export `CollegeBand` (client component).

- [ ] **Step 1: Write `app/components/home/CollegeBand.tsx`**

```tsx
"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import { colleges, type CollegeSlug } from "./data";

export default function CollegeBand() {
  const [active, setActive] = useState<CollegeSlug>(colleges[0].slug);
  const college = colleges.find((c) => c.slug === active) ?? colleges[0];

  return (
    <section aria-labelledby="colleges-title" className="pt-[clamp(96px,12vw,200px)]">
      <div className="report-x report-grid mb-16">
        <h2 id="colleges-title" className="t-title col-span-12 lg:col-span-9 lg:col-start-3">
          Six colleges, one cell
        </h2>
      </div>

      <div className="college-band" role="group" aria-label="Choose a college">
        {colleges.map((c) => (
          <button
            key={c.slug}
            type="button"
            aria-pressed={c.slug === active}
            aria-controls="college-detail"
            aria-label={c.name}
            onClick={() => setActive(c.slug)}
            className="band-panel"
            style={{ "--grow": c.grow } as CSSProperties}
          >
            <Image src={c.image} alt="" fill sizes="(min-width: 768px) 40vw, 64vw" className="object-cover" />
            <span className="band-label t-body">{c.short}</span>
          </button>
        ))}
      </div>

      <div id="college-detail" aria-live="polite" className="report-x report-grid gap-y-10 pb-[clamp(96px,12vw,200px)] pt-16">
        <div className="col-span-12 lg:col-span-5">
          <h3 className="t-lead">{college.name}</h3>
          <Link href={`/placements/${college.slug}`} className="link-bar t-body mt-6 inline-block font-semibold text-field hover:text-ink">
            Read the {college.short} placement page
          </Link>
        </div>
        <AnimatedContent key={college.slug} distance={24} duration={0.5} initialOpacity={0} threshold={0}>
          <dl className="t-body col-span-12 grid gap-8 lg:col-span-6 lg:col-start-7">
            <div>
              <dt className="text-ink-soft">Programmes</dt>
              <dd className="mt-2">{college.programmes.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Recruiters</dt>
              <dd className="mt-2">{college.recruiters.join(", ")}</dd>
            </div>
          </dl>
        </AnimatedContent>
      </div>
    </section>
  );
}
```

Note: `AnimatedContent` renders a wrapper `div`, so the grid placement classes go on that wrapper if it accepts `className`; if it does not, wrap it: `<div className="col-span-12 lg:col-span-6 lg:col-start-7"><AnimatedContent …><dl className="t-body grid gap-8">…</dl></AnimatedContent></div>`. Use whichever keeps the `dl` in columns 7–12.

- [ ] **Step 2: Add it to `app/page.tsx`**

Add `import CollegeBand from "./components/home/CollegeBand";` and render `<CollegeBand />` after `<ReportLedger />`.

- [ ] **Step 3: Verify build**

Run: `npm run lint && npm run build`
Expected: success.

- [ ] **Step 4: Verify behaviour in the browser**

`npm run dev`, open `/`: six full-colour photo panels in one band; Dental is widest and pressed; hovering another widens it over 0.5s; clicking Pharmacy swaps the name, programmes and recruiters below and the link points to `/placements/pharmacy`. At 390px the panels form a 3-row block with unequal widths and no horizontal scroll.

- [ ] **Step 5: Verify keyboard use (Review Focus 3)**

Tab into the band: each panel shows the focus outline; Enter and Space select it; the pressed panel's label turns paper-on-ink; a screen reader (or the Accessibility pane) reports `pressed` and announces the updated details region.

- [ ] **Step 6: Commit**

```bash
git add app/components/home/CollegeBand.tsx app/page.tsx
git commit -m "feat(home): six-college photo band with college picker

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Recruiters sheet and process staircase

**Files:**
- Create: `app/components/home/RecruiterSheet.tsx`, `app/components/home/ProcessStair.tsx`
- Modify: `app/page.tsx` (render both after `<CollegeBand />`, in that order, with imports)

**Interfaces:**
- Consumes: `recruiterLogos`, `sectors`, `processSteps` from `./data`; `LogoLoop`, `AnimatedContent`.
- Produces: default exports `RecruiterSheet`, `ProcessStair`.

- [ ] **Step 1: Write `app/components/home/RecruiterSheet.tsx`**

```tsx
import LogoLoop from "@/components/react-bits/LogoLoop";
import { recruiterLogos, sectors } from "./data";

export default function RecruiterSheet() {
  return (
    <section aria-labelledby="recruiters-title" className="report-section bg-tint">
      <h2 id="recruiters-title" className="t-title report-x">
        <span className="block lg:pl-[3vw]">500+ recruiters,</span>
        <span className="block">six fields of work</span>
      </h2>

      <div className="mt-16 bg-white py-8">
        <LogoLoop
          logos={recruiterLogos.map((l) => ({ src: l.src, alt: l.name, title: l.name }))}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={64}
          pauseOnHover
          fadeOut={false}
          scaleOnHover={false}
          ariaLabel="Companies that recruit JKKN Learners"
        />
      </div>

      <div className="report-x report-grid mt-24">
        <p className="t-small col-span-12 mb-4 text-ink-soft lg:col-span-1 lg:col-start-7 lg:mb-0">Sectors</p>
        <table className="t-body col-span-12 border-collapse lg:col-span-5 lg:col-start-8">
          <caption className="sr-only">Recruiters by sector</caption>
          <tbody>
            {sectors.map((s) => (
              <tr key={s.title} className="align-baseline">
                <th scope="row" className="w-[36%] py-[13px] pr-4 text-left font-normal text-ink-soft">{s.title}</th>
                <td className="py-[13px]">{s.companies.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write `app/components/home/ProcessStair.tsx`**

```tsx
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import { processSteps } from "./data";

// Literal class names so Tailwind generates them.
const STAIR = [
  "pl-0 lg:col-start-1 lg:col-span-12",
  "pl-[6vw] lg:pl-0 lg:col-start-3 lg:col-span-10",
  "pl-[12vw] lg:pl-0 lg:col-start-5 lg:col-span-8",
  "pl-[18vw] lg:pl-0 lg:col-start-7 lg:col-span-6",
];

export default function ProcessStair() {
  const last = processSteps.length - 1;
  return (
    <section aria-labelledby="process-title" className="report-section bg-field text-paper">
      <h2 id="process-title" className="sr-only">How campus placement works</h2>
      <ol className="report-x report-grid gap-y-14">
        {processSteps.map((s, i) => (
          <li key={s.line} className={`col-span-12 ${STAIR[i]}`}>
            <AnimatedContent distance={24} duration={0.7} delay={i * 0.08} initialOpacity={0}>
              <h3 className={`t-title ${i === last ? "text-accent-yellow" : ""}`}>{s.line}</h3>
              <p className="t-body mt-3 max-w-[34ch]">{s.detail}</p>
            </AnimatedContent>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

- [ ] **Step 3: Add both to `app/page.tsx`** (imports + `<RecruiterSheet />` then `<ProcessStair />` after `<CollegeBand />`).

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build` → success. In `npm run dev`: logos scroll slowly on a white strip and pause on hover; the sector table sits in the right five columns; the green section shows four lines stepping right, the last in yellow. At 390px the headline "500+ recruiters, / six fields of work" stays on two lines and the staircase indents by 6vw per step.

- [ ] **Step 5: Commit**

```bash
git add app/components/home/RecruiterSheet.tsx app/components/home/ProcessStair.tsx app/page.tsx
git commit -m "feat(home): recruiter logo loop, sector table and process staircase

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Offers table and poster wall

**Files:**
- Create: `app/components/home/OffersTable.tsx`, `app/components/home/PosterWall.tsx`
- Modify: `app/page.tsx` (render both after `<ProcessStair />`, with imports)

**Interfaces:**
- Consumes: `offerRows`, `posterTotal`, `posters`, `collegeShortName` from `./data`; CSS `poster-wall`.
- Produces: default exports `OffersTable`, `PosterWall`.

- [ ] **Step 1: Write `app/components/home/OffersTable.tsx`**

```tsx
import Link from "next/link";
import { collegeShortName, offerRows, posterTotal } from "./data";

export default function OffersTable() {
  return (
    <section aria-labelledby="offers-title" className="report-x report-section">
      <h2 id="offers-title" className="t-title">
        <span className="block">Batch 2025,</span>
        <span className="block lg:pl-[16.66%]">offer by offer</span>
      </h2>

      <table className="t-body mt-[72px] w-full border-collapse">
        <caption className="sr-only">Campus offers to the 2025 batch, by company</caption>
        <thead>
          <tr className="text-left text-ink-soft">
            <th scope="col" className="px-3 py-[14px] font-normal">Company</th>
            <th scope="col" className="px-3 py-[14px] font-normal max-md:hidden">Colleges</th>
            <th scope="col" className="px-3 py-[14px] text-right font-normal">Offers</th>
            <th scope="col" className="px-3 py-[14px] text-right font-normal">Package</th>
          </tr>
        </thead>
        <tbody>
          {offerRows.map((r, i) => (
            <tr key={r.company} className={i % 2 === 0 ? "bg-tint" : ""}>
              <th scope="row" className="px-3 py-[14px] text-left font-semibold">{r.company}</th>
              <td className="px-3 py-[14px] max-md:hidden">{r.colleges.map(collegeShortName).join(", ")}</td>
              <td className="tabular px-3 py-[14px] text-right">{r.offers}</td>
              <td className="tabular px-3 py-[14px] text-right">₹{r.packageLpa} LPA</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="t-small mt-6 max-w-[60ch] text-ink-soft">
        Counted from the batch-2025 placement posters: {posterTotal} offers. A Learner selected by two companies counts once for each offer.
      </p>
      <Link href="/on-campus-drives" className="link-bar t-body mt-10 inline-block font-semibold text-field hover:text-ink">
        See every campus drive
      </Link>
    </section>
  );
}
```

- [ ] **Step 2: Write `app/components/home/PosterWall.tsx`**

```tsx
import Image from "next/image";
import { collegeShortName, posters } from "./data";

export default function PosterWall() {
  return (
    <section aria-labelledby="wall-title" className="pb-3 pt-[clamp(96px,12vw,200px)]">
      <div className="report-x report-grid">
        <h2 id="wall-title" className="sr-only">Placement posters, batch 2025</h2>
        <p className="t-lead col-span-12 max-w-[30ch] lg:col-span-4 lg:col-start-8">
          Each poster marks Learners from one college chosen by one company. Twenty-two of them, from the batch of 2025.
        </p>
      </div>
      <div className="poster-wall mt-16 px-3">
        {posters.map((p) => {
          const college = collegeShortName(p.college);
          return (
            <figure key={p.n} className="mb-[14px] break-inside-avoid">
              <a href={`/alumni/${p.n}.jpg`} target="_blank" rel="noopener" className="press block">
                <Image
                  src={`/alumni/${p.n}.jpg`}
                  alt={`Placement poster: ${p.learners} ${p.learners === 1 ? "Learner" : "Learners"} from ${college} selected by ${p.company}`}
                  width={2000}
                  height={1231}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="t-small mt-[6px]">{college}, {p.company}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add both to `app/page.tsx`** (imports + `<OffersTable />` then `<PosterWall />` after `<ProcessStair />`).

- [ ] **Step 4: Verify**

Run: `npm run test:data && npm run lint && npm run build` → success. In `npm run dev`: the table lists Sakthi 93, Pronoia 42, Foxconn 30, Omega 14 with alternate tinted rows and no lines; the note says 179 offers; 22 posters fill 4 columns at 1440px, 3 at 768px, 2 at 390px; each opens full size in a new tab.

- [ ] **Step 5: Commit**

```bash
git add app/components/home/OffersTable.tsx app/components/home/PosterWall.tsx app/page.tsx
git commit -m "feat(home): batch-2025 offers table and placement poster wall

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: FAQ, closing field, final page composition and metadata

**Files:**
- Create: `app/components/home/FaqTable.tsx`, `app/components/home/ClosingField.tsx`
- Modify: `app/page.tsx` (final composition), `app/layout.tsx:15-16` (description)

**Interfaces:**
- Consumes: `faqs`, `closingPhotos`, `contact` from `./data`; `Magnet`.
- Produces: default exports `FaqTable`, `ClosingField`; the final `Home` page.

- [ ] **Step 1: Write `app/components/home/FaqTable.tsx`**

```tsx
import { Fragment } from "react";
import { faqs } from "./data";

export default function FaqTable() {
  return (
    <section aria-labelledby="faq-title" className="report-x report-section">
      <div className="report-grid gap-y-[80px] lg:items-baseline">
        <h2 id="faq-title" className="t-lead col-span-12 text-ink-soft lg:col-span-6">Questions Learners ask</h2>
        <div aria-hidden="true" className="hidden lg:col-span-5 lg:col-start-8 lg:block" />
        {faqs.map((f) => (
          <Fragment key={f.q}>
            <h3 className="t-lead col-span-12 lg:col-span-6">{f.q}</h3>
            <p className="t-body col-span-12 -mt-[68px] max-w-[40ch] lg:col-span-5 lg:col-start-8 lg:mt-0">{f.a}</p>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write `app/components/home/ClosingField.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";
import Magnet from "@/components/react-bits/Magnet";
import { closingPhotos, contact } from "./data";

export default function ClosingField() {
  return (
    <section aria-labelledby="close-title">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {closingPhotos.map((p, i) => (
          <div
            key={p.src}
            className={`relative aspect-[4/3] md:aspect-auto md:h-[40svh] ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="grey object-cover" />
          </div>
        ))}
      </div>

      <div className="report-x bg-field py-16 text-paper md:min-h-[44svh]">
        <div className="report-grid gap-y-8">
          <h2 id="close-title" className="sr-only">Contact the Placement Cell</h2>
          <p className="t-lead col-span-12 max-w-[26ch] lg:col-span-7">Your offer letter starts with one conversation.</p>
          <div className="col-span-12 lg:col-span-7">
            <Magnet padding={60} magnetStrength={4}>
              <Link href="/contact" className="link-bar t-lead inline-block font-semibold">
                Talk to the Placement Cell
              </Link>
            </Magnet>
          </div>
          <div className="t-body col-span-12 lg:col-span-7">
            <p>
              <a href={`mailto:${contact.email}`} className="underline decoration-2 underline-offset-4">{contact.email}</a>
              {" · "}
              <a href={contact.phoneHref} className="underline decoration-2 underline-offset-4">{contact.phone}</a>
            </p>
            <p className="mt-1">{contact.hours}. {contact.address}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Final `app/page.tsx`**

```tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReportHero from "./components/home/ReportHero";
import ReportLedger from "./components/home/ReportLedger";
import CollegeBand from "./components/home/CollegeBand";
import RecruiterSheet from "./components/home/RecruiterSheet";
import ProcessStair from "./components/home/ProcessStair";
import OffersTable from "./components/home/OffersTable";
import PosterWall from "./components/home/PosterWall";
import FaqTable from "./components/home/FaqTable";
import ClosingField from "./components/home/ClosingField";
import "./components/home/report.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="report" style={{ paddingTop: 112 }}>
        <ReportHero />
        <ReportLedger />
        <CollegeBand />
        <RecruiterSheet />
        <ProcessStair />
        <OffersTable />
        <PosterWall />
        <FaqTable />
        <ClosingField />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Update the metadata description in `app/layout.tsx`**

Replace the `description:` value with:

```ts
    "JKKN Institutions Placement Cell: a 92% placement rate across six colleges \u2014 Dental, Pharmacy, Nursing, Allied Health Sciences, Engineering and Technology, Arts and Science. 500+ recruiters, \u20B98.5 LPA highest package.",
```

- [ ] **Step 5: Verify**

Run: `npm run test:data && npm run lint && npm run build` → success. In `npm run dev`: every FAQ answer is open beside its question at 1440px and directly beneath it at 390px; the closing strip shows three greyscale college photos, then the green field whose underlined link drifts slightly toward the pointer and goes to `/contact`.

- [ ] **Step 6: Commit**

```bash
git add app/components/home/FaqTable.tsx app/components/home/ClosingField.tsx app/page.tsx app/layout.tsx
git commit -m "feat(home): open FAQ, closing field and final nine-section composition

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Navbar and Footer restyle (all routes)

**Files:**
- Modify: `app/components/Navbar.tsx`, `app/components/Footer.tsx` (full rewrite)

**Interfaces:**
- Consumes: Tailwind colours from Task 1; `contact` from `@/app/components/home/data`.
- Produces: same default exports `Navbar`, `Footer`; Navbar height unchanged (top bar ≈ 32px + 80px row = the 112px every page offsets by).

- [ ] **Step 1: Navbar edits**

In `app/components/Navbar.tsx`:
- Line 15: `{ label: "Our Faculty", href: "/about#faculty" }` → `{ label: "Our Learning Facilitators", href: "/about#faculty" }`.
- Lines 26–31: use the official names — `"JKKN Dental College and Hospital"`, `"JKKN College of Pharmacy"`, `"JKKN College of Nursing"`, `"JKKN College of Allied Health Sciences"`, `"JKKN College of Engineering and Technology (Autonomous)"`, `"JKKN College of Arts and Science (Autonomous)"`.
- Line 55: `bg-green-dark` → `bg-field-deep`; line 56 `text-white/80` → `text-paper`.
- Line 72: `className="bg-white shadow-md"` → `className="bg-paper"`.
- Lines 101, 151: `text-heading … hover:text-green` → `text-ink … hover:text-field`.
- Line 107: `rounded-md border border-gray-100 bg-white py-1 shadow-xl` → `min-w-[320px] bg-paper py-1 shadow-xl` (remove the old `min-w-[200px]`; a floating menu may keep its shadow).
- Lines 112, 160: `text-body … hover:bg-green/5 hover:text-green` → `text-ink … hover:bg-tint hover:text-field`.
- Lines 127, 170: `rounded-md bg-green … hover:bg-green-light` → `bg-ink … text-paper hover:bg-field` (square corners).
- Line 145: `border-t border-gray-100 bg-white` → `bg-paper`.

- [ ] **Step 2: Rewrite `app/components/Footer.tsx`**

```tsx
import Link from "next/link";
import { contact } from "@/app/components/home/data";

const placementLinks = [
  { label: "Dental", href: "/placements/dental" },
  { label: "Pharmacy", href: "/placements/pharmacy" },
  { label: "Nursing", href: "/placements/nursing" },
  { label: "Allied Health Sciences", href: "/placements/allied-health" },
  { label: "Engineering and Technology", href: "/placements/engineering" },
  { label: "Arts and Science", href: "/placements/arts-science" },
];

const socials = [
  { label: "YouTube", href: "https://youtube.com/@JKKNINSTITUTIONS" },
  { label: "Instagram", href: "https://instagram.com/jkkninstitutions/" },
  { label: "LinkedIn", href: "https://linkedin.com/school/jkkninstitutions/" },
  { label: "Facebook", href: "https://facebook.com/myjkkn" },
  { label: "X", href: "https://x.com/jkkninstitution" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="grid min-h-[100svh] grid-rows-[auto_1fr_auto] bg-field-deep px-[var(--report-margin)] pb-5 pt-10 text-paper"
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-[15px] leading-relaxed lg:grid-cols-4">
        <div>
          <p className="font-semibold">JKKN Institutions</p>
          <address className="not-italic text-paper/75">{contact.address}</address>
        </div>
        <nav aria-label="Placements by college">
          <p className="font-semibold">Placements</p>
          <ul className="text-paper/75">
            {placementLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-paper">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold">Follow</p>
          <ul className="text-paper/75">
            {socials.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{s.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Placement Cell</p>
          <ul className="text-paper/75">
            <li><a href={`mailto:${contact.email}`} className="hover:text-paper">{contact.email}</a></li>
            <li><a href={contact.phoneHref} className="hover:text-paper">{contact.phone}</a></li>
            <li>{contact.hours}</li>
            <li><Link href="/contact" className="hover:text-paper">Contact page</Link></li>
          </ul>
        </div>
      </div>

      <div aria-hidden="true" className="min-h-[20svh]" />

      <div>
        <svg viewBox="0 0 1000 250" className="block w-full" role="img" aria-label="JKKN">
          <text
            x="0"
            y="238"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 700, fontSize: 300 }}
          >
            JKKN
          </text>
        </svg>
        <p className="mt-5 text-[13px] text-paper/75">© 2026 JKKN Institutions · Excellence in Education</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Verify build and other routes**

Run: `npm run lint && npm run build` → success. In `npm run dev`, open `/`, `/about`, `/placements/dental`, `/on-campus-drives`, `/contact`: the Navbar is a flat cream bar with ink links and a square ink "Contact Us" button, dropdowns still open on hover, content still starts below the bar (112px offset intact), and every page ends with the green footer whose "JKKN" wordmark spans the full width on one line.

- [ ] **Step 4: Stale-copy grep (Review Focus 5)**

Run: `grep -rniE "\bstudents?\b|12 LPA|95%" app/page.tsx app/components/home app/components/Navbar.tsx app/components/Footer.tsx app/layout.tsx`
Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add app/components/Navbar.tsx app/components/Footer.tsx
git commit -m "feat: flat brand Navbar and inverted wordmark Footer across all routes

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 9: Taste gate, look-and-fix rounds, report

**Files:**
- Modify: whichever homepage files the findings point at.

**Interfaces:**
- Consumes: the finished page. Taste skill copy at `C:/Users/MyLap/AppData/Local/Temp/claude/D--Sangeetha-V-jkkn-placement-website/9d11635a-0569-4ede-8545-d4a1211841b6/scratchpad/taste/.claude/skills/design-taste-frontend` (call it `$TASTE`; if the scratchpad was cleared, recreate it with `git archive backup/local-work-2026-10-14 .claude/skills/design-taste-frontend | tar -x -C <dir>`).

- [ ] **Step 1: Source lint**

Run: `node $TASTE/scripts/lint.mjs app/components/home app/page.tsx app/components/Navbar.tsx app/components/Footer.tsx`
Expected: no FAIL. Fix each FAIL in the named file; justify or fix each WARN.

- [ ] **Step 2: Browser inspection**

Run `npm run build && npm run start` in the background, then: `node $TASTE/scripts/inspect.mjs http://localhost:3000`
Expected: zero FAIL at 1440, 768 and 390 (headline line counts, type sizes, fonts loaded, colours, rules, shadows, gradients, contrast, overflow, ≥ 8 moving elements). Screenshots land in `.taste-skill/inspect/` — add `.taste-skill/` to `.gitignore` if it is not ignored.

- [ ] **Step 3: Reduced motion check (Review Focus 1)**

In Chrome DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion: reduce", reload `/`: the gate photo is shown without the shutter, logos do not travel (if LogoLoop ignores the media query, pass `speed={0}` when `window.matchMedia("(prefers-reduced-motion: reduce)").matches`, via a tiny client wrapper), and every section's text is visible after scrolling through.

- [ ] **Step 4: Look and fix (up to three rounds)**

Read every screenshot in `.taste-skill/inspect/` and critique with `$TASTE/references/critique.md` (its fourteen passes and score). Write the critique down, fix the top three problems, re-run Step 2, look again. Stop after three rounds.

- [ ] **Step 5: Final checks**

Run: `npm run test:data && npm run lint && npm run build`
Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add -A app components lib scripts .gitignore
git commit -m "fix(home): resolve taste gate findings

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

- [ ] **Step 7: Report to the user**

Report: direction `editorial-report` (seed 790845414) and the recorded adjustments; the idea sentence and the college picker; the last critique score and what still falls short; which images stand in (none are stock); the follow-ups from spec §11 (sitewide `--gold` recolour, mobile bottom nav and skills restore from `backup/local-work-2026-10-14`, verified per-college figures, real testimonials, broken `placements.jkkn.ac.in` images on other routes).
