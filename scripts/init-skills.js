#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const CWD = process.cwd();

// Source: skills bundled with this package
const SKILLS_SRC = path.resolve(__dirname, "../docs/skills/cc-flagship-ds");

// IDE detection: marker folder → destination path
const IDE_TARGETS = {
    "Claude Code": {
        marker: ".claude",
        dest: ".claude/commands",
    },
    Cursor: {
        marker: ".cursor",
        dest: ".cursor/rules",
    },
    Windsurf: {
        marker: ".windsurf",
        dest: ".windsurf/rules",
    },
    Copilot: {
        marker: ".github",
        dest: ".github/copilot-instructions",
    },
    Generic: {
        marker: null, // fallback
        dest: ".agents/skills/cc-flagship-ds",
    },
};

// Files to copy from the skill source (top-level only)
// Resources are fetched on-demand by the agent, not copied
const FILES_TO_COPY = ["SKILL.md", "SKILL-v4.md", "catalogue.md"];

function detectIDEs() {
    const detected = [];

    for (const [ide, config] of Object.entries(IDE_TARGETS)) {
        if (ide === "Generic") continue;
        if (fs.existsSync(path.join(CWD, config.marker))) {
            detected.push(ide);
        }
    }

    // fallback to generic if nothing detected
    return detected.length > 0 ? detected : ["Generic"];
}

function copyFiles(ide, destRelative) {
    const destDir = path.join(CWD, destRelative);
    fs.mkdirSync(destDir, { recursive: true });

    const config = IDE_TARGETS[ide];

    for (const filename of FILES_TO_COPY) {
        const src = path.join(SKILLS_SRC, filename);
        if (!fs.existsSync(src)) continue;

        const dest = path.join(destDir, filename);
        fs.copyFileSync(src, dest);
        console.log(`  ✓ ${filename} → ${destRelative}/${filename}`);
    }
}

function main() {
    console.log("\n🚀 Installing Flagship DS agent skills...\n");

    const ides = detectIDEs();
    console.log(`Detected: ${ides.join(", ")}\n`);

    for (const ide of ides) {
        const { dest } = IDE_TARGETS[ide];
        console.log(`[${ide}]`);
        copyFiles(ide, dest);
        console.log();
    }

    console.log("✅ Done! Start building with Flagship DS.\n");
    console.log(
        "Usage: describe what you want to build and your agent will use the skill automatically."
    );
}

main();
