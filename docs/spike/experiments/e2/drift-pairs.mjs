// Usage: node drift-pairs.mjs <route ...>   (server on :4200)
// Spike 01 / theme delivery: lists the layer pairs on each /delivery/<route> that rank
// differently from the declared order statement, and flags those that are style edges
// (a parent that should beat its child now loses). Edge pairs come from
// results/style-edge-pairs.json, written at the repo root from rollup/add-css-layer-plugin.js.
import fs from "node:fs";

import { chromium } from "../../../../node_modules/playwright/index.mjs";

const edgeSet = new Set(
    JSON.parse(fs.readFileSync("results/style-edge-pairs.json", "utf8"))
);
const b = await chromium.launch();
const p = await b.newPage();
for (const route of process.argv.slice(2)) {
    await p.goto(`http://localhost:4200/delivery/${route}`);
    await p.waitForLoadState("networkidle");
    await p.waitForTimeout(200); // same settle time as measure-delivery.mjs
    const { seen, blocks, declared } = await p.evaluate(() => {
        const seen = [],
            blocks = [];
        let declared = [];
        const walk = (rules, parents) => {
            for (const r of rules) {
                const t = r.constructor.name;
                if (t === "CSSLayerStatementRule") {
                    const n = r.nameList.filter((x) => x.startsWith("fds."));
                    if (n.length && !declared.length) declared = r.nameList;
                    n.forEach((x) => seen.includes(x) || seen.push(x));
                } else if (t === "CSSLayerBlockRule") {
                    if (parents.includes("fds") && r.name !== "fds") {
                        const x = "fds." + r.name;
                        seen.includes(x) || seen.push(x);
                        blocks.includes(x) || blocks.push(x);
                    }
                    walk(r.cssRules, [...parents, r.name]);
                } else if (r.cssRules) walk(r.cssRules, parents);
            }
        };
        for (const s of document.styleSheets) {
            try {
                walk(s.cssRules, []);
            } catch {}
        }
        return { seen, blocks, declared };
    });
    const present = blocks
        .filter((n) => declared.includes(n))
        .map((n) => n.slice(4));
    const out = [];
    for (let i = 0; i < present.length; i++)
        for (let j = i + 1; j < present.length; j++) {
            const a = present[i],
                c = present[j];
            const eff = seen.indexOf("fds." + a) - seen.indexOf("fds." + c),
                dec =
                    declared.indexOf("fds." + a) - declared.indexOf("fds." + c);
            if (Math.sign(eff) !== Math.sign(dec)) {
                const hi = dec > 0 ? a : c,
                    lo = dec > 0 ? c : a; // declared: hi beats lo
                const edge = edgeSet.has(`${hi}>${lo}`)
                    ? `  STYLE EDGE ${hi} -> ${lo}: parent now LOSES`
                    : "";
                out.push(`${hi} should beat ${lo}, now loses${edge}`);
            }
        }
    console.log(
        `== ${route}: declared statement ${
            declared.length
                ? "found (" + declared.length + " names)"
                : "NOT FOUND"
        }; ${
            out.length
        } drifted pairs; layers on page in effective order: ${seen
            .filter((n) => blocks.includes(n))
            .map((n) => n.slice(4))
            .join(" > ")}`
    );
    out.forEach((o) => console.log("   " + o));
}
await b.close();
