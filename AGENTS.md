<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project guide

- Standard Next.js App Router / React / TypeScript / Tailwind / Motion project; static export, no backend or platform SDK.
- Read README.md for setup and ANTIGRAVITY.md for the handoff workflow.
- Source: app/ routes and styling, components/ interface, data/ factual content, lib/ utilities, public/ runtime assets.
- app/globals.css provides shared layout rules; app/glass.css provides the current glass design and intro animation.
- Keep the navigation bar's AN mark. Do not add initials or monograms elsewhere. Use the circle/square motif for the favicon and intro.
- Preserve the user's factual background. Project templates must stay explicitly labeled until verified project details are supplied. Never reintroduce links to old portfolios.
- The user requested removal of the intro animation. Keep content immediately accessible; do not reintroduce an entry animation.
- Use npm ci and package-lock.json. npm run typecheck generates framework types before checking them. npm run check verifies the static production build.
- All local assets must use lib/paths.ts asset() when referenced in components, for base-path hosting support.
- Do not edit out/, .next/, node_modules/, generated declarations, or test reports. Rebuild generated output after changes.
- No absolute machine paths, secrets, paid dependencies, automatic deployment, or editor-specific runtime requirements.
- Keep the website local unless the user explicitly approves publishing.
