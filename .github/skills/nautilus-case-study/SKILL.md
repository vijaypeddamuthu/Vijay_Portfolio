---
name: nautilus-case-study
description: "Source of truth and build guidance for the Nautilus case study — the vision, competitive research, and unified/composable design direction for the ArcSight SecOps portfolio (heritage Micro Focus, now OpenText). USE WHEN: building, editing, or reviewing the Nautilus / SecOps vision case-study page or its Featured Projects card; writing its copy; deciding what is NDA-safe to publish; recalling the ArcSight product set, the competitive analysis (Splunk, QRadar, Rapid7, Sumo Logic, Securonix, Exabeam), the five research tracks, the Lens/Workbench concepts, the four task flows, and the from-scratch design system. DO NOT invent shipped metrics — no hard Nautilus numbers were provided; treat any figure as illustrative or to-confirm until the user supplies verified data and NDA clearance."
---

# Nautilus Case Study — Source of Truth

> Status: **BUILT (v3) — live on the portfolio, real assets in place.** The end-to-end case study is implemented at `src/components/CaseStudyNautilus.jsx`, routed via `#/case/nautilus` in `src/App.jsx`, with a summary card in `src/components/Work.jsx` and styles in `src/App.css`. All real user-supplied screenshots are now embedded (hero Flashback/Present, Lens and Workbench concept screens, the real task-flow diagram, three wireframes, the design-system moodboard) and every image carries a uniform, light 5px NDA blur (`nda` prop on `Frame`, plus a matching `.cs-diagram__blur` overlay for the standalone task-flow figure). **v3 changes:** consolidated every inline NDA mention into **one single notice** in the hero (previously repeated in the hero and the Outcome section — the Outcome mention was removed); reordered the narrative for a cleaner first read — **Overview → Problem → Persona → The brief → Key moves ("How I led it") → Research (6) → Synthesis → Concept → Task flow → Wireframes → Design system → Outcome → Reflection** (Persona now follows Problem directly so the pain is humanized immediately, and Key moves now follows the Brief so "here's what I did" answers "here's what was asked," right before the deep research evidence); added bridging sentences between Persona → Brief → Key moves so the sections read as one continuous argument rather than a list of headings; tightened several image captions to match what the real screenshots actually show (Lens: severity/SLA/performance gauge; Workbench: SLA countdown; wireframes: MITRE-mapped severity, malware distribution, query builder/histogram; design system: six dark + three light theme directions). Outstanding: any verified quantitative metrics (see Gaps to fill) and confirmation of the "Crossway" vs "Nautilus" naming note if it should be addressed on-page.

## Snapshot

- **Project:** Nautilus — a unified, composable product vision for the ArcSight security-operations (SecOps) portfolio
- **One-liner:** Set a new UX vision for a cybersecurity portfolio stitched together from years of acquisitions — turning eight separately-built products into one coherent, composable platform.
- **My role:** Lead UX Designer — owned the vision, ran the competitive research, and pitched the direction to stakeholders; mentored and reviewed the designers delivering against it
- **Team I led/coordinated:** 3 designers (mentored + reviewed) and 6 Product Managers (requirements + sign-off)
- **Product family (ArcSight suite):** ArcMC, SOAR, ESM, Logger, Connectors, Recon, Intelligence, THUB
- **Org context:** heritage Micro Focus cybersecurity unit being stood up as a distinct cybersecurity business (later OpenText)
- **Two anchor concepts:** **Lens** (immersive dashboards) and **Workbench** (task-focused workspaces)
- **Scope tags:** SecOps, SIEM, Vision & Strategy, Competitive Analysis, Design System, Information Architecture

## How to use this file

- **§1–§9** are the case-study *content* (the source-of-truth narrative arc). **§5 (Research)** is the centerpiece — the competitive analysis and five research tracks are what make it interview-worthy; give them the most room.
- The **Build blueprint** section (bottom) is the authoritative **page structure to build from** — a section-by-section layout modeled on the Jennifer Wong *Dropbox Signup Journey* case study (kicker → statement-headline → body → visual), with draft headlines and the content/asset that feeds each block. Build in that order when cleared.
- **Additional process modules** (bottom) lists lead-UX-designer enrichments to document; each is tagged *documented* or *recommended — needs content/approval* and mapped to a blueprint section.
- **Gaps to fill** lists what the user still owes before the page can ship. Check every number against **NDA & metrics safety** before it goes public.

## NDA & metrics safety (read before publishing anything)

- All heritage Micro Focus / OpenText cybersecurity product work is **NDA-protected**. No real product screenshots, customer names, roadmap internals, or feature-level specifics unless explicitly cleared. Follow the same discipline the site already uses for the AppSec/SecOps/IAM teasers (state the NDA plainly, offer a walkthrough on a call).
- **No verified Nautilus metrics were provided.** Do NOT publish quantitative outcomes as shipped results. Any number in this file is either (a) illustrative for narrative, or (b) a placeholder to be confirmed by the user with source + NDA clearance.
- The resume-public SecOps line ("adoption rose 25% after launch," in `docs/content.md`) may or may not map to Nautilus specifically — **confirm with the user before attaching it to this case study.**

| Metric | Value | Source | Publish? |
| ------ | ----- | ------ | -------- |
| SecOps feature adoption | ↑ 25% | Resume (public) — product line, not confirmed as Nautilus | ⚠️ Confirm it maps to Nautilus before using |
| Faster design delivery (AI workflow) | ↑ 30% | Resume (public) — team-wide, not Nautilus-specific | ⚠️ Context only, don't imply it's a Nautilus result |
| Competitor count analyzed | 6 | User brief | ✅ Yes (process fact) |
| Products unified | 8 | User brief | ✅ Yes (process fact) |
| Designers mentored / PMs coordinated | 3 / 6 | User brief | ✅ Yes (process fact) |
| Any consistency score, SUS, task-time, adoption, time-to-build delta | TBD | Not provided | ❌ Do not publish until user supplies verified data |

---

## 1. Overview / summary
<!-- One-paragraph what-this-was. The elevator version. -->

Nautilus was the answer to a hard question: how do you make eight products that were built by different teams, on different platforms, at different times, feel like one product? The ArcSight suite grew through acquisition — each module strong on its own, but inconsistent in experience, visual language, and capability next to competitors. As the cybersecurity unit was being stood up as its own business, leadership asked for a new vision for the portfolio and a clear read on where we were behind the market. I led that work: the competitive research, the vision, and the composable direction — Lens and Workbench — that gave the whole portfolio one shape.

**At a glance**
- *Role:* Lead UX Designer — vision, competitive research, stakeholder pitch, design leadership
- *Portfolio:* ArcMC, SOAR, ESM, Logger, Connectors, Recon, Intelligence, THUB
- *Team:* 3 designers mentored, 6 PMs coordinated
- *Deliverables:* competitive analysis, UX research (5 tracks), a from-scratch design system, unified IA + navigation, four end-to-end task flows, low-fidelity wireframes for key screens

## 2. Role & context
<!-- Your role, team, timeframe, who you worked with, what you owned vs. influenced. -->

**What I owned**
- Defining the UX vision for the cybersecurity portfolio and pitching it to stakeholders.
- Running the deep competitive analysis across six market leaders and translating it into a direction ArcSight could act on.
- Setting the design language — the from-scratch design system — that the rest of the work hung off.

**What I led through others**
- Mentored 3 designers, split the vision into workstreams, reviewed their output, and carried it forward to stakeholders.
- Coordinated with 6 Product Managers to gather requirements, sanity-check feasibility, and get the direction reviewed and bought into.

**The org backdrop (why this mattered now)**
The cybersecurity unit was being separated out as its own business under Micro Focus (the lineage that later became OpenText). Customers were telling us they couldn't even tell that the different modules came from the same vendor — each one looked and behaved like it came from somewhere else, and each carried its own experience flaws. So the vision wasn't a cosmetic refresh; it was tied to standing up a credible, recognizable cybersecurity brand and product family.

**The three-part "why" (how leadership framed the future):**
- **Build the ArcSight portfolio** — treat the modules as one portfolio, not a bag of acquisitions.
- **Fusion** — a centralized portfolio layer to bring the products together.
- **Nautilus** — the unified, composable product: one shell, many modules, one experience.

## 3. Problem
<!-- The real friction. Who was hurting, what was slow/confusing, why it mattered. -->

