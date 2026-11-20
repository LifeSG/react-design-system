// Spike 01 / E8: answer Q1-Q5 of the brief from a conflict-scan run, offline.
// Usage: node analyse.mjs results/full   -> results/full/analysis.json and analysis.md
//   Q1 runtime folder edges vs static edges (missing, and static with no conflict)
//   Q2 specificity flips (flat decided by specificity, layered winner differs, values differ)
//   Q3 order-dependent ties (flat tie between folders)
//   Q4 library !important against another folder
//   Q5 cycles in the union of static and runtime edges
// A runtime edge is a pair of folders with at least one pair whose two values compute
// differently on a real element (pairs whose values compute the same cannot change a
// render whichever wins). Custom properties (--x) are reported apart.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = process.argv[2];
const pairs = fs
    .readFileSync(path.join(dir, "pairs.jsonl"), "utf8")
    .trim()
    .split("\n")
    .map((l) => JSON.parse(l));
const statics = JSON.parse(
    fs.readFileSync(path.join(here, "static.json"), "utf8")
);
const lib = path.join(here, "../final/libs/styleedge");

// ---------- class hash -> (dist file, export name), from every dist JS file importing CSS
const classSource = {};
const walk = (d) =>
    fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        const f = path.join(d, e.name);
        if (e.isDirectory()) return e.name === "cjs" ? [] : walk(f);
        return f.endsWith(".js") ? [f] : [];
    });
for (const f of walk(lib)) {
    const code = fs.readFileSync(f, "utf8");
    if (!/import"\.\/[^"]+\.css";/.test(code)) continue;
    const vars = {};
    for (const m of code.matchAll(/\b([\w$]+)="([a-z][a-z0-9]{4,9})"/g))
        vars[m[1]] = m[2];
    const names = {};
    for (const m of code.matchAll(/export\{([^}]*)\}/g))
        for (const part of m[1].split(",")) {
            const [local, as] = part.trim().split(/\s+as\s+/);
            names[local] = as ?? local;
        }
    for (const [v, hash] of Object.entries(vars))
        classSource[hash] ??= {
            file: path.relative(lib, f),
            name: names[v] ?? null,
        };
}
const STATIC_FILE = /\.styles?\.js$/;
const classesIn = (sel) =>
    [...sel.matchAll(/\.([a-z][a-z0-9]{4,9})\b/g)].map((m) => m[1]);
const describeSide = (s) => {
    const own = classesIn(s.branch).map((c) => {
        const src = classSource[c];
        return src
            ? `${c}=${src.file}${src.name ? `#${src.name}` : ""}`
            : `${c}=?`;
    });
    return own;
};

// ---------- static edges, by folder pair
const key = (x, y) => [x, y].sort().join(" ~ ");
const staticDir = {}; // pair -> Set("parent->child")
for (const e of statics.edges) {
    if (e.parent === e.child) continue;
    (staticDir[key(e.parent, e.child)] ??= new Set()).add(
        `${e.parent}->${e.child}${e.exempt ? " (exempt)" : ""}`
    );
}
const imports = (x, y) => statics.importDeps[x]?.includes(y);
const resolve = (x, y) => {
    const s = staticDir[key(x, y)];
    if (s) {
        const dirs = [...s].filter((d) => !d.endsWith("(exempt)"));
        const parents = new Set(dirs.map((d) => d.split("->")[0]));
        if (parents.size === 1)
            return {
                parent: [...parents][0],
                child: [...parents][0] === x ? y : x,
                by: "static",
            };
        if (parents.size > 1)
            return { parent: null, by: "static, both directions" };
    }
    if (imports(x, y) && !imports(y, x))
        return { parent: x, child: y, by: "import" };
    if (imports(y, x) && !imports(x, y))
        return { parent: y, child: x, by: "import" };
    return {
        parent: null,
        by: imports(x, y)
            ? "unresolved (mutual import)"
            : "unresolved (no import)",
    };
};

