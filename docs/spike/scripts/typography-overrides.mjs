// Spike 01 / E1-lite: find components that pass a className to Typography.* where
// that class sets a property Typography's own classes also set. These are the
// parent-overrides-child pairs whose winner depends on CSS order.
// Run from anywhere: node docs/spike/scripts/typography-overrides.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../.."
);
const src = path.join(root, "src");
// Properties Typography's own classes set (typography.styles.ts + text/weight maps)
const CHILD_PROPS = [
    "margin-bottom",
    "display",
    "font-family",
    "font-size",
    "font-weight",
    "line-height",
    "letter-spacing",
    "color",
];
const MARGIN_SHORTHAND = /^margin:/; // margin: sets margin-bottom too

const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        return e.isDirectory() ? walk(f) : [f];
    });

// className -> declared properties, per styles file (css`` blocks)
const propsByClass = (file) => {
    const text = fs.readFileSync(file, "utf8");
    const out = {};
    for (const m of text.matchAll(/export const (\w+) = css`([\s\S]*?)`;/g)) {
        const props = new Set();
        for (const p of m[2].matchAll(/^\s*([a-z-]+)\s*:/gm)) props.add(p[1]);
        if (/^\s*margin\s*:/m.test(m[2])) props.add("margin-bottom");
        if (/\$\{\s*Font\[/.test(m[2])) {
            props.add("font-size");
            props.add("font-weight");
            props.add("line-height");
            props.add("font-family");
        }
        out[m[1]] = props;
    }
    return out;
};

const hits = [];
for (const file of walk(src)) {
    if (!/\.tsx$/.test(file) || /\.(test|spec|stories)\./.test(file)) continue;
    const dir = path.dirname(file);
    const code = fs.readFileSync(file, "utf8");
    if (!/<Typography\./.test(code)) continue;
    const styleFiles = fs
        .readdirSync(dir)
        .filter((n) => /\.styles?\.ts$/.test(n));
    const classes = Object.assign(
        {},
        ...styleFiles.map((n) => propsByClass(path.join(dir, n)))
    );
    for (const m of code.matchAll(/<Typography\.(\w+)([^>]*?)>/gs)) {
        for (const c of m[2].matchAll(/className=\{(?:[\w]+\.)?(\w+)\}/g)) {
            const set = classes[c[1]];
            if (!set) continue;
            const collide = CHILD_PROPS.filter((p) => set.has(p));
            if (collide.length)
                hits.push(
                    `${path.relative(src, file)}  Typography.${m[1]}  .${
                        c[1]
                    }  collides on: ${collide.join(", ")}`
                );
        }
    }
}
console.log(`${hits.length} parent-overrides-Typography pairs`);
for (const h of hits) console.log("  " + h);
