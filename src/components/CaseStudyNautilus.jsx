import { useEffect } from 'react'
import { Footer } from './Footer'
import { CaseNav, Frame, SectionNav } from './CaseStudy'
import taskflow from '../assets/nautilus-taskflow.webp'
import currentUi from '../assets/Nautilus-Current-UI.webp'
import lensDashboard from '../assets/Nautilus-Case-Incidents.png'
import workbenchTimeline from '../assets/Nautilus-Workbench.png'
import wireDashboard from '../assets/Nautilus-wire-1.png'
import wireCases from '../assets/Nautilus-wire-2.png'
import wireSearch from '../assets/Nautilus-wire-3.png'
import designSystemMoodboard from '../assets/Nautilus-Design-System.webp'

const IMPACT = [
  ['8', 'products unified into one composable platform'],
  ['6', 'competitors torn down, best and worst practice'],
  ['5', 'research tracks on one shared taxonomy'],
  ['3 + 6', 'designers mentored, PMs aligned'],
]

const SUMMARY = [
  'Eight ArcSight products, grown by acquisition, did not feel like one, and were behind the market.',
  'I led the vision: a six-competitor teardown, five research tracks, and a design system from scratch.',
  'The answer was a composable model, Lens to see and Workbench to act, on one shared design language.',
  'Result: a vision leadership carried forward, and a roadmap-ready backlog for six PMs.',
]

const JUMP = [
  ['np-overview', 'Overview'],
  ['np-problem', 'Problem'],
  ['np-persona', 'Persona'],
  ['np-moves', 'Key moves'],
  ['np-research', 'Research'],
  ['np-concept', 'Concept'],
  ['np-flow', 'Task flow'],
  ['np-wires', 'Wireframes'],
  ['np-outcome', 'Outcome'],
  ['np-reflection', 'Reflection'],
]

const META = [
  ['My role', 'Lead UX Designer, vision and research'],
  ['Team', '3 designers mentored, 6 PMs'],
  ['Org', 'Cybersecurity BU, heritage Micro Focus'],
  ['Portfolio', '8 ArcSight products'],
  ['Focus', 'Vision, competitive research, design system'],
]

const TAGS = [
  'SecOps',
  'SIEM',
  'Vision and strategy',
  'Competitive analysis',
  'Design system',
  'Information architecture',
]

const PRODUCTS = ['ArcMC', 'SOAR', 'ESM', 'Logger', 'Connectors', 'Recon', 'Intelligence', 'THUB']

const PROBLEM = [
  ['Staggered maturity', 'Modules joined at different times and different levels of design maturity.'],
  ['Varied UI philosophies', 'No shared point of view on how the products should look or behave.'],
  ['Varied platforms', 'Different web stacks, so even identical patterns were re-built and drifted apart.'],
  ['Varied integration', 'Modules did not hand off cleanly; users lost context moving between them.'],
  ['Varied resources', 'Uneven design and engineering investment across the modules.'],
]

const PERSONA_FACTS = ['3 yrs in the SOC', 'MSSP, many clients', 'Works in shifts', 'Lives in the queue', '8+ tools a day']
const PERSONA_GOALS = [
  'Clear the queue without losing context',
  'Escalate cleanly, with the full story attached',
  'Keep clients informed without manual busywork',
]
const PERSONA_PAINS = [
  'Clicking overload across separate apps',
  'Context lost at every module hand-off',
  'Non-standard labels she has to translate',
  'Drawing incident diagrams by hand',
  'Alert fatigue from noisy, low-value findings',
]
const PERSONA_TOOLS = ['ESM', 'ArcMC', 'Recon', 'SOAR', 'Ticketing', 'Client comms']
const PERSONA_DAY = [
  ['Triage and monitoring', 35],
  ['Investigation', 25],
  ['Client interaction', 15],
  ['Tuning and playbooks', 15],
  ['Reporting', 10],
]

