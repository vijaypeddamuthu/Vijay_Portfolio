import { useEffect } from 'react'
import { Footer } from './Footer'
import { CaseNav, Frame, SectionNav } from './CaseStudy'
import igaDashboard from '../assets/IGA-Dashboard.png'
import igaIaDiagram from '../assets/Information Architecture.png'
import igaApplicationDetails from '../assets/IGA-Application-Details.png'
import igaReportsChart from '../assets/IGA-Reports-Chart.png'
import igaReportsEmpty from '../assets/IGA-Reports-Empty.png'
import igaReportsTable from '../assets/IGA-Reports-Table.png'
import igaJourneyMap from '../assets/User Journey Map.png'
import igaEmpathyMap from '../assets/Empathy Map.png'

const IMPACT = [
  ['<4 min', 'to build one audit-ready application access report'],
  ['~60%', 'fewer first-session report abandonments in usability testing'],
  ['3', 'enterprise renewals where reporting became the differentiator'],
  ['~40%', '"how do I report to my auditor" tickets, gone within 6 weeks'],
]

const SUMMARY = [
  'Compliance officers could see that access existed, but not whether it was justified, approved, or audit-ready.',
  'I split the IA into two jobs: situational awareness on a Dashboard, evidentiary output in My Research.',
  'A colour-coded Gantt timeline became the primary export, designed for an auditor who has never seen the tool.',
  'Result: a 45-minute manual scramble became a saved, four-minute query, and reporting became a renewal differentiator.',
]

const JUMP = [
  ['ig-overview', 'Overview'],
  ['ig-problem', 'Problem'],
  ['ig-persona', 'Persona'],
  ['ig-journey', 'Journey'],
  ['ig-usecases', 'Use cases'],
  ['ig-ia', 'IA'],
  ['ig-process', 'Process'],
  ['ig-solution', 'Solution'],
  ['ig-decisions', 'Decisions'],
  ['ig-outcome', 'Outcome'],
  ['ig-reflection', 'Reflection'],
]

const META = [
  ['My role', 'Lead UX Designer, end-to-end'],
  ['Team', '1 PM, 2–3 IAM specialists, 3 engineers'],
  ['Duration', '~12 weeks'],
  ['Focus', 'Research, IA, interaction & visual design'],
]

const TAGS = ['IGA', 'Compliance reporting', 'Enterprise SaaS', 'Data visualization', 'Information architecture']

const FRUSTRATIONS = [
  'Manual spreadsheet rebuilds every audit cycle',
  'No approval or justification traceability',
  'Data arrives late, or arrives wrong',
  'Dependency on other teams just to pull data',
  'One generic export for every use case',
]

const PERSONA_FACTS = [
  'Owns IAM governance policy',
  'Primary contact for external auditors',
  'High domain knowledge, moderate technical depth',
  'Accountable for certification review outcomes',
]

const PERSONA_GOALS = [
  'Meet regulatory requirements without last-minute scrambles',
  'Conduct risk analysis and review compliance mandates',
  'Stay ahead of new and changing regulations',
]

const PERSONA_PAINS = [
  'Extremely difficult to know, comprehensively, who has access and whether it is appropriate',
  'Failing audits, or negative results, because data arrives late or wrong',
  'Internal audit data is unclean and shows up incorrectly in final exports',
  'Cannot provide adequate, timely information when the auditor asks',
  'Dependency on IT and engineering to pull data, adding delay and risk',
]

const PERSONA_TOOLS = ['DM reports', 'OS reports', 'Application reports', 'Spreadsheets', 'Internal audit plans']

