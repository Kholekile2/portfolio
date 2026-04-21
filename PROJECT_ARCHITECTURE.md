# PROJECT_ARCHITECTURE

## 1. Project Overview

### What the project is and its purpose
This repository is a personal portfolio website built with Next.js App Router. Its purpose is to present:
- Professional profile information (bio, focus areas, experience)
- Featured project case studies (DocChat, SplitEasy, Auto Analytics, MedCare)
- Contact information and external profile links

It is a content-driven, mostly static site with rich page layouts and case-study storytelling.

### Deployment platform and environment
- Primary runtime target: Node.js (Next.js server/runtime)
- Likely deployment platform: Vercel (not explicitly configured in repo, but project links and README align with Vercel deployment)
- Local development environment: `next dev` on `http://localhost:3000`
- Production build flow: `next build` then `next start`

## 2. Tech Stack

### Frontend framework and version
- Next.js `16.2.3`
- React `19.2.4`
- React DOM `19.2.4`

### Backend framework and version
- No backend server code exists in this repository.
- This repo is frontend-only (portfolio website).
- Some case-study content describes external backend projects (for example ASP.NET Core), but those backends are not part of this codebase.

### Styling solution
- Tailwind CSS v4 (via `@import "tailwindcss"` in global CSS)
- Custom global CSS utility classes in `app/globals.css`
- Theme tokens via CSS variables + media query dark mode support

### Language
- TypeScript (`.ts` and `.tsx`)

### Build tool / bundler
- Next.js build system (SWC/Turbopack managed by Next.js)
- PostCSS configured via `postcss.config.mjs` with `@tailwindcss/postcss`

## 3. Project Structure

### Full folder/file tree with one-line descriptions
Note: Generated and dependency folders (`.next/`, `node_modules/`) are included as top-level entries but not expanded.

```text
portfolio/
├─ .git/                                   # Git metadata
├─ .gitignore                              # Ignore rules for Node/Next/env/build artifacts
├─ .next/                                  # Next.js build/dev output (generated)
├─ node_modules/                           # Installed npm dependencies
├─ AGENTS.md                               # Repository instruction file for coding agents
├─ CLAUDE.md                               # Alias-style instruction file referencing AGENTS.md
├─ README.md                               # Default Next.js starter README and run/deploy notes
├─ package.json                            # Project metadata, scripts, dependencies
├─ package-lock.json                       # npm lockfile for deterministic installs
├─ tsconfig.json                           # TypeScript compiler configuration and path alias
├─ next.config.ts                          # Next.js runtime/build configuration
├─ next-env.d.ts                           # Next.js TypeScript ambient types (generated/managed)
├─ eslint.config.mjs                       # ESLint flat config using Next.js presets
├─ postcss.config.mjs                      # PostCSS plugin setup (Tailwind v4 plugin)
├─ PROJECT_ARCHITECTURE.md                 # This architecture documentation file
├─ app/                                    # Active Next.js App Router root
│  ├─ favicon.ico                          # Browser favicon asset
│  ├─ icon.svg                             # Site icon used in metadata
│  ├─ globals.css                          # Global styles, theme tokens, utility class patterns
│  ├─ layout.tsx                           # Root layout, font setup, metadata, top nav
│  ├─ page.tsx                             # Home/profile landing page
│  ├─ components/                          # Shared UI components for app routes
│  │  └─ case-study-toc.tsx               # Sticky in-page table of contents with active section tracking
│  ├─ contact/
│  │  └─ page.tsx                         # Contact page with email/phone/profile links
│  └─ projects/
│     ├─ page.tsx                         # Projects listing page
│     ├─ auto-analytics/
│     │  └─ page.tsx                      # Auto Analytics detailed case-study page
│     ├─ docchat/
│     │  └─ page.tsx                      # DocChat detailed case-study page
│     ├─ medcare/
│     │  └─ page.tsx                      # MedCare detailed case-study page
│     └─ spliteasy/
│        └─ page.tsx                      # SplitEasy detailed case-study page
├─ public/                                 # Static assets served from site root
│  ├─ file.svg                             # Default template SVG asset
│  ├─ globe.svg                            # Default template SVG asset
│  ├─ next.svg                             # Next.js logo asset
│  ├─ vercel.svg                           # Vercel logo asset
│  ├─ window.svg                           # Default template SVG asset
│  └─ projects/                            # Project-specific static images
│     ├─ Creative coder in a cozy workspace.png  # Home/profile hero image
│     ├─ auto-analytics/
│     │  ├─ README.md                      # Notes for expected screenshot filenames
│     │  ├─ home.png                       # Auto Analytics home screenshot
│     │  ├─ explore.png                    # Auto Analytics explore screenshot
│     │  ├─ brand-analysis.png             # Auto Analytics brand chart screenshot
│     │  ├─ mileage vs price.png           # Auto Analytics mileage-price chart screenshot
│     │  ├─ year vs price.png              # Auto Analytics year-price chart screenshot
│     │  ├─ fuel type&transmission vs price.png # Auto Analytics fuel/transmission chart screenshot
│     │  └─ model analysis.png             # Auto Analytics model chart screenshot
│     └─ medcare/
│        ├─ README.md                      # Notes for expected screenshot filenames
│        ├─ home.png                       # MedCare home screenshot
│        ├─ interactive-dashboard-advanced-filtering.png # MedCare filtering dashboard screenshot
│        ├─ comprehensive-analytics-visualizations.png   # MedCare analytics screenshot
│        ├─ medical-specialty-performance.png # MedCare specialty chart screenshot
│        ├─ revenue-trends-analysis.png    # MedCare revenue trend screenshot
│        └─ peak-hours-analysis.png        # MedCare peak-hours chart screenshot
└─ src/                                    # Secondary source tree (legacy/duplicate content)
   └─ app/                                 # Alternate app-directory style pages
      ├─ page.tsx                          # Older/alternate home page content
      ├─ contact/
      │  └─ page.tsx                      # Older/alternate contact page
      └─ projects/
         ├─ page.tsx                      # Older/alternate projects list page
         ├─ docchat/
         │  └─ page.tsx                   # Older/alternate DocChat case-study page
         └─ spliteasy/
            └─ page.tsx                   # Older/alternate SplitEasy case-study page
```

