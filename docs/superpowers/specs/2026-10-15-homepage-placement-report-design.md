# Homepage redesign — "The Placement Report 2025-26"

Date: 2026-10-15 · Status: approved in chat, awaiting written-spec review

## 1. Goal

Rebuild the homepage (`app/page.tsx`) of the JKKN Placement Cell website as a modern, professional,
editorial page that:

- uses the **main site's (jkkn.ac.in) brand colours**, real **college photographs** and **terminology**;
- follows the **design-taste-frontend** (tasteskill v2) house rules — taste-first;
- uses **React Bits** components only where they fit those rules.

Success = homepage builds and lints clean, passes `lint.mjs` and `inspect.mjs` (no FAIL) at
1440/768/390px, shows only real content and the main site's figures, and every other route still works.

## 2. Decisions (from the user)

| Question | Decision |
|---|---|
| Figures | Main site's: 92% placement, 500+ recruiters, ₹8.5 LPA highest, ₹3.5 LPA average, 50,000+ alumni, 74+ years |
| Structure | Consolidate 17 sections → 9 |
| Style | Taste-first; only taste-compatible React Bits |
| Colleges | The 6 with existing `/placements/*` routes |

## 3. Art direction

Dealt by `draw.mjs` (sector `education`, `--keep palette,type`, seed `790845414`):
direction **`editorial-report` — The printed annual**. Signature motion: **shutter image** (once, hero photo).

**Idea:** On this page, *the Placement Cell's own annual report of offers* becomes *a printed two-colour
annual*: figures as a ledger, the six colleges as one photographic band, drives as a dated table.

**Live thing:** the college picker — selecting one of the six photo panels updates the adjacent table
with that college's programmes and recruiters and a link to `/placements/{slug}`. No-JS fallback: the
first college is shown, and all six panels are plain links.

**Redraws / adjustments (recorded):**
- Hero board's top row of tiles (logo / links / action) is dropped: the shared `Navbar` already provides
  navigation with the dropdowns other routes rely on. The board starts below the Navbar.
- Showcase band holds 6 panels (blueprint: 4) because there are 6 colleges; flex-grow `5,2,3,2,3,2`.
- Gallery tile captions at 13px (blueprint 12px; house rule floor 13px).
- No index numbers, eyebrows, gradients, glows, glass, shadows at rest, or thin rules (house rules).

## 4. Brand tokens

New tokens in `app/globals.css` `:root` (existing tokens untouched — other pages use the lime `--gold`):

```css
--report-paper:  #fbfbee;   /* ground */
--report-ink:    #032816;   /* running text, full ink */
--report-ink-soft: #3d5a4a; /* secondary notes only */
--report-field:  #0b6d41;   /* full-bleed colour pages */
--report-field-deep: #085032;
--report-tint:   #e8f5ee;   /* tone step for alternate table rows */
--report-accent: #ffde59;   /* the one action + the accent tile */
```

Exposed through `@theme inline` as Tailwind colours `paper`, `ink`, `ink-soft`, `field`, `field-deep`,
`tint`, `accent-yellow`. One face: Poppins (already loaded as `--font-poppins`). One button shape:
square corners (radius 0). Page margins: `clamp(16px, 2.2vw, 32px)`. Axis at 42% of the content width.

Five type steps only:

| Step | Size | Use |
|---|---|---|
| display | `clamp(64px, 12.5vw, 190px)` | hero name, ledger figures |
| title | `clamp(36px, 4.6vw, 72px)` | section headings, process lines |
| lead | `clamp(22px, 2.4vw, 30px)` | statements, FAQ questions, tile sentences |
| body | `17px` (16px phone) | running text, tables |
| small | `13px` | captions, legal |

## 5. Terminology & content rules

- "Learners" (not students), "Learning Facilitators" (not faculty), "Placement Cell".
- Official names: **JKKN Dental College and Hospital**; **JKKN College of Pharmacy**;
  **JKKN College of Nursing**; **JKKN College of Allied Health Sciences**;
  **JKKN College of Engineering and Technology (Autonomous)**; **JKKN College of Arts and Science (Autonomous)**.
- Umbrella: **JKKN Institutions** · tagline **Excellence in Education** · Komarapalayam, Namakkal District.
- No invented proof: per-college package figures are **omitted** (they contradict the overall ₹8.5 LPA);
  placeholder Faculty and Testimonials do not appear on the homepage.
- Contact used on the homepage: Placement Cell `cdc@jkkn.ac.in`, `+91 98659 10003` (Navbar values).

## 6. Assets

College photos (main site, Supabase `cms-media/general/`, allowlisted host):

