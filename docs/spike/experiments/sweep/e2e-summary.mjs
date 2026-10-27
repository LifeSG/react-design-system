// Usage: node e2e-summary.mjs <lib> [<lib> ...]
// Spike 01 / visual sweep: list every test that did not pass in e2e-results/<lib>.json
// (Playwright JSON report from run-e2e.sh), grouped by component, with the failure kind:
// screenshot mismatch (and its diff pixels) or another assertion.
import fs from "node:fs";

const walk = (suite, file, out) => {
    for (const s of suite.suites ?? []) walk(s, s.file ?? file, out);
    for (const spec of suite.specs ?? [])
        for (const t of spec.tests)
            if (t.status !== "expected" && t.status !== "skipped")
                out.push({
                    file: spec.file ?? file,
                    title: spec.title,
                    status: t.status,
                    results: t.results,
                });
};
for (const lib of process.argv.slice(2)) {
    const report = JSON.parse(
        fs.readFileSync(`e2e-results/${lib}.json`, "utf8")
    );
    const out = [];
    for (const s of report.suites) walk(s, s.file, out);
    console.log(
        `== ${lib}: ${out.length} not passing (${
            out.filter((t) => t.status === "unexpected").length
        } failed, ${out.filter((t) => t.status === "flaky").length} flaky)`
    );
    const byComp = {};
    for (const t of out) {
        const comp = t.file.split("/").slice(-2, -1)[0];
        const msgs = t.results
            .flatMap((r) => (r.errors ?? []).map((e) => e.message ?? ""))
            .join("\n");
        const shot = [
            ...msgs.matchAll(
                /(\d+) pixels \(ratio [\d.]+ of all image pixels\) are different/g
            ),
        ].map((m) => m[1]);
        const size =
            /Expected an image (\d+px by \d+px), received (\d+px by \d+px)/.exec(
                msgs
            );
        const kind = shot.length
            ? `screenshot, ${shot.join("/")} px`
            : size
            ? `screenshot size ${size[1]} -> ${size[2]}`
            : (msgs.split("\n").find((l) => l.trim()) ?? "")
                  .replace(/\x1b\[[0-9;]*m/g, "")
                  .slice(0, 110);
        (byComp[comp] ??= []).push(
            `${t.status === "flaky" ? "[flaky] " : ""}${t.title}  |  ${kind}`
        );
    }
    for (const [comp, tests] of Object.entries(byComp).sort(
        (a, b) => b[1].length - a[1].length
    )) {
        console.log(`  ${comp} (${tests.length})`);
        for (const t of tests) console.log(`     ${t}`);
    }
}
