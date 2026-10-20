// Usage: node measure-nav.mjs <port> <label> <class-map.json>
// Navigation test for /nav/*. Per route: a hard load. Then for every ordered pair
// A -> B: hard-load A, click the link to B (client-side navigation, no reload),
// and probe B. Prints one JSON line per measurement:
//   { label, mode: "hard"|"nav", from, to, order, probes }
import fs from "node:fs";
import { chromium } from "../../../../node_modules/playwright/index.mjs";
import { componentOrder, runProbes } from "./probes.mjs";

const [port, label, mapFile] = process.argv.slice(2);
const classMap = JSON.parse(fs.readFileSync(mapFile, "utf8"));
const ROUTES = [
    "errors",
    "menu",
    "timeline",
    "toast",
    "footer",
    "banner",
    "textarea",
    "combo-a",
    "combo-b",
];
const url = (r) => `http://localhost:${port}/nav/${r}`;

const browser = await chromium.launch();
const page = await browser.newPage();

const settle = async () => {
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(150);
};

const record = async (mode, from, to) => {
    console.log(
        JSON.stringify({
            label,
            mode,
            from,
            to,
            order: await componentOrder(page, classMap),
            probes: await runProbes(page),
        })
    );
};

for (const to of ROUTES) {
    await page.goto(url(to));
    await settle();
    await record("hard", null, to);
}
for (const from of ROUTES) {
    for (const to of ROUTES) {
        if (from === to) continue;
        await page.goto(url(from));
        await settle();
        // dispatch on the element: the fixed smart-app-banner covers the nav links on /nav/banner
        await page.$eval(`a[data-nav="${to}"]`, (a) => a.click());
        await page.waitForURL(url(to));
        await settle();
        await record("nav", from, to);
    }
}
await browser.close();
