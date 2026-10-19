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
    "menu/grid-layout-with-label",
    "timeline/default",
    "toast/with-sublabel",
    "footer/download-addon-variant",
];

// Override pairs: a parent passes a class to a child whose own class sets the
// same property. Which one wins depends on CSS order.
//   error-display: ErrorDisplay gives Typography.HeadingMD `margin: 32px 0 16px`
//   (styles.title); Typography's own class sets `margin-bottom: 0`.
//   Intended result: margin-bottom 16px. If typography's rule comes later: 0px.
const probes = {
    "error-display/default": [
        {
            selector: '[data-testid="error-display--title"]',
            property: "marginBottom",
            intended: "16px",
        },
    ],
    "error-display/with-action-button": [
        {
            selector: '[data-testid="error-display--title"]',
            property: "marginBottom",
            intended: "16px",
        },
    ],
    // MenuSection label: parent colour text-subtler (neutral-50) vs Typography colour text (neutral-20)
    "menu/grid-layout-with-label": [
        {
            selector: '[data-testid="menu-section"]',
            labelOf: true,
            property: "color",
            intendedVar: "--fds-colour-text-subtler",
        },
    ],
    // Timeline title: parent margin-bottom 1rem vs Typography heading margin-bottom 0
    "timeline/default": [
        {
            selector: '[data-testid="timeline-title"]',
            property: "marginBottom",
            intended: "16px",
        },
    ],
    // Toast description: parent `color: inherit` vs Typography colour text
    "toast/with-sublabel": [
        {
            selector: '[data-testid="toast-success"] p',
            property: "color",
            intendedInherit: true,
        },
    ],
    // Footer download label: parent margin-bottom 16px vs Typography margin-bottom 0
    "footer/download-addon-variant": [
        {
            selector: '[data-testid="download-app-section"] > :first-child',
            property: "marginBottom",
            intended: "16px",
        },
    ],
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
    const results = [];
    for (const probe of probes[route] ?? []) {
        const r = await page.$eval(
            probe.selector,
            (el, p) => {
                // alpha.3 nested the label inside the list; alpha.14 renders it as a
                // sibling referenced by aria-labelledby, so resolve it by id
                if (p.labelOf)
                    el = document.getElementById(
                        el.getAttribute("aria-labelledby")
                    );
                const value = getComputedStyle(el)[p.property];
                let intended = p.intended;
                if (p.intendedVar) {
                    // resolve the design token to a computed colour
                    const t = document.createElement("span");
                    t.style.color = `var(${p.intendedVar})`;
                    el.parentElement.appendChild(t);
                    intended = getComputedStyle(t).color;
                    t.remove();
                } else if (p.intendedInherit) {
                    intended = getComputedStyle(el.parentElement)[p.property];
                }
                return { value, intended };
            },
            probe
        );
        results.push({
            property: probe.property,
            ...r,
            ok: r.value === r.intended,
        });
    }
    if (results.length) result.probes = results;
    console.log(JSON.stringify({ label, route, ...result }));
}
await browser.close();
