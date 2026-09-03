---
name: winwire-early-career-projects
description: "Source of truth for the WinWire Technologies India Pvt. Ltd. early-career section of the portfolio (Mar 2014 – Aug 2018, UX Designer) — NOT a deep case study like the OpenText projects. USE WHEN: building, editing, or reviewing the WinWire / early-career section of the site; writing its copy; deciding the onsite-offshore process narrative; recalling the seven client projects (Tesla supplier portal, SanDisk support portal, VISA InSite portal, Brocade Communications intranet, Lumileds The Hub intranet, MemorialCare InSite intranet, L'Oréal Idea Space) and their assumed screens/summaries; wiring the closing 'View all projects' link to the Behance profile. DO NOT present the assumed problem summaries, screen lists, or process details in this file as verified client facts — they are reasoned reconstructions from the portal type, sector, and the user's own recollection of the WinWire workflow, clearly flagged as such, and must be confirmed or corrected against real project detail/screenshots before publishing anything that reads as a hard claim."
---

# WinWire Technologies — Early Career Projects — Source of Truth

> Status: **research only, nothing built.** Per explicit instruction, this file documents the process and per-client narrative so it's ready to build from later. No screenshots exist yet in `public/projects/` for any of these seven clients — this file uses placeholder screen lists per project until real assets are supplied.

## How to use this file

- This is **not** a full case-study treatment like the IGA/SAST/Nautilus/Fortify pages. The user explicitly does not want a separate deep case study per WinWire project — treat this as **one compact "Early Career" section** with a short subsection per client: a one-line project summary, a role/scope note, and 2–4 representative screen thumbnails per client.
- Everything under **§2 (client projects)** is a *reasoned assumption*, built from the portal type + sector + what's publicly plausible for that company at that time (roughly 2014–2018), not verified fact. Confirm against the user's real deliverables/screenshots before publishing copy that reads as a factual claim (see the flags on each entry).
- §1 (role & process) is closer to verified — it restates what the user described directly, organized and contextualized against how offshore/onsite IT-services design teams actually operated in that era (research in §3).

---

## 0. Snapshot

