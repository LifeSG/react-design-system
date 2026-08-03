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
 *
 * ⚠️  Playwright coupling — verified against @playwright/test ^1.58.2:
 *   - sanitizeForFilePath, trimLongString, sanitizeFilePathBeforeExtension mirror
 *     Playwright's internal path utilities (playwright/lib/util.js and
 *     playwright-core/lib/utils). These are not public API. Verify they still
 *     match after upgrading Playwright; a mismatch causes silent false positives
 *     in the stale checker (real screenshots flagged as orphaned).
 *   - titlePath().slice(3) assumes the title array is structured as
 *     [root, projectName, filePath, ...testTitles]. Verify this still holds
 *     after a Playwright upgrade by checking _fsSanitizedTestName in
 *     playwright/lib/worker/testInfo.js.
 */

import type {
    FullConfig,
    FullResult,
    Reporter,
    Suite,
    TestCase,
    TestResult,
} from "@playwright/test/reporter";
import { createHash } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Mirrors Playwright's internal sanitizeForFilePath utility.
 * Replaces characters that are unsafe in file paths with hyphens.
 */
function sanitizeForFilePath(s: string): string {
    return s.replace(/[\x00-\x2C\x2E-\x2F\x3A-\x40\x5B-\x60\x7B-\x7F]+/g, "-");
}

/**
 * Mirrors Playwright's internal trimLongString utility.
 * Truncates strings that exceed `length` characters by replacing the middle
 * section with a short SHA-1 hash to avoid filesystem path-length limits while
 * keeping the result deterministic.
 */
function trimLongString(s: string, length = 100): string {
    if (s.length <= length) return s;
    const hash = createHash("sha1").update(s).digest("hex");
    const middle = `-${hash.substring(0, 5)}-`;
    const start = Math.floor((length - middle.length) / 2);
    const end = length - middle.length - start;
    return s.substring(0, start) + middle + s.slice(-end);
}

/**
 * Mirrors Playwright's internal sanitizeFilePathBeforeExtension utility.
 * Sanitizes only the base name portion of a filename, preserving the extension
 * so that e.g. "non-sticky open.png" becomes "non-sticky-open.png".
 */
function sanitizeFilePathBeforeExtension(
    filePath: string,
    ext: string
): string {
    const base = filePath.substring(0, filePath.length - ext.length);
    return sanitizeForFilePath(base) + ext;
}

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
     * Reconstructs the absolute path of each screenshot the test declared it
     * used via the "screenshot-used" annotation, using the same path-building
     * logic as Playwright's snapshotPathTemplate resolution:
     *
     *   {testDir}/{testFileDir}/__screenshots__/{projectName}/{testName}--{arg}{ext}
     *
     * The path components are sanitized and truncated in exactly the same way
     * as Playwright does internally, so the reconstructed paths match the real
     * files on disk.
     */
    onTestEnd(test: TestCase, result: TestResult): void {
        const project = test.parent.project()!;
        const testDir = project.testDir;
        const testFilePath = test.location.file;
        const relativeTestFileDir = path.dirname(
            path.relative(testDir, testFilePath)
        );
        const projectName = sanitizeForFilePath(project.name);
        // slice(3) skips [root, projectName, filePath] to match Playwright's
        // internal _fsSanitizedTestName which also starts from index 1 of titlePath.
        const fullTitleWithoutSpec = test.titlePath().slice(3).join(" ");
        const testName = sanitizeForFilePath(
            trimLongString(fullTitleWithoutSpec)
        );

        const screenshotDir = path.resolve(
            testDir,
            relativeTestFileDir,
            "__screenshots__",
            projectName
        );
        // Track this directory so the stale checker knows to inspect it even if
        // a particular test ends up taking no screenshots.
        this.coveredDirs.add(screenshotDir);

        for (const annotation of result.annotations) {
            if (annotation.type !== "_screenshot-used") continue;
            const screenshotFileName = annotation.description;
            if (!screenshotFileName) continue;

            const ext = path.extname(screenshotFileName);
            const arg = sanitizeFilePathBeforeExtension(
                screenshotFileName,
                ext
            ).replace(ext, "");

            const snapshotPath = path.join(
                screenshotDir,
                `${testName}--${arg}${ext}`
            );

            this.usedScreenshots.add(snapshotPath);
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
