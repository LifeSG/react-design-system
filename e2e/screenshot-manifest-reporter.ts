/**
 * A custom Playwright reporter that tracks which screenshot files are actively
 * referenced by tests. Its output is consumed by scripts/check-stale-screenshots.ts
 * to detect and optionally delete orphaned .png files.
 *
 * How it works:
 *  1. After each test, the reporter reads "screenshot-used" annotations that
 *     compareScreenshot() (in e2e/tests/utils.ts) pushes onto the test.
 *  2. It reconstructs the absolute path that Playwright would have written the
 *     screenshot to, using the same sanitization rules as Playwright itself.
 *  3. It also records every __screenshots__ directory it encounters so the stale
 *     checker knows which directories were covered by this run.
 *  4. On completion it writes everything to a manifest text file.
 *
 * In CI the config registers this reporter with a shard-specific output file
 * (e.g. .screenshot-manifest-1.txt) so parallel shards don't overwrite each other.
 * The stale checker then reads all manifest files matching the glob pattern.
 */

import type {
    FullConfig,
    FullResult,
    Reporter,
    Suite,
    TestCase,
    TestResult,
} from "@playwright/test/reporter";
import * as fs from "node:fs";
import * as path from "node:path";

interface ReporterOptions {
    outputFile?: string;
}

/**
 * A Playwright reporter that writes a manifest of all screenshot paths
 * referenced during a test run.
 *
 * Registered in playwright.config.ts. Consumed by check-stale-screenshots.ts.
 */
class ScreenshotManifestReporter implements Reporter {
    private readonly usedScreenshots = new Set<string>();
    private readonly coveredDirs = new Set<string>();
    private readonly outputFile: string;

    constructor(options: ReporterOptions = {}) {
        this.outputFile = options.outputFile || ".screenshot-manifest.txt";
    }

    // Required by the Reporter interface; nothing to do at suite start.
    onBegin(_config: FullConfig, _suite: Suite): void {}

    /**
     * Called by Playwright after every test completes (pass or fail).
     *
     * Reads "screenshot-used" annotations written by compareScreenshot()
     * (e2e/tests/utils.ts). Each annotation carries the absolute snapshot path
     * already resolved by testInfo.snapshotPath(), so no path reconstruction
     * is needed here.
     *
     * The directory of each resolved path is also recorded so the stale checker
     * knows which __screenshots__ directories were exercised by this run.
     */
    onTestEnd(_test: TestCase, result: TestResult): void {
        for (const annotation of result.annotations) {
            if (annotation.type !== "_screenshot-used") continue;
            const snapshotPath = annotation.description;
            if (!snapshotPath) continue;

            this.usedScreenshots.add(snapshotPath);
            this.coveredDirs.add(path.dirname(snapshotPath));
        }
    }

    /**
     * Called by Playwright once after all tests have finished.
     * Writes the manifest file with two sections:
     *  - "dir:" lines listing every __screenshots__ directory covered by this run
     *  - absolute paths of every screenshot file referenced by a test
     */
    async onEnd(_result: FullResult): Promise<void> {
        const lines = [
            "# Directories covered by this test run",
            ...[...this.coveredDirs]
                .sort((a, b) => a.localeCompare(b))
                .map((d) => `dir:${d}`),
            "# Screenshots referenced by tests",
            ...[...this.usedScreenshots].sort((a, b) => a.localeCompare(b)),
        ];
        fs.writeFileSync(this.outputFile, lines.join("\n") + "\n", "utf-8");
        console.log(
            `\n[screenshot-manifest] Wrote ${this.usedScreenshots.size} screenshots ` +
                `across ${this.coveredDirs.size} directories to ${this.outputFile}`
        );
    }

    // Returning false keeps this reporter's output out of the standard test log.
    printsToStdio(): boolean {
        return false;
    }
}

export default ScreenshotManifestReporter;
