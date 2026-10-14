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
    slug: "Otter-Able",
    title: "Otter-Able",
    description:
      "Un jeux vidéo party game/casual game qui se joue entre 2 a 4 joueurs avec du combat , du multi , un classement et des mini jeux , La Loutre avec le plus de point gagne.",
    longDescription:
      "Un jeu vidéo party game/casual game qui se joue entre 2 à 4 joueurs avec du combat, du multi, un classement et des mini-jeux, La Loutre avec le plus de points gagne. ils gagnent des points en terminant des mini-jeux. De plus, il y a plein d'interactions possibles entre les loutres et les objets pour dynamiser le jeu .",

    stack: ["Unity", "C#", "Netcode pour GameObjects", "Git", "NavMesh", "Méthode Agile / Scrum", "jira"],
    role: "Developpement gameplay , intéractions et multijoueur sous Unity",
    highlights: [
    "Party game de 2 à 4 joueurs avec un mode multijoueur en local",
    "Système de combat : attaques, collisions et réactions physiques entre les loutres",
    "Interactions avec les objets du décor pour rendre les parties plus dynamiques",
    "Plusieurs mini-jeux avec leurs propres règles, reliés à un système de points commun",
    "Classement en fin de partie pour désigner la loutre gagnante",
    "Gestion de plusieurs manettes avec le Unity Input System",
    "Synchronisation des joueurs et des objets en réseau avec Netcode for GameObjects",
    "Travail en équipe de 7 personnes avec Git (branches, merges, gestion des conflits)",
    ],
    photos: [
      "/projects/otter-able/controlle manette.png",
      "/projects/otter-able/touches clavierSouris.png",
      "/projects/otter-able/planification jeux.png",
    ],

    video: "/projects/otter-able/Gameplay.mp4",
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
