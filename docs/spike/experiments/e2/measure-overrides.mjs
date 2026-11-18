// Usage: node measure-overrides.mjs <port> <label> [page ...]
// Spike 01 / E9. Hard-loads every /overrides/<mech> page and prints one JSON line per page:
//   { label, page, topOrder, folderRank, tokensLoaded, targets: { <id>: {
//       found, value, reached, rules: [{ layer, selector, name, value, important }] } } }
// topOrder:   top-level cascade layers in order of first appearance (= priority, later wins)
// folderRank: 1-based rank of each target's folder layer inside fds (null if absent);
//             on `flat` the only component layer is fds.all
// reached:    for className / style mechanisms, whether the class or inline style landed
//             on the measured element (null when the page passes neither)
// rules:      every style rule matching the element that sets the property or its
//             shorthand (a shorthand with var() cannot be read back as a longhand),
//             plus the inline style; layer is the dotted layer path or "(unlayered)"
import { chromium } from "../../../../node_modules/playwright/index.mjs";

import { MECHS, TARGETS } from "./overrides-spec.mjs";

const [port, label, ...only] = process.argv.slice(2);
const pages = [
    ...MECHS.map((m) => m.id),
    ...(process.env.EXTRA_PAGES ?? "").split(",").filter(Boolean),
].filter((id) => !only.length || only.includes(id));

const browser = await chromium.launch();
const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    colorScheme: "light",
});
await context.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
const page = await context.newPage();
for (const id of pages) {
    const res = await page.goto(`http://localhost:${port}/overrides/${id}`);
    if (!res || !res.ok()) {
        console.log(
            JSON.stringify({ label, page: id, error: `HTTP ${res?.status()}` })
        );
        continue;
    }
    await page.waitForLoadState("networkidle").catch(() => {});
    await page
        .locator('[data-testid="modal-content"]')
        .waitFor({ state: "attached", timeout: 5000 })
        .catch(() => {});
    await page.waitForTimeout(300);
    const r = await page.evaluate((targets) => {
        const top = [];
        const fds = [];
        const note = (arr, n) => arr.includes(n) || arr.push(n);
        const notePath = (path) => {
            note(top, path[0]);
            if (path[0] === "fds" && path[1]) note(fds, path[1]);
        };
        const walkOrder = (rules, parents) => {
            for (const rule of rules) {
                const type = rule.constructor.name;
                if (type === "CSSLayerStatementRule") {
                    for (const n of rule.nameList)
                        notePath([...parents, ...n.split(".")]);
                } else if (type === "CSSLayerBlockRule") {
                    const path = [
                        ...parents,
                        ...(rule.name ? rule.name.split(".") : ["(anon)"]),
                    ];
                    notePath(path);
                    walkOrder(rule.cssRules, path);
                } else if (rule.cssRules) {
                    walkOrder(rule.cssRules, parents);
                }
            }
        };
        const sheets = [];
        for (const s of document.styleSheets) {
            try {
                sheets.push(s.cssRules);
            } catch {
                /* cross-origin */
            }
        }
        sheets.forEach((rules) => walkOrder(rules, []));

        const props = JSON.parse(
            document.getElementById("ovr-props")?.dataset.props ?? "{}"
        );
        const out = {};
        for (const t of targets) {
            const el = document.querySelector(t.el);
            if (!el) {
                out[t.id] = { found: false };
                continue;
            }
            const short = t.prop.split("-")[0];
            const names = [...new Set([t.prop, short])];
            const rules = [];
            const walk = (list, layers) => {
                for (const r of list) {
                    if (r.constructor.name === "CSSLayerBlockRule") {
                        walk(r.cssRules, [...layers, r.name]);
                        continue;
                    }
                    if (r.cssRules && !r.selectorText) {
                        walk(r.cssRules, layers);
                        continue;
                    }
                    if (!r.selectorText) continue;
                    let hit = false;
                    try {
                        hit = el.matches(r.selectorText);
                    } catch {}
                    if (!hit) continue;
                    for (const name of names) {
                        const v = r.style.getPropertyValue(name);
                        if (v)
                            rules.push({
                                layer: layers.join(".") || "(unlayered)",
                                selector: r.selectorText,
                                name,
                                value: v,
                                important:
                                    r.style.getPropertyPriority(name) ===
                                    "important",
                            });
                    }
                }
            };
            sheets.forEach((list) => walk(list, []));
            for (const name of names) {
                const v = el.style.getPropertyValue(name);
                if (v)
                    rules.push({
                        layer: "(inline)",
                        selector: "style attribute",
                        name,
                        value: v,
                        important:
                            el.style.getPropertyPriority(name) === "important",
                    });
            }
            const cls = props.classes?.[t.id];
            const sty = props.styles?.[t.id];
            out[t.id] = {
                found: true,
                value: getComputedStyle(el).getPropertyValue(t.prop),
                reached: cls
                    ? el.classList.contains(cls)
                    : sty
                    ? !!el.getAttribute("style")
                    : null,
                rules,
            };
        }
        const rank = (f) => (fds.includes(f) ? fds.indexOf(f) + 1 : null);
        return {
            topOrder: top,
            fdsCount: fds.length,
            folderRank: Object.fromEntries(
                [
                    ...new Set([
                        "all",
                        "shared",
                        "typography",
                        ...targets.map((t) => t.folder),
                    ]),
                ].map((f) => [f, rank(f)])
            ),
            tokensLoaded:
                getComputedStyle(document.documentElement)
                    .getPropertyValue("--fds-spacing-64")
                    .trim() || null,
            portalTheme:
                document
                    .querySelector('[data-testid="modal-content"]')
                    ?.closest("[data-fds-theme]")
                    ?.getAttribute("data-fds-theme") ?? null,
            targets: out,
        };
    }, TARGETS);
    console.log(JSON.stringify({ label, page: id, ...r }));
}
await browser.close();
