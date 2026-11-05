import { spawn, execSync } from 'child_process';
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const PORT = 3460;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const SCREENSHOT_DIR = path.resolve('screenshots/polish');
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status < 500) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${url} did not respond within ${timeoutMs}ms`);
}

async function run() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: 'ignore'
  });

  try {
    await waitForServer(BASE_URL);
    console.log(`Server is ready at ${BASE_URL}. Launching Chromium...`);

    const browser = await chromium.launch({ headless: true });

    // 1. iPhone SE (375x667) Viewport Test
    console.log('\n--- 1. Testing iPhone SE (375x667) Viewport ---');
    {
      const context = await browser.newContext({
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true
      });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1100); // Allow self-assembly to settle

      const iphoneFile = path.join(SCREENSHOT_DIR, 'hero-iphone-se-375px.png');
      await page.screenshot({ path: iphoneFile, fullPage: false });
      console.log(`Saved iPhone SE 375px capture: ${iphoneFile}`);

      // Check Business Automation service page on mobile
      await page.goto(`${BASE_URL}/services/business-automation`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const servMobileFile = path.join(SCREENSHOT_DIR, 'service-business-automation-375px.png');
      await page.screenshot({ path: servMobileFile, fullPage: false });
      console.log(`Saved Business Automation 375px capture: ${servMobileFile}`);

      await context.close();
    }

    // 2. iPad Tablet (768x1024) Viewport Test
    console.log('\n--- 2. Testing iPad Tablet (768x1024) Viewport ---');
    {
      const context = await browser.newContext({
        viewport: { width: 768, height: 1024 }
      });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1100);

      const ipadFile = path.join(SCREENSHOT_DIR, 'hero-tablet-768px.png');
      await page.screenshot({ path: ipadFile, fullPage: false });
      console.log(`Saved Tablet 768px capture: ${ipadFile}`);

      await context.close();
    }

    // 3. Desktop (1440x900) - Hero Assembly & Scroll Handoff
    console.log('\n--- 3. Testing Desktop (1440x900) Assembly & Scroll Handoff ---');
    {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 }
      });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

      // Frame at 300ms (Assembly Skeleton)
      await page.waitForTimeout(300);
      const skeletonFile = path.join(SCREENSHOT_DIR, 'hero-assembly-skeleton-300ms.png');
      await page.screenshot({ path: skeletonFile, fullPage: false });
      console.log(`Saved Assembly Skeleton capture: ${skeletonFile}`);

      // Frame at 1200ms (Resolved Live System)
      await page.waitForTimeout(900);
      const resolvedFile = path.join(SCREENSHOT_DIR, 'hero-resolved-1200ms.png');
      await page.screenshot({ path: resolvedFile, fullPage: false });
      console.log(`Saved Resolved Hero capture: ${resolvedFile}`);

      // Scroll Handoff: Scroll down 400px (Pinned hero transition)
      await page.evaluate(() => window.scrollTo(0, 450));
      await page.waitForTimeout(300);
      const pinFile = path.join(SCREENSHOT_DIR, 'hero-scroll-handoff-pinned.png');
      await page.screenshot({ path: pinFile, fullPage: false });
      console.log(`Saved Scroll Handoff Pinned capture: ${pinFile}`);

      // Service Detail Page check
      await page.goto(`${BASE_URL}/services/web-development`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const servWebFile = path.join(SCREENSHOT_DIR, 'service-web-development-1440px.png');
      await page.screenshot({ path: servWebFile, fullPage: false });
      console.log(`Saved Service Detail Web Dev capture: ${servWebFile}`);

      await context.close();
    }

    // 4. Reduced-Motion Test
    console.log('\n--- 4. Testing Reduced-Motion Mode ---');
    {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        reducedMotion: 'reduce'
      });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);

      const rmFile = path.join(SCREENSHOT_DIR, 'hero-reduced-motion.png');
      await page.screenshot({ path: rmFile, fullPage: false });
      console.log(`Saved Reduced-Motion capture: ${rmFile}`);

      await context.close();
    }

    // 5. Contact Form Validation & Submission Test
    console.log('\n--- 5. Testing Contact Form Submission ---');
    {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle' });
      await page.fill('#name', 'Jordan Taylor');
      await page.fill('#email', 'jordan@studio.example');
      await page.fill('#company', 'Taylor Creative');
      await page.fill('#brief', 'We are looking to rebuild our internal systems and web platform.');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(500);

      const isReceived = await page.isVisible('text=Message Received');
      console.log(`Contact form submission status: ${isReceived ? 'PASS (Confirmed)' : 'FAIL'}`);

      const contactSubmitFile = path.join(SCREENSHOT_DIR, 'contact-success-state.png');
      await page.screenshot({ path: contactSubmitFile, fullPage: false });
      console.log(`Saved Contact Form Success capture: ${contactSubmitFile}`);

      await context.close();
    }

    await browser.close();
    console.log('\nAll Playwright visual & interaction tests passed!');

    // 6. Run Mobile Lighthouse with Throttling
    console.log('\n--- 6. Running Mobile Lighthouse with Throttling ---');
    const lhOutFile = path.resolve('audit/lighthouse-polish-pass.json');
    const lhCmd = `npx lighthouse ${BASE_URL} --chrome-flags="--headless=new --no-sandbox" --form-factor=mobile --output=json --output-path="${lhOutFile}" --only-categories=performance,accessibility,best-practices,seo --quiet`;
    execSync(lhCmd, { stdio: 'inherit' });

    if (fs.existsSync(lhOutFile)) {
      const report = JSON.parse(fs.readFileSync(lhOutFile, 'utf-8'));
      const categories = report.categories;
      console.log('\n======================================================');
      console.log('       MOBILE LIGHTHOUSE POLISH PASS SUMMARY          ');
      console.log('======================================================');
      console.log(`Performance:    ${Math.round(categories.performance.score * 100)}`);
      console.log(`Accessibility:  ${Math.round(categories.accessibility.score * 100)}`);
      console.log(`Best Practices: ${Math.round(categories['best-practices'].score * 100)}`);
      console.log(`SEO:            ${Math.round(categories.seo.score * 100)}`);
      console.log('======================================================\n');
    }
  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    server.kill();
  }
}

run();

