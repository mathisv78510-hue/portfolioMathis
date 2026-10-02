import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./data";
import { FolderIcon, ArrowIcon } from "../../components/icons";
import { PageBlobs } from "../../components/page-blobs";

export const metadata: Metadata = {
  title: "Projets | Mathis Valentin",
  description: "Les projets realises par Mathis Valentin.",
};

export default function ProjetsPage() {
  return (
    <div className="page-root">
      <PageBlobs />
      <div className="back-nav">
        <Link href="/" className="back-link mono">
          ← Accueil
        </Link>
      </div>
      <main className="main-col">
      <section>
        <div className="section-heading">
          <span className="section-num">01.</span>
          <h1 className="section-title">Projets</h1>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link
              href={`/projets/${project.slug}`}
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
      </main>
    </div>
  );
}
