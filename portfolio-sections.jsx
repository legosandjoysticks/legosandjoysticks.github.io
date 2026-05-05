// portfolio-sections.jsx — section components for the portfolio homepage

// ─── Top nav ──────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark">
          <span className="nav-mark-glyph">¶</span>
          <span className="nav-mark-name">Lance Grimsley</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#strengths">Approach</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          href="https://github.com/legosandjoysticks/deal-meal-planner-case-study"
          className="nav-cta"
          target="_blank"
          rel="noreferrer"
        >
          Case study →
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function Hero({ headline }) {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-text">
        <span className="eyebrow">
          <i className="dot" />
          Transitioning educator
          <span className="eyebrow-sep">→</span>
          Software / Product Engineer
        </span>
        <h1 className="hero-h1">{headline}</h1>
        <p className="hero-sub">
          I&rsquo;m <strong>Lance Grimsley</strong>, a veteran teacher transitioning into
          software/product engineering. Years of designing classroom systems
          taught me how to turn messy, human workflows into clear, usable tools.
          I now apply that same systems instinct to full-stack products.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#dmp">
            View Deal Meal Planner
            <span>→</span>
          </a>
          <a className="btn btn-ghost" href="https://github.com/legosandjoysticks" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href="#contact">Resume / Contact</a>
        </div>
        <ul className="hero-stack-tags">
          <li>FastAPI</li>
          <li>Python</li>
          <li>React</li>
          <li>Vite</li>
          <li>SQLite</li>
          <li>Linux · PM2 · Cloudflare</li>
        </ul>
      </div>
      <div className="hero-visual">
        <span className="hero-feature-tag">
          <i className="hero-feature-dot" />
          Featured system
          <em>Deal Meal Planner</em>
        </span>
        <HeroComposite />
      </div>
    </section>
  );
}

// ─── Featured project ─────────────────────────────────────────────────────
function FeaturedProject() {
  return (
    <section className="dmp" id="dmp" data-screen-label="02 Featured project">
      <div className="section-head">
        <span className="section-num">01 / Flagship</span>
        <h2 className="section-h2">Deal Meal Planner</h2>
        <p className="section-lede">
          An API-driven grocery deal intelligence platform that ingests, normalizes,
          and surfaces retail flyer deals through a FastAPI backend and React frontend —
          then turns those deals into meal plans and store-by-store shopping lists.
        </p>
      </div>

      <div className="dmp-meta">
        <div className="dmp-meta-block">
          <span className="meta-label">Role</span>
          <span className="meta-value">Sole engineer · design, backend, frontend, ops</span>
        </div>
        <div className="dmp-meta-block">
          <span className="meta-label">Status</span>
          <span className="meta-value">Portfolio MVP · self-hosted demo · active polish</span>
        </div>
        <div className="dmp-meta-block">
          <span className="meta-label">Source</span>
          <span className="meta-value">
            <span className="src-pill">Public case study</span>
            <span className="src-note">Source private — available privately for walkthrough</span>
          </span>
        </div>
      </div>

      <div className="dmp-screens">
        <figure className="dmp-figure">
          <div className="dmp-frame"><DealBrowserMock /></div>
          <figcaption>
            <span className="cap-num">i.</span>
            <strong>Deal browser.</strong> Search across stores, compare prices,
            and keep BOGO-style promos visible instead of burying them in numeric rankings.
          </figcaption>
        </figure>
        <figure className="dmp-figure">
          <div className="dmp-frame"><MealPlanMock /></div>
          <figcaption>
            <span className="cap-num">ii.</span>
            <strong>Deal-aware meal plan.</strong> Turns current grocery deals into
            practical meal ideas with required and excluded ingredient controls.
          </figcaption>
        </figure>
        <figure className="dmp-figure">
          <div className="dmp-frame"><ShoppingListMock /></div>
          <figcaption>
            <span className="cap-num">iii.</span>
            <strong>Shopping list, by store.</strong> Carries recipe and clipped-deal context
            into a store-by-store buying workflow.
          </figcaption>
        </figure>
      </div>

      <div className="dmp-detail">
        <div className="dmp-detail-col">
          <h3 className="detail-h3">What&rsquo;s under the hood</h3>
          <dl className="kv">
            <div><dt>Backend</dt><dd>FastAPI · Python · SQLite views</dd></div>
            <div><dt>Frontend</dt><dd>Vite · React · vanilla JS · CSS</dd></div>
            <div><dt>Pipeline</dt><dd>Flyer / PDF ingestion → normalization → scored views</dd></div>
            <div><dt>Deployment</dt><dd>Linux host · PM2 · static SPA server · Cloudflare Tunnel</dd></div>
          </dl>
        </div>
        <div className="dmp-detail-col">
          <h3 className="detail-h3">Engineering tradeoffs I made</h3>
          <ol className="tradeoffs">
            <li>
              <strong>SQLite before hosted infrastructure.</strong> Lightweight,
              inspectable, and enough for a single-user portfolio demo while the product shape changes.
            </li>
            <li>
              <strong>Normalize messy rows before the UI.</strong> Flyer text is inconsistent,
              so the app benefits from clean deal views and predictable API responses.
            </li>
            <li>
              <strong>BOGO as first-class product behavior.</strong> Promo rows stay visible
              without pretending every offer is directly price-comparable.
            </li>
            <li>
              <strong>Self-hosted deployment path.</strong> PM2 and Cloudflare Tunnel keep the
              demo reachable while preserving a simple operating model.
            </li>
          </ol>
        </div>
      </div>

      <div className="dmp-cta">
        <a className="btn btn-primary" href="https://github.com/legosandjoysticks/deal-meal-planner-case-study"
           target="_blank" rel="noreferrer">
          Read the public case study
          <span>→</span>
        </a>
        <a className="btn btn-ghost" href="#contact">Request a private walkthrough</a>
        <span className="dmp-cta-note">
          The case study repo holds architecture notes, screenshots, demo, and engineering
          writeup. The application source is private.
        </span>
      </div>
    </section>
  );
}

