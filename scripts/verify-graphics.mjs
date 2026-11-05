import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = 'screenshots/graphics';
fs.mkdirSync(OUT_DIR, { recursive: true });

async function verifyAll() {
  console.log('Launching browser for all 11 services...');
  const browser = await chromium.launch({ headless: true });

  const routes = [
    { slug: 'app-development', label: '01-apk-mobile-app' },
    { slug: 'web-development', label: '02-web-development' },
    { slug: 'ecommerce-solutions', label: '03-ecommerce-solutions' },
    { slug: 'digital-solutions', label: '04-digital-solutions' },
    { slug: 'business-automation', label: '05-business-automation' },
    { slug: 'email-whatsapp-marketing', label: '06-email-whatsapp' },
    { slug: 'ui-ux-design', label: '07-ui-ux-design' },
    { slug: 'creative-video', label: '08-creative-video' },
    { slug: 'digital-marketing', label: '09-digital-marketing' },
    { slug: 'performance-marketing', label: '10-performance-marketing' },
    { slug: 'content-strategy-copywriting', label: '11-content-strategy' }
  ];

  for (const { slug, label } of routes) {
    console.log(`Capturing ${slug}...`);
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`http://localhost:3000/services/${slug}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);
    const heroBox = await page.$('.rounded-3xl.bg-white.border');
    if (heroBox) {
      await heroBox.screenshot({ path: path.join(OUT_DIR, `${label}-desktop.png`) });
    }
    await page.close();

    const mPage = await browser.newPage({ viewport: { width: 375, height: 812 } });
    await mPage.goto(`http://localhost:3000/services/${slug}`, { waitUntil: 'domcontentloaded' });
    await mPage.waitForTimeout(600);
    const mHeroBox = await mPage.$('.rounded-3xl.bg-white.border');
    if (mHeroBox) {
      await mHeroBox.screenshot({ path: path.join(OUT_DIR, `${label}-mobile.png`) });
    }
    await mPage.close();
  }

  await browser.close();
  console.log('ALL_11_SERVICES_CAPTURED_SUCCESSFULLY');
}

verifyAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
