export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  role: string;
  highlights: string[];
  photos: string[];
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description:
      "Interface data pour visualiser des indicateurs business en temps reel avec filtres interactifs.",
    longDescription:
      "Ce projet centralise plusieurs indicateurs business dans un tableau de bord unique. L'objectif etait de rendre des donnees complexes faciles a lire en un coup d'oeil, tout en gardant l'application rapide meme avec beaucoup de donnees affichees en meme temps.",
    stack: ["Next.js", "TypeScript", "Chart.js"],
    role: "Developpement front-end et integration des graphiques",
    highlights: [
      "Graphiques interactifs (courbes, barres, repartition) avec Chart.js",
      "Filtres combinables (periode, categorie, statut) sans rechargement de page",
      "Composants reutilisables pour accelerer l'ajout de nouveaux indicateurs",
      "Attention portee a la lisibilite et aux temps de chargement",
    ],
    photos: [],
  },
  {
    slug: "app-fitness",
    title: "App Fitness",
    description:
      "Application de suivi des entrainements avec authentification, progression et objectifs personnalises.",
    longDescription:
      "Une application pensee pour suivre ses seances de sport au quotidien. Les utilisateurs peuvent planifier leurs entrainements, enregistrer leurs performances et visualiser leur progression semaine apres semaine grace a un historique complet.",
    stack: ["React", "Node.js", "PostgreSQL"],
    role: "Developpement full-stack (frontend React et API Node.js)",
    highlights: [
      "Authentification securisee et gestion de session utilisateur",
      "API REST en Node.js connectee a une base PostgreSQL",
      "Suivi de progression avec graphiques d'evolution",
      "Objectifs personnalisables par utilisateur",
    ],
    photos: [],
  },
  {
    slug: "landing-saas",
    title: "Landing SaaS",
    description:
      "Site marketing rapide et responsive avec sections modulaires et optimisation SEO de base.",
    longDescription:
      "Une landing page orientee conversion pour un produit SaaS fictif. Le travail a porte sur une hierarchie visuelle forte, des sections modulaires faciles a reorganiser, et une excellente adaptation mobile.",
    stack: ["Next.js", "Tailwind CSS"],
    role: "Design et developpement complet de la landing page",
    highlights: [
      "Sections modulaires (hero, features, pricing, FAQ) reutilisables",
      "Optimisation des performances et des scores Lighthouse",
      "Responsive mobile-first avec Tailwind CSS",
      "Bonnes pratiques SEO de base (metadonnees, structure semantique)",
    ],
    photos: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
