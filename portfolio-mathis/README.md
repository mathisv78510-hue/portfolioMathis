# Portfolio — Mathis Valentin

Portfolio personnel construit avec Next.js (App Router) et Tailwind CSS.

## Demarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Structure

- `src/app/page.tsx` — page d'accueil (a propos, competences, parcours, projets, contact)
- `src/app/projects/data.ts` — contenu des projets
- `src/app/projects/[slug]/page.tsx` — page de detail d'un projet
- `src/app/globals.css` — design system (couleurs, typographie, layout)
- `public/CV_Mathis_Valentin.pdf` — CV telechargeable depuis la section contact

## Scripts

- `npm run dev` — serveur de developpement
- `npm run build` — build de production
- `npm run start` — lance le build de production
- `npm run lint` — verifie le code avec ESLint