- **Company:** WinWire Technologies India Pvt. Ltd.
- **Role:** UX Designer
- **Dates:** Mar 2014 – Aug 2018 (per `docs/content.md`'s resume extraction — this is the user's first UX role)
- **Context:** WinWire is a Microsoft-focused IT services / product engineering firm running the classic **onsite-offshore delivery model** — a US-based "Onsite Coordinator" (business analyst / account lead sitting with the client) relays requirements back to an offshore design-and-dev team in India, then carries design concepts back to the client for review. This is the model the user described, and it matches how nearly every mid-size Indian IT-services firm operated client-facing UX work in this period (see §3).
- **Portfolio evidence:** public early-career work lives on Behance — https://www.behance.net/Vijaykumarpeddamuthu (profile title there: "Lead User Experience Designer, Micro Focus, Bangalore, India" — current title as of last Behance update, projects underneath are the WinWire-era work). Confirmed live projects visible on that profile include **SanDisk Support Center App**, and two other portals sharing the **"InSite"** naming pattern — **Septodont InSite** and **Phibro InSite** — which strongly suggests "InSite" was a **WinWire house/product template for pharma, healthcare, and B2B intranet portals**, re-skinned per client (branding, content, IA tweaks) rather than a one-off build each time. This is a useful, real detail: it explains why VISA and MemorialCare both carry the "InSite" name in the user's list, and gives an authentic reason the delivery model could be fast across many concurrent clients.
- **Also visible on Behance (same era, adjacent work, not in the user's "top 7" list but corroborating the pattern):** Calix Employee Portal (another intranet), plus a handful of non-WinWire freelance-looking pieces (Wesucceed, Independence Realty Trust, MRWPCA, RAIT, Allwest Financial) — these read as either WinWire client work under different naming or personal/freelance side projects; do not fold them into the "top 7" client list without the user confirming which bucket they belong to.

---

## 1. Role & process (as described by the user, organized into a build-ready narrative)

This is the process story for the site — written in first person, matching the tone guide in `docs/portfolio-brief.md` (plain verbs, no buzzwords, active voice). Structure it as a short "how I worked" narrative before the client grid, not a bulleted SOP dump.

**The workflow, in order:**

1. **Requirements via the Onsite Coordinator.** Requirements didn't come directly from the client — they came through an onsite coordinator (a WinWire business analyst or account lead physically sitting with the customer in the US), who gathered the ask and relayed it back to the offshore design team in India. This is the standard onsite-offshore split (see §3) — the coordinator owns the client relationship and the day-to-day back-and-forth; the offshore designer owns the craft.
2. **Lightweight discovery on the customer.** Before sketching anything, did basic research on the customer itself — what the company does, who'd actually use the portal, what tone/expectations their brand implied. Not formal user research (no budget or access for that at this tier of engagement) — more a grounding pass so the wireframes weren't generic.
3. **Early wireframes as a discussion tool.** Low-fidelity wireframes were the first tangible artifact, used to pressure-test ideas with the onsite coordinator before anyone senior saw them.
4. **Senior review loop.** Wireframes then went through a review with senior UX people at WinWire — a real critique loop, not a rubber stamp, and where most of the early-career learning happened.
5. **Visual design + flows, once concept was agreed.** Once the onsite coordinator signed off on the wireframe direction, moved into full visual mockups plus the user flows needed to hand the concept to development cleanly.
6. **Static front-end handoff (HTML/CSS/JS), accessibility built in.** Design didn't stop at a flat mockup — built the static pages themselves in HTML, CSS, and JavaScript, with accessibility already addressed (semantic structure, keyboard/contrast basics) before handing off to the dev team, who then wired the static pages into the real application/backend. This is a specific and differentiating detail — it means implementation fidelity concerns started in this job, years before it became a stated value at OpenText (see `docs/content.md` §5's "a design that doesn't survive handoff isn't finished").
7. **Fidelity-checking during development.** During the build, the job shifted to verifying the dev team was implementing the proposed design accurately — not just handing off and moving on.
8. **Multiple concurrent projects, tight deadlines.** Routinely staffed across more than one active project at a time, each with its own deadline — the job was protecting design quality under that pressure, not just meeting the date.
9. **Pre-sales POC work.** Some projects started as proof-of-concept designs built to help WinWire pitch prospective customers — work done speculatively, before a contract existed, that in some cases converted into real signed engagements. This is a real and common practice at IT-services firms (see §3) and worth stating plainly since it shows design contributing to business development, not just execution.

**What this era taught (for the "foundation" framing, echoing `docs/content.md` §5):**
- Time management under simultaneous deadlines
- Presenting and defending a design decision to non-design stakeholders
- Reading a client's brand and translating it into a system, without a formal brand workshop
- The habit of applying a UX process (research → wireframe → review → visual → flow → build) even under commercial pressure to skip steps
- Stakeholder management — specifically, working through an intermediary (the onsite coordinator) rather than the end client directly, which is a different skill than direct client-facing work

---

## 2. Client projects (the "top 7")

Per-client format for the eventual page: **one-line summary of the problem addressed → role/scope note → 2–4 assumed representative screens → asset status.** Keep each client's write-up to 2–3 sentences max — this section is a grid of small cards, not seven mini case studies.

> **Reading key for each entry:** 🟡 = reasoned assumption from portal type + sector + era, needs the user's confirmation or correction. 🟢 = has some external corroboration (from the Behance profile pattern above).

### 2.1 Tesla — Supplier Portal 🟡
- **What it likely addressed:** A B2B portal for Tesla's parts/component suppliers to manage the procurement relationship digitally — visibility into purchase orders, RFQ/quote submission, compliance documentation, and communication with Tesla's supply-chain team, replacing email- and spreadsheet-driven exchanges.
- **Assumed screens:** Supplier dashboard/home, purchase-order tracking list, RFQ or quote submission form, compliance/document library.

