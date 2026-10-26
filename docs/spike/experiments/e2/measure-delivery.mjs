// Usage: node measure-delivery.mjs <port> <label>
// Spike 01 / theme delivery. For each /delivery/* route prints one JSON line:
//   { label, route, step, statementFirst, firstComponentLayer, timeline, textarea,
//     timelineLayerWins, textareaLayerWins, statements, swatch }
// statementFirst / firstComponentLayer: does the order statement appear before any
//   fds.<folder> block in document order (layer priority follows first appearance).
// *LayerWins: whether the parent's layer ranks after the child's, as the page sees it.
// statements: how many `@layer fds.*,...;` statements the page has (many-themes).
// swatch: computed colour of var(--fds-colour-primary-50), to show the theme in force.
// runtime-switch is measured twice: before and after clicking the switch button.
import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, label] = process.argv.slice(2);
const ROUTES = [
    "cdn-link",
    "many-themes",
    "runtime-switch",
    "nested-layout/inner",
];

const measure = () => {
    const seen = [];
    let first = null;
    let statements = 0;
    const blocks = [];
    const note = (n) => {
        if (!seen.includes(n)) seen.push(n);
    };
    const walk = (rules, parents) => {
        for (const rule of rules) {
            const type = rule.constructor.name;
            if (type === "CSSLayerStatementRule") {
                const names = rule.nameList.filter((n) => n.startsWith("fds."));
                if (names.length) {
                    statements++;
                    if (!first) first = "statement";
                }
                names.forEach(note);
            } else if (type === "CSSLayerBlockRule") {
                if (parents.includes("fds") && rule.name !== "fds") {
                    if (!first) first = "component:" + rule.name;
                    note("fds." + rule.name);
                    if (!blocks.includes("fds." + rule.name))
                        blocks.push("fds." + rule.name);
                }
                walk(rule.cssRules, [...parents, rule.name]);
            } else if (rule.cssRules) {
                walk(rule.cssRules, parents);
            }
        }
    };
    for (const s of document.styleSheets) {
        try {
            walk(s.cssRules, []);
        } catch {
            /* cross-origin */
        }
    }
    const at = (n) => seen.indexOf("fds." + n);
    // Drift: of the fds.<folder> layers that have rules on this page, how many pairs
    // rank in a different relative order than the declared order statement says.
    // 0 = the page gets exactly the declared order; >0 = load order took over.
    let declared = [];
    const findStatement = (rules) => {
        for (const r of rules) {
            if (declared.length) return;
            if (
                r.constructor.name === "CSSLayerStatementRule" &&
                r.nameList.some((n) => n.startsWith("fds.") && n !== "fds")
            )
                declared = r.nameList;
            else if (r.cssRules) findStatement(r.cssRules);
        }
    };
    for (const s of document.styleSheets) {
        try {
            findStatement(s.cssRules);
        } catch {}
    }
    const present = blocks.filter((n) => declared.includes(n));
    let pairs = 0,
        drift = 0;
    for (let i = 0; i < present.length; i++)
        for (let j = i + 1; j < present.length; j++) {
            pairs++;
            const a = present[i],
                b = present[j];
            if (
                Math.sign(seen.indexOf(a) - seen.indexOf(b)) !==
                Math.sign(declared.indexOf(a) - declared.indexOf(b))
            )
                drift++;
        }
    const title = document.querySelector('[data-testid="timeline-title"]');
    const ta = document.querySelector(
        'textarea[data-testid="textarea-error-message"]'
    );
    const err =
        ta &&
        document.getElementById(
            ta.getAttribute("aria-describedby").split(" ").pop()
        ).parentElement;
    const swatch = document.querySelector('[data-testid="primary-swatch"]');
    return {
        statementFirst: first === "statement",
        firstComponentLayer: first,
        statements,
        drift: declared.length ? `${drift}/${pairs}` : "no statement",
        timeline: title && getComputedStyle(title).marginBottom,
        textarea: err && getComputedStyle(err).marginTop,
        timelineLayerWins: at("timeline") > at("typography"),
        textareaLayerWins: at("input-textarea") > at("form"),
        swatch: swatch && getComputedStyle(swatch).color,
        theme:
            document
                .querySelector("[data-fds-theme]")
                ?.getAttribute("data-fds-theme") ?? null,
    };
};

const browser = await chromium.launch();
const page = await browser.newPage();
for (const route of ROUTES) {
    await page.goto(`http://localhost:${port}/delivery/${route}`);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(200);
    console.log(
        JSON.stringify({
            label,
            route,
            step: "load",
            ...(await page.evaluate(measure)),
        })
    );
    if (route === "runtime-switch") {
        await page.click('[data-testid="switch-theme"]');
        await page.waitForTimeout(300);
        console.log(
            JSON.stringify({
                label,
                route,
                step: "after switch",
                ...(await page.evaluate(measure)),
            })
        );
    }
}
await browser.close();
