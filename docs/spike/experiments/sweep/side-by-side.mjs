// Usage: node side-by-side.mjs <mode> <image> <libA> <libB> <out.png>
// Writes libA | libB | diff (pixelmatch highlight) as one PNG, cropped to the rows that differ.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pw = path.resolve("../../../../node_modules/playwright-core/lib");
const { PNG } = require(path.join(pw, "utilsBundle.js"));
const pixelmatch = require(path.join(pw, "third_party/pixelmatch.js"));
const [mode, image, a, b, out] = process.argv.slice(2);
const A = PNG.sync.read(fs.readFileSync(`shots/${a}/${mode}/${image}`));
const B = PNG.sync.read(fs.readFileSync(`shots/${b}/${mode}/${image}`));
const w = Math.min(A.width, B.width),
    h = Math.min(A.height, B.height);
const crop = (p) => {
    const o = new PNG({ width: w, height: h });
    PNG.bitblt(p, o, 0, 0, w, h, 0, 0);
    return o;
};
const ca = crop(A),
    cb = crop(B),
    d = new PNG({ width: w, height: h });
pixelmatch(ca.data, cb.data, d.data, w, h, { threshold: 0.1 });
let top = h,
    bot = 0;
for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        if (d.data[i] === 255 && d.data[i + 1] === 0 && d.data[i + 2] === 0) {
            top = Math.min(top, y);
            bot = Math.max(bot, y);
        }
    }
top = Math.max(0, top - 20);
bot = Math.min(h, bot + 20);
const H = Math.max(40, bot - top),
    gap = 8;
const o = new PNG({ width: w * 3 + gap * 2, height: H });
o.data.fill(200);
PNG.bitblt(ca, o, 0, top, w, H, 0, 0);
PNG.bitblt(cb, o, 0, top, w, H, w + gap, 0);
PNG.bitblt(d, o, 0, top, w, H, 2 * (w + gap), 0);
fs.writeFileSync(out, PNG.sync.write(o));
console.log(
    `${image} ${mode}: ${A.width}x${A.height} vs ${B.width}x${B.height}, rows ${top}-${bot} -> ${out}`
);
