# Performance pass — 4 October 2026

Measured against the same uncompressed local static server at a 390 × 844 viewport, 1.6 Mbps download, 150 ms latency, and 4× CPU slowdown. Timing values are individual simulated runs, not field averages or guaranteed improvements. Byte counts are encoded response body sizes.

| Page | JavaScript before → after | HTML before → after | LCP before → after | Viewer dialogs before → after |
|---|---|---|---|---|
| / | 498.8 → 460.3 KiB | 35.0 → 36.9 KiB | 2.58 → 2.42 s | 0 → 0 |
| /projects/novelnest/ | 490.7 → 452.4 KiB | 57.3 → 41.3 KiB | 2.31 → 2.16 s | 19 → 6 |
| /projects/ecommerce-seller-dashboard/ | 490.7 → 452.4 KiB | 46.5 → 34.3 KiB | 2.25 → 2.08 s | 15 → 2 |

All 36 browser tests, TypeScript, and the production build passed. Tests verify gallery keyboard navigation, focus restoration, accessibility, and deferred full-size requests. CLS was zero on the three measured pages after changes.

Full case-study records remain server-side; the header receives a small route map and the featured-work filter receives only four summaries. Each gallery owns one viewer. Smaller WebP previews use measured dimensions, and originals load only when opened. Unused animation components and intro CSS were removed.

The regression budget is 480,000 JavaScript bytes, 60,000 HTML bytes, and CLS ≤ 0.05 per measured page. It is set just above measured sizes to detect future growth; it is not a universal performance standard. Run npm run preview and npm run perf:check, or set PERF_URL to another running preview. Timings remain informational because of machine/network variability.

Netlify configuration now caches fingerprinted /_next/static assets immutably. Hosting compression and actual response headers remain unverified until deployed; the local preview continues to use uncompressed responses for comparable measurements.
