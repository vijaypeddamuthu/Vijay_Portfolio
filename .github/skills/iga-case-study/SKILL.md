---
name: iga-case-study
description: "Source of truth and build guidance for the IGA (Identity Governance & Administration) case study — an access review and compliance reporting platform for enterprise compliance officers. USE WHEN: building, editing, or reviewing the IGA / Identity & Access case-study page or its Featured Projects card; writing its copy; deciding what is NDA-safe to publish; recalling the Ken Nagai persona, the empathy map, the four use cases (UC-1..UC-4) and their impact/urgency scores, the five-phase user journey map, the Dashboard vs. My Research information architecture split, the three concept directions, the iteration decisions (bubble chart, Gantt view, empty state, persistent filters), and the three decisions that defined the product. DO NOT invent shipped metrics beyond what is in this file — the outcome numbers here (the 45-min-to-4-min figure, the ~60% abandonment drop, the 3 renewals, the ~40% ticket drop) come directly from the source brief and should be treated as the case's own claimed results, not further embellished."
---

# IGA Case Study — Source of Truth

> Status: **BUILT — live on the portfolio.** The end-to-end case study is implemented at `src/components/CaseStudyIGA.jsx`, routed via `#/case/iga` in `src/App.jsx`, with a summary card in `src/components/Work.jsx` and supporting styles in `src/App.css` (`.cs-journey` for the journey-map rail, `.cs-tree` for the information-architecture diagram, plus reused `.cs-persona`, `.cs-bucket`, `.cs-cases`, `.cs-moves`, `.cs-stats`, `.cs-reflect` components shared with the other case studies). No real product screenshots were supplied for this project, so every screen is represented with the site's existing CSS wireframe `Skeleton` placeholders (via the `Frame` component from `CaseStudy.jsx`, no `src` passed) rather than blurred images.

## Snapshot

- **Project:** IGA — an enterprise Identity Governance & Administration platform's access-review and compliance-reporting module
- **One-liner:** Turned raw access data into a trustworthy, audit-ready artefact that a compliance officer can build in minutes and an external auditor can read without any context on the tool.
- **My role:** Lead UX Designer — end-to-end: research, synthesis, IA, interaction design, visual design, delivery
- **Team:** 1 Product Manager, 2–3 IAM domain specialists, 3 front-end engineers
- **Duration:** ~12 weeks
- **North-star brief (verbatim):** "Application or system owners need to be able to see the full history of access rights for the applications, systems, or data that they are responsible for... They should be able to sort and filter this information and they should be able to save it as a report."
- **Scope tags:** IGA, Compliance reporting, Enterprise SaaS, Data visualization, Information architecture

## How to use this file

- **§1–§9** are the case-study content, in the arc used to build the page. Build or edit in this order.
- The **Build guidance** section (bottom) maps each content section to what is actually implemented in `CaseStudyIGA.jsx`, section by section, including the DOM id used for the sticky jump-nav.
- Check every number against **NDA & metrics safety** before changing or extending it.

## NDA & metrics safety (read before publishing anything)

- Treated the same as the other two case studies on this site: shared under NDA, so the page carries a plain NDA notice in the hero and no real product UI is shown.
- Every outcome figure in this file (time-to-report, abandonment drop, renewals, ticket drop, hours saved) comes directly from the source brief's own "Outcomes" section — it is not independently verified against a real shipped product, but it is also not fabricated by the page build. Do not invent additional numbers beyond what's listed below.

