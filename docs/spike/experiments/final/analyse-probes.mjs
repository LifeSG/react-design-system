// Usage: node analyse-probes.mjs
// Spike 01 / exit criterion 2: probe results from run-final.sh, per library and
// combination: wrong / total, which probes were wrong, and whether each probe cell
// (combination, mode, from, to, probe) gave the same answer on every build.
import fs from "node:fs";

const LIBS = [
    "published",
    "flat",
    "importorder",
    "reordered",
    "styleedge",
    "depth",
    "naive",
];
const COMBOS = [
    "turbopack default",
    "turbopack graph",
    "webpack default",
    "webpack strict",
];
const rows = {};
for (const lib of LIBS) {
    rows[lib] = [];
    for (const f of [`results/${lib}.jsonl`, `results/${lib}-nav.jsonl`])
        for (const line of fs.readFileSync(f, "utf8").trim().split("\n"))
            rows[lib].push(JSON.parse(line));
}
const builds = (lib) =>
    new Set(rows[lib].map((r) => r.label.split(" ")[3])).size;

console.log(
    "wrong / probe results, per library and combination (all builds, hard + nav + static)\n"
);
console.log(
    "library".padEnd(12) +
        COMBOS.map((c) => c.padStart(18)).join("") +
        "   builds  unstable cells"
);
for (const lib of LIBS) {
    const cells = {};
    const line = COMBOS.map((combo) => {
        let n = 0,
            bad = 0;
        for (const r of rows[lib]) {
            if (!r.label.includes(" " + combo + " ")) continue;
            for (const p of r.probes ?? []) {
                n++;
                if (!p.ok) bad++;
                const key = [
                    combo,
                    r.mode ?? "static",
                    r.from ?? "",
                    r.to ?? r.route,
                    p.id,
                ].join("|");
                (cells[key] ??= new Set()).add(p.ok);
            }
        }
        return `${bad}/${n}`.padStart(18);
    });
    const unstable = Object.values(cells).filter((s) => s.size > 1).length;
    console.log(
        lib.padEnd(12) +
            line.join("") +
            `   ${String(builds(lib)).padStart(6)}  ${unstable} of ${
                Object.keys(cells).length
            }`
    );
}

console.log("\nwhich probes were wrong (probe id: combinations)\n");
for (const lib of LIBS) {
    const bad = {};
    for (const r of rows[lib])
        // static probes (measure.mjs) carry no id, only the route they ran on
        for (const p of r.probes ?? [])
            if (!p.ok)
                (bad[p.id ?? `${r.route} (static)`] ??= new Set()).add(
                    r.label.split(" ").slice(1, 3).join(" ")
                );
    const parts = Object.entries(bad).map(
        ([id, c]) => `${id} (${[...c].join(", ")})`
    );
    console.log(lib.padEnd(12) + (parts.join("; ") || "none"));
}
