// Usage: node matrix-overrides.mjs results/flat-overrides.jsonl results/styleedge-overrides.jsonl [results/published-overrides.jsonl]
// Spike 01 / E9. Prints the mechanism-by-target matrix from measure-overrides.mjs output.
// Each mechanism is read from the builds with its own globals setup (MECHS[].globals).
// A cell's winner: "app" if the computed value is the app's override value, "library" if
// it equals the m00 baseline from the same build setup, otherwise "other".
// A cell is unstable if its value differs across rebuilds or bundlers: printed as
// "UNSTABLE" with every value seen, since that is the ordering bug leaking through.
import fs from "node:fs";
import path from "node:path";

import { MECHS, TARGETS, intended } from "./overrides-spec.mjs";

const files = process.argv.slice(2);
const libs = files.map((f) => {
    const rows = fs
        .readFileSync(f, "utf8")
        .trim()
        .split("\n")
        .filter(Boolean)
        .map((l) => JSON.parse(l));
    return { name: path.basename(f).replace(/-overrides\.jsonl$/, ""), rows };
});
const globalsOf = (r) => / globals=(\w+)/.exec(r.label)[1];
const buildOf = (r) => r.label.split(" ").slice(1).join(" ");

function cell(lib, m, t) {
    if (m.only && !m.only.includes(t.id)) return { text: "-", key: "-" };
    if (m.via === "token" && !t.token)
        return { text: "n/a: literal value, no token", key: "n/a" };
    const rows = lib.rows.filter(
        (r) => r.page === m.id && globalsOf(r) === m.globals
    );
    if (!rows.length) return { text: "not measured", key: "nm" };
    const seen = new Map(); // value -> builds
    let reached = null;
    const errors = rows.filter((r) => r.error || !r.targets?.[t.id]?.found);
    if (errors.length)
        return {
            text: `MISSING in ${errors.length}/${rows.length} builds`,
            key: "missing",
        };
    for (const r of rows) {
        const c = r.targets[t.id];
        if (c.reached !== null) reached = c.reached;
        const base = lib.rows.find(
            (b) => b.page === "m00" && b.label === r.label
        )?.targets[t.id]?.value;
        const who =
            c.value === t.value
                ? "app"
                : c.value === base
                ? "library"
                : "other";
        const k = `${who} ${c.value}`;
        seen.set(k, [...(seen.get(k) ?? []), buildOf(r)]);
    }
    if (reached === false)
        return {
            text: `n/a: ${
                m.via === "style" ? "style" : "className"
            } does not reach the element`,
            key: "n/a",
        };
    if (seen.size > 1)
        return {
            text:
                "UNSTABLE " +
                [...seen].map(([k, b]) => `${k} [${b.length}]`).join(" / "),
            key: "unstable",
            unstable: [...seen],
        };
    const [k] = [...seen.keys()];
    return {
        text: `${k} (${rows.length}/${rows.length})`,
        key: k.split(" ")[0],
        value: k,
    };
}

if (libs.length === 1) {
    // single library (run-consumer.sh prints this after each run): cells only
    const [l] = libs;
    for (const m of MECHS)
        for (const t of TARGETS) {
            const c = cell(l, m, t);
            if (c.key !== "-")
                console.log(
                    `${l.name} ${m.n.padEnd(3)} ${t.id.padEnd(12)} ${c.text}`
                );
        }
    process.exit(0);
}
const [a, b, ...info] = libs;
const lines = [];
lines.push(
    `| # | Mechanism | Target | Intended | ${a.name} | ${b.name} | Same? |${info
        .map((l) => ` ${l.name} (info) |`)
        .join("")}`,
    `| - | - | - | - | - | - | - |${info.map(() => " - |").join("")}`
);
const diffs = [];
const unstable = [];
for (const m of MECHS) {
    for (const t of TARGETS) {
        const ca = cell(a, m, t);
        if (ca.key === "-") continue;
        const cb = cell(b, m, t);
        let same;
        if (ca.key === "n/a" && cb.key === "n/a") same = "n/a";
        else if (ca.text === cb.text) same = "same";
        else if (ca.key === cb.key && ca.key === "library")
            same = "same winner, library value differs";
        else same = "**DIFFERENT**";
        if (same === "**DIFFERENT**") diffs.push(`${m.n} ${t.id}`);
        for (const [lib, c] of [
            [a, ca],
            [b, cb],
            ...info.map((l) => [l, cell(l, m, t)]),
        ])
            if (c.key === "unstable")
                unstable.push(`${lib.name} ${m.id} ${t.id}: ${c.text}`);
        const ci = info.map((l) => ` ${cell(l, m, t).text} |`).join("");
        lines.push(
            `| ${m.n} | ${m.label} (globals: ${m.globals}) | ${
                t.id
            } | ${intended(m)} | ${ca.text} | ${cb.text} | ${same} |${ci}`
        );
    }
}
console.log(lines.join("\n"));
console.log(
    `\nBuilds per library: ${libs
        .map((l) => `${l.name} ${new Set(l.rows.map(buildOf)).size}`)
        .join(", ")}`
);
console.log(
    `Cells that differ between ${a.name} and ${b.name}: ${
        diffs.length ? diffs.join(", ") : "none"
    }`
);
console.log(
    `Unstable cells (vary across rebuilds or bundlers): ${
        unstable.length ? "\n  " + unstable.join("\n  ") : "none"
    }`
);
