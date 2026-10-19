// Usage: node measure.mjs <port> <label> <class-map.json>
// For each route, loads the page in headless Chromium and prints one JSON line:
//   { label, route, sheets, order }
// "order" is the sequence of library components as their rules appear in
// document.styleSheets (consecutive repeats collapsed), so two builds with the
// same string have the same component CSS order. "sheets" is the number of
// stylesheets the page loaded.
import fs from "node:fs";
import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, label, mapFile] = process.argv.slice(2);
const classMap = JSON.parse(fs.readFileSync(mapFile, "utf8"));
const routes = [
    "tab/default",
    "tab/title-addon",
    "badge/variants",
    "alert/type-variants",
    "button/base-variants",
    "tag/basic",
    "error-display/default",
    "error-display/with-action-button",
];

// Override pairs: a parent passes a class to a child whose own class sets the
// same property. Which one wins depends on CSS order.
//   error-display: ErrorDisplay gives Typography.HeadingMD `margin: 32px 0 16px`
//   (styles.title); Typography's own class sets `margin-bottom: 0`.
//   Intended result: margin-bottom 16px. If typography's rule comes later: 0px.
const probes = {
    "error-display/default": {
        selector: '[data-testid="error-display--title"]',
        property: "marginBottom",
        intended: "16px",
    },
    "error-display/with-action-button": {
        selector: '[data-testid="error-display--title"]',
        property: "marginBottom",
        intended: "16px",
    },
};

const browser = await chromium.launch();
const page = await browser.newPage();
for (const route of routes) {
    await page.goto(`http://localhost:${port}/components/${route}`);
    const result = await page.evaluate((map) => {
        const seq = [];
        const visit = (rules) => {
            for (const rule of rules) {
                if (rule.cssRules) visit(rule.cssRules);
                const text = rule.selectorText;
                if (!text) continue;
                const m = text.match(/\.([a-z][a-z0-9]{5,})/);
                const comp = m && map[m[1]];
                if (comp && seq[seq.length - 1] !== comp) seq.push(comp);
            }
        };
        const sheets = [...document.styleSheets];
        for (const sheet of sheets) {
            try {
                visit(sheet.cssRules);
            } catch {
                /* cross-origin sheet */
            }
        }
        return { sheets: sheets.length, order: seq.join(">") };
    }, classMap);
    const probe = probes[route];
    if (probe) {
        result.probe = await page.$eval(
            probe.selector,
            (el, p) => getComputedStyle(el)[p],
            probe.property
        );
        result.intended = probe.intended;
        result.ok = result.probe === probe.intended;
    }
    console.log(JSON.stringify({ label, route, ...result }));
}
await browser.close();
