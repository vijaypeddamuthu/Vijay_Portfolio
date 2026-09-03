import { useEffect } from 'react'
import { Footer } from './Footer'
import { CaseNav, Frame, SectionNav } from './CaseStudy'
import winwireBanner from '../assets/WW-Banner.webp'
import teslaLogin from '../assets/WW-Tesla Login.webp'
import teslaHome from '../assets/WW-Tesla Onboarding.webp'
import teslaInventory from '../assets/WW-Tesla Inventory.webp'
import sandiskSupport from '../assets/WW-Sandisk.webp'
import visaLanding from '../assets/WW-Visa Landing page.webp'
import brocadeLanding from '../assets/WW-Brocade Landing.webp'
import brocadeAbout from '../assets/WW-Brocade About.webp'
import lumiledsSustainability from '../assets/WW-Lumileds department landing.jpg'
import lumiledsInternalComms from '../assets/WW-Lumileds Landing.jpg'
import memorialcareIpad from '../assets/WW-MM Ipad.webp'
import memorialcareIphone from '../assets/WW-MM Iphone.webp'
import memorialcareHrLanding from '../assets/WW-MH HR Landing.jpg'
import memorialcareLanding from '../assets/WW-MH Landing.jpg'
import lorealIdeaDetails from '../assets/WW-L Idea details.jpg'
import lorealLanding from '../assets/WW-L Landing.jpg'

const BEHANCE_URL = 'https://www.behance.net/Vijaykumarpeddamuthu'

const IMPACT = [
  ['4.5 yrs', 'of B2B enterprise product design'],
  ['7+', 'client portals across supplier, support & intranet products'],
  ['Onsite \u2192 offshore', 'requirements relayed through a coordinator'],
  ['Wireframe \u2192 build', 'through a static, accessible front-end handoff'],
]

const SUMMARY = [
  "Requirements arrived secondhand, through an onsite coordinator, not the client directly.",
  'Every concept went wireframe first, then a senior review, before a single pixel of visual design.',
  'I built the static HTML, CSS, and JavaScript myself, accessibility included, before dev wired it up.',
  'Usually running two or three of these at once, on their own deadlines, for clients like Tesla, SanDisk, and VISA.',
]

const JUMP = [
  ['ww-context', 'Context'],
  ['ww-process', 'How I worked'],
  ['ww-clients', 'Client work'],
  ['ww-learnings', 'What it taught me'],
]

const META = [
  ['My role', 'UX Designer'],
  ['Team', 'Onsite coordinator, senior UX reviewers, dev team'],
  ['Duration', 'Mar 2014 \u2013 Aug 2018'],
  ['Focus', 'Wireframes, visual design, front-end handoff, accessibility'],
]

const TAGS = [
  'Enterprise Portals',
  'B2B SaaS',
  'Onsite\u2013Offshore Delivery',
  'Accessibility',
  'Static Front-End Handoff',
]

const PROCESS_PHASES = [
  {
    phase: 'Discover',
    blurb: 'Understand the ask, and the customer behind it, before opening a design tool.',
    steps: [
      [
        'Requirements via the onsite coordinator',
        "Customer asks didn't come to me directly. A WinWire onsite coordinator sat with the client, gathered the requirement, and relayed it back to the offshore team \u2014 a fundamentally different rhythm than working with a client face to face.",
      ],
      [
        'Grounding research on the customer',
        "Before sketching, I did a lightweight pass on the customer itself: what they do, who'd actually use the portal, what their brand implied about tone. Not formal user research, just enough that the wireframe didn't read generic.",
      ],
    ],
  },
  {
    phase: 'Design',
    blurb: 'Concept, then critique, then commit. Nothing skipped a review on the way to visual.',
    steps: [
      [
        'Wireframes as a discussion draft',
        'Low-fidelity wireframes were the first real artefact, built to pressure-test ideas with the coordinator before anyone senior saw them.',
      ],
      [
        'A senior review, every time',
        'Wireframes went through a real critique with senior UX people at WinWire before a concept was allowed to move forward. Most of the early learning happened right here.',
      ],
      [
        'Visual design and flows, once the concept landed',
        'Only after the coordinator signed off did the work move into full visual mockups, plus the user flows needed to hand a clean concept to development.',
      ],
    ],
  },
  {
    phase: 'Deliver',
    blurb: 'Ship something a developer can build without guessing, then check it landed right.',
    steps: [
      [
        'A static, accessible front-end handoff',
        'I built the pages myself in HTML, CSS, and JavaScript, with accessibility already addressed, before the dev team wired the static pages into the real application.',
      ],
      [
        'Checking fidelity through the build',
        'Once development started, the job shifted to making sure the team was implementing exactly what had been proposed, not handing off and moving on.',
      ],
    ],
  },
]

