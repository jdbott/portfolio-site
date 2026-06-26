# Portfolio Site AI Handoff

This file is a copy/pasteable briefing for a new AI agent chat working on Jason Bottino’s Astro portfolio site.

## Project location and purpose

- Local project path: `/Users/jasonbottino/Desktop/portfolio-site`
- Framework: Astro static site.
- Purpose: personal portfolio for Jason Bottino, intended for eventual deployment on a newly purchased domain.
- Tone/design: dark, cinematic, high-polish portfolio with red accent, big typography, scroll reveals, image-forward storytelling, and concise but impressive content.

## How to run and verify

From the project root:

```bash
npm run dev -- --host 127.0.0.1
```

Then open the local URL Astro prints, usually:

```text
http://127.0.0.1:4321/
```

For production verification:

```bash
npm run build
git diff --check
```

Notes:

- In the Codex sandbox, `npm run dev -- --host 127.0.0.1` may need approval/escalation because the dev server binds a port.
- `npm run build` has been passing.
- The generated `dist/` folder is build output, not source content.
- Browser favicons are sticky/cached; the code currently points to `/favicon.svg?v=4` first, with `.ico` fallbacks.

## Current high-level site structure

Pages are generated from `src/data/areas.ts` through the dynamic route:

- `src/pages/index.astro` renders the homepage.
- `src/pages/[slug]/index.astro` maps every area object in `areas.ts` to `/{slug}/`.
- `src/layouts/BaseLayout.astro` provides global head/nav/footer.
- `src/layouts/AreaLayout.astro` decides how each area page renders.

Current pages:

- `/` Home
- `/robotics/`
- `/service/`
- `/academics/`
- `/projects/`
- `/pursuits/`
- `/about/`

Navigation is generated from `sortedAreas` in `src/data/areas.ts`, so adding/removing/reordering area objects changes the nav automatically.

## Important source files

- `src/data/areas.ts`
  - Central content model for Robotics, Service, Academics, Projects, Pursuits, About.
  - Controls nav label, slug, order, summaries, stats, timelines, cards, features, pursuits, and quote data.

- `src/layouts/BaseLayout.astro`
  - Shared HTML head, favicon tags, nav, footer.
  - Favicon tags currently:
    - `/favicon.svg?v=4`
    - `/favicon.ico?v=4` fallbacks

- `src/layouts/AreaLayout.astro`
  - Shared area-page template.
  - Special-cases:
    - `service` uses `StatsBand` + `ServiceShowcase`.
    - `pursuits` uses `PursuitsShowcase`.
    - `projects` uses a simple “Project details forthcoming” placeholder and does not show the generic hero.
    - `about` uses a simple About Me placeholder with real portrait image and does not show the generic hero.
  - It only renders `Gallery` when `galleryCount > 0`.

- `src/components/ServiceShowcase.astro`
  - Custom Service & Advocacy page.
  - Includes advocacy, mentorship, fundraising, science fair, outreach, Camp Invention, food access, and final scroll-focus quote.

- `src/components/PursuitsShowcase.astro`
  - Custom Pursuits page.
  - Currently displays Photography carousel, Bonsai image, Track & Field image, and Fitness placeholder.
  - Photography carousel speed is controlled by `PHOTO_INTERVAL_MS`.

- `src/components/StatsBand.astro`
  - Reusable stat bar.
  - Has `compact` and `spacedTail` props. Service uses `spacedTail` for wider spacing.

- `src/components/Hero.astro`
  - Homepage hero and first-load cycling image animation.

- `src/components/AreaHighlights.astro`
  - Homepage section/highlights.

- `src/styles/global.css`
  - Design tokens, colors, fonts, spacing, base reveal animation.

## Assets currently in use

Hero carousel:

- `src/assets/hero-carousel/catalyst.jpeg`
- `src/assets/hero-carousel/student.jpeg`
- `src/assets/hero-carousel/roboticist.jpeg`
- `src/assets/hero-carousel/policy-advocate.jpeg`
- `src/assets/hero-carousel/builder.png`
- `src/assets/hero-carousel/volunteer.jpeg`

Service page:

- `src/assets/proclaimation.jpeg` — note spelling is currently `proclaimation`, not `proclamation`.
- `src/assets/hero-carousel/policy-advocate.jpeg`
- `src/assets/mediaadvocacy.jpeg`
- `src/assets/rickcohen.jpeg`
- `src/assets/robotics.jpeg`
- `src/assets/campinvention.jpeg`

Pursuits page:

- `src/assets/pursuits/photography.jpg`
- `src/assets/pursuits/photography2.jpg`
- `src/assets/pursuits/photography3.jpg`
- `src/assets/pursuits/bonsai.jpg`
- `src/assets/track.jpeg`
- Fitness is still a placeholder; `src/assets/fitness.jpeg` exists, but the current Pursuits component is not wired to use it unless added to `mediaByTitle`.

