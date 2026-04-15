import fs from "node:fs";
import path from "node:path";

const IMPORT_CSS_REGEX = /(import\s*["'])([^"']+\.css)(["'])/g;
const REQUIRE_CSS_REGEX = /(require\(\s*["'])([^"']+\.css)(["']\s*\))/g;
const LIB_STYLE_MAGIC_PREFIX = "@@_MAGIC_PATH_@@";

// Recursively collects files with a given extension while skipping selected
// output directories (for example, skip dist/cjs while processing dist).
const collectFiles = (dir, extension, files = [], ignoredDirs = new Set()) => {
    if (!fs.existsSync(dir)) return files;

    const resolvedDir = path.resolve(dir);
    if (ignoredDirs.has(resolvedDir)) return files;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            collectFiles(fullPath, extension, files, ignoredDirs);
            continue;
        }

        if (entry.isFile() && fullPath.endsWith(extension)) {
            files.push(fullPath);
        }
    }

    return files;
};

// Ensures rewritten imports are valid module specifiers.
const toRelativeImportPath = (fromFile, toFile) => {
    const relativePath = path
        .relative(path.dirname(fromFile), toFile)
        .split(path.sep)
        .join("/");
    return relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
};

const isFixableCssImportPath = (importPath) => {
    return (
        importPath.endsWith(".css") &&
        (importPath.startsWith(".") ||
            importPath.startsWith("/") ||
            importPath.startsWith(LIB_STYLE_MAGIC_PREFIX))
    );
};

const normalizeImportPath = (importPath) => {
    if (!importPath.startsWith(LIB_STYLE_MAGIC_PREFIX)) return importPath;

    const stripped = importPath.slice(LIB_STYLE_MAGIC_PREFIX.length);
    return stripped.startsWith("/") ? stripped : `/${stripped}`;
};

const resolveImportedCssPath = ({ outputDir, jsFile, importPath }) => {
    const normalizedPath = normalizeImportPath(importPath);

    if (normalizedPath.startsWith("/")) {
        return path.resolve(outputDir, "." + normalizedPath);
    }
    return path.resolve(path.dirname(jsFile), normalizedPath);
};

const indexCssByBasename = (cssFiles) => {
    const cssByBasename = new Map();

    for (const cssFile of cssFiles) {
        const basename = path.basename(cssFile);
        const matches = cssByBasename.get(basename) || [];
        matches.push(cssFile);
        cssByBasename.set(basename, matches);
    }

    return cssByBasename;
};

const getRewrittenCssImportPath = ({
    outputDir,
    jsFile,
    importPath,
    cssByBasename,
}) => {
    if (!isFixableCssImportPath(importPath)) return null;

    if (importPath.startsWith(LIB_STYLE_MAGIC_PREFIX)) {
        const normalizedPath = normalizeImportPath(importPath);
        const resolvedMagicPath = path.resolve(outputDir, "." + normalizedPath);
        if (fs.existsSync(resolvedMagicPath)) {
            return toRelativeImportPath(jsFile, resolvedMagicPath);
        }
    }

    const resolvedPath = resolveImportedCssPath({
        outputDir,
        jsFile,
        importPath,
    });
    if (fs.existsSync(resolvedPath)) return null;

    const cssMatches = cssByBasename.get(path.basename(importPath));
    if (cssMatches?.length > 1) {
        console.warn(
            `[fix-css-import-paths] Skipping rewrite: multiple CSS files found for "${path.basename(
                importPath
            )}" in ${jsFile}:\n` + cssMatches.map((f) => `  - ${f}`).join("\n")
        );
    }
    if (cssMatches?.length !== 1) return null;

    return toRelativeImportPath(jsFile, cssMatches[0]);
};

const rewriteCssImportsInJsSource = ({
    source,
    outputDir,
    jsFile,
    cssByBasename,
}) => {
    const replaceImportPath = (full, prefix, importPath, suffix) => {
        const rewrittenImportPath = getRewrittenCssImportPath({
            outputDir,
            jsFile,
            importPath,
            cssByBasename,
        });

        if (!rewrittenImportPath) return full;
        return `${prefix}${rewrittenImportPath}${suffix}`;
    };

    return source
        .replaceAll(IMPORT_CSS_REGEX, replaceImportPath)
        .replaceAll(REQUIRE_CSS_REGEX, replaceImportPath);
};

// For each output root, mark nested output roots as ignored to prevent
// basename collisions between ESM/CJS trees.
const buildIgnoredDirsMap = (outputDirs) => {
    const resolvedDirs = outputDirs.map((dir) => path.resolve(dir));
    const ignoredByDir = new Map();

    for (const baseDir of resolvedDirs) {
        const ignored = new Set();
        for (const candidate of resolvedDirs) {
            if (candidate === baseDir) continue;
            if (candidate.startsWith(baseDir + path.sep)) {
                ignored.add(candidate);
            }
        }
        ignoredByDir.set(baseDir, ignored);
    }

    return ignoredByDir;
};

// Rewrites only broken CSS imports in emitted JS files.
// Context:
// - rollup-plugin-lib-style uses a global magic path replacement.
// - with preserveModules, nested chunks can end up with incorrect relative CSS paths.
// - this repairs those imports after final files are written.
const rewriteBrokenCssImports = (outputDir, ignoredDirs = new Set()) => {
    const cssFiles = collectFiles(outputDir, ".css", [], ignoredDirs);
    const jsFiles = collectFiles(outputDir, ".js", [], ignoredDirs);
    const cssByBasename = indexCssByBasename(cssFiles);

    for (const jsFile of jsFiles) {
        const source = fs.readFileSync(jsFile, "utf8");
        const rewritten = rewriteCssImportsInJsSource({
            source,
            outputDir,
            jsFile,
            cssByBasename,
        });

        if (rewritten !== source) {
            fs.writeFileSync(jsFile, rewritten);
        }
    }
};

// Rollup plugin factory that runs the repair pass in closeBundle.
export const createFixCssImportPathsPlugin = ({ outputDirs }) => {
    const ignoredDirsByOutput = buildIgnoredDirsMap(outputDirs);

    return {
        name: "fix-css-import-paths",
        closeBundle() {
            for (const outputDir of outputDirs) {
                const resolved = path.resolve(outputDir);
                rewriteBrokenCssImports(
                    outputDir,
                    ignoredDirsByOutput.get(resolved)
                );
            }
        },
    };
};