const WHY = [
  ['01. Build the portfolio', 'Treat the modules as one portfolio, not a bag of acquisitions.'],
  ['02. Fusion', 'A centralized layer to bring the products together.'],
  ['03. Nautilus', 'The unified, composable product: one shell, many modules, one experience.'],
]

const MOVES = [
  ['Made the case with evidence', 'Ran a six-competitor teardown and five research tracks so the vision rested on data, not opinion.'],
  ['Set one design language', 'Built a design system from scratch so eight products, on different stacks, finally read as one.'],
  ['Coined a durable model', 'Lens to see, Workbench to act: a product language the whole portfolio could grow into.'],
  ['Turned research into a roadmap', 'Handed six PMs a sequenced, defensible backlog: parity gaps first, differentiators next.'],
  ['Grew the team', 'Mentored 3 designers and aligned 6 PMs across products that do not sit in the same room.'],
]

const COMPETITORS = [
  ['Splunk', 'Immense power, flexible dashboards, deep search', 'Steep learning curve, dense dashboards, gatekept by code-like search', 'Keep the power, hide it behind progressive disclosure'],
  ['IBM QRadar', 'Strong correlation and offense chaining', 'Dated, fragmented UI, nav scattered across tabs', 'One consistent nav beats depth spread across disjointed screens'],
  ['Rapid7', 'Cloud-native, clean UI, guided investigations', 'Less deep, can feel opinionated for power users', 'Lower the barrier for junior analysts with guided flows'],
  ['Sumo Logic', 'Cloud-native, modern dashboards, elastic scale', 'Security workflows lighter than pure SIEMs', 'Cloud analytics as table stakes, SecOps workflow first-class'],
  ['Securonix', 'UEBA leader, behavioral analytics, risk scoring', 'UI and configuration density', 'Behavior analytics are must-haves, minus the density'],
  ['Exabeam', 'Smart Timelines auto-stitch events into a narrative', 'Tuning effort, some modules feel separate', 'Narrative, context-stitched investigation is the bar to beat'],
]

const LIFECYCLE_ROWS = [
  ['Sumo Logic', '30 days', '4.5', '4.7', '4.1', '4.6', false],
  ['Exabeam', 'none', '4.6', '4.6', '4.3', '4.3', false],
  ['Rapid7', 'unknown', '4.6', '4.4', '4.1', '4.1', false],
  ['Securonix', 'none', '4.5', '4.5', '4.1', '4.2', false],
  ['Splunk', '60 days', '4.3', '4.3', '4.4', '4.2', false],
  ['IBM QRadar', '30 days', '4.2', '4.0', '4.0', '4.1', false],
  ['ArcSight (Microfocus)', '90 days', '4.0', '3.9', '4.1', '3.9', true],
]

const LIFECYCLE_GAPS = [
  ['Support', '3.9, the lowest and 10.6% below the competitor average.'],
  ['Onboarding', '9% below average, deployment needs to be simpler.'],
  ['Training', 'Hard to locate and use, the weakest score in the set.'],
  ['Community', 'Present but nearly dormant, activity is the real metric.'],
  ['Free trial', 'Longest window, but behind the heaviest 4-step form.'],
]

const MATURITY_STAGES = [
  ['1', 'Absent'],
  ['2', 'Limited'],
  ['3', 'Emergent'],
  ['4', 'Structured'],
  ['5', 'Integrated'],
  ['6', 'User-driven'],
]

const MATURITY_ROWS = [
  ['IBM QRadar', '6 · User-driven', 'n/a', 'Strong design system and community', false],
  ['Rapid7', '6 · User-driven', '1.1% · Med', 'Good design system, in-house training', false],
  ['Splunk', '6 · User-driven', '2.9% · High', 'Large team, minimal UI, no DS docs', false],
  ['Exabeam', '5 · Integrated', '1.4% · Med', 'Strong functionality and customer focus', false],
  ['Sumo Logic', '4 · Structured', '1% · Med', 'Aesthetic UI, internal training portal', false],
  ['ArcSight (Microfocus)', '3 · Emergent', '0.6% · Low', 'Functional but inconsistent and inefficient', true],
  ['Securonix', '3 · Emergent', '0.9% · Low', 'New design group, low UI polish', false],
]

