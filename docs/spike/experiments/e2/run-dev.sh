#!/usr/bin/env bash
# Spike 01 / E2 dev-mode comparison. The teams report "works in dev, breaks in prod".
# Runs `next dev` (Turbopack, then webpack) and hard-loads the /nav routes and the
# static timeline/footer pages, probing the same override pairs as run.sh.
# Client navigation is skipped: dev compiles routes on demand.
# Needs local port binding and headless Chromium. Results: results/<lib>-dev.jsonl.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
export LIB="${LIB:-published}"
LIBDIR="node_modules/@lifesg/react-design-system"
mkdir -p results
OUT="results/$LIB-dev.jsonl"
: >"$OUT"
node class-map.mjs "$LIBDIR" >results/class-map.json

for bundler in turbopack webpack; do
    flag="--turbopack"; [ "$bundler" = webpack ] && flag="--webpack"
    export DIST=".next-dev-$bundler"
    rm -rf "$DIST"
    npx next dev $flag -p 4200 >/dev/null 2>&1 & PID=$!
    trap 'lsof -ti tcp:4200 | xargs kill 2>/dev/null || true' EXIT
    for i in $(seq 1 30); do curl -s -o /dev/null localhost:4200 && break; sleep 1; done
    node measure-dev.mjs 4200 "$LIB $bundler dev" results/class-map.json >>"$OUT"
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    wait $PID 2>/dev/null || true
done

echo "== dev mode: probes by bundler (ok / wrong), hard loads =="
node -e '
const rows = require("fs").readFileSync(process.argv[1], "utf8").trim().split("\n").map(JSON.parse);
const t = {};
for (const r of rows) for (const p of r.probes) {
    const k = r.label.split(" ")[1];
    const c = (t[k] ??= { ok: 0, wrong: 0, ex: new Set() });
    if (p.ok) c.ok++; else { c.wrong++; c.ex.add(p.id + " on " + r.to); }
}
for (const [k, c] of Object.entries(t)) console.log(k.padEnd(10), "ok", c.ok, "WRONG", c.wrong, c.wrong ? "e.g. " + [...c.ex].slice(0, 3).join("; ") : "");
' "$OUT"
