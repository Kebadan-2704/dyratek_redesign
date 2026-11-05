import { spawn } from 'child_process';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const PORT = 3458;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const DESKTOP_DIR = path.resolve('screenshots/after/desktop');
const MOBILE_DIR = path.resolve('screenshots/after/mobile');
const AUDIT_OUT = path.resolve('audit/after-verification.json');

fs.mkdirSync(DESKTOP_DIR, { recursive: true });
fs.mkdirSync(MOBILE_DIR, { recursive: true });

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'services-web-development', path: '/services/web-development' },
  { name: 'services-app-development', path: '/services/app-development' },
  { name: 'services-ecommerce-solutions', path: '/services/ecommerce-solutions' },
  { name: 'services-digital-solutions', path: '/services/digital-solutions' },
  { name: 'services-business-automation', path: '/services/business-automation' },
  { name: 'services-email-whatsapp-marketing', path: '/services/email-whatsapp-marketing' },
  { name: 'services-ui-ux-design', path: '/services/ui-ux-design' },
  { name: 'services-creative-video', path: '/services/creative-video' },
  { name: 'services-digital-marketing', path: '/services/digital-marketing' },
  { name: 'services-performance-marketing', path: '/services/performance-marketing' },
  { name: 'services-content-strategy-copywriting', path: '/services/content-strategy-copywriting' },
  { name: 'work', path: '/work' },
  { name: 'work-online-store', path: '/work/online-store' },
  { name: 'work-inquiry-follow-up', path: '/work/inquiry-follow-up' },
  { name: 'work-design-kit', path: '/work/design-kit' },
  { name: 'faq', path: '/faq' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
  { name: 'not-found', path: '/non-existent-page-404-test' }
];

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status < 500) return true;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${url} did not respond within ${timeoutMs}ms`);
}

async function run() {
  console.log(`Starting Next.js production server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: 'pipe'
  });

  server.stdout.on('data', (d) => process.stdout.write(`[server] ${d}`));
  server.stderr.on('data', (d) => process.stderr.write(`[server err] ${d}`));

  try {
    await waitForServer(BASE_URL);
    console.log(`Server is ready at ${BASE_URL}. Launching Chromium...`);

    const browser = await chromium.launch({ headless: true });
    const afterResults = [];

    for (const route of ROUTES) {
      console.log(`\n--- Auditing & Capturing: ${route.name} (${route.path}) ---`);
      const routeResult = {
        name: route.name,
        path: route.path,
        desktopScreenshot: '',
        mobileScreenshot: '',
        httpStatus: 0,
        consoleMessages: [],
        axeViolations: [],
        timings: {}
      };

      // 1. Desktop (1440x900)
      {
        const context = await browser.newContext({
          viewport: { width: 1440, height: 900 },
          deviceScaleFactor: 1
        });
        const page = await context.newPage();

        page.on('console', (msg) => {
          if (msg.type() === 'error' || msg.type() === 'warning') {
            routeResult.consoleMessages.push({
              viewport: 'desktop',
              type: msg.type(),
              text: msg.text()
            });
          }
        });

        const startNav = Date.now();
        const response = await page.goto(`${BASE_URL}${route.path}`, {
          waitUntil: 'networkidle',
          timeout: 20000
        });
        routeResult.timings.desktopNavMs = Date.now() - startNav;
        routeResult.httpStatus = response?.status() || 0;

        await page.waitForTimeout(600);

        const desktopFile = path.join(DESKTOP_DIR, `${route.name}-1440px.png`);
        await page.screenshot({ path: desktopFile, fullPage: true });
        routeResult.desktopScreenshot = desktopFile;

        // Run axe a11y audit
        try {
          const axeResults = await new AxeBuilder({ page }).analyze();
          routeResult.axeViolations = axeResults.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            nodesCount: v.nodes.length,
            helpUrl: v.helpUrl
          }));
        } catch (e) {
          console.error(`Axe check error on desktop ${route.name}:`, e.message);
        }

        await context.close();
      }

      // 2. Mobile (390x844)
      {
        const context = await browser.newContext({
          viewport: { width: 390, height: 844 },
          deviceScaleFactor: 1,
          isMobile: true,
          hasTouch: true
        });
        const page = await context.newPage();

        page.on('console', (msg) => {
          if (msg.type() === 'error' || msg.type() === 'warning') {
            routeResult.consoleMessages.push({
              viewport: 'mobile',
              type: msg.type(),
              text: msg.text()
            });
          }
        });

        const startNav = Date.now();
        await page.goto(`${BASE_URL}${route.path}`, {
          waitUntil: 'networkidle',
          timeout: 20000
        });
        routeResult.timings.mobileNavMs = Date.now() - startNav;

        await page.waitForTimeout(600);

        const mobileFile = path.join(MOBILE_DIR, `${route.name}-390px.png`);
        await page.screenshot({ path: mobileFile, fullPage: true });
        routeResult.mobileScreenshot = mobileFile;

        await context.close();
      }

      console.log(`Saved screenshots for ${route.name}. Axe violations: ${routeResult.axeViolations.length}, Console warnings/errors: ${routeResult.consoleMessages.length}`);
      afterResults.push(routeResult);
    }

    // 3. Test Responsive Viewports (390, 768, 1024, 1440, 1920) on Home Page
    console.log('\n--- Testing Responsive Viewports (390, 768, 1024, 1440, 1920) ---');
    const viewports = [
      { name: 'mobile-390', width: 390, height: 844 },
      { name: 'tablet-768', width: 768, height: 1024 },
      { name: 'laptop-1024', width: 1024, height: 768 },
      { name: 'desktop-1440', width: 1440, height: 900 },
      { name: 'ultrawide-1920', width: 1920, height: 1080 }
    ];

    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const vpFile = path.join('screenshots/after', `home-${vp.name}.png`);
      await page.screenshot({ path: vpFile, fullPage: false });
      console.log(`Captured viewport preview: ${vp.name} (${vp.width}x${vp.height})`);
      await context.close();
    }

    // 4. Test Reduced-Motion Context
    console.log('\n--- Testing Reduced-Motion Mode ---');
    {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        reducedMotion: 'reduce'
      });
      const page = await context.newPage();
      await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const rmFile = path.join('screenshots/after', 'home-reduced-motion.png');
      await page.screenshot({ path: rmFile, fullPage: false });
      console.log('Successfully captured home with reduced-motion: reduce');
      await context.close();
    }

    // 5. Test Key Interactive Features (Contact form, FAQ accordion, Stepper)
    console.log('\n--- Testing Key Interactive Features ---');
    {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      const page = await context.newPage();

      // Test FAQ Accordion
      await page.goto(`${BASE_URL}/faq`, { waitUntil: 'networkidle' });
      await page.click('#faq-btn-faq-02');
      await page.waitForTimeout(300);
      const isFaq02Visible = await page.isVisible('#faq-answer-faq-02');
      console.log(`FAQ Accordion item 2 toggle: ${isFaq02Visible ? 'PASS' : 'FAIL'}`);

      // Test Contact Form Validation & Submission
      await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle' });
      await page.fill('#name', 'Alex Rivera');
      await page.fill('#email', 'alex@example.com');
      await page.fill('#brief', 'We need a high-performance web platform built with modern architecture.');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(400);
      const isConfirmed = await page.isVisible('text=Message Received');
      console.log(`Contact form interactive validation & confirmation: ${isConfirmed ? 'PASS' : 'FAIL'}`);

      await context.close();
    }

    await browser.close();

    fs.writeFileSync(AUDIT_OUT, JSON.stringify(afterResults, null, 2));
    console.log(`\nAll verification and captures complete! Saved to ${AUDIT_OUT}`);
  } finally {
    console.log('Shutting down server...');
    server.kill();
  }
}

run().catch((err) => {
  console.error('Fatal error during capture:', err);
  process.exit(1);
});

