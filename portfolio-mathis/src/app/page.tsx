import Link from "next/link";
import { projects } from "./projects/data";

const navLinks = [
  { href: "#about", label: "A propos" },
  { href: "#skills", label: "Competences" },
  { href: "#experience", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  { label: "Projets termines", value: "12+" },
  { label: "Technos maitrisees", value: "9" },
  { label: "Skills", value: "20+" },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Git",
  "Figma",
  "Python",
  "PHP",
  "CSS / HTML",
  "C#",
  "Unity",
  "Arduino",
  "Linux",
  "Windows Server",
];

const timeline = [
  {
    period: "2025 — aujourd'hui",
    title: "Bachelor Informatique — Ynov",
    detail:
      "Mise en place de projets varies : site web, application mobile, jeu video sur Unity et autres.",
  },
  {
    period: "2023 — 2025",
    title: "BTS SIO SLAM",
    detail:
      "Mise en pratique de React, Next.js et bases de donnees relationnelles sur des cas concrets.",
  },
];

function GithubIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10.5v6M7.5 7.75v.01M12 16.5v-3.75c0-1.24 1-2.25 2.25-2.25S16.5 11.51 16.5 12.75v3.75M12 16.5v-6" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="icon project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div>
          <p className="eyebrow-tag mono">Bonjour, je suis</p>
          <h1 className="name">Mathis Valentin</h1>
          <h2 className="role">Developpeur Web Junior</h2>
          <p className="pitch">
            Etudiant en informatique (B2) qui construit des sites et applications rapides, utiles et
            soignes. Actuellement a la recherche d&apos;une alternance ou d&apos;un stage.
          </p>

          <nav className="side-nav" aria-label="Navigation principale">
            {navLinks.map((link, index) => (
              <a key={link.href} href={link.href}>
                <span className="nav-dash" aria-hidden="true" />
                <span className="mono">{String(index + 1).padStart(2, "0")}.</span> {link.label}
              </a>
            ))}
          </nav>

          <nav className="mobile-nav" aria-label="Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-socials" aria-label="Reseaux sociaux">
          <a href="https://github.com/mathisv78510-hue" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mathis-valentin-0b06072ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:mathis.v78510@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </aside>

      <main className="main-col">
        <section id="about">
          <div className="section-heading">
            <span className="section-num">01.</span>
            <h2 className="section-title">A propos</h2>
          </div>
          <p className="lede">
            Je suis actuellement en formation et je cherche a rejoindre une entreprise pour une
            alternance ou un stage, afin de monter en competences rapidement. J&apos;aime transformer
            une idee en produit clair, fonctionnel et bien structure — que ce soit un site web, une
            application mobile ou un jeu video.
          </p>
          <div className="highlights" aria-label="Chiffres cles">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="highlight-value mono">{item.value}</p>
                <p className="highlight-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="section-heading">
            <span className="section-num">02.</span>
            <h2 className="section-title">Competences</h2>
          </div>
          <ul className="skills-grid" aria-label="Liste des competences">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <div className="section-heading">
            <span className="section-num">03.</span>
            <h2 className="section-title">Parcours</h2>
          </div>
          <div className="timeline" aria-label="Parcours et experiences">
            {timeline.map((step) => (
              <article className="timeline-item" key={step.title}>
                <p className="timeline-period">{step.period}</p>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="section-heading">
            <span className="section-num">04.</span>
            <h2 className="section-title">Projets</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                className="project-card-link"
                key={project.slug}
              >
                <article className="project-card">
                  <div className="project-card-head">
                    <FolderIcon />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-tags" aria-label="Technologies utilisees">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <span className="project-card-cta mono">
                    Voir le projet
                    <ArrowIcon />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="contact-title mono">05. Contact</p>
          <h2 className="contact-heading">Travaillons ensemble</h2>
          <p className="contact-copy">
            A la recherche d&apos;une opportunite de stage ou d&apos;alternance en developpement web
            ou jeux video. N&apos;hesite pas a me contacter si mon profil t&apos;interesse.
          </p>
          <a className="btn" href="/CV_Mathis_Valentin.pdf" download>
            Telecharger mon CV
          </a>
          <div className="contact-links">
            <a href="mailto:mathis.v78510@gmail.com">mathis.v78510@gmail.com</a>
            <a href="https://github.com/mathisv78510-hue" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mathis-valentin-0b06072ab/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
