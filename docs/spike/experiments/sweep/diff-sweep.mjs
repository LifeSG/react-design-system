// Usage: node diff-sweep.mjs <reference lib> <lib> > results-<ref>-vs-<lib>.jsonl
// Pixel-diffs every screenshot of <lib> against <reference lib> in the same mode
// (light/dark x desktop/mobile). One JSON line per image:
//   { mode, image, diffPixels | sizeMismatch | missing }
// PNG decoder and pixelmatch ship with Playwright; threshold 0.1, anti-aliasing excluded.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pw = path.resolve("../../../../node_modules/playwright-core/lib");
const { PNG } = require(path.join(pw, "utilsBundle.js"));
const pixelmatch = require(path.join(pw, "third_party/pixelmatch.js"));

const [ref, lib] = process.argv.slice(2);
for (const mode of fs.readdirSync(path.join("shots", ref)).sort()) {
    for (const image of fs
        .readdirSync(path.join("shots", ref, mode))
        .filter((f) => f.endsWith(".png"))
        .sort()) {
        const b = path.join("shots", lib, mode, image);
        if (!fs.existsSync(b)) {
            console.log(JSON.stringify({ mode, image, missing: true }));
            continue;
        }
        const x = PNG.sync.read(
            fs.readFileSync(path.join("shots", ref, mode, image))
        );
        const y = PNG.sync.read(fs.readFileSync(b));
        if (x.width !== y.width || x.height !== y.height) {
            console.log(
                JSON.stringify({
                    mode,
                    image,
                    sizeMismatch: `${x.width}x${x.height} vs ${y.width}x${y.height}`,
                })
            );
            continue;
        }
        console.log(
            JSON.stringify({
                mode,
                image,
                diffPixels: pixelmatch(
                    x.data,
                    y.data,
                    null,
                    x.width,
                    x.height,
                    { threshold: 0.1 }
                ),
            })
        );
    }
}
