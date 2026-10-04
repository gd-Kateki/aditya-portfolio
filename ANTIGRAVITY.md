# Open and edit in Antigravity

This is an ordinary self-contained Next.js project. Nothing in the application depends on Codex, Sites, Antigravity, or a paid API.

## Open the right folder

Extract the ZIP, then add/open **aditya-nair-portfolio**, the folder containing `package.json`. Do not open `out`, `public`, or a parent folder containing multiple projects.

In Antigravity’s Project interface, create/select a project and use **Add Folder** to add this directory. In an editor interface with an Open Folder command, open that same directory. Use local-folder mode for ordinary editing; a Git repository is optional.

Official references: [Antigravity projects](https://antigravity.google/docs/projects/) and [getting started](https://antigravity.google/docs/getting-started).

## First setup

Install Node.js 22 LTS, then open a terminal in the project folder:

```sh
npm ci
npm run typecheck
npm run dev
```

Open the local address printed in the terminal. Keep the terminal running. Stop with Ctrl+C. If port 3000 is already used, run `npm run dev -- --port 3002`.

The `.nvmrc` records the preferred Node major version. No global Next.js install or editor extension is required. If npm reports unsupported Node, update Node rather than bypassing engine checks.

## Agent context

Ask the agent to read `AGENTS.md`, `README.md`, and `GEMINI.md`. The shared guide documents factual-content limits, project templates, accessibility, intro behavior, and local-only publishing preferences. These are plain Markdown files; the build does not depend on an editor reading them automatically.

## Validate changes

```sh
npm run check
npm run preview
```

`check` regenerates Next.js type definitions, checks TypeScript, and creates the static output. The preview serves `out/` on port 3001. For browser tests:

```sh
npx playwright install chromium
npm run test:production
```

Keep the installed dependencies and generated files in your local workspace, but do not commit them. They are already ignored. On a second computer, run `npm ci` again instead of transferring `node_modules`.

## Folder map

| Folder | Purpose |
| --- | --- |
| `app/` | Routes, metadata, base styles, glass styles |
| `components/` | Reusable interface and intro |
| `data/` | Profile, work, experience, skills, navigation |
| `lib/` | Portable URL helpers |
| `public/` | Runtime images, résumé, favicon, font licenses |
| `assets/` | Original artwork and its provenance; not loaded by the site |
| `scripts/` | Portable Node preview server |
| `tests/` | Playwright checks |
| `out/` | Prebuilt deployable static site; regenerate, do not edit |

The handoff omits installed packages, caches, machine-specific hosting metadata, environment secrets, and test artifacts. It includes the lockfile, all source/assets, and the prebuilt site. No symlinks or outside-folder files are required.

## Scope of verification

The source is verified with standard npm installation, type generation, TypeScript, and a production build. Browser checks run in Chromium. Opening the GUI of a locally installed Antigravity application is not part of this verification; these instructions follow its official folder/project workflow.
