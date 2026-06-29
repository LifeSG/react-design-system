import { existsSync, statSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import chokidar from "chokidar";
import {
    type InterfaceDeclaration,
    Project,
    type PropertySignature,
    type SourceFile,
    type TypeAliasDeclaration,
    TypeFormatFlags,
} from "ts-morph";

const sourceFileGlob = "src/**/types.ts";
const watchRoots = ["src", "stories"];
const storyFileGlob = "stories/**/*.stories.@(ts|tsx)";
const storybookArgTypesFile = path.resolve(
    ".storybook/generated/storybook-argtypes.generated.ts"
);

const typeFormatFlags =
    TypeFormatFlags.NoTruncation |
    TypeFormatFlags.UseSingleQuotesForStringLiteralType;

/** Create a ts-morph project using the repo tsconfig. */
function createProject() {
    return new Project({
        tsConfigFilePath: path.resolve("tsconfig.json"),
    });
}

/** Resolve a source file from the project or throw when not found. */
function getSourceFile(project: Project, filePath: string) {
    const sourceFile =
        project.getSourceFile(filePath) ??
        project.addSourceFileAtPathIfExists(filePath);

    if (!sourceFile) {
        throw new Error(`Could not find source file: ${filePath}`);
    }

    return sourceFile;
}

type JsDocMeta = {
    description?: string | undefined;
    deprecated?: string | boolean | undefined;
    defaultValue?: string | undefined;
    remarks?: string | undefined;
    examples?: string[] | undefined;
    tabGroup?: string | undefined;
};

/** Read and trim the textual value of a JSDoc tag. */
function getTagCommentText(tag: { getCommentText: () => string | undefined }) {
    const comment = tag.getCommentText();

    return typeof comment === "string" ? comment.trim() : undefined;
}

/**
 * Collect supported JSDoc metadata tags for Storybook mapping.
 * Supported tags: "@deprecated, @default, @remarks, @example, @storybookSection".
 */
function getJsDocMeta(
    node: InterfaceDeclaration | PropertySignature | TypeAliasDeclaration
): JsDocMeta {
    const docs = node.getJsDocs();

    if (!docs.length) {
        return {};
    }

    const description =
        docs
            .map((doc) => doc.getCommentText()?.trim())
            .filter((comment): comment is string => Boolean(comment))
            .join("\n\n") || undefined;

    const tags = docs.flatMap((doc) => doc.getTags());

    let deprecated: string | boolean | undefined;
    let defaultValue: string | undefined;
    const remarks: string[] = [];
    const examples: string[] = [];
    let tabGroup: string | undefined;

    for (const tag of tags) {
        const tagName = tag.getTagName();
        const comment = getTagCommentText(tag);

        if (tagName === "deprecated") {
            deprecated = comment || true;
            continue;
        }

        if (tagName === "default") {
            if (!defaultValue && comment) {
                defaultValue = comment;
            }
            continue;
        }

        if (tagName === "remarks" && comment) {
            remarks.push(comment);
            continue;
        }

        if (tagName === "example" && comment) {
            examples.push(comment);
            continue;
        }

        if (tagName === "storybookSection" && comment) {
            tabGroup = comment;
        }
    }

    return {
        description,
        deprecated,
        defaultValue,
        remarks: remarks.length > 0 ? remarks.join("\n\n") : undefined,
        examples: examples.length > 0 ? examples : undefined,
        tabGroup,
    };
}

/** Build a Storybook-friendly description string from parsed JSDoc metadata. */
function toStorybookDescription(meta: JsDocMeta) {
    const blocks: string[] = [];

    if (meta.description) {
        blocks.push(meta.description);
    }

    if (meta.remarks) {
        blocks.push(`Remarks:\n${meta.remarks}`);
    }

    if (meta.examples && meta.examples.length > 0) {
        blocks.push(
            meta.examples.map((example) => `Example:\n${example}`).join("\n\n")
        );
    }

    return blocks.length > 0 ? blocks.join("\n\n") : undefined;
}

/** Normalize type text to improve readability in generated summaries. */
function cleanType(type: string) {
    return type
        .replace(/\s*\|\s*undefined/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

/** Resolve a property type to display in Storybook tables. */
function getPropertyTypeText(property: PropertySignature) {
    return cleanType(
        property.getTypeNode()?.getText() ??
            property.getType().getText(property, typeFormatFlags)
    );
}

/** List interface and type-alias section names from a source file. */
function getTypeSections(sourceFile: SourceFile) {
    return [
        ...sourceFile
            .getInterfaces()
            .map((declaration) => declaration.getName()),
        ...sourceFile
            .getTypeAliases()
            .map((declaration) => declaration.getName()),
    ];
}

/** Compute the generated argTypes output path for a component types file.
 *  All per-component generated files are co-located with the registry in
 *  .storybook/generated/ to keep generated artifacts out of the source tree.
 */
function getOutputFile(sourceFilePath: string) {
    const componentName = path.basename(path.dirname(sourceFilePath));

    return path.resolve(
        path.dirname(storybookArgTypesFile),
        `${componentName}.argtypes.generated.ts`
    );
}

/** Compute the exported argTypes variable name for a component. */
function getExportName(sourceFilePath: string) {
    const componentName = path.basename(path.dirname(sourceFilePath));

    const camelCaseName = componentName.replace(
        /-([a-z])/g,
        (_: any, letter: string) => letter.toUpperCase()
    );

    return `${camelCaseName}ExtraArgTypes`;
}

/** Build a normalized import path from the registry file to a generated file. */
function getArgTypesImportPath(outputFile: string) {
    return path
        .relative(path.dirname(storybookArgTypesFile), outputFile)
        .replace(/\\/g, "/")
        .replace(/\.ts$/, "")
        .replace(/^([^./])/, "./$1");
}

/** Parse the Storybook title from a story file source string. */
function getStoryTitle(fileText: string) {
    const match = fileText.match(/title:\s*["'`]([^"'`]+)["'`]/);

    return match?.[1];
}

/** Parse the root component identifier from story meta. */
function getComponentRootIdentifier(fileText: string) {
    const match = fileText.match(/component:\s*([A-Za-z0-9_]+)/);

    return match?.[1];
}

/** Find the import path of a given identifier in a story file. */
function getImportPathForIdentifier(fileText: string, identifier: string) {
    const importRegex = new RegExp(
        `import\\s+(?:\\{[^}]*\\b${identifier}\\b[^}]*\\}|${identifier})\\s+from\\s+["']([^"']+)["']`
    );

    return fileText.match(importRegex)?.[1];
}

/** Resolve an import path from a story file to an absolute source file path. */
function resolveImportPath(storyFilePath: string, importPath: string) {
    const candidates = importPath.startsWith("src/")
        ? [
              path.resolve(importPath),
              path.resolve(`${importPath}.ts`),
              path.resolve(`${importPath}.tsx`),
              path.resolve(importPath, "index.ts"),
              path.resolve(importPath, "index.tsx"),
          ]
        : importPath.startsWith(".")
        ? [
              path.resolve(path.dirname(storyFilePath), importPath),
              path.resolve(path.dirname(storyFilePath), `${importPath}.ts`),
              path.resolve(path.dirname(storyFilePath), `${importPath}.tsx`),
              path.resolve(path.dirname(storyFilePath), importPath, "index.ts"),
              path.resolve(
                  path.dirname(storyFilePath),
                  importPath,
                  "index.tsx"
              ),
          ]
        : [];

    return candidates.find((candidate) => existsSync(candidate));
}

/** Resolve a component directory from a component source path. */
function getComponentDirectory(componentSourcePath: string) {
    const stats = statSync(componentSourcePath);

    if (stats.isDirectory()) {
        return componentSourcePath;
    }

    if (path.basename(componentSourcePath).startsWith("index.")) {
        return path.dirname(componentSourcePath);
    }

    return path.dirname(componentSourcePath);
}

/** Resolve the canonical types.ts path for a component directory. */
function getTypesFileForComponentDirectory(componentDirectory: string) {
    const typesFilePath = path.join(componentDirectory, "types.ts");

    return existsSync(typesFilePath) ? typesFilePath : undefined;
}

/** Check whether a file path looks like a Storybook story file. */
function isStoryFile(filePath: string) {
    return /(^|[\\/])stories[\\/].*\.stories\.(ts|tsx)$/.test(filePath);
}

/** Check whether a file path points to a component types.ts file. */
function isTypesFile(filePath: string) {
    return /(^|[\\/])types\.ts$/.test(filePath);
}

/** Generate the global Storybook title-to-argTypes registry file. */
async function generateStorybookArgTypesRegistry() {
    const project = createProject();
    const storyFiles = project.getSourceFiles(storyFileGlob);
    const importRows: string[] = [];
    const mapRows: string[] = [];

    for (const storyFile of storyFiles) {
        const storyFilePath = storyFile.getFilePath();
        const fileText = storyFile.getFullText();
        const title = getStoryTitle(fileText);
        const componentRootIdentifier = getComponentRootIdentifier(fileText);

        if (!title || !componentRootIdentifier) {
            continue;
        }

        const importPath = getImportPathForIdentifier(
            fileText,
            componentRootIdentifier
        );

        if (!importPath) {
            continue;
        }

        const componentSourcePath = resolveImportPath(
            storyFilePath,
            importPath
        );

        if (!componentSourcePath) {
            continue;
        }

        const componentDirectory = getComponentDirectory(componentSourcePath);
        const typesFilePath =
            getTypesFileForComponentDirectory(componentDirectory);

        if (!typesFilePath) {
            continue;
        }

        const outputFile = getOutputFile(typesFilePath);
        const exportName = getExportName(typesFilePath);
        const importAlias = exportName.replace(
            /ExtraArgTypes$/,
            "StoryArgTypes"
        );

        importRows.push(
            `import { ${exportName} as ${importAlias} } from ${JSON.stringify(
                getArgTypesImportPath(outputFile)
            )};`
        );
        mapRows.push(`    ${JSON.stringify(title)}: ${importAlias},`);
    }

    const generated = `// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

${Array.from(new Set(importRows)).sort().join("\n")}

export const storybookArgTypesByTitle = {
${mapRows.sort().join("\n")}
} satisfies Record<string, Record<string, unknown>>;
`;

    await fs.mkdir(path.dirname(storybookArgTypesFile), { recursive: true });
    await fs.writeFile(storybookArgTypesFile, generated);

    console.log(
        `[storybook:argtypes] generated ${path.relative(
            process.cwd(),
            storybookArgTypesFile
        )}`
    );
}

/** Generate a component-level argTypes file from one types.ts source file. */
async function generateForSourceFile(project: Project, sourceFilePath: string) {
    const sourceFile = getSourceFile(project, sourceFilePath);
    const outputFile = getOutputFile(sourceFilePath);
    const exportName = getExportName(sourceFilePath);
    const typeSections = getTypeSections(sourceFile);

    /** Build argTypes rows for interface properties. */
    function getInterfaceArgTypes(interfaceName: string) {
        const interfaceDeclaration =
            sourceFile.getInterfaceOrThrow(interfaceName);
        const interfaceJsDocMeta = getJsDocMeta(interfaceDeclaration);

        const category =
            interfaceDeclaration.getTypeParameters().length > 0
                ? `${interfaceName}<T>`
                : interfaceName;

        return interfaceDeclaration.getProperties().map((property) => {
            const propertyName = property.getName().replace(/^["']|["']$/g, "");
            const jsDocMeta = getJsDocMeta(property);

            return {
                key: `${interfaceName}.${propertyName}`,
                value: {
                    name: propertyName,
                    description: toStorybookDescription(jsDocMeta),
                    deprecated: jsDocMeta.deprecated,
                    control: false,
                    table: {
                        category,
                        tabGroup: interfaceJsDocMeta.tabGroup,
                        type: {
                            summary: getPropertyTypeText(property),
                        },
                        defaultValue: jsDocMeta.defaultValue
                            ? {
                                  summary: jsDocMeta.defaultValue,
                              }
                            : undefined,
                    },
                },
            };
        });
    }

    /** Build an argTypes row for a type alias declaration. */
    function getTypeAliasArgType(typeName: string) {
        const typeAlias = sourceFile.getTypeAliasOrThrow(typeName);
        const jsDocMeta = getJsDocMeta(typeAlias);

        const category =
            typeAlias.getTypeParameters().length > 0
                ? `${typeName}<T>`
                : typeName;

        return {
            key: typeName,
            value: {
                name: category,
                description: toStorybookDescription(jsDocMeta),
                deprecated: jsDocMeta.deprecated,
                control: false,
                table: {
                    category,
                    tabGroup: jsDocMeta.tabGroup,
                    type: {
                        summary: cleanType(
                            typeAlias.getTypeNodeOrThrow().getText()
                        ),
                    },
                    defaultValue: jsDocMeta.defaultValue
                        ? {
                              summary: jsDocMeta.defaultValue,
                          }
                        : undefined,
                },
            },
        };
    }

    const rows = typeSections.flatMap((typeName) => {
        if (sourceFile.getInterface(typeName)) {
            return getInterfaceArgTypes(typeName);
        }

        if (sourceFile.getTypeAlias(typeName)) {
            return [getTypeAliasArgType(typeName)];
        }

        throw new Error(`Unable to find interface or type alias: ${typeName}`);
    });

    const generatedArgTypes = Object.fromEntries(
        rows.map((row) => [row.key, row.value])
    );

    const generated = `// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const ${exportName} = ${JSON.stringify(
        generatedArgTypes,
        null,
        4
    )} satisfies Record<string, unknown>;
`;

    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, generated);

    console.log(
        `[storybook:argtypes] generated ${path.relative(
            process.cwd(),
            outputFile
        )}`
    );
}

/** Generate all component argTypes files and refresh the global registry. */
async function generateAll() {
    const project = createProject();
    const sourceFiles = project.getSourceFiles(sourceFileGlob);

    for (const sourceFile of sourceFiles) {
        await generateForSourceFile(project, sourceFile.getFilePath());
    }

    await generateStorybookArgTypesRegistry();

    console.log(`[storybook:argtypes] generated ${sourceFiles.length} files`);
}

/** Entry point: run a full generate, then optionally watch for changes. */
async function main() {
    const isWatchMode = process.argv.includes("--watch");

    await generateAll();

    if (!isWatchMode) {
        return;
    }

    console.log("[storybook:argtypes] watching...");

    const watcher = chokidar.watch(watchRoots, {
        ignoreInitial: true,
        persistent: true,
        ignored: (filePath, stats) => {
            // Do not ignore directories, otherwise chokidar cannot enter src.
            if (!stats?.isFile()) {
                return false;
            }

            if (filePath.endsWith(".argtypes.generated.ts")) {
                return true;
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

            if (isStoryFile(filePath)) {
                await generateStorybookArgTypesRegistry();
                return;
            }

            if (eventName === "unlink") {
                await fs.rm(getOutputFile(resolvedFilePath), { force: true });
                await generateStorybookArgTypesRegistry();
                return;
            }

            /**
             * Recreate project on every watched generate.
             * This makes watch mode read the latest file content.
             */
            await generateForSourceFile(createProject(), resolvedFilePath);
            await generateStorybookArgTypesRegistry();
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
