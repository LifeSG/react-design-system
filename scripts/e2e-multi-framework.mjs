/**
 * Launcher script for cross-framework E2E testing.
 * Starts all framework dev servers + the reverse proxy.
 *
 * Usage: node scripts/e2e-multi-framework.mjs
 */

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const apps = [
    {
        name: "react",
        dir: "e2e/nextjs-app",
        cmd: "npm",
        args: ["run", "dev"],
        port: 3000,
    },
    {
        name: "a3-svelte",
        dir: "e2e/a3-svelte-app",
        cmd: "npm",
        args: ["run", "dev", "--", "--port", "3001"],
        port: 3001,
    },
    {
        name: "a3-vue",
        dir: "e2e/a3-vue-app",
        cmd: "npm",
        args: ["run", "dev", "--", "--port", "3002"],
        port: 3002,
    },
    {
        name: "a3-angular",
        dir: "e2e/a3-angular-app",
        cmd: "npm",
        args: [
            "run",
            "start",
            "--",
            "--port=3003",
            "--serve-path=/a3-angular/",
        ],
        port: 3003,
    },
    {
        name: "a4-svelte",
        dir: "e2e/a4-svelte-app",
        cmd: "npm",
        args: ["run", "dev", "--", "--port", "3004"],
        port: 3004,
    },
    {
        name: "a4-vue",
        dir: "e2e/a4-vue-app",
        cmd: "npm",
        args: ["run", "dev", "--", "--port", "3005"],
        port: 3005,
    },
    {
        name: "a4-angular",
        dir: "e2e/a4-angular-app",
        cmd: "npm",
        args: [
            "run",
            "start",
            "--",
            "--port=3006",
            "--serve-path=/a4-angular/",
        ],
        port: 3006,
    },
    {
        name: "proxy",
        dir: "e2e/proxy",
        cmd: "npm",
        args: ["start"],
        port: 3010,
    },
];

const children = [];

function printHeader() {
    const line = "─".repeat(50);
    console.log(line);
    console.log(" Cross-Framework E2E — Ports");
    console.log(line);
    for (const app of apps) {
        const padding = " ".repeat(Math.max(0, 16 - app.name.length));
        console.log(`  ${app.name}${padding} → http://localhost:${app.port}`);
    }
    console.log(line);
    console.log("");
    console.log("Proxy routes:");
    console.log(
        "  http://localhost:3010/{framework}/components/{component}/{story}"
    );
    console.log("");
}

async function waitForPort(port, timeout = 30000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        try {
            const res = await fetch(`http://localhost:${port}`);
            if (res.ok || res.status < 500) return true;
        } catch {
            // not ready yet
        }
        await new Promise((r) => setTimeout(r, 500));
    }
    return false;
}

function startApp(app) {
    const cwd = path.resolve(ROOT, app.dir);

    if (!existsSync(cwd)) {
        console.error(`  [${app.name}] Directory not found: ${cwd}`);
        return null;
    }

    const child = spawn(app.cmd, app.args, {
        cwd,
        stdio: ["ignore", "pipe", "pipe"],
        shell: true,
    });

    child.stdout.on("data", (data) => {
        const lines = data.toString().trim().split("\n");
        for (const line of lines) {
            console.log(`  [${app.name}] ${line}`);
        }
    });

    child.stderr.on("data", (data) => {
        const lines = data.toString().trim().split("\n");
        for (const line of lines) {
            console.log(`  [${app.name}] ${line}`);
        }
    });

    child.on("exit", (code) => {
        if (code !== null && code !== 0) {
            console.log(`  [${app.name}] exited with code ${code}`);
        }
    });

    children.push(child);
    return child;
}

function cleanup() {
    console.log("\nShutting down...");
    for (const child of children) {
        child.kill("SIGTERM");
    }
    process.exit(0);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

// Start all apps
printHeader();

for (const app of apps) {
    startApp(app);
}

// Wait for all to be ready
console.log("Waiting for all servers to be ready...");
const results = await Promise.all(
    apps.map(async (app) => {
        const ready = await waitForPort(app.port);
        if (ready) {
            console.log(`  ✓ ${app.name} ready on port ${app.port}`);
        } else {
            console.log(`  ✗ ${app.name} timed out on port ${app.port}`);
        }
        return { name: app.name, ready };
    })
);

const allReady = results.every((r) => r.ready);
if (allReady) {
    console.log("\n✓ All servers ready. Run Playwright tests with:");
    console.log("  npx playwright test --project=a3-svelte");
    console.log("  npx playwright test --project=a3-vue");
    console.log("  npx playwright test --project=a3-angular");
    console.log("  npx playwright test --project=a4-svelte");
    console.log("  npx playwright test --project=a4-vue");
    console.log("  npx playwright test --project=a4-angular");
    console.log("");
} else {
    console.log("\n⚠ Some servers failed to start. Check output above.");
}
