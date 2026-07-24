/**
 * Generate Storybook argTypes from component type definitions.
 *
 * Reads exported interfaces and type aliases from `src/{component}/types.ts` files and
 * generates Storybook-compatible argTypes documentation that powers the
 * interactive props table in component stories.
 *
 * Usage:
 * - `npm run storybook:argtypes` — generate all component argTypes files
 * - `npm run storybook:argtypes -- --watch` — watch for changes and regenerate
 */

import fs from "node:fs/promises";
import path from "node:path";

import chokidar from "chokidar";

import {
    ArgTypesGenerator,
    TsMorphProjectFactory,
    WATCH_ROOTS,
} from "../tools/storybook-argtypes";

function isTypesFile(filePath: string): boolean {
    return /types\.(tsx?|jsx?)$/.test(filePath);
}

function isStoryFile(filePath: string): boolean {
    return /\.stories\.(tsx?|jsx?)$/.test(filePath);
}

async function main() {
    const isWatchMode = process.argv.includes("--watch");

    const generator = new ArgTypesGenerator();
    await generator.generateAll();
    generator.formatGenerated();

    if (!isWatchMode) {
        return;
    }

    console.log("[storybook:argtypes] watching...");

    const watcher = chokidar.watch(WATCH_ROOTS, {
        ignoreInitial: true,
        persistent: true,
        ignored: (filePath, stats) => {
            if (!stats?.isFile()) {
                return false;
            }

            return !isTypesFile(filePath) && !isStoryFile(filePath);
        },
    });

    watcher.on("ready", () => {
        console.log("[storybook:argtypes] watcher ready");
    });

    watcher.on("all", async (eventName, filePath) => {
        console.log(`[storybook:argtypes] ${eventName}: ${filePath}`);

        try {
            const resolvedFilePath = path.resolve(filePath);

            // Reset the ts-morph project singleton so the next generator
            // sees the updated file contents on disk.
            TsMorphProjectFactory.reset();
            const freshGenerator = new ArgTypesGenerator();

            if (isStoryFile(filePath)) {
                await freshGenerator.generateStorybookArgTypesRegistry();
            } else if (eventName === "unlink") {
                await fs.rm(freshGenerator.getOutputFile(resolvedFilePath), {
                    force: true,
                });
                await freshGenerator.generateStorybookArgTypesRegistry();
            } else {
                await freshGenerator.generateForSourceFile(resolvedFilePath);
                await freshGenerator.generateStorybookArgTypesRegistry();
            }

            freshGenerator.formatGenerated();
        } catch (error) {
            console.error("[storybook:argtypes] failed to regenerate");
            console.error(error);
        }
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
