import { useEffect, useRef, useState } from 'react'
import { Footer } from './Footer'
import remediationDashboard from '../assets/Remediation dashboard.webp'
import taskflow from '../assets/Taskflow.webp'
import scanCompletion from '../assets/Scan-completion.jpg'
import aiAnalysis from '../assets/AI-analysis.png'
import securityLeadReview from '../assets/Security-lead-review.png'
import aiRemediation from '../assets/AI-powered-remediation.png'
import aviatorRoi from '../assets/Aviator_ROI.png'

// Every case study on the site now ships a real (blurred, if NDA) screenshot,
// so Frame always renders an <img>; there's no unrendered-placeholder path.
export function Frame({ src, caption, nda }) {
  return (
    <figure className="cs-frame">
      <div className="cs-frame__window">
        <div className="cs-frame__bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <img
          className={nda ? 'cs-frame__img cs-frame__img--nda' : 'cs-frame__img'}
          src={src}
          alt={caption || ''}
        />
        {nda ? <div className="cs-frame__nda" aria-hidden="true" /> : null}
      </div>
      {caption ? <figcaption className="cs-frame__cap">{caption}</figcaption> : null}
    </figure>
  )
}

// Curated strongest-outcome-first order, matching the Work section on the landing page.
const CASE_STUDIES = [
  { key: 'fortify', href: '#/case/fortify', kicker: 'Cloud application security', title: 'Fortify on Demand, reimagined' },
  { key: 'iga', href: '#/case/iga', kicker: 'Identity Governance', title: 'IGA \u2014 audit-ready access' },
  { key: 'sast', href: '#/case/sast', kicker: 'Application Security', title: 'SAST \u2014 AI-assisted remediation' },
  { key: 'nautilus', href: '#/case/nautilus', kicker: 'Security Operations', title: 'Nautilus' },
  { key: 'winwire', href: '#/case/winwire', kicker: 'Early Career, 2014\u20132018', title: 'WinWire \u2014 B2B portals & enterprise intranets' },
]