// ---------- predicates
const isFlip = (p) =>
    p.valuesDiffer &&
    p.predicted.flat.by === "specificity" &&
    p.predicted.styleedge.winner !== p.predicted.flat.winner;
const real = pairs.filter((p) => !p.custom);
const custom = pairs.filter((p) => p.custom);

// ---------- Q1 runtime edges
const runtime = {};
for (const p of real) {
    const k = key(p.a.folder, p.b.folder);
    const r = (runtime[k] ??= {
        folders: [p.a.folder, p.b.folder].sort(),
        pairs: 0,
        differ: 0,
        props: new Set(),
        examples: [],
    });
    r.pairs++;
    if (p.valuesDiffer) {
        r.differ++;
        r.props.add(p.prop);
        if (r.examples.length < 3) r.examples.push(p);
    }
}
const runtimeEdges = Object.values(runtime)
    .filter((r) => r.differ)
    .map((r) => ({
        ...r,
        props: [...r.props].sort(),
        ...resolve(...r.folders),
        static: staticDir[key(...r.folders)]
            ? [...staticDir[key(...r.folders)]]
            : [],
    }));
const missing = runtimeEdges.filter((r) => !r.static.length);
// Does a chain of (non-exempt) static edges already order parent after child? Then every
// layering built from the static edges (styleedge, depth) gets this pair right anyway.
const staticKids = {};
for (const e of statics.edges)
    if (!e.exempt && e.parent !== e.child)
        (staticKids[e.parent] ??= new Set()).add(e.child);
const reaches = (from, to, seen = new Set()) => {
    if (from === to) return true;
    if (seen.has(from)) return false;
    seen.add(from);
    return [...(staticKids[from] ?? [])].some((c) => reaches(c, to, seen));
};
const pos = Object.fromEntries(statics.order.map((f, i) => [f, i]));
for (const r of missing)
    if (r.parent) {
        r.impliedByStaticPath = reaches(r.parent, r.child);
        r.styleedgeOrder =
            pos[r.parent] > pos[r.child]
                ? "parent later (right)"
                : "parent earlier (WRONG)";
        const dp = statics.depth[r.parent],
            dc = statics.depth[r.child];
        r.depthOrder =
            dp > dc
                ? `t${dp} > t${dc} (right)`
                : dp === dc
                ? `both t${dp} (SAME TIER: source order)`
                : `t${dp} < t${dc} (WRONG)`;
    }
const staticPairs = Object.keys(staticDir);
const staticNoConflict = staticPairs.filter((k) => !runtime[k]);
const staticOnlyEqual = staticPairs.filter(
    (k) => runtime[k] && !runtime[k].differ
);

// ---------- Q2 flips, Q3 ties, Q4 !important
const flips = real.filter(isFlip);
const ties = real.filter((p) => p.predicted.flat.winner === "order-dependent");
const important = pairs.filter((p) => p.a.important || p.b.important);
// Model check: on this (styleedge) build, does the element's actual value equal the value of
// the predicted styleedge winner? A mismatch means a third rule (or an inline style, an
// animation, a non-library rule) decides, so the pairwise prediction does not hold there.
// Only meaningful at rest: state pairs are matched with the state stripped.
const atRest = real.filter(
    (p) => p.valuesDiffer && !p.a.state && !p.b.state && !p.pseudoElement
);
const winnerValue = (p) =>
    p.predicted.styleedge.winner === "a"
        ? p.example.computedA
        : p.example.computedB;
const modelMismatch = atRest.filter((p) => p.example.actual !== winnerValue(p));
const depthChanges = real.filter(
    (p) =>
        p.valuesDiffer &&
        p.predicted.depth.winner !== p.predicted.styleedge.winner
);

// ---------- Q5 cycles: Tarjan SCC over static (non-exempt) + resolved runtime edges
const graph = {};
const addEdge = (parent, child, why) =>
    ((graph[parent] ??= {})[child] ??= new Set()).add(why);
