// Spike 01 / E8 (Q6): every computed property of every element under <body> (and its
// ::before/::after), for diffing two library builds when sweep/style-dump.mjs's 20
// properties show nothing. Same page setup as sweep-shots.mjs.
// Usage: node full-style-dump.mjs <port> <out.json> <desktop|mobile> <component/story ...>
//        node full-style-dump.mjs --diff <a.json> <b.json>
import fs from "node:fs";

import { chromium } from "../../../../node_modules/playwright/index.mjs";

if (process.argv[2] === "--diff") {
    const [a, b] = process.argv
        .slice(3)
        .map((f) => JSON.parse(fs.readFileSync(f, "utf8")));
    for (const s of Object.keys(a))
        for (const k of Object.keys(a[s])) {
            const x = a[s][k],
                y = b[s]?.[k];
            if (!y) {
                console.log(`${s} ${k}: missing in second`);
                continue;
            }
            const d = Object.keys(x).filter((p) => x[p] !== y[p]);
            if (d.length)
                console.log(
                    `${s} ${k}\n    ${d
                        .map((p) => `${p}: ${x[p]} -> ${y[p]}`)
                        .join("\n    ")}`
                );
        }
    process.exit(0);
}

const [port, out, vp, ...stories] = process.argv.slice(2);
const viewport = {
    desktop: { width: 1280, height: 720 },
    mobile: { width: 375, height: 812 },
}[vp];
const browser = await chromium.launch();
const context = await browser.newContext({ viewport, colorScheme: "light" });
await context.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
const page = await context.newPage();
const result = {};
for (const s of stories) {
    await page.goto(
        `http://localhost:${port}/components/${s}?now=${encodeURIComponent(
            "2026-04-08T12:00:00.000Z"
        )}`
    );
    await page
        .locator('[data-testid="story-layout"]')
        .waitFor({ state: "visible", timeout: 15000 });
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.waitForTimeout(600);
    result[s] = await page.evaluate(() => {
        const out = {};
        const dump = (cs) => {
            const o = {};
            for (let i = 0; i < cs.length; i++)
                o[cs[i]] = cs.getPropertyValue(cs[i]);
            return o;
        };
        const walk = (el, path) => {
            const cls = [...el.classList].join(".");
            const key = `${path}/${el.tagName.toLowerCase()}${
                cls ? "." + cls : ""
            }`;
            out[key] = dump(getComputedStyle(el));
            for (const pe of ["::before", "::after"]) {
                const cs = getComputedStyle(el, pe);
                if (cs.content && cs.content !== "none")
                    out[key + pe] = dump(cs);
            }
            [...el.children].forEach((c, i) => walk(c, `${key}[${i}]`));
        };
        walk(document.body, "");
        return out;
    });
}
await browser.close();
fs.writeFileSync(out, JSON.stringify(result));
console.log(
    `${out}: ${stories.length} stories, ${Object.values(result).reduce(
        (n, r) => n + Object.keys(r).length,
        0
    )} elements`
);
