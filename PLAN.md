# Jason Bottino — Personal Portfolio Site · Master Plan

> Living document. We execute **one phase (or sub-checkpoint) at a time**, review, then proceed.
> Nothing here is locked except items marked ✅ **DECIDED**. Open items live in "Open Questions."

---

## 0. Project Snapshot

| | |
|---|---|
| **Owner** | Jason Bottino (high-school student) |
| **Purpose** | A "this is me" presence — bold, unapologetic, showcase-driven. Secondary viewers: college admissions, potential clients. |
| **Desired impression** | High achiever across *many* domains; excellence that lifts others. |
| **Location** | `~/Desktop/portfolio-site` (own git repo, separate from robotics code) |
| **Hosting** | GitHub Pages (free) |
| **Domain** | `jasonbottino.com` (to be purchased) |

### ✅ DECIDED — Design DNA
- **Visual style:** Minimal & refined — near-black canvas, restrained type, quietly premium (Apple / Linear school)
- **Accent color:** Primarily **red**, with a small amount of **gold** as a secondary accent. Occasional full-spectrum color moments reserved for special transitions/animations (e.g. a "colorful burst" interaction).
- **Motion:** Rich & cinematic — animated hero, scroll-driven storytelling, parallax; "bring color out of blackness." Must stay fast + respect `prefers-reduced-motion`.
- **Stack:** Astro static site → GitHub Pages. Content-driven (each area = an editable data/content file) so adding a tab later is trivial.
- **Architecture:** One large central landing page (brief highlight reel) → clicks into deeper sub-pages per area.
- **Fonts:** Premium pairing — **Fraunces** (display serif, for headlines/hero — elegant, high-achiever feel) + **Inter** (clean sans for body/UI). Both self-hostable via Google Fonts/Fontsource.
- **Monogram:** Elegant "JB" mark, built as an editable SVG component (used in nav + favicon).
- **Imagery:** Image-forward where it earns its place — fair amount of real photography/robotics imagery throughout, not just supporting role.

### ✅ DECIDED — Information Architecture (top-level tabs)
Flagship-plus-grouping model (avoids sparse single-activity tabs):

| Tab | Holds |
|---|---|
| **Home** | Cinematic highlight reel of everything; links into each area |
| **Robotics** | FTC — technical, outreach, fundraising, leadership |
| **Service & Advocacy** | Volunteering, STEM-access advocacy, fundraising, community |
| **Academics** | Coursework, rigor, awards |
| **Projects** | Coding projects, AI development & automation, business ventures |
| **Pursuits** | Photography, bonsai, music, track & field, fitness — "spikes" as a curated card grid |
| **Contact** | Email + socials, footer-integrated (no dedicated tab) |

*Tagline/title still being chosen — see Open Questions.*

---

## Guiding Principles (apply to every phase)
1. **Content is placeholder-first.** Build structure + design now; real copy/photos go in a dedicated later phase.
2. **Data-driven.** Areas are defined in editable files (content collections / data files), never hard-coded into layouts.
3. **Performance is a feature.** Cinematic ≠ slow. Lazy-load media, prefer CSS/transform animations, ship minimal JS.
4. **Accessible by default.** Reduced-motion fallbacks, semantic HTML, alt text, keyboard nav, sufficient contrast.
5. **SEO baked in, not bolted on.** Meta/OG/structured data from the start; polished in a dedicated phase.
6. **Small checkpoints.** Each phase ends in something reviewable. No giant unreviewed dumps.

---

## PHASES

### Phase 0 — Foundations & Tooling  *(setup)*
**Goal:** Empty-but-running Astro project with design tokens, no real content.
- [ ] Confirm Node toolchain available (Node installed via Homebrew — ✅ done)
- [ ] Scaffold Astro project structure in repo
- [ ] Establish design-token system (CSS variables): color (near-black scale + gold accent), type scale, spacing, motion timings
- [ ] Base layout shell + global styles + font choice
- [ ] Dev server runs; a blank themed page renders
- **Checkpoint:** `npm run dev` shows a dark, gold-accented blank canvas with chosen fonts.

### Phase 1 — Design Language Proof (Hero)
**Goal:** Nail the *feel* before building breadth.
- [ ] Build the Home hero: name, animated descriptor, tagline, cinematic "color-from-black" entrance
- [ ] One signature scroll-reveal interaction as a motion benchmark
- [ ] Reduced-motion fallback verified
- **Checkpoint:** Jason reviews the hero and signs off on the aesthetic/motion direction. *This gates everything visual downstream.*

