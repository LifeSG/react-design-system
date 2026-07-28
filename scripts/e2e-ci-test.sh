#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Run functional tests
# Accepts an optional shard argument, e.g. ./scripts/e2e-ci-test.sh 1/4
SHARD=${1:-""}

# Restore built library into the E2E Next.js app (node_modules already has base deps)
LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d ")
echo "[CI] Restoring library in NextJS"
pushd e2e/nextjs-app
npm i ../../dist/lifesg-react-design-system-$LIB_VERSION.tgz
popd

echo "[CI] Running Playwright${SHARD:+ (shard $SHARD)}"
export CI=true

if [ -n "$SHARD" ]; then
    npx playwright test --shard="$SHARD"
else
    npx playwright test
fi
