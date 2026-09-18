#!/usr/bin/env node
const { execSync, spawnSync } = require("child_process");
const path = require("path");

const [, , subcommand, ...rest] = process.argv;

if (subcommand === "skills") {
    const packageRoot = path.resolve(__dirname, "..");
    execSync(`npx skills add ${packageRoot}`, { stdio: "inherit" });
} else {
    const codemodBin = path.resolve(__dirname, "../codemods/run-codemod.js");
    const result = spawnSync(
        process.execPath,
        [codemodBin, subcommand, ...rest].filter(Boolean),
        { stdio: "inherit" }
    );
    process.exit(result.status ?? 1);
}
