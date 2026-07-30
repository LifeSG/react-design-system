#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Create production build of library
LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
echo "[CI] Building v$LIB_VERSION"
./scripts/build.sh