const CLIENTS = [
  {
    name: 'Tesla',
    tag: 'Supplier Portal',
    summary:
      "Built the supplier-facing side of Tesla's procurement relationship \u2014 purchase-order visibility, RFQ submission, and compliance documentation, replacing an email-and-spreadsheet exchange with a portal suppliers could work in directly.",
    images: [
      { src: teslaLogin, caption: 'Supplier login.' },
      { src: teslaHome, caption: 'Warp Drive home: Warp Drive, Warp Services, Warp Logistics.' },
      { src: teslaInventory, caption: 'Warp Drive, inventory demand maintenance.' },
    ],
  },
  {
    name: 'SanDisk',
    tag: 'Customer Support',
    summary:
      'A self-service support experience for SanDisk product owners \u2014 a searchable knowledge base, ticket submission and tracking, and product registration, aimed at cutting inbound call volume.',
    images: [
      { src: sandiskSupport, caption: 'Fusion ioMemory Support Center home: live chat, technical support, downloads, and drivers.' },
    ],
  },
  {
    name: 'VISA',
    tag: 'InSite Portal',
    summary:
      "Built on WinWire's reusable \u201cInSite\u201d portal template \u2014 a resource and communications hub adapted to VISA's brand, covering program news, training material, and reference documentation.",
    images: [
      { src: visaLanding, caption: 'VISA InSite landing page: notifications, News, a Connect activity feed, and People Search.' },
    ],
  },
  {
    name: 'Brocade Communications',
    tag: 'Employee Intranet',
    summary:
      "An employee intranet for Brocade's global, engineering-heavy workforce \u2014 internal news, HR self-service, and a searchable people directory in one home base.",
    images: [
      { src: brocadeLanding, caption: 'Intranet home: Lloyd Speaks, The Buzz news feed, and Employee Programs.' },
      { src: brocadeAbout, caption: 'About Brocade, Corporate Affairs section.' },
    ],
  },
  {
    name: 'Lumileds',
    tag: '\u201cThe Hub\u201d Intranet',
    summary:
      "A global intranet built to unify communications and HR resources across Lumileds' international sites and time zones, after its spin-off from Philips.",
    images: [
      { src: lumiledsSustainability, caption: 'The Hub, Sustainability department page: objectives, EHS, documents, and tools.' },
      { src: lumiledsInternalComms, caption: 'The Hub, Internal Communications department page: resource center and global contacts.' },
    ],
  },
  {
    name: 'MemorialCare',
    tag: 'InSite Intranet',
    summary:
      'Another build on the InSite template \u2014 a hospital-system intranet for MemorialCare staff, with department directories, a policy & procedure library, and internal alerts, designed with healthcare\u2019s higher accessibility bar in mind.',
    images: [
      { src: memorialcareIpad, caption: 'InSite on tablet: Saddleback Memorial Medical Center feature and CEO message.' },
      { src: memorialcareIphone, caption: 'InSite on phone, responsive down to a single column.' },
      { src: memorialcareHrLanding, caption: 'Human Resources department page: HR services, news, and key contacts.' },
      { src: memorialcareLanding, caption: 'InSite home, Long Beach location: leaders speak, news, and annual appraisal completion.' },
    ],
  },
  {
    name: "L'Or\u00e9al",
    tag: 'Innovation Platform',
    summary:
      "\u201cIdea Space\u201d \u2014 an internal ideation platform for L'Or\u00e9al employees to submit, discuss, and vote on new ideas, with a lightweight moderation view behind the scenes.",
    images: [
      { src: lorealLanding, caption: 'Idea Space home: open challenges, top innovators, and announcements.' },
      { src: lorealIdeaDetails, caption: 'Challenge detail: idea thread, voting, and related challenges.' },
    ],
  },
]

const GLANCE = [
  ['Tesla', 'Supplier Portal', 'Purchase-order visibility and RFQ submission for the supplier network.'],
  ['SanDisk', 'Customer Support', 'Self-service support: knowledge base, live chat, and driver downloads.'],
  ['VISA', 'InSite Portal', 'A branded resource hub built on WinWire\u2019s reusable InSite template.'],
  ['Brocade Communications', 'Employee Intranet', 'A global intranet home for news, HR self-service, and people search.'],
  ['Lumileds', '\u201cThe Hub\u201d Intranet', 'Unified communications and HR across international sites post-spin-off.'],
  ['MemorialCare', 'InSite Intranet', 'A hospital-system intranet, responsive across desktop, tablet, and phone.'],
  ["L'Or\u00e9al", 'Innovation Platform', 'An ideation platform where employees post, discuss, and vote on ideas.'],
]

const LEARNING_BUCKETS = [
  {
    tag: 'Time & delivery',
    items: [
      'How to manage time across two or three live deadlines at once, without letting any of them slip in quality.',
      'How to keep a UX process honest, research through build, even when commercial pressure made it tempting to skip a step.',
    ],
  },
  {
    tag: 'People & stakeholders',
    items: [
      'How to present and defend a design decision to stakeholders who had no design background of their own.',
      'How to manage stakeholders through an intermediary, working through an onsite coordinator rather than the end client directly.',
    ],
  },
  {
    tag: 'Craft & brand',
    items: [
      "How to read a client's brand and translate it into a working system, without a formal brand workshop to lean on.",
    ],
  },
]

