import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, type CaseSection } from '@/data/projects';
import { asset, siteOrigin } from '@/lib/paths';
import { MediaGallery } from '@/components/media-gallery';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) return { title: 'Project not found' };
  const title = project.placeholder ? `${project.category} — Case-study template` : project.title;
  return { title, description: project.description, robots: project.placeholder ? { index: false, follow: true } : undefined,
    alternates: { canonical: siteOrigin ? siteOrigin + asset(`/projects/${slug}/`) : null },
    openGraph: { title: `${title} — Aditya Nair`, description: project.description, url: siteOrigin ? siteOrigin + asset(`/projects/${slug}/`) : undefined, images: siteOrigin ? [{ url: siteOrigin + asset(project.heroImage), alt: project.imageAlt }] : [] },
    twitter: { card: 'summary_large_image', title, description: project.description, images: [] },
  };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const sections: CaseSection[] = [
    { id: 'overview', title: 'Overview', body: project.overview },
    ...(project.problem ? [{ id: 'problem', title: 'Design constraint', body: project.problem }] : []),
    ...(project.goals?.length ? [{ id: 'goals', title: 'Design goals', body: '', bullets: project.goals }] : []),
    ...(project.process || []),
    ...(project.gallery?.length ? [{ id: 'gallery', title: 'Project images', body: '', media: project.gallery }] : []),
    ...(project.outcome ? [{ id: 'outcome', title: 'Project outcome', body: project.outcome }] : []),
    ...(project.learnings ? [{ id: 'reflection', title: 'Reflection', body: project.learnings }] : []),
  ];
  const related = projects.filter(p => p.discipline === project.discipline && p.slug !== 'roblox-rng-case-study');
  const next = related[(related.findIndex(p => p.slug === project.slug) + 1) % related.length];
  return <main id="main-content" className={`case-page case-${project.discipline}`}>
    <div className="section-shell case-header"><Link prefetch={false} className="text-link" href={project.slug === 'roblox-rng-case-study' ? '/writing/' : project.discipline === 'game' ? '/game-design/' : '/uiux/'}>← {project.slug === 'roblox-rng-case-study' ? 'Blogs & case studies' : project.discipline === 'game' ? 'All Game Design projects' : 'All UI/UX projects'}</Link>{project.slug === 'roblox-rng-case-study' && <p><Link prefetch={false} className="text-link" href="/writing/roblox-rng/">Read the complete original article →</Link></p>}<p className="eyebrow accent-text">{project.category} / {project.placeholder ? 'Case-study template' : project.year}</p><h1>{project.title}</h1><p className="case-description">{project.description}</p><p className="project-status">{project.status}</p><img className="case-hero-image" src={asset(project.heroImage)} alt={project.imageAlt} width="1200" height="760" fetchPriority="high" decoding="async" /><div className="case-summary"><div><h2>My contribution</h2><p>{project.contribution}</p></div><div><h2>Deliverables</h2><p>{project.deliverables}</p></div></div>
    {project.placeholder && <div className="template-notice"><strong>Template, not a completed project.</strong><p>The labels, diagrams, and prompts on this page are placeholders. They do not represent professional work, research findings, or outcomes.</p></div>}
    <dl className="case-overview">{[['Role', project.role], ['Year', project.year], [project.date ? 'Date' : 'Duration', project.date || project.duration || '—'], ['Project type', project.status], ['Tools', project.tools.join(' · ')]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    
    </div>
    <div className="section-shell case-layout"><aside className="case-aside"><nav aria-label="Case study sections"><p className="eyebrow">Inside the {project.placeholder ? 'template' : 'project'}</p>{sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}</nav></aside><div className="case-content">
      {sections.map((section, index) => <section id={section.id} key={section.id} className="case-section"><p className="eyebrow accent-text">{String(index + 1).padStart(2, '0')} / {project.placeholder ? 'Content guide' : project.category}</p><h2>{section.title}</h2>{section.body && <p>{section.body}</p>}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}{section.flow && <div className="case-flow" role="list" aria-label={section.title}>{section.flow.map((step, i) => <div role="listitem" key={step}><span>0{i + 1}</span><p>{step}</p></div>)}</div>}{section.media && <MediaGallery items={section.media} />}{section.document && <a className="text-link" href={asset(section.document.href)} download>{section.document.label}</a>}</section>)}
      {project.prototype && <a className="button primary" href={project.prototype.href.startsWith('/') ? asset(project.prototype.href) : project.prototype.href} target="_blank" rel="noopener noreferrer">{project.prototype.label} (opens in a new tab)</a>}
    </div></div>
    <div className="case-next"><div className="section-shell"><p className="eyebrow">Next project</p><h2>{next.placeholder ? `${next.category} template` : next.title}</h2><Link prefetch={false} className="button primary" href={`/projects/${next.slug}/`}>{next.placeholder ? 'Explore template' : 'View case study'}</Link><Link prefetch={false} className="text-link" href="/#contact">Contact me</Link></div></div>
  </main>;
}
