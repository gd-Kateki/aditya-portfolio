import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { projects } from '@/data/projects';
import { asset, siteOrigin } from '@/lib/paths';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  // No guessed public domain. Set NEXT_PUBLIC_SITE_URL to generate canonical URLs.
  if (!siteOrigin) return [];
  return [{ url: siteOrigin + asset('/'), priority: 1 }, ...['/game-design/', '/uiux/', '/writing/', ...articles.map(a => `/writing/${a.slug}/`)].map(route => ({ url: siteOrigin + asset(route), priority: .8 })), ...projects.filter(p => !p.placeholder).map(p => ({ url: siteOrigin + asset(`/projects/${p.slug}/`), priority: .8 }))];
}
