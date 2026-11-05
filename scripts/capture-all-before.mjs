import { spawn } from 'child_process';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const PORT = 3456;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const DESKTOP_DIR = path.resolve('screenshots/before/desktop');
const MOBILE_DIR = path.resolve('screenshots/before/mobile');
const AUDIT_OUT = path.resolve('audit/before-baseline.json');

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
    const baselineResults = [];

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
          routeResult.consoleMessages.push({
            viewport: 'desktop',
            type: msg.type(),
            text: msg.text()
          });
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
          routeResult.consoleMessages.push({
            viewport: 'mobile',
            type: msg.type(),
            text: msg.text()
          });
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

      console.log(`Saved screenshots for ${route.name} (1440px & 390px). Axe violations: ${routeResult.axeViolations.length}`);
      baselineResults.push(routeResult);
    }

    await browser.close();

    fs.writeFileSync(AUDIT_OUT, JSON.stringify(baselineResults, null, 2));
    console.log(`\nAudit and capture complete! Saved results to ${AUDIT_OUT}`);
  } finally {
    console.log('Shutting down server...');
    server.kill();
  }
}

run().catch((err) => {
  console.error('Fatal error during capture:', err);
  process.exit(1);
});