const EMPATHY = [
  {
    tag: 'Think & feel',
    items: [
      'Feels personally responsible to the auditor, but has no confidence in the data',
      "Wonders whether every provisioned user is supposed to have the access they have",
      'Anxious that policy changes go unreflected in the system between audits',
    ],
  },
  {
    tag: 'See',
    items: [
      'Can see that access was granted, not why it was justified',
      'Access rights lack approval traceability',
      'Access appears or disappears with no narrative',
    ],
  },
  {
    tag: 'Pains',
    items: PERSONA_PAINS,
  },
  {
    tag: 'Say & do',
    items: [
      'Manually runs DM, OS, and application reports to cross-verify access',
      'Maintains internal audit plans as a parallel process to the platform',
      'Creates both negotiable and non-negotiable regulatory documentation',
    ],
  },
  {
    tag: 'Hear',
    items: [
      '"Can you provide the summarised access reports for the last 5 days?"',
      'Data delays are the most frequent complaint as deadlines approach',
      'Requests to confirm policy changes are reflected in real time',
    ],
  },
  {
    tag: 'Gains',
    items: [
      'Simplified, trustworthy reporting that needs no manual cleanup',
      'Interactive query, filterable by any combination of variables',
      'Reports designed per use case, not one generic export',
    ],
  },
]

const USE_CASES = [
  {
    title: 'Verifying and validating the certification process',
    personas: 'Score 35 · drove Dashboard',
    body: 'Ensure authorised users are the only ones using a given information set.',
  },
  {
    title: "Verifying user access complies with defined policies",
    personas: 'Score 41 · drove Dashboard',
    body: 'Prove access authorisation for employees selected randomly by the auditor.',
  },
  {
    title: "Verifying that terminated users' access has been removed",
    personas: 'Score 48 · drove Reports',
    body: 'Prove access was removed for employees terminated in the last 90 days, selected randomly by the auditor.',
  },
  {
    title: 'Checking application access during a past time period',
    personas: 'Score 44 · drove Reports',
    body: 'Determine who had access to a given application within a specific historical time window.',
  },
]

const JOURNEY = [
  ['01', 'Trigger', 'An audit notification arrives. Ken has a deadline and a specific ask from the external auditor.', 'Moderate anxiety, deadline-driven', false],
  ['02', 'Orientation', 'Logs in for situational awareness: applications in scope, active users, anomalies that could complicate the audit.', 'Scanning for red flags', false],
  ['03', 'Investigation', "Tries to pull a report matching the auditor's exact ask. No clear entry point, confusing filters, results need manual cleanup. Ken often falls back to spreadsheets here.", 'Frustration, lost confidence, time pressure', true],
  ['04', 'Verification', 'Cross-references certification dates, approvals, terminations, and dormant vs. active access across multiple views.', 'High cognitive load, fear of missing something', false],
  ['05', 'Delivery', 'Exports or saves the report to share with the external auditor.', 'Relief if it looks credible, doubt if it looks like a raw dump', false],
]

const CONCEPTS = [
  {
    tag: 'Rejected',
    title: 'A. Unified query builder',
    note: 'A single powerful table with every filter exposed upfront.',
    items: ['Too intimidating for non-analyst compliance users, no orientation layer'],
  },
  {
    tag: 'Selected',
    title: 'B. KPI-first, progressive drill-through',
    note: 'Aggregate health first, then drill to the specific evidence needed.',
    items: ['Matched the top-down assess → locate → extract pattern confirmed in all 6 research interviews'],
    urgent: true,
  },
  {
    tag: 'Retained, secondary',
    title: 'C. Wizard-driven report builder',
    note: 'Step-by-step: choose application, choose users, choose time period, generate.',
    items: ["Lives as \u201cAdvanced\u201d mode under My Research, for first-time users and complex queries"],
  },
]

const ITERATIONS = [
  ['Bubble chart over bar chart', 'Bar charts collapsed at scale (50+ applications) and hid the outliers auditors care about most. Bubbles preserve relative scale and make anomalies visible by size.'],
  ['Application Quick View hover card', 'Removed a full navigation step from the most common compliance workflow: licence counts, usage trend, and team breakdown, without losing the overview scan.'],
  ['Gantt as primary audit-delivery format', 'A colour-coded timeline answers the audit question at a glance: was this access active during this period, and was it certified?'],
  ['Empty-state onboarding', 'A guided "Let\'s get started" prompt resolved the blank-page abandonment observed when users landed on Reports with no active query.'],
  ['Persistent, saveable filter state', 'Filters now persist across sessions and save as named reports, eliminating the most-repeated manual task in the research.'],
]

