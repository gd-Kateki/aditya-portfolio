'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/navigation';
import { profile } from '@/data/profile';

import { asset } from '@/lib/paths';
export function Header({ projectRoutes }: { projectRoutes: Record<string, string> }) {
 const pathname=usePathname(); const [open,setOpen]=useState(false); const header=useRef<HTMLElement>(null);
 const activePath=projectRoutes[pathname.replace(/\/$/,'')] || pathname;
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{if(!open)return;const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus();}};const outside=(event:PointerEvent)=>{if(header.current&&!header.current.contains(event.target as Node))setOpen(false)};const resize=()=>{if(innerWidth>900)setOpen(false)};window.addEventListener('keydown',close);window.addEventListener('pointerdown',outside);window.addEventListener('resize',resize);return()=>{window.removeEventListener('keydown',close);window.removeEventListener('pointerdown',outside);window.removeEventListener('resize',resize)}},[open]);
 return <header ref={header} className="site-header"><div className="nav-shell"><Link prefetch={false} className="brand" href="/" aria-label="Aditya Nair — Home" onClick={()=>setOpen(false)}><span className="brand-monogram" aria-hidden="true">AN</span><span className="brand-name">Aditya Nair<small>Game Design & UI/UX</small></span></Link><button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}<span className="menu-lines" aria-hidden="true"><i/><i/></span></button><nav id="main-navigation" className={open?'nav-links is-open':'nav-links'} aria-label="Main navigation">{navigation.map(item=><Link prefetch={false} key={item.href} href={item.href} aria-current={!item.href.includes('#')&&(activePath===item.href.slice(0,-1)||activePath.startsWith(item.href))?'page':undefined} onClick={()=>setOpen(false)}>{item.label}</Link>)}<a className="nav-resume" href={asset(profile.resume)} download>Résumé ↓</a></nav></div></header>;
}
