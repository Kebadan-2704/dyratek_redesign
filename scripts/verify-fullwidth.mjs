import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = 'screenshots/fullwidth';
fs.mkdirSync(OUT_DIR, { recursive: true });

async function verify() {
  const browser = await chromium.launch({ headless: true });

  // 1. 1440x900 Desktop
  console.log('Capturing 1440px desktop...');
  const page1440 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page1440.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page1440.waitForTimeout(1000);
  await page1440.screenshot({ path: path.join(OUT_DIR, 'hero-1440-fullwidth.png') });
  await page1440.close();

  // 2. 1600x900 Desktop
  console.log('Capturing 1600px desktop...');
  const page1600 = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page1600.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page1600.waitForTimeout(1000);
  await page1600.screenshot({ path: path.join(OUT_DIR, 'hero-1600-fullwidth.png') });
  await page1600.close();

  // 3. 1920x1080 Ultrawide / 1080p
  console.log('Capturing 1920px desktop...');
  const page1920 = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page1920.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page1920.waitForTimeout(1000);
  await page1920.screenshot({ path: path.join(OUT_DIR, 'hero-1920-fullwidth.png') });
  await page1920.close();

  await browser.close();
  console.log('FULLWIDTH_SCREENSHOTS_CAPTURED');
}

verify().catch((err) => {
  console.error(err);
  process.exit(1);
});