**The core problem:** the suite grew by acquisition, so nothing lined up. Different teams solved the same problems in different ways, and users paid for it every time they crossed from one module to another.

**Problem statement (as framed with stakeholders):**
- **Staggered maturity and acquisition** — modules joined the suite at different times and different levels of design maturity.
- **Varied UI design philosophies** — no shared point of view on how the products should look or behave.
- **Varied web platforms and libraries** — built on different tech stacks, so even identical patterns were re-implemented and drifted apart.
- **Varied integration** — modules didn't hand off to each other cleanly; users lost context moving between them.
- **Varied resources** — uneven design and engineering investment across the modules.

**Who was hurting**
- **SOC analysts** — the people trying to detect, triage, investigate, and respond under time pressure — had to relearn navigation, terminology, and interaction patterns every time they pivoted between ESM, Recon, SOAR, and the rest.
- **The business** — competitors were shipping more coherent, more capable experiences, and customers couldn't recognize the ArcSight modules as one family.

**Why it mattered in a SecOps context**
In security operations, friction is not just annoying — it's risk. Every extra pivot, every re-learned pattern, every lost bit of context is time added to mean-time-to-detect and mean-time-to-respond while an incident is live.

## 4. Constraints & considerations
<!-- Technical, org, compliance, timeline, NDA limits, stakeholder pressures. -->

- **NDA:** can't show real product UI, customer data, or roadmap internals publicly (see NDA & metrics safety).
- **Brownfield, not greenfield:** this was a vision for products that already shipped to enterprise customers — it had to respect existing workflows and migration reality, not just draw an ideal.
- **Heterogeneous tech:** modules on different web platforms and component libraries meant the design system had to be adoptable incrementally, not a big-bang rewrite.
- **Distributed teams:** designers and 6 PMs across products who didn't sit together — alignment and a shared language were part of the job, not a side effect.
- **Org transition:** being stood up as a separate cybersecurity business added a branding and recognition requirement on top of the usability one.
- **Enterprise/compliance context:** SecOps buyers care about compliance reporting (PCI DSS, HIPAA, SOX, GDPR), audit trails, and accessibility (WCAG) — the vision had to keep those first-class.

## 5. Research & insights
<!-- The centerpiece. Competitive analysis + five research tracks + the analyst. -->

### 5a. Competitive analysis

**Purpose (as written for the study):** identify and evaluate the key usability strengths and weaknesses of competitors — citing best and worst practices with screenshots — so ArcSight could learn from what the market does well and fix what it does badly.

**Competitors covered:** Splunk, IBM QRadar, Rapid7, Sumo Logic, Securonix, Exabeam.

> Note on method (recommended to state on the page): the analysis was structured — each product evaluated against a consistent set of UX components (navigation/IA, dashboards, investigation/triage, alert handling, search, onboarding, visual consistency, accessibility) rather than a loose "look and feel" pass. That rigor is part of what makes this credible to an interviewer.

Per-competitor read (best/worst practices) and the takeaway for ArcSight:

| Competitor | Does well (adopt) | Does badly (avoid) | Takeaway for Nautilus |
| ---------- | ----------------- | ------------------ | --------------------- |
| **Splunk (Enterprise Security)** | Immense power; flexible dashboards; deep search; huge app ecosystem; the "notable events" incident-review workflow | Steep learning curve; SPL is code-like and gatekeeps junior analysts; dense, cluttered dashboards; high cognitive load | Keep the power, but hide it behind progressive disclosure — guided on top, depth underneath (informs **Lens**) |
| **IBM QRadar** | Strong correlation/offense engine; offense chaining; solid out-of-box use cases | Dated, fragmented UI; navigation scattered across tabs; heavy admin/rule-wizard overhead; inconsistent patterns | A single, consistent navigation and pattern set beats raw feature depth spread across disjointed screens (informs **IA + design system**) |
| **Rapid7 (InsightIDR)** | Cloud-native, clean modern UI; strong onboarding; guided investigations approachable for lean teams | Less customizable/deep; can feel opinionated for advanced users | Lower the barrier for junior analysts with guided flows — don't assume everyone is a Splunk power user |
| **Sumo Logic** | Cloud-native SaaS; modern dashboards; elastic scale; good log analytics | Security-specific case management/workflows lighter than pure SIEMs; query learning curve | Cloud-native, dashboard-first analytics as table stakes; but SecOps workflow (case/investigation) must be first-class, not bolted on |
| **Securonix** | UEBA leader; strong behavioral analytics; threat chains; risk scoring | UI/configuration complexity; workflow density | Behavior analytics and risk scoring are must-haves (informs the **UBA** task flow) — but present them without the density |
| **Exabeam** | **Smart Timelines** — session-based user timelines that auto-stitch events into a readable narrative; best-in-class investigation UX | Content/rule tuning effort; some modules feel separate | Narrative-driven, context-stitched investigation is the bar to beat — minimize analyst pivots and manual correlation (directly informs **Workbench**) |

**Net competitive takeaways:**
- The market's best investigation experiences (Exabeam timelines, Rapid7 guided flows) reduce analyst effort by *stitching context together* and *guiding the next step*. ArcSight's biggest gap was the opposite: it made analysts do the stitching by hand across modules.
- Power without approachability (Splunk, QRadar) loses the growing population of junior/lean-team analysts. Approachability without depth (Rapid7) loses the power users. Nautilus needed **both**, delivered through progressive disclosure.
- Visual and interaction consistency is itself a competitive feature — the cloud-native players felt like one product; ArcSight felt like eight.

### 5b. The five ArcSight UX research tracks

> All five tracks' detail has now been received, each with a dedicated deep-dive subsection: UX Lifecycle Gaps → **5b.1**, UX Maturity & Standards → **5b.2**, Table Stakes → **5b.3**, Information Architecture → **5b.4**, Design Pattern → **5b.5**. Below is the one-line framing plus a **meaningful outcome per track**; the subsections hold the full methodology, transcribed scorecards, and findings. Outcomes are stated as decisions/artifacts the research produced — not as fabricated metrics.

1. **UX Lifecycle Gaps** — benchmarked the **customer-experience lifecycle** (not the in-product analyst flow) across ArcSight and six competitors: how a buyer *evaluates, onboards, gets supported, engages the community, and learns the product*. Each stage was scored and color-coded so ArcSight's position vs. the competitor average was unambiguous. **Full detail in 5b.1.**
   - *Outcome:* five prioritized, actionable gaps for ArcSight — support expertise, onboarding, training accessibility, community activity, and free-trial friction — each with a specific recommendation. It reframed "UX" beyond the screens to the whole product journey, which is exactly the kind of finding that earns roadmap attention from PMs and leadership.

2. **UX Maturity & Standards** — assessed the *UX organization* behind each product (not the UI) against the **Nielsen Norman Group 6-stage UX Maturity model** (Absent → Limited → Emergent → Structured → Integrated → User-driven), plus team size/density and the standards/tooling each team had in place. **Full detail in 5b.2.**
   - *Outcome:* a candid read that placed ArcSight at **stage 3 — Emergent** ("functional and promising, but inconsistent and inefficient") with the *lowest UX density* of the group, while several competitors sat at stage 5–6. That gap became the evidence base for four concrete recommendations — **Team, Resource, Workforce, Process** — and the mandate to invest in a shared design system, standards, and UX operations.

3. **Table Stakes** — sorted SIEM/SecOps capabilities into a three-bucket product-prioritization frame — *what users ask for that no one ships yet*, *what everyone ships that ArcSight doesn't*, and *what everyone ships and users also ask for that ArcSight doesn't* — to separate genuine parity gaps from differentiation opportunities. **Full detail in 5b.3.**
   - *Outcome:* a defensible parity-plus-opportunity backlog for PMs — the "credibility deficit" (features every competitor already has) called out separately from the "leapfrog" ideas (features users want that no one has yet), so the vision earned roadmap slots on evidence, not taste.

4. **Information Architecture** — benchmarked ArcSight's navigation and terminology, feature area by feature area, against the leading brand for each (global nav, dashboards, event search, incidents, investigation, response/SOAR, analytics, reporting), rating position and ease of navigation. **Full detail in 5b.4.**
   - *Outcome:* a specific fix list dominated by one theme — ArcSight used **non-industry-standard terminology** ("Cases" for incidents, "Common Center" for investigation, "Respond" for SOAR, "Entities at risk" for analytics) and inconsistent nav visibility. The recommendation — adopt standard vocabulary and a consistent, always-visible primary navigation — fed the unified IA and shared vocabulary behind Lens/Workbench.

