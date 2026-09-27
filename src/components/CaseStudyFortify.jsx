import { useEffect } from 'react'
import { Footer } from './Footer'
import { CaseNav, Frame, SectionNav } from './CaseStudy'
import fodMyApplications from '../assets/Fod-MyApplications.webp'
import fodIa from '../assets/Fod-IA.webp'
import fodApplicationOverview from '../assets/Fod-Application-Overview.png'
import fodReleaseOverview from '../assets/Fod-Release-Overview.png'
import fodApplicationIssues from '../assets/Fod-Application-Issues.webp'
import fodScanConfigFlows from '../assets/Fod-SAST-Configuration.webp'
import fodOnboardingFlow from '../assets/Fod-DAST-configurations.webp'
import fodProgramDashboard from '../assets/Fod-Program-dashboard.webp'
import fodRiskDashboard from '../assets/Fod-Risk-exposure-dashboard.webp'

const IMPACT = [
  ['↑71%', 'Scan Initiation Rate, vs. legacy portal baseline'],
  ['↓68%', 'Time to First Scan, 4.2 days → 1.3 days'],
  ['+52 pts', 'NPS Score, −4 → +48'],
  ['↑88%', 'DAST Adoption, previously <12% of users'],
]

const OUTCOME_STATS = [
  ['↑71%', 'Scan Initiation Rate (was 39% on legacy)'],
  ['↓68%', 'Time to First Scan (4.2 days → 1.3 days)'],
  ['+52 pts', 'NPS Improvement (−4 → +48)'],
  ['↑88%', 'DAST Adoption (12% → 88% of eligible users)'],
]

const SUMMARY = [
  'A decade of acquisitions had left SAST, DAST, and MAST as three separate products bolted under one brand: security teams navigated more than they remediated.',
  'I restructured the IA around the application, not the modality, the most contested decision of the project, and won it with research: 8 of 8 users found applications faster in the new model.',
  'Role-aware views let the same finding serve an AppSec PM, a developer, and a CISO differently, without building three different products.',
  'Result: GA with 2,400+ enterprise orgs, 71% higher scan initiation, and NPS up 52 points.',
]

const JUMP = [
  ['fod-overview', 'Overview'],
  ['fod-problem', 'Problem'],
  ['fod-personas', 'Personas'],
  ['fod-principles', 'Principles'],
  ['fod-ia', 'IA'],
  ['fod-flows', 'Flows'],
  ['fod-decisions', 'Decisions'],
  ['fod-validate', 'Validate'],
  ['fod-outcome', 'Outcome'],
  ['fod-reflection', 'Reflection'],
]

const META = [
  ['My role', 'Lead UX Designer'],
  ['Team', '1 Junior Designer, 12 Engineers, 2 PMs'],
  ['Duration', '12 months, Aug 2025 – Jul 2026'],
  ['Platforms', 'Web, CI/CD Plugin, Mobile'],
  ['Status', 'GA, 2,400+ Enterprise Orgs'],
]

const TAGS = ['SAST · DAST · MAST', 'Cloud SaaS', 'Enterprise B2B', 'CI/CD & Mobile']

const CONSTRAINTS = [
  ['Decade of acquisition debt', 'SAST, DAST, and MAST were architecturally and experientially separate products, each with entrenched navigation, ownership, and roadmap.'],
  ['Three audiences, one product', 'AppSec Program Managers, developers, and CISOs needed fundamentally different things from the same underlying data.'],
  ['Engineering skepticism on mobile', 'A 6-week estimate for mobile responsiveness had to be negotiated down to a 3-week MVP just to get it prioritised.'],
  ['Trust in automation', 'Auto-triage and verdicts without visible reasoning were rejected by users; automated results had to show their reasoning to be trusted.'],
]

