#!/usr/bin/env bash
# Spike 01 / exit criterion 2: every library x bundler combination x BUILDS rebuilds,
# with the e2/ probes (static + navigation) and full-page screenshots.
#   LIBS="published importorder reordered styleedge depth naive"  (default: all seven)
#   BUILDS=5
# Libraries other than `published` come from libs/ (run ./prepare-libs.sh first).
# Resumable: a finished step writes results/done/<step>; rerunning skips it, so an
# interrupted run continues where it stopped. Delete results/ to start over.
# Results: results/<lib>.jsonl, results/<lib>-nav.jsonl, shots/<lib>/<combo>/build<n>/.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"
E2="$(cd ../e2 && pwd)"
LIBS="${LIBS:-published flat importorder reordered styleedge depth naive}"
BUILDS="${BUILDS:-5}"
PKG="$E2/node_modules/@lifesg/react-design-system"
COMBOS="turbopack/default turbopack/graph webpack/default webpack/strict"
mkdir -p results/done shots

BACKUP="$(mktemp -d)"
cleanup() {
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    if [ -L "$PKG" ] && [ -d "$BACKUP/pkg" ]; then rm -f "$PKG"; mv "$BACKUP/pkg" "$PKG"; fi
}
trap cleanup EXIT
use_lib() { # point the e2 app's package at a library build
    # if/fi, not `[ ... ] && ...`: under set -e a false test there ends the script
    # without a message (it silently skipped every `published` step once).
    if [ "$1" = published ]; then
        if [ -L "$PKG" ]; then rm -f "$PKG"; mv "$BACKUP/pkg" "$PKG"; fi
    else
        [ -d "$HERE/libs/$1/timeline" ] || { echo "libs/$1 missing: run ./prepare-libs.sh"; exit 1; }
        if [ ! -L "$PKG" ]; then mv "$PKG" "$BACKUP/pkg"; fi
        rm -f "$PKG"; ln -s "$HERE/libs/$1" "$PKG"
    fi
    return 0
}

TOTAL=0; for _ in $LIBS; do TOTAL=$((TOTAL + BUILDS * 4)); done
STEP=0; DONE_NOW=0; T0=$(date +%s)
fmt() { printf '%dh%02dm' $(($1 / 3600)) $(($1 % 3600 / 60)); }
echo "libraries: $LIBS | builds per combination: $BUILDS | steps: $TOTAL"
cd "$E2"
for lib in $LIBS; do
    use_lib "$lib"
    node class-map.mjs "$PKG" > "$HERE/results/class-map-$lib.json"
    for build in $(seq 1 "$BUILDS"); do
        for combo in $COMBOS; do
            STEP=$((STEP + 1))
            bundler=${combo%/*}; chunking=${combo#*/}
            key="$lib-$bundler-$chunking-build$build"
            if [ -f "$HERE/results/done/$key" ]; then continue; fi
            elapsed=$(( $(date +%s) - T0 )); eta=""
            if [ "$DONE_NOW" -gt 0 ]; then eta=" | ~$(fmt $(( elapsed / DONE_NOW * (TOTAL - STEP + 1) ))) left"; fi
            printf '[%d/%d] %-11s %-18s build%d  elapsed %s%s\n' "$STEP" "$TOTAL" "$lib" "$combo" "$build" "$(fmt $elapsed)" "$eta"
            flag=""; if [ "$bundler" = webpack ]; then flag="--webpack"; fi
            export CSS_CHUNKING=""; if [ "$chunking" != default ]; then export CSS_CHUNKING="$chunking"; fi
            export DIST=".next-final"; rm -rf "$DIST"
            npx next build $flag >/dev/null 2>&1 || { echo "build failed: $key"; exit 1; }
            if [ "$lib" != published ]; then
                # any `@layer fds.<name>` order statement (flat has one name, no comma);
                # the published package has none, its blocks are `@layer fds{`
                grep -rqE '@layer fds\.[a-z0-9-]+[,;]' --include='*.css' "$DIST/static" \
                    || { echo "guard: $key has no fds.* order statement; the library swap did not take"; exit 1; }
            fi
            npx next start -p 4200 >/dev/null 2>&1 & PID=$!
            for _ in $(seq 1 30); do curl -s -o /dev/null localhost:4200 && break; sleep 1; done
            label="$lib $bundler $chunking build$build"
            node measure.mjs 4200 "$label" "$HERE/results/class-map-$lib.json" >> "$HERE/results/$lib.jsonl"
            node measure-nav.mjs 4200 "$label" "$HERE/results/class-map-$lib.json" >> "$HERE/results/$lib-nav.jsonl"
            node screenshot.mjs 4200 "$HERE/shots/$lib/$bundler-$chunking/build$build" >/dev/null
            lsof -ti tcp:4200 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
            touch "$HERE/results/done/$key"; DONE_NOW=$((DONE_NOW + 1))
        done
    done
done
echo "all $TOTAL steps done in $(fmt $(( $(date +%s) - T0 )))"
