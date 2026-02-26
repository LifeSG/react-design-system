#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

pushd ../../

LIB_VERSION=$(npm pkg get version --workspaces=false | tr -d \")
echo "Building v$LIB_VERSION"

sh scripts/build.sh

popd

npm i ../../dist/lifesg-react-design-system-$LIB_VERSION.tgz
