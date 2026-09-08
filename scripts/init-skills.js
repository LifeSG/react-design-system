#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");

const PACKAGE_ROOT = path.resolve(__dirname, "..");

execSync(`npx skills add ${PACKAGE_ROOT}`, { stdio: "inherit" });
