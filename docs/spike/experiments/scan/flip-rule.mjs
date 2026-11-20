// Spike 01 / E8 (Q2): can a static rule catch specificity flips? Tests the rule
//   "for an edge parent -> child, a parent rule is less specific than a child rule that sets
//    the same longhand" on the built CSS (../final/libs/styleedge), and compares what it
// flags with the runtime flips in <results dir>/analysis.json.
// Usage: node flip-rule.mjs results/full
//   folder: any rule in the parent folder vs any rule in the child folder
//   class:  only parent rules whose subject (rightmost compound) carries the class the
//           parent passes to the child (static className edges, `via`), the most a source
//           scan knows; the child side stays any rule in the child folder
// Edge sets: static (what the generator has today) and union (static + runtime edges).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import postcss from "postcss";

import { branches, cmp } from "./selectors.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = process.argv[2];
const statics = JSON.parse(
    fs.readFileSync(path.join(here, "static.json"), "utf8")
);
const analysis = JSON.parse(
    fs.readFileSync(path.join(dir, "analysis.json"), "utf8")
);
const lib = path.join(here, "../final/libs/styleedge");

const SIDES = ["top", "right", "bottom", "left"];
const EXPAND = {
    margin: SIDES.map((s) => `margin-${s}`),
    padding: SIDES.map((s) => `padding-${s}`),
    inset: SIDES,
    "border-width": SIDES.map((s) => `border-${s}-width`),
    "border-style": SIDES.map((s) => `border-${s}-style`),
    "border-color": SIDES.map((s) => `border-${s}-color`),
    border: SIDES.flatMap((s) =>
        ["width", "style", "color"].map((k) => `border-${s}-${k}`)
    ),
    ...Object.fromEntries(
        SIDES.map((s) => [
            `border-${s}`,
            ["width", "style", "color"].map((k) => `border-${s}-${k}`),
        ])
    ),
    "border-radius": [
        "top-left",
        "top-right",
        "bottom-right",
        "bottom-left",
    ].map((c) => `border-${c}-radius`),
    outline: ["outline-color", "outline-style", "outline-width"],
    background: [
        "background-color",
        "background-image",
        "background-position-x",
        "background-position-y",
        "background-size",
        "background-repeat",
    ],
    overflow: ["overflow-x", "overflow-y"],
    gap: ["row-gap", "column-gap"],
    flex: ["flex-grow", "flex-shrink", "flex-basis"],
};
const longhands = (p) => EXPAND[p] ?? [p];

// every rule in the built library, by folder
const rules = [];
const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        if (e.isDirectory()) return e.name === "cjs" ? [] : walk(f);
        return f.endsWith(".css") ? [f] : [];
    });
for (const f of walk(lib))
    postcss.parse(fs.readFileSync(f, "utf8")).walkRules((r) => {
        const layers = [];
        for (let p = r.parent; p; p = p.parent)
            if (p.type === "atrule" && p.name === "layer")
                layers.unshift(p.params);
        if (layers[0] !== "fds" || layers.length < 2) return;
        const props = new Set();
        r.walkDecls((d) => longhands(d.prop).forEach((l) => props.add(l)));
        for (const b of branches(r.selector))
            if (!b.error)
                rules.push({
                    folder: layers[1],
                    sel: r.selector,
                    branch: b.text,
                    spec: b.spec,
                    props,
                });
    });
const byFolder = {};
for (const r of rules) (byFolder[r.folder] ??= []).push(r);

