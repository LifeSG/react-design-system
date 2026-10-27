#!/usr/bin/env bash
# Spike 01 / visual sweep, interaction states: the repo's own Playwright suite
# (e2e/tests, 92 specs, 1,387 baseline screenshots) against the sweep app built with each
# library variant. Baselines come from the branch's component source, so failures in
# `flat` are the noise floor (flakes, environment, baseline drift) and only failures that
# are new in a layered library count as layering.
#   LIBS="flat styleedge"     variants from ../final/libs
#   SPECS=""                  optional test path filter, e.g. e2e/tests/components/badge
# Uses playwright.config.ts unchanged: it starts the Docker Playwright server itself and
# reuses the app this script serves on :3000 (CI must be unset). Needs colima/Docker.
# Results: e2e-results/<lib>.json (Playwright JSON report) and e2e-results/<lib>.log;
# failure images in e2e-results/<lib>-test-results/ (gitignored).
set -euo pipefail
unset CI
export NEXT_TELEMETRY_DISABLED=1
HERE="$PWD"; ROOT="$(cd ../../../.. && pwd)"
APP="$HERE/app"; PKG="$APP/node_modules/@lifesg/react-design-system"
LIBS="${LIBS:-flat styleedge}"; SPECS="${SPECS:-}"
[ -d "$APP/src" ] || ./prepare-app.sh
mkdir -p e2e-results
cleanup() { lsof -ti tcp:3000 | xargs kill 2>/dev/null || true; rm -f "$PKG"; }
trap cleanup EXIT
T0=$(date +%s); fmt() { printf '%dh%02dm' $(($1 / 3600)) $(($1 % 3600 / 60)); }
for lib in $LIBS; do
    [ -d "$HERE/../final/libs/$lib/timeline" ] || { echo "../final/libs/$lib missing: run ../final/prepare-libs.sh"; exit 1; }
    rm -f "$PKG"; ln -s "$HERE/../final/libs/$lib" "$PKG"
    echo "[$lib] building ($(fmt $(( $(date +%s) - T0 ))) elapsed)"
    cd "$APP"; rm -rf .next-e2e
    DIST=.next-e2e npx next build --webpack > "$HERE/e2e-results/$lib-build.log" 2>&1 || { echo "build failed: $lib"; exit 1; }
    if [ "$lib" != published ]; then
        grep -rqE '@layer fds\.[a-z0-9-]+[,;]' --include='*.css' .next-e2e/static \
            || { echo "guard: $lib build has no fds.* order statement; the library swap did not take"; exit 1; }
    fi
    lsof -ti tcp:3000 | xargs kill 2>/dev/null || true
    DIST=.next-e2e npx next start -p 3000 > /dev/null 2>&1 & PID=$!
    for _ in $(seq 1 30); do curl -s -o /dev/null localhost:3000 && break; sleep 1; done
    cd "$ROOT"
    echo "[$lib] playwright ($(fmt $(( $(date +%s) - T0 ))) elapsed)"
    status=0
    PLAYWRIGHT_JSON_OUTPUT_NAME="$HERE/e2e-results/$lib.json" \
        npx playwright test $SPECS --reporter=line,json --output="$HERE/e2e-results/$lib-test-results" \
        > "$HERE/e2e-results/$lib.log" 2>&1 || status=$?
    echo "[$lib] playwright exit $status; $(grep -E '^\s+[0-9]+ (passed|failed|flaky|skipped)' "$HERE/e2e-results/$lib.log" | tr -s ' ' | tr '\n' ' ')"
    lsof -ti tcp:3000 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
done
echo "done in $(fmt $(( $(date +%s) - T0 )))"
