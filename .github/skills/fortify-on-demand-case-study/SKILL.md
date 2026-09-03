---
name: fortify-on-demand-case-study
description: "Source of truth, build guidance, and interview prep for the Fortify on Demand case study — a cloud-native application security testing platform (SAST, DAST, MAST) redesign unifying three siloed products under one application-first experience. USE WHEN: building, editing, or reviewing the Fortify on Demand / FoD case-study page or its Featured Projects card; writing its copy; deciding what is NDA-safe to publish; prepping to present or defend this case study in an interview; recalling the three personas (Morgan Lee, Priya Ramesh, David Osei), the 6 validated pain points, the before/after IA (modality-first vs. application-first), the 3 core flows, the 4 lead-UX decisions that moved the needle, the pain-point-to-metric traceability table, and anticipated tough-question answers (§10). DO NOT invent details beyond what is captured here, and treat all figures in this file as the case's own claimed results (as supplied by the user) rather than independently verified numbers."
---

# Fortify on Demand Case Study — Source of Truth

> Status: **captured — not yet built.** This file is the single source of truth for the Fortify on Demand (FoD) case study, transcribed from the user's source material. Nothing has been built on the page yet. When building, follow the section order below and the **Build guidance** at the end, matching the pattern already established by `sast-case-study`, `iga-case-study`, and `nautilus-case-study`. **§10 (Interview prep)** is the section to reach for when the user is prepping to *talk through* this case study rather than build the page — it has an elevator pitch, a 3-minute narrative, a pain-point→decision→metric traceability table, and answers to the hardest anticipated questions.

## Snapshot

- **Project:** Fortify on Demand — cloud-native application security testing platform (SAST, DAST, MAST)
- **Tagline:** "Fortify on Demand. Reimagined."
- **One-liner:** Redesigned a cloud-native application security testing platform, unifying SAST, DAST, and MAST under one intelligent experience so it could serve both enterprise security teams and developer-first organisations simultaneously.
- **My role:** Lead UX Designer
- **Platforms:** Web, CI/CD Plugin, Mobile
- **Team:** 1 Lead UX Designer (me), 1 Junior Designer, 12-person Development team, 2 Project Managers
- **Timeline:** Aug 2025 – Jul 2026 (12 months)
- **Outcome status:** GA, 2,400+ Enterprise Orgs
- **Headline metrics:**
  - ↑ 71% Scan Initiation Rate (vs. legacy portal baseline)
  - ↓ 68% Time to First Scan (4.2 days → 1.3 days)
  - +52 pts NPS Score (−4 → +48)
  - ↑ 88% DAST Adoption (previously <12% of users)
- **Scope tags:** Lead UX Designer, 12-Month Engagement, Cloud SaaS, SAST/DAST/MAST, Enterprise B2B

## How to use this file

- Sections 1–9 are the case-study arc, in order. Build the page in this sequence, consistent with the other three case studies.
- The **Build guidance** section (bottom) has recommended page structure and what to emphasize for recruiters.
- Treat every metric in this file as **user-supplied / claimed**, not independently verified — flag this plainly if the page ever needs an NDA/metrics-safety pass like the other case studies.

---

## 1. Overview / summary

Fortify on Demand had accumulated SAST, DAST, and MAST capabilities across a decade of acquisitions — each surviving as its own product experience, with its own navigation model, result format, and configuration paradigm. Security teams spent more time navigating the platform than acting on findings. Developers avoided it entirely. CISOs commissioned quarterly PDF reports from consultants because the platform couldn't generate board-ready data itself.

The redesign unified all three testing modalities around the application as the organizing principle (not the test type), introduced role-aware views so the same finding could serve a developer and a CISO differently, and made CI/CD integration and mobile triage first-class experiences rather than afterthoughts.

**At a glance**
- *Duration:* 12 months (Aug 2025 – Jul 2026)
- *Team:* 1 Lead UX Designer, 1 Junior Designer, 12 Development team, 2 Project Managers
- *Platforms:* Web, CI/CD Plugin, Mobile
- *Product model:* Unification of three previously separate product experiences (SAST, DAST, MAST) into one platform

## 2. Role & context

**My role:** Lead UX Designer, owning the redesign end to end across a 12-month engagement — research, IA, flows, screen design, and cross-team advocacy — supported by 1 Junior Designer and working alongside a 12-person development team and 2 Project Managers.

