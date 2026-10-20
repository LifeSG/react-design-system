// Spike 01 / E1: compare the style-edge layer order (rollup/add-css-layer-plugin.js)
// with the old import-graph order, and show the cycle check firing.
// Run from the repo root: node docs/spike/scripts/style-order.mjs
import { getCssLayerOrder } from "../../../rollup/add-css-layer-plugin.js";
import {
    getStyleEdges,
    orderByStyleEdges,
} from "../../../rollup/style-edges.js";

const { importOrder, edges, order } = await getCssLayerOrder();
const all = getStyleEdges("src");
const pos = (list, f) => list.indexOf(f) + 1;

const byKind = (k) => all.filter((e) => e.kind === k).length;
const pairs = new Set(edges.map((e) => `${e.parent}->${e.child}`));
console.log(
    `${all.length} style edges (${byKind("className")} className, ${byKind(
        "selector"
    )} selector), ${all.length - edges.length} exempted, ${
        pairs.size
    } distinct folder pairs`
);

const broken = (list) =>
    edges.filter((e) => pos(list, e.parent) < pos(list, e.child));
const fmt = (list) => (e) =>
    `  ${e.parent}(${pos(list, e.parent)}) -> ${e.child}(${pos(
        list,
        e.child
    )})  ${e.file}  ${e.via}`;
console.log(
    `\nimport order: ${
        broken(importOrder).length
    } edges violated (child after parent)`
);
broken(importOrder).forEach((e) => console.log(fmt(importOrder)(e)));
console.log(
    `style-edge order: ${broken(order).length} edges violated (must be 0)`
);

// Position 0 = not in the import order, so the old statement never declared it
const moved = order.filter((f) => pos(importOrder, f) !== pos(order, f));
console.log(
    `\n${order.length} layers (import order had ${importOrder.length}), ${moved.length} moved or added (0 = undeclared before)`
);
for (const f of moved)
    console.log(`  ${f}: ${pos(importOrder, f)} -> ${pos(order, f)}`);

console.log("\nwithout the NOT_COLLIDING exemptions:");
try {
    orderByStyleEdges(importOrder, all);
    console.log("  no cycle");
} catch (e) {
    console.log("  " + e.message.replace(/\n/g, "\n  "));
}
