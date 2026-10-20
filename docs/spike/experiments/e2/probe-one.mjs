// Usage: node probe-one.mjs <port> <route> <probe id>
// Loads one route and prints the probe result plus every rule that sets the probed
// property on the probed element, with its layer path, to explain who wins.
import { chromium } from "../../../../node_modules/playwright/index.mjs";
import { PROBES, runProbes } from "./probes.mjs";

const [port, route, id] = process.argv.slice(2);
const probe = PROBES.find((p) => p.id === id);
const b = await chromium.launch();
const page = await b.newPage();
await page.goto(`http://localhost:${port}/${route}`);
await page.waitForLoadState("networkidle");
const result = (await runProbes(page)).find((r) => r.id === id);
const rules = await page.$eval(
    probe.selector,
    (el, p) => {
        if (p.describedBy)
            el = document.getElementById(
                el.getAttribute("aria-describedby").split(" ").pop()
            ).parentElement;
        const prop = p.property.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
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
                if (
                    r.selectorText &&
                    el.matches(r.selectorText) &&
                    r.style.getPropertyValue(prop)
                )
                    hits.push(
                        `${layers.join(".") || "(unlayered)"}  ${
                            r.selectorText
                        }  ${prop}: ${r.style.getPropertyValue(prop)}`
                    );
            }
        };
        for (const s of document.styleSheets)
            try {
                walk(s.cssRules, []);
            } catch {}
        return { className: el.className, hits };
    },
    probe
);
console.log(JSON.stringify({ route, ...result, ...rules }, null, 1));
await b.close();