// Prev/next case-study navigation, shown at the foot of every case study page.
export function CaseNav({ current }) {
  const idx = CASE_STUDIES.findIndex((c) => c.key === current)
  const prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length]
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length]
  return (
    <nav className="cs-nextprev" aria-label="More case studies">
      <a className="cs-nextprev__link cs-nextprev__link--prev" href={prev.href}>
        <span className="cs-nextprev__dir">&larr; Previous</span>
        <span className="cs-nextprev__kicker">{prev.kicker}</span>
        <span className="cs-nextprev__title">{prev.title}</span>
      </a>
      <a className="cs-nextprev__link cs-nextprev__link--all" href="#work">
        All projects
      </a>
      <a className="cs-nextprev__link cs-nextprev__link--next" href={next.href}>
        <span className="cs-nextprev__dir">Next &rarr;</span>
        <span className="cs-nextprev__kicker">{next.kicker}</span>
        <span className="cs-nextprev__title">{next.title}</span>
      </a>
    </nav>
  )
}

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Sticky "jump to section" tab bar, active tab tracks scroll position.
export function SectionNav({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.[0])
  const observerRef = useRef(null)

  useEffect(() => {
    const sections = items.map(([id]) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return undefined

    observerRef.current?.disconnect()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    observerRef.current = observer
    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="cs-jump" aria-label="Jump to section">
      {items.map(([id, label]) => (
        <button
          key={id}
          type="button"
          className={id === activeId ? 'is-active' : undefined}
          aria-current={id === activeId ? 'true' : undefined}
          onClick={() => scrollToId(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

const META = [
  ['My Role', 'Lead UX Designer'],
  ['Team', 'BU Head, 2 PMs, 6 Engineers'],
  ['Duration', '6 months'],
  ['Platforms', 'Web app and IDE plugins'],
  ['Origin', 'Self-initiated, shipped to customers'],
]

const TAGS = ['SAST', 'DAST', 'SCA', 'MAST', 'AI-driven UX', 'Enterprise SaaS']

const JUMP = [
  ['sc-context', 'Context'],
  ['sc-problem', 'Problem'],
  ['sc-persona', 'Persona'],
  ['sc-approach', 'Approach'],
  ['sc-flow', 'Task flow'],
  ['sc-solution', 'Solution'],
  ['sc-validation', 'Validation'],
  ['sc-outcome', 'Outcome'],
  ['sc-reflection', 'Reflection'],
]

const BASELINE = [
  ['52%', 'of all findings were false positives, causing severe alert fatigue'],
  ['18 min', 'to manually audit a single finding, across 400+ findings per sprint'],
  ['23%', 'of developers ever checked security results; the rest ignored them'],
]

const FRUSTRATIONS = [
  'False positives',
  'Slow scans',
  'Poor developer UX',
  'No fix guidance',
  'Hard prioritization',
]

const PRINCIPLES = [
  [
    'Human in the loop',
    'AI proposes, people decide. Every automated fix has a review path and an audit trail, because a wrong auto-fix in security tooling is expensive.',
  ],
  [
    'Cut the noise first',
    'Filter low-confidence findings before they reach a person, so attention goes to what actually matters.',
  ],
  [
    'Meet developers where they work',
    'Deliver fixes and context inside the IDE, so security stops being a separate chore.',
  ],
  [
    'Progressive disclosure',
    'Lead with a clear summary, then let every metric drill down into the underlying detail on demand.',
  ],
  [
    'Accessible by default',
    'Built to WCAG 2.1 and validated with accessibility, usability, and heuristic reviews before GA.',
  ],
]

const PROCESS = [
  {
    title: '01. Scan completion and normalization',
    body: 'SAST, DAST, SCA, and MAST scans run continuously across the portfolio. The system normalizes formats across tools and de-duplicates everything into one unified vulnerability dataset, so the AI reasons over a single source of truth instead of four noisy ones.',
    image: scanCompletion,
    caption: 'Scan status across SAST, DAST, and SCA.',
  },
  {
    title: '02. AI analysis and prioritization',
    body: 'Machine learning identifies patterns, scores risk, and auto-classifies findings, weighing CVSS, business context, asset criticality, and historical exploit patterns. Low-confidence noise gets filtered out before it ever reaches a human.',
    image: aiAnalysis,
    caption: 'AI-generated analysis and prioritization for a completed scan.',
  },
  {
    title: '03. Security lead review',
    body: 'The lead sees actionable intelligence, not raw scan output. A business impact assessment splits Critical and High from Medium and Low, driving resource allocation and explicit risk-acceptance decisions.',
    image: securityLeadReview,
    caption: 'Security lead review, with per-finding audit and risk decisions.',
  },
  {
    title: '04. AI-powered remediation',
    body: 'For prioritized issues, the engine generates specific code-fix suggestions and implementation guidance. AI auto-fix handles common patterns, and complex issues route to guided manual developer review, always with a human in the loop.',
    image: aiRemediation,
    caption: 'AI-generated fix recommendation shown inline with the finding.',
  },
  {
    title: '05. Metrics and ROI',
    body: 'Time saved and manual-effort reduction are tracked continuously. Every metric on the dashboard is a clickable entry point that drills straight into a filtered detail view: status, remediation history, and implementation notes.',
    image: aviatorRoi,
    caption: 'ROI summary: time saved, issues auto-reviewed, and cost avoided.',
  },
]

const USE_CASES = [
  {
    title: 'Post-scan AI analysis and prioritization',
    personas: 'Security Lead, AI engine, Dev team',
    body: 'Scan results are processed automatically and turned into risk-based prioritization in minutes instead of hours of manual triage.',
    target: 'Target: cut manual triage by around 75% and push false positives below 10%.',
  },
  {
    title: 'AI-assisted code remediation',
    personas: 'Security Lead, Developers',
    body: 'The remediation engine generates specific code fixes and guidance; the lead approves auto-fixes where appropriate and tracks implementation across teams.',
    target: 'Target: reduce mean time to remediation with a high auto-fix success rate.',
  },
  {
    title: 'Executive vulnerability reporting',
    personas: 'Security Lead, Executives, Compliance',
    body: 'Executive dashboards surface trend analysis, risk reduction, and business-value quantification to support data-driven security investment.',
    target: 'Target: real-time KPIs that justify continued program funding.',
  },
  {
    title: 'Developer workflow integration',
    personas: 'Developer, Security Lead',
    body: 'Developers receive vulnerability alerts directly in their IDE, complete with AI fix suggestions and guidance, with no context switching out to a separate tool.',
    target: 'Target: over 90% developer adoption with fast feedback loops.',
  },
  {
    title: 'Compliance and audit preparation',
    personas: 'Security Lead, Auditors',
    body: 'Complete remediation evidence and AI-generated audit trails streamline reporting and demonstrate continuous monitoring.',
    target: 'Target: halve audit prep while keeping full coverage (SOC 2, PCI DSS, GDPR).',
  },
]

const OUTCOMES = [
  ['20%', 'fewer support tickets'],
  ['35%', 'higher task completion'],
  ['2nd', 'place at the internal hackathon, then shipped'],
]

const OUTCOME_WINS = [
  'Shipped to selected customers as an add-on to the core Application Security product.',
  'Accessibility, usability, and heuristic findings folded into the GA build.',
  'Consistently positive feedback from internal stakeholders and early customers.',
]

const REFLECTION = [
  'Trust is the real UX problem in AI security tooling. Adoption came from transparency: showing why a finding matters, what a fix does, and keeping an audit trail. It did not come from automation alone.',
  'Starting from a concrete persona and an end-to-end task flow surfaced the branching (severity, plus auto-fix versus manual review) early and kept scope honest.',
  'Next: measure real post-GA developer adoption and false-positive rates, expand IDE plugin coverage, and feed accepted or rejected fixes back into prioritization.',
]

const VALIDATION_METRICS = [
  ['Task success rate', 'Could a security lead go from a fresh scan to an assigned fix unaided.', 'Why: if the core job needs hand-holding, nothing else about the tool matters.'],
  ['Time to triage', 'Minutes to clear a scan, measured against the old manual pass.', 'Why: the whole pitch was speed, so I had to prove the time actually dropped.'],
  ['Trust in the AI fix', 'Whether people accepted a suggested fix or re-checked every line first.', 'Why: adoption dies if people do not trust the AI, so this was the make-or-break signal.'],
  ['False-positive burden', 'How often dismissed, low-value findings still reached the user.', 'Why: alert fatigue was the original problem, so the noise had to visibly drop.'],
  ['SUS and SEQ', 'System Usability Scale per round, Single Ease Question per task.', 'Why: gives a comparable, industry-benchmarked score to track round over round.'],
]

const VALIDATION_TEAM = [
  ['Five security leads', 'The primary persona. If the triage flow does not fit their week it fails, and five users surface most of the issues.'],
  ['Four developers', 'They act on fixes inside the IDE, so their adoption is half the product.'],
  ['Me, research and design', 'I owned the flows, so I ran the sessions to hit my own blind spots first-hand.'],
  ['Product manager', 'On hand to make trade-off calls about what was worth fixing before GA.'],
  ['Two engineers', 'Watched live so fixes were scoped for feasibility, not thrown over the wall.'],
  ['Accessibility specialist', 'Enterprise security tools have to meet WCAG, so it could not be an afterthought.'],
]

const PERSONA_FACTS = [
  'Age 35',
  '8+ yrs in security',
  'CISSP, CISM',
  'Leads a team of 6',
  '47 apps in scope',
]

const PERSONA_GOALS = [
  'Cut application security risk across the whole portfolio',
  'Get real fixes shipped faster, not just findings logged',
  'Show leadership a clear return on security spend',
]

const PERSONA_PAINS = [
  'Manual triage delays the fixes that matter most',
  'False positives bury real risk in noise',
  'No single view of progress across eight dev teams',
  'Developers deprioritise security work',
  'Tools live outside the developer workflow',
]

const PERSONA_TOOLS = ['Veracode', 'Checkmarx', 'ServiceNow', 'Jira', 'Splunk', 'AWS Security Hub']

const PERSONA_DAY = [
  ['Vulnerability management', 30],
  ['Team coordination', 25],
  ['Compliance', 20],
  ['Tool management', 15],
  ['Strategy', 10],
]

export function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const prev = document.title
    document.title = 'AI-powered SAST remediation case study'
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
          <p className="cs-kicker">Application Security, SAST</p>
          <h1 className="cs-title">AI-powered vulnerability remediation</h1>
          <p className="cs-lead">
            Redesigned an AI-powered <span className="hl">SAST</span> (static
            application security testing) platform to kill alert fatigue, pull
            developers into the security workflow, and turn a compliance
            checkbox into a team superpower.
          </p>
          <ul className="cs-impact" aria-label="Impact at a glance">
            {OUTCOMES.map(([n, label]) => (
              <li key={label}>
                <span className="cs-impact__num">{n}</span>
                <span className="cs-impact__label">{label}</span>
              </li>
            ))}
          </ul>
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
            This work is under NDA. Screens here are blurred or generalised and
            exact figures are shared on request.{' '}
            <a href="mailto:vijaykumarpdm@live.com">Get in touch</a>.
          </p>
          <Frame src={remediationDashboard} nda caption="Remediation dashboard, the overview screen a security lead opens each morning." />
        </section>

        {/* Context */}
        <section className="cs-section" id="sc-context">
          <span className="cs-eyebrow">01</span>
          <h2 className="cs-h2">Context</h2>
          <div className="cs-prose">
            <p>
              This shipped as an add-on to our core Application Security product.
              During the wave of AI momentum, a PM and I kept circling the same
              question: we already run vulnerability assessment across SAST,
              DAST, and MAST, so why can't we use AI to <em>remediate</em>{' '}
              automatically after every scan?
            </p>
            <p>
              We prototyped the idea, benchmarked competitors (who were still
              behind on this), and pitched it as an end-to-end concept with full
              use cases and a visual task flow. It won 2nd place at an internal
              hackathon, earned business approval, and went out to a set of early
              customers. Before GA we ran accessibility, usability, and heuristic
              evaluation and folded the findings into the shipped build.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="cs-section" id="sc-problem">
          <span className="cs-eyebrow">02</span>
          <h2 className="cs-h2">The problem</h2>
          <div className="cs-prose">
            <p>
              Security teams were drowning. Vulnerabilities grow exponentially
              while security headcount stays flat, so{' '}
              <span className="hl">60-70% of a team's time</span> disappears
              into manual triage and analysis. That delays remediation, burns
              people out, and quietly raises business risk.
            </p>
          </div>
          <blockquote className="cs-callout">
            When more than half of every alert is noise, people stop reading the
            alerts. That was the real problem to solve.
          </blockquote>
          <ul className="cs-stats">
            {BASELINE.map(([n, label]) => (
              <li key={n} className="cs-stat">
                <span className="cs-stat__num">{n}</span>
                <span className="cs-stat__label">{label}</span>
              </li>
            ))}
          </ul>
          <ul className="chips cs-frustrations" aria-label="Frustrations solved">
            {FRUSTRATIONS.map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Research */}
        <section className="cs-section" id="sc-persona">
          <span className="cs-eyebrow">03</span>
          <h2 className="cs-h2">Who I designed for</h2>
          <div className="cs-persona">
            <div className="cs-persona__top">
              <div className="cs-persona__head">
                <span className="cs-persona__avatar" aria-hidden="true">
                  SC
                </span>
                <div>
                  <p className="cs-persona__name">Sarah Chen</p>
                  <p className="cs-persona__role">
                    Senior Security Lead, application security
                  </p>
                  <ul className="cs-persona__facts">
                    {PERSONA_FACTS.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <blockquote className="cs-persona__quote">
                A confusing screen slows down someone trying to stop a breach.
                Give me signal, not noise.
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
                <h3 className="cs-persona__h">Where her week goes</h3>
                <ul className="cs-persona__bars">
                  {PERSONA_DAY.map(([label, pct]) => (
                    <li key={label} className="cs-persona__bar">
                      <span className="cs-persona__bar-label">{label}</span>
                      <span className="cs-persona__bar-track">
                        <span
                          className="cs-persona__bar-fill"
                          style={{ width: `${pct}%` }}
                        />
                      </span>
                      <span className="cs-persona__bar-val">{pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design principles */}
        <section className="cs-section" id="sc-approach">
          <span className="cs-eyebrow">04</span>
          <h2 className="cs-h2">How I approached it</h2>
          <div className="cs-prose">
            <p>
              The hard part was not the model, it was trust and adoption. Five
              principles kept the design honest across two very different
              audiences: security leads and developers.
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
        </section>

        {/* Process */}
        <section className="cs-section" id="sc-flow">
          <span className="cs-eyebrow">05</span>
          <h2 className="cs-h2">The task flow</h2>
          <div className="cs-prose">
            <p>
              I mapped the whole thing as one end-to-end flow before touching
              UI, from scan completion to a filtered, drill-down issues view.
              Two decisions drive the branching: how severe a finding is, and
              whether AI can auto-fix it or a developer needs to review.
            </p>
          </div>
          <figure className="cs-diagram cs-diagram--nda">
            <img
              src={taskflow}
              alt="End to end task flow: scan completion through AI analysis, business-impact and auto-fix decision branches, to the detailed issues view."
            />
          </figure>
          <div className="cs-steps">
            {PROCESS.map((step) => (
              <article key={step.title} className="cs-step">
                <div className="cs-step__text">
                  <h3 className="cs-step__title">{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <Frame
                  src={step.image}
                  nda
                  caption={step.caption}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Use cases / solution */}
        <section className="cs-section" id="sc-solution">
          <span className="cs-eyebrow">06</span>
          <h2 className="cs-h2">The solution: five core use cases</h2>
          <ul className="cs-cases cs-cases--spanlast">
            {USE_CASES.map((uc, i) => (
              <li key={uc.title} className="cs-case">
                <span className="cs-case__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cs-case__title">{uc.title}</h3>
                <p className="cs-case__personas">{uc.personas}</p>
                <p className="cs-case__body">{uc.body}</p>
                <p className="cs-case__target">{uc.target}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Validation */}
        <section className="cs-section" id="sc-validation">
          <span className="cs-eyebrow">07</span>
          <h2 className="cs-h2">Validating the design</h2>
          <div className="cs-prose">
            <p>
              Before GA I put the core flows in front of the people who would
              live in them. Across two rounds of moderated, think-aloud
              sessions, security leads triaged a fresh scan, accepted or
              rejected an AI-suggested fix, and pulled an executive report,
              while developers ran a fix from inside their IDE. Round one
              surfaced the rough edges, we fixed them, and round two checked the
              fixes held. Alongside the sessions I ran a heuristic pass against
              Nielsen's ten heuristics and a WCAG 2.1 accessibility audit, and
              the findings that mattered went into the shipped build.
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
        </section>

        {/* Outcome */}
        <section className="cs-section" id="sc-outcome">
          <span className="cs-eyebrow">08</span>
          <h2 className="cs-h2">Outcome</h2>
          <div className="cs-prose">
            <p>
              Feedback from internal stakeholders and early customers was
              strongly positive, and the pre-GA accessibility and usability work
              shipped in the final build.
            </p>
          </div>
          <ul className="cs-stats">
            {OUTCOMES.map(([n, label]) => (
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
        </section>

        {/* Reflection */}
        <section className="cs-section" id="sc-reflection">
          <span className="cs-eyebrow">09</span>
          <h2 className="cs-h2">Reflection</h2>
          <ul className="cs-reflect">
            {REFLECTION.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <CaseNav current="sast" />
        </section>
      </main>

      <Footer />
    </>
  )
}
