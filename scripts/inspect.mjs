import { chromium } from "playwright-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const browser = await chromium.launch({ executablePath: EDGE, headless: true });
const page = await browser.newPage({ viewportSize: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001", { waitUntil: "load" });
await page.waitForTimeout(5000);

const info = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const grad = h1.querySelector(".text-gradient");
  const words = [...h1.querySelectorAll(".reveal-word")].map((w) => {
    const r = w.getBoundingClientRect();
    const cs = getComputedStyle(w);
    return { t: w.textContent.trim(), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), transform: cs.transform, color: cs.color };
  });
  return {
    h1Rect: h1.getBoundingClientRect().toJSON(),
    gradStyle: grad ? { color: getComputedStyle(grad).color, clip: getComputedStyle(grad).webkitBackgroundClip, bg: getComputedStyle(grad).backgroundImage.slice(0, 80) } : null,
    words,
  };
});
console.log(JSON.stringify(info, null, 1));

const h1 = page.locator("h1");
await h1.screenshot({ path: "scripts/shot-h1.png" });
await browser.close();
