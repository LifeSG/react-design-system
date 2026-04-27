#!/bin/bash

# Pre-cache Playwright image to speed up the Docker build command
docker pull mcr.microsoft.com/playwright:v1.58.2-noble
