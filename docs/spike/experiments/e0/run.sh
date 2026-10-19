#!/usr/bin/env bash
# Spike 01 / E0. For each of RUNS rebuilds (default 5): build with webpack and
# Turbopack, serve each, measure the computed colour per scenario. Prints the
# per-scenario outcome counts, then how many distinct css load orders were seen.
# Run from this directory. Needs local port binding and headless Chromium.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
RUNS="${RUNS:-5}"
LOG="$(mktemp)"

for i in $(seq 1 "$RUNS"); do
    rm -rf .next-webpack .next-turbo
    npm run build:webpack >/dev/null
    npm run build:turbo >/dev/null
    DIST=.next-webpack node_modules/.bin/next start -p 4101 >/dev/null 2>&1 & P1=$!
    DIST=.next-turbo node_modules/.bin/next start -p 4102 >/dev/null 2>&1 & P2=$!
    sleep 5
    node measure.mjs 4101 webpack >>"$LOG"
    node measure.mjs 4102 turbopack >>"$LOG"
    kill $P1 $P2 2>/dev/null || true
    wait $P1 $P2 2>/dev/null || true
done

echo "== outcomes over $RUNS rebuilds (bundler route colour result) =="
awk '{print $1, $2, $3, $4}' "$LOG" | sort | uniq -c
echo "== distinct css load orders per route across rebuilds (1 = stable) =="
sed -E 's/[0-9a-z_]+\.css/X.css/g' "$LOG" | awk '{print $1, $2, substr($0, index($0,"["))}' | sort -u | awk '{print $1, $2}' | uniq -c
