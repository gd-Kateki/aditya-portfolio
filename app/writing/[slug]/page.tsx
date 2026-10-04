import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
export const dynamicParams=false;
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=articles.find(a=>a.slug===slug);return {title:article?.title,description:article?.description};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=articles.find(a=>a.slug===slug);if(!article)notFound();return <main id="main-content" className="section-shell collection-page"><Link prefetch={false} className="text-link" href="/writing/">← Blogs & case studies</Link><header className="collection-intro"><p className="eyebrow">{article.category} / {article.date}</p><h1 style={{fontSize:'clamp(2.3rem,5vw,4.5rem)',maxWidth:1050}}>{article.title}</h1><p>By Aditya Nair</p></header><article className="reading-body" dangerouslySetInnerHTML={{__html:article.html}}/><Link prefetch={false} className="text-link" href="/writing/">Explore more writing →</Link></main>}
