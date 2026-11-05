import { spawn } from 'child_process';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';

const PORT = 3457;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUT_FILE = path.resolve('audit/lighthouse-baseline.json');

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

  let chrome;
  try {
    await waitForServer(BASE_URL);
    console.log(`Server ready at ${BASE_URL}. Launching Chrome for Lighthouse...`);

    chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
    });

    const pagesToAudit = [
      { name: 'home', path: '/' },
      { name: 'services', path: '/services' },
      { name: 'about', path: '/about' },
      { name: 'contact', path: '/contact' }
    ];

    const results = {};

    for (const p of pagesToAudit) {
      console.log(`Running Lighthouse on ${p.name} (${p.path})...`);
      const runnerResult = await lighthouse(`${BASE_URL}${p.path}`, {
        logLevel: 'error',
        output: 'json',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port
      });

      const categories = runnerResult.lhr.categories;
      const audits = runnerResult.lhr.audits;

      results[p.name] = {
        scores: {
          performance: Math.round((categories.performance?.score || 0) * 100),
          accessibility: Math.round((categories.accessibility?.score || 0) * 100),
          bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
          seo: Math.round((categories.seo?.score || 0) * 100)
        },
        metrics: {
          fcp: audits['first-contentful-paint']?.displayValue,
          lcp: audits['largest-contentful-paint']?.displayValue,
          tbt: audits['total-blocking-time']?.displayValue,
          cls: audits['cumulative-layout-shift']?.displayValue,
          speedIndex: audits['speed-index']?.displayValue
        }
      };

      console.log(`Results for ${p.name}:`, results[p.name].scores);
    }

    fs.writeFileSync(OUT_FILE, JSON.stringify(results, null, 2));
    console.log(`Saved baseline Lighthouse scores to ${OUT_FILE}`);
  } catch (err) {
    console.error('Lighthouse run failed:', err);
  } finally {
    if (chrome) await chrome.kill();
    server.kill();
  }
}

run();

