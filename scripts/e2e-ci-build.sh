#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Create production build of library
LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
echo "[CI] Building v$LIB_VERSION"
export IS_E2E=true
./scripts/build.sh