### 2.2 SanDisk — Support Portal 🟢
- **Corroboration:** "SanDisk Support Center App" appears directly on the user's Behance profile.
- **What it likely addressed:** A self-service customer support experience for SanDisk product owners — knowledge base search, case/ticket submission and tracking, product registration, and warranty/RMA-adjacent flows, aimed at reducing inbound call volume.
- **Assumed screens:** Support home with search, case submission/tracking, product registration, FAQ/knowledge article view.

### 2.3 VISA — InSite Portal 🟡🟢
- **Corroboration:** "InSite" naming pattern is directly corroborated by two other Behance-listed projects (Septodont InSite, Phibro InSite), supporting that this was a reusable WinWire portal template rather than a one-off.
- **What it likely addressed:** An internal or partner-facing portal for VISA — likely a resource/communications hub (news, training material, program documentation) for an internal team or merchant/partner network, using WinWire's InSite template adapted to VISA's brand and IA needs.
- **Assumed screens:** Portal home/dashboard, news & announcements feed, resource/document library, member or partner directory.

### 2.4 Brocade Communications — Intranet Portal 🟡
- **What it likely addressed:** An employee intranet for Brocade (networking hardware company) — centralizing internal news, HR self-service, org/directory lookup, and document access for a global engineering-heavy workforce.
- **Assumed screens:** Intranet home/news feed, employee directory/org chart, HR self-service hub, document/policy repository.

### 2.5 Lumileds — "The Hub" Intranet Portal 🟡
- **What it likely addressed:** A global employee intranet ("The Hub") for Lumileds (LED/lighting technology, spun off from Philips in this era) — likely built to unify communications and HR resources across multiple international sites/time zones post-spinoff.
- **Assumed screens:** Home dashboard with regional content switcher, news & announcements, employee directory, HR resources/forms hub.

### 2.6 MemorialCare — InSite Intranet Portal 🟡🟢
- **Corroboration:** Same "InSite" template pattern as VISA/Septodont/Phibro.
- **What it likely addressed:** A healthcare-system employee intranet for MemorialCare (Southern California hospital network) — department directories, policy/procedure libraries, internal news/alerts, and forms, with accessibility likely a harder requirement here given the healthcare/regulated context.
- **Assumed screens:** Home dashboard with alerts, department/staff directory, policy & procedure library, forms & resources hub.

### 2.7 L'Oréal — Idea Space Portal 🟡
- **What it likely addressed:** An internal innovation/ideation platform ("Idea Space") for L'Oréal employees to submit, discuss, and vote on ideas — a crowdsourced-innovation program UI rather than a transactional portal, likely including moderation/admin tooling.
- **Assumed screens:** Idea submission form, idea gallery/browse & vote board, idea detail with comments, leaderboard or recognition view.

---

## 3. Market research — what enterprise/offshore B2B UX process actually looked like, 2014–2018

Grounding for §1 so the process narrative reads as authentic for the period rather than generic:

- **Onsite-offshore delivery was the dominant model** for Indian IT-services and product-engineering firms in this period (WinWire, and peers like Mindtree, Persistent, Hexaware). A US- or Europe-based onsite coordinator/BA/account lead owned the client relationship; an India-based team (dev, QA, and increasingly a small embedded UX function) executed. UX as a distinct discipline was still being formalized inside these firms around 2014–2018 — many companies were standing up dedicated "UX" teams for the first time, having previously folded visual design into a generic "UI developer" role. This matches a designer starting out doing both design *and* the static front-end build (§1, step 6) — that dual scope was normal before firms fully separated "UX designer" from "UI/front-end developer" as distinct roles.
- **Tools of the era:** low-fidelity wireframes in Balsamiq or Axure RP; visual mockups in Photoshop (Sketch was gaining share from ~2015 onward but Adobe tools still dominated enterprise/services shops); early clickable prototypes in InVision (rose fast 2014–2017) or Marvel; Bootstrap as the default responsive front-end framework for the static HTML/CSS/JS handoff stage. Figma existed from 2016 but wasn't mainstream in services firms until later.
- **Accessibility was a compliance ask, not a craft value, in most of these engagements** — Section 508 and WCAG 2.0 AA were the standards actually referenced, usually because of a specific client requirement (healthcare, finance, government-adjacent, or a large enterprise's own internal policy) rather than a firm-wide design principle. This matches the user's account of "ensure accessibility elements are in place" being a specific handoff checkpoint rather than baked into a broader design system (design systems as a named practice didn't reach mainstream enterprise services work until ~2016 onward, driven by Google's Material Design (2014) and Salesforce Lightning (2015)).
- **Intranet/portal work leaned heavily on SharePoint or a custom .NET/Java portal framework** as the backend target — consistent with WinWire's Microsoft-technology focus and explains why so many of this era's projects are "portals" (Brocade, Lumileds, MemorialCare, VISA) rather than public marketing sites: SharePoint intranets were a huge, repeatable line of business for Microsoft-aligned services firms in this period.
- **Pre-sales POC design as a business-development lever** was (and still is) a common practice at services firms — building a speculative design concept to help sales close a prospective logo, sometimes unpaid or loss-led, is a recognized pattern distinct from delivery work. The user's account of POCs "eventually materializing" into real engagements is consistent with how this practice is meant to work.
- **Design maturity models of the era** (Nielsen Norman Group's UX maturity stages, and Jakob Nielsen's earlier "corporate UX maturity" work) describe most services-firm engagements at this point in history as sitting around "stage 2–3" of 8 — UX applied inconsistently, dependent on individual advocates rather than a formalized org-wide process. A junior designer's early lessons in *stakeholder management, presenting to non-design audiences, and defending a design decision under deadline pressure* (as the user described) are exactly the skills that mattered most at that maturity level, more than deep research methodology — there usually wasn't budget or organizational buy-in for the latter yet.

---

## 4. Page structure recommendation

- **One section**, not seven sub-pages: "Early Career — WinWire Technologies" (or similar), sitting after or alongside the OpenText work, framed as foundation (matching `docs/content.md` §5 and the timeline in §6 of that file).
- **Opening:** 2–4 sentence process narrative built from §1 above — how the onsite-offshore workflow worked, what the job actually involved day to day.
- **Client grid:** seven compact cards, one per client (§2), each with: client name, portal type/tag (e.g., "Supplier Portal", "Intranet", "Support Portal", "Ideation Platform"), the one-line summary, and 2–4 screen thumbnails once real assets exist (currently none in `public/projects/` — placeholders only until supplied).
- **Closing:** a **"View all projects →"** link pointing to https://www.behance.net/Vijaykumarpeddamuthu, styled consistent with other outbound links on the site (per the footer/nav pattern already established).
- Do **not** build individual case-study sub-pages for any of these seven (unlike the OpenText-era IGA/SAST/Nautilus/Fortify projects) — this section is intentionally lighter-weight, matching the user's explicit ask.

## 5. Open items before this gets built

1. Real screenshots/images for each of the 7 clients — none currently exist in `public/projects/`. The 🟡-flagged screen lists above are placeholders to swap out, not a spec to build wireframes against.
2. Confirm or correct each 🟡 problem summary against what was actually delivered — these are sector/portal-type-informed guesses, not verified project facts.
3. Confirm whether any of these are NDA-sensitive (unlikely for portals this old and already partly public via Behance, but worth a quick check before publishing client names + real screenshots side by side).
4. Decide exact section title/placement relative to the OpenText work and the existing timeline component (`src/components/Timeline.jsx`).