export function CaseStudyWinWire() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const prev = document.title
    document.title = 'WinWire, early career case study'
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
          <p className="cs-kicker">Early Career, WinWire Technologies</p>
          <h1 className="cs-title">Where the fundamentals came from</h1>
          <p className="cs-lead">
            Four and a half years of B2B product design at WinWire, working
            supplier, support, and intranet portals for clients like Tesla,
            SanDisk, VISA, and MemorialCare, through the onsite-offshore
            delivery model that shaped how I still work today.
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
            Not NDA-bound. Screens on this page are the actual product UI
            from each engagement. Full early-career gallery on{' '}
            <a href={BEHANCE_URL} target="_blank" rel="noreferrer">
              Behance
            </a>
            .
          </p>
          <Frame src={winwireBanner} caption="A few of the client portals I designed across four and a half years at WinWire." />
        </section>

        {/* Context */}
        <section className="cs-section" id="ww-context">
          <span className="cs-eyebrow">Context</span>
          <h2 className="cs-h2">
            An onsite-offshore delivery model, before I ever met a client
            directly.
          </h2>
          <div className="cs-prose">
            <p>
              WinWire ran on the classic{' '}
              <span className="hl">onsite-offshore split</span> common to
              Microsoft-aligned IT-services firms in this period: a US-based
              onsite coordinator owned the client relationship, and an
              offshore team in India, design included, turned that
              relationship into a working product. I joined as a junior
              designer inside that offshore team, starting on smaller internal
              projects and working up to owning design end to end for real
              client initiatives.
            </p>
            <p>
              Most of what I built in this era was a portal of some kind:
              supplier portals, support portals, and employee intranets,
              usually destined for a SharePoint or custom .NET backend. A few
              projects, VISA and MemorialCare among them, were built on top of
              an internal WinWire template called <strong>InSite</strong>,
              re-skinned per client rather than built from zero each time,
              which is part of how the team could run several client
              engagements at once.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="cs-section" id="ww-process">
          <span className="cs-eyebrow">How I worked</span>
          <h2 className="cs-h2">
            Discover, design, deliver. Same three phases, every project.
          </h2>
          <div className="cs-prose">
            <p>
              The phases didn't change from project to project, only the
              client did. That consistency is what let me hold two or three
              engagements at once without the process itself becoming the
              thing that slipped.
            </p>
          </div>
          {PROCESS_PHASES.map((group, i) => (
            <div key={group.phase} className="cs-phase">
              <div className="cs-phase__head">
                <span className="cs-phase__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cs-phase__name">{group.phase}</h3>
                <p className="cs-phase__blurb">{group.blurb}</p>
              </div>
              <ul className="cs-principles">
                {group.steps.map(([title, body]) => (
                  <li key={title} className="cs-principle">
                    <h3 className="cs-principle__title">{title}</h3>
                    <p>{body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="cs-prose">
            <p>
              A handful of these projects started as proof-of-concept designs,
              built to help WinWire pitch a prospective customer before any
              contract existed. Some of those speculative concepts went on to
              become the signed engagements listed below.
            </p>
          </div>
        </section>

        {/* Client work */}
        <section className="cs-section" id="ww-clients">
          <span className="cs-eyebrow">Client work</span>
          <h2 className="cs-h2">Seven portals, seven very different brands.</h2>
          <div className="cs-prose">
            <p>
              At a glance, then the detail: what each portal addressed, and a
              few of the representative screens I designed for it.
            </p>
          </div>
          <ul className="cs-glance">
            {GLANCE.map(([name, tag, line]) => (
              <li key={name} className="cs-glance__row">
                <span className="cs-glance__name">{name}</span>
                <span className="chip">{tag}</span>
                <span className="cs-glance__line">{line}</span>
              </li>
            ))}
          </ul>
          <ul className="cs-clients">
            {CLIENTS.map((c) => (
              <li key={c.name} className="cs-client cs-client--gallery">
                <div className="cs-client__text">
                  <div className="cs-client__head">
                    <h3 className="cs-client__name">{c.name}</h3>
                    <span className="chip">{c.tag}</span>
                  </div>
                  <p className="cs-client__summary">
                    <strong>The ask: </strong>
                    {c.summary}
                  </p>
                </div>
                <div className="cs-client__shots">
                  {c.images.map((img) => (
                    <Frame key={img.caption} src={img.src} caption={img.caption} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Learnings */}
        <section className="cs-section" id="ww-learnings">
          <span className="cs-eyebrow">What it taught me</span>
          <h2 className="cs-h2">
            The craft came later. The habits started here.
          </h2>
          <ul className="cs-buckets">
            {LEARNING_BUCKETS.map((b) => (
              <li key={b.tag} className="cs-bucket">
                <span className="cs-bucket__tag">{b.tag}</span>
                <ul className="cs-bucket__list">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="cs-winwire-cta">
            <a href={BEHANCE_URL} target="_blank" rel="noreferrer">
              View all projects on Behance →
            </a>
          </p>
          <CaseNav current="winwire" />
        </section>
      </main>

      <Footer />
    </>
  )
}