for (const e of statics.edges)
    if (!e.exempt && e.parent !== e.child) addEdge(e.parent, e.child, "static");
for (const r of runtimeEdges)
    if (r.parent) addEdge(r.parent, r.child, `runtime (${r.by})`);
const sccs = [];
{
    let i = 0;
    const idx = {},
        low = {},
        on = new Set(),
        st = [];
    const nodes = new Set([
        ...Object.keys(graph),
        ...Object.values(graph).flatMap((m) => Object.keys(m)),
    ]);
    const strong = (v) => {
        idx[v] = low[v] = i++;
        st.push(v);
        on.add(v);
        for (const w of Object.keys(graph[v] ?? {})) {
            if (idx[w] === undefined) {
                strong(w);
                low[v] = Math.min(low[v], low[w]);
            } else if (on.has(w)) low[v] = Math.min(low[v], idx[w]);
        }
        if (low[v] === idx[v]) {
            const c = [];
            let w;
            do {
                w = st.pop();
                on.delete(w);
                c.push(w);
            } while (w !== v);
            if (c.length > 1) sccs.push(c.sort());
        }
    };
    for (const v of nodes) if (idx[v] === undefined) strong(v);
}
const cycleEdges = sccs.map((c) =>
    Object.entries(graph)
        .filter(([p]) => c.includes(p))
        .flatMap(([p, m]) =>
            Object.entries(m)
                .filter(([ch]) => c.includes(ch))
                .map(([ch, why]) => `${p}->${ch} [${[...why].join(", ")}]`)
        )
);

// ---------- output
const line = (p) =>
    `${p.prop}${p.pseudoElement} | ${p.a.folder}(#${p.a.position},t${
        p.a.depthTier
    }) \`${p.a.branch}\` [${p.a.spec}]${p.a.important ? " !important" : ""} ${
        p.a.value
    }${p.a.state ? " (state)" : ""}${p.a.cond ? ` ${p.a.cond}` : ""}` +
    ` vs ${p.b.folder}(#${p.b.position},t${p.b.depthTier}) \`${p.b.branch}\` [${
        p.b.spec
    }]${p.b.important ? " !important" : ""} ${p.b.value}${
        p.b.state ? " (state)" : ""
    }${p.b.cond ? ` ${p.b.cond}` : ""}` +
    ` | computed ${p.example.computedA} / ${p.example.computedB}, actual ${p.example.actual}` +
    ` | flat ${p.predicted.flat.winner}, styleedge ${p.predicted.styleedge.winner}, depth ${p.predicted.depth.winner}` +
    ` | ${p.pages}p, e.g. ${p.example.story}@${p.example.vp} \`${p.example.el}\``;
const count = (list) => ({
    pairs: list.length,
    selectorPairs: new Set(
        list.map((p) => [p.a.sel, p.b.sel, p.prop].join("|"))
    ).size,
    folderPairs: new Set(list.map((p) => key(p.a.folder, p.b.folder))).size,
    stateDependent: list.filter((p) => p.a.state || p.b.state).length,
    valuesDiffer: list.filter((p) => p.valuesDiffer).length,
});

const out = {
    totals: { all: count(pairs), real: count(real), custom: count(custom) },
    q1: {
        runtimeEdges: runtimeEdges.length,
        missing: missing.map((r) => ({
            folders: r.folders,
            direction: r.parent ? `${r.parent}->${r.child}` : null,
            by: r.by,
            impliedByStaticPath: r.impliedByStaticPath,
            styleedgeOrder: r.styleedgeOrder,
            depthOrder: r.depthOrder,
            props: r.props,
            differ: r.differ,
            examples: r.examples.map((p) => ({
                line: line(p),
                aClasses: describeSide(p.a),
                bClasses: describeSide(p.b),
            })),
        })),
        staticNoConflict,
        staticOnlyEqual,
    },
    q2: { flips: count(flips), list: flips.map(line) },
    q3: {
        ties: count(ties),
        tiesDiffer: count(ties.filter((p) => p.valuesDiffer)),
    },
    q4: {
        important: important.map((p) => ({
            line: line(p),
            valuesDiffer: p.valuesDiffer,
        })),
    },
    q5: { sccs, cycleEdges },
    modelCheck: {
        atRest: atRest.length,
        mismatches: modelMismatch.length,
        list: modelMismatch.map(
            (p) => `${line(p)} | predicted ${winnerValue(p)}`
        ),
    },
    depthVsStyleedge: {
        count: count(depthChanges),
        list: depthChanges.map(line),
    },
};
fs.writeFileSync(path.join(dir, "analysis.json"), JSON.stringify(out, null, 1));