const PAIN_POINTS = [
  ['1', '16-step scan submission', 'Critical', 'Average scan submission required 16 steps across 4 screens. 34% of users abandoned before completing configuration.'],
  ['2', 'Modality silos', 'Critical', 'SAST, DAST, and MAST operated as completely separate experiences. Unified risk scores and cross-modality remediation were impossible.'],
  ['3', 'Results inaccessibility', 'High', 'Developers spent an average of 11 min per finding just working out what it meant, before attempting any fix.'],
  ['4', 'No executive view', 'High', 'CISOs exported CSVs and built board presentations manually. Zero native risk dashboard with business context.'],
  ['5', '4.2-day onboarding cliff', 'Medium', 'First-time users took an average of 4.2 days to submit their first scan. The setup guide was a 47-page PDF.'],
  ['6', 'CI/CD blind spot', 'Medium', 'No native pipeline integration UI. Dev teams configured webhooks manually via undocumented API calls.'],
]

const RESEARCH_METHODS = [
  ['User interviews', 'AppSec PMs, developers, CISOs. Semi-structured, 60-minute sessions.'],
  ['Quantitative survey', 'Current customers across SMB, mid-market, and enterprise segments.'],
  ['Session replay audit', 'FullStory analysis: rage clicks, abandonment, and confusion patterns mapped.'],
  ['Competitive teardown', 'Veracode, Checkmarx, Snyk across 24 UX criteria and 3 task scenarios.'],
]

const PERSONAS = [
  {
    initials: 'ML',
    name: 'Morgan Lee',
    role: 'AppSec Program Manager · Age 41',
    jtbd: 'Prove security program ROI with credible, real-time evidence.',
    goals: ['Prove security program ROI to the CISO', 'Reduce developer friction', 'Consistent coverage across all apps'],
    frustrations: ['DAST config required 3 days of manual setup', 'No unified dashboard for SAST + DAST results', "Can't see what's actually being used at renewal"],
    quote: 'I need to show the board we\u2019re more secure than last quarter. I shouldn\u2019t need a spreadsheet to prove that.',
  },
  {
    initials: 'PR',
    name: 'Priya Ramesh',
    role: 'Senior Software Engineer · Age 29',
    jtbd: "Ship provably secure code without slowing down the team's sprint cadence.",
    goals: ["Ship features fast without security blocking CI/CD", 'Get clear, actionable fix guidance', 'Not have to context-switch into a separate tool'],
    frustrations: ["Scan results arrive 4 hours after push, by which point she's moved on", 'The portal feels built for security people, not developers', 'False positives waste her morning every sprint review'],
    quote: 'If it\u2019s not in my PR, I\u2019m not going to look at it. Security tools need to come to me.',
  },
  {
    initials: 'DO',
    name: 'David Osei',
    role: 'CISO, Mid-Market Enterprise · Age 53',
    jtbd: 'Report credible risk posture to the board without manual data wrangling.',
    goals: ['Board-ready compliance evidence', 'Trend data across the entire app portfolio', 'Cost-per-scan clarity for budget justification'],
    frustrations: ["Can't see risk posture across all apps in one view", 'Audit reports require manual assembly from 3 exports', 'No way to benchmark security maturity vs. peers'],
    quote: 'The tool does the scanning. What it doesn\u2019t do is help me tell the story.',
  },
]

const PRINCIPLES = [
  ['Unified, not merged', 'SAST, DAST, and MAST are complementary lenses on the same application risk, not three separate tools with shared billing.'],
  ['Role-aware context', 'The same finding means different things to a developer vs. a CISO. Role-aware views present the same data with the right emphasis.'],
  ['Progressive disclosure', 'Surface the 20% of information users need 80% of the time. Complexity is available on demand and never in the way.'],
  ['Pipeline-native first', 'Security is most effective when invisible in the developer workflow. CI/CD integration is a first-class experience, not a footnote.'],
  ['Trend over snapshot', 'Security posture is only meaningful over time. Every metric defaults to trend view, not point-in-time status.'],
  ['Show the reasoning first', 'If a verdict is going to help, people need to see how it was reached. Quiet automation alone was not enough.'],
]

const IA_BEFORE = [
  ['🔵 SAST', ['Applications', 'Configure', 'Scan', 'Results']],
  ['🟠 DAST', ['Targets', 'Schedule', 'Config', 'Results']],
  ['🟣 MAST', ['Build', 'Upload', 'Policy', 'Results']],
  ['📊 Reports', ['Export', 'CSV', 'Build manually']],
]

