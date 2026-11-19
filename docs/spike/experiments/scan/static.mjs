// Spike 01 / E8: everything the runtime check compares against, from source, in one file.
// Usage (repo root): node docs/spike/experiments/scan/static.mjs   -> scan/static.json
//   order        the generated per-folder layer order (= the `styleedge` build)
//   depth        each folder's tier in `depth` (same formula as tier-layers.mjs depth)
//   edges        every static style edge from getStyleEdges, with `exempt` for NOT_COLLIDING
//   importDeps   folder -> folders it imports (madge over all of src/, not only from
//                src/index.ts, so subpath-only folders like schedule and local-nav are in)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import madge from "madge";

import { getCssLayerOrder } from "../../../../rollup/add-css-layer-plugin.js";
import { getStyleEdges } from "../../../../rollup/style-edges.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../../../..");
process.chdir(root);

const { order, edges: kept } = await getCssLayerOrder();
const keptKey = new Set(
    kept.map((e) => `${e.parent}|${e.child}|${e.file}|${e.via}`)
);
const edges = getStyleEdges("src").map((e) => ({
    ...e,
    exempt: !keptKey.has(`${e.parent}|${e.child}|${e.file}|${e.via}`),
}));

// tier-layers.mjs depth, verbatim logic: depth over the kept edges, in generated order
const kids = new Map(order.map((f) => [f, new Set()]));
for (const e of kept)
    if (kids.has(e.parent) && kids.has(e.child) && e.parent !== e.child)
        kids.get(e.parent).add(e.child);
const depth = {};
for (const f of order)
    depth[f] = Math.max(-1, ...[...kids.get(f)].map((c) => depth[c])) + 1;

// The built styleedge order statement must equal the generated order, or the libs are stale
const built = fs
    .readFileSync(
        path.join(here, "../final/libs/styleedge/theme/styles/lifesg.css"),
        "utf8"
    )
    .split("\n")[1]
    .replace(/^@layer |;$/g, "")
    .split(",")
    .map((n) => n.replace(/^fds\./, ""));
if (built.join(",") !== order.join(","))
    throw new Error("final/libs/styleedge order statement != generated order");

const graph = (
    await madge("src", {
        fileExtensions: ["ts", "tsx"],
        excludeRegExp: [/\.(test|spec|stories)\./, /__mocks__/],
    })
).obj();
const importDeps = {};
for (const [file, deps] of Object.entries(graph)) {
    const from = file.split("/")[0];
    for (const d of deps) {
        const to = d.split("/")[0];
        if (to === from || !d.includes("/")) continue;
        (importDeps[from] ??= new Set()).add(to);
    }
}

const out = {
    order,
    depth,
    edges,
    importDeps: Object.fromEntries(
        Object.entries(importDeps)
            .sort()
            .map(([k, v]) => [k, [...v].sort()])
    ),
};
// Rewrite only when the content changes, so a scan run leaves git clean
const file = path.join(here, "static.json");
const before = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : null;
if (before) delete before.generated;
if (JSON.stringify(before) !== JSON.stringify(out))
    fs.writeFileSync(file, JSON.stringify(out, null, 1));
const tiers = {};
for (const t of Object.values(depth)) tiers[t] = (tiers[t] ?? 0) + 1;
console.log(
    `order ${
        order.length
    } folders (matches final/libs/styleedge); depth tiers ${JSON.stringify(
        tiers
    )}; static edges ${edges.length} (${
        edges.filter((e) => e.exempt).length
    } exempt), ${
        new Set(edges.map((e) => `${e.parent}->${e.child}`)).size
    } folder pairs; import graph ${Object.keys(importDeps).length} folders`
);