const md = [];
md.push(`# E8 analysis of ${dir}\n`);
md.push(`Pairs: ${JSON.stringify(out.totals)}\n`);
md.push(
    `## Q1 runtime edges: ${runtimeEdges.length} folder pairs with a differing conflict; ${missing.length} have no static edge\n`
);
for (const m of out.q1.missing) {
    md.push(
        `- **${m.folders.join(" ~ ")}** → ${m.direction ?? "?"} (${
            m.by
        }); props ${m.props.join(", ")}; ${
            m.differ
        } differing pairs; static path ${
            m.impliedByStaticPath ? "yes" : "no"
        }; styleedge ${m.styleedgeOrder}; depth ${m.depthOrder}`
    );
    for (const e of m.examples)
        md.push(
            `  - ${e.line}\n    - A classes: ${e.aClasses.join(
                " "
            )}; B classes: ${e.bClasses.join(" ")}`
        );
}
md.push(
    `\nStatic folder pairs with no runtime conflict at all (${
        staticNoConflict.length
    }): ${staticNoConflict.join("; ")}\n`
);
md.push(
    `Static folder pairs whose conflicts all compute equal (${
        staticOnlyEqual.length
    }): ${staticOnlyEqual.join("; ")}\n`
);
md.push(`## Q2 specificity flips: ${JSON.stringify(out.q2.flips)}\n`);
out.q2.list.forEach((l) => md.push(`- ${l}`));
md.push(
    `\n## Q3 order-dependent ties: ${JSON.stringify(
        out.q3.ties
    )}; of which values differ ${JSON.stringify(out.q3.tiesDiffer)}\n`
);
md.push(`## Q4 !important pairs: ${important.length}\n`);
out.q4.important.forEach((x) =>
    md.push(`- ${x.valuesDiffer ? "DIFFER" : "equal"}: ${x.line}`)
);
md.push(`\n## Q5 cycles: ${sccs.length}\n`);
cycleEdges.forEach((c, i) =>
    md.push(`- ${sccs[i].join(", ")}:\n  - ${c.join("\n  - ")}`)
);
md.push(
    `\n## Model check: actual value = predicted styleedge winner on ${
        atRest.length - modelMismatch.length
    } of ${atRest.length} differing pairs at rest\n`
);
out.modelCheck.list.forEach((l) => md.push(`- MISMATCH ${l}`));
md.push(
    `\n## depth vs styleedge (differing values, winner differs): ${JSON.stringify(
        out.depthVsStyleedge.count
    )}\n`
);
out.depthVsStyleedge.list.forEach((l) => md.push(`- ${l}`));
fs.writeFileSync(path.join(dir, "analysis.md"), md.join("\n") + "\n");
console.log(
    `pairs ${pairs.length} (${real.length} real, ${custom.length} custom); runtime edges ${runtimeEdges.length}, missing from static ${missing.length}; ` +
        `static pairs with no conflict ${staticNoConflict.length}, only equal ${staticOnlyEqual.length}; flips ${flips.length}; ties ${ties.length} ` +
        `(${ties.filter((p) => p.valuesDiffer).length} differ); !important ${
            important.length
        }; cycles ${sccs.length}; model mismatches ${modelMismatch.length}/${
            atRest.length
        }; depth != styleedge ${depthChanges.length}`
);
