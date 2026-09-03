const ROLES = [
  {
    role: 'Lead UX Designer (UX Leader)',
    org: 'OpenText, Cybersecurity BU (heritage Micro Focus)',
    period: 'Sep 2018 to Present',
    body:
      'Progressed from Senior UX Designer to Lead UX Designer to UX Leader across three product groups in one business unit: AppSec, SecOps, and IAM. I balance day to day design work with keeping teams consistent, mentoring, and owning delivery across time zones.',
  },
  {
    role: 'UX Designer',
    org: 'WinWire Technologies India Pvt. Ltd',
    period: 'Mar 2014 to Aug 2018',
    body:
      "Before OpenText, I spent four and a half years in B2B product design, where the fundamentals came from. I started on smaller internal projects and worked up to owning design end to end for client initiatives, from discovery through visual design, on real deadlines. That's where I learned to care about implementation fidelity. A design that doesn't survive handoff isn't finished.",
  },
]

export function Timeline() {
  return (
    <section id="experience" className="timeline" aria-labelledby="timeline-heading">
      <div className="section-head">
        <span className="section-head__label">Experience</span>
        <h2 id="timeline-heading" className="section-head__title">
          12+ years, two chapters
        </h2>
      </div>
      <ol className="timeline__list">
        {ROLES.map((item) => (
          <li key={item.org} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <p className="timeline__period">{item.period}</p>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__org">{item.org}</p>
              <p className="timeline__body">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