const IA_AFTER = [
  ['📱 My Applications', ['Risk Score + All Findings']],
  ['🔬 Start Scan', ['Choose modality inline', '4 steps']],
  ['🎯 Findings', ['Unified SAST + DAST + MAST', 'Fix Guidance']],
  ['📊 Portfolio Dashboard', ['Board-ready, always live']],
]

const CORE_FLOWS = [
  {
    title: 'App Overview',
    src: fodApplicationOverview,
    concept: 'Card grid with inline risk badge and last-scan timestamp. Primary action: Start Scan per app.',
    structure: ['Nav + Global Search', 'App Cards Grid (Risk Badge, Last Scan, Findings Count)', 'Quick Actions + Recent Scans Sidebar', 'Portfolio Summary Bar'],
  },
  {
    title: 'Scan Submission',
    src: fodScanConfigFlows,
    concept: 'A 4-step stepper, App → Modality → Config → Review. Progressive fields reveal as the user advances.',
    structure: ['Stepper: App / Modality / Config / Review', 'Config Form (Progressive Disclosure)', 'Summary Card (Preview)', 'Back | Save as Template | Start Scan'],
  },
  {
    title: 'Findings List',
    src: fodApplicationIssues,
    concept: 'Filterable table with severity ring, finding type tag, and inline quick-actions.',
    structure: ['Filter Bar (Severity / Type / Status / Assignee)', 'Column Headers', 'Finding Rows: Severity Ring, Title, Type Tag, Actions', 'Bulk Actions + Pagination'],
  },
]

const FLOW_DECISIONS = ['Progressive disclosure: minimal fields until needed', 'Smart defaults: last-used app pre-selected', 'Inline validation prevents empty submissions', 'Keyboard-navigable for power users']

const MOVES = [
  ['Restructuring the IA around the application, not the modality', 'The most contested decision of the project. Product insisted on modality tabs. Research was unambiguous: 8 of 8 participants found applications faster in the new model. Winning this argument was the single highest-leverage design decision of the project.'],
  ['Making the verdict understandable', 'I pushed back on shipping the automated risk model without showing its reasoning. Once reasoning was surfaced alongside the verdict, acceptance jumped from 54% to 91%.'],
  ['Making CI/CD integration a 3-click flow', 'Previously required 23 pages of API documentation. Redesigned as a guided setup flow. Pipeline adoption went from 4% to 68% of onboarded teams within 3 months of GA.'],
  ['Advocating for mobile responsiveness against engineering reluctance', 'Engineering estimated 6 weeks. I negotiated a 3-week MVP covering only the on-call triage use case. Mobile now accounts for 18% of all sessions, and on-call response time dropped 52%.'],
]

const OUTCOME_ROLES = [
  ['AppSec PMs', ['DAST config: 47 min → 8 min', 'Unified findings eliminated the 3-tab workflow', 'Automated compliance: 8 hrs/week saved', 'Team NPS: +44 points']],
  ['Developers', ['PR finding engagement: 11% → 74%', 'Fix rate within same sprint: 18% → 61%', 'Security gate adoption: 4% → 68%', 'Zero context-switching from IDE to portal']],
  ['CISOs', ['Board PDF: 3 days → 1 click', 'Risk trend across all 47 apps, live', 'Compliance badge coverage: fully automated', 'Renewal conversation shifted from cost to ROI']],
]

const VALIDATION_METRICS = [
  ['Task success rate', 'Could a user go from My Applications to a submitted scan, and separately to an assigned finding, unaided.', "Why: if the core jobs need hand-holding, the IA restructure has failed regardless of what the research data said."],
  ['Time on task', 'Minutes to submit a scan and to triage a finding, measured against the legacy portal on the same benchmark tasks.', 'Why: speed was the whole pitch behind the 4-step stepper and the unified findings view.'],
  ['SUS & SEQ', 'System Usability Scale per round, Single Ease Question per benchmark task.', 'Why: gives a comparable, industry-benchmarked score to track round over round.'],
  ['Verdict trust', 'Whether a user accepted a risk verdict at face value or re-checked the underlying scan first.', 'Why: this is the number that proved reasoning-first was worth shipping (Move #2).'],
  ['Accessibility conformance', 'WCAG 2.1 AA issues found in audit, and how many shipped closed by GA.', 'Why: a platform CISOs put in front of auditors cannot fail an accessibility review.'],
]

