// Spike 01 / E8 (Q6): `depth` tiers from the full edge set (static + runtime), written to
// ../final/libs/depth-full. Same tier rule as docs/spike/scripts/tier-layers.mjs depth (a
// folder's tier is the longest chain of styled children below it), with the runtime edges
// from analyse.mjs added. Works on a copy of ../final/libs/styleedge (which equals the
// styleedge build in dist/), so dist/ and ../final/libs/depth stay as they are.
// Usage: node depth-full.mjs results/full [report]   (report: print tiers, write nothing)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const [dir, mode] = process.argv.slice(2);
const statics = JSON.parse(
    fs.readFileSync(path.join(here, "static.json"), "utf8")
);
const analysis = JSON.parse(
    fs.readFileSync(path.join(dir, "analysis.json"), "utf8")
);
const { order } = statics;

const kids = new Map(order.map((f) => [f, new Set()]));
const add = (p, c) =>
    kids.has(p) && kids.has(c) && p !== c && kids.get(p).add(c);
for (const e of statics.edges) if (!e.exempt) add(e.parent, e.child);
const added = [];
for (const m of analysis.q1.missing)
    if (m.direction) {
        const [p, c] = m.direction.split("->");
        add(p, c);
        added.push(m.direction);
    }
const unresolved = analysis.q1.missing
    .filter((m) => !m.direction)
    .map((m) => m.folders.join(" ~ "));

const depth = new Map();
const visiting = new Set();
const tierOf = (f) => {
    if (depth.has(f)) return depth.get(f);
    if (visiting.has(f))
        throw new Error(`cycle through ${f}: no depth tiering exists`);
    visiting.add(f);
    const d = Math.max(-1, ...[...kids.get(f)].map(tierOf)) + 1;
    visiting.delete(f);
    depth.set(f, d);
    return d;
};
order.forEach(tierOf);
const tiers = [...new Set(depth.values())]
    .sort((a, b) => a - b)
    .map((t) => `t${t}`);
const sizes = tiers.map(
    (t) => [...depth.values()].filter((d) => `t${d}` === t).length
);
const moved = order
    .filter((f) => depth.get(f) !== statics.depth[f])
    .map((f) => `${f} t${statics.depth[f]}->t${depth.get(f)}`);
const inside = analysis.q1.missing.filter(
    (m) => !m.direction && depth.get(m.folders[0]) === depth.get(m.folders[1])
);
console.log(
    `depth-full: ${tiers.length} tiers (${sizes.join(
        ", "
    )} folders); runtime edges added ${added.length} (${added.join(", ")})`
);
console.log(`moved against depth: ${moved.length ? moved.join(", ") : "none"}`);
console.log(
    `unresolved runtime edges (no direction, not ordered): ${
        unresolved.length ? unresolved.join("; ") : "none"
    }; of which inside one tier: ${
        inside.length
            ? inside.map((m) => m.folders.join(" ~ ")).join("; ")
            : "none"
    }`
);
fs.writeFileSync(
    path.join(dir, "depth-full.json"),
    JSON.stringify(
        { tiers: Object.fromEntries(depth), added, unresolved, moved },
        null,
        1
    )
);
if (mode === "report") process.exit(0);

const src = path.join(here, "../final/libs/styleedge");
const dst = path.join(here, "../final/libs/depth-full");
fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true });
const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        return e.isDirectory() ? walk(f) : f.endsWith(".css") ? [f] : [];
    });
let blocks = 0,
    statements = 0;
const unknown = new Set();
for (const file of walk(dst)) {
    const css = fs.readFileSync(file, "utf8");
    let next = css.replace(
        /@layer fds\{@layer ([a-z0-9-]+)\{/g,
        (m, folder) => {
            if (!depth.has(folder)) {
                unknown.add(folder);
                return m;
            }
            blocks++;
            return `@layer fds{@layer t${depth.get(folder)}{`;
        }
    );
    next = next.replace(/^@layer fds\.theme[\w.,-]*;/m, () => {
        statements++;
        return `@layer ${tiers.map((t) => "fds." + t).join(",")};`;
    });
    if (next !== css) fs.writeFileSync(file, next);
}
if (unknown.size)
    throw new Error(
        `layers not in the generated order: ${[...unknown].join(", ")}`
    );
console.log(
    `wrote ${path.relative(
        process.cwd(),
        dst
    )}: ${blocks} folder layer blocks and ${statements} order statements rewritten`
);