### Where pages/routes live
- Active route files are under `app/**/page.tsx`.
- Route mapping:
  - `app/page.tsx` -> `/`
  - `app/contact/page.tsx` -> `/contact`
  - `app/projects/page.tsx` -> `/projects`
  - `app/projects/auto-analytics/page.tsx` -> `/projects/auto-analytics`
  - `app/projects/docchat/page.tsx` -> `/projects/docchat`
  - `app/projects/medcare/page.tsx` -> `/projects/medcare`
  - `app/projects/spliteasy/page.tsx` -> `/projects/spliteasy`

### Where components live
- Shared components are in `app/components/`.
- Current reusable component:
  - `app/components/case-study-toc.tsx`

### Where assets, fonts, and images live
- Static assets/images: `public/` and `public/projects/**`
- App icons: `app/favicon.ico`, `app/icon.svg`
- Fonts: loaded via `next/font/google` in `app/layout.tsx` (Geist + Geist Mono)

### Config files and purpose
- `package.json`: scripts + dependency manifest
- `tsconfig.json`: TypeScript compile behavior and aliases (`@/*`)
- `next.config.ts`: Next.js config (`devIndicators: false`)
- `eslint.config.mjs`: linting rules based on Next.js core-web-vitals + TypeScript
- `postcss.config.mjs`: PostCSS plugins for Tailwind v4
- `.gitignore`: files/folders excluded from Git
- `next-env.d.ts`: Next.js TypeScript types reference

## 4. Packages & Dependencies

### Dependencies (`dependencies`)
- `next` (`16.2.3`): React framework providing App Router, rendering, routing, build/runtime integration
- `react` (`19.2.4`): UI library used by Next.js pages/components
- `react-dom` (`19.2.4`): React DOM renderer for web output

### Dev dependencies (`devDependencies`)
- `@tailwindcss/postcss` (`^4`): Tailwind v4 PostCSS plugin integration
- `@types/node` (`^20`): Type definitions for Node.js APIs
- `@types/react` (`^19`): Type definitions for React
- `@types/react-dom` (`^19`): Type definitions for React DOM
- `eslint` (`^9`): Linting engine
- `eslint-config-next` (`16.2.3`): Next.js recommended ESLint presets (including Core Web Vitals rules)
- `tailwindcss` (`^4`): Utility-first CSS framework
- `typescript` (`^5`): TypeScript compiler and language tooling

## 5. Pages & Routing

### Every page/route and purpose
1. `/` (`app/page.tsx`)
   - Portfolio home/profile page with intro, about, stack summary, experience, and featured projects.

2. `/contact` (`app/contact/page.tsx`)
   - Contact call-to-action page with direct email/phone links and social profiles.

3. `/projects` (`app/projects/page.tsx`)
   - Project index page listing four case studies with short summaries and external links.