5. **Design Pattern** — catalogued each competitor's **navigation pattern** (position, type, app-switching behavior) and collected the **interesting interaction patterns** worth adopting. **Full detail in 5b.5.**
   - *Outcome:* build-ready direction for the new system — a **horizontal, top-positioned, unified single-window** navigation (the most common and most usable pattern in the market) over ArcSight's collapsible left-nav + separate-apps model, plus a shortlist of patterns to design (live search assistance, in-context wizards, chart builder from results, quick actions, customizable nav) under a progressive-disclosure principle. These seeded the **design system**.

### 5b.1. UX Lifecycle Gaps — how the research was done (detailed)

**What it actually looked at.** "Lifecycle" here means the *customer's experience of the product over time*, not the analyst's in-app workflow. We broke the journey a buyer/user goes through into five stages and evaluated ArcSight (shown as *Microfocus*) against six competitors — Sumo Logic, Exabeam, Rapid7, Securonix, Splunk, IBM QRadar — at every stage:

1. **Free Trial / Product Evaluation** — is there a trial, how long, and how heavy is the request to start one (number of steps + form length).
2. **Onboarding** — three sub-scores: Evaluation & Contracting (**EC**), Integration & Deployment (**ID**), Support Simplicity (**SS**).
3. **Support** — two sub-scores: Response Timeliness (**RT**), Tech Support Quality (**TSQ**).
4. **Community** — quality score + which channels the vendor offers (forums, Slack, blogs, videos, events).
5. **Training** — quality score + formats offered (guides/handbooks, online courses, workshops, private sessions, certification).

**How it was scored.** Each stage got a numeric score (roughly a 3.7–4.8 band) and a **Good / Bad / Neutral** color code, so the matrix reads at a glance. ArcSight's scores were then compared against the *average of all competitors* to quantify each gap as a percentage, turning a soft "our support feels weaker" into "support is 10.6% below the competitor average." Sub-scores (EC/ID/SS, RT/TSQ) kept the findings specific enough to act on rather than a single vague rating.

**The scorecard (transcribed from the research board):**

| Brand | Free trial | Trial friction | Onboarding (EC / ID / SS) | Support (RT / TSQ) | Community | Training |
| ----- | ---------- | -------------- | ------------------------- | ------------------ | --------- | -------- |
| Sumo Logic | 30 days | 2-step, short form ✅ | **4.5** (4.5 / 4.4 / 4.8) | **4.7** (4.8 / 4.7) | 4.1 | 4.6 |
| Exabeam | none | — | **4.6** (4.7 / 4.5 / 4.6) | **4.6** (4.6 / 4.6) | 4.3 | 4.3 |
| Rapid7 | days unknown | 2-step, short form ✅ | **4.6** (4.6 / 4.6 / 4.7) | **4.4** (4.5 / 4.4) | 4.1 | 4.1 |
| Securonix | none | — | **4.5** (4.8 / 4.6 / 4.1) | **4.5** (4.6 / 4.5) | 4.1 | 4.2 |
| Splunk | 60 days | 2-step, long form ⚠️ | **4.3** (4.2 / 4.3 / 4.3) | **4.3** (4.3 / 4.4) | 4.4 | 4.2 |
| IBM QRadar | 30 days | 3-step, auto-fill form ⚠️ | **4.2** (4.3 / 4.3 / 4.1) | **4.0** (4.0 / 4.1) | 4.0 ❌ | 4.1 |
| **ArcSight (Microfocus)** | **90 days** | **4-step, long form ❌** | **4.0** (4.3 / 4.2 / **3.7**) | **3.9** (4.0 / **3.9**) | 4.1 | **3.9 ❌** |

Read across the bottom row: ArcSight offered the *longest* trial (90 days) but behind the *heaviest* gate (4 steps, long form), and scored lowest of the group on Onboarding (4.0), Support (3.9), and Training (3.9).

**The five gaps + recommendations (the outcome).** Each finding paired the gap with a concrete fix:

| Gap | Finding | Recommendation |
| --- | ------- | -------------- |
| **Support expertise** | ArcSight scored **3.9 — 10.6% below** the competitor average | Build an experienced support team with the required expertise |
| **Onboarding** | Onboarding support **9% below** the competitor average | Simplify onboarding and deployment with adequate support |
| **Training resources** | Training materials are hard to locate and use (lowest training score, 3.9) | Structure and improve the accessibility of help and training resources |
| **Inactive community** | Despite ranking mid-pack (tied third), user feedback says the community page has almost no activity | Revive the community; treat activity, not just presence, as the metric |
| **Free-trial friction** | Longest trial (90 days) but a heavy 4-step, long request form | Collect only basic user information to start a trial |

**Why this matters for the case study.** This track is a strong interview asset because it shows the willingness to define "UX" broadly — the product experience is the *whole* journey (can I even try it, can I get it running, can I get help, can I learn it), not just the screens. It's quantified, benchmarked, and each finding lands on an owner with a specific action. On the page, the scorecard + the five-gap table is the concrete proof; lead with the "10.6% below average / longest trial, heaviest form" contrasts because they're memorable.

> NDA note: these are ArcSight's own competitive-research scores and competitor observations. Keep the visuals abstracted (rebuild the scorecard as a clean table/graphic, not the raw internal board) and confirm the numbers are cleared before publishing. The two source images live with the user — see Assets.

### 5b.2. UX Maturity & Standards — how the research was done (detailed)

**What it actually looked at.** This track turned the lens inward: it assessed the **UX organization and practice maturity** of ArcSight versus six competitors — how each company *staffs, standardizes, and operationalizes* design — rather than judging any single screen. The point was to explain *why* the products looked inconsistent: the maturity of the team producing them.

**The model.** Each brand was placed on the **Nielsen Norman Group UX Maturity model**, a recognized six-stage scale:

1. **Absent** — no UX; ignored or nonexistent
2. **Limited** — UX is unimportant/haphazard; rare and inconsistent
3. **Emergent** — functional and promising, but inconsistent and inefficient
4. **Structured** — partly systematic across the org, but variably effective
5. **Integrated** — comprehensive, pervasive, and universal UX
6. **User-driven** — UX is beloved, reproducible, and habitual across the company

**What was measured per brand.** Maturity stage; **UX team density** (UX headcount as a share of the org, tagged Low / Medium / High); team **composition** (which specialized roles exist — researcher, writer, architect, DS lead, etc.); and **key factors** (design-system strength, training, community, customer focus, aesthetic).

**The scorecard (transcribed from the research board):**

| Brand | Maturity stage | UX density | Team composition (as captured) | Key factors |
| ----- | -------------- | ---------- | ------------------------------ | ----------- |
| IBM QRadar | **6 — User-driven** | not available | not available | Strong design community; in-house trainings; good appreciation/support; strong design system |
| Rapid7 | **6 — User-driven** | 1.1% (Medium) | 1 researcher, 4 designers, 1 UX architect, 1 creative director | Strong appreciation/support; good design system; in-house training & docs |
| Splunk | **6 — User-driven** | 2.9% (High) | 11 leaders/managers, 46 designers, 3 researchers, 12 writers, 11 interns, 1 DS manager | Functionality; strong user community; highly minimalistic UI; online + in-person training; **no design-system documentation** |
| Exabeam | **5 — Integrated** | 1.4% (Medium) | 9 designers, Head of UX, creative direction, 2 instruction designers, DS lead | Strong functionality; strong customer focus; aesthetically good, minimalistic |
| Sumo Logic | **4 — Structured** | 1% (Medium) | 4 managers/directors, 6 researchers, 60 designers, 10 creatives, 6 writers, 2 interns, CX analytics | Customer focus; highly aesthetic, marginally minimal UI; internal training portal + docs |
| **ArcSight (Microfocus)** | **3 — Emergent** | **0.6% (Low)** | 39 UX designers, 14 UX leads & other contributors | Industry-standard tools/resources across teams; online training & certification |
| Securonix | **3 — Emergent** | 0.9% (Low) | 6 designers, 2 creative directors, 1 writer | Customer-focused; design group only ~6 months old; aesthetically low UI |

