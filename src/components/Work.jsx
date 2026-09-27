import { useEffect, useState } from 'react'
import remediationDashboard from '../assets/Remediation dashboard.webp'
import nautilusThumb from '../assets/Nautilus-Tumbnail.png'
import igaThumb from '../assets/IGA-Dashboard.png'
import fortifyThumb from '../assets/Fod-MyApplications.webp'
import winwireThumb from '../assets/WW-Banner.webp'

const PROJECTS = [
  {
    kicker: 'Cloud application security',
    title: 'Fortify on Demand, reimagined',
    tags: ['SAST · DAST · MAST', 'Cloud SaaS', 'Enterprise B2B'],
    description:
      'Unified SAST, DAST, and MAST under one intelligent, application-first experience, replacing three siloed products so it could serve security teams and developer-first orgs at once.',
    impact: 'GA · 2,400+ enterprise orgs · 71% higher scan initiation',
    image: fortifyThumb,
    caseStudyHref: '#/case/fortify',
    nda: true,
  },
  {
    kicker: 'Identity governance',
    title: 'IGA — audit-ready access',
    tags: ['IGA', 'Compliance reporting', 'Enterprise SaaS'],
    description:
      'Turned raw access data into a trustworthy, audit-ready artefact: a compliance officer builds it in minutes, and an external auditor can read it without any context on the tool.',
    impact: '45 min → under 4 min per report · ~60% fewer abandoned reports',
    image: igaThumb,
    caseStudyHref: '#/case/iga',
    nda: true,
  },
  {
    kicker: 'Application security',
    title: 'SAST — AI-assisted remediation',
    tags: ['AppSec', 'SAST/DAST/SCA/MAST', 'Enterprise SaaS'],
    description:
      'Redesigning an AI-powered SAST platform to kill alert fatigue, pull developers into the security workflow, and turn a compliance checkbox into a team superpower.',
    impact: 'Runner-up, internal hackathon → approved for GA rollout',
    image: remediationDashboard,
    caseStudyHref: '#/case/sast',
    nda: true,
  },
  {
    kicker: 'Security Operations',
    title: 'Nautilus',
    tags: ['SecOps', 'SIEM', 'Vision & strategy', 'Competitive analysis'],
    description:
      'Set the UX vision for a cybersecurity portfolio stitched together from years of acquisitions, turning eight separately-built ArcSight products into one coherent, composable platform through deep competitive research and a design system built from scratch.',
    image: nautilusThumb,
    caseStudyHref: '#/case/nautilus',
    nda: true,
  },
  {
    kicker: 'Early Career, 2014–2018',
    title: 'WinWire — B2B portals & enterprise intranets',
    tags: ['Onsite–Offshore Delivery', 'Enterprise Portals', 'Front-End Handoff'],
    description:
      'Four and a half years of B2B product design at WinWire Technologies — supplier, support, and intranet portals for clients including Tesla, SanDisk, VISA, and MemorialCare, working through an onsite coordinator from wireframe through a static, accessible front-end handoff.',
    image: winwireThumb,
    caseStudyHref: '#/case/winwire',
    nda: false,
  },
]

function ProjectRow({ project, index, onOpen }) {
  return (
    <article className="project">
      {project.caseStudyHref ? (
        <a
          className={`project__media${project.image ? ' project__media--image' : ' project__media--placeholder'}`}
          href={project.caseStudyHref}
          aria-label={`View ${project.title} case study`}
        >
          {project.image ? (
            <img className="project__img" src={project.image} alt="" loading="lazy" />
          ) : (
            <span className="project__media-label" aria-hidden="true">
              {project.title}
            </span>
          )}
        </a>
      ) : project.image ? (
        <button
          type="button"
          className="project__media project__media--image"
          onClick={() => onOpen(project)}
          aria-label={`View full-size image for ${project.title}`}
        >
          <img className="project__img" src={project.image} alt="" loading="lazy" />
        </button>
      ) : (
        <div className="project__media" aria-hidden="true" />
      )}
      <div className="project__info">
        <div className="project__headline">
          <p className="project__eyebrow">
            <span className="project__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="project__kicker">{project.kicker}</span>
          </p>
          <h3 className="project__title">{project.title}</h3>
          <p className="project__desc">{project.description}</p>
          {project.impact ? (
            <p className="project__impact">{project.impact}</p>
          ) : null}
        </div>
        <div className="project__aside">
          <ul className="chips" aria-label="Focus areas">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          {project.caseStudyHref ? (
            <a className="project__cta" href={project.caseStudyHref}>
              View full case study
            </a>
          ) : (
            <p className="project__note">
              {project.nda ? (
                <>
                  Multiple NDA,{' '}
                  <a href="mailto:vijaykumarpdm@live.com">reach out for more</a>
                </>
              ) : (
                <>
                  NDA on the visuals,{' '}
                  <a href="mailto:vijaykumarpdm@live.com">
                    happy to walk through it
                  </a>
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export function Work() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="work" className="work" aria-labelledby="work-heading">
      <div className="section-head">
        <span className="section-head__label">Selected work</span>
        <h2 id="work-heading" className="section-head__title">
          Featured projects
        </h2>
        <p className="section-head__note">
          The cybersecurity product work is NDA-protected, so what's here stays
          at outcome level. The detail lives in a conversation, not a screenshot.
        </p>
      </div>
      <div className="work__list">
        {PROJECTS.map((project, index) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={index}
            onOpen={setActive}
          />
        ))}
      </div>
      {active ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            &times;
          </button>
          <img
            className="lightbox__img"
            src={active.image}
            alt={active.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
