#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Run functional tests
# Accepts an optional shard argument, e.g. ./scripts/e2e-ci-test.sh 1/4
SHARD=${1:-""}

# Set up E2E test environment
LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
echo "[CI] Installing in NextJS"
pushd e2e/nextjs-app
npm i ../../dist/lifesg-react-design-system-$LIB_VERSION.tgz
rm -rf .next
popd

echo "[CI] Running Playwright${SHARD:+ (shard $SHARD)}"
export CI=true

if [ -n "$SHARD" ]; then
    npx playwright test --shard="$SHARD"
else
    npx playwright test
fi
