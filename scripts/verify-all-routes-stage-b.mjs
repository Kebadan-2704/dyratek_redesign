import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const AFTER_DIR = path.resolve('audit/after');
const ARTIFACT_DIR = path.resolve('C:/Users/Keba/.gemini/antigravity/brain/622cc218-7fde-4827-8b92-7b9736e26fc5');

if (!fs.existsSync(AFTER_DIR)) {
  fs.mkdirSync(AFTER_DIR, { recursive: true });
}

const ROUTES_FOR_REVIEW = [
  { key: 'home', name: 'Home', url: 'http://localhost:3001/' },
  { key: 'services', name: 'Services Index', url: 'http://localhost:3001/services' },
  { key: 'service-detail', name: 'Service Detail', url: 'http://localhost:3001/services/web-development' },
  { key: 'work', name: 'Work Index', url: 'http://localhost:3001/work' },
  { key: 'project-detail', name: 'Project Detail', url: 'http://localhost:3001/work/online-store' },
  { key: 'faq', name: 'FAQ', url: 'http://localhost:3001/faq' },
  { key: 'contact', name: 'Contact', url: 'http://localhost:3001/contact' },
  { key: 'about', name: 'About', url: 'http://localhost:3001/about' },
  { key: 'privacy', name: 'Privacy Policy', url: 'http://localhost:3001/privacy' },
  { key: 'terms', name: 'Terms of Service', url: 'http://localhost:3001/terms' },
  { key: 'not-found', name: '404 Page', url: 'http://localhost:3001/404' }
];

async function runStageBVerification() {
  const browser = await chromium.launch({ headless: true });
  const results = {
    consoleLogs: {},
    axeViolations: {},
    overflowChecks: {},
    under13pxChecks: {}
  };

  console.log('Capturing Stage B Before/After PNG screenshots at 1280px and 390px...');

  for (const route of ROUTES_FOR_REVIEW) {
    results.consoleLogs[route.name] = [];
    results.axeViolations[route.name] = 0;

    for (const width of [1280, 390]) {
      const height = width === 1280 ? 800 : 844;
      const context = await browser.newContext({
        viewport: { width, height },
        deviceScaleFactor: 2
      });
      const page = await context.newPage();

      if (width === 1280) {
        page.on('console', msg => results.consoleLogs[route.name].push({ type: msg.type(), text: msg.text() }));
        page.on('pageerror', err => results.consoleLogs[route.name].push({ type: 'pageerror', text: err.message }));
      }

      await page.goto(route.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);

      // Save Full Page Screenshot
      const filename = `${route.key}-${width}px.png`;
      const localPath = path.join(AFTER_DIR, filename);
      await page.screenshot({ path: localPath, fullPage: true });

      // Copy to artifact directory
      fs.copyFileSync(localPath, path.join(ARTIFACT_DIR, filename));

      // If Home, also capture specific Footer screenshot
      if (route.key === 'home') {
        const footerEl = page.locator('footer');
        if (await footerEl.count() > 0) {
          const footerFilename = `footer-${width}px.png`;
          const footerPath = path.join(AFTER_DIR, footerFilename);
          await footerEl.screenshot({ path: footerPath });
          fs.copyFileSync(footerPath, path.join(ARTIFACT_DIR, footerFilename));
        }
      }

      // Run axe on 1280px
      if (width === 1280) {
        const axe = new AxeBuilder({ page });
        const axeResults = await axe.analyze();
        results.axeViolations[route.name] = axeResults.violations.length;
        if (axeResults.violations.length > 0) {
          console.warn(`[AXE WARNING] ${route.name} has ${axeResults.violations.length} violations`);
        }
      }

      // Overflow check
      const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (!results.overflowChecks[width]) results.overflowChecks[width] = [];
      results.overflowChecks[width].push({ route: route.name, hasOverflow });

      // Under 13px check
      const under13Count = await page.evaluate(() => {
        let count = 0;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
        let node;
        while ((node = walker.nextNode())) {
          const style = window.getComputedStyle(node);
          if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
            for (let child of node.childNodes) {
              if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
                if (parseFloat(style.fontSize) < 12.9) {
                  count++;
                }
                break;
              }
            }
          }
        }
        return count;
      });

      if (!results.under13pxChecks[width]) results.under13pxChecks[width] = [];
      results.under13pxChecks[width].push({ route: route.name, count: under13Count });

      await context.close();
    }
  }

  await browser.close();

  fs.writeFileSync('audit/stage-b-verification-report.json', JSON.stringify(results, null, 2));

  console.log('\n=== STAGE B VERIFICATION COMPLETE ===');
  console.log('Console Logs Summary:');
  for (const [name, logs] of Object.entries(results.consoleLogs)) {
    console.log(` - ${name}: ${logs.length === 0 ? 'Zero errors / warnings' : JSON.stringify(logs)}`);
  }

  console.log('\nAxe Violations Summary:');
  for (const [name, vCount] of Object.entries(results.axeViolations)) {
    console.log(` - ${name}: ${vCount} violations`);
  }

  console.log('\nUnder 13px Text Summary:');
  for (const [w, routes] of Object.entries(results.under13pxChecks)) {
    const total = routes.reduce((acc, r) => acc + r.count, 0);
    console.log(` - ${w}px: ${total} text elements under 13px across all routes`);
  }

  console.log('\nHorizontal Overflow Summary:');
  for (const [w, routes] of Object.entries(results.overflowChecks)) {
    const overflowRoutes = routes.filter(r => r.hasOverflow);
    console.log(` - ${w}px: ${overflowRoutes.length === 0 ? 'Zero overflow' : overflowRoutes.map(r => r.route).join(', ')}`);
  }
}

runStageBVerification().catch(console.error);

