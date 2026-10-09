import puppeteer from "puppeteer-core";
import fs from "node:fs";

const outDir = "C:/Users/sondr/AppData/Local/Temp/cursor/screenshots";
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  args: ["--window-size=1440,900", "--hide-scrollbars"],
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 4000));
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({ path: `${outDir}/hero-fold.png` });
await browser.close();
console.log("saved hero-fold.png");
