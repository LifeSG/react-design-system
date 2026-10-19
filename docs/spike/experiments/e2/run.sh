#!/usr/bin/env bash
# Spike 01 / E2. Builds this app for every bundler x cssChunking combination,
# serves each build and records the order of library component CSS per route.
#   LIB=published (default) | local    which library build to test
#   RUNS=2                              rebuilds per combination
# Needs registry access for `npm ci`, local port binding and headless Chromium.
# Run from this directory. Results go to results/<lib>.jsonl.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
export LIB="${LIB:-published}"
RUNS="${RUNS:-2}"
LIBDIR="node_modules/@lifesg/react-design-system"
[ "$LIB" = local ] && LIBDIR="../../../../dist"

[ -d node_modules ] || npm ci --no-audit --no-fund >/dev/null
mkdir -p results
OUT="results/$LIB.jsonl"
: >"$OUT"
node class-map.mjs "$LIBDIR" >results/class-map.json

for run in $(seq 1 "$RUNS"); do
    for bundler in turbopack webpack; do
        for chunking in default strict graph; do
            # Next rejects "strict" under Turbopack and "graph" under webpack
            [ "$bundler" = turbopack ] && [ "$chunking" = strict ] && continue
            [ "$bundler" = webpack ] && [ "$chunking" = graph ] && continue
            flag=""; [ "$bundler" = webpack ] && flag="--webpack"
            export CSS_CHUNKING=""; [ "$chunking" != default ] && export CSS_CHUNKING="$chunking"
            export DIST=".next-$bundler-$chunking"
            rm -rf "$DIST"
            npx next build $flag >/dev/null 2>&1 || { echo "build failed: $bundler/$chunking"; exit 1; }
            npx next start -p 4200 >/dev/null 2>&1 & PID=$!
            # next start forks next-server; kill by port so a failed run leaves nothing behind
            trap 'lsof -ti tcp:4200 | xargs kill 2>/dev/null || true' EXIT
            sleep 4
            node measure.mjs 4200 "$LIB $bundler $chunking run$run" results/class-map.json >>"$OUT"
            lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
            wait $PID 2>/dev/null || true
        done
    done
done

echo "== override probes (error-display title margin-bottom, intended 16px) =="
node -e '
const rows = require("fs").readFileSync(process.argv[1], "utf8").trim().split("\n").map(JSON.parse).filter((r) => r.probe !== undefined);
const by = {};
for (const r of rows) {
    const k = r.label.replace(/ run\d+$/, "").split(" ").slice(1).join(" ") + " | " + r.route;
    (by[k] ??= []).push(r.probe);
}
for (const [k, v] of Object.entries(by)) console.log(k.padEnd(52), v.join(", "));
' "$OUT"
echo
echo "== distinct component CSS orders per route (rows = routes) =="
node -e '
const fs = require("fs");
const rows = fs.readFileSync(process.argv[1], "utf8").trim().split("\n").map(JSON.parse);
const by = {};
for (const r of rows) {
    const key = r.route;
    by[key] ??= {};
    (by[key][r.order] ??= []).push(r.label.split(" ").slice(1).join(" "));
}
for (const [route, orders] of Object.entries(by)) {
    console.log("\n" + route + ": " + Object.keys(orders).length + " distinct order(s)");
    for (const [order, labels] of Object.entries(orders))
        console.log("  " + order + "\n    <- " + labels.length + " runs: " + [...new Set(labels.map((l) => l.replace(/ run\d+$/, "")))].join(", "));
}
' "$OUT"
