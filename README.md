# Aditya Nair — Game Designer × UI/UX Designer

A complete, independently hostable portfolio built with **Next.js, React, TypeScript, Tailwind CSS, and Motion**. It combines an editorial visual identity with an interactive design loop, linked discipline filters, a career timeline, and reusable case-study pages.

For Antigravity, start with [ANTIGRAVITY.md](ANTIGRAVITY.md). The clean handoff is editor-independent and includes the complete source plus prebuilt output.

## Start here

1. Extract the ZIP to a folder on your computer.
2. Install **Node.js 22 LTS or a newer supported LTS version** from [nodejs.org](https://nodejs.org/).
3. Open a terminal in this folder (the one containing `package.json`).
4. Run:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal, usually `http://127.0.0.1:3000`. Stop the server with Ctrl+C. Keep the terminal open while working on the site.

`npm ci` installs the exact dependency versions in `package-lock.json`. Do not copy `node_modules` between computers. Fonts are included through open-source Fontsource packages and served locally; visitors never need a Google Fonts connection.

## Build and production preview

```sh
npm run typecheck
npm run build
npm run preview
```

The production preview opens at `http://127.0.0.1:3001`. The `out/` folder contains the complete static website. A tested copy is included in the ZIP so you can inspect or host it immediately. Rebuild after every content change.

Do not double-click `out/index.html`: the website needs an HTTP server for its assets and routes. `npm run preview` provides one. It is a local development tool, not an internet-facing production server.

## What is complete, and what you need to replace

The interface, responsive layouts, filters, interaction loop, career accordion, navigation, résumé download, contact actions, and project detail routes are implemented.

The homepage features two Game Design projects and two UI/UX projects. `/game-design/` contains three game projects; `/uiux/` contains five UI/UX projects, including NovelNest and St. Andrew’s College. `/writing/` contains two complete game design articles and links to the UI/UX case studies. The former Roblox project URL remains available for existing links.

All company names, roles, dates, education, tools, and game jams are based on the supplied résumé. Descriptions are concise adaptations. The original role dates overlap; those dates are intentionally preserved. No older portfolio site was consulted or reused.

The downloadable PDF is a copy of the supplied résumé with the old portfolio labels and hyperlinks removed. The professional content and supplied contact details are preserved. Your original PDF is unchanged. The website itself displays email and state/country, not a phone number; the downloadable résumé still contains the phone number supplied in your original file.

## Editing content

Most content is separate from the interface:

| What to change | File |
| --- | --- |
| Name, introduction, about text, email, education, languages, résumé path | `data/profile.ts` |
| Projects, metadata, case studies, media, tools, tags | `data/projects.ts` |
| Companies, roles, dates, responsibilities | `data/experience.ts` |
| Skill groups and game jams | `data/skills.ts` |
| Navigation labels and destinations | `data/navigation.ts` |
| Colors, glass surfaces, responsive rules, typography | `app/globals.css`, `app/glass.css` |
| Site title and social descriptions | `app/layout.tsx` |
| Interactive hero copy | `components/hero.tsx`, `components/design-field.tsx` |

Edit text inside quotation marks, save, and check the preview. Keep punctuation around the code intact. An apostrophe inside single quotes needs to be escaped, or use double quotes around that string.

### Add a real project

1. Duplicate one record in `data/projects.ts`, or replace a template.
2. Give it a unique, lowercase hyphenated `slug`, such as `your-project-name`.
3. Set `discipline` to `game` or `ux`. Use `category` and `tags` for specialties such as systems, narrative, level design, interaction, or product design.
4. Replace `title`, `description`, `role`, `year`, `duration`, `team`, and `tools` with verified information.
5. Add local `thumbnail` and `heroImage` paths and a useful `imageAlt` description.
6. Replace prompts in `overview`, `problem`, `goals`, `process`, `gallery`, `outcome`, and `learnings`.
7. Set `placeholder: false` only once it contains real, accurate content. This removes the template notice and allows it into the sitemap.
8. Run `npm run typecheck` and `npm run build`. New project routes are generated automatically.

Remove sections that do not help tell that project’s story. Optional sections are omitted when their data is absent. Every section `id` must be unique within the project, lowercase, and hyphenated; avoid the reserved `overview`, `problem`, `goals`, `gallery`, `outcome`, and `reflection` IDs inside `process`.

Each process section supports a heading, paragraph, optional bullet list, a visual step sequence, a media gallery, and an optional downloadable document. A game case study can use these for mechanics, progression, balancing, a gameplay loop, narrative, level design, playtesting, or GDD excerpts. A UI/UX case study can use the same system for research, user journeys, architecture, wireframes, design systems, prototypes, testing, and iterations.

Example section:

```ts
{
  id: 'iteration',
  title: 'What changed after testing',
  body: 'Write the actual observation, decision, and tradeoff here.',
  bullets: ['One verified finding', 'The change it informed'],
  flow: ['Intent', 'Action', 'Feedback'],
  media: [{
    type: 'image',
    src: '/images/my-project/iteration.webp',
    alt: 'Describe the meaningful visual information.',
    caption: 'Explain the design decision illustrated here.'
  }],
  document: { label: 'Download the design excerpt', href: '/documents/design-excerpt.pdf' }
}
```

For videos, use `type: 'video'`, a local `.mp4` or `.webm` `src`, an optional `poster`, and a local `.vtt` `captions` file when there is speech or meaningful audio. Videos have controls, do not autoplay, and load on demand. GIFs are supported as ordinary images, but prefer short, controllable videos; avoid flashing imagery. `prototype` accepts a descriptive label and a real external URL. Remove it if no prototype is available.

The built-in `flow` is a simple ordered diagram. For branching systems, annotated level maps, detailed journeys, or complex economies, export an accessible diagram image and include an explanatory caption and text alongside it.

### Images and other assets

Place assets inside `public/`:

```text
public/
  favicon.svg
  images/your-project/...
  videos/...
  documents/...
  resume/Aditya_Nair_Resume.pdf
```

Reference them without `public`, for example `/images/your-project/hero.webp`. Use lowercase filenames without spaces. Export photos/screenshots as WebP or AVIF when possible; use SVG for diagrams. Around 1600px wide is usually enough for a project hero. Use a consistent aspect ratio for project media (around 1200 × 1000 for the supplied work features); the layout reserves image space to minimize movement. Write meaningful alt text. Assets are local and never depend on the old portfolios.

The two supplied SVG images are explicitly labeled image-slot placeholders, not artwork from a real game or product. Replace both each project’s thumbnail and hero image.

### Replace the résumé

Replace `public/resume/Aditya_Nair_Resume.pdf` with your updated PDF using the same filename. Review the PDF for old links and private information before publishing. Every résumé action uses this single file. If you change its name, update `data/profile.ts`.

### Contact

Update the email in `data/profile.ts`. Both the visible address, mail link, and copy action update together. The mail link opens the visitor’s configured email app; it does not send mail automatically. There is no pretend contact form or external mail service. Copy failure is handled with an on-screen fallback.

## Deployment: portable static output

The site uses Next.js **static export**, with no backend, database, API key, paid service, or hosting-specific runtime. The source remains a normal Next.js project. See [Next.js static export documentation](https://nextjs.org/docs/app/guides/static-exports).

### Before publishing on your own domain

Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_SITE_URL` to your actual public origin (for example your own `https://...` domain, without a trailing slash), and rebuild. Do not set it to a domain you do not own.

This enables absolute canonical links and sitemap entries. With no domain configured, those URLs are omitted and the sitemap is intentionally empty; local preview URLs are not advertised to search engines. The preview supplied with this delivery may have its own deployment origin set at build time.

Titles, descriptions, Open Graph text metadata, X summary cards, favicon, semantic headings, alt text, robots configuration, and per-project metadata are included. Template case studies use `noindex, follow` and are excluded from the sitemap. Real projects are included once `placeholder` is false. To add a large social image later, place a 1200 × 630 image in `public/`, then set `openGraph.images` and `twitter.images` in `app/layout.tsx` using its absolute public URL and change the Twitter card to `summary_large_image`. Do not imply placeholder imagery is a shipped product.

### Vercel

Upload the source to your own Git repository, import it into Vercel, and select Next.js. Use `npm run build` and static output directory `out`. Set your public origin environment variable before building. No server functions are needed.

### Netlify

Import the source repository, use build command `npm run build`, and publish directory `out`. `netlify.toml` contains those settings. Do not add an SPA catch-all redirect: each case study has its own exported HTML route.

### Cloudflare Pages

Use a static site deployment: build command `npm run build`, output directory `out`, Node.js 22 or newer. You can also directly upload the contents of `out`. No Workers adapter is required for this static export.

### GitHub Pages

For a user/organization site at the domain root, leave `NEXT_PUBLIC_BASE_PATH` empty. For a project site at `https://your-account.github.io/portfolio/`, set `NEXT_PUBLIC_SITE_URL=https://your-account.github.io` and `NEXT_PUBLIC_BASE_PATH=/portfolio` before building. The supplied GitHub Actions workflow derives both values automatically for a repository Pages deployment. Enable **Settings → Pages → Source: GitHub Actions**, then run the workflow. The workflow deploys the exported `out` directory and includes a `.nojekyll` file.

If you later use a custom domain, update the workflow environment variables to match the domain and its base path. `basePath` is a build-time setting, so rebuild when changing it.

### Other static or Node hosting

Serve the contents of `out` from an HTTP server that resolves directory URLs to their `index.html`. Configure `/404.html` as the not-found page. Upload hidden files such as `.nojekyll` when relevant. You do not need Node.js on the production host; Node is required only to install and build. The exported folder is also suitable for a Node static-file server.

The portable handoff excludes platform-specific hosting metadata. All deployment options above work directly from this source.

## Design and accessibility

The “design field” connects player feedback loops and user task flows. Switching the discipline changes the diagram language, accent, and visible projects without forcing a choice before entering the portfolio. All information is available through visible text and standard controls; nothing essential depends on hovering.

The glass edition uses frosted blue and silver, deep ink text, translucent surfaces, white edge highlights, and restrained shadows. A floating glass navigation bar highlights the current section and keeps the résumé action visible. The sculptural, cursor-responsive hero expresses the connection between disciplines. The deep-blue experience section creates a clear change of pace. Selected work uses full-width editorial features on desktop and a single reading order on mobile. The system respects reduced motion, keeps the native cursor, provides visible keyboard focus and a skip link, and never hijacks scrolling. Transitions are brief; there is no continuously running decorative animation or WebGL dependency.

Shared layout rules live in `app/globals.css`; the glass edition’s tokens, surfaces, responsive navigation, and transparency fallbacks live in `app/glass.css`. Tailwind is configured and available for additions; the art-directed components use named CSS classes to keep responsive rules and interaction states easy to inspect. Motion is limited to small client components; case-study text is statically rendered.

## Quality checks

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

Tests run against the production export and automatically start the preview server if necessary. They cover core navigation, filters, the interaction loop, career expansion, keyboard entry, mobile menu behavior, PDF download, clipboard success/failure, direct case-study routes, metadata, local links, image loading, missing pages, reduced motion, and overflow at six screen widths. Axe checks automated WCAG A/AA rules on the home page, mobile menu, and both case studies.

See `QA-REPORT.md` for the actual delivery results and limitations. Automated accessibility checks do not replace testing with real users and assistive technologies.

## Ownership and dependencies

You receive the full editable source, local assets, lockfile, configuration, tests, README, and prebuilt output. There are no platform SDKs in the application and no paid services. The original website code and diagram placeholders are provided for your use, modification, and independent hosting. Third-party libraries and fonts retain their respective licenses; Fontsource fonts use the SIL Open Font License. See `THIRD-PARTY-NOTICES.md`.

## Original portfolio artwork

`public/images/intersection.webp` is original AI-generated brand artwork made with the built-in image-generation tool, then optimized to approximately 64 KB. It is an abstract identity image, not a claim of professional project work. The original PNG and exact generation brief are included in `assets/`. The image stays local and requires no image service at runtime.

### Navigation and motion

The header links to Game Design, UI/UX, Writing, About, and Contact. The mobile menu supports Escape, focus restoration, and outside dismissal. The intro animation, pointer-driven artwork, scroll-progress tracking, and reveal motion have been removed. Surfaces are opaque and project imagery is optimized before deployment. Link prefetching is disabled to avoid background requests on the static export.

## October showcase update

Featured selections are defined in `components/work.tsx`. The project collections share `components/project-collection.tsx`; original game articles are stored as sanitized markup in `data/articles.ts`. NovelNest and St. Andrew’s are integrated into the main project pages, including their screen designs, wireframes, and design notes. Original standalone showcases remain preserved under `public/library/` but are not used for the primary reading flow. The gacha source referenced illustrations that were not supplied; the reading page preserves the article text without broken images.

Project cards use pre-generated WebP images and smaller 640px alternatives, lazy loading, and asynchronous decoding. No image transformations occur in visitors’ browsers or on a runtime server. Preserve source artwork when regenerating these variants. New cards use opaque backgrounds without backdrop blur or animation.

## October refinement

Project pages lead with contribution, deliverables, and project type. Image galleries support a native modal viewer with Escape, close button, and focus restoration. NovelNest contains 15 supplied screens plus its visual-system panel; the original source incorrectly advertised 16 screens. See `CONTENT-REVIEW.md` for factual-review limits.

### Editorial case-study structure

The main visual appears below the project introduction. Contribution, deliverables, and metadata follow it. Selected design decisions precede NovelNest’s complete screen galleries. Inner pages share components/site-footer.tsx; the homepage retains its full contact section. Date and duration are separate optional project fields. Configure NEXT_PUBLIC_SITE_URL with the final domain to enable absolute project social-image URLs.

Gallery navigation stays within each project section. Use Previous/Next or the left/right arrow keys; Escape closes the viewer. Homepage and collection sharing previews use public/images/social. Configure NEXT_PUBLIC_SITE_URL with the final domain and rebuild before publishing.

## Performance maintenance

Full project data belongs in server components. Pass only required fields into browser components. Run node scripts/optimize-images.mjs after adding project images, then rebuild. It preserves original imagery and regenerates smaller gallery previews and actual dimensions. With the production preview running on port 3002, npm run perf:check measures three pages and enforces the documented byte budgets. See PERFORMANCE-REPORT.md for before/after results. Hosting compression must be verified after deployment.
