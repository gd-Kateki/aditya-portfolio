import type { MetadataRoute } from 'next';
import { asset, siteOrigin } from '@/lib/paths';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, ...(siteOrigin ? { sitemap: `${siteOrigin}${asset('/sitemap.xml')}` } : {}) };
}
