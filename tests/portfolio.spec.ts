import { test, expect } from '@playwright/test';
import { projects } from '../data/projects';
import AxeBuilder from '@axe-core/playwright';

test('home, navigation, factual content, and error-free loading', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  const failed: string[] = [];
  page.on('requestfailed', req => { if (req.failure()?.errorText !== 'net::ERR_ABORTED') failed.push(req.url()); });
  await page.goto('/');
  await expect(page).toHaveTitle('Aditya Nair — Game Designer & UI/UX Designer');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/ADITYA\s*NAIR/);
  await expect(page.getByText('GAME DESIGNER', { exact: false }).first()).toBeVisible();
  for (const label of ['About', 'Contact']) {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${label.toLowerCase()}$`));
  }
  for (const name of ['Quitebox Tech Labs Private Limited', 'Quiet Collective Studios', 'Games2Win', 'Dkush Innovatech', 'The Subculture Studio', 'Fanclash11 Fantasy Pvt Ltd']) await expect(page.getByRole('button', { name: new RegExp(name) })).toBeVisible();
  expect(errors).toEqual([]); expect(failed).toEqual([]);
});

test('selected work filter and featured projects', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.portfolio-card')).toHaveCount(4);
  await page.getByRole('group', { name: 'Filter selected work' }).getByRole('button', { name: 'UI/UX', exact: true }).click();
  await expect(page.locator('.portfolio-card')).toHaveCount(2);
  await expect(page.locator('.portfolio-ux')).toHaveCount(2);
  await expect(page.getByRole('group', { name: 'Filter selected work' }).getByRole('button', { name: 'UI/UX', exact: true })).toHaveAttribute('aria-pressed', 'true');

  await page.getByRole('group', { name: 'Filter selected work' }).getByRole('button', { name: 'Game design', exact: true }).click();
  await expect(page.locator('.portfolio-game')).toHaveCount(2);
  await page.getByRole('group', { name: 'Filter selected work' }).getByRole('button', { name: 'All work', exact: true }).click();
  await expect(page.locator('.portfolio-card')).toHaveCount(4);
});

test('career accordion can be operated with the keyboard', async ({ page }) => {
  await page.goto('/#experience');
  const trigger = page.getByRole('button', { name: /Dkush Innovatech/ });
  await trigger.focus(); await page.keyboard.press('Enter');
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#career-dkush')).toBeVisible();
  await expect(page.locator('#career-quitebox')).toBeHidden();
  await page.keyboard.press('Space');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('mobile navigation opens, closes, and restores focus with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 }); await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.click();
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused(); await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click(); await page.getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/#about$/); await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('resume is a downloadable PDF and contact actions work', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download résumé', exact: true }).first().click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('Aditya_Nair_Resume.pdf');
  const pdf = await page.request.get('/resume/Aditya_Nair_Resume.pdf');
  expect(pdf.ok()).toBeTruthy(); expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-');
  await expect(page.getByRole('link', { name: 'Send email', exact: true })).toHaveAttribute('href', 'mailto:aditya.gamedesigner0402@gmail.com');
  await page.getByRole('button', { name: 'Copy email' }).click();
  await expect(page.getByRole('status')).toHaveText('Email address copied.');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('aditya.gamedesigner0402@gmail.com');
});

test('clipboard failure offers an honest fallback', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => { Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new Error('denied')) }, configurable: true }); });
  await page.getByRole('button', { name: 'Copy email' }).click();
  await expect(page.getByRole('status')).toContainText('Copy unavailable');
});

for (const slug of projects.map(p => p.slug)) {
  test(`${slug}: direct route, metadata, sections, images, and accessibility`, async ({ page }) => {
    await page.goto(`/projects/${slug}/`);
    await expect(page.locator('.case-header h1')).toHaveText(projects.find(p => p.slug === slug)!.title);
    await expect(page.locator('.template-notice')).toHaveCount(0);
    for (const anchor of await page.locator('.case-aside a').all()) { const id = await anchor.getAttribute('href'); await expect(page.locator(`[id="${id!.slice(1)}"]`)).toBeAttached(); }
    for (const img of await page.locator('img:visible').all()) { await img.scrollIntoViewIfNeeded(); await expect(img).toHaveJSProperty('complete', true); }
    const broken = await page.locator('img:visible').evaluateAll(imgs => imgs.filter(i => (i as HTMLImageElement).naturalWidth === 0).map(i => (i as HTMLImageElement).src));
    expect(broken).toEqual([]);
    const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(a11y.violations).toEqual([]);
    await page.locator('.case-next').getByRole('link', { name: 'View case study', exact: true }).click();
    await expect(page.locator('.case-header h1')).toBeVisible();
  });
}

for (const width of [320, 375, 768, 1024, 1440, 1920]) {
  test(`responsive layout ${width}px, all routes without horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const url of ['/', '/game-design/', '/uiux/', '/writing/', '/writing/gacha-games/', ...projects.map(p => `/projects/${p.slug}/`)]) {
      await page.goto(url); await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
    }
  });
}

