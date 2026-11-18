#!/usr/bin/env bash
# Spike 01 / E6, E7: consumer setups against the layered library.
#   LIB=local (default here) | published | <path to a built library>    RUNS=2
# Builds Turbopack default and webpack default (the combinations that break in F8)
# and measures every /consumer/* scenario. Results: results/<lib>-consumer.jsonl.
#
# E9 additions (local and published behave as before):
#   LIB=<path>       symlink node_modules/@lifesg/react-design-system straight to <path>
#                    (e.g. ../final/libs/flat), not via dist/; <lib> is its basename
#   SUITE=overrides  measure /overrides/* (measure-overrides.mjs) instead of /consumer/*,
#                    once per globals.css setup in GLOBALS (default "default reversed none":
#                    `@layer main, fds;` / `@layer fds, main;` / no statement). globals.css
#                    is swapped per build and restored on exit.
#                    Results: results/<lib>-overrides.jsonl; then matrix-overrides.mjs.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1 CSS_CHUNKING=""
export LIB="${LIB:-local}"
RUNS="${RUNS:-2}"
SUITE="${SUITE:-consumer}"
LIBNAME="$LIB"
case "$LIB" in */*) LIBNAME="$(basename "$LIB")"; LIBPATH="$(cd "$LIB" && pwd)"; export PIN_DEPS=1 ;; esac
if [ "$SUITE" = overrides ]; then GLOBALS_LIST="${GLOBALS:-default reversed none}"; else GLOBALS_LIST="keep"; fi
PKG="node_modules/@lifesg/react-design-system"
[ -d node_modules ] || npm ci --no-audit --no-fund >/dev/null
cleanup() {
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    if [ -n "${BACKUP:-}" ] && [ -d "$BACKUP/pkg" ]; then rm -f "$PKG"; mv "$BACKUP/pkg" "$PKG"; fi
    if [ -n "${GBACKUP:-}" ] && [ -f "$GBACKUP" ]; then cp "$GBACKUP" src/app/globals.css; fi
}
trap cleanup EXIT
if [ "$LIB" = local ]; then
    [ -d ../../../../dist/timeline ] || { echo "dist/ missing: run 'npm run build' at the repo root"; exit 1; }
    BACKUP="$(mktemp -d)"; mv "$PKG" "$BACKUP/pkg"; ln -s "$(cd ../../../../dist && pwd)" "$PKG"
elif [ -n "${LIBPATH:-}" ]; then
    [ -f "$LIBPATH/theme/styles/lifesg.css" ] || { echo "not a built library: $LIBPATH"; exit 1; }
    BACKUP="$(mktemp -d)"; mv "$PKG" "$BACKUP/pkg"; ln -s "$LIBPATH" "$PKG"
fi
if [ "$SUITE" = overrides ]; then GBACKUP="$(mktemp)"; cp src/app/globals.css "$GBACKUP"; fi
set_globals() {
    case "$1" in
        keep) ;;
        default) cp "$GBACKUP" src/app/globals.css ;;
        reversed) sed 's/^@layer main, fds;$/@layer fds, main;/' "$GBACKUP" >src/app/globals.css ;;
        none) grep -v '^@layer main, fds;$' "$GBACKUP" >src/app/globals.css ;;
        *) echo "unknown globals setup: $1"; exit 1 ;;
    esac
}
mkdir -p results
OUT="results/$LIBNAME-$SUITE.jsonl"; : >"$OUT"
NG=$(echo $GLOBALS_LIST | wc -w | tr -d ' ')
TOTAL=$((RUNS * 2 * NG)); STEP=0; T0=$(date +%s)
for run in $(seq 1 "$RUNS"); do
  for globals in $GLOBALS_LIST; do
    set_globals "$globals"
    for bundler in turbopack webpack; do
        STEP=$((STEP + 1))
        printf '[%d/%d] %s run%d globals=%s  elapsed %ds\n' "$STEP" "$TOTAL" "$bundler" "$run" "$globals" $(( $(date +%s) - T0 ))
        flag=""; [ "$bundler" = webpack ] && flag="--webpack"
        export DIST=".next-$SUITE-$bundler"; rm -rf "$DIST"
        npx next build $flag >"$DIST.build.log" 2>&1 || { echo "build failed: $bundler (see $DIST.build.log)"; exit 1; }
        npx next start -p 4200 >/dev/null 2>&1 & PID=$!; sleep 4
        if [ "$SUITE" = overrides ]; then
            node measure-overrides.mjs 4200 "$LIBNAME $bundler default run$run globals=$globals" >>"$OUT"
        else
            node measure-consumer.mjs 4200 "$LIB $bundler default run$run" >>"$OUT"
        fi
        lsof -ti tcp:4200 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
    done
  done
done
echo "done in $(( $(date +%s) - T0 ))s"
if [ "$SUITE" = overrides ]; then node matrix-overrides.mjs "$OUT"; exit 0; fi
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