const VALIDATION_TEAM = [
  ['8 AppSec Program Managers', "The primary persona for the DAST-config and portfolio flows; if it didn't work for them, nothing else mattered."],
  ['8 Developers', 'Ran the scan-submission and findings flows from a PR-first mindset, surfacing the context-switch friction first-hand.'],
  ['8 CISOs', 'Stress-tested the Portfolio Dashboard and board-report flow against a real quarterly-review scenario.'],
  ['Me, research and design', 'Facilitated every session myself to hit my own blind spots first-hand, not secondhand through a report.'],
  ['1 Junior Designer', 'Co-scored the heuristic evaluation and ran session logistics and note-taking.'],
  ['2 Project Managers', 'Made the call on what was worth fixing before GA versus deferring to the post-launch roadmap.'],
  ['Accessibility specialist', 'Ran the independent WCAG 2.1 AA audit and verified every remediation before sign-off.'],
]

const LESSONS = [
  'IA is the hardest and most leveraged design deliverable. Three weeks on information architecture felt slow at the time. In retrospect, it was the highest-leverage three weeks of the entire project, every downstream design decision was faster and cheaper because the structure was right.',
  'People trust clear reasoning more than a quick answer. Every time auto-triage was proposed without explanation, security teams pushed back. People wanted to understand the result before they trusted it.',
  'Ship the MVP of mobile before you ship "complete" desktop. Mobile was nearly cut entirely. The on-call triage use case was small enough to build in 3 weeks and proved value faster than any prototype could, a constrained real feature beats a comprehensive prototype.',
]

const ROADMAP = [
  ['P0', 'Fix suggestions in the IDE', 'Surfacing code fixes directly in VS Code and IntelliJ instead of leaving them in a description. Could lift the fix rate from 61% to 80%+.'],
  ['P0', 'Peer Benchmarking (Anonymised)', 'CISOs consistently asked how they compare. Anonymised benchmark data from the FoD customer base is a differentiator no competitor currently offers.'],
  ['P1', 'Collaborative Triage Workflows', 'Findings currently have one assignee. Real-world triage is collaborative, shared queues and triage sessions would serve AppSec PMs significantly better.'],
  ['P2', 'Published Design Token System', 'The component library lives in Figma. Publishing tokens as a consumed pipeline would eliminate the implementation drift between design and production.'],
]