const MATURITY_RECS = [
  ['Team', 'Dedicated UX roles, training and certifications, an internal UX community.'],
  ['Resource', 'A design system that is genuinely usable: context, patterns, contribution.'],
  ['Workforce', 'Grow the workforce and standard tooling to raise solution quality.'],
  ['Process', 'Standard research sizing, an artifact repository, shared templates.'],
]

const BUCKETS = [
  {
    tag: 'B · Users ask, no one has',
    title: 'Room to lead',
    note: 'Unclaimed ideas where we could differentiate.',
    items: ['Instant answer and response for troubleshooting', 'Client requests added straight to the analyst to-do list'],
  },
  {
    tag: 'AC · Everyone has, we do not',
    title: 'The credibility deficit',
    note: 'Parity gaps to close first.',
    items: [
      'Automated normalization and one-click connectors',
      'Real-time, cloud-native ingestion',
      'Self-learning detection beyond out-of-box rules',
      'Compliance frameworks (NIST 800-53, ISO 27001, more)',
      'Natural-language search',
      'Guided remediation without a SOAR connection',
    ],
  },
  {
    tag: 'ABC · Market and users, we do not',
    title: 'The urgent gap',
    note: 'Confirmed by competitors and users.',
    items: ['Incident architecture diagrams showing the resources in an incident, already shipped by Securonix and Exabeam'],
  },
]

const IA_ROWS = [
  ['Global navigation', 'Splunk', 'Well positioned, but label visibility is inconsistent', 'Make every menu item easy to explore'],
  ['Event search', 'Securonix', 'Standard term, easy to reach', 'New search with history and saved actions'],
  ['Incidents', 'Splunk', 'Calls it "Cases", non-standard', 'Use the standard "Incidents"'],
  ['Investigation', 'Rapid7', 'Calls it "Common Center", non-standard', 'Use the standard "Investigation"'],
  ['Response (SOAR)', 'ArcSight', 'Calls it "Respond", non-standard', 'Use the standard "SOAR"'],
  ['Analytics', 'Securonix', 'Calls it "Entities at risk"; nav changes here', 'Consistent nav, standard "Analytics"'],
  ['Reporting', 'IBM QRadar', 'Standard term, but labels hide when nav collapses', 'Keep primary nav visible always'],
]

const NAV_ROWS = [
  ['ArcSight (Microfocus)', 'Vertical, collapsible left nav', 'App switcher fixed on the left nav', true],
  ['IBM QRadar', 'Top, horizontal at second level', 'Hamburger reveals functions, no app-switch redirect', false],
  ['Rapid7', 'Persistent top bar plus left nav', 'App-switcher up top, left nav for functions', false],
  ['Splunk', 'Top app menu plus functional tabs', 'Global app-switch, hierarchical multilevel nav', false],
  ['Exabeam', 'Persistent top bar', 'Minimalist, no redirection between products', false],
  ['Sumo Logic', 'Top-level tabs', 'Cannot switch apps, form-like nav', false],
  ['Securonix', 'Top mega menu', 'Mega menu switches apps, secondary nav up top', false],
]

const STEAL = [
  'Search with live assistance',
  'In-context wizards',
  'Field-level lookup and stats',
  'Chart builder from results',
  'Quick actions anywhere',
  'Customizable navigation',
]

// Each research section notes where Micro Focus / ArcSight already stood out.
const STANDOUTS = {
  competitive: 'The engine was already strong, deep correlation in ESM and a solid SOAR workflow. The capability was there; the experience was not.',
  lifecycle: 'ArcSight offered the most generous evaluation window in the group, a 90-day free trial, longer than any competitor.',
  maturity: 'It had the largest raw design bench, 39 designers plus 14 leads, and standard tooling already in place. The foundation was there; it needed system and practice.',
  tablestakes: 'Customers trust it for the heavy lifting, they rely on the ArcMC dashboard for health monitoring and on ArcSight to auto-generate client reports.',
  ia: 'ArcSight was the leading brand for Response (SOAR) and a co-leader for dashboards, both at the primary level. The structure was competitive; the vocabulary was not.',
  pattern: 'A single app switcher with expandable submenus already kept every capability reachable from one place, a base to evolve toward one window.',
}