About page:

- `src/assets/jasonaboutme.jpg`

Robot reveal:

- `src/assets/robot-reveal/robot-photo.jpg`
- `src/assets/robot-reveal/robot-wireframe.png`
- `public/robot-reveal/robot-photo2.jpg`

## Current content state by page

### Home

Mostly considered good by Jason.

Important previous work:

- The first-load hero carousel uses the role images listed above.
- Images were adjusted to fit better and not overflow off the right edge.
- User may still ask for further crop/position tuning.

### Academics

Considered mostly finalized.

Current main content:

- Eyebrow: `Current Year · Incoming Junior`
- Intro philosophy: academics as durable transferable skills, meaningful goals, applying engineering/chemistry/history, exploring broadly then specializing.
- Stats:
  - `18+` AP, dual-enrollment & honors courses
  - `4.0` unweighted cumulative GPA
  - `2` academic distinctions
  - `7` completed advanced STEM courses
- The 7 completed advanced STEM courses counted are:
  - AP Chemistry
  - Foundations of Engineering
  - Accelerated Math 3
  - Accelerated Math 2
  - Foundations of Computer Science
  - Honors Physics
  - Honors Chemistry
- Timeline:
  - Freshman, 2024–2025
  - Sophomore, 2025–2026
  - Incoming Junior, 2026–2027
  - Senior, 2027–2028 planned
- Senior year copy says he plans to take the most advanced STEM electives his school offers, such as multivariable calculus, linear algebra, AP Physics C, and more.
- Academic interests & what’s next:
  - Academics drive work outside class.
  - Learning MATLAB.
  - Exploring opportunities to work with college professors/research.
  - Building interests in mechanical engineering, electrical engineering, and computer science.
- Honors:
  - Highest Honors: Academy for Science and Design; awarded every semester.
  - National Junior Honor Society: member for two years during eighth and ninth grade.
- Academics gallery was intentionally removed.

### Pursuits

Considered mostly solid, pending more images later.

Themes:

- Open-ended, self-guided, long-term pursuits.
- Creativity and discipline.
- Mental/physical well-being.
- Effort as driver of achievement.
- Photography and bonsai reveal introspective/creative side; track and fitness show discipline.

Current sections:

- Photography
  - Uses three-image carousel.
  - User likes sheen/light animation.
  - Lightroom/camera gear details were removed from the visible copy by request.
- Bonsai
  - Real image wired.
- Track & Field
  - Real `src/assets/track.jpeg` wired.
- Fitness
  - Still placeholder image.

### Service & Advocacy

One of the strongest/custom pages. Current design is custom in `ServiceShowcase.astro`.

Stats:

- `415` tracked volunteer hours, Summer 2024–2026
- `$24K+` raised for STEM programs
- `5,000+` people reached in person
- `10+` recurring outreach events organized

Core philosophy:

- Jason works hard individually, but individual impact has a ceiling.
- His greatest impact comes from multiplying opportunity: helping others gain access, confidence, and ability to contribute.
- STEM access matters because it changed his life and can give young people technical creativity, confidence, future job/college readiness, and ways to improve the world.

Major service/advocacy elements:

- Advocacy:
  - Federal support / Representative Maggie Goodlander / H.Res.147.
  - New Hampshire FIRST Robotics Awareness Month proclamations in 2025 and 2026.
  - Media advocacy through WMUR and 7News Boston.
  - Industry engagement with Symbotic founder and CEO Rick Cohen.
- Mentorship:
  - 45 local FTC students.
  - 5 teams supported in person.
  - Virtual support in Vietnam, Texas, Massachusetts.
  - Tesseract Talks: 3 episodes, mechanical design topics, thousands of viewers.
- Fundraising:
  - About $14K for Team Tesseract, including $9K+ most recent season.
  - $10K+ for Elementary Science Fair.
  - Combined `$24K+`.
- Hollis-Brookline Elementary Science Fair:
  - Rebuilt/revived after pandemic.
  - Four completed fairs since 2022.
  - About 350 student presenters.
  - Four elementary schools.
  - 60–90 presenters each year.
  - Jason selects theme, secures sponsorships, manages registration, communications, volunteers, demos, logistics, MCing.
  - Themes: Chain Reactions, Magnetism, MythBusters, Environment.
  - Sponsorships fund supplies like model rockets, Osmo coding tools, LEGO Education kits, weather station, drone kits.
  - Sustainability plan: document process and hand off to another student organizer.
