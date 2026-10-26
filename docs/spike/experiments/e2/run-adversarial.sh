#!/usr/bin/env bash
# Spike 01 / E4: the F10 pair with its rules forced into the hostile source order
# (child's rule after parent's), on four library builds:
#   published   alpha.14, one `fds` layer         (source order decides)
#   perfolder   the style-edge generator, 85 layers (layer order decides)
#   naive       2 hand-picked tiers               (both in `components`: source order)
#   depth       4 style-edge-depth tiers          (t1 over t0: layer order)
# Runs `npm run build` once at the repo root, keeps a pristine copy in .dist-ref, and
# restores dist/ from it at the end. Turbopack default and webpack default.
# Results: results/adversarial.jsonl. Needs local port binding and headless Chromium.
set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1 CSS_CHUNKING=""
ROOT="$(cd ../../../.. && pwd)"
PKG="node_modules/@lifesg/react-design-system"
OUT="results/adversarial.jsonl"; : >"$OUT"
cleanup() {
    lsof -ti tcp:4200 | xargs kill 2>/dev/null || true
    [ -L "$PKG" ] && rm -f "$PKG" && mv "$BACKUP/pkg" "$PKG"
    [ -d .dist-ref ] && rm -rf "$ROOT/dist" && cp -R .dist-ref "$ROOT/dist"
}
BACKUP="$(mktemp -d)"
trap cleanup EXIT

echo "building the library (npm run build at the repo root)"
(cd "$ROOT" && npm run build >/dev/null 2>&1)
rm -rf .dist-ref && cp -R "$ROOT/dist" .dist-ref

STEP=0; TOTAL=8; T0=$(date +%s)
for variant in published perfolder naive depth; do
    if [ "$variant" = published ]; then
        [ -L "$PKG" ] && rm -f "$PKG" && mv "$BACKUP/pkg" "$PKG"
        LIBDIR="$PKG"
    else
        rm -rf "$ROOT/dist" && cp -R .dist-ref "$ROOT/dist"
        [ "$variant" = naive ] || [ "$variant" = depth ] && (cd "$ROOT" && node docs/spike/scripts/tier-layers.mjs "$variant" >/dev/null 2>&1)
        [ -L "$PKG" ] || { mv "$PKG" "$BACKUP/pkg"; ln -s "$ROOT/dist" "$PKG"; }
        LIBDIR="$ROOT/dist"
    fi
    node make-adversarial.mjs "$LIBDIR" >/dev/null
    for bundler in turbopack webpack; do
        STEP=$((STEP + 1))
        printf '[%d/%d] %-10s %-9s elapsed %ds\n' "$STEP" "$TOTAL" "$variant" "$bundler" $(( $(date +%s) - T0 ))
        flag=""; [ "$bundler" = webpack ] && flag="--webpack"
        export DIST=".next-adv"; rm -rf "$DIST"
        npx next build $flag >/dev/null 2>&1 || { echo "build failed: $variant $bundler"; exit 1; }
        npx next start -p 4200 >/dev/null 2>&1 & PID=$!; sleep 4
        node probe-one.mjs 4200 adversarial/textarea-child-last "textarea error message" \
            | node -e 'const r=JSON.parse(require("fs").readFileSync(0,"utf8")); console.log(JSON.stringify({variant:process.argv[1],bundler:process.argv[2],value:r.value,ok:r.ok,hits:r.hits}))' "$variant" "$bundler" >>"$OUT"
        lsof -ti tcp:4200 | xargs kill 2>/dev/null || true; wait $PID 2>/dev/null || true
    done
done
echo "done in $(( $(date +%s) - T0 ))s"
node -e '
for (const l of require("fs").readFileSync(process.argv[1], "utf8").trim().split("\n")) {
    const r = JSON.parse(l);
    console.log(r.variant.padEnd(10), r.bundler.padEnd(9), r.value.padEnd(4), r.ok ? "ok   " : "WRONG", " rules in source order:", r.hits.join("  |  "));
}' "$OUT"
