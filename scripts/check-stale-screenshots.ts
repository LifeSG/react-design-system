import * as fs from "node:fs";
import * as path from "node:path";

const DEFAULT_MANIFEST_GLOB = ".screenshot-manifest*.txt";

function findManifestFiles(pattern: string): string[] {
    const dir = path.dirname(pattern) || ".";
    const base = path.basename(pattern);
    const regex = new RegExp(
        "^" + base.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$"
    );

    const resolvedDir = path.resolve(dir);
    if (!fs.existsSync(resolvedDir)) return [];

    return fs
        .readdirSync(resolvedDir)
        .filter((f) => regex.test(f))
        .map((f) => path.resolve(resolvedDir, f));
}

interface ManifestData {
    coveredDirs: Set<string>;
    usedScreenshots: Set<string>;
}

function readManifests(files: string[]): ManifestData {
    const coveredDirs = new Set<string>();
    const usedScreenshots = new Set<string>();

    for (const file of files) {
        const content = fs.readFileSync(file, "utf-8");
        for (const line of content.split("\n")) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) continue;
            if (trimmed.startsWith("dir:")) {
                coveredDirs.add(trimmed.slice(4));
            } else {
                usedScreenshots.add(trimmed);
            }
        }
    }

    return { coveredDirs, usedScreenshots };
}

function findScreenshotsInDirs(dirs: Set<string>): string[] {
    const results: string[] = [];

    for (const dir of dirs) {
        if (!fs.existsSync(dir)) continue;
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.isFile() && entry.name.endsWith(".png")) {
                results.push(path.join(dir, entry.name));
            }
        }
    }

    return results;
}

function main() {
    const args = process.argv.slice(2);
    const deleteMode = args.includes("--delete");
    const manifestArg = args
        .find((a) => a.startsWith("--manifest="))
        ?.split("=")[1];
    const manifestPattern = manifestArg || DEFAULT_MANIFEST_GLOB;

    const manifestFiles = findManifestFiles(manifestPattern);
    if (manifestFiles.length === 0) {
        console.error(
            `No manifest files found matching "${manifestPattern}".` +
                "\nRun the full test suite first to generate the manifest."
        );
        process.exit(1);
    }

    console.log(
        `Reading ${manifestFiles.length} manifest file(s):` +
            manifestFiles
                .map((f) => `\n  ${path.relative(process.cwd(), f)}`)
                .join("")
    );

    const { coveredDirs, usedScreenshots } = readManifests(manifestFiles);
    console.log(`Directories covered: ${coveredDirs.size}`);
    console.log(`Screenshots referenced in tests: ${usedScreenshots.size}`);

    const allScreenshots = findScreenshotsInDirs(coveredDirs);
    console.log(
        `Screenshots on disk (in covered dirs): ${allScreenshots.length}`
    );

    const staleFiles = allScreenshots.filter((f) => !usedScreenshots.has(f));

    if (staleFiles.length === 0) {
        console.log("\nNo stale screenshots found.");
        process.exit(0);
    }

    console.log(`\nFound ${staleFiles.length} stale screenshot(s):`);
    for (const f of staleFiles) {
        console.log(`  ${path.relative(process.cwd(), f)}`);
    }

    if (deleteMode) {
        for (const f of staleFiles) {
            fs.unlinkSync(f);
        }
        console.log(`\nDeleted ${staleFiles.length} stale screenshot(s).`);
    } else {
        console.log("\nRun with --delete to remove these files.");
        process.exit(1);
    }
}

main();
