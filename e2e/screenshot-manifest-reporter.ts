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

function sanitizeForFilePath(s: string): string {
    return s.replace(/[\x00-\x2C\x2E-\x2F\x3A-\x40\x5B-\x60\x7B-\x7F]+/g, "-");
}

function trimLongString(s: string, length = 100): string {
    if (s.length <= length) return s;
    const hash = createHash("sha1").update(s).digest("hex");
    const middle = `-${hash.substring(0, 5)}-`;
    const start = Math.floor((length - middle.length) / 2);
    const end = length - middle.length - start;
    return s.substring(0, start) + middle + s.slice(-end);
}

interface ReporterOptions {
    outputFile?: string;
}

class ScreenshotManifestReporter implements Reporter {
    private readonly usedScreenshots = new Set<string>();
    private readonly coveredDirs = new Set<string>();
    private readonly outputFile: string;

    constructor(options: ReporterOptions = {}) {
        this.outputFile = options.outputFile || ".screenshot-manifest.txt";
    }

    onBegin(_config: FullConfig, _suite: Suite): void {}

    onTestEnd(test: TestCase, result: TestResult): void {
        const project = test.parent.project()!;
        const testDir = project.testDir;
        const testFilePath = test.location.file;
        const relativeTestFileDir = path.dirname(
            path.relative(testDir, testFilePath)
        );
        const projectName = sanitizeForFilePath(project.name);
        // slice(3) skips [root, projectName, filePath] to match Playwright's internal _fsSanitizedTestName
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
        this.coveredDirs.add(screenshotDir);

        for (const annotation of result.annotations) {
            if (annotation.type !== "screenshot-used") continue;
            const screenshotFileName = annotation.description;
            if (!screenshotFileName) continue;

            const ext = path.extname(screenshotFileName);
            const arg = screenshotFileName.replace(ext, "");

            const snapshotPath = path.join(
                screenshotDir,
                `${testName}--${arg}${ext}`
            );

            this.usedScreenshots.add(snapshotPath);
        }
    }

    async onEnd(_result: FullResult): Promise<void> {
        const lines = [
            "# Directories covered by this test run",
            ...[...this.coveredDirs].sort().map((d) => `dir:${d}`),
            "# Screenshots referenced by tests",
            ...[...this.usedScreenshots].sort(),
        ];
        fs.writeFileSync(this.outputFile, lines.join("\n") + "\n", "utf-8");
        console.log(
            `\n[screenshot-manifest] Wrote ${this.usedScreenshots.size} screenshots ` +
                `across ${this.coveredDirs.size} directories to ${this.outputFile}`
        );
    }

    printsToStdio(): boolean {
        return false;
    }
}

export default ScreenshotManifestReporter;
