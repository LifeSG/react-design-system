// Usage: node svg-rules.mjs <port>  — rules setting width on the banner's dismiss <svg>, with layer path
import { chromium } from "../../../../node_modules/playwright/index.mjs";
const b = await chromium.launch();
const p = await b.newPage();
await p.goto(`http://localhost:${process.argv[2]}/nav/banner`);
await p.waitForLoadState("networkidle");
await p.waitForTimeout(300);
const out = await p.evaluate(() => {
    const el = document.querySelector(
        '[data-testid="smart-app-banner-dismiss-container"] svg'
    );
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
            if (r.selectorText && el.matches(r.selectorText) && r.style.width)
                hits.push(
                    `${layers.join(".") || "(unlayered)"}  ${
                        r.selectorText
                    }  width: ${r.style.width}`
                );
        }
    };
    for (const s of document.styleSheets) {
        try {
            walk(s.cssRules, []);
        } catch {}
    }
    return { computed: getComputedStyle(el).width, hits };
});
console.log("  computed width:", out.computed);
out.hits.forEach((h) => console.log("   ", h));
await b.close();
