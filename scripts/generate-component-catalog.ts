import fs from "node:fs/promises";
import path from "node:path";

import { Node, type SourceFile } from "ts-morph";

import { GeneratedFileFormatter } from "../tools/shared/generated-file-formatter";
import { TypeScriptSourceProvider } from "../tools/shared/typescript-source-provider";

// =============================================================================
// Types
// =============================================================================

type Component = {
    name: string;
    importPath: string;
    description: string;
    keywords: string[];
};

// =============================================================================
// Constants
// =============================================================================

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const OUTPUT_PATH = path.join(ROOT_DIR, "docs", "component-catalog.json");

const CATALOG_TAG = "// @catalog";
const KEYWORDS_TAG = "keywords";

// =============================================================================
// Helpers
// =============================================================================

function getModuleFromFilePath(filePath: string): string {
    const relative = path.relative(SRC_DIR, filePath);
    return relative.split(path.sep)[0];
}

function formatDescription(text: string | undefined): string {
    return text?.trim().replaceAll("\n", " ") ?? "";
}

function formatKeywords(tagComment: string | undefined): string[] {
    if (!tagComment) return [];
    return tagComment
        .trim()
        .split(",")
        .map((k: string) => k.trim())
        .filter(Boolean)
        .sort((a: string, b: string) => a.localeCompare(b));
}

function extractDocFromStatement(statement: Node): {
    description: string;
    keywords: string[];
} {
    if (!Node.isJSDocable(statement)) return { description: "", keywords: [] };

    for (const jsDoc of statement.getJsDocs()) {
        const description = formatDescription(jsDoc.getCommentText());
        const tag = jsDoc
            .getTags()
            .find((t) => t.getTagName() === KEYWORDS_TAG);
        const keywords = formatKeywords(tag?.getCommentText());

        if (description || keywords.length > 0) {
            return { description, keywords };
        }
    }

    return { description: "", keywords: [] };
}

function hasCatalogTag(sourceFile: SourceFile, statement: Node): boolean {
    const fullText = sourceFile.getFullText();
    const commentRanges = statement.getLeadingCommentRanges();

    return commentRanges.some((range) => {
        const text = fullText.slice(range.getPos(), range.getEnd()).trim();
        return text === CATALOG_TAG;
    });
}

function extractCatalogEntries(
    sourceFile: SourceFile,
    importPath: string
): Component[] {
    const entries: Component[] = [];

    for (const statement of sourceFile.getStatements()) {
        if (!hasCatalogTag(sourceFile, statement)) continue;

        const { description, keywords } = extractDocFromStatement(statement);

        if (Node.isVariableStatement(statement)) {
            for (const decl of statement.getDeclarations()) {
                entries.push({
                    name: decl.getName(),
                    importPath,
                    description,
                    keywords,
                });
            }
        } else if (Node.isFunctionDeclaration(statement)) {
            const name = statement.getName();
            if (name) {
                entries.push({ name, importPath, description, keywords });
            }
        }
    }

    return entries;
}

function formatGenerated() {
    new GeneratedFileFormatter().format("docs/component-catalog.json");
}

// =============================================================================
// Main
// =============================================================================

async function main() {
    const sourceProvider = new TypeScriptSourceProvider();
    const sourceFiles = sourceProvider.getSourceFilesByGlobs([
        "src/**/*.ts",
        "src/**/*.tsx",
    ]);

    const components: Component[] = [];

    for (const sourceFile of sourceFiles) {
        const filePath = sourceFile.getFilePath();
        if (!sourceFile.getFullText().includes(CATALOG_TAG)) continue;

        const moduleName = getModuleFromFilePath(filePath);
        const importPath = `@lifesg/react-design-system/${moduleName}`;

        const entries = extractCatalogEntries(sourceFile, importPath);
        components.push(...entries);
    }

    components.sort((a, b) => a.name.localeCompare(b.name));

    const catalog = {
        meta: {
            packageName: "@lifesg/react-design-system",
            totalComponents: components.length,
        },
        components,
    };

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(OUTPUT_PATH, JSON.stringify(catalog, null, 2) + "\n");
    formatGenerated();

    console.log(
        `Generated ${path.relative(ROOT_DIR, OUTPUT_PATH)} (${
            catalog.components.length
        } components).`
    );
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
