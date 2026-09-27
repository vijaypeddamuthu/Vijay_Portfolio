const CAPABILITIES = [
  {
    title: 'Design leadership',
    desc: 'Lead UX across AppSec, SecOps, and IAM. I mentor designers, set standards, and keep three teams aligned.',
    icon: (
      <path
        d="M16 19v-1a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v1M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 19v-1a3 3 0 0 0-2.4-2.9M15.5 5.2a3 3 0 0 1 0 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Proven impact',
    desc: '35% higher task completion, 25% more feature adoption, and 20% fewer support tickets.',
    icon: (
      <path
        d="M5 20v-5M12 20V8M19 20v-9M4 20h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Design systems at scale',
    desc: 'Built a component library from scratch, now adopted across the business unit and shortening the time from design to build.',
    icon: (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="7" height="7" rx="1.6" />
        <rect x="13" y="4" width="7" height="7" rx="1.6" />
        <rect x="4" y="13" width="7" height="7" rx="1.6" />
        <rect x="13" y="13" width="7" height="7" rx="1.6" />
      </g>
    ),
  },
  {
    title: 'AI-accelerated delivery',
    desc: "Folded AI into the team's workflow, cutting design delivery time by about 30%.",
    icon: (
      <path
        d="M12 3l1.8 4.9L18.9 9.6 14 11.4 12 16.3 10 11.4 5.1 9.6 10.2 7.9 12 3ZM19 15l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z"
        fill="currentColor"
      />
    ),
  },
]

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="hero__headline">
        Making enterprise security tools that{' '}
        <span className="hero__headline-accent">people actually want</span>{' '}
        <em className="hero__headline-em">to use.</em>
      </h1>

      <p className="hero__status">
        <span className="hero__status-dot" aria-hidden="true" />
        Bangalore, India &middot; Open to new opportunities
      </p>

      <div className="hero__intro">
        <p className="hero__lead">
          I'm <strong>Vijaykumar Peddamuthu</strong>, a Lead UX Designer with{' '}
          <strong>12+ years</strong> shaping enterprise software. Today I lead
          cybersecurity product design at{' '}
          <a href="https://www.opentext.com/" target="_blank" rel="noreferrer">
            OpenText
          </a>{' '}
          across <span className="hl">AppSec</span> (application security),{' '}
          <span className="hl">SecOps</span> (security operations), and{' '}
          <span className="hl">IAM</span> (identity &amp; access management). Before
          that, I spent{' '}
          <strong>4.5 years</strong> at WinWire, where I built my foundation in
          product design.
        </p>
        <p className="hero__sub">
          AI changed how fast I move, not what makes the work good. It still
          begins with research, a clear structure, and the judgment to know what
          to leave out. What I care about most is the <em>craft</em> of the
          interface and how a team actually ships it, especially in security,
          where a confusing screen is the difference between a tool people{' '}
          <em>trust</em> and one they quietly work around.
        </p>
      </div>

      <ul className="hero__cards">
        {CAPABILITIES.map((item) => (
          <li key={item.title} className="hero-card">
            <span className="hero-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                {item.icon}
              </svg>
            </span>
            <div>
              <p className="hero-card__title">{item.title}</p>
              <p className="hero-card__desc">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