### Phase 2 — Content Model & Navigation ✅ DONE
**Goal:** The skeleton that makes the site extensible.
- [x] Define data schema for an "Area" (`src/data/areas.ts`: slug, title, navLabel, summary, order)
- [x] Build top nav (`Nav.astro`) — fixed bar, fades in after the hero, monogram + links, active-state underline, full-screen overlay menu on mobile
- [x] Routing for each sub-page generated from data (`src/pages/[slug]/index.astro` via `getStaticPaths`)
- [x] Footer (`Footer.astro`) — monogram, nav links, contact email, GitHub/Instagram)
- **Checkpoint:** All tabs navigable; `/robotics/`, `/service/`, `/academics/`, `/projects/`, `/pursuits/` render from `AreaLayout` with placeholder content. Adding a tab = adding one object to `areas.ts`.

### Phase 3 — Home Landing Page (Highlight Reel)
**Goal:** The central page that ties it together.
- [ ] **Signature scroll feature:** large scroll-driven 3D spin/morph of a robot — wireframe/render rotates into an actual photo as the user scrolls into the Robotics section. Reference: Wix Studio tutorial ["Build along to create a scroll effect with spinning and changing elements"](https://www.wix.com/studio/academy/tutorials/build-along-to-create-a-scroll-effect-with-spinning-and-changing-elements) — scroll-linked rotation + crossfade between a wireframe/CAD-style render and a real photo. **Needs assets from Jason:** a wireframe/CAD render (or render sequence) of a robot + a matching high-quality photo, ideally same angle/framing. Flagging now so assets can be gathered ahead of Phase 3/5.
- [ ] Section-per-area highlight blocks with scroll-driven reveals/parallax
- [ ] "By the numbers" / stats band (placeholder figures)
- [ ] Clear CTAs into each sub-page
- **Checkpoint:** Home tells the full story at a glance and routes deeper.

### Phase 4 — Sub-Page Template & Components
**Goal:** A reusable, rich detail-page system.
- [ ] Area sub-page template (hero + alternating content sections + media galleries + timeline/achievement list)
- [ ] Reusable components: stat, achievement card, image gallery/lightbox, timeline, quote, pursuit card
- [ ] Apply template to all areas with placeholders
- **Checkpoint:** Every tab has a polished, consistent detail page (placeholder content).

### Phase 5 — Content Population *(iterative, per-area)*
**Goal:** Replace placeholders with real material — done area-by-area.
- [ ] Asset intake (photos, logos, videos, links) + optimization pipeline
- [ ] Robotics → Service & Advocacy → Pursuits → Projects → Academics (each its own mini-checkpoint)
- [ ] Decide resume handling (link / download / omit)
- **Checkpoint per area:** Real content live and reviewed.

### Phase 6 — SEO, Performance & Polish
- [ ] Meta tags, Open Graph/Twitter cards, favicon, social preview image
- [ ] Structured data (JSON-LD Person schema), sitemap.xml, robots.txt
- [ ] Lighthouse pass (performance/accessibility/SEO/best-practices)
- [ ] Cross-browser + responsive QA, reduced-motion + keyboard audit
- **Checkpoint:** Strong Lighthouse scores; site feels finished.

### Phase 7 — Deploy & Domain
- [ ] GitHub repo + GitHub Pages via Actions
- [ ] Connect `jasonbottino.com` (DNS / CNAME), HTTPS
- [ ] Verify live site + search-console submission
- **Checkpoint:** Live at the real domain.

### Phase 8 — Post-Launch (optional / future)
- [ ] Add-a-tab playbook doc (so future-you or an AI agent can extend cleanly)
- [ ] Possible: blog/now page, analytics, dark/light toggle, CMS layer

---

## Tagline
**Placeholder for now** — hero will reserve a clear slot for name + rotating descriptor (Student · Roboticist · Builder · Advocate) + tagline line, using lorem/placeholder copy until a final tagline is chosen. Revisit during Phase 5 (content) or whenever inspiration strikes.

---

## Resolved Decisions (from second round)
- **Name display:** Jason Bottino
- **Pursuits cards:** Photography, bonsai, music, track & field, fitness — confirmed as-is
- **Projects tab:** includes coding projects, AI development & automation, and business ventures (merged; revisit splitting only if it gets crowded)
- **Resume:** left off entirely
- **Contact email:** jason.bottino@asdnh.org
- **Socials shown inline:** GitHub, Instagram
- **Fonts:** Fraunces (display/headlines) + Inter (body/UI)
- **Monogram:** elegant editable "JB" SVG mark

---

## Change Log
- *(init)* Plan created from intake brain dump. Design DNA + IA decided. Node installed. Awaiting Phase 0 go-ahead.
- *(round 2)* Accent color changed to red-primary/gold-secondary with reserved colorful special-moment palette. Tagline deferred to placeholder. Fonts (Fraunces + Inter), monogram, Pursuits, Projects scope, contact, and resume decisions locked. Proceeding to Phase 0.