**Why it mattered now:** A decade of acquisitions had left SAST, DAST, and MAST as three separate product experiences bolted together under one brand. This wasn't a cosmetic problem — it actively blocked all three core users: security teams drowning in navigation instead of remediation, developers who avoided the tool entirely, and CISOs manually assembling board reports because the platform had no native executive view.

## 3. Problem

**Problem statement:** A platform built for its engineers, not its users. Fortify on Demand had been layered with features across a decade of acquisitions. SAST, DAST, and MAST capabilities all existed, but as three separate product experiences, each with its own navigation model, result format, and configuration paradigm. Security teams spent more time navigating the platform than acting on findings. Developers avoided it entirely. CISOs commissioned quarterly PDF reports from consultants because the platform couldn't generate board-ready data.

**6 Validated Pain Points**

| # | Pain point | Severity | Detail |
| - | ---------- | -------- | ------ |
| 1 | 16-Step Scan Submission | Critical | Average scan submission required 16 steps across 4 screens. 34% of users abandoned before completing configuration. |
| 2 | Modality Silos | Critical | SAST, DAST, and MAST operated as completely separate experiences. Unified risk scores and cross-modality remediation were impossible. |
| 3 | Results Inaccessibility | High | Developers spent an average of 11 min per finding just working out what it meant, before attempting any fix. |
| 4 | No Executive View | High | CISOs exported CSVs and built board presentations manually. Zero native risk dashboard with business context. |
| 5 | 4.2-Day Onboarding Cliff | Medium | First-time users took an average of 4.2 days to submit their first scan. The setup guide was a 47-page PDF. |
| 6 | CI/CD Blind Spot | Medium | No native pipeline integration UI. Dev teams configured webhooks manually via undocumented API calls. |

## 4. Constraints & considerations

- **Decade of acquisition debt:** SAST, DAST, and MAST were architecturally and experientially separate products, each with entrenched navigation, data models, and internal stakeholder ownership — unifying them was as much an organizational negotiation as a design problem (see the IA fight in §7).
- **Three audiences, one product:** AppSec Program Managers, developers, and CISOs each needed fundamentally different things from the same underlying data (see personas, §5) — the design had to serve all three without becoming a compromise for any of them.
- **Engineering skepticism on mobile:** Engineering estimated 6 weeks for mobile responsiveness and was reluctant to prioritize it; had to negotiate scope down to a 3-week MVP to get it shipped at all (see §7).
- **Trust in automation:** Auto-triage/verdicts without visible reasoning were rejected by users; automated results had to show their reasoning to be trusted (see §7).
- **12-month timeline** with a 12-person dev team, 2 PMs, and a 2-person design team (lead + junior) — the scope spanned Web, CI/CD Plugin, and Mobile simultaneously.

## 5. Research & insights

**Research & Discovery methods**
- **User Interviews** — AppSec PMs, developers, CISOs. Semi-structured, 60-minute sessions.
- **Quantitative Survey** — current customers across SMB, mid-market, and enterprise segments.
- **Session Replay Audit** — FullStory analysis: rage clicks, abandonment, and confusion patterns mapped.
- **Competitive Teardown** — Veracode, Checkmarx, Snyk across 24 UX criteria and 3 task scenarios.

### 3 Validated User Personas

**🛡️ Morgan Lee — AppSec Program Manager**
- *Age:* 41
- *Job to be done:* Prove security program ROI with credible, real-time evidence.
- *Goals:* Prove security program ROI to CISO; reduce developer friction; consistent coverage across all apps.
- *Frustrations:* DAST config required 3 days of manual setup; no unified dashboard for SAST + DAST results; can't see what's actually being used at renewal.
- *Key quote:* "I need to show the board we're more secure than last quarter. I shouldn't need a spreadsheet to prove that."

**🧑‍💻 Priya Ramesh — Senior Software Engineer**
- *Age:* 29
- *Job to be done:* Ship provably secure code without slowing down the team's sprint cadence.
- *Goals:* Ship features fast without security blocking CI/CD; get clear, actionable fix guidance; not have to context-switch into a separate tool.
- *Frustrations:* Scan results arrive 4 hours after push, by which point she's moved on; the portal feels built for security people, not developers; false positives waste her morning every sprint review.
- *Key quote:* "If it's not in my PR, I'm not going to look at it. Security tools need to come to me."