// ─── Engineering Strengths ────────────────────────────────────────────────
function Strengths() {
  const items = [
    {
      n: '01',
      title: 'Full-stack product engineering',
      body: 'I take a product from data model to deployed UI. FastAPI services, React frontends, SQL design, ops — the whole loop, with a working artifact at the end.',
    },
    {
      n: '02',
      title: 'Data pipelines & API design',
      body: 'I treat messy real-world inputs as the design problem. Ingest → normalize → expose; predictable APIs, schemas that survive contact with reality.',
    },
    {
      n: '03',
      title: 'User-centered systems thinking',
      body: 'Years of teaching trained me to design for the actual person at the other end. I instrument flows, watch where they break, and iterate the system, not just the screen.',
    },
    {
      n: '04',
      title: 'Clear communication & iteration',
      body: 'I write specs and READMEs that engineers and non-engineers can both use. Tight feedback loops, honest scope, no ceremony.',
    },
  ];
  return (
    <section className="strengths" id="strengths" data-screen-label="03 Strengths">
      <div className="section-head">
        <span className="section-num">02 / Approach</span>
        <h2 className="section-h2">How I work</h2>
        <p className="section-lede">
          Four habits I bring to every codebase. They&rsquo;re the same habits that kept
          a hundred teenagers learning at once — translated to software.
        </p>
      </div>
      <ol className="strengths-grid">
        {items.map((it) => (
          <li key={it.n} className="strength">
            <span className="strength-num">{it.n}</span>
            <h3 className="strength-title">{it.title}</h3>
            <p className="strength-body">{it.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ─── Additional Projects ──────────────────────────────────────────────────
function More() {
  const projects = [
    {
      tag: 'In progress',
      title: 'Classroom game platform',
      body: 'Learning-game experiments that translate classroom feedback loops into interactive software. Public writeup planned after Deal Meal Planner.',
      stack: ['Interactive UX', 'Learning systems', 'Prototype'],
    },
    {
      tag: 'Workflow tools',
      title: 'Teacher workflow dashboard',
      body: 'Operational tools for classroom workflows, data organization, and repeated decision loops. Future case study will focus on systems design.',
      stack: ['Dashboards', 'Data workflows', 'UX'],
    },
    {
      tag: 'Automation',
      title: 'Remotion video automation',
      body: 'Programmatic video generation experiments for demos and instructional content using scripted scenes, captions, and exports.',
      stack: ['Remotion', 'Node', 'FFmpeg'],
    },
  ];
  return (
    <section className="more" id="work" data-screen-label="04 More work">
      <div className="section-head">
        <span className="section-num">03 / Also building</span>
        <h2 className="section-h2">Other work in flight</h2>
        <p className="section-lede">
          Smaller projects sharing the same DNA: real users, messy data, working systems.
          Detailed writeups landing here.
        </p>
      </div>
      <ul className="more-grid">
        {projects.map((p, i) => (
          <li className="more-card" key={i}>
            <span className="more-tag">{p.tag}</span>
            <div className="more-thumb">
              <svg viewBox="0 0 320 200" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <pattern id={`stripes-${i}`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="8" height="8" fill="var(--paper-2)" />
                    <rect width="1" height="8" fill="var(--ink-faint)" />
                  </pattern>
                </defs>
                <rect width="320" height="200" fill={`url(#stripes-${i})`} />
              </svg>
              <span className="more-thumb-label">screenshot &middot; coming soon</span>
            </div>
            <h3 className="more-title">{p.title}</h3>
            <p className="more-body">{p.body}</p>
            <ul className="more-stack">
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ─── Career Story ─────────────────────────────────────────────────────────
function Story() {
  const lessons = [
    { from: 'Designing a unit', to: 'Designing a feature', body: 'Both start with: who is the user, what does success look like, and what&rsquo;s the smallest version that works?' },
    { from: 'Running a classroom', to: 'Shipping a product', body: 'Real systems live in front of real people. You instrument, you watch, you adjust — every week.' },
    { from: 'Grading at scale', to: 'Building data pipelines', body: 'Hundreds of inconsistent inputs, one consistent output. Same problem, different format.' },
    { from: 'Explaining to students', to: 'Writing specs and READMEs', body: 'If a teenager can follow it on a Friday afternoon, an engineer can follow it on a Monday morning.' },
  ];
  return (
    <section className="story" id="story" data-screen-label="05 Story">
      <div className="section-head">
        <span className="section-num">04 / Story</span>
        <h2 className="section-h2">From classroom systems to product systems</h2>
      </div>
      <div className="story-body">
        <p className="story-lede">
          After fifteen years designing learning systems, workflows, and feedback loops
          in the classroom, I&rsquo;m applying the same systems mindset to software products.
          The technology is new; the discipline is the same.
        </p>
        <ul className="story-pairs">
          {lessons.map((l, i) => (
            <li key={i}>
              <div className="pair">
                <span className="pair-from">{l.from}</span>
                <span className="pair-arrow">→</span>
                <span className="pair-to">{l.to}</span>
              </div>
              <p dangerouslySetInnerHTML={{ __html: l.body }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="06 Contact">
      <div className="contact-inner">
        <div>
          <span className="section-num">05 / Contact</span>
          <h2 className="section-h2">Let&rsquo;s talk.</h2>
          <p className="contact-lede">
            I&rsquo;m looking for software / product engineering roles where messy
            real-world systems meet thoughtful product design.
          </p>
        </div>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:Lance.Grimsley@protonmail.com">Lance.Grimsley@protonmail.com</a>
          </li>
          <li>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/legosandjoysticks" target="_blank" rel="noreferrer">
              github.com/legosandjoysticks
            </a>
          </li>
          <li>
            <span className="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/lance-grimsley-a80323408/" target="_blank" rel="noreferrer">
              linkedin.com/in/lance-grimsley-a80323408
            </a>
          </li>
          <li>
            <span className="contact-label">Resume</span>
            <a href="Lance-Grimsley-Resume-Public.pdf" target="_blank" rel="noreferrer">
              Public resume PDF
            </a>
          </li>
        </ul>
      </div>
      <footer className="foot">
        <span>© 2026 Lance Grimsley</span>
        <span className="foot-mid">Built by hand · No template · No tracker</span>
        <span>Last updated May 2026</span>
      </footer>
    </section>
  );
}

Object.assign(window, { Nav, Hero, FeaturedProject, Strengths, More, Story, Contact });
