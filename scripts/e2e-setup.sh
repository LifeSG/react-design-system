#!/bin/bash

# Ensure node_modules is present and in sync with package-lock.json

E2E_APP_DIR="e2e/nextjs-app"

if [ ! -d "$E2E_APP_DIR/node_modules" ] || ! npm ls --prefix "$E2E_APP_DIR" --prefer-offline > /dev/null 2>&1; then
    echo "Installing dependencies in $E2E_APP_DIR..."
    npm ci --prefix "$E2E_APP_DIR"
else
    echo "Dependencies in $E2E_APP_DIR are up to date."
fi

# Pre-cache Playwright image to speed up the Docker build command

PLAYWRIGHT_IMAGE="mcr.microsoft.com/playwright:v1.58.2-noble"

if ! docker image inspect "$PLAYWRIGHT_IMAGE" > /dev/null 2>&1; then
    echo "Pulling $PLAYWRIGHT_IMAGE..."
    docker pull "$PLAYWRIGHT_IMAGE"
else
    echo "Image $PLAYWRIGHT_IMAGE is already cached."
fi
