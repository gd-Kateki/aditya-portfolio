import fs from 'node:fs/promises';
import sharp from 'sharp';
import ts from 'typescript';
// Run after adding local project imagery. Keep original files unchanged.
const file='data/projects.ts';
const source=await fs.readFile(file,'utf8');
const module={exports:{}};
new Function('exports','module',ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(module.exports,module);
const projects=module.exports.projects;
const cache=new Map();
for(const project of projects){
 project.thumbnailWidth=(await sharp('public'+project.thumbnail).metadata()).width;
 project.heroWidth=(await sharp('public'+project.heroImage).metadata()).width;
 for(const media of [...(project.gallery||[]),...(project.process||[]).flatMap(section=>section.media||[])]){
  if(media.type!=='image')continue;
  if(!cache.has(media.src)){
   const metadata=await sharp('public'+media.src).metadata();
   const preview=media.src.replace(/\.[^.]+$/,'-preview.webp');
   await sharp('public'+media.src).resize({width:600,height:900,fit:'inside',withoutEnlargement:true}).webp({quality:78}).toFile('public'+preview);
   cache.set(media.src,{preview,width:metadata.width,height:metadata.height});
  }
  Object.assign(media,cache.get(media.src));
 }
}
await fs.writeFile(file,source.slice(0,source.indexOf('export const projects'))+'export const projects: Project[] = '+JSON.stringify(projects,null,2)+';\n');
console.log('Updated '+cache.size+' gallery previews and image dimensions.');
