// Usage: node banner-diff.mjs <port> <out.json>
// Dumps the computed style of every element under the smart-app-banner on /nav/banner.
import fs from "node:fs";
import { chromium } from "../../../../node_modules/playwright/index.mjs";
const [port, out] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto(`http://localhost:${port}/nav/banner`);
await p.waitForLoadState("networkidle");
await p.waitForTimeout(300);
const data = await p.evaluate(() => {
    const root = document.querySelector('[data-testid="smart-app-banner"]');
    const els = [root, ...root.querySelectorAll("*")];
    return els.map((el, i) => {
        const cs = getComputedStyle(el),
            o = {};
        for (const k of cs) o[k] = cs.getPropertyValue(k);
        return {
            path: `${i}:${el.tagName.toLowerCase()}${
                el.dataset?.testid ? "[" + el.dataset.testid + "]" : ""
            }.${(el.getAttribute("class") || "").split(" ")[0]}`,
            style: o,
        };
    });
});
fs.writeFileSync(out, JSON.stringify(data));
await b.close();
