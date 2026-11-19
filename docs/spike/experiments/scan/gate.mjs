// Spike 01 / E8: ground-truth gate. Prints, for each known case from the brief, the pairs in
// <results dir>/pairs.jsonl that match it, and whether the static scan has an edge between
// the two folders. The check is wrong if a row has no match.
// Usage: node gate.mjs results/gate
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

export const isFlip = (p) =>
    p.valuesDiffer &&
    p.predicted.flat.by === "specificity" &&
    p.predicted.styleedge.winner !== p.predicted.flat.winner;

const both = (p, x, y) =>
    (p.a.folder === x && p.b.folder === y) ||
    (p.a.folder === y && p.b.folder === x);

const ROWS = [
    {
        kind: "missing edge",
        name: "modal-v2 -> shared: padding 0 on ClickableIcon's 24px",
        folders: ["modal-v2", "shared"],
        test: (p) => /^padding-/.test(p.prop) && p.valuesDiffer,
    },
    {
        kind: "missing edge",
        name: "unit-number -> input-group: margin-right on the read-only divider",
        folders: ["unit-number", "input-group"],
        test: (p) =>
            p.prop === "margin-right" &&
            /read-only/.test(p.a.branch + p.b.branch),
    },
    {
        kind: "missing edge",
        name: "error-display -> typography: title",
        folders: ["error-display", "typography"],
        test: () => true,
    },
    {
        kind: "specificity flip",
        name: "smart-app-banner .cross width vs shared .x svg width",
        folders: ["smart-app-banner", "shared"],
        test: (p) => p.prop === "width" && isFlip(p),
    },
    {
        kind: "specificity flip",
        name: "navbar mobileMenuIcon width vs shared .x svg width",
        folders: ["navbar", "shared"],
        test: (p) => p.prop === "width" && isFlip(p),
    },
    {
        kind: "specificity flip",
        name: "otp-verification padding 0 16px vs input-group [data-read-only] padding 0",
        folders: ["otp-verification", "input-group"],
        test: (p) =>
            /^padding-(left|right)$/.test(p.prop) &&
            isFlip(p) &&
            /read-only/.test(p.a.sel + p.b.sel),
        note: "matched by rule: the brief names the [data-read-only] branch; the branch that decides it is printed below",
    },
    {
        kind: "specificity flip",
        name: "unit-number hashContainer margin vs input-group [data-read-only] margin-right",
        folders: ["unit-number", "input-group"],
        test: (p) => p.prop === "margin-right" && isFlip(p),
    },
];

const fmt = (s) =>
    `${s.folder}(#${s.position},t${s.depthTier}) ${s.branch}${
        s.alsoMatched.length
            ? ` (also matches: ${s.alsoMatched.join(", ")})`
            : ""
    } [${s.spec}]${s.important ? " !important" : ""} ${s.value}${
        s.via ? ` (via ${s.via})` : ""
    }${s.state ? " stateDependent" : ""}${s.cond ? ` ${s.cond}` : ""}`;
let missing = 0;
for (const row of ROWS) {
    const [x, y] = row.folders;
    const edge = statics.edges.filter(
        (e) =>
            (e.parent === x && e.child === y) ||
            (e.parent === y && e.child === x)
    );
    const hits = pairs.filter((p) => both(p, x, y) && row.test(p));
    console.log(
        `\n[${hits.length ? "FOUND" : "MISSING"}] ${row.kind}: ${row.name}`
    );
    if (row.note) console.log(`  (${row.note})`);
    console.log(
        `  static edges between ${x} and ${y}: ${
            edge.length
                ? edge.map((e) => `${e.parent}->${e.child} ${e.via}`).join("; ")
                : "none"
        }`
    );
    if (!hits.length) missing++;
    for (const p of hits) {
        const pr = p.predicted;
        console.log(
            `  ${p.prop}${p.pseudoElement}: A ${fmt(p.a)}\n` +
                `     vs B ${fmt(p.b)}\n` +
                `     computed A ${p.example.computedA} / B ${p.example.computedB}, actual ${p.example.actual}; ` +
                `flat ${pr.flat.winner} (${pr.flat.by}), styleedge ${pr.styleedge.winner} (${pr.styleedge.by}), depth ${pr.depth.winner} (${pr.depth.by}); ` +
                `flip ${isFlip(p)}; ${p.pages} page(s), e.g. ${
                    p.example.story
                }@${p.example.vp} ${p.example.el}`
        );
    }
}
console.log(
    `\n${ROWS.length - missing}/${ROWS.length} ground-truth rows found`
);
process.exitCode = missing ? 1 : 0;
