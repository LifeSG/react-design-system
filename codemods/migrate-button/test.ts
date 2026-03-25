import { readFileSync, writeFile, writeFileSync } from "fs";
import jscodeshift from "jscodeshift";
import parser from "jscodeshift/parser/tsx";
import skott from "skott";
import { CollectLevel } from "skott/graph/api";

import { CodemodUtils } from "../codemod-utils";

const j = jscodeshift;

const IMPORT_PATHS = {
    // DESIGN_SYSTEM: "@lifesg/react-design-system",
    // BUTTON_WITH_ICON: "@lifesg/react-design-system/button-with-icon",
    // ICON_BUTTON: "@lifesg/react-design-system/icon-button",
    // BUTTON: "@lifesg/react-design-system/button",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
    BUTTON_WITH_ICON: "/button-with-icon",
    ICON_BUTTON: "/icon-button",
    BUTTON: "/button",
};

const IMPORT_SPECIFIERS = {
    BUTTON_WITH_ICON: "ButtonWithIcon",
    ICON_BUTTON: "IconButton",
    BUTTON: "Button",
};

const main = async () => {
    const { getStructure, getWorkspace, useGraph, findUnusedDependencies } =
        await skott({
            /**
             * (Optional) Entrypoint of the project. If not provided, `skott` will search for all
             * supported files starting from the current working directory.
             * Defaults to `""`
             */
            entrypoint: "src/index.ts",
            /**
             * (Optional) Ignore patterns that applies during file traversal and module
             * resolution. Each module matching one of the patterns will be discarded from the
             * graph.
             * Defaults to `[]`;
             */
            ignorePatterns: ["src/examples/**/*"],
            /**
             * (Optional) Whether to run Skott using the incremental pattern. By setting "true",
             * Skott will create a `.skott/cache.json` file to only detect and re-process what
             * changed since the last analysis.
             * Defaults to `true`;
             */
            incremental: false,
            /**
             * (Optional) restricts file discovering when building the graph.
             * Defaults to `[".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx"]`
             */
            fileExtensions: [".ts", ".tsx", ".js", ".jsx"],
            /**
             * (Optional) Max depth search for circular dependencies. This can be useful for
             * performance purposes.
             * Defaults to `POSITIVE_INFINITY`.
             */
            circularMaxDepth: 20,
            /**
             * (Optional) Sets the base directory to start the analysis from. It's useful
             * when you want to run skott from a parent directory targetting a specific sub
             * directory (in the context of monorepo for instance). Using `cwd=some-path`
             * is equivalent to `cd some-path && skott`.
             * Defaults to `process.cwd()`.
             */
            // cwd: "./",
            /**
             * (Optional) Whether the base directory of the entrypoint should be included in relative
             * file paths. For the specified `src/index.ts` above, it would consider the
             * root path to be `./` consequently `src/` would never appear in any file paths.
             * Note: `includeBaseDir` can only be set to "true" when there is an `entrypoint`
             * provided.
             * Defaults to `false`.
             */
            includeBaseDir: true,
            /**
             * (Optional) Whether third-party dependencies (npm) and/or builtin (Node.js core modules)
             * should be added in the graph and/or TypeScript type-only import should be followed.
             * Defaults to `thirdParty=false`, `builtin=false`, and `typeOnly=true`.
             */
            dependencyTracking: {
                thirdParty: false,
                builtin: false,
                typeOnly: false,
            },
            /**
             * (Optional) Provide a custom tsconfig file to help skott resolve path aliases.
             * When extending some other tsconfig files, skott will be able to parse
             * all the way up all the path aliases referenced.
             * Defaults to `tsconfig.json`.
             */
            // tsConfigPath: "./tsconfig.json",
            /**
             * (Optional) Provide a path to the package.json that should be used to detect
             * unused third-party dependencies.
             * Defaults to `package.json`.
             */
            // manifestPath: "./package.json",
        });

    const { collectFilesDependingOn } = useGraph();

    // CollectLevel.Deep or CollectLevel.Shallow. In that case just one level so we can use Shallow
    const buttonImporters = [];
    buttonImporters.push(
        ...collectFilesDependingOn(
            "src/button/button.tsx",
            CollectLevel.Shallow
        ).map((file) => file.id)
    );
    buttonImporters.push(
        ...collectFilesDependingOn(
            "src/button/index.ts",
            CollectLevel.Shallow
        ).map((file) => file.id)
    );

    for (const buttonImporter of buttonImporters) {
        const file = readFileSync(buttonImporter, "utf-8").toString();
        const source = jscodeshift(file, {
            parser: parser(),
        });

        const isLifesgImport = CodemodUtils.hasLocalImport(
            source,
            { j, jscodeshift } as any,
            IMPORT_PATHS.BUTTON,
            IMPORT_SPECIFIERS.BUTTON
        );

        if (!isLifesgImport) {
            console.log(`No Button import found for ${buttonImporter}`);
            continue;
        }

        const importDeclarations = source.find(jscodeshift.ImportDeclaration);
        for (const path of importDeclarations.paths()) {
            const currentImportPath = path.node.source.value as string;

            if (!currentImportPath.endsWith(IMPORT_PATHS.BUTTON)) {
                continue;
            }

            if (!path.node.specifiers) {
                continue;
            }

            for (const specifier of path.node.specifiers) {
                if (
                    j.ImportSpecifier.check(specifier) &&
                    specifier.imported.name === IMPORT_SPECIFIERS.BUTTON
                ) {
                    console.log(`Button import found for ${buttonImporter}`);

                    const consumers = collectFilesDependingOn(
                        buttonImporter,
                        CollectLevel.Shallow
                    ).map((file) => file.id);

                    console.log(
                        `Files depending on ${buttonImporter}:`,
                        consumers
                    );

                    source.find(j.JSXOpeningElement).forEach((path) => {
                        const { name, attributes } = path.node;

                        if (
                            j.JSXMemberExpression.check(name) &&
                            j.JSXIdentifier.check(name.object) &&
                            name.object.name === IMPORT_SPECIFIERS.BUTTON &&
                            j.JSXIdentifier.check(name.property)
                        ) {
                            if (name.property.name === "Large") {
                                attributes?.push(
                                    j.jsxAttribute(
                                        j.jsxIdentifier("size"),
                                        j.stringLiteral("large")
                                    )
                                );
                            } else if (name.property.name === "Small") {
                                attributes?.push(
                                    j.jsxAttribute(
                                        j.jsxIdentifier("size"),
                                        j.stringLiteral("small")
                                    )
                                );
                            }

                            path.replace(
                                j.jsxOpeningElement(
                                    j.jsxIdentifier("Button"),
                                    attributes,
                                    path.node.selfClosing
                                )
                            );
                        }
                    });

                    if (consumers.length > 0) {
                        // Do something
                    }
                }
            }
        }

        const transformedSource = source.toSource();
        writeFileSync(buttonImporter, transformedSource);
    }
};

main();
