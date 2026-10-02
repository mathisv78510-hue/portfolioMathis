import Link from "next/link";
import { ArrowIcon } from "./components/icons";
import { BlobShape } from "./components/blob-shape";

export default function Home() {
  return (
    <section className="hero-full">
      <div className="hero-blobs" aria-hidden="true">
        <BlobShape
          id="blob-1"
          className="blob blob-1"
          colors={["#7fe8a6", "#cdeb8a", "#f0ec8a"]}
          strokeWidth={105}
          highlight={{ x: 55, y: 45 }}
          path="M35,55 C75,30 110,55 125,90 C138,118 125,135 110,140"
        />
        <BlobShape
          id="blob-2"
          className="blob blob-2"
          colors={["#f29494", "#f2c17f", "#f2e28a"]}
          strokeWidth={112}
          highlight={{ x: 100, y: 55 }}
          path="M60,35 C115,25 155,50 158,90 C160,118 138,135 115,132"
        />
        <BlobShape
          id="blob-3"
          className="blob blob-3"
          colors={["#8a94e8", "#c489e0", "#ec8ac0"]}
          strokeWidth={128}
          highlight={{ x: 85, y: 55 }}
          path="M40,70 C75,35 130,35 160,65 C178,85 170,115 140,130"
        />
        <BlobShape
          id="blob-4"
          className="blob blob-4"
          colors={["#7be8d6", "#7fc9ec"]}
          strokeWidth={82}
          highlight={{ x: 35, y: 150 }}
          path="M45,155 C25,120 70,118 92,95 C118,68 78,55 95,25"
        />
        <BlobShape
          id="blob-5"
          className="blob blob-5"
          colors={["#8ad9c4", "#e89cb8"]}
          strokeWidth={77}
          highlight={{ x: 48, y: 90 }}
          path="M40,95 C65,45 135,45 160,85"
        />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow mono">Bonjour, je suis</p>
        <h1 className="hero-title">
          Mathis Valentin
          <br />
          <span className="hero-title-accent">Developpeur Web</span>
        </h1>
        <p className="hero-subtitle">
          Etudiant en informatique (B2) qui construit des sites et applications rapides, utiles et
          soignes. Actuellement a la recherche d&apos;une alternance ou d&apos;un stage.
        </p>
        <div className="hero-cta-row">
          <Link className="hero-cta" href="/projets">
            <ArrowIcon /> voir mes projets
          </Link>
          <Link className="hero-cta" href="/a-propos">
            <ArrowIcon /> en savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
