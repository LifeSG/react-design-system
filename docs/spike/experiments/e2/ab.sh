#!/usr/bin/env bash
# Spike 01 / E2 A/B: does adding routes to the build change an existing page?
# Builds Turbopack (default chunking) twice, once without src/app/nav and once with
# it, and prints the timeline/footer/error-display probes from the static
# /components pages (which are identical in both builds).
# Run from this directory after run.sh has written results/class-map.json.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1 LIB=published CSS_CHUNKING=""
HELD="$(mktemp -d)"

probe() {
    rm -rf .next-ab
    DIST=.next-ab npx next build >/dev/null 2>&1 || { echo "build failed"; return; }
    DIST=.next-ab npx next start -p 4200 >/dev/null 2>&1 & sleep 4
    node measure.mjs 4200 "$1" results/class-map.json | node -e '
const rows = require("fs").readFileSync(0, "utf8").trim().split("\n").map(JSON.parse);
for (const r of rows.filter((r) => /timeline|footer|error-display\/default/.test(r.route)))
    console.log(" ", r.route.padEnd(32), r.probes.map((p) => p.value + (p.ok ? " ok" : " WRONG")).join(","), "|", r.order);
'
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    rm -rf .next-ab
}

trap 'mv "$HELD/nav" src/app/nav 2>/dev/null || true' EXIT
echo "A: without /nav routes"; mv src/app/nav "$HELD/nav"; probe A; mv "$HELD/nav" src/app/nav
echo "B: with /nav routes";    probe B
