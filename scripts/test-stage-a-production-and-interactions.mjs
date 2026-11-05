import { chromium } from 'playwright';
import fs from 'fs';

const ALL_SERVICE_SLUGS = [
  'web-development',
  'app-development',
  'ecommerce-solutions',
  'digital-solutions',
  'business-automation',
  'email-whatsapp-marketing',
  'ui-ux-design',
  'creative-video',
  'digital-marketing',
  'performance-marketing',
  'content-strategy-copywriting'
];

const BREAKPOINTS = [360, 390, 768, 1024, 1280, 1920];

async function runProductionTests() {
  const browser = await chromium.launch({ headless: true });
  const results = {
    consoleLogs: {},
    horizontalOverflow: [],
    smallTextElements: [],
    serviceCardHeights: {},
    interactions: {}
  };

  // 1. Console Output for Home and all 11 Services on Production Server (port 3001)
  console.log('Testing console output on production server (http://localhost:3001)...');

  const routesToTest = [
    { name: 'Home (/)', url: 'http://localhost:3001/' },
    ...ALL_SERVICE_SLUGS.map(slug => ({
      name: `/services/${slug}`,
      url: `http://localhost:3001/services/${slug}`
    }))
  ];

  for (const route of routesToTest) {
    const page = await browser.newPage();
    const logs = [];
    page.on('console', msg => logs.push({ type: msg.type(), text: msg.text() }));
    page.on('pageerror', err => logs.push({ type: 'pageerror', text: err.message }));

    await page.goto(route.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    results.consoleLogs[route.name] = logs;
    await page.close();
  }

  // 2. Playwright checks on Home at 360, 390, 768, 1024, 1280, 1920
  console.log('Checking horizontal overflow, text under 13px, and card heights...');
  for (const width of BREAKPOINTS) {
    const height = width < 768 ? 844 : 900;
    const page = await browser.newPage({ viewport: { width, height } });
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });

    // Horizontal overflow check
    const overflow = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      return {
        scrollWidth,
        innerWidth,
        hasOverflow: scrollWidth > innerWidth
      };
    });
    results.horizontalOverflow.push({ width, ...overflow });

    // Text under 13px check
    const smallTexts = await page.evaluate(() => {
      const found = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let node;
      while ((node = walker.nextNode())) {
        const style = window.getComputedStyle(node);
        if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
          let hasDirectText = false;
          for (let child of node.childNodes) {
            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
              hasDirectText = true;
              break;
            }
          }
          if (hasDirectText) {
            const size = parseFloat(style.fontSize);
            if (size < 12.9) { // Strict check < 13px
              found.push({
                tag: node.tagName.toLowerCase(),
                text: node.textContent.trim().slice(0, 40),
                fontSize: size
              });
            }
          }
        }
      }
      return found;
    });

    results.smallTextElements.push({ width, count: smallTexts.length, items: smallTexts });

    // Card heights in Services section
    const cardHeights = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll('#services .rounded-2xl.border'));
      return cards.map((c, i) => ({
        cardIndex: i + 1,
        offsetHeight: c.offsetHeight,
        clientHeight: c.clientHeight
      }));
    });
    results.serviceCardHeights[width] = cardHeights;

    await page.close();
  }

  // 3. Interaction Tests
  console.log('Testing keyboard navigation, Esc key, tap, and mobile menu focus trap...');
  {
    // Desktop: Tab to Services dropdown toggle button, Enter opens, Esc closes
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });

    // Focus the services dropdown toggle button
    const servicesBtn = page.locator('header button[aria-label="Toggle services menu"]');
    await servicesBtn.focus();
    await page.waitForTimeout(200);

    // Press Enter to open dropdown
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    const isOpenAfterEnter = await servicesBtn.getAttribute('aria-expanded') === 'true';

    // Press Esc to close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const isClosedAfterEsc = await servicesBtn.getAttribute('aria-expanded') === 'false';

    results.interactions.desktopDropdown = {
      servicesButtonFound: await servicesBtn.count() > 0,
      openedOnEnter: isOpenAfterEnter,
      closedOnEsc: isClosedAfterEsc
    };

    await page.close();
  }

  {
    // Mobile: Touch tap, aria-labelledby, focus trap, Esc closes
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });

    // Tap mobile menu button
    const menuBtn = page.locator('header button[aria-label="Open menu"]');
    await menuBtn.tap();
    await page.waitForTimeout(300);

    const isMenuOpen = await page.evaluate(() => {
      const dialog = document.querySelector('#mobile-menu');
      const btn = document.querySelector('header button[aria-controls="mobile-menu"]');
      const style = dialog ? window.getComputedStyle(dialog) : null;
      return {
        hasDialog: !!dialog,
        isVisible: style ? style.visibility !== 'hidden' : false,
        ariaExpanded: btn?.getAttribute('aria-expanded'),
        ariaLabelledBy: dialog?.getAttribute('aria-labelledby'),
        hasLabelElement: !!dialog && !!document.getElementById(dialog.getAttribute('aria-labelledby') || '')
      };
    });

    // Check focus inside dialog
    const focusInsideDialog = await page.evaluate(() => {
      const dialog = document.querySelector('#mobile-menu');
      return dialog ? dialog.contains(document.activeElement) : false;
    });

    // Press Esc to close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    const isMenuClosedAfterEsc = await page.evaluate(() => {
      const dialog = document.querySelector('#mobile-menu');
      const btn = document.querySelector('header button[aria-controls="mobile-menu"]');
      const style = dialog ? window.getComputedStyle(dialog) : null;
      return {
        ariaExpanded: btn?.getAttribute('aria-expanded') === 'false',
        isInvisible: style ? style.visibility === 'hidden' : true
      };
    });

    results.interactions.mobileMenu = {
      isMenuOpen,
      focusInsideDialog,
      closedOnEsc: isMenuClosedAfterEsc.ariaExpanded && isMenuClosedAfterEsc.isInvisible
    };

    await context.close();
  }

  await browser.close();

  fs.writeFileSync('audit/stage-a-production-test-results.json', JSON.stringify(results, null, 2));
  console.log('\n=== TEST SUMMARY ===');
  console.log('Console Logs for All Routes:');
  for (const [r, l] of Object.entries(results.consoleLogs)) {
    console.log(` - ${r}: ${l.length === 0 ? 'Zero errors / warnings' : JSON.stringify(l)}`);
  }
  console.log('\nHorizontal Overflow Check (all 6 widths):');
  results.horizontalOverflow.forEach(h => console.log(` - ${h.width}px: scrollWidth=${h.scrollWidth}, innerWidth=${h.innerWidth}, hasOverflow=${h.hasOverflow}`));

  console.log('\nText Elements Under 13px (all 6 widths):');
  results.smallTextElements.forEach(s => console.log(` - ${s.width}px: count=${s.count}`));

  console.log('\nCard Heights in Services Section:');
  console.log(' - 1280px:', results.serviceCardHeights[1280]);

  console.log('\nInteraction Tests:');
  console.log(JSON.stringify(results.interactions, null, 2));
}

runProductionTests().catch(console.error);
