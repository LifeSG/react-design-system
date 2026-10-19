// Usage: node measure.mjs <port> <label>
// Loads each scenario in headless Chromium and prints one line per scenario:
// <label> <route> <colour> <PASS|FAIL vs expected> [css files in load order]
import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, label] = process.argv.slice(2);
const expected = {
    "with-order": "green",
    "no-order": "red",
    "order-late": "red",
    "no-layers": "red",
    "nested-with-order": "green",
    "nested-no-order": "red",
    "nested-order-late": "red",
};
const colour = { "rgb(0, 128, 0)": "green", "rgb(255, 0, 0)": "red" };

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [route, want] of Object.entries(expected)) {
    await page.goto(`http://localhost:${port}/${route}`);
    const bg = await page.$eval(
        ".target",
        (el) => getComputedStyle(el).backgroundColor
    );
    const got = colour[bg] ?? bg;
    const hrefs = await page.$$eval('link[rel="stylesheet"]', (ls) =>
        ls.map((l) => l.getAttribute("href").split("/").pop())
    );
    console.log(
        `${label} ${route} ${got} ${
            got === want ? "PASS" : "FAIL"
        } [${hrefs.join(", ")}]`
    );
}
await browser.close();
