// Usage: node screenshot.mjs <port> <out dir>
// Spike 01 / exit criterion 2: full-page PNG of every static story route and every
// /nav route, hard-loaded. Animations and the caret are disabled so two builds that
// render the same CSS give comparable pixels. Toast's JS animation is waited out.
import fs from "node:fs";
import path from "node:path";

import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, outDir] = process.argv.slice(2);
const routes = [
    ...[
        "tab/default",
        "tab/title-addon",
        "badge/variants",
        "alert/type-variants",
        "button/base-variants",
        "tag/basic",
        "error-display/default",
        "error-display/with-action-button",
        "menu/grid-layout-with-label",
        "timeline/default",
        "toast/with-sublabel",
        "footer/download-addon-variant",
        "input-textarea/standalone-error-message",
    ].map((r) => `components/${r}`),
    ...[
        "errors",
        "menu",
        "timeline",
        "toast",
        "footer",
        "banner",
        "textarea",
        "combo-a",
        "combo-b",
    ].map((r) => `nav/${r}`),
];
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
// Images are remote (assets.life.gov.sg); block them so network timing cannot change pixels.
await page.route(/\.(png|jpe?g|gif|webp|svg)(\?|$)/, (r) =>
    r.request().url().includes("localhost") ? r.continue() : r.abort()
);
for (const route of routes) {
    await page.goto(`http://localhost:${port}/${route}`);
    await page.waitForLoadState("networkidle");
    await page.addStyleTag({
        content:
            "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}",
    });
    // Toast animates with react-spring (a JS transform the CSS override cannot stop),
    // so wait until the page size stops changing before taking the picture.
    let last = "";
    for (let i = 0; i < 20; i++) {
        await page.waitForTimeout(150);
        const size = await page.evaluate(
            () =>
                `${document.documentElement.scrollWidth}x${document.documentElement.scrollHeight}`
        );
        if (size === last) break;
        last = size;
    }
    await page.screenshot({
        path: path.join(outDir, route.replace(/\//g, "__") + ".png"),
        fullPage: true,
    });
}
await browser.close();
console.log(`${routes.length} screenshots in ${outDir}`);