test('home accessibility, keyboard entry, and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' }); await page.goto('/');
  await page.keyboard.press('Tab'); await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter'); await expect(page).toHaveURL(/#main-content$/);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  expect(await page.getByRole('button', { name: 'All work', exact: true }).first().evaluate(el => parseFloat(getComputedStyle(el).transitionDuration))).toBeLessThan(.01);
  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(a11y.violations).toEqual([]);
});

test('mobile menu and expanded experience accessibility', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 }); await page.goto('/');
  await page.getByRole('button', { name: 'Menu' }).click();
  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(a11y.violations).toEqual([]);
});

test('all local links and images resolve, old portfolios are absent', async ({ page }) => {
  for (const url of ['/', '/game-design/', '/uiux/', '/writing/', '/writing/gacha-games/', ...projects.map(p => `/projects/${p.slug}/`)]) {
    await page.goto(url);
    const links = await page.locator('a[href]').evaluateAll(els => els.map(el => el.getAttribute('href')!).filter(href => href.startsWith('/') && !href.includes('#')));
    for (const href of new Set(links)) expect((await page.request.get(href)).ok(), href).toBeTruthy();
    const images = await page.locator('img').evaluateAll(els => els.map(el => el.getAttribute('src')!));
    for (const src of images) expect((await page.request.get(src)).ok(), src).toBeTruthy();
    expect(await page.content()).not.toMatch(/gd-kateki|uiux_website|Personal-Website/);
  }
  const response = await page.goto('/missing-page/'); expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'This path ends here.' })).toBeVisible();
});