| Metric | Value | Source | Publish? |
| ------ | ----- | ------ | -------- |
| Time to build one access report | 45 min → under 4 min | Source brief, "Outcomes" | ✅ Yes (as stated in brief) |
| First-session report abandonment | ↓ ~60% (5-participant moderated test) | Source brief, "Outcomes" | ✅ Yes, with sample size noted |
| Time saved per user per audit cycle | 2–3 hrs, via saveable filters | Source brief, "Outcomes" | ✅ Yes (as stated in brief) |
| Gantt legible to external auditors | Confirmed in 3 customer pilot sessions | Source brief, "Outcomes" | ✅ Yes (as stated in brief) |
| Enterprise renewals citing Gantt as differentiator | 3 | Source brief, "Outcomes" | ✅ Yes (as stated in brief) |
| "How do I report to my auditor" tickets | ↓ ~40% within 6 weeks | Source brief, "Outcomes" | ✅ Yes (as stated in brief) |
| Reporting surfaces consolidated | 4 → 1 (My Research module) | Source brief, "Outcomes" | ✅ Yes (as stated in brief) |
| Use case impact/urgency scores (35, 41, 44, 48) | Source brief, "Use Case Prioritisation" | ✅ Yes (process fact) |
| Research sample (6 interviews, 3 orgs, 3 competitor audit) | Source brief, "Research & Discovery" | ✅ Yes (process fact) |

---

## 1. Overview / summary
<!-- One-paragraph what-this-was. The elevator version. -->

IGA (Identity Governance & Administration) is the practice of managing who has access to what across an organisation, ensuring access is appropriate, approved, and regularly certified — a practice that is externally audited in regulated industries (financial services, healthcare, energy), with failures carrying regulatory fines and reputational damage. The product here is an enterprise IGA platform used by compliance officers and security teams to monitor, report on, and certify user access rights. The existing product could show that access existed but could not produce audit-ready evidence, so customers manually rebuilt compliance reports from spreadsheet exports every audit cycle. The compliance segment — highest value, highest churn risk — was vocal about it, sales was losing competitive deals over reporting, and three enterprise renewals in the pipeline named it as a blocker.

**At a glance**
- *Role:* Lead UX Designer — research through delivery
- *Team:* 1 PM, 2–3 IAM domain specialists, 3 front-end engineers
- *Duration:* ~12 weeks
- *Deliverables:* 6-interview research round, empathy map, use-case prioritisation matrix, 5-phase journey map, a two-surface information architecture (Dashboard vs. My Research), 3 concept directions, a Gantt-based reporting view, and a shipped design

## 2. Role & context
<!-- Your role, team, timeframe, who you worked with, what you owned vs. influenced. -->

**What I owned**
- End-to-end UX: research and synthesis, information architecture, interaction design, visual design, and delivery, working with 1 PM and 2–3 IAM domain specialists, handed to 3 front-end engineers.

**Why it mattered now**
- The existing product surfaced raw access data but could not produce audit-ready evidence. Customers were manually rebuilding compliance reports from spreadsheet exports every audit cycle. The compliance segment was the highest-value, highest-churn-risk segment, and vocal about the gap. Sales was losing competitive deals to tools with better reporting, and three enterprise renewals in the pipeline named reporting as a blocker.

## 3. Problem
<!-- The real friction. Who was hurting, what was slow/confusing, why it mattered in a compliance context. -->

**User problem:** Compliance officers are accountable to external auditors but have no reliable, fast way to answer the most fundamental audit question — *"Who has access to what, was it approved, is it still appropriate, and can I prove it?"* Every audit cycle triggered a manual, multi-day data-gathering exercise using raw exports that were unreliable, inconsistently structured, and unfit for presenting to an external auditor.

**Business problem:** The product showed that access existed but not whether it was justified or audit-worthy. There was no way to generate a presentable, trustworthy evidentiary output without rebuilding it manually. Churn risk was elevated in the compliance-heavy segment, and three enterprise renewals named reporting as a blocker.

**Design challenge:** How do we transform raw access data into a trustworthy, audit-ready artefact that a compliance officer can build in minutes and an external auditor can read without context?

**Frustrations solved:**
- Manual spreadsheet rebuilds every audit cycle
- No approval or justification traceability
- Data arrives late, or arrives wrong
- Dependency on other teams just to pull data
- One generic export for every use case

## 4. Constraints & considerations
<!-- Technical, org, compliance, timeline, NDA limits, stakeholder pressures. -->

