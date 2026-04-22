#!/usr/bin/env node
/**
 * Copies the static Copilot instruction file into the consuming repo's
 * .github/instructions/ folder.
 *
 * Runs automatically via the postinstall hook when the package is installed.
 * Can also be run manually:
 *   node node_modules/@lifesg/react-design-system/generate-component-instructions.js
 */

"use strict";

const fs = require("fs");
const path = require("path");

// In dist the instructions file is bundled alongside this script.
// In the source repo it lives at .github/instructions/.
const TEMPLATE = fs.existsSync(
    path.join(__dirname, "design-system-components.instructions.md")
)
    ? path.join(__dirname, "design-system-components.instructions.md")
    : path.join(
          __dirname,
          "..",
          ".github",
          "instructions",
          "design-system-components.instructions.md"
      );
// INIT_CWD is set by npm to the consumer's project root when running as a
// postinstall hook. Fall back to process.cwd() for manual invocations.
const PROJECT_ROOT = process.env.INIT_CWD || process.cwd();

const OUTPUT = path.join(
    PROJECT_ROOT,
    ".github",
    "instructions",
    "design-system-components.instructions.md"
);

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.copyFileSync(TEMPLATE, OUTPUT);
console.log(
    `[lifesg-ds] Copied design-system-components.instructions.md to ${path.relative(
        PROJECT_ROOT,
        OUTPUT
    )}`
);