test('navigation links to collections and dismisses its mobile menu outside',async({page})=>{
 await page.goto('/');const nav=page.getByRole('navigation',{name:'Main navigation'});
 for(const [label,path] of [['Game Design','/game-design/'],['UI/UX','/uiux/'],['Writing','/writing/']]){await nav.getByRole('link',{name:label,exact:true}).click();await expect(page).toHaveURL(new RegExp(path+'$'));await expect(nav.getByRole('link',{name:label,exact:true})).toHaveAttribute('aria-current','page');}
 await page.setViewportSize({width:375,height:812});await page.getByRole('button',{name:'Menu'}).click();await expect(nav).toBeVisible();await page.mouse.click(5,650);await expect(nav).toBeHidden();
});
test('home opens directly without an intro or animated design widget',async({page})=>{await page.goto('/?intro=1');await expect(page.locator('.portfolio-intro')).toHaveCount(0);await expect(page.locator('.field')).toHaveCount(0);await expect(page.getByRole('heading',{level:1})).toBeVisible();});
test('case study images enlarge with keyboard focus and Escape',async({page})=>{
 await page.goto('/projects/novelnest/');const trigger=page.getByRole('button',{name:/Enlarge:/}).first();await trigger.focus();await page.keyboard.press('Enter');const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();await expect(dialog.getByRole('button',{name:'Close ×'})).toBeFocused();const a11y=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(a11y.violations).toEqual([]);await page.keyboard.press('Escape');await expect(dialog).toBeHidden();await expect(trigger).toBeFocused();await trigger.click();await dialog.getByRole('button',{name:'Close ×'}).click();await expect(dialog).toBeHidden();
});
test('migrated case studies keep content inside the portfolio',async({page})=>{
 await page.goto('/projects/novelnest/');await expect(page.locator('a[href*="/library/"]')).toHaveCount(0);await expect(page.locator('#reader-flow .media-expand')).toHaveCount(8);await expect(page.locator('#author-flow .media-expand')).toHaveCount(7);
 await page.goto('/projects/st-andrews-college/');await expect(page.locator('#wireframes .media-expand')).toHaveCount(6);await expect(page.locator('#homepage img').first()).toBeAttached();await expect(page.locator('#outcome')).toContainText('redesign proposal');
});

 test('collections separate projects from writing and preserve the imported work', async ({page})=>{
 await page.goto('/game-design/');await expect(page.locator('.portfolio-card')).toHaveCount(3);await expect(page.locator('.portfolio-ux')).toHaveCount(0);
 await page.goto('/uiux/');await expect(page.locator('.portfolio-card')).toHaveCount(5);await expect(page.getByRole('heading',{name:'NovelNest',exact:true})).toBeVisible();await expect(page.getByRole('heading',{name:'St. Andrew’s College',exact:true})).toBeVisible();
 await page.goto('/writing/');await expect(page.locator('.writing-row')).toHaveCount(7);await page.getByRole('link',{name:/Gacha Games Are Addictive/}).click();await expect(page.locator('.reading-body h2')).toHaveCount(8);
 await page.goto('/#work');await expect(page.locator('.portfolio-card')).toHaveCount(4);await expect(page.locator('.portfolio-card')).not.toContainText([/Roblox/,/Gacha/,/UX Audit/,/St. Andrew/]);
 });

for(const url of ['/game-design/','/uiux/','/writing/','/writing/roblox-rng/','/writing/gacha-games/'])test('new page accessibility '+url,async({page})=>{await page.goto(url);const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();expect(result.violations).toEqual([]);});

test('gallery browsing updates image, caption, counter and full-size link',async({page})=>{
 await page.goto('/projects/novelnest/');const trigger=page.locator('#reader-flow .media-expand').first();await trigger.click();const dialog=page.getByRole('dialog');await expect(dialog.locator('.gallery-counter')).toHaveText('1 / 8');await dialog.getByRole('button',{name:'Next image →'}).click();await expect(dialog.locator('.gallery-counter')).toHaveText('2 / 8');await expect(dialog.getByRole('link')).toHaveAttribute('href',/screen-1-2.webp$/);await page.keyboard.press('ArrowLeft');await expect(dialog.locator('.gallery-counter')).toHaveText('1 / 8');await page.keyboard.press('ArrowLeft');await expect(dialog.locator('.gallery-counter')).toHaveText('8 / 8');await expect(dialog.getByRole('img')).toHaveAttribute('src',/screen-1-8.webp$/);await page.keyboard.press('Escape');await expect(trigger).toBeFocused();await trigger.click();await expect(dialog.locator('.gallery-counter')).toHaveText('1 / 8');await expect(new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze().then(result=>result.violations)).resolves.toEqual([]);
});

test('galleries use one viewer and defer original image requests',async({page})=>{
 const requests:string[]=[];page.on('request',request=>requests.push(request.url()));await page.goto('/projects/novelnest/');await expect(page.locator('#reader-flow dialog')).toHaveCount(1);await expect(page.locator('#reader-flow dialog img')).toHaveCount(0);const trigger=page.locator('#reader-flow .media-expand').nth(1);await trigger.scrollIntoViewIfNeeded();await expect(trigger.locator('img')).toHaveAttribute('src',/screen-1-2-preview.webp$/);expect(requests.some(url=>url.endsWith('/screen-1-2.webp'))).toBeFalsy();await trigger.click();await expect(page.getByRole('dialog').getByRole('img')).toHaveAttribute('src',/screen-1-2.webp$/);await page.keyboard.press('Escape');await expect(trigger).toBeFocused();
});