**📊 David Osei — CISO, Mid-Market Enterprise**
- *Age:* 53
- *Job to be done:* Report credible risk posture to the board without manual data wrangling.
- *Goals:* Board-ready compliance evidence; trend data across the entire app portfolio; cost-per-scan clarity for budget justification.
- *Frustrations:* Can't see risk posture across all apps in one view; audit reports require manual assembly from 3 exports; no way to benchmark security maturity vs. peers.
- *Key quote:* "The tool does the scanning. What it doesn't do is help me tell the story."

**Design implication:** the three personas confirmed that "the same finding means different things to a developer vs. a CISO" — which directly drove the role-aware-context design principle (§6) rather than a one-size-fits-all findings view.

## 6. Process

### Design principles — from fragmentation to a unified security experience

Users care about application risk, not the test type behind it. SAST, DAST, and MAST are just different ways of looking at the same product, so the redesign puts the application at the centre.

- **Unified, Not Merged** — SAST, DAST, and MAST are complementary lenses on the same application risk, not three separate tools with shared billing.
- **Role-Aware Context** — the same finding means different things to a developer vs. a CISO. Role-aware views present the same data with the right emphasis.
- **Progressive Disclosure** — surface the 20% of information users need 80% of the time. Complexity is available on demand and never in the way.
- **Pipeline-Native First** — security is most effective when invisible in the developer workflow. CI/CD integration is a first-class experience, not a footnote.
- **Trend Over Snapshot** — security posture is only meaningful over time. Every metric defaults to trend view, not point-in-time status.
- **Show the reasoning first** — if a verdict is going to help, people need to see how it was reached. Quiet automation alone was not enough.

### Information architecture: before vs. after

**Before — Modality-First Navigation**
```
🔵 SAST  → Applications → Configure → Scan → Results
🟠 DAST  → Targets → Schedule → Config → Results
🟣 MAST  → Build → Upload → Policy → Results
📊 Reports → Export → CSV → Build manually
```

**After — Application-First Navigation**
```
📱 My Applications    → Risk Score + All Findings
🔬 Start Scan         → Choose modality inline → 4 steps
🎯 Findings           → Unified (SAST+DAST+MAST) + Fix Guidance
📊 Portfolio Dashboard → Board-ready, always live
```

### 3 Core Flows: structure & design intent

**1. App Overview**
- *Concept:* Card grid with inline risk badge and last-scan timestamp. Primary action: "Start Scan" per app.
- *Screen structure:* Nav + Global Search → App Cards Grid (Risk Badge, Last Scan, Findings Count) → Quick Actions + Recent Scans Sidebar → Portfolio Summary Bar
- *Key design decisions:* progressive disclosure (minimal fields until needed); smart defaults (last-used app pre-selected); inline validation prevents empty submissions; keyboard-navigable for power users

**2. Scan Submission**
- *Concept:* 4-step stepper: App → Modality → Config → Review. Progressive fields reveal as user advances.
- *Screen structure:* Stepper (App / Modality / Config / Review) → Config Form (Progressive Disclosure) → Summary Card (Preview) → Back | Save as Template | Start Scan
- *Key design decisions:* same four — progressive disclosure, smart defaults, inline validation, keyboard navigability

**3. Findings List**
- *Concept:* Filterable table with severity ring, finding type tag, and inline quick-actions.
- *Screen structure:* Filter Bar (Severity / Type / Status / Assignee) → Column Headers → Finding Rows (Severity Ring, Title, Type Tag, Actions) → Bulk Actions + Pagination
- *Key design decisions:* same four — progressive disclosure, smart defaults, inline validation, keyboard navigability

> Note: the source material lists identical "Key Design Decisions" bullets for all three flows (progressive disclosure, smart defaults, inline validation, keyboard navigation) — this is a shared design system applied consistently across flows, not a transcription gap.

**Screen coverage:** 5 key screens across 3 platforms (Web, CI/CD Plugin, Mobile). Each screen represents a solved user problem, with annotations meant to highlight specific design decisions — not just what's on screen, but why it's there and what changed in user behaviour.

### Validation methodology

**Moderated usability testing** — 24 participants, 8 per role (AppSec PM / developer / CISO), running 6 benchmark tasks against both the legacy platform and the redesign.

## 7. Solution

### Lead UX decisions that moved the needle

