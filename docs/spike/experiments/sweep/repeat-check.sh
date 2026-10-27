#!/usr/bin/env bash
# Spike 01 / visual sweep: are the untraced F17 diffs layering or render noise?
# Renders the given stories twice per library (fresh browser each time) with the same
# settings as sweep-shots.mjs, in all four modes, and diffs each library against itself.
# A story that differs from ITSELF on the same library is noise, not layering.
# Usage: ./repeat-check.sh <component/story ...>   (LIBS default "flat styleedge depth")
# Results: repeat-results.jsonl. Uses port 4300 (run-e2e.sh uses 3000).
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"; APP="$HERE/app"; PKG="$APP/node_modules/@lifesg/react-design-system"
LIBS="${LIBS:-flat styleedge depth}"
OUT="$HERE/repeat-results.jsonl"; : > "$OUT"
cleanup() { lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; rm -f "$PKG"; }
trap cleanup EXIT
printf '%s\n' "$@" > "$HERE/.repeat-stories"
for lib in $LIBS; do
    rm -f "$PKG"; ln -s "$HERE/../final/libs/$lib" "$PKG"
    cd "$APP"; rm -rf .next-repeat
    DIST=.next-repeat npx next build --webpack > /dev/null 2>&1 || { echo "build failed: $lib"; exit 1; }
    DIST=.next-repeat npx next start -p 4300 > /dev/null 2>&1 & PID=$!
    for _ in $(seq 1 30); do curl -s -o /dev/null localhost:4300 && break; sleep 1; done
    cd "$HERE"
    # two passes laid out as pseudo-libraries shots/repeat-<lib>-a|b/<mode>/, the shape
    # diff-sweep.mjs reads, each pass in a fresh browser
    for pass in a b; do
        rm -rf "shots/repeat-$lib-$pass"
        for scheme in light dark; do for vp in desktop mobile; do
            STORIES_FILE="$HERE/.repeat-stories" node sweep-shots.mjs 4300 "shots/repeat-$lib-$pass/$scheme-$vp" "$scheme" "$vp" 2 > /dev/null
            rm -f "shots/repeat-$lib-$pass/$scheme-$vp/_failures.json"
        done; done
    done
    node diff-sweep.mjs "repeat-$lib-a" "repeat-$lib-b" \
        | node -e 'for (const l of require("fs").readFileSync(0,"utf8").trim().split("\n").filter(Boolean)) console.log(JSON.stringify({ lib: process.argv[1], ...JSON.parse(l) }));' "$lib" >> "$OUT"
    lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
done
node -e '
const rows = require("fs").readFileSync(process.argv[1],"utf8").trim().split("\n").filter(Boolean).map(JSON.parse);
const noisy = rows.filter((r) => r.diffPixels > 0 || r.sizeMismatch);
console.log(rows.length, "self-comparisons,", noisy.length, "differ from themselves");
for (const r of noisy) console.log("  ", r.lib.padEnd(10), r.mode.padEnd(14), r.image, r.diffPixels ?? r.sizeMismatch);' "$OUT"
