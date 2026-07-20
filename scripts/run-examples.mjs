/**
 * run-examples.mjs
 *
 * Starts all example apps in parallel on sequential ports with colored output.
 * The port table is pinned at the top of the terminal using ANSI scroll regions.
 *
 * Usage:
 *   node scripts/run-examples.mjs
 */
import { execSync, spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const BASE_PORT = 4200;

const COLORS = [
    "\x1b[36m", // cyan
    "\x1b[33m", // yellow
    "\x1b[35m", // magenta
    "\x1b[32m", // green
    "\x1b[34m", // blue
    "\x1b[91m", // bright red
    "\x1b[92m", // bright green
    "\x1b[93m", // bright yellow
    "\x1b[95m", // bright magenta
];
const RESET = "\x1b[0m";
const DIM = "\x1b[2m";

/** Directories to scan for runnable apps */
const APP_DIRS = [path.join(rootDir, "example"), path.join(rootDir, "e2e")];

/** Apps to exclude (not standalone dev servers) */
const EXCLUDE = new Set(["proxy", "shared", "tests"]);

const entries = APP_DIRS.flatMap((dir) => {
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .filter((d) => !EXCLUDE.has(d.name))
        .filter((d) => fs.existsSync(path.join(dir, d.name, "package.json")))
        .map((d) => ({ name: d.name, dir: path.join(dir, d.name) }));
}).sort((a, b) => a.name.localeCompare(b.name));

if (entries.length === 0) {
    console.log("No example apps found.");
    process.exit(0);
}

const apps = entries.map((entry, i) => {
    const pkg = JSON.parse(
        fs.readFileSync(path.join(entry.dir, "package.json"), "utf8")
    );
    const scripts = pkg.scripts || {};
    const cmd = scripts.dev ? "dev" : scripts.start ? "start" : null;
    const isAngular = !!scripts["ng"] || !!pkg.dependencies?.["@angular/core"];
    return {
        name: entry.name,
        dir: entry.dir,
        cmd,
        isAngular,
        port: BASE_PORT + i,
    };
});

const maxName = Math.max(...apps.map((a) => a.name.length));
const headerLines = apps.length + 4; // border + title + border + apps + border

function buildHeader() {
    const divider = "─".repeat(maxName + 30);
    const lines = [divider, " Example Apps — Ports", divider];
    apps.forEach((app, i) => {
        const color = COLORS[i % COLORS.length];
        const url = app.cmd
            ? `http://localhost:${app.port}`
            : `${DIM}(no dev script)${RESET}`;
        lines.push(
            `  ${color}${app.name.padEnd(maxName + 2)}${RESET} → ${url}`
        );
    });
    lines.push(divider);
    return lines;
}

function renderHeader() {
    const lines = buildHeader();
    // Save cursor, move to top-left, clear the header area, draw, restore cursor
    process.stdout.write("\x1b7"); // save cursor
    for (let i = 0; i < lines.length; i++) {
        process.stdout.write(`\x1b[${i + 1};1H\x1b[2K${lines[i]}`);
    }
    process.stdout.write("\x1b8"); // restore cursor
}

function setupScrollRegion() {
    // Clear screen, draw header, set scroll region below header
    process.stdout.write("\x1b[2J"); // clear screen
    process.stdout.write("\x1b[H"); // move to top
    const lines = buildHeader();
    for (const line of lines) {
        process.stdout.write(line + "\n");
    }
    // Set scroll region from line after header to bottom of terminal
    const rows = process.stdout.rows || 24;
    process.stdout.write(`\x1b[${headerLines + 1};${rows}r`);
    // Move cursor into the scroll region
    process.stdout.write(`\x1b[${headerLines + 1};1H`);
}

function resetScrollRegion() {
    // Reset scroll region to full terminal
    process.stdout.write("\x1b[r");
}

setupScrollRegion();

// Redraw on terminal resize
process.stdout.on("resize", () => {
    const rows = process.stdout.rows || 24;
    process.stdout.write(`\x1b[${headerLines + 1};${rows}r`);
    renderHeader();
});

const children = [];

function installIfNeeded(dir, name) {
    const nodeModules = path.join(dir, "node_modules");
    if (!fs.existsSync(nodeModules)) {
        process.stdout.write(`  Installing deps for ${name}...\n`);
        execSync("npm install", { cwd: dir, stdio: "pipe" });
        process.stdout.write(`  Installed deps for ${name}\n`);
    }
}

function startApp(app, index) {
    if (!app.cmd) return;

    const color = COLORS[index % COLORS.length];
    const prefix = `${color}[${app.name}]${RESET}`;

    installIfNeeded(app.dir, app.name);

    const args = ["run", app.cmd, "--"];
    if (app.isAngular) {
        args.push(`--port=${app.port}`);
    } else {
        args.push("--port", String(app.port));
    }

    const child = spawn("npm", args, {
        cwd: app.dir,
        stdio: ["ignore", "pipe", "pipe"],
        env: { ...process.env, FORCE_COLOR: "1", BROWSER: "none" },
    });

    children.push(child);

    const handleData = (data) => {
        const lines = data.toString().split("\n");
        for (const line of lines) {
            if (line.trim()) {
                process.stdout.write(`${prefix} ${line}\n`);
            }
        }
    };

    child.stdout.on("data", handleData);
    child.stderr.on("data", handleData);

    child.on("exit", (code) => {
        if (code !== null && code !== 0) {
            process.stdout.write(`${prefix} exited with code ${code}\n`);
        }
    });
}

apps.forEach((app, i) => startApp(app, i));

function cleanup() {
    resetScrollRegion();
    console.log("\nShutting down all example apps...");
    for (const child of children) {
        child.kill("SIGTERM");
    }
    setTimeout(() => process.exit(0), 1000);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
