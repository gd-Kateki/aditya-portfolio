'use client';
import { useEffect, useRef, useState } from 'react';
import type { Media as MediaData } from '@/data/projects';
import { asset } from '@/lib/paths';
export function MediaGallery({items}:{items:MediaData[]}) {
 const images=items.filter(item=>item.type==='image');
 const [index,setIndex]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const opener=useRef<HTMLButtonElement|null>(null);
 const active=index===null?null:images[index];
 useEffect(()=>{if(index!==null&&!dialog.current?.open)dialog.current?.showModal();},[index]);
 function move(delta:number){setIndex(current=>current===null?null:(current+delta+images.length)%images.length);dialog.current?.scrollTo({top:0});}
 function close(){dialog.current?.close();}
 return <><div className={items.length>1?'case-gallery-grid':undefined}>{items.map(item=><figure className="case-media" key={item.src}>{item.type==='video'?<video controls preload="none" poster={item.poster?asset(item.poster):undefined} aria-label={item.alt}><source src={asset(item.src)}/>{item.captions&&<track kind="captions" src={asset(item.captions)} srcLang="en" label="English" default/>}</video>:<button type="button" className="media-expand" onClick={event=>{opener.current=event.currentTarget;setIndex(images.findIndex(image=>image.src===item.src));}} aria-label={`Enlarge: ${item.alt}`}><img src={asset(item.preview||item.src)} alt={item.alt} width={item.width||1200} height={item.height||760} loading="lazy" decoding="async"/><span>Enlarge image ↗</span></button>}{item.caption&&<figcaption>{item.caption}</figcaption>}</figure>)}</div><dialog ref={dialog} className="image-dialog" aria-label={active?.alt||'Project image viewer'} onClose={()=>{setIndex(null);opener.current?.focus();}} onKeyDown={event=>{if(images.length<2)return;if(event.key==='ArrowRight'){event.preventDefault();move(1);}if(event.key==='ArrowLeft'){event.preventDefault();move(-1);}}} onClick={event=>{if(event.target===event.currentTarget)close();}}>{active&&<><div className="image-dialog-toolbar"><p aria-live="polite">{active.alt}{images.length>1&&<span className="gallery-counter">{index!+1} / {images.length}</span>}</p><button type="button" autoFocus onClick={close}>Close ×</button></div>{images.length>1&&<nav className="gallery-controls" aria-label="Image gallery"><button type="button" onClick={()=>move(-1)}>← Previous image</button><button type="button" onClick={()=>move(1)}>Next image →</button></nav>}<img src={asset(active.src)} alt={active.alt} width={active.width} height={active.height} decoding="async"/><a className="text-link" href={asset(active.src)} target="_blank" rel="noopener noreferrer">Open full-size image (new tab) ↗</a>{active.caption&&<p>{active.caption}</p>}</>}</dialog></>;
}
