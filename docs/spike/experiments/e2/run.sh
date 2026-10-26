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
PKG="node_modules/@lifesg/react-design-system"
LIBDIR="$PKG"

[ -d node_modules ] || npm ci --no-audit --no-fund >/dev/null

if [ "$LIB" = local ]; then
    # Swap the library by symlinking the package to the repo's dist/ (see next.config.mjs).
    # Restored on exit, including on failure.
    [ -d ../../../../dist/timeline ] || { echo "dist/ missing: run 'npm run build' at the repo root"; exit 1; }
    BACKUP="$(mktemp -d)"
    mv "$PKG" "$BACKUP/pkg"
    ln -s "$(cd ../../../../dist && pwd)" "$PKG"
fi
cleanup() {
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    if [ "$LIB" = local ] && [ -n "${BACKUP:-}" ] && [ -d "$BACKUP/pkg" ]; then
        rm -f "$PKG"
        mv "$BACKUP/pkg" "$PKG"
    fi
}
trap cleanup EXIT
mkdir -p results
# TAG names the output so a new experiment does not overwrite an earlier finding's
# evidence: results/<lib>[-<tag>].jsonl and results/<lib>[-<tag>]-nav.jsonl
SUFFIX="${TAG:+-$TAG}"
OUT="results/$LIB$SUFFIX.jsonl"
NAVOUT="results/$LIB$SUFFIX-nav.jsonl"
: >"$OUT"
: >"$NAVOUT"
node class-map.mjs "$LIBDIR" >results/class-map.json

# Progress: one step per bundler x chunking x run. Prints [step/total], the phase
# and elapsed time, plus a rough ETA from the average step so far.
COMBOS_PER_RUN=4   # turbopack default/graph, webpack default/strict
TOTAL=$((RUNS * COMBOS_PER_RUN))
STEP=0
T0=$(date +%s)
fmt() { printf '%dm%02ds' $(($1 / 60)) $(($1 % 60)); }
say() { # say <phase>
    local now elapsed eta=""
    now=$(date +%s); elapsed=$((now - T0))
    if [ "$STEP" -gt 1 ]; then eta=" | ~$(fmt $((elapsed / (STEP - 1) * (TOTAL - STEP + 1)))) left"; fi
    printf '[%d/%d] %-28s %-24s elapsed %s%s\n' "$STEP" "$TOTAL" "$LABEL" "$1" "$(fmt $elapsed)" "$eta"
}
echo "LIB=$LIB  RUNS=$RUNS  steps=$TOTAL  (each step: build, serve, static probes, navigation probes)"

for run in $(seq 1 "$RUNS"); do
    for bundler in turbopack webpack; do
        for chunking in default strict graph; do
            # Next rejects "strict" under Turbopack and "graph" under webpack
            [ "$bundler" = turbopack ] && [ "$chunking" = strict ] && continue
            [ "$bundler" = webpack ] && [ "$chunking" = graph ] && continue
            STEP=$((STEP + 1)); LABEL="$bundler/$chunking run$run"
            flag=""; [ "$bundler" = webpack ] && flag="--webpack"
            export CSS_CHUNKING=""; [ "$chunking" != default ] && export CSS_CHUNKING="$chunking"
            export DIST=".next-$bundler-$chunking"
            rm -rf "$DIST"
            say "building"
            npx next build $flag >/dev/null 2>&1 || { echo "build failed: $bundler/$chunking"; exit 1; }
            if [ "$LIB" = local ]; then
                # The local library declares its layer order in the theme stylesheet
                # (`@layer fds.<name>,...;`); the published one has no such statement.
                # Checking the statement, not a layer count, also accepts tier builds (E4).
                # grep -r, not `cat | grep -q`: under pipefail, grep -q exiting early makes
                # cat die of SIGPIPE and the pipeline report failure even on a match.
                grep -rqE '@layer fds\.[a-z0-9-]+,' --include='*.css' "$DIST/static" \
                    || { echo "guard: $bundler/$chunking has no fds.* order statement, so the local library was not used"; exit 1; }
            fi
            npx next start -p 4200 >/dev/null 2>&1 & PID=$!
            # next start forks next-server, so cleanup() kills by port
            sleep 4
            say "static probes (8 routes)"
            node measure.mjs 4200 "$LIB $bundler $chunking run$run" results/class-map.json >>"$OUT"
            say "navigation (8 hard + 56 nav)"
            node measure-nav.mjs 4200 "$LIB $bundler $chunking run$run" results/class-map.json >>"$NAVOUT"
            lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
            wait $PID 2>/dev/null || true
        done
    done
done
echo "all $TOTAL steps done in $(fmt $(( $(date +%s) - T0 )))"

echo "== override probes: computed value vs the parent's intended value (ok = parent won) =="
node -e '
const rows = require("fs").readFileSync(process.argv[1], "utf8").trim().split("\n").map(JSON.parse).filter((r) => r.probes);
const by = {};
for (const r of rows) {
    const combo = r.label.replace(/ run\d+$/, "").split(" ").slice(1).join(" ");
    for (const p of r.probes) ((by[r.route + " " + p.property] ??= {})[combo] ??= []).push(p.ok ? "ok" : "WRONG(" + p.value + " vs " + p.intended + ")");
}
for (const [k, combos] of Object.entries(by)) {
    console.log(k);
    for (const [c, v] of Object.entries(combos)) console.log("   " + c.padEnd(20) + v.join(", "));
}
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

echo
echo "== navigation test: wrong probes by mode (hard load vs client navigation) =="
node -e '
const rows = require("fs").readFileSync(process.argv[1], "utf8").trim().split("\n").map(JSON.parse);
const tally = {};
for (const r of rows) {
    const combo = r.label.replace(/ run\d+$/, "").split(" ").slice(1).join(" ");
    for (const p of r.probes) {
        const t = (tally[combo + " | " + r.mode] ??= { ok: 0, wrong: 0, examples: new Set() });
        if (p.ok) t.ok++; else { t.wrong++; t.examples.add(p.id + " on " + (r.from ? r.from + "->" : "") + r.to); }
    }
}
for (const [k, t] of Object.entries(tally)) {
    console.log(k.padEnd(28), "ok", String(t.ok).padStart(4), " WRONG", String(t.wrong).padStart(3), t.wrong ? "e.g. " + [...t.examples].slice(0, 3).join("; ") : "");
}
' "$NAVOUT"
