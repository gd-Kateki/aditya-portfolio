'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';
import { asset } from '@/lib/paths';
export function SiteFooter(){const pathname=usePathname();if(pathname==='/')return null;return <footer className="site-footer section-shell"><div><p>Aditya Nair</p><span>Game Design & UI/UX</span></div><nav aria-label="Footer navigation"><Link prefetch={false} href="/game-design/">Game projects</Link><Link prefetch={false} href="/uiux/">UI/UX projects</Link><Link prefetch={false} href="/writing/">Articles</Link><a href={asset(profile.resume)} download>Résumé ↓</a><a href={`mailto:${profile.email}`}>Email me ↗</a></nav></footer>;}
