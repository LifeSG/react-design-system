// Usage: node compare-shots.mjs <reference dir> <dir ...>
// Pixel-diffs each PNG in every <dir> against the same file in <reference dir>, using
// the PNG decoder and pixelmatch that ship with Playwright. Prints one JSON line per
// image: { dir, image, diffPixels, sizeMismatch }. Threshold 0.1 (pixelmatch default),
// anti-aliasing excluded.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pw = path.resolve("../../../../node_modules/playwright-core/lib");
const { PNG } = require(path.join(pw, "utilsBundle.js"));
const pixelmatch = require(path.join(pw, "third_party/pixelmatch.js"));

const [ref, ...dirs] = process.argv.slice(2);
for (const dir of dirs) {
    for (const image of fs
        .readdirSync(ref)
        .filter((f) => f.endsWith(".png"))
        .sort()) {
        const a = PNG.sync.read(fs.readFileSync(path.join(ref, image)));
        const file = path.join(dir, image);
        if (!fs.existsSync(file)) {
            console.log(JSON.stringify({ dir, image, missing: true }));
            continue;
        }
        const b = PNG.sync.read(fs.readFileSync(file));
        if (a.width !== b.width || a.height !== b.height) {
            console.log(
                JSON.stringify({
                    dir,
                    image,
                    sizeMismatch: `${a.width}x${a.height} vs ${b.width}x${b.height}`,
                })
            );
            continue;
        }
        const diffPixels = pixelmatch(a.data, b.data, null, a.width, a.height, {
            threshold: 0.1,
        });
        console.log(JSON.stringify({ dir, image, diffPixels }));
    }
}
