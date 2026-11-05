import { spawn, execSync } from 'child_process';
import fs from 'fs';

const PORT = 3465;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUT_FILE = 'audit/lighthouse-mobile-optimized.json';

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
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: 'ignore'
  });

  try {
    await waitForServer(BASE_URL);
    const cmd = `npx lighthouse ${BASE_URL}/ --chrome-flags="--headless=new --no-sandbox" --form-factor=mobile --output=json --output-path="${OUT_FILE}" --only-categories=performance,accessibility,best-practices,seo --quiet`;
    execSync(cmd, { stdio: 'inherit' });
    const report = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8'));
    const cat = report.categories;
    console.log('OPTIMIZED MOBILE LIGHTHOUSE:');
    console.log('Performance:   ', Math.round(cat.performance.score * 100));
    console.log('Accessibility: ', Math.round(cat.accessibility.score * 100));
    console.log('Best Practices:', Math.round(cat['best-practices'].score * 100));
    console.log('SEO:           ', Math.round(cat.seo.score * 100));
  } finally {
    server.kill();
  }
}

run();

