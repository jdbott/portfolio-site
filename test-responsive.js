import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: 'mobile-iphone', width: 375, height: 812 },
    { name: 'tablet-ipad', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 }
  ];

  const outputDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const viewport of viewports) {
    console.log(`Testing ${viewport.name} (${viewport.width}x${viewport.height})...`);
    await page.setViewport({ width: viewport.width, height: viewport.height });
    await page.goto('http://localhost:4323', { waitUntil: 'networkidle2' });
    await page.screenshot({
      path: path.join(outputDir, `${viewport.name}.png`),
      fullPage: true
    });
  }

  console.log(`Screenshots saved to ${outputDir}`);
  await browser.close();
})();
