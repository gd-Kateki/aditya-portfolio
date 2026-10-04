import type { Metadata } from 'next';
import { asset, siteOrigin } from './paths';
export function collectionMetadata(title:string,description:string,path:string,image:string):Metadata {
 const images=siteOrigin?[{url:siteOrigin+asset(image),width:1200,height:630,alt:title}]:[];
 return {title,description,alternates:{canonical:siteOrigin?siteOrigin+asset(path):null},openGraph:{title:title+' — Aditya Nair',description,type:'website',url:siteOrigin?siteOrigin+asset(path):undefined,images},twitter:{card:'summary_large_image',title,description,images}};
}
