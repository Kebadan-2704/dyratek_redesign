import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SENSITIVE_KEYWORDS = [
  'ownership',
  'support',
  'estimate',
  'clean code',
  'tested across',
  'fast',
  'instant',
  'always',
  'never',
  'warranty',
  'guarantee',
  'timeline',
  'analytics',
  'tracking',
  'business day',
  'work day',
  'hour',
  'whatsapp',
  'slack',
  'teams',
  'documentation'
];

async function extractStringsFromPage(url, label) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const extracted = await page.evaluate(() => {
    const results = [];

    // Helper to walk DOM
    function walk(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (text && text.length > 0) {
          const parent = node.parentElement;
          if (parent && parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
            const style = window.getComputedStyle(parent);
            if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
              results.push({
                type: 'visible_text',
                tag: parent.tagName.toLowerCase(),
                text: text.replace(/\s+/g, ' ')
              });
            }
          }
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node;
        // Check attributes
        if (el.hasAttribute('alt')) {
          results.push({ type: 'alt_text', tag: el.tagName.toLowerCase(), text: el.getAttribute('alt') });
        }
        if (el.hasAttribute('aria-label')) {
          results.push({ type: 'aria_label', tag: el.tagName.toLowerCase(), text: el.getAttribute('aria-label') });
        }
        if (el.hasAttribute('title')) {
          results.push({ type: 'title_attr', tag: el.tagName.toLowerCase(), text: el.getAttribute('title') });
        }
        if (el.hasAttribute('placeholder')) {
          results.push({ type: 'placeholder', tag: el.tagName.toLowerCase(), text: el.getAttribute('placeholder') });
        }

        // Recurse children
        for (const child of el.childNodes) {
          walk(child);
        }
      }
    }

    walk(document.body);
    return results;
  });

  await browser.close();

  // Deduplicate consecutive or identical exact entries while preserving context
  const uniqueItems = [];
  const seen = new Set();
  for (const item of extracted) {
    const key = `${item.type}:${item.text}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

async function run() {
  console.log('Extracting strings from Home (http://localhost:3000/)...');
  const homeStrings = await extractStringsFromPage('http://localhost:3000/', 'Home');

  console.log('Extracting strings from Service Detail (http://localhost:3000/services/web-development)...');
  const serviceStrings = await extractStringsFromPage('http://localhost:3000/services/web-development', 'Service: Web Dev');

  function analyze(items, pageName) {
    return items.map(item => {
      const lower = item.text.toLowerCase();
      const matchedKeywords = SENSITIVE_KEYWORDS.filter(k => lower.includes(k));
      return {
        page: pageName,
        type: item.type,
        tag: item.tag,
        text: item.text,
        flaggedKeywords: matchedKeywords.length > 0 ? matchedKeywords.join(', ') : 'none'
      };
    });
  }

  const analyzedHome = analyze(homeStrings, 'Home (/)');
  const analyzedService = analyze(serviceStrings, 'Services Detail (/services/web-development)');

  const allAnalyzed = [...analyzedHome, ...analyzedService];

  fs.writeFileSync('audit/string-audit.json', JSON.stringify(allAnalyzed, null, 2));

  console.log(`\nExtracted ${analyzedHome.length} strings from Home.`);
  console.log(`Extracted ${analyzedService.length} strings from /services/web-development.`);
  
  const flagged = allAnalyzed.filter(a => a.flaggedKeywords !== 'none');
  console.log(`\nFlagged items requiring review against CONTENT_TO_CONFIRM: ${flagged.length}`);
  flagged.forEach(f => {
    console.log(`- [${f.page}] [${f.type}] "${f.text}" (Flagged: ${f.flaggedKeywords})`);
  });
}

run().catch(console.error);

