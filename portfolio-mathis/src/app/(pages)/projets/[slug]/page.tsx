import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "../data";
import { PageBlobs } from "../../../components/page-blobs";
import { ProjectGallery } from "../../../components/project-gallery";

function PhotoIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="m5 17 4.5-4.5a2 2 0 0 1 2.8 0L17 17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
    <div className="page-root">
      <PageBlobs />
      <div className="back-nav">
        <Link href="/projets" className="back-link mono">
          ← Retour aux projets
        </Link>
      </div>
      <main className="main-col">
      <section>
        <div className="section-heading">
          <span className="section-num">01.</span>
          <h1 className="section-title">{project.title}</h1>
        </div>
        <div className="content-card">
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
        </div>
      </section>

      <section>
        <div className="section-heading">
          <span className="section-num">02.</span>
          <h2 className="section-title">Apercu</h2>
        </div>
        <div className="content-card">
          {project.video && (
            <video className="project-video" src={project.video} controls playsInline />
          )}

          {project.photos.length > 0 && (
            <ProjectGallery photos={project.photos} title={project.title} />
          )}

          {!project.video && project.photos.length === 0 && (
            <div className="media-placeholder">
              <PhotoIcon />
              <p>
                Aucune capture pour l&apos;instant. Depose des images ou une video dans{" "}
                <code className="mono">public/projects/{project.slug}/</code>, puis reference-les
                dans <code className="mono">src/app/projets/data.ts</code> (champs{" "}
                <code className="mono">photos</code> et <code className="mono">video</code>).
              </p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <span className="section-num">03.</span>
          <h2 className="section-title">Points cles</h2>
        </div>
        <div className="content-card">
          <ul className="feature-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail-footer">
          <Link href="/projets" className="btn">
            Voir les autres projets
          </Link>
          <Link href="/a-propos#contact" className="btn btn-ghost">
            Me contacter
          </Link>
        </div>
      </section>
      </main>
    </div>
  );
}