const PRINCIPLES = [
  ['One language across modules', 'A single visual and interaction system, so eight products read as one.'],
  ['Standard words, not our words', 'The vocabulary users already think in: Incidents, Investigation, SOAR, Analytics.'],
  ['Guide the junior, empower the senior', 'Progressive disclosure: guided on top, full depth underneath.'],
  ['Context follows the analyst', 'Keep context across a task instead of forcing a pivot between apps.'],
  ['See before you dig', 'Analytics first: trends and priorities up front, raw data on demand.'],
]

const SCENARIOS = [
  ['Log management and compliance', 'Collection, retention, and compliance reporting across Logger, Connectors, and ArcMC.'],
  ['Realtime correlation', 'Live event correlation into prioritized incidents in ESM.'],
  ['User behavior analytics', 'Behavioral risk scoring and threat chains, minus the density.'],
  ['SOAR response', 'Guided response and automation, with no separate product to jump to.'],
]

const WIRES = [
  [wireDashboard, 'Dashboard: critical cases, MITRE-mapped severity, and malware distribution at a glance.'],
  [wireCases, 'Cases: list, detail, and one shared severity, status, and timeline language.'],
  [wireSearch, 'Search: a query builder, an event histogram, and one results table across every source.'],
]

const OUTCOME_STATS = [
  ['Adopted', 'Leadership carried the vision forward as the portfolio direction'],
  ['8 → 1', 'Eight products converging on one design language'],
  ['6 PMs', 'Handed a sequenced, roadmap-ready backlog'],
]

const OUTCOME_WINS = [
  'A portfolio-wide UX vision, Lens and Workbench, reviewed and carried forward as the direction for the cybersecurity products.',
  'A structured teardown of six market leaders that gave PMs a defensible parity list and leadership a reason to invest.',
  'A from-scratch design system and unified IA that moved eight products, on different stacks, toward one recognizable experience.',
]

const REFLECTION = [
  'Consistency turned out to be the feature. The loudest complaint was not a missing capability, it was that the modules did not feel like one product. A shared language did more for perceived quality than any single feature.',
  'Anchoring the vision in structured research is what made it fundable. "Here is exactly where we are behind, and why" turned a subjective pitch into a business case.',
  'What I would measure next: cross-module task-time, a portfolio consistency score, and design-system adoption across the product teams.',
]

function Standout({ children }) {
  return (
    <aside className="cs-standout">
      <span className="cs-standout__label">Where ArcSight stood out</span>
      <p>{children}</p>
    </aside>
  )
}

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