- **Regulated-industry stakes:** IGA is externally audited (SOX, ISO 27001, GDPR access provisions referenced by customers); failures carry regulatory and reputational risk, so "looks credible to someone outside the tool" is a hard requirement, not a nice-to-have.
- **Dual audience, single-user brief:** the source brief describes one user (the application/system owner), but the real output is consumed by two different people — the compliance officer who builds the report and the external auditor who receives it. This shaped nearly every downstream decision (see §7 and §9).
- **12-week timeline** with a small team (1 PM, 2–3 IAM specialists, 3 engineers) — this ruled out a ground-up rebuild and favoured an incremental IA restructure over 4 existing, organically grown reporting surfaces.
- **NDA:** treated like the site's other case studies — no real product screenshots shown publicly; screens are rebuilt as wireframes.

## 5. Research & insights
<!-- What you learned. Interviews, workshops, competitive audit, persona, journey map. -->

**Methods**
- 6 semi-structured interviews with compliance officers, security analysts, and IAM administrators across 3 enterprise organisations (financial services, SaaS, manufacturing)
- Stakeholder interviews with Customer Success and Sales to surface recurring escalation patterns and deal-loss reasons
- Workflow documentation review of existing audit report exports, certification procedures, and referenced regulatory frameworks (SOX, ISO 27001, GDPR)
- Competitive audit of 3 incumbent IGA tools on reporting legibility, audit-trail completeness, and time-to-evidence
- An empathy-mapping workshop that synthesised all sessions into one shared artefact used to align the product team

### Persona — Ken Nagai, Compliance Officer

- **Role:** owns IAM governance policy; primary interface with external compliance auditors; accountable for access-certification review outcomes
- **Scope:** architects IAM strategy and implementation roadmap across on-premise, cloud, and mobile systems
- **Technical level:** high domain knowledge (regulations, risk frameworks); moderate technical proficiency, not an engineer
- **Goals:** meet regulatory requirements; conduct risk analysis; review compliance mandates; stay ahead of new regulations
- **Pain points:** interpreting non-negotiable external regulations; being seen as a gatekeeper by peers and executives; Shadow IT implications; grey-area policy judgement calls
- **Success measure:** producing a clean, complete, audit-ready report before a deadline without chasing data across three teams
- **Tools he lives in:** DM reports, OS reports, application reports, spreadsheets, internal audit plans (run in parallel to the platform, as a trust backstop)
- **Quote:** "Not knowing if terminated users' access has been removed keeps me up at night."

### Empathy map — synthesis

- **Think & feel:** feels personally responsible to the auditor but has no confidence in the underlying data; wonders whether every provisioned user is supposed to have the access they have; anxious that policy changes go unreflected in the system between audits.
- **See:** can see that access was granted, not why it was justified; access rights lack approval traceability; access appears or disappears with no narrative.
- **Pains (highest severity):** extremely difficult to know, comprehensively, who has access and whether it is appropriate; failing audits or negative results because data arrives late or wrong; internal audit data is unclean and shows up incorrectly in final exports; cannot provide adequate, timely information when the auditor asks; dependency on IT/engineering to pull data, adding delay and accuracy risk.
- **Say & do:** manually runs DM, OS, and application reports to cross-verify access before every audit; maintains internal audit plans as a parallel process to the platform; creates both negotiable and non-negotiable regulatory documentation; reviews and updates security policy/procedure documentation regularly.
- **Hear:** auditors ask "Can you provide the summarised access reports with users and rights mapping for the last 5 days?"; data delays are the most frequent complaint as deadlines approach; requests to confirm policy changes are reflected in the system in real time.
- **Gains:** simplified, trustworthy reporting that needs no manual cleanup; interactive query filterable by any combination of user, application, time period, access right; a seamless, auto-generated audit output; reports designed per use case, not one generic export.

### Use case prioritisation (Impact × Urgency, out of a max implied by the scoring model used)

