#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Create production build of library
LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
echo "[CI] Building v$LIB_VERSION"
sh scripts/build.sh

# Set up E2E test environment
echo "[CI] Installing in NextJS"
pushd e2e/nextjs-app
npm i ../../dist/lifesg-react-design-system-$LIB_VERSION.tgz
rm -rf .next
popd

# Run functional tests
echo "[CI] Running Playwright"
export CI=true
npx playwright test