**1. Restructuring IA around the Application, not the Modality**
The most contested decision of the project. Product insisted on modality tabs. Research was unambiguous: 8/8 participants found applications faster in the new model. Winning this argument was the single highest-leverage design decision of the project.

**2. Making the verdict understandable**
Pushed back on shipping the automated risk model without showing its reasoning. Once reasoning was surfaced alongside the verdict, acceptance jumped from 54% to 91%.

**3. Making CI/CD integration a 3-click flow**
Previously required 23 pages of API documentation. Redesigned as a guided setup flow. Pipeline adoption went from 4% to 68% of onboarded teams within 3 months of GA.

**4. Advocating for mobile responsiveness against engineering reluctance**
Engineering estimated 6 weeks. Negotiated a 3-week MVP covering only the on-call triage use case. Mobile now accounts for 18% of all sessions. On-call response time dropped 52%.

## 8. Outcome & impact

**Headline metrics**
- ↑ 71% Scan Initiation Rate (was 39% on legacy)
- ↓ 68% Time to First Scan (4.2 days → 1.3 days)
- +52 pts NPS Improvement (−4 → +48)
- ↑ 88% DAST Adoption (12% → 100% of eligible users)

**By role**

*AppSec PMs*
- DAST config: 47 min → 8 min
- Unified findings eliminated the 3-tab workflow
- Automated compliance: 8 hrs/week saved
- Team NPS: +44 points

*🧑‍💻 Developers*
- PR finding engagement: 11% → 74%
- Fix rate within same sprint: 18% → 61%
- Security gate adoption: 4% → 68%
- Zero context-switching from IDE to portal

*📊 CISOs*
- Board PDF: 3 days → 1 click
- Risk trend across all 47 apps, live
- Compliance badge coverage: fully automated
- Renewal conversation shifted from cost to ROI

**Platform status:** GA, adopted by 2,400+ Enterprise Orgs.

## 9. Reflection / what I'd do next

**Key lessons learned**

- **IA is the hardest and most leveraged design deliverable.** Three weeks on information architecture felt slow at the time. In retrospect, it was the highest-leverage three weeks of the entire project — every downstream design decision was faster and cheaper because the structure was right.
- **People trust clear reasoning more than a quick answer.** Every time auto-triage was proposed without explanation, security teams pushed back. People wanted to understand the result before they trusted it.
- **Ship the MVP of mobile before you ship "complete" desktop.** Mobile was nearly cut entirely. The on-call triage use case was small enough to build in 3 weeks and proved value faster than any prototype could — a constrained real feature beats a comprehensive prototype.

**What I'd prioritise next**

| Priority | Initiative | Rationale |
| -------- | ---------- | --------- |
| P0 | Fix suggestions in the IDE | Surfacing code fixes directly in VS Code and IntelliJ instead of leaving them in a description. Could lift the fix rate from 61% to 80%+. |
| P0 | Peer Benchmarking (Anonymised) | CISOs consistently asked "how do we compare?" Anonymised benchmark data from the FoD customer base is a unique differentiator no competitor currently offers. |
| P1 | Collaborative Triage Workflows | Findings currently have one assignee. Real-world triage is collaborative — shared queues and triage sessions would serve AppSec PMs significantly better. |
| P2 | Published Design Token System | The component library lives in Figma. Publishing tokens as a consumed pipeline would eliminate the implementation drift currently seen between design and production. |

## 10. Interview prep — talk tracks, traceability, and anticipated questions

This case study's biggest interview asset is that it's a **contested-decision story, not just a redesign** — there's a real internal disagreement (IA), a real negotiation (mobile scope), and a real measured belief-change (verdict transparency). Lead with those, not with the screens.

### 30-second elevator pitch

"Fortify on Demand had grown through a decade of acquisitions into three separate products — SAST, DAST, and MAST — each with its own navigation and config model. Security teams spent more time navigating than remediating, developers avoided the tool entirely, and CISOs built board reports by hand. I led a 12-month redesign that unified all three around the application as the single organizing principle, added role-aware views for AppSec PMs, developers, and CISOs, and made CI/CD integration and mobile triage first-class experiences instead of afterthoughts. It shipped to GA with 2,400+ enterprise orgs — a 71% jump in scan initiation, time-to-first-scan down from 4.2 days to 1.3, and NPS up 52 points."

