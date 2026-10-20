// Usage: node measure-consumer.mjs <port> <label>
// Spike 01 / E6, E7. Hard-loads each /consumer/* scenario and prints one JSON line:
//   { label, scenario, statementFirst, timelineTitle, textareaError, appOverride }
// statementFirst: true if the first rule mentioning a `fds.<folder>` layer is the
//   order statement (`@layer fds.theme,...;`), i.e. the statement reached the page
//   before any component layer. Layer priority follows first appearance.
// timelineTitle: margin-bottom of the Timeline title. Library intends 16px; the
//   app-override scenarios intend 40px (the app's override should win).
// textareaError: margin-top of the Textarea error wrapper. Intended 0px (F10).
import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, label] = process.argv.slice(2);
const SCENARIOS = [
    "theme-first",
    "theme-late",
    "no-theme",
    "app-unlayered",
    "app-layered",
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const scenario of SCENARIOS) {
    await page.goto(`http://localhost:${port}/consumer/${scenario}`);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(150);
    const r = await page.evaluate(() => {
        // Walk all rules in document order and record the order in which each
        // fds.<folder> layer name first appears, from the statement or a nested
        // block. That first appearance is the layer's priority (later wins).
        const seen = [];
        const note = (name) => {
            if (!seen.includes(name)) seen.push(name);
        };
        let first = null;
        const walk = (rules, parents) => {
            for (const rule of rules) {
                const type = rule.constructor.name;
                if (type === "CSSLayerStatementRule") {
                    const names = rule.nameList.filter((n) =>
                        n.startsWith("fds.")
                    );
                    if (names.length && !first) first = "statement";
                    names.forEach(note);
                } else if (type === "CSSLayerBlockRule") {
                    if (parents.includes("fds") && rule.name !== "fds") {
                        if (!first) first = "component:" + rule.name;
                        note("fds." + rule.name);
                    }
                    walk(rule.cssRules, [...parents, rule.name]);
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
        const effective = {
            // true = parent's layer later = parent wins
            timelineOverTypography: at("timeline") > at("typography"),
            textareaOverForm: at("input-textarea") > at("form"),
            positions: Object.fromEntries(
                ["typography", "timeline", "form", "input-textarea"].map(
                    (n) => [n, at(n) + 1]
                )
            ),
        };
        const title = document.querySelector('[data-testid="timeline-title"]');
        const ta = document.querySelector(
            'textarea[data-testid="textarea-error-message"]'
        );
        const err =
            ta &&
            document.getElementById(
                ta.getAttribute("aria-describedby").split(" ").pop()
            ).parentElement;
        return {
            firstLayerSeen: first,
            effective,
            statementFirst: first === "statement",
            timelineTitle: title && getComputedStyle(title).marginBottom,
            textareaError: err && getComputedStyle(err).marginTop,
        };
    });
    console.log(JSON.stringify({ label, scenario, ...r }));
}
await browser.close();