function Table({ head, children, caption }) {
  return (
    <div className="cs-tablewrap" role="region" aria-label={caption} tabIndex={0}>
      <table className="cs-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

function Chain({ items }) {
  return (
    <ul className="fod-chain">
      {items.map((item) => (
        <li key={item} className="fod-chain__step">
          {item}
        </li>
      ))}
    </ul>
  )
}

function Persona({ initials, name, role, jtbd, goals, frustrations, quote }) {
  return (
    <div className="fod-persona">
      <div className="fod-persona__head">
        <span className="fod-persona__avatar" aria-hidden="true">
          {initials}
        </span>
        <div>
          <p className="fod-persona__name">{name}</p>
          <p className="fod-persona__role">{role}</p>
        </div>
      </div>
      <p className="fod-persona__jtbd">{jtbd}</p>
      <p className="fod-persona__quote">&ldquo;{quote}&rdquo;</p>
      <div className="fod-persona__section">
        <span className="fod-persona__label">Goals</span>
        <ul className="fod-persona__list">
          {goals.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
      <div className="fod-persona__section">
        <span className="fod-persona__label">Frustrations</span>
        <ul className="fod-persona__list">
          {frustrations.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function CaseStudyFortify() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const prev = document.title
    document.title = 'Fortify on Demand, unified AppSec platform case study'
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
          <p className="cs-kicker">Cloud application security</p>
          <h1 className="cs-title">Fortify on Demand. Reimagined.</h1>
          <p className="cs-lead">
            How I redesigned a cloud-native application security testing
            platform, unifying <span className="hl">SAST</span> (static
            testing), <span className="hl">DAST</span> (dynamic testing), and{' '}
            <span className="hl">MAST</span> (mobile app testing) under one
            intelligent experience so it could serve both enterprise security
            teams and developer-first organisations simultaneously.
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
            Shared under NDA. Screens on this page are reconstructed as
            wireframes rather than the product&apos;s real UI, and exact
            figures are shared in conversation.{' '}
            <a href="mailto:vijaykumarpdm@live.com">Get in touch</a> to see it
            in full.
          </p>
          <Frame
            src={fodMyApplications}
            nda
            caption="My Applications: the application-first home screen that replaced three separate modality tabs."
          />
        </section>

        {/* Overview / context */}
        <section className="cs-section" id="fod-overview">
          <span className="cs-eyebrow">Context</span>
          <h2 className="cs-h2">
            A decade of acquisitions had left three products wearing one
            brand.
          </h2>
          <div className="cs-prose">
            <p>
              Fortify on Demand had accumulated SAST, DAST, and MAST
              capabilities across a decade of acquisitions, each surviving as
              its own product experience with its own navigation model,
              result format, and configuration paradigm. Security teams spent
              more time navigating the platform than acting on findings.
              Developers avoided it entirely. CISOs commissioned quarterly PDF
              reports from consultants because the platform couldn&apos;t
              generate board-ready data itself.
            </p>
            <p>
              As Lead UX Designer, I owned the redesign end to end across a
              12-month engagement, research, IA, flows, screen design, and
              cross-team advocacy, supported by 1 Junior Designer and working
              alongside a 12-person development team and 2 Project Managers
              across Web, CI/CD Plugin, and Mobile.
            </p>
          </div>
          <ul className="cs-keylist" aria-label="What made this hard">
            {CONSTRAINTS.map(([title, body]) => (
              <li key={title}>
                <strong>{title}.</strong> {body}
              </li>
            ))}
          </ul>
        </section>

        {/* Problem */}
        <section className="cs-section" id="fod-problem">
          <span className="cs-eyebrow">Problem</span>
          <h2 className="cs-h2">A platform built for its engineers, not its users.</h2>
          <div className="cs-prose">
            <p>
              SAST, DAST, and MAST capabilities all existed, but as three
              separate product experiences.{' '}
              <span className="hl">
                Security teams spent more time navigating the platform than
                acting on findings.
              </span>{' '}
              Developers avoided it entirely, and CISOs couldn&apos;t get
              board-ready data out of it without manual work.
            </p>
          </div>
          <Table caption="6 validated pain points" head={['#', 'Pain point', 'Severity', 'Detail']}>
            {PAIN_POINTS.map(([num, title, severity, detail]) => (
              <tr key={title} className={severity === 'Critical' ? 'cs-table__row--flag' : undefined}>
                <td>{num}</td>
                <td className="cs-table__brand">{title}</td>
                <td>
                  <span className="chip">{severity}</span>
                </td>
                <td>{detail}</td>
              </tr>
            ))}
          </Table>
        </section>

        {/* Research & personas */}
        <section className="cs-section" id="fod-personas">
          <span className="cs-eyebrow">Research &amp; discovery</span>
          <h2 className="cs-h2">Three personas, three completely different jobs to be done.</h2>
          <div className="cs-buckets">
            {RESEARCH_METHODS.map(([title, body]) => (
              <div key={title} className="cs-bucket">
                <span className="cs-bucket__tag">Method</span>
                <h3 className="cs-bucket__title">{title}</h3>
                <p className="cs-bucket__note">{body}</p>
              </div>
            ))}
          </div>
          <div className="fod-personas">
            {PERSONAS.map((p) => (
              <Persona key={p.name} {...p} />
            ))}
          </div>
          <p className="cs-note">
            The same finding means different things to a developer vs. a
            CISO, that single insight is what drove the role-aware-context
            design principle rather than a one-size-fits-all findings view.
          </p>
        </section>

        {/* Design principles */}
        <section className="cs-section" id="fod-principles">
          <span className="cs-eyebrow">Design principles</span>
          <h2 className="cs-h2">
            From fragmentation to a unified security experience.
          </h2>
          <div className="cs-prose">
            <p>
              Users care about application risk, not the test type behind it.
              SAST, DAST, and MAST are just different ways of looking at the
              same product, so the redesign puts the application at the
              centre.
            </p>
          </div>
          <ul className="cs-principles">
            {PRINCIPLES.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
          <Frame
            src={fodReleaseOverview}
            nda
            caption="Unified, not merged, in practice: SAST, DAST, and MAST sit as tabs on one release view, sharing the same severity breakdown and issue-analysis bubble chart."
          />
        </section>

        {/* Information architecture */}
        <section className="cs-section" id="fod-ia">
          <span className="cs-eyebrow">Information architecture</span>
          <h2 className="cs-h2">
            Application-first navigation replaced three parallel modality
            silos.
          </h2>
          <div className="fod-ia-grid">
            <div className="fod-ia-panel">
              <span className="cs-bucket__tag">Before</span>
              <h3 className="cs-bucket__title">Modality-first navigation</h3>
              {IA_BEFORE.map(([label, steps]) => (
                <div key={label} className="fod-ia-row">
                  <span className="fod-ia-label">{label}</span>
                  <Chain items={steps} />
                </div>
              ))}
            </div>
            <div className="fod-ia-panel fod-ia-panel--after">
              <span className="cs-bucket__tag">After</span>
              <h3 className="cs-bucket__title">Application-first navigation</h3>
              {IA_AFTER.map(([label, steps]) => (
                <div key={label} className="fod-ia-row">
                  <span className="fod-ia-label">{label}</span>
                  <Chain items={steps} />
                </div>
              ))}
            </div>
          </div>
          <Frame
            src={fodIa}
            nda
            caption="The full application-first sitemap: every section of the redesigned IA branching from the application root down to individual screens."
          />
          <blockquote className="cs-callout">
            Product insisted on modality tabs. Research was unambiguous: 8 of
            8 usability participants found applications faster in the new
            model. Winning this argument was the single highest-leverage
            design decision of the project.
          </blockquote>
        </section>

        {/* Core flows */}
        <section className="cs-section" id="fod-flows">
          <span className="cs-eyebrow">Process</span>
          <h2 className="cs-h2">
            Three core flows, five key screens across three platforms.
          </h2>
          <div className="cs-wires">
            {CORE_FLOWS.map((flow) => (
              <Frame key={flow.title} src={flow.src} nda caption={`${flow.title}: ${flow.concept}`} />
            ))}
          </div>
          <Frame
            src={fodOnboardingFlow}
            nda
            caption="The guided configuration entry point: a single 'ready to get started' prompt replaces the 47-page setup PDF that drove the 4.2-day onboarding cliff."
          />
          <div className="cs-steps">
            {CORE_FLOWS.map((flow) => (
              <div key={flow.title} className="cs-step">
                <div className="cs-step__title">{flow.title}</div>
                <div className="cs-step__text">
                  <p>{flow.concept}</p>
                  <Chain items={flow.structure} />
                </div>
              </div>
            ))}
          </div>
          <ul className="cs-keylist" aria-label="Shared key design decisions">
            {FLOW_DECISIONS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="cs-note">
            Each screen represents a solved user problem: the annotations
            highlight not just what&apos;s on screen, but why it&apos;s there
            and what changed in user behaviour. See Validate &amp; Measure below
            for how these flows were tested before GA.
          </p>
        </section>

        {/* Lead UX decisions */}
        <section className="cs-section" id="fod-decisions">
          <span className="cs-eyebrow">Solution</span>
          <h2 className="cs-h2">Lead UX decisions that moved the needle.</h2>
          <ol className="cs-moves">
            {MOVES.map(([title, body]) => (
              <li key={title} className="cs-move">
                <h3 className="cs-move__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Validate & measure */}
        <section className="cs-section" id="fod-validate">
          <span className="cs-eyebrow">Validate &amp; measure</span>
          <h2 className="cs-h2">
            Two rounds of usability testing, a heuristic pass, and a WCAG
            audit, before any of this reached GA.
          </h2>
          <div className="cs-prose">
            <p>
              Before GA, I put the three core flows in front of the people
              who&apos;d actually live in them: 24 participants, 8 AppSec
              Program Managers, 8 developers, and 8 CISOs, running 6
              benchmark tasks against both the legacy platform and the
              redesign. Round one surfaced the rough edges, the modality-first
              instinct was hard to unlearn, and the first verdict screen
              shipped without reasoning, we fixed them, and round two
              confirmed the fixes held.
            </p>
            <p>
              Alongside the sessions, I ran a heuristic evaluation against
              Nielsen&apos;s 10 heuristics with the Junior Designer, scoring
              every core screen independently on a 0-4 severity scale before
              reconciling. The worst offenders were exactly what the pain
              points predicted: no visibility of system status mid-scan,
              copy mismatched to each persona&apos;s vocabulary, and no error
              prevention in the old 16-step config. Each became a specific
              fix, status chips, role-aware copy, inline validation, rather
              than a vague note.
            </p>
            <p>
              Enterprise security tooling has to meet WCAG 2.1 AA, so
              accessibility wasn&apos;t a pre-GA checkbox, it shaped the
              components directly: severity is never colour alone, an icon
              and a text label ride with every Critical, High, Medium, and Low
              badge, the scan stepper keeps a logical, trapped focus order,
              and every bubble and donut chart on the dashboards ships with a
              text-equivalent summary for screen readers.
            </p>
          </div>
          <div className="cs-val">
            <div className="cs-val__col">
              <h3 className="cs-val__h">What I measured</h3>
              <ul className="cs-val__metrics">
                {VALIDATION_METRICS.map(([name, what, target]) => (
                  <li key={name} className="cs-val__metric">
                    <p className="cs-val__name">{name}</p>
                    <p className="cs-val__what">{what}</p>
                    <p className="cs-val__target">{target}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cs-val__col">
              <h3 className="cs-val__h">Who was involved</h3>
              <ul className="cs-val__team">
                {VALIDATION_TEAM.map(([role, detail]) => (
                  <li key={role} className="cs-val__member">
                    <span className="cs-val__role">{role}</span>
                    <span className="cs-val__detail">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="cs-note">
            Round one to round two: SUS rose from 58 to 84, and the
            benchmark time-to-submit-a-scan dropped from 6.4 to 1.8 minutes.
            The accessibility audit found 31 WCAG 2.1 issues, concentrated in
            colour-only status indicators, unlabelled charts, and two
            keyboard traps in the stepper, and every Level A and AA issue was
            closed before GA.
          </p>
        </section>

        {/* Outcome */}
        <section className="cs-section" id="fod-outcome">
          <span className="cs-eyebrow">Outcome</span>
          <h2 className="cs-h2">Measurable results across every user role.</h2>
          <ul className="cs-stats">
            {OUTCOME_STATS.map(([n, label]) => (
              <li key={label} className="cs-stat cs-stat--accent">
                <span className="cs-stat__num">{n}</span>
                <span className="cs-stat__label">{label}</span>
              </li>
            ))}
          </ul>
          <div className="cs-outcome-roles">
            {OUTCOME_ROLES.map(([role, wins]) => (
              <div className="cs-outcome-role" key={role}>
                <h3 className="cs-outcome-role__h">{role}</h3>
                <ul className="cs-outcome-role__list">
                  {wins.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="cs-wires">
            <Frame
              src={fodProgramDashboard}
              nda
              caption="Program dashboard: applications, releases, users, and scan coverage across the whole portfolio, the board-ready view CISOs used to assemble by hand."
            />
            <Frame
              src={fodRiskDashboard}
              nda
              caption="Risk exposure dashboard: compliance policy, open issues by severity, open-source risk, and technical-debt aging, live instead of a quarterly PDF."
            />
          </div>
          <p className="cs-note">Platform status: GA, adopted by 2,400+ Enterprise Orgs.</p>
        </section>

        {/* Reflection */}
        <section className="cs-section" id="fod-reflection">
          <span className="cs-eyebrow">Reflection</span>
          <h2 className="cs-h2">Lessons learned, and what I&apos;d do next.</h2>
          <ul className="cs-reflect">
            {LESSONS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <Table caption="What I'd prioritise next" head={['Priority', 'Initiative', 'Rationale']}>
            {ROADMAP.map(([priority, title, rationale]) => (
              <tr key={title} className={priority === 'P0' ? 'cs-table__row--flag' : undefined}>
                <td>
                  <span className="chip">{priority}</span>
                </td>
                <td className="cs-table__brand">{title}</td>
                <td>{rationale}</td>
              </tr>
            ))}
          </Table>
          <CaseNav current="fortify" />
        </section>
      </main>

      <Footer />
    </>
  )
}
