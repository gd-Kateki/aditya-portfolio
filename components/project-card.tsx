import Link from 'next/link';
import type { Project } from '@/data/projects';
import { asset } from '@/lib/paths';
export type ProjectSummary = Pick<Project, 'title' | 'slug' | 'discipline' | 'status' | 'description' | 'year' | 'date' | 'role' | 'thumbnail' | 'heroImage' | 'imageAlt' | 'thumbnailWidth' | 'heroWidth'>;
export function ProjectCard({ project }: { project: ProjectSummary }) {
return <article className={`portfolio-card portfolio-${project.discipline}`}><Link prefetch={false} href={`/projects/${project.slug}/`} className="portfolio-card-link"><div className="portfolio-cover"><img src={asset(project.thumbnail)} srcSet={`${asset(project.thumbnail)} ${project.thumbnailWidth}w, ${asset(project.heroImage)} ${project.heroWidth}w`} sizes="(max-width: 700px) 90vw, (min-width: 1440px) 650px, 45vw" alt={project.imageAlt} width="640" height="400" loading="lazy" decoding="async" /></div><div className="portfolio-card-copy"><p className="eyebrow">{project.status}</p><h3>{project.title}</h3><p>{project.description}</p><div className="portfolio-card-footer"><span>{project.date ?? project.year} · {project.role}</span><span aria-hidden="true">↗</span></div></div></Link></article>;
}