**The headline finding.** ArcSight sat at **stage 3 (Emergent)** — the work was "functional and promising" but **inconsistent and inefficient** — while IBM QRadar, Rapid7, and Splunk were already at **stage 6 (User-driven)**. The uncomfortable detail: ArcSight wasn't short on people (39 designers + 14 leads) but had the **lowest UX density (0.6%)** relative to org size, and lacked the standards, roles, and operations that move a team up the scale. Maturity is about *system and practice*, not raw headcount.

**The recommendations (the outcome).** The findings resolved into four investment areas:

| Area | Recommendation |
| ---- | -------------- |
| **Team** | Define dedicated UX roles (researcher, designer, writer…); stand up training + UX certifications; run an internal UX community (programs/activities/forums) |
| **Resource** | Make the design system genuinely usable — add context & usage, patterns, guidance for new usage, and openness to contribution from external teams |
| **Workforce** | The work is promising but done inconsistently/inefficiently and lacks industry-standard UX tooling — grow the UX workforce and tooling to raise solution quality |
| **Process** | Standardize UX research t-shirt sizing and work items (User vs. Quality story); hold dedicated design discussions with stakeholders/SMEs; build a repository for research artifacts; ship standardized templates for stakeholder communication |

These four areas were also framed explicitly as **"UX standards we could take from our competitors"** — i.e., each recommendation traces to a practice a higher-maturity competitor already had (Resource/design-system depth from Rapid7/QRadar, dedicated roles and community from Splunk, etc.). The ask wasn't abstract self-improvement; it was "adopt what the stage-6 teams already do."

**Why this matters for the case study.** This is the track that shows *systems-level design leadership*, not just craft. Diagnosing the org's maturity with a recognized industry model — and being honest that ArcSight was at stage 3 — is exactly what a hiring manager for a lead/principal role wants to see: someone who can look past pixels to the operating model that produces them, name the gap with evidence, and prescribe fixes across team, tooling, and process. On the page, pair the maturity ladder (ArcSight at 3, competitors at 5–6) with the four recommendation cards; the "lowest density despite decent headcount" insight is the memorable one.

> NDA note: these are ArcSight's internal competitive-research assessments, including headcount observations of competitors (estimated/inferred). Rebuild as a clean graphic, present competitor team numbers as approximate, and confirm clearance before publishing. Source images live with the user — see Assets.

### 5b.3. Table Stakes — how the research was done (detailed)

**What it actually looked at.** A product-strategy pass that answered a blunt question: *where are we simply not competitive, and where could we leap ahead?* Rather than one flat wishlist, features were sorted by two axes — **does the market already ship it** and **do users actually ask for it** — into three buckets. It's a table-stakes / opportunity frame (Kano-adjacent) that keeps "we're behind" separate from "we could lead."

**The method — three inventories on one taxonomy, cross-referenced (an A/B/C Venn).** The three-bucket summary wasn't opinion; it was the intersection of three separate inventories, each organized by the *same* SecOps capability taxonomy so they could be laid side by side and coded:

- **(A) "What everyone has"** — a competitor **feature-parity inventory**: every capability the market treats as baseline. It ran deep — e.g., MITRE ATT&CK technique coverage in out-of-the-box rules, real-time (sub-second) ingestion, self-learning detection, the full compliance-framework list (SOX, HIPAA, GDPR, PCI DSS, FISMA, NIST 800-53, FERPA, ISO 27001, GLBA, CCPA), deployment models (on-prem, public/private/hybrid cloud), threat-intel feeds, risk scoring per alert/asset, SOAR/response automation, and community marketplaces for shared detections/playbooks.
- **(B) "What end-user needed"** — a **voice-of-customer / analyst research** inventory: what SOC analysts and customers actually described needing, in their own words.
- **(C) "What ArcSight doesn't have"** — an honest **self-audit** of ArcSight's own gaps against the same taxonomy.

The shared taxonomy (six SecOps capability areas, plus Help/Support on the user side):
1. **Log Management & Correlation** · 2. **Investigation** · 3. **Threat Detection** · 4. **Platform / Infrastructure / Misc** · 5. **Alert, response & remediation** · 6. **Real-time data visualization & analytics** · (+ **Help / Support** in the user research)

Each gap was then **tagged by which circles it fell into** — the codes on the board read **(AC)**, **(ABC)**, **(B)**, etc.:
- **(AC)** — competitors have it *and* ArcSight lacks it → the "everyone has and we don't" parity gaps (automated data normalization, one-click OOTB connectors, cloud-native ingestion, self-learning detection, natural-language search, the compliance frameworks, a customer maturity model, fast cloud sign-up, SOAR-independent guided remediation).
- **(ABC)** — competitors have it, users ask for it, *and* ArcSight lacks it → the single most urgent gap: **incident architecture diagrams** (Securonix/Exabeam already ship this).
- **(B)** — users ask but no competitor ships → the differentiators: instant troubleshooting answers, and adding client requests straight to the analyst's to-do list.

That Venn coding is what produced the three buckets below.

**The three buckets and the features in each (transcribed from the board):**

**Voice-of-customer signal worth keeping (real analyst language from "what end-user needed"):**
- The **L1 analyst reality:** "clicking overload," ticket-queue triage, first- and second-line triage, customer interaction, and creating architecture diagrams by hand.
- **Investigation workflow, as described:** monitor queue → triage alerts → investigate → acknowledge client requests → forward to the right team; plus use-case tuning, playbook development, and health checks on each SIEM tool.
- **Tuning is a *conversation*, not a setting:** "we notice XYZ is triggering frequently and needs adjusting," "there's a change, or maybe it's normal behavior, and we need to discuss it." Detection tuning is collaborative and recurring.
- **The culture shift:** "clients need that instant answer, even instant response — work culture has changed." This, plus "add client requests straight to your to-do list," are the two items flagged **(B)** that became the *users-ask/no-one-has* differentiators in the summary.
- ArcSight-specific reality checks users volunteered: "we use the **ArcMC** dashboard for health monitoring," "we use **ArcSight** for automation so it can monitor itself and create reports," and the weekly grind of **scheduled reports presented to clients**.

**The three buckets and the features in each (the cross-referenced summary, transcribed from the board):**

**1. Users ask and no one has** — *white space / potential differentiators.* Solve these to lead the market:
- Instant answer and response for any troubleshooting
- Client request getting added directly to the analyst's to-do list

**2. Everyone has and we don't** — *the credibility deficit; parity gaps to close first:*
- Automated data normalization/mapping for new data integrations
- Pre-built / out-of-the-box one-click connections for data ingestion and normalization
- Real-time event ingestion via cloud-native log-streaming services
- Automated, self-learning detection beyond out-of-the-box rules
- Compliance frameworks to support: NIST 800-53, FERPA, ISO 27001, GLBA, CCPA
- Natural-language search
- A maturity model that lets customers benchmark their own success using the SIEM
- Fast customer sign-up (via cloud vendor) and quick start
- Remediation suggestions / guided responses **without** requiring a SOAR connection

**3. Everyone has, users ask, and we don't** — *double-confirmed urgent gaps (market + user demand):*
- Architecture diagrams that depict the structure of the resources involved in an incident — **Securonix and Exabeam already support this**

**How to read it.** Bucket 2 is the honest "we're behind" list — mostly ingestion, cloud-native, compliance, and guided-response parity that competitors treat as baseline. Bucket 3 is the *most urgent* because both the market and users confirm the gap (incident architecture diagrams). Bucket 1 is the upside — unclaimed ideas (instant troubleshooting, request-to-task) where ArcSight could differentiate rather than catch up.

**Why this matters for the case study.** This track shows product-management-literate design thinking backed by real research rigor: two separate inventories — a competitor parity catalogue *and* voice-of-customer analyst research — organized on one taxonomy and cross-referenced, so every gap is evidenced on both "market has it" and "users want it" rather than opinion. It's the piece that made the vision credible to 6 PMs — it hands them a roadmap-ready backlog with a built-in rationale for sequencing (close bucket 3 and 2 to be credible; invest in bucket 1 to lead). On the page, show the three-bucket frame with a few example features each, and quote one or two lines of real analyst voice ("clicking overload," "clients need that instant answer") — the authentic language is what makes it land; call out the compliance list and the Securonix/Exabeam incident-diagram gap as the concrete, memorable proofs.

