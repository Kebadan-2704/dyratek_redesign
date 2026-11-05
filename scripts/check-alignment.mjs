import { chromium } from 'playwright';

async function check() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const logoBox1440 = await page.locator('header a').first().boundingBox();
  const h1Box1440 = await page.locator('h1').boundingBox();
  const ctaHeader1440 = await page.locator('header a:has-text("Contact us")').boundingBox();
  console.log('1440px Viewport:');
  console.log('  Logo X:', logoBox1440.x);
  console.log('  H1 X:  ', h1Box1440.x);
  console.log('  CTA Header Right Edge:', ctaHeader1440.x + ctaHeader1440.width);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.waitForTimeout(300);
  const logoBox1600 = await page.locator('header a').first().boundingBox();
  const h1Box1600 = await page.locator('h1').boundingBox();
  const ctaHeader1600 = await page.locator('header a:has-text("Contact us")').boundingBox();
  console.log('1600px Viewport:');
  console.log('  Logo X:', logoBox1600.x);
  console.log('  H1 X:  ', h1Box1600.x);
  console.log('  CTA Header Right Edge:', ctaHeader1600.x + ctaHeader1600.width);

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(300);
  const logoBox1920 = await page.locator('header a').first().boundingBox();
  const h1Box1920 = await page.locator('h1').boundingBox();
  const ctaHeader1920 = await page.locator('header a:has-text("Contact us")').boundingBox();
  console.log('1920px Viewport:');
  console.log('  Logo X:', logoBox1920.x);
  console.log('  H1 X:  ', h1Box1920.x);
  console.log('  CTA Header Right Edge:', ctaHeader1920.x + ctaHeader1920.width);

  await browser.close();
}

check().catch(console.error);

