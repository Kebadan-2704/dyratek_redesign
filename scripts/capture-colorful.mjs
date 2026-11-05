import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = 'screenshots/colorful';
fs.mkdirSync(OUT_DIR, { recursive: true });

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Capturing Home Hero...');
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '01-home-hero-colorful.png') });

  console.log('Capturing Taxonomy Pillars...');
  const servicesSec = await page.$('#services');
  if (servicesSec) {
    await servicesSec.screenshot({ path: path.join(OUT_DIR, '02-taxonomy-pillars-colorful.png') });
  }

  console.log('Capturing Prototypes Section...');
  const workSec = await page.$('#work');
  if (workSec) {
    await workSec.screenshot({ path: path.join(OUT_DIR, '03-prototypes-colorful.png') });
  }

  console.log('Capturing APK Mobile Service...');
  await page.goto('http://localhost:3000/services/app-development', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  const apkHero = await page.$('.rounded-3xl.bg-white.border');
  if (apkHero) {
    await apkHero.screenshot({ path: path.join(OUT_DIR, '04-apk-mobile-app-colorful.png') });
  }

  console.log('Capturing UI/UX Service...');
  await page.goto('http://localhost:3000/services/ui-ux-design', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  const uiuxHero = await page.$('.rounded-3xl.bg-white.border');
  if (uiuxHero) {
    await uiuxHero.screenshot({ path: path.join(OUT_DIR, '05-ui-ux-design-colorful.png') });
  }

  console.log('Capturing Creative Video Service...');
  await page.goto('http://localhost:3000/services/creative-video', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  const videoHero = await page.$('.rounded-3xl.bg-white.border');
  if (videoHero) {
    await videoHero.screenshot({ path: path.join(OUT_DIR, '06-creative-video-colorful.png') });
  }

  // Mobile 375px view of Hero
  console.log('Capturing Mobile Hero...');
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '07-mobile-hero-colorful.png') });

  await browser.close();
  console.log('ALL_COLORFUL_SCREENSHOTS_CAPTURED');
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});