| # | Use case | Goal | Score |
| - | -------- | ---- | ----- |
| UC-1 | Verifying and validating the certification process | Ensure authorised users are the only ones using a given information set | 35 |
| UC-2 | Verifying user access complies with defined policies | Prove access authorisation for employees selected randomly by the auditor | 41 |
| UC-3 | Verifying that terminated users' access has been removed | Prove access was removed for employees terminated in the last 90 days, selected randomly by the auditor | 48 |
| UC-4 | Checking application access during a past time period | Determine who had access to a given application within a specific historical time window | 44 |

**Design implication:** UC-3 (48) and UC-4 (44) scored highest — both time-bounded, application-scoped, evidentiary queries. That confirmed Reports/My Research as the critical surface; UC-1 and UC-2 were better served by continuous Dashboard monitoring. This directly drove the two-surface IA decision.

### User journey map (5 phases of one audit cycle)

1. **Trigger** — an audit notification arrives with a deadline and a specific ask. *Emotion: moderate anxiety, deadline-driven.*
2. **Orientation** — logs in for situational awareness: applications in scope, active users, anomalies that could complicate the audit. *Emotion: scanning for red flags.*
3. **Investigation (pain zone)** — tries to pull a report matching the auditor's exact ask; no clear entry point, confusing filters, results need manual cleanup; often falls back to spreadsheets here. *Emotion: frustration, lost confidence, time pressure.*
4. **Verification** — cross-references certification dates, approvals, terminations, and dormant vs. active access across multiple views. *Emotion: high cognitive load, fear of missing something.*
5. **Delivery** — exports or saves the report to share with the external auditor. *Emotion: relief if credible, doubt if it looks like a raw dump.*

**Key insight:** the Phase 3 pain zone was not a discoverability problem (Ken knew reports existed) — it was a trust and entry-point problem. The tool gave no scaffolding for building a query from scratch. The "Let's get started" empty state and persistent, saveable filters were direct responses to this finding.

## 6. Process
<!-- IA, concept directions, iteration decisions. -->

### Information architecture decision

Structurally separated *operational awareness* (Dashboard) from *evidentiary output* (My Research) — two distinct jobs-to-be-done performed by the same person in different contexts. The previous architecture conflated them, forcing context-switches mid-task and optimising for neither.

```
LOGIN
├── USER — Profile, Users, Settings
├── DASHBOARD (situational awareness — UC-1, UC-2)
│   ├── Notifications
│   ├── Views — Templates, Saved
│   ├── Bird's-eye-view KPI (pinnable)
│   └── Other pinned KPIs
└── MY RESEARCH / Reports (evidentiary output — UC-3, UC-4)
    ├── Views — Templates, Saved
    └── Advanced
```

- **Naming rationale:** "My Research" instead of "Reports" frames the surface as an active investigation the user owns, not a passive export IT runs for them — this single naming change measurably reduced hesitation in usability testing.
- **Amber nodes:** Templates, Saved, and pinned KPIs are the highest-frequency access points; they became persistent shortcuts in the right rail on both Dashboard and Reports, always visible, never requiring navigation.

### Concept directions explored

- **A. Unified query builder (table-first) — Rejected.** A single powerful table with all filters exposed upfront; too intimidating for non-analyst compliance users, no orientation layer.
- **B. KPI-first dashboard, progressive drill-through — Selected.** Starts with aggregate health, then drills to the specific evidence needed; matched the top-down assess → locate → extract pattern confirmed in all 6 research interviews.
- **C. Wizard-driven audit report builder — Retained as secondary.** Step-by-step: choose application → choose users → choose time period → generate; lives as "Advanced" mode under My Research, valuable for first-time users and complex multi-variable queries.

### Iteration decisions

- **Bubble chart over bar chart (Dashboard):** bar charts collapsed at scale (50+ applications) and hid the outliers auditors care about most; bubbles preserve relative scale and surface anomalies by size.
- **Application Quick View hover card:** removed a full navigation step from the most common compliance workflow — licence counts, usage trend, team breakdown, without losing the overview scan.
- **Gantt as primary audit-delivery format (Reports — Chart View):** a table alone was functionally complete but visually opaque to an outside reader; the Gantt timeline (coloured access-period bars per user per application, status colour-coded Active/Revoked/Certification/Removed) makes the audit question answerable at a glance and became the primary export format. The table view was retained for legal/internal review.
- **Empty-state onboarding (Reports — blank page):** users landing on Reports with no active query would scan, find nothing, and leave. A "Let's get started" state with an illustration and guided prompt resolved the abandonment.
- **Persistent, saveable filter state:** filters (time period, user, application, access right, team, current status) now persist across sessions and save as named reports, eliminating the most-repeated manual task in the research.