const SCREENS = [
  ['Dashboard, overview', igaDashboard, 'KPI snapshot, bubble chart sized by access volume, top-applications table, most-active-users table, and a live notifications rail with inline justification text.'],
  ['Dashboard, application detail view', igaApplicationDetails, 'Full drilldown: team usage bubbles, a per-team table, application metadata, and the access trend timeline. Entry point for certification review.'],
  ['Reports, empty state', igaReportsEmpty, 'Onboarding illustration and guided prompt copy that removes the blank-page abandonment behaviour seen in research.'],
  ['Reports, chart view (Gantt)', igaReportsChart, 'The primary audit-delivery artefact: coloured access-period bars per user, per application, status-coded Active, Revoked, Certification, Removed.'],
  ['Reports, table view', igaReportsTable, 'Dense access-rights history: requested, approved, certification window, active/revoked, sortable and filterable by every dimension.'],
]

const DECISIONS = [
  ['Gantt + Table parity', 'The same query produces both the Gantt (visual, auditor-facing) and the Table (detailed, internal-facing) without re-running. One source of truth, two presentation modes.'],
  ['Compliance officer ≠ only audience', 'The output is consumed by two people: the officer who builds the report, and the external auditor who receives it. Designing the Gantt as an auditor-legible artefact, not just a visualisation, changed how success was measured.'],
  ['Notifications rail as justification surface', 'Redesigned from a plain change feed to surface justification text inline with each event, so Ken sees not just that access changed, but why, without a separate audit log.'],
]

const OUTCOMES_USER = [
  'A complete access rights report for a single application in under 4 minutes, down from an estimated 45-minute manual process.',
  '"Let\'s get started" empty state cut first-session report abandonment by ~60% in moderated usability testing (5 participants).',
  'Saveable filter state removed the need to rebuild the same audit query each cycle, an estimated 2–3 hours saved per user per audit period.',
  'The Gantt view read as legible audit evidence to external auditors with no platform context, confirmed across 3 customer pilot sessions.',
]

const OUTCOMES_BUSINESS = [
  'The Gantt export was cited as a key differentiator in 3 enterprise renewal conversations the quarter after launch.',
  '"How do I produce a report for my auditor" support tickets dropped ~40% within 6 weeks of launch.',
]

const OUTCOMES_TEAM = [
  'The IA restructure consolidated 4 organically grown, overlapping reporting surfaces into one composable My Research module, cutting ongoing design and engineering debt.',
]

const REFLECTION = [
  'The hardest constraint was a dual-audience problem hidden inside a single-user brief. The product brief describes one user, the application or system owner, but the output is consumed by two fundamentally different people: the compliance officer who builds the report, and the external auditor who receives it. Early designs optimised only for the builder and produced outputs that were functionally complete but presentationally inadequate as formal audit evidence.',
  'Designing the Gantt view explicitly as an auditor-facing artefact, not just a visualisation mode, was the most consequential shift in the project. It changed the success criterion from "can Ken find the data?" to "can an external auditor who has never used this product read this output and reach a conclusion?"',
  'If starting over, I would bring an external auditor into the initial research rather than inferring their needs from what compliance officers described. A single interview would likely have validated the Gantt format two sprints earlier and saved a full iteration cycle on the export design.',
]

