import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: `${project.title} | Mathis Valentin`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="project-detail-shell">
      <div className="project-detail">
        <Link href="/#projects" className="back-link mono">
          ← Retour aux projets
        </Link>

        <p className="eyebrow-tag mono">Projet</p>
        <h1 className="project-detail-title">{project.title}</h1>

        <ul className="project-tags" aria-label="Technologies utilisees">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <p className="lede project-detail-lede">{project.longDescription}</p>

        <div className="project-detail-meta">
          <p className="meta-label mono">Role</p>
          <p className="meta-value">{project.role}</p>
        </div>

        <div className="section-heading">
          <span className="section-num">+</span>
          <h2 className="section-title">Points cles</h2>
        </div>
        <ul className="feature-list">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-detail-footer">
          <Link href="/#projects" className="btn">
            Voir les autres projets
          </Link>
          <Link href="/#contact" className="btn btn-ghost">
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
