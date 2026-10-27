// Usage: node style-compare.mjs <libA> <libB>
// Lists every element whose computed style differs between styles/<libA>.json and
// styles/<libB>.json (from style-dump.sh), grouped by story, with the changed properties.
import fs from "node:fs";

const [a, b] = process.argv.slice(2);
const A = JSON.parse(fs.readFileSync(`styles/${a}.json`, "utf8"));
const B = JSON.parse(fs.readFileSync(`styles/${b}.json`, "utf8"));
for (const story of Object.keys(A)) {
    const diffs = [];
    for (const key of Object.keys(A[story])) {
        if (!B[story][key]) {
            diffs.push(`${key}  (missing in ${b})`);
            continue;
        }
        const changed = Object.keys(A[story][key]).filter(
            (p) => A[story][key][p] !== B[story][key][p]
        );
        // width/height of an element follow from its children; report only the first cause
        if (changed.length)
            diffs.push(
                `${key}  ${changed
                    .map(
                        (p) =>
                            `${p}: ${A[story][key][p]} -> ${B[story][key][p]}`
                    )
                    .join("; ")}`
            );
    }
    console.log(`== ${story}: ${diffs.length} elements differ`);
    diffs.slice(0, 4).forEach((d) => console.log("   " + d.slice(0, 230)));
    if (diffs.length > 4) console.log(`   ... ${diffs.length - 4} more`);
}
