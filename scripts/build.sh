#!/bin/bash

echo ==============================================================================
echo Script: $(basename "$0")
echo Builds and prepares the distribution
echo ==============================================================================

# ==============================================================================
# Setup
# ==============================================================================

# Exit immediately if a command exits with a non-zero status.
set -e

# OS settings
if [ "$(uname)" = "Darwin" ]; then
	[ -z "$( brew ls --versions findutils )" ] && brew install findutils
	[ -z "$( brew ls --versions coreutils )" ] && brew install coreutils
	READLINK="greadlink"
	XARGS="gxargs"
else
	READLINK="readlink"
	XARGS="xargs"
fi

SCRIPT_PATH=$( ${READLINK} -f $0 )
SCRIPT_DIR=$( dirname $( ${READLINK} -f $0 ) )
PROJECT_DIR=$( cd ${SCRIPT_DIR} && cd .. && pwd )

# ==============================================================================
# Script
# ==============================================================================

# Set project directory
pushd ${PROJECT_DIR}

# Build and pack
echo "Building"
npm run build

npx wyw-in-js \
  --config ./wyw-in-js.config.js \
  --source-root ./src \
  --out-dir ./dist/wyw-css \
  --insert-css-requires ./dist \
  --modules esnext \
  --transform \
  "src/**/*.{ts,tsx,js,jsx}"

npx wyw-in-js \
  --config ./wyw-in-js.config.js \
  --source-root ./src \
  --out-dir ./dist/cjs/wyw-css \
  --insert-css-requires ./dist/cjs \
  --modules commonjs \
  --transform \
  "src/**/*.{ts,tsx,js,jsx}"

echo "Packaging"
pushd dist
npm pack
popd

# Return to invocation dir
popd
