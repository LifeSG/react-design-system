// Usage: node analyse-shots.mjs > results/shots.jsonl
// Spike 01 / exit criterion 2: pixel diffs of the run-final.sh screenshots.
//   stability: every build of a library x combination against that cell's build1
//   vs-flat:   every library's build1 against `flat` build1, same combination
// flat has the branch's component source and a single layer, so a difference against
// flat is caused by layering alone (published also differs in component code).
// Uses the PNG decoder and pixelmatch that ship with Playwright; threshold 0.1.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pw = path.resolve("../../../../node_modules/playwright-core/lib");
const { PNG } = require(path.join(pw, "utilsBundle.js"));
const pixelmatch = require(path.join(pw, "third_party/pixelmatch.js"));

const cache = new Map();
const read = (f) => {
    if (!cache.has(f)) {
        if (cache.size > 400) cache.clear();
        cache.set(f, PNG.sync.read(fs.readFileSync(f)));
    }
    return cache.get(f);
};
const diff = (a, b) => {
    if (!fs.existsSync(b)) return { missing: true };
    const x = read(a),
        y = read(b);
    if (x.width !== y.width || x.height !== y.height)
        return {
            sizeMismatch: `${x.width}x${x.height} vs ${y.width}x${y.height}`,
        };
    return {
        diffPixels: pixelmatch(x.data, y.data, null, x.width, x.height, {
            threshold: 0.1,
        }),
    };
};

const libs = fs.readdirSync("shots").sort();
const combos = fs.readdirSync(path.join("shots", libs[0])).sort();
const images = fs
    .readdirSync(path.join("shots", libs[0], combos[0], "build1"))
    .filter((f) => f.endsWith(".png"))
    .sort();
for (const lib of libs)
    for (const combo of combos) {
        const base = path.join("shots", lib, combo, "build1");
        for (const build of fs
            .readdirSync(path.join("shots", lib, combo))
            .filter((b) => b !== "build1")
            .sort())
            for (const image of images)
                console.log(
                    JSON.stringify({
                        kind: "stability",
                        lib,
                        combo,
                        build,
                        image,
                        ...diff(
                            path.join(base, image),
                            path.join("shots", lib, combo, build, image)
                        ),
                    })
                );
        if (lib !== "flat")
            for (const image of images)
                console.log(
                    JSON.stringify({
                        kind: "vs-flat",
                        lib,
                        combo,
                        image,
                        ...diff(
                            path.join("shots", "flat", combo, "build1", image),
                            path.join(base, image)
                        ),
                    })
                );
    }
