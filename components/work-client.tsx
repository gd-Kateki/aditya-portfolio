'use client';
import Link from 'next/link';
import type { ProjectSummary } from './project-card';
import { useDiscipline } from './providers';
import { DisciplineSwitch } from './discipline-switch';
import { ProjectCard } from './project-card';
export function WorkClient({ projects }: { projects: ProjectSummary[] }) {
const { discipline } = useDiscipline();
const groups = [
{ id:'game', title:'Game Design', detail:'Game mechanics, level design, and narrative.', href:'/game-design/', picks:['curse-of-osiris','742-blackwood-lane'] },
{ id:'ux', title:'UI/UX Design', detail:'Mobile interfaces, dashboards, and website design.', href:'/uiux/', picks:['novelnest','ecommerce-seller-dashboard'] }];
return <section id="work" className="work-section section-shell section-space"><div className="section-heading"><div><p className="eyebrow accent-text">01 / Selected work</p><h2>Selected projects</h2></div><div className="section-intro"><p>A selection of my game and interface design projects.</p><DisciplineSwitch label="Filter selected work" /></div></div><p className="sr-only" aria-live="polite">{discipline === 'all' ? '4 featured projects across both disciplines' : '2 featured projects shown'}</p>{groups.filter(g=>discipline==='all'||discipline===g.id).map(g=><div key={g.id} className={`work-discipline work-${g.id}`}><div className="collection-heading"><div><p className="eyebrow">{g.id==='game'?'Game projects':'Interface projects'}</p><h3>{g.title}</h3><p>{g.detail}</p></div><Link prefetch={false} className="collection-link" href={g.href}>All {g.title} projects ↗</Link></div><div className="portfolio-grid">{g.picks.map(slug=><ProjectCard key={slug} project={projects.find(p=>p.slug===slug)!}/>)}</div></div>)}<aside className="writing-callout"><div><p className="eyebrow">Writing</p><h3>Articles & case studies</h3><p>Game design analysis and UI/UX project breakdowns.</p></div><Link prefetch={false} className="button primary" href="/writing/">Blogs & case studies ↗</Link></aside></section>;
}