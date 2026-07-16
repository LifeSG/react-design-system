/**
 * build-native-ports.mjs
 *
 * Copies native framework port source files from src/native/ into dist/native/.
 * Pre-compiles Linaria styles.ts files (hashed class strings + extracted CSS +
 * .d.ts declarations). Injects theme CSS imports into web entry points.
 *
 * Usage:
 *   node scripts/build-native-ports.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { rollup } from "rollup";
import wyw from "@wyw-in-js/rollup";
import resolve from "@rollup/plugin-node-resolve";
import { libStylePlugin } from "rollup-plugin-lib-style";

const rootDir = process.cwd();
const srcNative = path.join(rootDir, "src", "native");
const distNative = path.join(rootDir, "dist", "native");

const COPY_MAP = [
    { src: "styles", dest: "styles" },
    { src: "svelte", dest: "svelte" },
    { src: "vue", dest: "vue" },
    { src: "angular", dest: "angular" },
    { src: "react-native", dest: "react-native" },
    { src: "lit", dest: "lit" },
    { src: "core", dest: "core" },
];

const THEME_IMPORT_ENTRIES = [
    { path: "svelte/index.ts", import: "../styles/theme/lifesg.css" },
    { path: "vue/index.ts", import: "../styles/theme/lifesg.css" },
    { path: "lit/index.ts", import: "../styles/theme/lifesg.css" },
    { path: "core/svelte/index.ts", import: "../../styles/theme/lifesg.css" },
    { path: "core/vue/index.ts", import: "../../styles/theme/lifesg.css" },
    { path: "core/lit/index.ts", import: "../../styles/theme/lifesg.css" },
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

function findFiles(dir, ext) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findFiles(fullPath, ext));
        } else if (entry.name.endsWith(ext)) {
            results.push(fullPath);
        }
    }
    return results;
}

// =============================================================================
// Pre-compile Linaria styles.ts → hashed class strings + extracted CSS
// =============================================================================

async function precompileLinaria() {
    const linariaDir = path.join(distNative, "styles", "linaria");
    if (!fs.existsSync(linariaDir)) return;

    const styleFiles = findFiles(linariaDir, ".styles.ts");
    if (styleFiles.length === 0) return;

    console.log("  Pre-compiling Linaria styles...");

    const bundle = await rollup({
        input: styleFiles,
        plugins: [
            resolve({ extensions: [".ts", ".js"] }),
            wyw({ sourceMap: false, preprocessor: "none" }),
            libStylePlugin({ scopedName: "[local]" }),
        ],
        external: (id) =>
            !id.startsWith(".") &&
            !id.startsWith("/") &&
            id !== "@linaria/core",
    });

    const { output } = await bundle.generate({
        dir: linariaDir,
        format: "es",
        preserveModules: true,
        preserveModulesRoot: linariaDir,
    });

    let collectedCSS = "";

    for (const chunk of output) {
        if (chunk.type === "asset" && chunk.fileName.endsWith(".css")) {
            collectedCSS += chunk.source + "\n";
        } else if (chunk.type === "chunk") {
            const outPath = path.join(linariaDir, chunk.fileName);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            const code = chunk.code.replace(
                /^import ['"].*\.css['"];\n?/gm,
                ""
            );
            fs.writeFileSync(outPath, code, "utf-8");

            const tsPath = outPath.replace(/\.js$/, ".ts");
            if (tsPath !== outPath && fs.existsSync(tsPath)) {
                fs.unlinkSync(tsPath);
            }
        }
    }

    if (collectedCSS) {
        fs.writeFileSync(
            path.join(linariaDir, "styles.css"),
            collectedCSS,
            "utf-8"
        );
        console.log(`    Extracted CSS → styles/linaria/styles.css`);
    }

    // Update barrel index: .styles.ts → .styles.js (keep as .ts for TypeScript resolution)
    const indexPath = path.join(linariaDir, "index.ts");
    if (fs.existsSync(indexPath)) {
        let content = fs.readFileSync(indexPath, "utf-8");
        content = content.replace(/\.styles(\.ts)?"/g, '.styles.js"');
        fs.writeFileSync(indexPath, content, "utf-8");
    }

    // Generate .d.ts files for each compiled .styles.js
    const jsFiles = findFiles(linariaDir, ".styles.js");
    for (const jsFile of jsFiles) {
        const code = fs.readFileSync(jsFile, "utf-8");
        const exports = [...code.matchAll(/(?:export \{ (.+?) \}|const (\w+) )/g)];
        const names = new Set();
        for (const m of exports) {
            if (m[1]) {
                m[1].split(",").forEach((n) => names.add(n.trim()));
            } else if (m[2]) {
                names.add(m[2]);
            }
        }
        const dts = [...names]
            .map((name) => `export declare const ${name}: string;`)
            .join("\n") + "\n";
        fs.writeFileSync(jsFile.replace(/\.js$/, ".d.ts"), dts, "utf-8");
    }

    await bundle.close();
    console.log(`    Compiled ${styleFiles.length} style files`);
}

// =============================================================================
// Main
// =============================================================================

console.log("Building native ports from src/native/ into dist/native/...");

// Copy all port sources
for (const { src, dest } of COPY_MAP) {
    const srcPath = path.join(srcNative, src);
    const destPath = path.join(distNative, dest);
    if (!fs.existsSync(srcPath)) {
        console.warn(`  SKIP (not found): src/native/${src}`);
        continue;
    }
    console.log(`  src/native/${src} → dist/native/${dest}`);
    copyDirRecursive(srcPath, destPath);
}

// Pre-compile Linaria styles
await precompileLinaria();

// Inject linaria CSS import into styles/index.ts
const stylesIndex = path.join(distNative, "styles", "index.ts");
if (fs.existsSync(stylesIndex)) {
    const content = fs.readFileSync(stylesIndex, "utf-8");
    fs.writeFileSync(
        stylesIndex,
        `import "./linaria/styles.css";\n${content}`,
        "utf-8"
    );
}

// Prepend theme CSS import to web entry points
console.log("  Injecting theme CSS imports...");
for (const { path: entryPath, import: cssImport } of THEME_IMPORT_ENTRIES) {
    const fullPath = path.join(distNative, entryPath);
    if (!fs.existsSync(fullPath)) {
        console.warn(`    SKIP (not found): ${entryPath}`);
        continue;
    }
    const content = fs.readFileSync(fullPath, "utf-8");
    fs.writeFileSync(fullPath, `import "${cssImport}";\n${content}`, "utf-8");
}

console.log("Done. Output: dist/native/");