> NDA note: bucket contents are ArcSight's internal competitive/roadmap analysis. Confirm clearance before publishing feature-level gaps; "GLBA" appears as "GBLA" in the source image (transcribed as the correct GLBA). Source images live with the user — see Assets.

### 5b.4. Information Architecture — how the research was done (detailed)

**What it actually looked at.** A navigation-and-terminology benchmark, feature area by feature area. For each core SecOps feature the study named the **leading brand** for that feature's IA, described what ArcSight does (terminology, where it sits in the nav, how easy it is to reach), and wrote a **recommendation**. The scope was deliberately narrow: *"data collection was based purely on the general usability of identifying and navigating to a specific location"* — i.e., can a user *find* the thing, not whether the feature itself is good.

**The benchmark (transcribed from the board):**

| Feature | Leading brand (why) | ArcSight today | Recommendation |
| ------- | ------------------- | -------------- | -------------- |
| Global navigation | Splunk — top nav, labels always visible; app switcher is a clearly labelled dropdown, no room for error | Well positioned, easy to switch apps, but **menu label visibility is inconsistent** | Let users explore all menu items with easier mouse actions |
| Dashboards & visualization | IBM QRadar & ArcSight — default landing page, in primary nav, standard terminology | On par | More out-of-the-box dashboards |
| Event search | Securonix — standard terms; search sits in the masthead, reachable anywhere | Standard term; L1 primary nav; very easy | Search landing page should let you start a new search with history and its actions (results, query, criteria, scheduled searches) |
| Incidents | Splunk — standard terminology, primary level | Calls it **"Cases"** (non-standard); L2 primary nav; very easy | Use standard **"Incidents"** |
| Investigation | Rapid7 — common terminology in primary nav, fast to find | Calls it **"Common Center"** (non-standard); L2 primary nav; easy | Use standard **"Investigation"** |
| Response (SOAR) | ArcSight — easy to locate, primary level | Calls it **"Respond"** (non-standard); L1 primary nav; very easy | Use standard **"SOAR"**; cut load time for app switching |
| Analytics | Securonix — all features under one primary nav, easy terminology | Calls it **"Entities at risk"** (non-standard); **the nav design changes entirely on this page** | Consistent page nav; standard **"Analytics"**; group analytics parameters in one place |
| Reporting | IBM QRadar — simple terminology, persistent tab in primary nav | Standard term; L1 — but **labels hide when the nav is collapsed** | Keep primary nav visible at all times; richer Reports home; let users create custom report groups |

**The headline finding.** ArcSight's navigation *positions* were mostly fine (things sit at the right level and are reachable), but its **terminology was consistently off-industry** — Cases, Common Center, Respond, Entities at risk — forcing users to mentally translate. Add inconsistent label visibility (labels vanish when the nav collapses) and one page where the navigation design changes entirely, and the through-line is clear: the IA made users relearn the product. The study was even-handed — ArcSight was itself named a *leading* brand for Response and dashboards, so it reads as fair, not a hit piece.

**Why this matters for the case study.** It's concrete, benchmarked, and every finding ships with a specific recommendation. The terminology insight is the memorable one — "we called incidents 'Cases' and investigation 'Common Center'" is exactly the kind of tangible, fixable problem that shows a designer who sharpens the vocabulary users actually think in. This research directly justified the unified IA and shared vocabulary behind Lens and Workbench.

> NDA note: the source slide includes competitor product screenshots. Rebuild as a clean table and abstract or omit the screenshots unless cleared. Source image lives with the user — see Assets.

### 5b.5. Design Pattern — how the research was done (detailed)

**What it actually looked at.** Two things: (1) a **navigation-pattern teardown** of all seven products — where the nav sits, its type, and how app-switching works — and (2) a shortlist of **interesting interaction patterns** worth adopting.

**Navigation-pattern teardown (transcribed from the board):**

| Product | Navigation pattern | Notable behavior |
| ------- | ------------------ | ---------------- |
| ArcSight (Microfocus) | Vertical, left side; collapsible detailed left nav | App switcher fixed on the collapsible left nav; expandable submenus |
| IBM QRadar | Top; horizontal primary nav at second-level masthead | Hamburger (top-left) shows all functions; no internal redirect to switch apps; hierarchical multilevel nav at top |
| Rapid7 | Global nav persistent in top bar; vertical collapsible left nav for functions | App-switcher dropdown at top; left nav for primary functional nav |
| Splunk | App menu in top bar; functional tabs horizontal at second-level masthead | App menu is a global app-switch; admin/messages/settings also a mega menu; hierarchical multilevel nav |
| Exabeam | Primary nav bar persistent at top | Minimalistic controls, well positioned; minimize/maximize/hide; no redirection between products |
| Sumo Logic | Primary features as tabs at top-level masthead; dropdown for users/integrations | Cannot switch between apps; primary nav is form-like |
| Securonix | Mega menu at top; second-level masthead for secondary nav | Mega menu switches apps with primary functional nav hierarchically; all secondary nav at top |

