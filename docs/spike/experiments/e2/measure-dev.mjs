// Usage: node measure-dev.mjs <port> <label> <class-map.json>
// Hard-loads every /nav route plus the static timeline and footer pages in dev mode
// and prints one JSON line each: { label, to, order, probes }.
import fs from "node:fs";
import { chromium } from "../../../../node_modules/playwright/index.mjs";
import { componentOrder, runProbes } from "./probes.mjs";

const [port, label, mapFile] = process.argv.slice(2);
const classMap = JSON.parse(fs.readFileSync(mapFile, "utf8"));
const paths = [
    ...[
        "errors",
        "menu",
        "timeline",
        "toast",
        "footer",
        "banner",
        "combo-a",
        "combo-b",
    ].map((r) => `nav/${r}`),
    "components/timeline/default",
    "components/footer/download-addon-variant",
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const path of paths) {
    // the first request compiles the route, so give it time and reload once
    await page.goto(`http://localhost:${port}/${path}`, { timeout: 120000 });
    await page.waitForLoadState("networkidle");
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(300);
    console.log(
        JSON.stringify({
            label,
            to: path,
            order: await componentOrder(page, classMap),
            probes: await runProbes(page),
        })
    );
}
await browser.close();
