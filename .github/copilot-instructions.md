<!-- Copied/created by AI assistant: targeted, actionable guidance for coding agents -->
# Copilot instructions for this repository

This repository is a small Next.js (App Router) TypeScript portfolio scaffold. Follow these concise, project-specific rules to be productive immediately.

- **Project type:** Next.js app using the `app/` directory (App Router). See [app/layout.tsx](../app/layout.tsx) and [app/page.tsx](../app/page.tsx).
- **Languages / frameworks:** TypeScript, React 19, Next 16, Tailwind CSS (see `devDependencies` in [package.json](../package.json)).

- **Common commands:** use the scripts in [package.json](../package.json):
  - `npm run dev` (also works with `pnpm dev`, `yarn dev`) — runs `next dev`.
  - `npm run build` — runs `next build`.
  - `npm run start` — runs `next start` after build.
  - `npm run lint` — runs `eslint`.

- **Where to make changes:** Start with the App Router files under `app/`.
  - Edit the UI: [app/page.tsx](../app/page.tsx) for the main page.
  - Global layout and fonts: [app/layout.tsx](../app/layout.tsx) (uses `next/font/google` to load Geist fonts and exposes CSS variables).
  - Global styles and theme variables: [app/globals.css](../app/globals.css) (Tailwind is imported and color variables are defined; dark mode handled via `prefers-color-scheme`).

- **Styling patterns:** Tailwind utility classes are used throughout. The project also defines CSS custom properties for color and font variables in `app/globals.css` and applies font variables in `app/layout.tsx` via class names on `<body>`.

- **Assets & images:** Static assets live in `public/` (e.g., `/next.svg`, `/vercel.svg`) and are rendered with `next/image` in [app/page.tsx](../app/page.tsx).

- **Server vs Client components:** Because this uses the App Router, files in `app/` are server components by default. Add a top-line `"use client"` when a component needs browser-only behavior (hooks, event handlers, state).

- **Linting / formatting:** The repo uses `eslint` and Next's ESLint config (`eslint-config-next` in `devDependencies`). Run `npm run lint` before large commits.

- **Build & deploy expectations:** Standard Next.js build (`next build`) is used; this repository is compatible with Vercel (see deploy links in README). Keep `next.config.ts` minimal unless adding custom Next features — the file exists at [next.config.ts](../next.config.ts).

- **Patterns and conventions to follow when making changes:**
  - Keep top-level routes/components under `app/` and avoid creating a parallel `pages/` directory.
  - Prefer server components unless client-side interactivity is required; add `"use client"` explicitly.
  - Use Tailwind utility classes for layout and spacing; only add global CSS variables in `app/globals.css`.

- **Files to inspect for context:** [package.json](../package.json), [README.md](../README.md), [postcss.config.mjs](../postcss.config.mjs), [app/layout.tsx](../app/layout.tsx), [app/globals.css](../app/globals.css), [app/page.tsx](../app/page.tsx).

Examples (copy-paste safe):

- Add a client component header with state:

  1. Create `app/components/Header.tsx` with a top-line `"use client"` and React hooks.

- Toggle dark styles via CSS variables already defined in [app/globals.css](../app/globals.css).

If content in this file conflicts with an existing `.github/copilot-instructions.md`, preserve project-specific examples and replace generic advice. Ask a human if you need to change CI, add new scripts, or introduce new top-level routes.

If something here is unclear or you'd like more examples (tests, CI, or deploy tweaks), tell me which area to expand.