| Slug | File |
|---|---|
| dental | `3848aa24-155a-4759-afc2-17987d647e8b.png` |
| pharmacy | `babdddef-4ba7-4caa-acf2-eda9b4be0199.jpg` |
| nursing | `f229bf34-b6d0-4435-af52-3479b4ff22e2.webp` (fixes current wrong image `59457a83…`, which is Education's) |
| allied-health | `0a7ec366-6d23-4745-a201-dcd771b9f47d.jpg` |
| engineering | `f81d3b5b-5d88-4350-a779-e5487830fdbd.JPG` |
| arts-science | `af856eac-ce3b-4437-9562-203201b209d5.jpg` |

Recruiter logos (Supabase `cms-media/general/`): TCS `089ad387-05a5-4004-b25f-25f7e15c4799.png`,
HCL `e3afef79-adc6-45c9-91e7-0ed5601ee01c.png`, Bosch `32f2a003-5955-481c-845e-4a189e6bdb38.jpg`,
Ivy Mobility `5d1b520f-9bab-4319-be8b-61cee8dcc587.png`, Buddi.ai `5c227ba7-9254-42b0-b821-7b3107d78226.png`,
Tech Mahindra `8bed5615-ad87-44ab-bef7-ee1d06adcb7b.png`, TVS `c4daea95-90d0-41e9-a693-bad13eeed614.png`.
Only named logos are used.

From `placements.jkkn.ac.in/wp-content/themes/placements/assets/img/` (to be allowlisted):
placement day `gallery/g7.png`–`g12.png`; drive photos `blog/company-1.png`–`company-6.png`, `about/7-scaled.jpg`;
portrait `team/team-4.png` (Dr. Krishna Veni A). Local: `/placement-event.png`, `/alumni/1.jpg`–`23.jpg`.

Photo floor: ≥ 4 real pictures (page will carry ~40). No stock/picsum photos needed.

## 7. Page structure

`app/page.tsx` renders: `Navbar` → `<main>` with the nine sections below → `Footer`.
All new sections live in `app/components/home/`; all their data in `app/components/home/data.ts`.

| # | Component | Blueprint | Content | Motion / React Bits |
|---|---|---|---|---|
| 1 | `ReportHero` | Two-by-two board, 8px gaps, radius 0 | TL paper tile "JKKN" at display + "Placement Cell" at lead; TR + BL greyscale photos (`placement-event.png`, `g8.png`); BR split: field-deep tile "92% of our Learners placed across six colleges." / accent tile "500+ recruiters come to Komarapalayam." + primary button "Register for placements" → `/contact` | **SplitText** on "JKKN"; shutter clip-path on TR photo (1.1s, scale 1.12→1) |
| 2 | `ReportLedger` | Column aligned on the decimal | Statement "The year in figures. / Placement Report 2025-26." + 6 rows: 92 % placement rate · 500+ recruiting partners · 8.5 LPA highest package (₹, lakh per annum) · 3.5 LPA average · 50,000+ alumni placed · 74 years of JKKN | **CountUp** per figure (once, on view) |
| 3 | `CollegeBand` | Band of unequal panels + table pushed right | Heading "Six colleges, one cell"; 6 panels (photo, official name); selected college's table: programmes, top recruiters, "Read the {college} report →" | Hover/selected panel flex-grow 6 (500ms); **AnimatedContent** on table rows |
| 4 | `RecruiterSheet` | Statement, table pushed right | Heading "Recruiters who return every year"; **LogoLoop** of 7 named logos; table sector → companies (Healthcare, IT, Pharma, Manufacturing, Diagnostics, Education, from `Sectors.tsx`) | LogoLoop (pause on hover, reduced-motion = static) |
| 5 | `ProcessStair` | Lines that step across | "First you register with the Placement Cell." / "Then you train with our Learning Facilitators." / "Recruiters test you on campus." / "You leave with an offer letter." (accent-on-field) + one sentence each | **AnimatedContent** stagger 80ms |
| 6 | `DriveTable` | Recognition as a table | Heading "Campus drives, / 2025"; `<table>` month · company · photo thumb · "On campus"; alternate rows `tint` | row entrance |
| 7 | `GallerySheet` | Dense masonry sheet | Statement "Placement Day 2025 and the Learners who went before." + masonry of g7–g12 + alumni 1–23, captions "Placement Day, 2025" / "Alumni" | **Masonry** (React Bits), hover scale off |
| 8 | `FaqTable` | Large questions, answers beside | 7 open Q&As from `FAQ.tsx`, figures corrected to §2 | entrance only |
| 9 | `ClosingField` | Three photographs, then a field | Strip g10 / g11 / g12 (40svh); field `--report-field`: "Your offer letter starts with one conversation. **Talk to the Placement Cell**" (underlined link → `/contact`) + email/phone; portrait team-4 bottom-right | **Magnet** on the link |

Shared component updates (affect all routes, behaviour unchanged):

- `Navbar`: flat `paper` bar, ink links, ink-filled "Contact Us" button (paper text), no shadow/blur.
  Same links & dropdowns. (Yellow is reserved for the hero action and the hero accent tile; the
  ProcessStair final line is yellow on the green field as its one emphasis.)
- `Footer`: inverted (`field-deep` ground, paper ink), min-height 100svh, 4 columns (address, internal
  navigation incl. the 6 placement routes, social, contact), full-width "JKKN" SVG wordmark, legal line 13px.

## 8. Technical design

- **React Bits install**: hand-written `components.json` (style `new-york`, `rsc: true`, `tsx: true`,
  css `app/globals.css`, aliases `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`)
  + `lib/utils.ts` (`cn` via `clsx` + `tailwind-merge`). **Do not run `shadcn init`** (it rewrites
  `globals.css`). Then `npx shadcn@latest add @react-bits/{SplitText,CountUp,LogoLoop,AnimatedContent,Masonry,Magnet}-TS-TW`.
  Expected new deps: `gsap`, `@gsap/react`, `motion`, `clsx`, `tailwind-merge`.
- React Bits components are client components; section components are server components where they
  have no interactivity, wrapping the client pieces. `CollegeBand` is a client component (picker state).
- Images via `next/image` with explicit `width`/`height`/`sizes`; `next.config.ts` adds
  `placements.jkkn.ac.in` to `remotePatterns`.
- `prefers-reduced-motion: reduce` → no travel, no shutter, no marquee scroll; content always visible
  without JS (no `opacity: 0` set in server CSS).
- Old homepage components are not deleted (other routes import them).
- `layout.tsx` metadata description updated to the §2 figures (92%, 500+, ₹8.5 LPA).

## 9. Verification

1. `npm run lint` and `npm run build` pass.
2. Taste gate from the scratchpad copy of the skill: `lint.mjs app/components/home app/page.tsx`,
   `inspect.mjs http://localhost:3000` → zero FAIL; each WARN fixed or justified.
3. Screenshot critique (`references/critique.md`) at 1440/768/390, fix top 3, up to 3 rounds.
4. Smoke-check other routes (`/about`, `/placements/dental`, `/on-campus-drives`) still render with the new Navbar/Footer.

## 10. Amendments found during planning (2026-10-15) — these override §6–§8

1. **`placements.jkkn.ac.in` is unusable.** It answers every non-browser request with a Vercel bot
   challenge (`403`, `X-Vercel-Mitigated: challenge`), so `next/image` cannot fetch from it. Not allowlisted;
   none of its images (g7–g12, company-*.png, team-4.png) are used. Imagery = Supabase + `public/` only.
2. **`public/alumni/1–23.jpg` are real batch-2025 placement posters** (college, Learners, company, package),
   all 2000×1231. They become the page's proof:
   - §7 row 6 `DriveTable` → **`OffersTable`**: offers per company, summarised from the posters
     (Sakthi Auto Component 93 · ₹2.71 LPA; Pronoia Insurance Marketing 42 · ₹4.5 LPA; Foxconn 30 · ₹2.00 LPA;
     Omega Healthcare 14 · ₹2.70 LPA; 179 offers). Poster 20 is excluded (duplicate list with mismatched photos).
     Learners' names are not reproduced on the page.
   - §7 row 7 `GallerySheet` → **`PosterWall`**: the 22 valid posters in a CSS-columns sheet (4/3/2 columns),
     each linking to the full-size file. React Bits **Masonry is dropped** (it renders background-image divs
     without alt text or captions, and every poster has the same ratio).
3. **Hero photos:** top-right = Supabase campus gate `06032de1-cbb1-498b-bdc1-52e1ffd4c8e9.webp`
   (shutter reveal); bottom-left = `/placement-event.png` (offer-letter handover).
   **Closing strip:** Dental, Pharmacy, Arts and Science college photos. **No portrait** in the closing field.
4. **Footer** is not sticky (sticky-reveal would overlap content on the other routes, whose `<main>` has no
   background). It drops the external institutions list and the map iframe.
5. **College picker without JS:** the first college's details render on the server; all six placement pages
   stay reachable through the Navbar "Placements" menu.
6. Type steps finalised: display `clamp(48px, 9vw, 140px)` (hero name and ledger figures share it);
   title `clamp(36px, 4.6vw, 72px)`; lead `clamp(22px, 2.4vw, 30px)`; body 17px/16px; small 13px.
7. Yellow accent is used exactly twice: the hero accent tile and the last process line. Buttons are ink.

React Bits used: **SplitText, CountUp, LogoLoop, AnimatedContent, Magnet**.

## 11. Out of scope / follow-ups

- Recolouring the lime `--gold` token sitewide to the brand yellow.
- Restoring the mobile bottom nav and `.claude/skills` from `backup/local-work-2026-10-14`.
- Verified per-college placement figures (to be supplied by the Placement Cell).
- Real testimonials and Learning Facilitator profiles.