### 3-minute walkthrough (narrative arc to actually tell out loud)

1. **Set the scene (problem):** a decade of acquisitions left SAST/DAST/MAST as three bolted-together products. Name one or two of the sharpest pain points (16-step scan submission with 34% abandonment; CISOs manually assembling board PDFs) — concrete numbers land better than "it was fragmented."
2. **Ground it in people, not features:** three personas, three completely different jobs-to-be-done — Morgan Lee needs to prove ROI, Priya Ramesh needs security to stay out of her way, David Osei needs a board-ready story. Same underlying data, three different needs — that's the crux of the design problem.
3. **The pivotal decision:** Product wanted to keep modality tabs (SAST/DAST/MAST as separate nav). You proposed application-first IA instead. Research settled it — 8/8 usability participants found applications faster in the new model. This is the moment to slow down in an interview; it's the strongest "here's how I use evidence to win an argument" beat in the whole case.
4. **Two or three supporting decisions, fast:** verdict transparency (54% → 91% acceptance once reasoning was shown), CI/CD as a 3-click guided flow instead of 23 pages of docs (4% → 68% pipeline adoption), and the mobile MVP negotiation (6-week ask talked down to a 3-week on-call-triage MVP, which then drove 18% of all sessions).
5. **Land the outcome:** GA, 2,400+ orgs, 71% scan initiation, NPS −4 → +48/+52, 88% DAST adoption. Close with the lesson: IA was the slowest-feeling, highest-leverage work in the project.

### Pain point → decision → metric traceability

Use this table to answer "how do you know that decision worked?" — every shipped decision maps back to a named pain point and forward to a measured result.

