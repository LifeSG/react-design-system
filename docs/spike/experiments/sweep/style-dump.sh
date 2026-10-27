#!/usr/bin/env bash
# Usage: ./style-dump.sh <viewport> <component/story ...>
# Builds the sweep app against flat, styleedge and depth and dumps computed styles for the
# given story pages into styles/<lib>.json. Needs ../final/libs and ./app (prepare-app.sh).
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"; APP="$HERE/app"; PKG="$APP/node_modules/@lifesg/react-design-system"
VP="$1"; shift
mkdir -p styles
cleanup() { lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; rm -f "$PKG"; }
trap cleanup EXIT
for lib in flat styleedge depth; do
    rm -f "$PKG"; ln -s "$HERE/../final/libs/$lib" "$PKG"
    ( cd "$APP"; rm -rf .next-sweep; DIST=.next-sweep npx next build --webpack > /dev/null 2>&1 )
    ( cd "$APP"; DIST=.next-sweep npx next start -p 4300 > /dev/null 2>&1 & ) 
    for _ in $(seq 1 30); do curl -s -o /dev/null localhost:4300 && break; sleep 1; done
    node style-dump.mjs 4300 "styles/$lib.json" "$VP" "$@"
    lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; sleep 1
done
echo "dumped flat styleedge depth for: $*"
