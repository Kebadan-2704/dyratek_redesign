import { chromium } from 'playwright';

async function measureFonts() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  let totalFontBytes = 0;
  const fontRequests = [];

  page.on('response', async (response) => {
    const url = response.url();
    const contentType = response.headers()['content-type'] || '';
    if (url.includes('.woff') || url.includes('.woff2') || contentType.includes('font')) {
      try {
        const buffer = await response.body();
        const size = buffer.length;
        totalFontBytes += size;
        fontRequests.push({ url: url.split('/').pop(), size, contentType });
      } catch (e) {
        // body might not be available if cached
      }
    }
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await browser.close();

  console.log('=== BASELINE FONT TRANSFER REPORT ===');
  console.log('Font requests count:', fontRequests.length);
  fontRequests.forEach(f => console.log(` - ${f.url}: ${(f.size / 1024).toFixed(2)} KB (${f.size} bytes)`));
  console.log(`TOTAL FONT TRANSFER: ${(totalFontBytes / 1024).toFixed(2)} KB (${totalFontBytes} bytes)\n`);
}

measureFonts().catch(console.error);

