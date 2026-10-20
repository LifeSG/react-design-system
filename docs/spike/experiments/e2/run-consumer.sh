#!/usr/bin/env bash
# Spike 01 / E6, E7: consumer setups against the layered library.
#   LIB=local (default here) | published    RUNS=2
# Builds Turbopack default and webpack default (the combinations that break in F8)
# and measures every /consumer/* scenario. Results: results/<lib>-consumer.jsonl.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1 CSS_CHUNKING=""
export LIB="${LIB:-local}"
RUNS="${RUNS:-2}"
PKG="node_modules/@lifesg/react-design-system"
[ -d node_modules ] || npm ci --no-audit --no-fund >/dev/null
cleanup() {
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    if [ -n "${BACKUP:-}" ] && [ -d "$BACKUP/pkg" ]; then rm -f "$PKG"; mv "$BACKUP/pkg" "$PKG"; fi
}
trap cleanup EXIT
if [ "$LIB" = local ]; then
    [ -d ../../../../dist/timeline ] || { echo "dist/ missing: run 'npm run build' at the repo root"; exit 1; }
    BACKUP="$(mktemp -d)"; mv "$PKG" "$BACKUP/pkg"; ln -s "$(cd ../../../../dist && pwd)" "$PKG"
fi
mkdir -p results
OUT="results/$LIB-consumer.jsonl"; : >"$OUT"
TOTAL=$((RUNS * 2)); STEP=0; T0=$(date +%s)
for run in $(seq 1 "$RUNS"); do
    for bundler in turbopack webpack; do
        STEP=$((STEP + 1))
        printf '[%d/%d] %s run%d  elapsed %ds\n' "$STEP" "$TOTAL" "$bundler" "$run" $(( $(date +%s) - T0 ))
        flag=""; [ "$bundler" = webpack ] && flag="--webpack"
        export DIST=".next-consumer-$bundler"; rm -rf "$DIST"
        npx next build $flag >/dev/null 2>&1 || { echo "build failed: $bundler"; exit 1; }
        npx next start -p 4200 >/dev/null 2>&1 & PID=$!; sleep 4
        node measure-consumer.mjs 4200 "$LIB $bundler default run$run" >>"$OUT"
        lsof -ti tcp:4200 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
    done
done
echo "done in $(( $(date +%s) - T0 ))s"
node -e '
const rows = require("fs").readFileSync(process.argv[1], "utf8").trim().split("\n").map(JSON.parse);
const by = {};
for (const r of rows) {
    const k = r.scenario.padEnd(14) + " " + r.label.split(" ")[1].padEnd(9);
    const e = r.effective;
    (by[k] ??= new Set()).add(`statementFirst=${r.statementFirst}  timeline=${r.timelineTitle} (parent layer later: ${e.timelineOverTypography})  textarea=${r.textareaError} (parent layer later: ${e.textareaOverForm})`);
}
for (const [k, v] of Object.entries(by)) console.log(k, [...v].join("  |  "));
' "$OUT"