function Empathy({ tag, items }) {
  return (
    <div className="cs-bucket">
      <span className="cs-bucket__tag">{tag}</span>
      <ul className="cs-bucket__list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export function CaseStudyIGA() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const prev = document.title
    document.title = 'IGA, access review & compliance reporting case study'
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <>
      <header className="cs-topbar">
        <a className="cs-back" href="#work">
          Back to work
        </a>
        <SectionNav items={JUMP} />
      </header>

      <main id="main" className="cs">
        {/* Hero */}
        <section className="cs-hero">
          <p className="cs-kicker">Identity Governance &amp; Administration</p>
          <h1 className="cs-title">Audit-ready access, on demand</h1>
          <p className="cs-lead">
            Turning raw access data into a trustworthy, audit-ready artefact
            that a compliance officer can build in minutes, and an external
            auditor can read without any context on the tool.
          </p>
          <ul className="cs-impact" aria-label="Impact at a glance">
            {IMPACT.map(([n, label]) => (
              <li key={label}>
                <span className="cs-impact__num">{n}</span>
                <span className="cs-impact__label">{label}</span>
              </li>
            ))}
          </ul>
          <div className="cs-summary" aria-label="In short">
            <p className="cs-summary__h">In short</p>
            <ul className="cs-summary__list">
              {SUMMARY.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <ul className="cs-meta">
            {META.map(([k, v]) => (
              <li key={k}>
                <span className="cs-meta__k">{k}</span>
                <span className="cs-meta__v">{v}</span>
              </li>
            ))}
          </ul>
          <ul className="chips cs-hero__tags" aria-label="Scope">
            {TAGS.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
          <p className="cs-nda">
            Shared under NDA. Screens on this page are the product&apos;s own
            UI and research artefacts, lightly blurred, and specific figures
            are shared in conversation.{' '}
            <a href="mailto:vijaykumarpdm@live.com">Get in touch</a> to see it
            in full.
          </p>
          <Frame
            src={igaDashboard}
            nda
            caption="Dashboard overview: the situational-awareness surface Ken opens before every audit."
          />
        </section>

        {/* Overview */}
        <section className="cs-section" id="ig-overview">
          <span className="cs-eyebrow">Overview</span>
          <h2 className="cs-h2">
            The north star was one product-brief sentence, and every decision
            traced back to it.
          </h2>
          <blockquote className="cs-callout">
            Application or system owners need to see the full history of
            access rights, including when access was granted, if and when it
            was approved, when it was last certified, and whether it is being
            used or sitting dormant. They should be able to sort, filter, and
            save that as a report.
          </blockquote>
          <div className="cs-prose">
            <p>
              IGA is the practice of managing who has access to what, ensuring
              it is appropriate, approved, and regularly certified. In
              regulated industries this is not optional, it is externally
              audited, and failures carry fines and reputational damage. This
              enterprise platform was used by compliance officers and security
              teams to monitor, report on, and certify user access across every
              application and system in an organisation.
            </p>
            <p>
              The existing product could show that access existed, but not
              produce audit-ready evidence. Customers were manually rebuilding
              compliance reports from spreadsheet exports every audit cycle.
              The compliance segment, highest value and highest churn risk, was
              vocal about it, and three enterprise renewals in the pipeline
              named reporting as a blocker.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="cs-section" id="ig-problem">
          <span className="cs-eyebrow">Problem</span>
          <h2 className="cs-h2">
            Compliance officers were accountable to auditors, with no reliable,
            fast way to answer the most basic audit question.
          </h2>
          <blockquote className="cs-callout">
            Who has access to what, was it approved, is it still appropriate,
            and can I prove it?
          </blockquote>
          <div className="cs-prose">
            <p>
              Every audit cycle triggered a multi-day, manual data-gathering
              exercise using raw exports that were unreliable, inconsistently
              structured, and unfit for presenting to an external auditor. The
              design challenge: how do we transform raw access data into a{' '}
              <span className="hl">trustworthy, audit-ready artefact</span> a
              compliance officer can build in minutes, and an auditor can read
              without context?
            </p>
          </div>
          <ul className="chips cs-frustrations" aria-label="Frustrations solved">
            {FRUSTRATIONS.map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Persona */}
        <section className="cs-section" id="ig-persona">
          <span className="cs-eyebrow">Who I designed for</span>
          <h2 className="cs-h2">
            Ken Nagai, the compliance officer who owns the answer, not the data.
          </h2>
          <div className="cs-persona">
            <div className="cs-persona__top">
              <div className="cs-persona__head">
                <span className="cs-persona__avatar" aria-hidden="true">
                  KN
                </span>
                <div>
                  <p className="cs-persona__name">Ken Nagai</p>
                  <p className="cs-persona__role">
                    Compliance Officer, primary interface with external
                    auditors
                  </p>
                  <ul className="cs-persona__facts">
                    {PERSONA_FACTS.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <blockquote className="cs-persona__quote">
                Not knowing if terminated users&apos; access has been removed
                keeps me up at night.
              </blockquote>
            </div>
            <div className="cs-persona__grid">
              <div className="cs-persona__block">
                <h3 className="cs-persona__h">Goals</h3>
                <ul className="cs-persona__list">
                  {PERSONA_GOALS.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="cs-persona__block">
                <h3 className="cs-persona__h">Frustrations</h3>
                <ul className="cs-persona__list">
                  {PERSONA_PAINS.slice(0, 3).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="cs-persona__block">
                <h3 className="cs-persona__h">Tools he lives in</h3>
                <ul className="cs-persona__tools">
                  {PERSONA_TOOLS.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="cs-note">
            Synthesised from 6 interviews with compliance officers, security
            analysts, and IAM administrators across 3 enterprise
            organisations, plus stakeholder interviews with Customer Success
            and Sales, and a competitive audit of 3 incumbent IGA tools.
          </p>
          <div className="cs-buckets">
            {EMPATHY.map((e) => (
              <Empathy key={e.tag} {...e} />
            ))}
          </div>
          <Frame
            src={igaEmpathyMap}
            nda
            caption="The working empathy map: Think & feel, See, Pains, Say & do, Hear, and Gains, synthesised from the interview round."
          />
        </section>

        {/* Journey map */}
        <section className="cs-section" id="ig-journey">
          <span className="cs-eyebrow">User journey map</span>
          <h2 className="cs-h2">
            Five phases of one audit cycle, with a pain zone hiding in plain
            sight.
          </h2>
          <ol className="cs-journey" aria-label="Journey phases">
            {JOURNEY.map(([num, title, body, emotion, pain]) => (
              <li key={title} className={`cs-journey__phase${pain ? ' is-pain' : ''}`}>
                <span className="cs-journey__num">{num}</span>
                <h3 className="cs-journey__title">{title}</h3>
                <p className="cs-journey__body">{body}</p>
                <p className="cs-journey__emotion">{emotion}</p>
              </li>
            ))}
          </ol>
          <p className="cs-note">
            The pain zone in Phase 3 was not a discoverability problem, Ken
            knew reports existed. It was a trust and entry-point problem: the
            tool gave no scaffolding for building a query from scratch. The
            &ldquo;Let&rsquo;s get started&rdquo; empty state and persistent,
            saveable filters were direct responses to this finding.
          </p>
          <Frame
            src={igaJourneyMap}
            nda
            caption="The working journey map: five phases mapped against actions, thoughts, pain points, and support ideas, with the Phase 3 pain zone flagged in red."
          />
        </section>

        {/* Use cases */}
        <section className="cs-section" id="ig-usecases">
          <span className="cs-eyebrow">Use case prioritisation</span>
          <h2 className="cs-h2">
            The Phase 3 pain zone sharpened into four scored use cases.
          </h2>
          <ul className="cs-cases">
            {USE_CASES.map((uc, i) => (
              <li key={uc.title} className="cs-case">
                <span className="cs-case__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cs-case__title">{uc.title}</h3>
                <p className="cs-case__personas">{uc.personas}</p>
                <p className="cs-case__body">{uc.body}</p>
              </li>
            ))}
          </ul>
          <p className="cs-note">
            UC-3 and UC-4 scored highest, both time-bounded, application-scoped,
            evidentiary queries. That confirmed Reports as the critical
            surface, while UC-1 and UC-2 were better served by continuous
            Dashboard monitoring, directly driving the two-surface IA decision.
          </p>
        </section>

        {/* Information architecture */}
        <section className="cs-section" id="ig-ia">
          <span className="cs-eyebrow">Information architecture</span>
          <h2 className="cs-h2">
            Separating situational awareness from evidentiary output was the
            single biggest structural decision.
          </h2>
          <div className="cs-prose">
            <p>
              Dashboard and My Research are two distinct jobs-to-be-done,
              performed by the same person in different contexts. Conflating
              them, as the previous architecture did, forced compliance users
              to context-switch mid-task and optimised for neither.
            </p>
          </div>
          <Frame
            src={igaIaDiagram}
            nda
            caption="Login splits into User, Dashboard (situational awareness) and My Research (evidentiary output), with Templates, Saved, and pinned KPIs as the amber, high-frequency shortcuts."
          />
          <blockquote className="cs-callout">
            &ldquo;My Research&rdquo; instead of &ldquo;Reports&rdquo; frames
            the surface as an active investigation the user owns, not a
            passive export IT runs for them. That single naming change
            measurably reduced hesitation in usability testing.
          </blockquote>
          <p className="cs-note">
            Templates, Saved, and pinned KPIs are the highest-frequency access
            points, they became persistent shortcuts in the right rail on both
            Dashboard and Reports, always visible, never requiring navigation.
          </p>
        </section>

        {/* Design process */}
        <section className="cs-section" id="ig-process">
          <span className="cs-eyebrow">Design process</span>
          <h2 className="cs-h2">
            Three concept directions, and the iteration decisions that came out
            of testing.
          </h2>
          <div className="cs-buckets">
            {CONCEPTS.map((c) => (
              <div key={c.title} className={`cs-bucket${c.urgent ? ' cs-bucket--urgent' : ''}`}>
                <span className="cs-bucket__tag">{c.tag}</span>
                <h3 className="cs-bucket__title">{c.title}</h3>
                <p className="cs-bucket__note">{c.note}</p>
                <ul className="cs-bucket__list">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ul className="cs-principles">
            {ITERATIONS.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Final solution */}
        <section className="cs-section" id="ig-solution">
          <span className="cs-eyebrow">Final solution</span>
          <h2 className="cs-h2">
            Five screens, one shared query, two audiences.
          </h2>
          <div className="cs-wires">
            {SCREENS.map(([title, src, caption]) => (
              <Frame key={title} src={src} nda caption={`${title}: ${caption}`} />
            ))}
          </div>
        </section>

        {/* The three decisions */}
        <section className="cs-section" id="ig-decisions">
          <span className="cs-eyebrow">What defined the product</span>
          <h2 className="cs-h2">The three decisions that mattered most.</h2>
          <ol className="cs-moves">
            {DECISIONS.map(([title, body]) => (
              <li key={title} className="cs-move">
                <h3 className="cs-move__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Outcome */}
        <section className="cs-section" id="ig-outcome">
          <span className="cs-eyebrow">Outcome</span>
          <h2 className="cs-h2">
            From a 45-minute scramble to a saved, four-minute query.
          </h2>
          <ul className="cs-stats">
            {IMPACT.map(([n, label]) => (
              <li key={label} className="cs-stat cs-stat--accent">
                <span className="cs-stat__num">{n}</span>
                <span className="cs-stat__label">{label}</span>
              </li>
            ))}
          </ul>
          <h3 className="cs-persona__h">User</h3>
          <ul className="cs-reflect">
            {OUTCOMES_USER.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <h3 className="cs-persona__h">Business</h3>
          <ul className="cs-reflect">
            {OUTCOMES_BUSINESS.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <h3 className="cs-persona__h">Team &amp; process</h3>
          <ul className="cs-reflect">
            {OUTCOMES_TEAM.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>

        {/* Reflection */}
        <section className="cs-section" id="ig-reflection">
          <span className="cs-eyebrow">Reflection</span>
          <h2 className="cs-h2">
            A single-user brief was hiding a two-audience product.
          </h2>
          <ul className="cs-reflect">
            {REFLECTION.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <CaseNav current="iga" />
        </section>
      </main>

      <Footer />
    </>
  )
}