- Community outreach:
  - Organized by Jason:
    - Nashua Public Library Summer Reading Kickoff
    - YMCA of Greater Nashua CAD & 3D-printing workshops
    - Hollis Social Library summer programs
    - Nashua and Merrimack Y Academy STEM stations
    - Clark-Wilkins and Mont Vernon afterschool programs
    - Nashua Goes Back to School
  - Supported as volunteer:
    - Brian S. McCarthy Family STEM Day
    - Barnes & Noble Nashua story time and robot demo
    - NorthSouth Foundation Bees
    - Nashua Public Library CAD & 3D-printing workshops
    - Thunder Over New Hampshire Air Show
- Camp Invention:
  - 155 hours across three summers.
  - Merrimack and Hollis locations.
  - Groups of 20–30 students in grades 1–6.
- Food access:
  - End 68 Hours of Hunger Nashua.
  - Hillsborough County Gleaners.
  - Science Fair food drive when SNAP benefits were delayed in 2025.
- Final quote:
  - Has a scroll-focused blur/focus effect line by line.
  - User requested continuous text, focus band about 1.5 lines thick with feathered edge.

### Projects

Intentionally a placeholder for now.

Current behavior:

- Does not show the normal area hero to avoid duplicate “Projects” header.
- Shows a clean “Under construction” / “Project details forthcoming” card.
- Old fake stats/timeline/cards/gallery/quote were removed.

### About Me

Placeholder page with real image.

Current behavior:

- Does not show the normal area hero to avoid duplicate “About Me” header.
- Left side has placeholder text:
  - `About Me`
  - `Personal introduction forthcoming.`
  - paragraph instructing where future copy goes.
- Right side uses real portrait:
  - `src/assets/jasonaboutme.jpg`
- Recent fix:
  - Removed old decorative placeholder background behind the portrait.
  - Portrait frame now has no padding, plain fallback background, rounded corners, and subtle shadow.

### Robotics

Still mostly placeholder and planned for later.

Current content likely still includes old placeholders in `areas.ts`:

- Robotics summary
- Stats
- Timeline
- Cards
- Gallery
- Quote

Jason said Robotics will be worked on later.

## Design and implementation lessons learned

1. Keep content data-driven where possible.
   - Most page content belongs in `src/data/areas.ts`.
   - Custom pages are okay when the structure is significantly different, as with Service and Pursuits.

2. Avoid rendering empty placeholders accidentally.
   - `AreaLayout.astro` now guards `Gallery` with `area.galleryCount > 0`.
   - If stats/cards/timeline are empty, make sure the layout branch does not render empty sections.

3. Projects and About are intentionally special/simple.
   - They should not render the shared `area-hero`; otherwise the page duplicates the heading/description.

4. Use Astro’s `Image` component for real images.
   - It optimizes large files into responsive WebP outputs.
   - Especially important for `jasonaboutme.jpg`, whose original is large.

5. Favicons can appear inconsistent because of browser cache.
   - Current head tags prioritize the SVG favicon.
   - If favicon seems missing, verify source first, then hard refresh/private window.

6. Protect user changes/artifacts.
   - Existing git worktree has many modified files from this project phase.
   - Do not run destructive git commands.
   - There are untracked screenshots and `.DS_Store` files that likely should not be committed.

7. Jason prefers direct implementation with concise updates.
   - Ask questions only when needed.
   - If requirements are clear, make the change and build.

## Current known gotchas

- `src/assets/proclaimation.jpeg` is misspelled; imports use that spelling. Don’t rename casually unless updating imports.
- `src/assets/pursuits/.DS_Store` may exist and should not be committed.
- `public/.DS_Store` may exist and should not be committed.
- `screenshots/academics-desktop.png` and `screenshots/academics-mobile.png` may exist as generated artifacts and likely should not be committed.
- GitHub push was previously blocked because `gh auth status` reported invalid auth. User needs to run:

```bash
gh auth login -h github.com
```

before a push/PR workflow can succeed.

## Git status context

At the time this handoff was created, the project had many local modifications across source files and new assets. Treat all changes as user-owned. Do not reset or discard anything.

If asked to push:

1. Run:

```bash
git status -sb
gh auth status
npm run build
git diff --check
```

2. Stage only intentional source/assets, likely excluding:

- `screenshots/`
- `.DS_Store`
- `dist/`

3. Commit and push only after auth works.

## Likely next tasks

- Finalize Robotics page content.
- Add Fitness image to Pursuits.
- Replace About Me placeholder paragraph with real personal intro.
- Add/change Service images as Jason provides them.
- Deploy to domain after GitHub/hosting setup is ready.

## User style/preferences

- Jason gives detailed spoken-style instructions; preserve his intent but polish wording for the site.
- He likes pages that feel dynamic and premium, but not too long.
- He prefers strong, concrete presentation of impact for college-facing portfolio use.
- He often wants to know where to edit things himself; include file paths and simple guidance.
- He cares about image crop/position, overflow, spacing, and whether users can tell there is more content to scroll.

