// Smoke-test screenshots: hero at top, then scrolled ~2 viewports down.
import { chromium } from "playwright-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const browser = await chromium.launch({ executablePath: EDGE, headless: true });
const page = await browser.newPage({ viewportSize: { width: 1440, height: 900 } });

const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto("http://localhost:3001", { waitUntil: "load" });
// let the preloader finish and hero choreography land
await page.waitForTimeout(4500);
await page.screenshot({ path: "scripts/shot-hero.png" });

// drive Lenis with real wheel events so ScrollTrigger scrubs naturally
for (let i = 0; i < 18; i++) {
  await page.mouse.wheel(0, 120);
  await page.waitForTimeout(60);
}
await page.waitForTimeout(1200);
await page.screenshot({ path: "scripts/shot-mid.png" });

// further down — work section reveals mid-pull
for (let i = 0; i < 14; i++) {
  await page.mouse.wheel(0, 120);
  await page.waitForTimeout(60);
}
await page.waitForTimeout(800);
await page.screenshot({ path: "scripts/shot-work.png" });

console.log("scrollY:", await page.evaluate(() => window.scrollY));
console.log("console errors:", errors.length ? errors : "none");
await browser.close();