export function CaseStudyNautilus() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const prev = document.title
    document.title = 'Nautilus, a unified SecOps platform vision, case study'
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
          <p className="cs-kicker">Security operations, ArcSight portfolio vision</p>
          <h1 className="cs-title">Nautilus</h1>
          <p className="cs-lead">
            Setting a new UX vision for a cybersecurity portfolio stitched
            together from years of acquisitions, and turning eight
            separately-built products into one coherent, composable platform.
          </p>
          <ul className="cs-impact" aria-label="At a glance">
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
          <Frame
            src={currentUi}
            nda
            caption="Flashback to present: eight products acquired over two decades, and the current-state SOC dashboards, cases, and analytics."
          />
          <p className="cs-nda">
            Shared under NDA. Screens on this page are ArcSight&apos;s own
            product and research visuals, lightly blurred, and specific
            figures are saved for a conversation.{' '}
            <a href="mailto:vijaykumarpdm@live.com">Get in touch</a> to see it
            in full.
          </p>
        </section>

        {/* Overview */}
        <section className="cs-section" id="np-overview">
          <span className="cs-eyebrow">Overview</span>
          <h2 className="cs-h2">
            How do you make eight products, built by different teams over a
            decade, feel like one?
          </h2>
          <div className="cs-prose">
            <p>
              ArcSight is a suite of <span className="hl">SIEM and SOAR</span>{' '}
              (security information &amp; event management, and security
              orchestration, automation &amp; response) products that grew
              through acquisition. Each module was strong alone, but together
              they were inconsistent and behind the market, and customers could
              not tell they came from the same vendor. Leadership asked for a
              new vision, and an evidenced read on where we were behind. I led
              that work, from the research to the composable direction that
              gave the portfolio one shape.
            </p>
          </div>
          <ul className="chips cs-hero__tags" aria-label="The ArcSight suite">
            {PRODUCTS.map((p) => (
              <li key={p} className="chip">
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* Problem */}
        <section className="cs-section" id="np-problem">
          <span className="cs-eyebrow">Problem</span>
          <h2 className="cs-h2">
            Eight products, built by different teams on different stacks, and
            users paid the price at every seam.
          </h2>
          <blockquote className="cs-callout">
            In security operations, friction is not just annoying, it is risk.
            Every extra pivot and every relearned pattern is time added while an
            incident is live.
          </blockquote>
          <ul className="cs-principles">
            {PROBLEM.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Persona */}
        <section className="cs-section" id="np-persona">
          <span className="cs-eyebrow">Who I designed for</span>
          <h2 className="cs-h2">
            The analyst who lives in the queue, with the clock always running.
          </h2>
          <div className="cs-persona">
            <div className="cs-persona__top">
              <div className="cs-persona__head">
                <span className="cs-persona__avatar" aria-hidden="true">
                  MA
                </span>
                <div>
                  <p className="cs-persona__name">Maya</p>
                  <p className="cs-persona__role">
                    SOC analyst, tier 1 to 2, at a managed security provider
                  </p>
                  <ul className="cs-persona__facts">
                    {PERSONA_FACTS.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <blockquote className="cs-persona__quote">
                I live in the queue. Every tool switch loses my place, and the
                clock is always running.
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
                  {PERSONA_PAINS.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="cs-persona__block">
                <h3 className="cs-persona__h">Tools she lives in</h3>
                <ul className="cs-persona__tools">
                  {PERSONA_TOOLS.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="cs-persona__block">
                <h3 className="cs-persona__h">Where her shift goes</h3>
                <ul className="cs-persona__bars">
                  {PERSONA_DAY.map(([label, pct]) => (
                    <li key={label} className="cs-persona__bar">
                      <span className="cs-persona__bar-label">{label}</span>
                      <span className="cs-persona__bar-track">
                        <span className="cs-persona__bar-fill" style={{ width: `${pct}%` }} />
                      </span>
                      <span className="cs-persona__bar-val">{pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="cs-note">
            Secondary: the SOC manager, who needs portfolio-wide visibility and
            clean reporting to brief leadership.
          </p>
        </section>

        {/* The brief */}
        <section className="cs-section">
          <span className="cs-eyebrow">The brief</span>
          <h2 className="cs-h2">
            From a bag of acquisitions to one composable product, in three moves.
          </h2>
          <div className="cs-prose">
            <p>
              With analysts like Maya carrying the cost of every pivot,
              leadership framed the mandate plainly: stop shipping eight
              products and start shipping one portfolio.
            </p>
          </div>
          <ul className="cs-principles">
            {WHY.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Key moves */}
        <section className="cs-section" id="np-moves">
          <span className="cs-eyebrow">How I led it</span>
          <h2 className="cs-h2">
            The key moves I made leading this as the front designer.
          </h2>
          <div className="cs-prose">
            <p>
              Turning that mandate into a vision the business could act on took
              five deliberate moves, from the evidence base up to the team that
              carried it.
            </p>
          </div>
          <ol className="cs-moves">
            {MOVES.map(([title, body]) => (
              <li key={title} className="cs-move">
                <h3 className="cs-move__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Research: competitive analysis */}
        <section className="cs-section" id="np-research">
          <span className="cs-eyebrow">Research · Competitive analysis</span>
          <h2 className="cs-h2">
            Six competitors, one structured teardown of what to steal and what
            to avoid.
          </h2>
          <Table
            caption="Competitor best and worst practice"
            head={['Competitor', 'Adopt', 'Avoid', 'Takeaway']}
          >
            {COMPETITORS.map(([name, adopt, avoid, take]) => (
              <tr key={name}>
                <td className="cs-table__brand">{name}</td>
                <td>{adopt}</td>
                <td>{avoid}</td>
                <td>{take}</td>
              </tr>
            ))}
          </Table>
          <Standout>{STANDOUTS.competitive}</Standout>
        </section>

        {/* Research: lifecycle */}
        <section className="cs-section">
          <span className="cs-eyebrow">Research · Lifecycle gaps</span>
          <h2 className="cs-h2">
            Our onboarding and support scored below every competitor average,
            &ldquo;UX&rdquo; meant more than screens.
          </h2>
          <Table
            caption="Lifecycle scorecard"
            head={['Brand', 'Trial', 'Onboarding', 'Support', 'Community', 'Training']}
          >
            {LIFECYCLE_ROWS.map(([brand, trial, onb, sup, comm, train, flag]) => (
              <tr key={brand} className={flag ? 'cs-table__row--flag' : undefined}>
                <td className="cs-table__brand">{brand}</td>
                <td>{trial}</td>
                <td>{onb}</td>
                <td>{sup}</td>
                <td>{comm}</td>
                <td>{train}</td>
              </tr>
            ))}
          </Table>
          <ul className="cs-keylist" aria-label="Gaps found">
            {LIFECYCLE_GAPS.map(([title, body]) => (
              <li key={title}>
                <strong>{title}</strong> {body}
              </li>
            ))}
          </ul>
          <Standout>{STANDOUTS.lifecycle}</Standout>
        </section>

        {/* Research: maturity */}
        <section className="cs-section">
          <span className="cs-eyebrow">Research · UX maturity</span>
          <h2 className="cs-h2">
            We were a stage-3 UX organization competing against stage-6 teams.
          </h2>
          <ol className="cs-ladder" aria-label="UX maturity stages">
            {MATURITY_STAGES.map(([num, label]) => (
              <li key={num} className={`cs-ladder__item${num === '3' ? ' is-active' : ''}`}>
                <span className="cs-ladder__num">{num}</span>
                {label}
                {num === '3' ? <span className="cs-ladder__tag">ArcSight</span> : null}
              </li>
            ))}
          </ol>
          <Table
            caption="UX maturity by organization"
            head={['Brand', 'Maturity', 'UX density', 'Key factor']}
          >
            {MATURITY_ROWS.map(([brand, stage, density, factor, flag]) => (
              <tr key={brand} className={flag ? 'cs-table__row--flag' : undefined}>
                <td className="cs-table__brand">{brand}</td>
                <td>{stage}</td>
                <td>{density}</td>
                <td>{factor}</td>
              </tr>
            ))}
          </Table>
          <p className="cs-note">
            The lowest UX density of the group, despite the largest raw bench.
            Maturity is about system and practice, not headcount. That produced
            four investment areas.
          </p>
          <ul className="cs-principles">
            {MATURITY_RECS.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
          <Standout>{STANDOUTS.maturity}</Standout>
        </section>

        {/* Research: table stakes */}
        <section className="cs-section">
          <span className="cs-eyebrow">Research · Table stakes</span>
          <h2 className="cs-h2">
            An A/B/C gap map that separated &ldquo;we&apos;re behind&rdquo; from
            &ldquo;we could lead.&rdquo;
          </h2>
          <div className="cs-prose">
            <p>
              I cross-referenced three inventories on one taxonomy: what
              competitors ship (A), what users ask for (B), and what ArcSight
              lacks (C). Each gap was tagged by which circles it fell into, which
              turned a wishlist into a sequenced backlog.
            </p>
          </div>
          <div className="cs-buckets">
            {BUCKETS.map((b) => (
              <div key={b.tag} className={`cs-bucket${b.tag.startsWith('ABC') ? ' cs-bucket--urgent' : ''}`}>
                <span className="cs-bucket__tag">{b.tag}</span>
                <h3 className="cs-bucket__title">{b.title}</h3>
                <p className="cs-bucket__note">{b.note}</p>
                <ul className="cs-bucket__list">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <blockquote className="cs-callout">
            &ldquo;Clients need that instant answer, work culture has
            changed.&rdquo; The analyst voice is what kept the backlog honest.
          </blockquote>
          <Standout>{STANDOUTS.tablestakes}</Standout>
        </section>

        {/* Research: IA */}
        <section className="cs-section">
          <span className="cs-eyebrow">Research · Information architecture</span>
          <h2 className="cs-h2">
            We called incidents &ldquo;Cases&rdquo; and investigation
            &ldquo;Common Center&rdquo;, users had to translate our own product.
          </h2>
          <Table
            caption="Information architecture benchmark"
            head={['Feature', 'Leads', 'ArcSight today', 'Recommendation']}
          >
            {IA_ROWS.map(([feature, lead, today, rec]) => (
              <tr key={feature}>
                <td className="cs-table__brand">{feature}</td>
                <td>{lead}</td>
                <td>{today}</td>
                <td>{rec}</td>
              </tr>
            ))}
          </Table>
          <Standout>{STANDOUTS.ia}</Standout>
        </section>

        {/* Research: design pattern */}
        <section className="cs-section">
          <span className="cs-eyebrow">Research · Design patterns</span>
          <h2 className="cs-h2">
            Unified, single-window navigation beats a bag of apps you launch
            separately.
          </h2>
          <Table
            caption="Navigation pattern teardown"
            head={['Product', 'Navigation pattern', 'Notable behavior']}
          >
            {NAV_ROWS.map(([product, pattern, behavior, flag]) => (
              <tr key={product} className={flag ? 'cs-table__row--flag' : undefined}>
                <td className="cs-table__brand">{product}</td>
                <td>{pattern}</td>
                <td>{behavior}</td>
              </tr>
            ))}
          </Table>
          <p className="cs-note">Patterns worth stealing, and building into the new system:</p>
          <ul className="chips cs-frustrations" aria-label="Patterns to adopt">
            {STEAL.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
          <Standout>{STANDOUTS.pattern}</Standout>
        </section>

        {/* Synthesis / principles */}
        <section className="cs-section">
          <span className="cs-eyebrow">Synthesis</span>
          <h2 className="cs-h2">
            Five research tracks, distilled into the principles Nautilus is built
            on.
          </h2>
          <ul className="cs-principles">
            {PRINCIPLES.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Concepts */}
        <section className="cs-section" id="np-concept">
          <span className="cs-eyebrow">The concept</span>
          <h2 className="cs-h2">Lens to see, Workbench to act.</h2>
          <div className="cs-steps">
            <article className="cs-step">
              <div className="cs-step__text">
                <h3 className="cs-step__title">Lens, to see</h3>
                <p>
                  Immersive dashboards to spot trends, set priorities, and
                  explore activity. The analytics-first front door: land, see
                  what matters, decide where to look. It keeps the power the best
                  competitors have, and drops the clutter the rest carry.
                </p>
              </div>
              <Frame
                src={lensDashboard}
                nda
                caption="Lens: severity and SLA at a glance, threat categories over time, and a team performance gauge."
              />
            </article>
            <article className="cs-step">
              <div className="cs-step__text">
                <h3 className="cs-step__title">Workbench, to act</h3>
                <p>
                  Focus areas built around a group of tasks, so the analyst stops
                  hopping between ESM, Recon, and SOAR and losing context at every
                  seam. One workspace built around the job to be done, the direct
                  answer to the pivot problem the research surfaced.
                </p>
              </div>
              <Frame
                src={workbenchTimeline}
                nda
                caption="Workbench: one case, one timeline, an SLA countdown, and enrichment, actions, and playbooks in place."
              />
            </article>
          </div>
        </section>

        {/* Task flow */}
        <section className="cs-section" id="np-flow">
          <span className="cs-eyebrow">Task flow</span>
          <h2 className="cs-h2">
            One task flow, from login to closed case, that every SOC scenario
            runs on.
          </h2>
          <div className="cs-prose">
            <p>
              Rather than four disconnected diagrams, I mapped a single
              end-to-end flow covering all four scenarios, from login and role
              dashboards through case management, playbooks, and case
              information, down to event and entity details. The four core jobs
              below are variations on this one flow.
            </p>
          </div>
          <figure className="cs-diagram cs-diagram--nda">
            <img
              src={taskflow}
              alt="End-to-end task flow across all four scenarios: log management and compliance, realtime correlation, UBA, and SOAR. It runs from login and role dashboards through case list and case details, playbook execution, case information, and event and entity details."
            />
            <div className="cs-diagram__blur" aria-hidden="true" />
          </figure>
          <ul className="cs-principles cs-scenarios">
            {SCENARIOS.map(([title, body]) => (
              <li key={title} className="cs-principle">
                <h3 className="cs-principle__title">{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Wireframes */}
        <section className="cs-section" id="np-wires">
          <span className="cs-eyebrow">Wireframes</span>
          <h2 className="cs-h2">
            From wireframe to working screen: one navigation, one language,
            across every module.
          </h2>
          <div className="cs-prose">
            <p>
              Built on the new design system, these early screens carried Lens
              and Workbench from concept to something a stakeholder could click
              through, the same top navigation and vocabulary on Dashboard,
              Cases, and Search alike.
            </p>
          </div>
          <div className="cs-wires">
            {WIRES.map(([src, caption]) => (
              <Frame key={caption} src={src} nda caption={caption} />
            ))}
          </div>
        </section>

        {/* Design system */}
        <section className="cs-section">
          <span className="cs-eyebrow">Design system</span>
          <h2 className="cs-h2">
            One design language so eight products finally look like one.
          </h2>
          <div className="cs-prose">
            <p>
              Before locking a direction, I explored six dark-theme moodboards
              and three light companions, each with its own palette and type,
              and a dashboard mock to pressure-test how the theme held up in a
              real, data-dense screen. Tokens, components, and canonical
              patterns followed from there, seeded by the pattern research,
              built for incremental adoption across modules on different stacks
              rather than a big-bang rewrite.
            </p>
          </div>
          <Frame
            src={designSystemMoodboard}
            nda
            caption="Moodboard exploration: six dark-theme directions and three light companions, each pressure-tested against a live dashboard."
          />
        </section>

        {/* Outcome */}
        <section className="cs-section" id="np-outcome">
          <span className="cs-eyebrow">Outcome</span>
          <h2 className="cs-h2">
            A vision leadership carried forward, and a shared language the teams
            could build on.
          </h2>
          <ul className="cs-stats">
            {OUTCOME_STATS.map(([n, label]) => (
              <li key={label} className="cs-stat cs-stat--accent">
                <span className="cs-stat__num">{n}</span>
                <span className="cs-stat__label">{label}</span>
              </li>
            ))}
          </ul>
          <ul className="cs-reflect cs-outcome__wins">
            {OUTCOME_WINS.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <p className="cs-note">
            This is a vision and research story first. The proof is the
            thinking: the line from research to concept, and a design language
            durable enough to unify a portfolio.
          </p>
        </section>

        {/* Reflection */}
        <section className="cs-section" id="np-reflection">
          <span className="cs-eyebrow">Reflection</span>
          <h2 className="cs-h2">
            Consistency turned out to be the feature customers wanted most.
          </h2>
          <ul className="cs-reflect">
            {REFLECTION.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <CaseNav current="nautilus" />
        </section>
      </main>

      <Footer />
    </>
  )
}