**Key takeaways (as written):**
- **Horizontal, top-positioned navigation** is the most common pattern among competitors.
- A few competitors keep **capabilities as separate products that must be launched individually** — the *less* usable model.
- **Unified navigation — a single-window application — is more usable than distributed capabilities.** (The direct mandate for the composable Nautilus shell, and a knock on ArcSight's collapsible left-nav + separate-apps model.)
- **Minimize ink and screen control**; surface advanced actions through **progressive disclosure**.

**Interesting patterns to adopt (the "steal these" list):**
- Search input with **live assistance**
- **Simplified wizards without switching context**
- **Field-level lookup and statistics**
- **Chart builder from search results**, with chart recommendations based on the data
- **Quick actions** to run the most-used features from anywhere
- **Customizable navigation** menu items

**Why this matters for the case study.** This is where the competitive research turns into build-ready design direction. The navigation teardown produced a defensible *why* for the single biggest structural decision in the whole vision — go **top, horizontal, unified, single-window** — and the interesting-patterns list gave the team concrete, modern interactions to design against. On the page, pair the seven-product nav comparison with the "unified beats distributed" takeaway; it's the cleanest line from research straight into the Nautilus concept.

> NDA note: the navigation teardown includes competitor product screenshots. Rebuild as a clean table and abstract or omit screenshots unless cleared. Source images live with the user — see Assets.

### 5c. The analyst (persona) — *synthesized, in the build (confirm/replace)*

A primary persona is now on the page: **Maya, a Tier-1→2 SOC analyst at a managed security provider** — grounded in the real analyst voice from the Table Stakes research ("clicking overload," living in the ticket queue, context lost at every hand-off, drawing incident diagrams by hand, alert fatigue). Goals: clear the queue without losing context, escalate cleanly, keep clients informed. A **SOC manager** is named as the secondary persona (portfolio visibility + reporting). This is a *synthesized* persona, not a researched one — **confirm the details or replace with a real persona** before treating it as validated. The competitive findings imply the two design targets it serves: a junior analyst who needs guidance and stitched context, and a senior/manager who needs depth and portfolio-wide visibility.

## 6. Process
<!-- How you worked: concepts, IA, flows, wireframes, design system. -->

### 6a. The two anchor concepts

- **Lens** — *immersive dashboards to identify trends, determine priorities, and explore activity across the platform.* The analytics-first entry point: you land, you see what matters, you spot the trend, you decide where to look. This is where the "keep the power, lose the clutter" lesson from Splunk/Securonix lands.
- **Workbench** — *focus areas catering to groups of tasks, to minimize the pivots required to complete a goal.* The task-first workspace: instead of hopping ESM → Recon → SOAR and losing context each time, the analyst stays in one workbench built around the job. (This answers the in-product pivot problem surfaced across the competitive analysis and IA research — distinct from the customer-lifecycle *UX Lifecycle Gaps* track, which is about evaluation/onboarding/support/community/training.)

Together they define a durable product language for the whole portfolio: **Lens to see, Workbench to act.**

### 6b. Task flow diagrams — four core SecOps scenarios

End-to-end flows were drawn for the four jobs that define this market, deliberately spanning modules to prove the composable vision holds across everything a SOC actually does:

1. **Log management & compliance** (Logger / Connectors / ArcMC territory)
2. **Realtime correlation** (ESM territory)
3. **UBA — user behavior analytics** (Intelligence / behavioral analytics)
4. **SOAR — orchestration & response**

> The actual flow diagrams live with the user and will be uploaded. When they arrive, transcribe each into a Mermaid diagram (mirror how the SAST skill transcribes its FigJam board) and save the source exports to `src/assets/`, logged in the Assets table.

### 6c. Low-fidelity wireframes + navigation exploration

- Low-fidelity wireframes for the key screens, built on the new design system, showing how Lens and Workbench render in practice.
- A navigation structure exploration that operationalizes the unified IA from research track 4.

### 6d. Design system, from scratch

Built a new design system for the portfolio — tokens, components, and canonical patterns — seeded by the Design Pattern research. It's the connective tissue: it makes eight products on different stacks look and behave like one, which is exactly what customers said they couldn't perceive before. Designed for incremental adoption across heterogeneous platforms rather than a single rewrite.

> **Received and embedded.** A moodboard exploration (`Nautilus-Design-System.png`) showing six palette/theme directions (Raspberry Candy, Raspberry Midnight, Mesmerising Caribbean, Regal Tang, Robin Egg, Purple Marbles), each with type, color scale, component swatches, and a full dashboard mock to pressure-test the theme at real, data-dense scale — plus three light-theme dashboard mocks (Light Sky, Cherry Light, Bellflower Light). This is the direction-finding step that came before the tokens/components/patterns described above. Final tokenized system + governance model are still to be uploaded if the user wants them shown separately.

## 7. Solution
<!-- What the vision proposed and what was enhanced. NDA-safe. -->

The vision reframed the portfolio around **Lens** (see) and **Workbench** (act), on top of a shared design system and a unified IA. Concretely, the direction:

- Gave the eight modules **one visual and interaction language**, so a user recognizes them as one product family (the branding/recognition need from the org transition).
- Replaced cross-module pivots with **task-centered workbenches**, cutting the context loss the lifecycle research exposed.
- Made **analytics-first dashboards (Lens)** the front door — trends and priorities before raw data — informed by what the best competitors do and stripped of the density the worst ones carry.
- Closed identified **table-stakes gaps** (global search, saved views, guided investigation, unified case management, consistent theming/accessibility) that competitors already shipped.
- Enhanced the individual products against the new system, addressing experience and consistency issues that predated the vision.

> Positioning for the page: this is a **vision + strategy + system** case study, not a single-screen redesign. The proof is the thinking — competitive rigor, the research-to-concept line, and a design language durable enough to unify a portfolio. Say that plainly.

## 8. Outcome & impact
<!-- Process outcomes are safe. Hold all metrics until verified. -->

**Process & leadership outcomes (safe to tell as story):**
- Delivered a portfolio-wide UX vision (Lens + Workbench) that stakeholders reviewed and carried forward as the direction for the cybersecurity products.
- Produced a structured competitive analysis of six market leaders that gave PMs a defensible parity list and gave leadership a shared reason to invest.
- Built a from-scratch design system and unified IA that let eight products — on different stacks — move toward one recognizable experience.
- Led and mentored 3 designers and coordinated 6 PMs to deliver the vision on time.

**Metrics:** *none verified for publication.* See NDA & metrics safety. If the user supplies verified figures (adoption, consistency/audit scores, usability-test task-time or SUS deltas, time-from-handoff-to-build), add them here with source and NDA clearance — otherwise the page stays qualitative and still stands on the strength of the thinking.

## 9. Reflection / what I'd do next
<!-- Lessons, follow-ups, what you'd change. -->

- **Biggest lesson:** consistency is a feature. The single most-cited customer complaint wasn't a missing capability — it was that the modules didn't feel like one product. A shared language did more for perceived quality than any one new feature.
- **What worked:** anchoring the vision in structured competitive research. "Here's exactly where we're behind and why" turned a subjective design pitch into a business case stakeholders could fund.
- **What I'd measure next:** post-adoption analyst task-time across module boundaries, a portfolio consistency/audit score before vs. after, and design-system adoption rate across the product teams — the numbers that would prove the vision landed.

---

## Build blueprint — page layout & structure (WHEN CLEARED TO BUILD)

**Reference:** model the page on the Jennifer Wong *Dropbox Signup Journey* case study (`https://www.jenniferywong.com/work/dropbox-signup-journey`). Adopt its **structure and rhythm**, not its content.

### The layout pattern (the signature move)

Every content section follows the same three-beat rhythm:

1. **Kicker** — a one- or two-word label (e.g., *Problem*, *Research*, *Concept*, *Validation*).
2. **Statement headline** — a full **sentence** that states the insight/decision itself, not a noun label. This is the defining move of the reference layout. Example: not "Problem" → "Overview," but "Eight products, built by different teams on different stacks — and users paid the price at every seam."
3. **Body + visual** — 1–3 short paragraphs of support, then the artifact (table, diagram, before/after, scorecard). Long narrative pages use horizontal rules between sections.

The page opens with an **Overview** paragraph and a compact **meta block** (Role / Timeline / Team / Platform), then an **Impact/at-a-glance** row, then leads with the summary arc (Problem → Goals → the vision in one line) *before* the deep research dive. That "answer first, then unpack" order is straight from the reference.

### Section-by-section (draft statement-headlines ready to use or refine)

> Sections tagged **[enrichment]** need content or approval before they can ship (see Additional process modules + Gaps to fill). Sections without a tag are fully sourced in this file. Keep all draft headlines in the site voice (`docs/content.md`); tighten before shipping.

| # | Kicker | Draft statement-headline | Feeds from | Visual |
| - | ------ | ------------------------ | ---------- | ------ |
| 0 | Hero | **Nautilus — turning eight acquired security products into one composable platform** (H1 title + one-liner sub) | Snapshot, §1 | Abstracted hero graphic (Lens/Workbench motif); no real UI |
| 1 | Overview | *"How I set the UX vision for a cybersecurity portfolio stitched together from years of acquisitions."* + meta block (Role · Timeline* · Team: 3 designers, 6 PMs · Platform: web) | §1, §2 | — |
| 2 | Impact | **8 products unified · 6 competitors analyzed · 5 research tracks · a design system from scratch** (process facts as the headline; hard metrics gated) | Snapshot, §8 | Stat row |
| 3 | Problem | **Eight products, built by different teams on different stacks — and users paid the price at every seam.** | §3 | 5-part problem statement graphic |
| 4 | Goals / the brief | **Set a new vision for the portfolio — and prove, with evidence, where we were behind.** | §2 (three-part why), brief | Build → Fusion → Nautilus diagram |
| 5 | My role & how I ran it | **Leading the vision while mentoring the team that delivered it.** | §2, process-module *Research plan/Design ops* | Operating-model / workstream diagram [enrichment] |
| 6 | Research · competitive analysis | **Six competitors, one structured teardown of what to steal and what to avoid.** | §5a | Best/worst-per-competitor table |
| 7 | Research · lifecycle | **Our onboarding and support scored below every competitor average — "UX" clearly meant more than screens.** | §5b.1 | Lifecycle scorecard + five-gap table |
| 8 | Research · maturity | **We were a stage-3 UX organization competing against stage-6 teams.** | §5b.2 | NN/g maturity ladder + 4 recommendation cards |
| 9 | Research · table stakes | **An A/B/C gap Venn that separated "we're behind" from "we could lead."** | §5b.3 | Three-bucket frame + one analyst quote |
| 10 | Research · IA | **We called incidents "Cases" and investigation "Common Center" — users had to translate our own product.** | §5b.4 | IA benchmark table (terminology column highlighted) |
| 11 | Research · design pattern | **Unified, single-window navigation beats a bag of apps you launch separately.** | §5b.5 | 7-product nav teardown + "steal these" list |
| 12 | Synthesis | **Five research tracks, distilled into the principles Nautilus is built on.** | process-module *Design principles* | 4–6 named principles [enrichment] |
| 13 | Concept | **Lens to see, Workbench to act.** | §6a | Lens + Workbench concept boards |
| 14 | Users | **Designing for the analyst who lives in the queue — and the manager who reports on it.** | process-module *Personas/journey* | Persona cards + current→future journey [enrichment] |
| 15 | Task flows | **Proving the composable vision across the four jobs a SOC actually does.** | §6b | 4 Mermaid flows (Log mgmt & compliance, Realtime Correlation, UBA, SOAR) [asset pending] |
| 16 | Design system | **One design language so eight products finally look like one.** | §6d | Tokens/components + governance/adoption model [asset pending] |
| 17 | Wireframes | **Low-fi wireframes that made Lens and Workbench tangible.** | §6c | Abstracted wireframes + nav exploration [asset pending] |
| 18 | Validation | **Pressure-testing the concepts before betting the roadmap on them.** | process-module *Validation* | Usability/heuristic/accessibility findings [enrichment] |
| 19 | Outcome | **A vision leadership carried forward — and a shared language the teams could build on.** | §8 | Process/leadership outcomes; metrics only if verified |
| 20 | Vision of the future | **From a bag of acquisitions to a platform that grows one chamber at a time.** | §7, naming metaphor | Composable roadmap (crawl/walk/run) [enrichment] |
| 21 | Reflection | **Consistency turned out to be the feature customers wanted most.** | §9 | — |

\* Timeline/duration still to confirm (Gaps to fill).

**Adaptation note vs. the reference:** the reference front-loads Solution and Result before the deep research because it has hard revenue metrics. Nautilus is a *vision/strategy* study whose proof is the thinking, so it leads with Problem → Goals → a one-line vision preview, then makes **Research the centerpiece** (sections 6–11), and treats Outcome as qualitative. Keep that weighting.

### What to emphasize (why this shortlists a profile)

- *Vision & strategy, not just screens* — a 0→1 portfolio vision is rare in IC portfolios. Lead with it.
- *Competitive-intelligence rigor* — six competitors, consistent frameworks, and a clean line from finding → concept. Strongest differentiator; give the research the most page space.
- *Systems thinking at portfolio scale* — unifying eight products on different stacks via a design system + IA.
- *Design leadership* — scoping the research, mentoring 3 designers, coordinating 6 PMs, pitching to leadership. Name it plainly (matches the resume's "leadership scope I've carried for years").
- *Business literacy* — acquisition integration, org separation, brand recognition, roadmap prioritization.
- *A durable framework* — Lens/Workbench is a memorable, repeatable product language. Interviewers remember frameworks.

### Tone

First-person, plain, specific — match `docs/content.md` and the tone guide in `docs/portfolio-brief.md`: no buzzwords, no rule-of-three crutches, varied sentence length, no em-dash-as-filler tic. Attach any metric to a specific point; never stack them like a banner. The statement-headlines should sound like a person stating a finding, not a marketing tagline.

### Do NOT

Invent shipped metrics, show real product/customer UI, or present illustrative numbers as results. Keep every visual abstracted (rebuild scorecards/benchmarks as clean graphics; competitor screenshots stay out) unless the user clears specific assets.

### Wiring (mirror the SAST card)

When built: add a `PROJECTS` entry in `src/components/Work.jsx` with `caseStudyHref: '#/case/nautilus'`, and a `route.startsWith('/case/nautilus')` branch in `src/App.jsx` (see how `#/case/sast` is wired). Reuse the `CaseStudy.jsx` `Skeleton`/`Frame` placeholder pattern for NDA-safe wireframes until real assets are cleared. Given the length, consider a lightweight in-page section nav / scroll-spy so recruiters can jump between research tracks.

---

## Additional process modules to document (lead-UX-designer enrichments)

Thinking as the lead designer: a portfolio-vision story is most convincing when it shows the *whole* operating arc, not just the research decks. Below are the process modules that would make this case study stand out. Each is tagged and mapped to a Build-blueprint section. **Do not fabricate** any of these — capture the real version from the user, or mark as illustrative and confirm.

**Already documented (in this file):**
- Competitive analysis (§5a) · the five research tracks (§5b.1–5b.5) · Lens & Workbench concepts (§6a) · four task flows (§6b) · wireframes + nav exploration (§6c) · design system (§6d).

**Recommended to add (confirm/approve with the user):**

1. **Discovery & framing** → *blueprint §4/§5.* The leadership brief and stakeholder interviews (the 6 PMs) that scoped the mandate; how the problem was framed before any research. Shows the work started with alignment, not assumptions.
2. **Research plan & operating model** → *§5.* How the five tracks + competitive analysis were scoped, divided across 3 designers, and reviewed on a cadence. This is the clearest evidence of *design leadership* (planning and running a research program, not just doing it).
3. **Synthesis → design principles** → *§12.* Affinity-mapping the findings from all tracks into 4–6 named principles (e.g., *one language across modules · guide the junior, empower the senior · context follows the analyst · see before you dig · standard words, not our words*). The connective tissue between research and design; a named principle set reads as senior thinking.
4. **Personas & segments** → *§14.* SOC analyst tiers (L1 triage / L2 investigation / L3 threat-hunt), the SOC manager (oversight/reporting), and the buyer/CISO. Grounds the abstract vision in real people; the L1 "clicking overload" voice from §5b.3 is a ready seed.
5. **Current- vs future-state journey map** → *§14.* Visualize the cross-module context loss today vs. the Workbench continuity tomorrow. One before/after journey makes the pivot problem tangible.
6. **IA & taxonomy method** → *§10/§13.* How the unified IA and standardized vocabulary were derived — card sorting and/or tree testing to fix Cases→Incidents, Common Center→Investigation, etc. Turns "we renamed things" into "we validated the rename."
7. **Concept ideation & naming** → *§13/§20.* Sketches, workshops, and the naming rationale for Lens, Workbench, and Nautilus (the shell-grows-in-chambers metaphor — confirm before presenting as official). Shows divergent thinking before convergence.
8. **Design-system foundations & governance** → *§16.* Tokens, core components, the contribution model, and how adoption was planned across heterogeneous stacks (incremental, not big-bang). The governance angle is what separates a component library from a real system.
9. **Prototyping** → *§17/§18.* Low-fi → interactive prototype used to pitch and test the concepts. Even a description of fidelity progression helps.
10. **Validation** → *§18.* Usability testing, heuristic evaluation, and a WCAG accessibility pass on the new patterns (accessibility is a genuine differentiator per `docs/portfolio-brief.md`). State method + what changed as a result.
11. **Stakeholder storytelling & buy-in** → *§4/§19.* The vision pitch: how it was sold to leadership and the 6 PMs, and how it secured roadmap slots. The reference case study leans hard on cross-functional influence — mirror that (e.g., how evidence turned a subjective pitch into a funded direction).
12. **Roadmap & phasing** → *§20.* Crawl/walk/run sequencing tied back to the table-stakes buckets — close parity gaps first (bucket 2/3), then invest in differentiators (bucket 1). Shows product judgment.
13. **Success-metrics framework** → *§2/§19.* The measurement plan even if not yet measured: design-system adoption, portfolio consistency/audit score, cross-module task-time, SUS. Signals outcome-orientation without fabricating results.
14. **Design ops & mentoring** → *§5.* How the 3 designers were coordinated and grown (critique cadence, review model). Ties directly to the resume's leadership-scope narrative.

**Standing enrichment assets to request:**
- A **vision artifact** (north-star statement / one-page vision leadership signed off).
- A **before/after of one representative screen** (NDA-safe redraw: inconsistent "before" → unified "after"). One concrete visual anchors the whole abstract vision.
- The **composable definition** — what "composable" meant technically (shared shell / module federation / design-system-driven front ends) and how design partnered with engineering.
- **Verified, NDA-cleared metrics** (adoption, consistency score, task-time/SUS deltas, handoff-to-build time).

## Assets
<!-- List image files, their paths, and what each shows. Note NDA status per asset. -->

| File | Shows | NDA status |
| ---- | ----- | ---------- |
| _received (not yet in repo)_ | UX Lifecycle Gaps — five-gap findings/recommendation cards (Support Expertise, Onboarding, Training Resources, Inactive Community, Simplify Free Trial) | ⚠️ Rebuild as clean graphic; confirm scores cleared. Transcribed in 5b.1 |
| _received (not yet in repo)_ | UX Lifecycle Gaps — competitor scorecard matrix (7 brands × Trial/Onboarding/Support/Community/Training, Good/Bad/Neutral) | ⚠️ Rebuild as clean table/graphic; confirm scores cleared. Transcribed in 5b.1 |
| _received (not yet in repo)_ | UX Maturity & Standards — four recommendation cards (Team, Resource, Workforce, Process) | ⚠️ Rebuild as clean graphic. Transcribed in 5b.2 |
| _received (not yet in repo)_ | UX Maturity — NN/g 6-stage maturity matrix (7 brands × stage / team size / key factors) | ⚠️ Rebuild as clean graphic; competitor headcounts are estimates. Transcribed in 5b.2 |
| _received (not yet in repo)_ | UX Standards to adopt from competitors — Resource / Team / Process maturity slide | ⚠️ Companion to 5b.2; rebuild as clean graphic |
| _received (not yet in repo)_ | Table Stakes Overview — three-bucket feature-gap frame (users ask/no one has; everyone has/we don't; everyone has + users ask/we don't) | ⚠️ Feature-level gaps — confirm clearance. Transcribed in 5b.3 |
| _received (not yet in repo)_ | Table Stakes — "What everyone has" competitor parity inventory (6 SecOps categories × features) | ⚠️ Feature-level gaps — confirm clearance. Summarized in 5b.3 |
| _received (not yet in repo)_ | Table Stakes — "What end-user needed" voice-of-customer inventory (same categories + Help/Support; (B)-flagged differentiators) | ⚠️ Contains analyst quotes — confirm clearance. Summarized in 5b.3 |
| _received (not yet in repo)_ | Table Stakes — "What ArcSight doesn't have" self-audit gap inventory ((AC)/(ABC)/(B) Venn coding) | ⚠️ Feature-level gaps — confirm clearance. Method transcribed in 5b.3 |
| _received (not yet in repo)_ | Information Architecture — Overview benchmark (Feature × Leading brand × ArcSight × Recommendation) | ⚠️ Includes competitor screenshots — rebuild as table. Transcribed in 5b.4 |
| _received (not yet in repo)_ | Design Patterns — Navigation System + Interesting Patterns cards | ⚠️ Rebuild as clean graphic. Transcribed in 5b.5 |
| _received (not yet in repo)_ | Navigation Patterns — 7-product nav teardown (Type / Screenshot / Observations / Key take away) | ⚠️ Includes competitor screenshots — rebuild as table. Transcribed in 5b.5 |
| _pending upload_ | Competitive analysis screenshots (best/worst practice examples) | ⚠️ NDA — likely need abstracting; competitor UI may have its own usage limits |
| `src/assets/nautilus-taskflow.png` | The real end-to-end task-flow diagram covering all four scenarios (Log mgmt & compliance, Realtime Correlation, UBA, SOAR) — login → role dashboards → case list/details → playbooks → case information → event & entity details. **Embedded in the Task flow section.** | ⚠️ Real artifact, user-supplied and chosen for publication; dense text is illustrative at page scale |
| `src/assets/Nautilus-Current-UI.png` | "Flashback / Present" composite — the eight products with acquisition years, plus current-state SOC dashboards, cases, and analytics. **Embedded as the hero image** (replaced the abstracted skeleton). | ⚠️ Shows real product screens; user-supplied and chosen for publication. The hero NDA line was updated so it no longer claims "no real product screens are shown." |
| `src/assets/Nautilus-Case-Incidents.png` | "Nautilus Vision" Case & Incidents dashboard — threats by category over time, cases-by-status/SLA donut, severity breakdown, top cases, and a performance/velocity gauge. **Embedded as the Lens concept image.** | ⚠️ Real product screen; user-supplied and chosen for publication |
| `src/assets/Nautilus-Workbench.png` | "Nautilus Vision" Cases workbench — case list, case timeline with enrichment/action/playbook events, entities, alerts, and SLA countdown. **Embedded as the Workbench concept image.** | ⚠️ Real product screen; user-supplied and chosen for publication |
| `src/assets/Nautilus-wire-1.png` | "Crossway"-branded Dashboard wireframe — critical cases, top targeted assets, threats by category, performance insights. **Embedded in Wireframes.** | ⚠️ Real screen; user-supplied and chosen for publication |
| `src/assets/Nautilus-wire-2.png` | "Crossway"-branded Cases wireframe — case list, severity/status/owner/type donuts, and a case detail with case timeline. **Embedded in Wireframes.** | ⚠️ Real screen; user-supplied and chosen for publication |
| `src/assets/Nautilus-wire-3.png` | "Crossway"-branded Search wireframe — query bar, event histogram, and results table. **Embedded in Wireframes.** | ⚠️ Real screen; user-supplied and chosen for publication |
| `src/assets/Nautilus-Design-System.png` | Moodboard exploration — six dark-theme palette/type directions (Raspberry Candy, Raspberry Midnight, Mesmerising Caribbean, Regal Tang, Robin Egg, Purple Marbles) each with a validating dashboard mock, plus three light-theme mocks (Light Sky, Cherry Light, Bellflower Light). **Embedded in the Design system section.** | ⚠️ Real exploration artifact; user-supplied and chosen for publication |
| _pending upload_ | Navigation structure exploration | ⚠️ Confirm NDA-safe |

## Gaps to fill (before this page can ship)

1. **Research decks** — detailed capture for each track. **All five tracks received and transcribed** (UX Lifecycle Gaps → 5b.1; UX Maturity & Standards → 5b.2; Table Stakes → 5b.3; Information Architecture → 5b.4; Design Pattern → 5b.5).
2. **The four task-flow diagrams** — **done.** The real single task-flow diagram (`src/assets/nautilus-taskflow.png`, all four scenarios) is embedded in the Task flow section, replacing the earlier CSS spine.
3. **Final design system** — the moodboard/direction-finding exploration is **done** (embedded). The tokenized system, component library, and adoption/governance model are still to be uploaded if wanted as a separate artifact.
4. **Wireframes** — **done.** Three real wireframe screens (Dashboard, Cases, Search, branded "Crossway") are embedded in the Wireframes section, replacing the abstracted placeholders. The **navigation exploration** artifact is still outstanding if a dedicated IA visual is wanted.
5. **A persona** (real or approved-synthetic).
6. **Any verified, NDA-cleared metrics** — otherwise the page stays qualitative.
7. **Confirm** whether the resume's "25% adoption" maps to Nautilus.
8. **Confirm** the timeframe/duration and any award tie-in for the snapshot chips.
9. **Enrichment process modules** — decide which of the 14 in "Additional process modules" to include and supply/approve their content. Highest-value for the build: **design principles (§12)**, **personas + before/after journey (§14)**, **validation (§18)**, **roadmap/phasing (§20)**, and a **before/after screen** + **vision artifact**.
10. **Confirm the Nautilus naming metaphor** (shell grows in chambers) before presenting it as the official rationale.

## Raw dump (unsorted — from the user's brief, verbatim intent)
<!-- Preserve the original source so nothing is lost or paraphrased away. -->

- Project name: **Nautilus**. ArcSight = suite of products under SecOps; grew by acquisition; challenges were experience, visual consistency, and functionality gaps vs. competitors.
- Requirement to separate the unit as cybersecurity under Micro Focus. Customer feedback: couldn't identify that different modules came from Micro Focus; each module had its own experience/visual flaws.
- Stakeholder ask: a new vision for the cybersecurity products + find the features we lack vs. competitors.
- ArcSight suite products: **ArcMC, SOAR, ESM, Logger, Connectors, Recon, Intelligence, THUB**.
- My role: Lead UX Designer — define the vision, run deep competitor research, propose to stakeholders, coordinate other designers, review and carry their work forward. **3 designers mentored/involved; 6 PMs** sharing requirements and reviewing results.
- Problem statement: staggered maturity & acquisition; varied UI design philosophies; varied web platforms & libraries; varied integration; varied resources.
- The future / why: **Build ArcSight portfolio → Fusion (centralized portfolio) → Nautilus (unified composable product)**.
- Concepts: **Lens** — immersive dashboards to identify trends, determine priorities, explore activity. **Workbench** — focus areas for groups of tasks, minimizing pivots to complete goals.
- Competitive analysis intro: identify/evaluate competitor usability strengths & weaknesses, cite best/worst practices with screenshots, apply learnings to ArcSight. Competitors: **Splunk, IBM QRadar, Rapid7, Sumo Logic, Securonix, Exabeam**.
- ArcSight UX research tracks (to upload individually later): **UX Lifecycle Gaps; UX Maturity & Standards; Table Stakes; Information Architecture; Design Pattern**.
- Built a new **design system from scratch** (final + explorations to upload).
- **Task Flow Diagrams for 4 scenarios:** Log management & compliance, Realtime Correlation, UBA, SOAR.
- **Low-fidelity wireframes** for key screens; **navigation structure exploration**.
- Based on the new design system, enhanced the products and addressed several pre-existing issues.
