# Portfolio Build Brief - Research Phase

Status: research only, nothing built yet. This is the reference doc to pick back up from when we start building. Stack already scaffolded: React 19 + Vite, plain CSS (no framework installed yet).

---

## 1. What the 14 references actually teach us

Went through all 14 sites (plus designup.io for landing-page feel). Patterns that repeat across nearly all of them:

**Navigation**
- 2-4 nav items, max. Almost nobody has a deep menu. Common set: Work, About, Writing/Notes, Resume (often just a linked PDF or Google Drive link, not a page).
- Single-page scroll with anchor links is more common than multi-page.
- Contact is a row of icons (email, LinkedIn, X/Twitter), not a "Contact" page.

**How case studies are shown**
- Home page equals teaser cards only: thumbnail, title, one to two sentence description, tag chips (skill area or platform: "AppSec", "Web", "Design System"). Depth is deferred to a sub-page or just not shown at all.
- The full case-study pages that do exist (Agrata Patel is the deepest example we looked at) follow: Overview, Role, Impact, Problem framed as "how might we", Research and Discovery, Strategy, Solution detail, Outcome and release.
- NDA handling is explicit and unapologetic, not hidden - one site literally says "This section is NDA protected, folks" and another says "Multiple NDA, reach out for more." Nobody pretends the work does not exist, they just gate the detail. This matters a lot for a cybersecurity portfolio.
- Metrics get foregrounded when they exist (revenue lift, screen time reduction, percent of admins in a given cohort) but nobody fabricates precision - vaguer wins like "live across 100+ merchants" are used just as often as hard numbers.

**Tone and voice, the important part for the sound-human requirement**
- First person, active voice: "I built," "I led," not "was responsible for."
- Plain verbs over adjectives: led, shaped, built, shipped, saved. Not spearheaded, orchestrated, leveraged.
- Confidence without hype - understatement reads as more senior, not less. The Chris Welch site is basically a resume in prose and it works because it does not oversell.
- Personality shows up as one or two specific, concrete details (a hobby, a location, a dry joke), not a whole personality section. One example describes laughter that "tends to echo." Another calls himself a "designer, DJ and a plant dad." One line, not a paragraph.
- Sentence length varies. Short declarative sentences mixed with one longer one. Nobody writes in uniform-length sentences, that is a tell.
- Company names are often embedded as inline hyperlinks mid-sentence rather than called out separately.

**Formatting devices seen repeatedly**
- Bold for feature or section names inline within a paragraph.
- Italic for company names or "how might we" framing.
- Tag chips for domain or skill, separate from the description sentence.
- Year stamps before project titles, like "2025, Reimagine credit cards, CRED."
- Horizontal rules as section breaks in longer narrative pages.

**What none of them do well**
- Not one reference site shows evidence of deliberate accessibility work or an actual dark and light toggle - most are Webflow or Framer sites optimized for visual flex, not AA compliance. That is a genuine point of differentiation for this build, not just a checkbox. Do not state it as a brag in the copy, since "built to WCAG AA" reads like a LinkedIn post - just make it true and let it show in how the site actually behaves for someone tabbing through it or bumping OS text size.

**designup.io, the landing page reference**
This one is a scroll-driven WebGL and Three.js "decade in review" experience, heavy 3D motion, not a text or content pattern. Useful only as a mood reference (immersive scroll, motion-forward hero), not something to imitate structurally for an accessible, minimalist personal site, since heavy WebGL and AA or reduced-motion compliance pull in opposite directions. Take the feeling, a considered editorial hero moment, not the technique.

---

## 2. Skills matrix, what actually goes into building this

**Content and narrative**
- Career-story editing: compressing 12 years into a scannable arc without flattening the cybersecurity specifics into generic UX-designer language.
- Writing in first person, active voice, plain verbs (see tone guide below).
- Deciding what is NDA-gated versus sharable, needs input from the user, not guesswork.

**UX and IA**
- Sitemap and content hierarchy (single page versus case-study sub-pages).
- Card and teaser pattern design for the work grid.
- Timeline and experience component design (reverse chronological, grouped by employer or BU).

**Visual and UI design**
- Type scale, spacing, and a restrained color system (per the minimalist ask, this argues for a small neutral palette plus one accent color, not a big brand palette).
- Designing both a light and dark version of every component, not just inverting colors - dark themes need re-checked contrast, not a filter.

