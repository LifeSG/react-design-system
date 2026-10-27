#!/usr/bin/env bash
# Spike 01 / visual sweep: build the copied e2e app (webpack, like the repo's e2e app)
# against each library variant and screenshot all story pages.
#   LIBS="flat styleedge depth"   variants from ../final/libs (run ../final/prepare-libs.sh)
#   SCHEMES="light"               colour schemes ("light dark")
#   VIEWPORTS="desktop"           ("desktop mobile")
# Resumable: a finished (lib, scheme, viewport) writes shots/<lib>/<scheme>-<viewport>/_failures.json
# and is skipped on rerun. Needs local port binding and headless Chromium.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"
LIBS="${LIBS:-flat styleedge depth}"
SCHEMES="${SCHEMES:-light}"
VIEWPORTS="${VIEWPORTS:-desktop}"
APP="$HERE/app"
PKG="$APP/node_modules/@lifesg/react-design-system"
[ -d "$APP/src" ] || ./prepare-app.sh
cleanup() { lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; rm -f "$PKG"; }
trap cleanup EXIT
T0=$(date +%s); fmt() { printf '%dm%02ds' $(($1 / 60)) $(($1 % 60)); }
for lib in $LIBS; do
    [ -d "$HERE/../final/libs/$lib/timeline" ] || { echo "../final/libs/$lib missing: run ../final/prepare-libs.sh"; exit 1; }
    todo=""
    for scheme in $SCHEMES; do for vp in $VIEWPORTS; do
        if [ ! -f "$HERE/shots/$lib/$scheme-$vp/_failures.json" ]; then todo="$todo $scheme-$vp"; fi
    done; done
    if [ -z "$todo" ]; then echo "[$lib] all done, skipping"; continue; fi
    rm -f "$PKG"; ln -s "$HERE/../final/libs/$lib" "$PKG"
    echo "[$lib] building ($(fmt $(( $(date +%s) - T0 ))) elapsed)"
    cd "$APP"; rm -rf .next-sweep
    DIST=.next-sweep npx next build --webpack > "$HERE/build-$lib.log" 2>&1 || { echo "build failed: $lib (see build-$lib.log)"; exit 1; }
    if [ "$lib" != published ]; then
        grep -rqE '@layer fds\.[a-z0-9-]+[,;]' --include='*.css' .next-sweep/static \
            || { echo "guard: $lib build has no fds.* order statement; the library swap did not take"; exit 1; }
    fi
    DIST=.next-sweep npx next start -p 4300 > /dev/null 2>&1 & PID=$!
    for _ in $(seq 1 30); do curl -s -o /dev/null localhost:4300 && break; sleep 1; done
    cd "$HERE"
    for item in $todo; do
        scheme=${item%-*}; vp=${item#*-}
        echo "[$lib] screenshots $scheme $vp ($(fmt $(( $(date +%s) - T0 ))) elapsed)"
        node sweep-shots.mjs 4300 "shots/$lib/$scheme-$vp" "$scheme" "$vp" 4
    done
    lsof -ti tcp:4300 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
done
echo "done in $(fmt $(( $(date +%s) - T0 )))"