// class hash for a `via` like "<ClickableIcon .dismissButton>": the export of that name
// in a style file of the parent folder (dist JS: const x="hash"; export{x as name})
const hashOf = {};
for (const f of walk(lib)
    .map((c) => c.replace(/_[a-z0-9]+\.css$/, ".js"))
    .filter((j) => fs.existsSync(j))) {
    const code = fs.readFileSync(f, "utf8");
    const vars = Object.fromEntries(
        [...code.matchAll(/\b([\w$]+)="([a-z][a-z0-9]{4,9})"/g)].map((m) => [
            m[1],
            m[2],
        ])
    );
    const folder = path.relative(lib, f).split(path.sep)[0];
    for (const m of code.matchAll(/export\{([^}]*)\}/g))
        for (const part of m[1].split(",")) {
            const [local, as] = part.trim().split(/\s+as\s+/);
            if (vars[local]) (hashOf[folder] ??= {})[as ?? local] = vars[local];
        }
}
const subjectHas = (branch, hash) => {
    const subject = branch.split(/\s*[\s>+~]\s*/).pop();
    return new RegExp(`\\.${hash}(?![\\w-])`).test(subject);
};

const staticEdges = statics.edges.filter(
    (e) => !e.exempt && e.parent !== e.child
);
const runtimeEdges = analysis.q1.missing
    .filter((m) => m.direction)
    .map((m) => {
        const [parent, child] = m.direction.split("->");
        return { parent, child, kind: "runtime", via: null };
    });

const flag = (edges, mode) => {
    const out = new Set();
    const pairsSeen = new Set();
    for (const e of edges) {
        let parents = byFolder[e.parent] ?? [];
        if (mode === "class") {
            const name = e.via?.match(/\.(\w+)>$/)?.[1];
            const hash = name && hashOf[e.parent]?.[name];
            if (!hash) continue; // selector edges and runtime edges carry no class: nothing to check
            parents = parents.filter((r) => subjectHas(r.branch, hash));
        }
        const pk = `${e.parent}->${e.child}|${mode === "class" ? e.via : ""}`;
        if (pairsSeen.has(pk)) continue;
        pairsSeen.add(pk);
        for (const rp of parents)
            for (const rc of byFolder[e.child] ?? [])
                if (cmp(rc.spec, rp.spec) > 0)
                    for (const p of rp.props)
                        if (rc.props.has(p))
                            out.add(
                                `${e.parent}|${rp.branch}|${e.child}|${rc.branch}|${p}`
                            );
    }
    return out;
};

// runtime flips, as the same key: parent = the folder whose layer wins (styleedge winner)
const pairs = fs
    .readFileSync(path.join(dir, "pairs.jsonl"), "utf8")
    .trim()
    .split("\n")
    .map((l) => JSON.parse(l));
const isFlip = (p) =>
    p.valuesDiffer &&
    p.predicted.flat.by === "specificity" &&
    p.predicted.styleedge.winner !== p.predicted.flat.winner;
const flipKeys = pairs.filter(isFlip).map((p) => {
    const [par, ch] =
        p.predicted.styleedge.winner === "a" ? [p.a, p.b] : [p.b, p.a];
    return {
        key: `${par.folder}|${par.branch}|${ch.folder}|${ch.branch}|${p.prop}`,
        state: par.state || ch.state,
        label: `${par.folder} ${par.branch} vs ${ch.folder} ${ch.branch} ${p.prop}`,
    };
});

const lines = [];
for (const [setName, edges] of [
    ["static", staticEdges],
    ["union", [...staticEdges, ...runtimeEdges]],
])
    for (const mode of ["folder", "class"]) {
        const flagged = flag(edges, mode);
        const caught = flipKeys.filter((f) => flagged.has(f.key));
        lines.push(
            `${setName} edges, ${mode} level: ${
                flagged.size
            } rule pairs flagged; catches ${caught.length} of ${
                flipKeys.length
            } runtime flips (${caught.filter((f) => !f.state).length} of ${
                flipKeys.filter((f) => !f.state).length
            } at rest)`
        );
        if (setName === "union" && mode === "folder")
            lines.push(
                ...flipKeys
                    .filter((f) => !flagged.has(f.key))
                    .map((f) => `    not caught: ${f.label}`)
            );
        if (setName === "static" && mode === "class")
            lines.push(
                ...flipKeys
                    .filter((f) => !flagged.has(f.key))
                    .map((f) => `    not caught: ${f.label}`)
            );
    }
const text = lines.join("\n");
fs.writeFileSync(path.join(dir, "flip-rule.txt"), text + "\n");
console.log(text);