**Front-end build**
- React component structure (Nav, Hero, ProjectCard, Timeline, Footer, ThemeToggle).
- CSS custom properties for color tokens for theming instead of a UI framework, keeps bundle minimal and matches the minimalist brief.
- Theme persistence in local storage plus a toggle control.

**Accessibility engineering**
- Semantic HTML and landmarks, heading hierarchy.
- Keyboard operability and visible focus states for every interactive element (cards, toggle, links).
- Contrast checking in both themes independently.
- Respecting the prefers-reduced-motion media query.
- eslint-plugin-jsx-a11y plus axe and Lighthouse checks as part of the workflow, not an afterthought at the end.

**Tooling already in place**
- Vite, React 19, ESLint. Will need to decide between CSS Modules and plain global CSS with custom properties (recommend the latter for this scope, simpler, no build complexity, easy to theme).

---

## 3. Theme strategy: light default, dark optional

- Light is the default regardless of OS color-scheme preference, per the explicit ask. Do not auto-switch to dark just because the OS is set that way, only respect a stored user choice after they have toggled it once.
- Implementation: CSS custom properties on the root element for light values, an override block on a data-theme dark attribute (or a theme-dark class on the html element), toggled via a real button element (not a styled div), state persisted to local storage.
- Both palettes need their own independent AA contrast pass, do not just invert light values and assume it is fine. Dark themes commonly fail AA on muted or secondary text and on accent colors that look fine on white but drop below 4.5 to 1 on dark backgrounds.
- Respect prefers-reduced-motion for the toggle transition, no forced cross-fade animation for users who have opted out of motion.

---

## 4. WCAG 2.2 AA checklist, mapped to this specific site

| Area | Requirement | Where it applies here |
|---|---|---|
| Contrast | Text 4.5 to 1, large text and UI components 3 to 1 (criteria 1.4.3, 1.4.11) | Body copy, tag chips, nav links, theme toggle icon, checked in both themes |
| Focus | Visible focus indicator on every interactive element (criteria 2.4.7, 2.4.11) | Nav links, project cards, theme toggle, footer social icons, do not strip the outline without replacing it |
| Keyboard | Everything operable without a mouse (criterion 2.1.1) | Card grid, theme toggle, any modal or case-study overlay |
| Structure | Landmarks plus one logical heading order, no skipped levels (criterion 1.3.1) | Header, nav, main, footer elements, one H1 per page, case studies as H2 or H3 under that |
| Skip link | Skip to content link before nav (criterion 2.4.1) | Needed if nav grows beyond a couple of items |
| Images | Meaningful alt text on project thumbnails, decorative images marked with an empty alt attribute (criterion 1.1.1) | Project and case-study imagery |
| Motion | Respect prefers-reduced-motion, no autoplay carousels without a pause control (criterion 2.2.2) | Hero animation, theme toggle transition, any scroll-triggered reveal |
| Target size | Minimum 24 by 24 CSS pixels for interactive targets (criterion 2.5.8, new in 2.2) | Theme toggle, nav links, social icons, easy to violate with small icon-only buttons |
| Reflow | No horizontal scroll at 400 percent zoom or 320px width (criterion 1.4.10) | Card grid, timeline component |
| Text spacing | Layout survives user-adjusted line height and letter spacing (criterion 1.4.12) | Body copy blocks |
| Link purpose | Link text makes sense out of context, not a bare "click here" (criterion 2.4.4) | Project card calls to action, footer links |
| Forms, if a contact form gets added | Labels tied to inputs, clear error identification (criteria 1.3.1, 3.3.1, 4.1.2) | Only relevant if a form gets added instead of just a mailto link |

Test plan for when we get to build: eslint-plugin-jsx-a11y during development, an axe DevTools and Lighthouse accessibility audit before calling any page done, one manual keyboard-only pass, one pass at 400 percent browser zoom.

---

## 5. Tone guide, writing so it does not read AI-generated

**Avoid**
- Em dashes used as a filler connector between clauses (fine occasionally for a real interruption, not as a recurring tic).
- Buzzwords: leverage, seamless, robust, cutting-edge, passionate about, holistic, synergy, elevate, unlock, dive deep, delve.
- Rule-of-three lists as a crutch, like "clarity, consistency, and craft" - real writing does not always come in threes.
- Rhetorical-question hooks, like "Ever wondered how..."
- Stacked transition words: Moreover, Furthermore, Additionally in sequence.
- Every sentence the same length and shape, the biggest tell of all.
- Emoji as decoration (a couple of the references use one emoji as a personal-brand device, that is a deliberate choice, not a habit, and only works if it stays consistent and sparse).
- Title-casing body sentences or headers that are not titles.

