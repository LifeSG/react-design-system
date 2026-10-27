// Usage: node style-dump.mjs <port> <out.json> <viewport desktop|mobile> <component/story ...>
// Dumps the computed style of every element under <body> on each story page, keyed by a path built from
// tag + class + position, so two library builds can be compared property by property.
import fs from "node:fs";
import { chromium } from "../../../../node_modules/playwright/index.mjs";

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
        const props = [
            "width",
            "height",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "font-size",
            "font-weight",
            "line-height",
            "color",
            "background-color",
            "display",
            "gap",
            "border-top-width",
            "flex-shrink",
            "flex-grow",
        ];
        const out = {};
        const walk = (el, path) => {
            const cs = getComputedStyle(el);
            const cls = (el.getAttribute("class") || "").split(" ")[0];
            const key = `${path}/${el.tagName.toLowerCase()}${
                cls ? "." + cls : ""
            }`;
            out[key] = Object.fromEntries(
                props.map((p) => [p, cs.getPropertyValue(p)])
            );
            [...el.children].forEach((c, i) => walk(c, `${key}[${i}]`));
        };
        // body, not the story layout: modals, popovers and toasts render in portals outside it
        walk(document.body, "");
        return out;
    });
}
fs.writeFileSync(out, JSON.stringify(result));
await browser.close();
