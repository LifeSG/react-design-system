// Usage: node rule-trace.mjs <port> <component/story> <class> <css property> [more: <class> <property> ...]
// For the element with <class> (or <class>@<n> for the nth match) on the story page, lists every rule that sets <property>
// on it, with its layer path and selector, in source order, and the computed value.
import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, story, ...pairs] = process.argv.slice(2);
const browser = await chromium.launch();
const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    colorScheme: "light",
});
await context.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
const page = await context.newPage();
await page.goto(
    `http://localhost:${port}/components/${story}?now=${encodeURIComponent(
        "2026-04-08T12:00:00.000Z"
    )}`
);
await page
    .locator('[data-testid="story-layout"]')
    .waitFor({ state: "visible" });
await page.waitForLoadState("networkidle").catch(() => {});
await page.waitForTimeout(500);
for (let i = 0; i < pairs.length; i += 2) {
    const [clsSpec, prop] = [pairs[i], pairs[i + 1]];
    const [cls, nth = "0"] = clsSpec.split("@");
    const out = await page.evaluate(
        ([cls, nth, prop]) => {
            const el = document.querySelectorAll("." + cls)[Number(nth)];
            if (!el) return { missing: true };
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
                    // a shorthand containing var() cannot be read back as a longhand, so also look for it
                    const short = prop.split("-")[0];
                    if (!r.selectorText || !el.matches(r.selectorText))
                        continue;
                    for (const name of new Set([prop, short])) {
                        const v = r.style.getPropertyValue(name);
                        if (v)
                            hits.push(
                                `${layers.join(".") || "(unlayered)"}  ${
                                    r.selectorText
                                }  ${name}: ${v}`
                            );
                    }
                }
            };
            for (const s of document.styleSheets) {
                try {
                    walk(s.cssRules, []);
                } catch {}
            }
            return {
                computed: getComputedStyle(el).getPropertyValue(prop),
                hits,
            };
        },
        [cls, nth, prop]
    );
    console.log(
        `  .${clsSpec} ${prop}: computed ${
            out.missing ? "(element not found)" : out.computed
        }`
    );
    (out.hits ?? []).forEach((h) => console.log("     " + h));
}
await browser.close();
