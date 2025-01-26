import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
  defaultViewport: null,
  headless: false,
});
const page = await browser.newPage();

// Set the viewport size to 1080p with a device scale factor of 2
await page.setViewport({
  width: 1920,
  height: 1080,
  deviceScaleFactor: 2, // Upscales the resolution to 4K (3840x2160)
});

/// Navigate to the page you want to screenshot
await page.goto("https://scrapeautomate.com");

// Take a screenshot
await page.screenshot({
  path: "screenshot-normal.png",
  fullPage: true, // Optional, captures the entire page
});

console.log("Screenshot captured in 4K resolution!");

await browser.close();