## 7. Solution
<!-- What shipped. Key decisions and why. -->

### Final screens

- **Dashboard — Overview:** KPI snapshot (56 total applications, 1,723 active users), bubble chart of all applications sized by access volume, top-applications table, most-active-users table, an IAP Research shortcut panel (Templates/Saved), and a live notifications rail with inline justification text.
- **Dashboard — Application Quick View:** hover-triggered card showing licence totals, in-use/available counts, a monthly access trend, and team usage — full context without navigation.
- **Dashboard — Application Detail View:** team-usage rings, a per-team table (active/in-use/available), application metadata, and the access-trend timeline — the entry point for certification review at the application level.
- **Reports — Empty State:** "Let's get started" onboarding state with guided prompt copy, removing blank-page abandonment.
- **Reports — Chart View (Gantt):** the primary audit-delivery artefact — a timeline of each user's access periods per application as coloured bars, status colour-coded (Active teal, Revoked amber, Certification blue, Removed red), groupable by Applications/Users/Team/Chart/Table, filterable by every dimension, saveable as a named report.
- **Reports — Table View:** dense tabular access-rights history (User, Application, Status, Requested On, Approved On, Certification window, Active/Revoked), sortable by any column, with row-level status badges.

### The three decisions that defined the product

1. **Gantt + Table parity** — the same query produces both the Gantt (visual, auditor-facing) and the Table (detailed, internal-facing) without re-running, eliminating the "which export is correct?" problem: one source of truth, two presentation modes.
2. **Compliance officer ≠ only audience** — the output is consumed by two people: the officer who builds the report and the auditor who receives it. Designing the Gantt as an auditor-legible artefact, not just a visualisation, changed how success was measured.
3. **Notifications rail as justification surface** — redesigned from a plain change feed to surface justification text inline with each event, so Ken sees not just that access changed, but why, without a separate audit log.

## 8. Outcome & impact
<!-- Metrics with sources. See the provenance table up top before publishing any number. -->

**User outcomes**
- A complete access rights report for a single application in under 4 minutes, down from an estimated 45-minute manual process.
- "Let's get started" empty state cut first-session report abandonment by ~60% in moderated usability testing (5 participants).
- Saveable filter state removed the need to rebuild the same audit query each cycle — an estimated 2–3 hours saved per user per audit period.
- The Gantt view read as legible audit evidence to external auditors with no platform context, confirmed across 3 customer pilot sessions.

**Business outcomes**
- The Gantt export was cited as a key differentiator in 3 enterprise renewal conversations the quarter after launch.
- "How do I produce a report for my auditor" support tickets dropped ~40% within 6 weeks of launch.

**Team / process outcomes**
- The IA restructure consolidated 4 organically grown, overlapping reporting surfaces into one composable My Research module, cutting ongoing design and engineering debt.

## 9. Reflection / what I'd do next
<!-- Lessons, follow-ups, what you'd change. -->

- **Biggest lesson:** the hardest constraint was a dual-audience problem hidden inside a single-user brief. The brief describes one user (the application/system owner), but the output is consumed by two fundamentally different people — the officer who builds the report and the auditor who receives it. Early designs optimised only for the builder and produced outputs that were functionally complete but presentationally inadequate as formal audit evidence.
- **What mattered most:** designing the Gantt view explicitly as an auditor-facing artefact, not just a visualisation mode, was the most consequential shift — it changed the success criterion from "can Ken find the data?" to "can an external auditor who has never used this product read this output and reach a conclusion?"
- **What I'd do next:** bring an external auditor into the initial research rather than inferring their needs from what compliance officers described — a single interview would likely have validated the Gantt format two sprints earlier and saved a full iteration cycle on the export design.

