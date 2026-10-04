import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import './glass.css';
import './showcase.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { projects } from '@/data/projects';
import { SiteFooter } from '@/components/site-footer';
import { asset, siteOrigin } from '@/lib/paths';
const title = 'Aditya Nair — Game Designer & UI/UX Designer';
const description = 'Game systems, narrative, and thoughtfully designed interfaces. Explore Aditya Nair’s experience across game design and UI/UX, from concepts to tested interactions.';
export const metadata: Metadata = {
  title: { default: title, template: '%s — Aditya Nair' }, description,
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin), alternates: { canonical: asset('/') } } : {}),
  authors: [{ name: 'Aditya Nair' }], icons: { icon: asset('/favicon.svg') },
  openGraph: { title, description, type: 'website', locale: 'en_IN', siteName: 'Aditya Nair', ...(siteOrigin ? { url: siteOrigin + asset('/'), images: [{ url: siteOrigin + asset('/images/social/uiux.jpg'), width:1200, height:630, alt: 'Aditya Nair — Game Design & UI/UX' }] } : {}) },
  twitter: { card: 'summary_large_image', title, description, images: siteOrigin ? [siteOrigin + asset('/images/social/uiux.jpg')] : [] },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#e7eff2' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Providers><Header projectRoutes={Object.fromEntries(projects.map(p=>['/projects/'+p.slug,p.slug==='roblox-rng-case-study'?'/writing/':p.discipline==='game'?'/game-design/':'/uiux/']))} />{children}<SiteFooter /></Providers></body></html>;
}
