const CONTACTS = [
  {
    label: 'Email',
    href: 'mailto:vijaykumarpdm@live.com',
    text: 'vijaykumarpdm@live.com',
    icon: (
      <path
        d="M3 5.5h18v13H3v-13Zm0 0 9 6.5 9-6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vijaykumar-peddamuthu/',
    text: 'in/vijaykumar-peddamuthu',
    external: true,
    icon: (
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'Phone',
    href: 'tel:+919742851797',
    text: '+91 97428 51797',
    icon: (
      <path
        d="M6.6 3.5c.44 0 .83.29.98.7l1.2 2.85c.16.4.06.85-.26 1.15l-1.1 1.02a12 12 0 0 0 5.2 5.2l1.02-1.1c.3-.32.75-.42 1.15-.26l2.85 1.2c.41.15.7.54.7.98v3c0 .82-.7 1.48-1.51 1.42C10.66 20.9 3.1 13.34 2.58 5.01 2.52 4.2 3.18 3.5 4 3.5h2.6Z"
        fill="currentColor"
      />
    ),
  },
]

export function Footer() {
  return (
    <footer id="contact" className="site-footer" aria-labelledby="footer-heading">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__inner">
        <span className="section-head__label">Let's talk</span>
        <h2 id="footer-heading" className="site-footer__title">
          Let's make hard problems feel <em>effortless</em>.
        </h2>
        <p className="site-footer__note">
          I'm open to Lead, Principal, and UX Manager roles, and always happy to
          talk about design in security, design systems, or growing a team's
          craft. Email is the fastest way to reach me.
        </p>

        <ul className="contact-cards">
          {CONTACTS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="contact-card"
                {...(c.external
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <span className="contact-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    {c.icon}
                  </svg>
                </span>
                <span className="contact-card__text">
                  <span className="contact-card__label">{c.label}</span>
                  <span className="contact-card__value">{c.text}</span>
                </span>
                <svg
                  className="contact-card__arrow"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer__base">
        <span>© {new Date().getFullYear()} Vijaykumar Peddamuthu</span>
        <a href="#top" className="site-footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