---

## Build guidance (how this maps to the built page)

The page is implemented as `CaseStudyIGA.jsx`, following the same shell as `CaseStudy.jsx` / `CaseStudyNautilus.jsx` (`cs-topbar` + `SectionNav` jump bar, `cs-hero`, a sequence of `cs-section` blocks, `Footer`). Section-by-section mapping (DOM id → content):

1. **Hero** (no id, top of page) — kicker, title "Audit-ready access, on demand", lead paragraph, `cs-impact` stat chips (the 4 outcome numbers), `cs-summary` "In short" list, `cs-meta` (role/team/duration/focus), scope chips, NDA notice, and a `Frame` dashboard skeleton.
2. **`ig-overview`** — the north-star brief as a `cs-callout` blockquote, plus the context/why-now prose from §1–§2.
3. **`ig-problem`** — the design-challenge blockquote plus the 5 frustration chips from §3.
4. **`ig-persona`** — Ken Nagai persona card (`cs-persona`: facts, quote, goals, frustrations, tools) followed by the 6-category empathy map rendered as a `cs-buckets` grid (component `Empathy` in the file).
5. **`ig-usecases`** — the 4 use cases as a `cs-cases` list (title, score + which surface it drove, goal), with a closing note on the UC-3/UC-4 → Reports, UC-1/UC-2 → Dashboard split.
6. **`ig-journey`** — the 5-phase journey map as a `cs-journey` rail (new CSS component), with phase 3 flagged `is-pain` for the accent highlight, plus the key-insight note.
7. **`ig-ia`** — the IA decision, a `cs-tree` nested-list diagram of Login → User/Dashboard/My Research (new CSS component), the "My Research" naming-rationale callout, and the amber-nodes note.
8. **`ig-process`** — the 3 concept directions as `cs-bucket` cards (selected one flagged `cs-bucket--urgent`), followed by the 5 iteration decisions as a `cs-principles` grid.
9. **`ig-solution`** — the 6 final screens as `Frame` skeletons in a `cs-wires` grid (no real screenshots available; `dashboard`/`report`/`list` variants chosen per screen's content).
10. **`ig-decisions`** — the three defining decisions as a numbered `cs-moves` list.
11. **`ig-outcome`** — the 4 hero stats repeated as `cs-stats`, then the outcomes grouped under "User" / "Business" / "Team & process" subheadings as `cs-reflect` lists.
12. **`ig-reflection`** — the 3 reflection paragraphs as a `cs-reflect` list, plus the "back to all work" link.

**Landing-page card** (`Work.jsx`): kicker "Identity Governance", title "IGA — audit-ready access", tags `['IGA', 'Compliance reporting', 'Enterprise SaaS']`, links via `caseStudyHref: '#/case/iga'`. No image asset exists, so the card renders the site's existing gradient placeholder with the title as a clickable link (consistent with how cards without imagery already look elsewhere on the site) rather than a bespoke thumbnail graphic.

**Do NOT:** invent additional outcome metrics beyond the provenance table, add a persona "day breakdown" bar chart (the source brief did not provide time-allocation percentages for Ken, unlike the Nautilus/SAST personas — omit rather than fabricate), or swap the skeleton placeholders for real screenshots without the user supplying actual assets.

## Assets

| File | Shows | Status |
| ---- | ----- | ------ |
| *(none)* | No source screenshots or diagrams were supplied for this case study | All visuals are CSS `Skeleton` wireframes via the shared `Frame` component — swap in real assets here if the user provides them (see `src/imports/` filenames referenced in the original brief: `Empathy_Map.png`, `Information_Architecture.png`, `Mockup_s.png`, `Mockup_s-1.png`, `Mockup_s-2.png`, `Persona_s.png`, `Story.png`, `Use_Case.png`, `User_Journey_Map.png` — none of these exist in this workspace) |

## Raw dump (unsorted)
<!-- Paste anything here; it'll be sorted into the sections above later. -->
