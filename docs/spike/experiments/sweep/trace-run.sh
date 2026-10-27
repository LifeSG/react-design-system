#!/usr/bin/env bash
# Usage: ./trace-run.sh "<component/story> <class> <prop> ..." ...   (one quoted group per story)
# Builds the sweep app against flat and styleedge and prints rule-trace.mjs for each group.
# TRACE_OUT=<file> also writes the output there (traces-f17.txt holds the F17 traces).
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"; APP="$HERE/app"; PKG="$APP/node_modules/@lifesg/react-design-system"
cleanup() { lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; rm -f "$PKG"; }
trap cleanup EXIT
if [ -n "${TRACE_OUT:-}" ]; then exec > >(tee -a "$TRACE_OUT"); fi
for lib in flat styleedge; do
    rm -f "$PKG"; ln -s "$HERE/../final/libs/$lib" "$PKG"
    ( cd "$APP"; rm -rf .next-sweep; DIST=.next-sweep npx next build --webpack > /dev/null 2>&1 )
    ( cd "$APP"; DIST=.next-sweep npx next start -p 4300 > /dev/null 2>&1 & )
    for _ in $(seq 1 30); do curl -s -o /dev/null localhost:4300 && break; sleep 1; done
    echo "######## $lib"
    for group in "$@"; do echo " [$group]"; node rule-trace.mjs 4300 $group; done
    lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; sleep 1
done
