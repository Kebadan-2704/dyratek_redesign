import { chromium } from 'playwright';

async function test() {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:3000/services/app-development', { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(600);
  const btn = await p.$('button:has-text("Simulate APK Build")');
  if (btn) {
    await btn.click({ force: true });
    await p.waitForTimeout(500);
    const box1 = await p.$('.rounded-3xl.bg-white.border');
    if (box1) await box1.screenshot({ path: 'screenshots/graphics/apk-build-in-progress.png' });
    await p.waitForTimeout(1100);
    const box2 = await p.$('.rounded-3xl.bg-white.border');
    if (box2) await box2.screenshot({ path: 'screenshots/graphics/apk-build-complete.png' });
    console.log('APK_INTERACTION_CLICK_SUCCESS');
  }
  await b.close();
}

test().catch(console.error);

