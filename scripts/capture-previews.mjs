import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const PREVIEW_FILE = path.resolve('scripts/preview-phase2.html');
const OUT_DIR = path.resolve('audit/previews');
const ARTIFACT_DIR = path.resolve('C:/Users/Keba/.gemini/antigravity/brain/622cc218-7fde-4827-8b92-7b9736e26fc5');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function capture() {
  console.log('Launching browser for revised preview captures...');
  const browser = await chromium.launch({ headless: true });

  for (const width of [1280, 390]) {
    const height = width === 1280 ? 900 : 844;
    const context = await browser.newContext({
      viewport: { width, height },
      deviceScaleFactor: 2
    });
    const page = await context.newPage();

    await page.goto(`file://${PREVIEW_FILE}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    // 1. Hero element
    const heroEl = await page.$('#hero-preview');
    if (heroEl) {
      const heroPath = path.join(OUT_DIR, `hero-${width}px.png`);
      await heroEl.screenshot({ path: heroPath });
    }

    // 2. Services Option 1 element
    const servicesEl = await page.$('#services-option1-preview');
    if (servicesEl) {
      const servPath = path.join(OUT_DIR, `services-option1-${width}px.png`);
      await servicesEl.screenshot({ path: servPath });
    }

    // 3. Card element
    const cardEl = await page.$('#card-preview');
    if (cardEl) {
      const cardPath = path.join(OUT_DIR, `card-${width}px.png`);
      await cardEl.screenshot({ path: cardPath });
    }

    // 4. Type scale element
    const typeEl = await page.$('#type-scale-preview');
    if (typeEl) {
      const typePath = path.join(OUT_DIR, `type-scale-${width}px.png`);
      await typeEl.screenshot({ path: typePath });
    }

    console.log(`Captured all elements at ${width}px`);
    await context.close();
  }

  await browser.close();

  // Copy images to artifact directory
  const files = fs.readdirSync(OUT_DIR);
  for (const file of files) {
    if (file.endsWith('.png')) {
      fs.copyFileSync(path.join(OUT_DIR, file), path.join(ARTIFACT_DIR, file));
    }
  }

  console.log('All revised preview screenshots copied to artifact directory!');
}

capture().catch(console.error);
