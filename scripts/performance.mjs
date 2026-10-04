import fs from 'node:fs/promises';
import { chromium } from '@playwright/test';
const browser=await chromium.launch();
const results=[];
try {
 for(const route of ['/','/projects/novelnest/','/projects/ecommerce-seller-dashboard/']){
  const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
  const page=await context.newPage();const session=await context.newCDPSession(page);
  await session.send('Network.enable');await session.send('Network.setCacheDisabled',{cacheDisabled:true});
  await session.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:100000});
  await session.send('Emulation.setCPUThrottlingRate',{rate:4});
  await page.addInitScript(()=>{window.auditMetrics={lcp:0,cls:0};new PerformanceObserver(list=>{for(const entry of list.getEntries())window.auditMetrics.lcp=entry.startTime}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)window.auditMetrics.cls+=entry.value}).observe({type:'layout-shift',buffered:true});});
  await page.goto((process.env.PERF_URL||'http://127.0.0.1:3002')+route);await page.waitForTimeout(3000);
  results.push({route,...await page.evaluate(()=>{const resources=performance.getEntriesByType('resource');return {...window.auditMetrics,jsBytes:resources.filter(e=>e.initiatorType==='script').reduce((n,e)=>n+e.encodedBodySize,0),resourceBytes:resources.reduce((n,e)=>n+e.encodedBodySize,0),htmlBytes:performance.getEntriesByType('navigation')[0].encodedBodySize,dialogs:document.querySelectorAll('dialog').length}})});
  await context.close();
 }
} finally {await browser.close();}
const output=process.argv.find(a=>a.startsWith('--output='))?.slice(9);
if(output)await fs.writeFile(output,JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify(results,null,2));
if(process.argv.includes('--check'))for(const result of results){if(result.jsBytes>480000||result.htmlBytes>60000||result.cls>.05)throw new Error('Performance budget exceeded: '+result.route);}
