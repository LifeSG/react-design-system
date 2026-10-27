// Usage: node sweep-shots.mjs <port> <out dir> [colorScheme=light|dark] [viewport=desktop|mobile] [concurrency=4]
// Spike 01 / visual sweep: full-page screenshot of every story page in
// e2e/nextjs-app (/components/<component>/<story>), with the date pinned the way the
// repo's Playwright specs pin it. Remote assets are blocked and animations disabled (Playwright's option) so
// two builds with the same CSS give comparable pixels. Writes <out dir>/<component>__<story>.png
// and <out dir>/_failures.json for pages that did not render.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "../../../../node_modules/playwright/index.mjs";

const [port, outDir, scheme = "light", vp = "desktop", conc = "4"] =
    process.argv.slice(2);
const here = path.dirname(fileURLToPath(import.meta.url));
const storiesDir = path.resolve(
    here,
    "../../../../e2e/nextjs-app/src/app/components"
);
const viewport = {
    desktop: { width: 1280, height: 720 },
    mobile: { width: 375, height: 812 },
}[vp];
const NOW = "2026-04-08T12:00:00.000Z"; // e2e/tests/consts.ts fixedTimestamp

const stories = fs
    .readdirSync(storiesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("["))
    .flatMap((d) =>
        fs
            .readdirSync(path.join(storiesDir, d.name))
            .filter((f) => f.endsWith(".e2e.tsx"))
            .map((f) => ({
                component: d.name,
                story: f.replace(/\.e2e\.tsx$/, ""),
            }))
    )
    .sort((a, b) =>
        (a.component + a.story).localeCompare(b.component + b.story)
    )
    // STORIES_FILE: optional list of <component>/<story>, one per line (repeat-check.sh)
    .filter((s, _, all) => {
        if (!process.env.STORIES_FILE) return true;
        const only = fs
            .readFileSync(process.env.STORIES_FILE, "utf8")
            .split("\n")
            .filter(Boolean);
        return only.includes(`${s.component}/${s.story}`);
    });

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const failures = [];
let next = 0;

async function worker() {
    const context = await browser.newContext({ viewport, colorScheme: scheme });
    await context.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
    const page = await context.newPage();
    while (next < stories.length) {
        const { component, story } = stories[next++];
        const file = path.join(outDir, `${component}__${story}.png`);
        try {
            await page.goto(
                `http://localhost:${port}/components/${component}/${story}?now=${encodeURIComponent(
                    NOW
                )}`,
                { timeout: 30000 }
            );
            await page
                .locator('[data-testid="story-layout"]')
                .waitFor({ state: "visible", timeout: 15000 });
            await page
                .waitForLoadState("networkidle", { timeout: 15000 })
                .catch(() => {});
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
            // the app sends a nonce CSP, so no injected <style>; Playwright's own option instead
            await page.screenshot({
                path: file,
                fullPage: true,
                animations: "disabled",
                caret: "hide",
            });
        } catch (e) {
            failures.push({
                component,
                story,
                error: String(e).split("\n")[0].slice(0, 160),
            });
        }
    }
    await context.close();
}
await Promise.all(Array.from({ length: Number(conc) }, worker));
await browser.close();
fs.writeFileSync(
    path.join(outDir, "_failures.json"),
    JSON.stringify(failures, null, 1)
);
console.log(
    `${stories.length - failures.length}/${
        stories.length
    } screenshots in ${outDir}, ${failures.length} failed`
);