---

**Do**
- First person, active voice, describing what was actually built rather than a passive description of what got designed by someone.
- Specific nouns over adjectives: name the tool, the team, the business unit, the actual metric, not "an innovative solution."
- Let sentences vary, a short one, then a longer one that carries a bit more detail, then short again.
- Understate results rather than inflate them. Cutting provisioning time from days to hours beats claiming to have revolutionized the onboarding experience.
- One concrete personal detail near the closing, not a whole personality section.
- Contractions where they would naturally occur in speech.

---

## 6. Career narrative, structuring the actual bio

Facts to work with: 12 plus years total. First 4 years in B2B products at WinWire. Last 8 plus years in a cybersecurity business unit across AppSec, SecOps, and IAM verticals, including building design systems from scratch. Last 3 years combining an individual-contributor design role with being the UX coordinator for the whole cybersecurity business unit.

Proposed arc, reverse chronological, matching what nearly every reference does:

1. Intro and hero - one or two sentences: current role, current focus, no jargon stacking. A plain statement of what the work actually involves day to day, not a title-and-adjective list.
2. The "now" block - the IC plus BU UX coordinator split is the actual differentiator versus almost every reference site, since those are single-track IC portfolios. Worth its own short paragraph: what the coordinator half of the role actually means in practice, standards, mentoring, cross-team consistency, versus the hands-on casework of the IC half. This is more interesting than most portfolios in this list and should not get buried.
3. Selected work - 3 to 5 case studies pulled from AppSec, SecOps, and IAM, teaser-card pattern on the home page (image, one-line description, tag chips for AppSec, SecOps, IAM, Design Systems), NDA-gated where needed, following the convention of saying so plainly rather than omitting the project.
4. The design system project - treated as its own featured case study, a zero-to-one story, since building one from scratch across a whole business unit is a meaningful, differentiated story on its own, not a footnote in a tags list.
5. Earlier career at WinWire, the B2B chapter - shorter treatment, framed as foundation rather than downplayed, where the fundamentals came from, matching how a couple of the references treat early roles briefly but not dismissively.
6. About and personal close - short, one real detail, matching the pattern several references rely on. Needs actual input from the user, see open questions below.

---

## 7. Proposed sitemap

- Home: hero and intro, then the now block, then a selected-work grid of 3 to 5 cards, then the design system feature, then an experience timeline from WinWire through the cybersecurity BU in reverse chronological order, then the about and personal close, then a footer with contact icons.
- Case study sub-pages, one per featured project, built only for projects that can show real detail: Overview, Role, Problem, Process, Solution, Outcome, with an NDA note where it applies.
- Resume as a linked file, not a page.
- No separate Contact page, icons live in the footer or header, matching every reference.

---

## 8. Open questions, need answers before build starts

1. The term "eigensystems" - assuming this means design systems, likely a typo or autocorrect. Confirm before this becomes a whole case-study section title.
2. Which AppSec, SecOps, and IAM projects can be shown with real detail versus need the NDA-gated treatment?
3. Any real metrics or impact numbers allowed to share externally, time saved, adoption numbers, scale of the design system rollout?
4. One or two real personal details for the closing section, the human-detail pattern every reference relies on - hobbies, location, whatever is actually true.
5. Preferred name and title as it should appear on the site, and whether a headshot or photo is available.
6. Resume file format and location, and preferred contact method, email, LinkedIn, or both.
7. Any existing brand color preference beyond light default with dark optional, or should the accent color be proposed fresh (recommendation: one neutral plus one accent, nothing louder, matching the minimalist ask).

---

## 9. Build-readiness notes, for when we actually start

- Keep the CSS approach plain: a global stylesheet with custom properties for tokens, background color, text color, accent color, and so on, no framework, matching the minimalist scope and the existing scaffold.
- Component list to build first: ThemeToggle, Nav, Hero, ProjectCard, CaseStudyLayout, Timeline, Footer.
- Wire up eslint-plugin-jsx-a11y early, not as a late pass.
- Do not start writing final copy until the open questions above are answered, otherwise the draft will be guessing at NDA boundaries and metrics, which is exactly the kind of thing that reads as generic or AI-filled-in when guessed wrong.
