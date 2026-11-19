#!/usr/bin/env bash
# Spike 01 / E8: build the sweep app (../sweep/app, from ../sweep/prepare-app.sh) against a
# library from ../final/libs and run conflict-scan.mjs on it. Run from this directory.
#   LIB=styleedge         library to scan; its layer names must be folder names
#   OUT=results/<lib>     output directory (pages.jsonl, pairs.jsonl)
#   VIEWPORTS=desktop,mobile
#   STORIES="a/b c/d"     only these pages (default: all 519)
#   SKIP_BUILD=1          reuse the last build in app/.next-scan
# Port 4300, like run-sweep.sh: run nothing else on the sweep app at the same time.
# Needs local port binding and headless Chromium.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"
LIB="${LIB:-styleedge}"
OUT="${OUT:-results/$LIB}"
APP="$HERE/../sweep/app"
PKG="$APP/node_modules/@lifesg/react-design-system"
[ -d "$APP/src" ] || (cd ../sweep && ./prepare-app.sh)
[ -d "$HERE/../final/libs/$LIB/timeline" ] || { echo "../final/libs/$LIB missing: run ../final/prepare-libs.sh"; exit 1; }
(cd ../../../.. && node docs/spike/experiments/scan/static.mjs 2>/dev/null)
cleanup() { lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; rm -f "$PKG"; }
trap cleanup EXIT
lsof -ti tcp:4300 >/dev/null && { echo "port 4300 is in use; is a sweep running?"; exit 1; }
rm -f "$PKG"; ln -s "$HERE/../final/libs/$LIB" "$PKG"
cd "$APP"
if [ -z "${SKIP_BUILD:-}" ]; then
    echo "[$LIB] building"
    rm -rf .next-scan
    DIST=.next-scan npx next build --webpack > "$HERE/build-$LIB.log" 2>&1 || { echo "build failed (see build-$LIB.log)"; exit 1; }
fi
grep -rqE '@layer fds\.[a-z0-9-]+[,;]' --include='*.css' .next-scan/static \
    || { echo "guard: build has no fds.* order statement; the library swap did not take"; exit 1; }
DIST=.next-scan npx next start -p 4300 > "$HERE/serve-$LIB.log" 2>&1 &
for _ in $(seq 1 30); do curl -s -o /dev/null localhost:4300 && break; sleep 1; done
curl -s -o /dev/null localhost:4300 || { echo "server did not start (see serve-$LIB.log)"; exit 1; }
cd "$HERE"
node conflict-scan.mjs 4300 "$OUT" "${VIEWPORTS:-desktop,mobile}" "${CONCURRENCY:-4}"
