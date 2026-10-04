import { projects } from '@/data/projects';
import { WorkClient } from './work-client';
const featured=new Set(['curse-of-osiris','742-blackwood-lane','novelnest','ecommerce-seller-dashboard']);
export function Work(){return <WorkClient projects={projects.filter(p=>featured.has(p.slug)).map(({title,slug,discipline,status,description,year,date,role,thumbnail,heroImage,imageAlt,thumbnailWidth,heroWidth})=>({title,slug,discipline,status,description,year,date,role,thumbnail,heroImage,imageAlt,thumbnailWidth,heroWidth}))}/>;}
