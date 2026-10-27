#!/usr/bin/env bash
# Spike 01 / exit criterion 2: build every library variant once into libs/<name>/, so
# the final run can switch libraries without rebuilding. Run from this directory.
#   importorder  83 layers, JS import order: the original rl/css-layers generator (F9)
#   reordered    importorder with form moved before input-textarea (F11)
#   styleedge    85 layers, style-edge order: the current generator (F13)
#   depth        styleedge collapsed into 4 tiers by style-edge depth (F14)
#   naive        styleedge collapsed into 2 hand-picked tiers (F14 control)
#   flat         styleedge collapsed into 1 layer: same component source, no per-folder
#                ordering. The control for screenshot diffs: published alpha.14 differs
#                from the branch in component code too, flat differs only in layering
# The published alpha.14 package is the fifth library; run-final.sh uses it as installed.
# Leaves dist/ holding the styleedge build, as before. Needs ~150 MB under libs/.
set -euo pipefail
ROOT="$(cd ../../../.. && pwd)"
LIBS="$PWD/libs"
PLUGIN="rollup/add-css-layer-plugin.js"
mkdir -p "$LIBS"
cd "$ROOT"
[ -z "$(git status --porcelain -- "$PLUGIN" rollup/style-edges.js)" ] || { echo "rollup/ has uncommitted changes; commit or stash first"; exit 1; }
restore_plugin() { git checkout -q HEAD -- "$PLUGIN"; }
trap restore_plugin EXIT

save() { rm -rf "$LIBS/$1"; cp -R dist "$LIBS/$1"; echo "  saved $1: $(sed -n 2p dist/theme/styles/lifesg.css | tr ',' '\n' | wc -l | tr -d ' ') names in the order statement"; }

echo "[1/2] importorder: building with the rl/css-layers generator"
git show rl/css-layers:"$PLUGIN" > "$PLUGIN"
npm run build >/dev/null 2>&1
save importorder
node docs/spike/scripts/reorder-layers.mjs form input-textarea >/dev/null
save reordered
restore_plugin

echo "[2/2] styleedge: building with the current generator"
npm run build >/dev/null 2>&1
save styleedge
for tiers in depth naive flat; do
    rm -rf dist && cp -R "$LIBS/styleedge" dist
    node docs/spike/scripts/tier-layers.mjs "$tiers" >/dev/null 2>&1
    save "$tiers"
done
rm -rf dist && cp -R "$LIBS/styleedge" dist
echo "done; dist/ holds styleedge again"
