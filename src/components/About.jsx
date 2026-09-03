function AboutRow({ num, title, children }) {
  return (
    <li className="about-row">
      <span className="about-row__num" aria-hidden="true">
        {num}
      </span>
      <div className="about-row__head">
        <h3 className="about-row__title">{title}</h3>
        <div className="about-row__body">{children}</div>
      </div>
    </li>
  )
}

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="section-head">
        <span className="section-head__label">About</span>
        <h2 id="about-heading" className="section-head__title">
          About me
        </h2>
      </div>

      <div className="about__intro">
        <div className="about__identity">
          <div className="about__photo" aria-hidden="true">
            <span className="about__photo-mono">VP</span>
          </div>
          <p className="about__photo-caption">Yep, that's me.</p>
        </div>
        <div className="about__lead">
          <p>
            I'm <strong>Vijay</strong> — a Lead UX Designer based in Bangalore
            with over <strong>12 years</strong> in product design. For the last
            eight I've shaped OpenText's cybersecurity products across AppSec,
            SecOps, and IAM. Before that, I learned the craft in B2B product
            design at WinWire.
          </p>
          <dl className="about__stats" aria-label="At a glance">
            <div className="about__stat">
              <dt className="about__stat-num">12+</dt>
              <dd className="about__stat-label">Years designing products</dd>
            </div>
            <div className="about__stat">
              <dt className="about__stat-num">8</dt>
              <dd className="about__stat-label">Years in cybersecurity</dd>
            </div>
            <div className="about__stat">
              <dt className="about__stat-num">13</dt>
              <dd className="about__stat-label">Designers I coordinate</dd>
            </div>
            <div className="about__stat">
              <dt className="about__stat-num">3</dt>
              <dd className="about__stat-label">Product groups owned</dd>
            </div>
          </dl>
        </div>
      </div>

      <ol className="about-rows">
        <AboutRow num="01" title="What I actually do">
          <p>
            I carry <span className="hl">two roles at once</span>. As an
            individual contributor I research, design, and ship across three
            product groups. As UX coordinator for the cybersecurity business
            unit, I own UX for a team of{' '}
            <span className="hl">13 designers</span> — meeting with the VPs
            and senior directors who set the roadmap, translating their
            priorities into work, and routing each project to the designer
            with the right context. I'm the single point of contact for every
            UX deliverable, reviewing the work before it reaches engineering.
          </p>
        </AboutRow>

        <AboutRow num="02" title="How I lead">
          <p>
            By <span className="hl">making other designers better</span>, not
            by gatekeeping. Regular one-on-ones, honest feedback before a
            critique turns hard, and clear direction on the skills worth their
            time. I protect the UX process as a moderator who keeps quality
            high and makes room for other voices — and I own the design
            system end to end.
          </p>
        </AboutRow>

        <li className="about-row">
          <span className="about-row__num" aria-hidden="true">
            03
          </span>
          <div className="about-row__head">
            <h3 className="about-row__title">Recognition</h3>
            <ul className="about-awards">
              <li>
                <span className="award__name">Design Innovation Award</span>
                <span className="award__note">
                  Design systems that scaled usability and consistency
                </span>
              </li>
              <li>
                <span className="award__name">Mentorship Recognition</span>
                <span className="award__note">
                  For investing in junior designers' growth
                </span>
              </li>
              <li>
                <span className="award__name">Accessibility Advocate</span>
                <span className="award__note">
                  Certified — WCAG 2.1 in daily practice
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li className="about-row about-row--quote">
          <span className="about-row__num" aria-hidden="true">
            04
          </span>
          <div className="about-row__head">
            <h3 className="about-row__title">The idea that shipped</h3>
            <blockquote className="about-quote">
              <p className="about-quote__text">
                At our internal cybersecurity hackathon, I pitched an AI
                concept for getting the user's job done faster. It didn't
                stay a demo — the idea{' '}
                <span className="hl">shipped into the product</span>, and the
                response from customers has been strongly positive.
              </p>
              <footer className="about-quote__meta">
                AI concept pitched at our cybersecurity hackathon, now live in
                the product.
              </footer>
            </blockquote>
          </div>
        </li>

        <AboutRow num="05" title="AI, used with judgment">
          <p>
            AI has changed how fast my team moves, especially in research and
            ideation. I use it to accelerate the early phases, but I trust{' '}
            <span className="hl">my own judgment</span> on what it produces
            before anything moves forward. I also look for where AI belongs
            inside the product itself, so our users get to done faster.
          </p>
        </AboutRow>

        <AboutRow num="06" title="Accessibility by default">
          <p>
            I'm a certified accessibility advocate, and I treat accessibility
            as <span className="hl">part of the craft</span>, not a checklist
            at the end. I train junior designers on the fundamentals and the
            process, so it's built in from the very first screen.
          </p>
        </AboutRow>

        <AboutRow num="07" title="What drives me">
          <p>
            Design systems that hold up at scale, and interfaces that stay
            usable when someone is under real pressure to stop a breach. I
            care about <span className="hl">what survives handoff</span> — a
            design that breaks on the way to a build isn't finished. Outside
            the day-to-day, I keep learning through the Interaction Design
            Foundation and Nielsen Norman Group.
          </p>
        </AboutRow>
      </ol>

      <div className="about__meta">
        <div className="about__block">
          <h3 className="about__block-title">Design &amp; strategy</h3>
          <ul className="chips chips--inline" aria-label="Design and strategy skills">
            <li className="chip">UX Strategy</li>
            <li className="chip">Interaction &amp; Visual Design</li>
            <li className="chip">Design Systems</li>
            <li className="chip">Information Architecture</li>
            <li className="chip">Accessibility (WCAG 2.1)</li>
            <li className="chip">Design Thinking</li>
            <li className="chip">User Research</li>
          </ul>
        </div>
        <div className="about__block">
          <h3 className="about__block-title">Leadership</h3>
          <ul className="chips chips--inline" aria-label="Leadership skills">
            <li className="chip">Design Leadership</li>
            <li className="chip">Mentoring</li>
            <li className="chip">Stakeholder Storytelling</li>
            <li className="chip">Workshop Facilitation</li>
            <li className="chip">Decision Making</li>
            <li className="chip">End-to-End Ownership</li>
          </ul>
        </div>
        <div className="about__block">
          <h3 className="about__block-title">Domains</h3>
          <ul className="chips chips--inline" aria-label="Domain expertise">
            <li className="chip">AppSec</li>
            <li className="chip">SecOps</li>
            <li className="chip">IAM</li>
            <li className="chip">Zero Trust</li>
            <li className="chip">SAST / DAST / SCA</li>
            <li className="chip">B2B &amp; B2C</li>
            <li className="chip">AI in UX</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

