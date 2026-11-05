import { spawn } from 'child_process';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORT = 3000;
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
  console.log(`Starting server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
    shell: true,
    stdio: 'ignore'
  });

  try {
    await waitForServer(BASE_URL);
    console.log(`Server ready. Running Lighthouse...`);
    const cmd = `npx lighthouse ${BASE_URL} --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="${OUT_FILE}" --only-categories=performance,accessibility,best-practices,seo --quiet`;
    execSync(cmd, { stdio: 'inherit' });
    console.log(`Lighthouse completed! Results saved to ${OUT_FILE}`);
  } catch (e) {
    console.error(`Error running lighthouse:`, e.message);
  } finally {
    server.kill();
  }
}

run();

