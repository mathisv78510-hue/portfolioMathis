import Link from "next/link";
import type { Metadata } from "next";
import { PageBlobs } from "../../components/page-blobs";

export const metadata: Metadata = {
  title: "En savoir plus | Mathis Valentin",
  description: "Qui je suis, mes competences, mon parcours et comment me contacter.",
};

const highlights = [
  { label: "Projets termines", value: "12+" },
  { label: "Technos maitrisees", value: "9" },
  { label: "Skills", value: "20+" },
];

const skillGroups = [
  {
    label: "Langages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "PHP", "C#"],
  },
  {
    label: "Frameworks & librairies",
    items: ["React", "Next.js", "Node.js", "Express", "Unity"],
  },
  {
    label: "Bases de donnees",
    items: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    label: "Outils",
    items: ["Git", "Figma", "Arduino", "Linux", "Windows Server"],
  },
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

export default function AProposPage() {
  return (
    <div className="page-root">
      <PageBlobs />
      <div className="back-nav">
        <Link href="/" className="back-link mono">
          ← Accueil
        </Link>
      </div>
      <main className="main-col">
      <section id="about">
        <div className="section-heading">
          <span className="section-num">01.</span>
          <h1 className="section-title">A propos</h1>
        </div>
        <div className="content-card">
          <p className="lede">
            Je suis actuellement en formation et je cherche a rejoindre une entreprise pour une
            alternance ou un stage, afin de monter en competences rapidement. J&apos;aime
            transformer une idee en produit clair, fonctionnel et bien structure — que ce soit un
            site web, une application mobile ou un jeu video.
          </p>
          <div className="highlights" aria-label="Chiffres cles">
            {highlights.map((item) => (
              <div className="highlight-item" key={item.label}>
                <p className="highlight-value mono">{item.value}</p>
                <p className="highlight-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="section-heading">
          <span className="section-num">02.</span>
          <h2 className="section-title">Competences</h2>
        </div>
        <div className="content-card skills-card">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <p className="skill-group-label mono">{group.label}</p>
              <ul className="skill-tags" aria-label={group.label}>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="section-heading">
          <span className="section-num">03.</span>
          <h2 className="section-title">Parcours</h2>
        </div>
        <div className="content-card">
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
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="contact-title mono">04. Contact</p>
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
