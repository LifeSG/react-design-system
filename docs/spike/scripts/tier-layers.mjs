// Spike 01 / E4: collapse the per-folder `fds.<folder>` layers in the built dist/ into
// coarse tiers, to compare granularity against the same app and probes.
// Usage (repo root, after `npm run build`):
//   node docs/spike/scripts/tier-layers.mjs depth   4 tiers by style-edge depth
//   node docs/spike/scripts/tier-layers.mjs naive   2 hand-picked tiers (base, components)
//   node docs/spike/scripts/tier-layers.mjs flat    1 layer: no per-folder ordering (control)
//   node docs/spike/scripts/tier-layers.mjs report  print the mappings, change nothing
// depth: a folder's tier is the longest chain of style edges below it (a folder that
//   styles nothing is 0; a parent is always deeper than its child), so no edge can sit
//   inside one tier.
// naive: what someone might write by hand from the spec's `fds.base, fds.components`.
// Rewrites `@layer fds{@layer <folder>{` to `@layer fds{@layer <tier>{` in every dist
// CSS file (ESM and cjs) and replaces the order statement in the theme stylesheets.
// Undo: `npm run build`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getCssLayerOrder } from "../../../rollup/add-css-layer-plugin.js";

const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../.."
);
const mode = process.argv[2];
if (!["depth", "naive", "flat", "report"].includes(mode))
    throw new Error("usage: tier-layers.mjs depth|naive|flat|report");

const { order, edges } = await getCssLayerOrder();
const kids = new Map(order.map((f) => [f, new Set()]));
for (const e of edges)
    if (kids.has(e.parent) && kids.has(e.child) && e.parent !== e.child)
        kids.get(e.parent).add(e.child);
const depth = new Map();
for (const f of order)
    depth.set(
        f,
        Math.max(-1, ...[...kids.get(f)].map((c) => depth.get(c))) + 1
    );

const NAIVE_BASE = new Set([
    "theme",
    "markup",
    "typography",
    "shared",
    "layout",
]);
const mappings = {
    depth: (f) => `t${depth.get(f)}`,
    naive: (f) => (NAIVE_BASE.has(f) ? "base" : "components"),
    // flat: every folder in one layer, so the cascade falls back to source order like
    // the published package, but with the branch's component source (screenshot control)
    flat: () => "all",
};

const describe = (name, tierOf) => {
    const tiers = [...new Set(order.map(tierOf))].sort();
    const inside = edges.filter((e) => tierOf(e.parent) === tierOf(e.child));
    const inverted = edges.filter(
        (e) => tiers.indexOf(tierOf(e.parent)) < tiers.indexOf(tierOf(e.child))
    );
    console.log(
        `${name}: ${tiers.length} tiers (${tiers.join(", ")}); of ${
            edges.length
        } style edges, ${
            inside.length
        } inside one tier (decided by source order), ${
            inverted.length
        } inverted`
    );
    return { tiers, inside };
};

if (mode === "report") {
    for (const [name, tierOf] of Object.entries(mappings)) {
        const { inside } = describe(name, tierOf);
        const pairs = [
            ...new Set(inside.map((e) => `${e.parent}->${e.child}`)),
        ];
        if (pairs.length)
            console.log(
                `  inside-tier folder pairs (${pairs.length}): ${pairs
                    .slice(0, 12)
                    .join(" ")}${pairs.length > 12 ? " ..." : ""}`
            );
    }
    process.exit(0);
}

const tierOf = mappings[mode];
const { tiers } = describe(mode, tierOf);
const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        return e.isDirectory() ? walk(f) : f.endsWith(".css") ? [f] : [];
    });
let blocks = 0,
    statements = 0,
    unknown = new Set();
for (const file of walk(path.join(root, "dist"))) {
    const css = fs.readFileSync(file, "utf8");
    let next = css.replace(
        /@layer fds\{@layer ([a-z0-9-]+)\{/g,
        (m, folder) => {
            if (!depth.has(folder)) {
                unknown.add(folder);
                return m;
            }
            blocks++;
            return `@layer fds{@layer ${tierOf(folder)}{`;
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
    `rewrote ${blocks} folder layer blocks and ${statements} order statements`
);