4. `/projects/docchat` (`app/projects/docchat/page.tsx`)
   - Long-form DocChat case study, architecture and engineering write-up.

5. `/projects/spliteasy` (`app/projects/spliteasy/page.tsx`)
   - Long-form SplitEasy case study, algorithm/security highlights.

6. `/projects/auto-analytics` (`app/projects/auto-analytics/page.tsx`)
   - Long-form BI case study with screenshot sections and analysis narrative.

7. `/projects/medcare` (`app/projects/medcare/page.tsx`)
   - Long-form healthcare analytics case study with screenshot sections and operational insights.

## 6. Components

### Component list and descriptions
1. `app/components/case-study-toc.tsx`
   - Client component that renders a sticky “On This Page” table of contents.
   - Tracks active heading using `IntersectionObserver` and hash synchronization.
   - Reused by multiple case-study pages.

### Reusable/shared components
- `CaseStudyToc` is the primary shared component reused across project case studies.

## 7. Data & State Management

### How data is managed
- No global state library is used (no Redux, Zustand, Context providers, SWR, or React Query detected).
- Most page content is static, hardcoded in server components.
- Local component state is used only in `CaseStudyToc` via React hooks:
  - `useState` for active section id
  - `useEffect` for observer and hash listeners

### Static data files or constants
- No standalone constants/data files were found.
- Inline static arrays are used inside pages (for example, case-study `sections` arrays used by `CaseStudyToc`).

### External APIs being called
- No runtime API calls (`fetch`, `axios`, etc.) are present in this repository.
- External links exist (`<a href="...">`) to live demos and GitHub repositories, but these are navigation links, not API integrations.

## 8. Database

### Is there a database?
- No database is used by this portfolio codebase itself.
- The site is static/content-first and does not read/write persistent data.

### ORM or query layer
- None in this repository.

## 9. Environment Variables

### Referenced `.env` variable keys
- None detected in source code.
- No `process.env.*`, `NEXT_PUBLIC_*`, or `import.meta.env.*` usages were found.

## 10. Styling & Theming

### Global styling approach
- Tailwind CSS v4 is imported globally in `app/globals.css`.
- Reusable semantic utility classes are defined in global CSS (`.surface-card`, `.chip`, `.btn-primary`, `.btn-secondary`, `.text-link`, `.page-shell`).
- Base typography and colors are set through CSS variables on `:root`.

### Theme/design system
- Lightweight theme system based on CSS custom properties:
  - `--background`, `--foreground`, `--surface`, `--surface-border`, `--accent`, `--accent-soft`
- Dark mode values are set via `@media (prefers-color-scheme: dark)`.
- Fonts are standardized through `next/font` variables (`--font-geist-sans`, `--font-geist-mono`).

## 11. Home / Profile Page Breakdown

### Sections on home/profile page (`app/page.tsx`)
1. Hero section
   - Name, role tagline, short summary, CTA buttons (`View Projects`, `Contact Me`), and portrait image.

2. Value cards row
   - Primary focus, core stack, value delivered.

3. About Me
   - Bio and professional positioning paragraphs.

4. Tech Stack
   - High-level skill categories (C#/.NET, JS/TS, Python/R, SQL, Azure AI, Supabase).

5. Experience
   - Current role descriptions and responsibilities.

6. Featured Projects
   - Four project cards: SplitEasy, DocChat, Auto Analytics Portal, MedCare Booking System.

### Components making up the home page
- No imported custom local components are used on the home page.
- Uses Next.js built-ins:
  - `next/image` (`Image`) for optimized hero image
  - `next/link` (`Link`) for internal navigation
- Uses shared global CSS classes for visual system.

### Data displayed and sources
- All home page data is hardcoded directly in `app/page.tsx`.
- Project imagery is loaded from static files in `public/projects/`.
- No dynamic backend or CMS source is used.

## 12. Project Setup & Scripts

### Install and run locally
1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Open in browser:
   - `http://localhost:3000`

### Scripts from `package.json`
- `npm run dev`
  - Runs `next dev` for local development with hot reload.
- `npm run build`
  - Runs `next build` to create production build output.
- `npm run start`
  - Runs `next start` to serve the production build.
- `npm run lint`
  - Runs `eslint` with configured Next.js/TypeScript lint rules.

---

## Additional Notes
- The repository includes a secondary `src/app/` tree containing older/alternate page implementations. The primary active App Router content is under root `app/`.
- Case-study pages document external systems (ASP.NET Core backends, Supabase, BigQuery), but those systems are referenced as portfolio content rather than implemented code in this repository.
