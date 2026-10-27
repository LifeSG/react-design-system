#!/usr/bin/env bash
# Spike 01 / exit criterion 2: one combination only (turbopack/default), for checking
# the harness before the full run. Usage: LIBS=<lib> BUILDS=<n> ./smoke.sh
set -euo pipefail
sed -e 's|^COMBOS=.*|COMBOS="turbopack/default"|' run-final.sh > .run-final-smoke.sh
chmod +x .run-final-smoke.sh
./.run-final-smoke.sh
rm -f .run-final-smoke.sh