| Pain point (§3) | Decision/move that addressed it (§6/§7) | Metric moved (§8) |
| ---------------- | ---------------------------------------- | ------------------ |
| 16-Step Scan Submission (Critical, 34% abandonment) | 4-step Scan Submission stepper (App → Modality → Config → Review) with progressive disclosure & smart defaults | Scan Initiation Rate ↑71% (39% → baseline+71%); Time to First Scan 4.2d → 1.3d |
| Modality Silos (Critical) | Application-first IA restructure — the single most contested decision (Move #1) | DAST Adoption 12% → 88% eligible; unified Findings view enables cross-modality remediation |
| Results Inaccessibility (High, 11 min/finding to parse) | Unified Findings list (severity ring, fix guidance) + "show the reasoning first" verdict transparency (Move #2) | PR finding engagement 11% → 74%; fix rate same sprint 18% → 61%; verdict acceptance 54% → 91% |
| No Executive View (High) | Portfolio Dashboard, board-ready and always live; "trend over snapshot" principle | Board PDF: 3 days → 1 click; NPS +52; CISO renewal conversation shifts cost → ROI |
| 4.2-Day Onboarding Cliff (Medium) | Smart defaults + progressive disclosure across App Overview and Scan Submission | Time to First Scan 4.2d → 1.3d |
| CI/CD Blind Spot (Medium) | Guided 3-click CI/CD setup flow, replacing 23 pages of API docs (Move #3) | Security gate adoption 4% → 68%; pipeline adoption 4% → 68% within 3 months of GA |
| *(persona need, not a listed pain point)* Priya's on-call/mobile context | Negotiated 3-week mobile MVP scoped to on-call triage only (Move #4) | Mobile = 18% of all sessions; on-call response time ↓52% |

### Anticipated tough questions (with how to answer them)

**"Why organize around the application instead of the modality? Didn't Product push back?"**
Yes — this was the most contested decision of the project. Product wanted to preserve modality tabs, likely because internal roadmap and ownership were still organized that way. You reframed the question around the user's mental model instead of the org chart, tested both structures, and let the data decide: 8 of 8 usability participants found applications faster in the app-first model. That data — not seniority or opinion — is what won the argument.

**"How did you get engineering to build mobile when they were reluctant?"**
Don't ask for the full scope up front. Engineering estimated 6 weeks for general mobile responsiveness; you negotiated a 3-week MVP scoped to exactly one high-value use case (on-call triage) instead of full parity. That de-risked the ask, shipped something real fast, and let the results (18% of sessions, 52% faster on-call response) make the case for further mobile investment — a small proof beats a big prototype.

**"These metrics are strong — 71% up, NPS from −4 to +52. How confident are you in them?"**
Be direct: these are the program's own reported GA analytics (2,400+ enterprise orgs), comparing post-launch behavior against a defined legacy-portal baseline — not an independently audited or randomized-control study. Say that plainly rather than overclaiming rigor you didn't have. What you can stand behind confidently is the directional story and the internal consistency: every metric traces back to a specific decision aimed at a specific validated pain point (see the traceability table above), not a vanity number picked after the fact.

**"How did you validate that showing the verdict's reasoning was what improved trust, and not something else changing at the same time?"**
Acknowledge the limit honestly: this was a before/after comparison on the same acceptance metric around the same change (54% → 91%), not a controlled A/B test. The qualitative signal was just as important as the number — security teams explicitly pushed back every time auto-triage shipped without an explanation, which is what motivated the change in the first place. The number confirmed what users had already told us directly.

**"How did you avoid building three different products for three different personas?"**
Role-aware views over role-specific products: one underlying data model and findings taxonomy, with the *emphasis* changing per role — a finding surfaces as an inline PR comment with fix guidance for Priya, as part of an aggregated risk score with compliance context for Morgan, and as a trend line inside the Portfolio Dashboard for David. Same data, three lenses — that's the "unified, not merged" principle in practice.

**"What's the biggest thing you'd do differently?"**
Two honest answers, pick based on what's being probed: (1) mobile was nearly cut entirely — in hindsight it should have been scoped and negotiated earlier instead of treated as a stretch goal; (2) the IA work felt slow in the moment (three weeks with nothing visibly "shipped") and needed active stakeholder management to protect that time — next time, frame that investment explicitly up front rather than defending it after the fact.

**"What would you prioritize next if you kept going?"**
The roadmap is prioritized already (§9): P0 is IDE-native fix suggestions (could lift fix rate past 80%) and anonymised peer benchmarking (a differentiator no competitor currently offers); P1 is collaborative triage (findings currently have a single assignee, which doesn't match real triage workflows); P2 is publishing the design token pipeline to kill design/production drift.

### Quick-recall numbers cheat sheet

- **Headline four:** Scan Initiation ↑71% · Time to First Scan 4.2d→1.3d (↓68%) · NPS −4→+48/+52 · DAST Adoption 12%→88%
- **The two "won the argument" numbers:** 8/8 (IA usability test) and 54%→91% (verdict acceptance)
- **The two negotiation numbers:** 6 weeks asked → 3 weeks delivered (mobile); 23 pages of docs → 3 clicks (CI/CD)
- **Per-role proof points:** AppSec PM DAST config 47min→8min; Developer PR engagement 11%→74%; CISO board report 3 days→1 click
- **Scale:** GA, 2,400+ enterprise orgs, 12-month engagement, team of 1 lead + 1 junior designer + 12 engineers + 2 PMs

---

## Build guidance (for building the case-study page)

**Recommended page order (recruiter-optimized, consistent with the other three case studies):**
1. **Hero** — title "Fortify on Demand. Reimagined." + one-liner + snapshot chips (role, platforms, team, timeline, "GA, 2,400+ Enterprise Orgs") + the 4 headline stat chips.
2. **Context & my role** — the acquisition-debt origin story and why it mattered now (§2).
3. **Problem** — lead with the problem statement, then the 6 validated pain points table with severity tags (§3).
4. **Research** — methods, then the 3 personas (Morgan Lee, Priya Ramesh, David Osei) as persona cards (§5).
5. **Process** — design principles, before/after IA diagram, and the 3 core flows (§6). This is the centerpiece.
6. **Solution** — the 4 lead-UX decisions that moved the needle, framed as numbered "moves" (§7).
7. **Outcome** — headline metrics + the per-role breakdown (AppSec PMs / Developers / CISOs) (§8).
8. **Reflection** — 3 lessons learned + the prioritized next-steps table (§9).

**What to emphasize for recruiters:**
- *Cross-functional advocacy under pressure:* winning the IA argument against Product (8/8 research participants), and negotiating mobile scope against Engineering reluctance — both show research-backed influence, not just craft.
- *Systems thinking at platform scale:* unifying three genuinely different products (SAST/DAST/MAST) around one mental model (the application) rather than merging them superficially.

For interview prep specifically (elevator pitch, 3-minute narrative, traceability table, anticipated questions), use §10 rather than trying to reconstruct a talk track from the raw sections above.
