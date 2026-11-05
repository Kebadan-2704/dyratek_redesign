import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import AxeBuilder from '@axe-core/playwright';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('audit/before');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

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
  { name: 'work-omnichannel-commerce', path: '/work/omnichannel-commerce-architecture' },
  { name: 'work-automated-crm', path: '/work/automated-crm-workflow-engine' },
  { name: 'work-unified-brand', path: '/work/unified-brand-digital-design-system' },
  { name: 'faq', path: '/faq' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
  { name: '404', path: '/not-found-page-test' }
];

const BREAKPOINTS = [360, 390, 768, 1024, 1280, 1920];

async function run() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const diagnosisData = [];

  for (const route of ROUTES) {
    console.log(`\nTesting Route: ${route.name} (${route.path})`);
    for (const width of BREAKPOINTS) {
      const height = width >= 1024 ? 900 : 800;
      const context = await browser.newContext({
        viewport: { width, height },
        deviceScaleFactor: 1
      });
      const page = await context.newPage();

      const consoleMessages = [];
      page.on('console', msg => {
        consoleMessages.push({ type: msg.type(), text: msg.text() });
      });

      try {
        const response = await page.goto(`${BASE_URL}${route.path}`, {
          waitUntil: 'networkidle',
          timeout: 15000
        });

        // Small delay to allow any client hydration / fonts
        await page.waitForTimeout(600);

        const fileName = `${route.name}-${width}px.png`;
        const filePath = path.join(OUT_DIR, fileName);
        await page.screenshot({ path: filePath, fullPage: true });

        // Evaluate layout metrics
        const metrics = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const hasHorizontalOverflow = docEl.scrollWidth > window.innerWidth || body.scrollWidth > window.innerWidth;

          // Elements with font size < 13px
          const tinyFontElements = [];
          const allEls = document.querySelectorAll('*');
          allEls.forEach(el => {
            const style = window.getComputedStyle(el);
            const fs = parseFloat(style.fontSize);
            const text = el.innerText?.trim();
            if (fs > 0 && fs < 13 && text && text.length > 0 && !el.closest('svg') && !el.closest('script')) {
              // Only record direct text holder or sample
              if (el.children.length === 0 || Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim())) {
                tinyFontElements.push({
                  tag: el.tagName.toLowerCase(),
                  class: (el.className || '').toString().slice(0, 50),
                  fontSize: fs,
                  text: text.slice(0, 40)
                });
              }
            }
          });

          return {
            hasHorizontalOverflow,
            scrollWidth: docEl.scrollWidth,
            innerWidth: window.innerWidth,
            tinyCount: tinyFontElements.length,
            tinySamples: tinyFontElements.slice(0, 10)
          };
        });

        // Run axe on key breakpoints (360 and 1280) to save time
        let axeResults = null;
        if (width === 360 || width === 1280) {
          try {
            const axe = new AxeBuilder({ page });
            axeResults = await axe.analyze();
          } catch (e) {
            console.error('Axe error:', e.message);
          }
        }

        diagnosisData.push({
          route: route.name,
          path: route.path,
          width,
          status: response?.status(),
          metrics,
          consoleMessages: consoleMessages.filter(m => m.type === 'error' || m.type === 'warning'),
          axeViolations: axeResults ? axeResults.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, count: v.nodes.length })) : null
        });

        process.stdout.write(` ${width}px✓`);
      } catch (err) {
        console.error(`Error on ${route.name} @ ${width}px:`, err.message);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();

  fs.writeFileSync(
    path.join(OUT_DIR, 'diagnosis-report.json'),
    JSON.stringify(diagnosisData, null, 2),
    'utf-8'
  );
  console.log('\nAudit complete! Report saved to audit/before/diagnosis-report.json');
}

run().catch(console.error);

