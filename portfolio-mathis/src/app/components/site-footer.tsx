import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-home">
        Mathis Valentin
      </Link>
      <div className="footer-socials" aria-label="Reseaux sociaux">
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
    </footer>
  );
}
