// Usage: node drawer-trace.mjs <port>
// Spike 01 / F17 follow-up: the navbar e2e tests that open the mobile drawer fail only on the
// layered build, in states the sweep never reaches. Opens the drawer and the Services submenu
// on navbar/submenu at 375px, as navbar.e2e.spec.ts does, and prints every svg's size with the
// rules that set its width, layer path and selector, in source order.
import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port] = process.argv.slice(2);
const browser = await chromium.launch();
const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    colorScheme: "light",
});
await context.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
const page = await context.newPage();
await page.goto(
    `http://localhost:${port}/components/navbar/submenu?now=${encodeURIComponent(
        "2026-04-08T12:00:00.000Z"
    )}`
);
await page
    .locator('[data-testid="story-layout"]')
    .waitFor({ state: "visible" });
await page.getByTestId("button__mobile-menu").click();
await page.getByTestId("link__mobile-2-expand-collapse-button").click();
await page.waitForTimeout(800);
const out = await page.evaluate(() => {
    const rows = [];
    for (const el of document.querySelectorAll('[data-testid="drawer"] svg')) {
        const hits = [];
        const walk = (rules, layers) => {
            for (const r of rules) {
                if (r.constructor.name === "CSSLayerBlockRule") {
                    walk(r.cssRules, [...layers, r.name]);
                    continue;
                }
                if (r.cssRules && !r.selectorText) {
                    walk(r.cssRules, layers);
                    continue;
                }
                if (!r.selectorText || !el.matches(r.selectorText)) continue;
                const v = r.style.getPropertyValue("width");
                if (v)
                    hits.push(
                        `${layers.join(".")}  ${r.selectorText}  width: ${v}`
                    );
            }
        };
        for (const s of document.styleSheets) {
            try {
                walk(s.cssRules, []);
            } catch {}
        }
        const testid = el.closest("[data-testid]")?.getAttribute("data-testid");
        rows.push({ testid, size: getComputedStyle(el).width, hits });
    }
    return rows;
});
for (const r of out) {
    console.log(`  ${r.testid}  svg width ${r.size}`);
    r.hits.forEach((h) => console.log("     " + h));
}
await browser.close();
