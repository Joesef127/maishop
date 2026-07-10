<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

- Use the App Router layout in `src/app/` (not `app/`). Primary entry points are `src/app/layout.tsx` and `src/app/page.tsx`.
- This repo is on `next@16.2.10` + `react@19.2.4` + `typescript@^5`; check deprecations against local Next docs before introducing APIs.
- Styling uses Tailwind v4 with `@import "tailwindcss"` in `src/app/globals.css` and PostCSS plugin `@tailwindcss/postcss` in `postcss.config.mjs`.
- Respect the path alias in `tsconfig.json`: import app code via `@/*` -> `src/*`.
- Linting uses ESLint flat config in `eslint.config.mjs` (`eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`).
- Use npm scripts from `package.json`: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
<!-- END:nextjs-agent-rules -->
