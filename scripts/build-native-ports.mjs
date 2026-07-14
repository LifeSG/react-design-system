/**
 * build-native-ports.mjs
 *
 * Copies native framework port source files into dist/native/ and rewrites
 * bare package imports (@lifesg/flagship-styles, @lifesg/design-core) to
 * relative paths so the dist tree is self-contained.
 *
 * Usage:
 *   node scripts/build-native-ports.mjs
 *
 * Output structure:
 *   dist/native/
 *     styles/          ← @lifesg/flagship-styles source + CSS
 *     svelte/          ← approach-3 svelte port
 *     vue/             ← approach-3 vue port
 *     angular/         ← approach-3 angular port
 *     react-native/    ← approach-3 react-native port
 *     core/
 *       design-core/   ← shared logic layer
 *       svelte/        ← approach-4 svelte port
 *       vue/           ← approach-4 vue port
 *       angular/       ← approach-4 angular port
 *       react-native/  ← approach-4 react-native port
 */
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distNative = path.join(rootDir, "dist", "native");

// Source → dest mapping
const COPY_MAP = [
    // Shared styles (flagship-styles)
    {
        src: "native-ports/shared/src",
        dest: "styles",
    },
    // Approach 3 ports
    {
        src: "native-ports/svelte/src",
        dest: "svelte",
    },
    {
        src: "native-ports/vue/src/components",
        dest: "vue",
    },
    {
        src: "native-ports/angular/src/app/components",
        dest: "angular",
    },
    {
        src: "native-ports/react-native/src",
        dest: "react-native",
    },
    // Approach 4 design-core
    {
        src: "native-ports/shared-core/design-core/src",
        dest: "core/design-core",
    },
    // Approach 4 ports
    {
        src: "native-ports/shared-core/ui/svelte/src",
        dest: "core/svelte",
    },
    {
        src: "native-ports/shared-core/ui/vue/src/components",
        dest: "core/vue",
    },
    {
        src: "native-ports/shared-core/ui/angular/src/app/components",
        dest: "core/angular",
    },
    {
        src: "native-ports/shared-core/ui/react-native/src",
        dest: "core/react-native",
    },
];

// Also copy the flagship-styles dist CSS (for ./styles/theme/*.css consumption)
const EXTRA_COPIES = [
    {
        src: "native-ports/shared/src/theme",
        dest: "styles/theme",
    },
    {
        src: "native-ports/shared/dist/index.css",
        dest: "styles/styles.css",
    },
];

// =============================================================================
// Helpers
// =============================================================================

function copyDirRecursive(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true });
    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);
        if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function copyFile(src, dest) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
}

/**
 * Rewrite @lifesg/flagship-styles and @lifesg/design-core imports to relative paths.
 * The relative path depends on where the file sits within dist/native/.
 */
function rewriteImports(filePath, relativeToNative) {
    const ext = path.extname(filePath);
    if (![".ts", ".tsx", ".js", ".svelte", ".vue"].includes(ext)) return;

    let content = fs.readFileSync(filePath, "utf-8");
    let changed = false;

    // Calculate relative path from this file's directory to dist/native/styles/
    const fileDir = path.dirname(relativeToNative);
    const toStyles = path.relative(fileDir, "styles") || ".";
    const toDesignCore = path.relative(fileDir, "core/design-core") || ".";

    // Rewrite @lifesg/flagship-styles → relative to styles/
    const stylesRegex = /from\s+["']@lifesg\/flagship-styles["']/g;
    if (stylesRegex.test(content)) {
        content = content.replace(
            /from\s+["']@lifesg\/flagship-styles["']/g,
            `from "${toStyles.startsWith(".") ? toStyles : "./" + toStyles}"`
        );
        changed = true;
    }

    // Rewrite @lifesg/design-core → relative to core/design-core/
    const coreRegex = /from\s+["']@lifesg\/design-core["']/g;
    if (coreRegex.test(content)) {
        content = content.replace(
            /from\s+["']@lifesg\/design-core["']/g,
            `from "${
                toDesignCore.startsWith(".")
                    ? toDesignCore
                    : "./" + toDesignCore
            }"`
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, "utf-8");
    }
}

function rewriteDir(dirPath, baseRelative) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
        const fullPath = path.join(dirPath, entry.name);
        const relative = path.join(baseRelative, entry.name);
        if (entry.isDirectory()) {
            rewriteDir(fullPath, relative);
        } else {
            rewriteImports(fullPath, relative);
        }
    }
}

// =============================================================================
// Main
// =============================================================================

console.log("Building native ports into dist/native/...");

// Clean previous output
if (fs.existsSync(distNative)) {
    fs.rmSync(distNative, { recursive: true });
}

// Copy all port sources
for (const { src, dest } of COPY_MAP) {
    const srcPath = path.join(rootDir, src);
    const destPath = path.join(distNative, dest);
    if (!fs.existsSync(srcPath)) {
        console.warn(`  SKIP (not found): ${src}`);
        continue;
    }
    console.log(`  ${src} → dist/native/${dest}`);
    copyDirRecursive(srcPath, destPath);
}

// Extra copies (theme CSS, built CSS)
for (const { src, dest } of EXTRA_COPIES) {
    const srcPath = path.join(rootDir, src);
    const destPath = path.join(distNative, dest);
    if (!fs.existsSync(srcPath)) {
        console.warn(`  SKIP (not found): ${src}`);
        continue;
    }
    if (fs.statSync(srcPath).isDirectory()) {
        copyDirRecursive(srcPath, destPath);
    } else {
        copyFile(srcPath, destPath);
    }
}

// Rewrite bare package imports to relative paths
console.log("  Rewriting imports...");
rewriteDir(distNative, "");

console.log("Done. Output: dist/native/");
