import { spawn, execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const PORT = 3450;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUT_FILE = path.resolve('audit/lighthouse-after.json');

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
  console.log(`Starting server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: 'ignore'
  });

  try {
    await waitForServer(BASE_URL);
    console.log(`Server ready at ${BASE_URL}. Running Lighthouse CLI...`);
    const cmd = `npx lighthouse ${BASE_URL} --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="${OUT_FILE}" --only-categories=performance,accessibility,best-practices,seo --quiet`;
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Lighthouse completed! Results saved to ${OUT_FILE}`);

    // Parse and print summary
    if (fs.existsSync(OUT_FILE)) {
      const report = JSON.parse(fs.readFileSync(OUT_FILE, 'utf-8'));
      const categories = report.categories;
      console.log('\n=============================================');
      console.log('       LIGHTHOUSE "AFTER" SCORES SUMMARY     ');
      console.log('=============================================');
      console.log(`Performance:    ${Math.round(categories.performance.score * 100)}`);
      console.log(`Accessibility:  ${Math.round(categories.accessibility.score * 100)}`);
      console.log(`Best Practices: ${Math.round(categories['best-practices'].score * 100)}`);
      console.log(`SEO:            ${Math.round(categories.seo.score * 100)}`);
      console.log('=============================================\n');
    }
  } catch (e) {
    console.error(`Error running lighthouse:`, e.message);
  } finally {
    server.kill();
  }
}

run();

