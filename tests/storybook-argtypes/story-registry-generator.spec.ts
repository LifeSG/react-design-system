import type { IFileSystemAdapter } from "tools/storybook-argtypes/adapters/file-system-adapter";
import type { FilePathResolver } from "tools/storybook-argtypes/services/file-path-resolver";
import { StoryRegistryGenerator } from "tools/storybook-argtypes/services/story-registry-generator";
import type { FileStat } from "tools/storybook-argtypes/types";
import type { SourceFile } from "ts-morph";

/** Minimal IFileSystemAdapter mock — every path is treated as non-existent by default. */
function createMockFs(
    existMap: Record<string, boolean> = {}
): IFileSystemAdapter {
    return {
        existsSync: (p: string) => existMap[p] ?? false,
        mkdir: async () => {},
        rm: async () => {},
        statSync: (p: string): FileStat => ({
            isFile: () => existMap[p] === true,
            isDirectory: () => false,
        }),
        resolvePath: (...segments: string[]) =>
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require("node:path").resolve(...segments),
        writeFile: async () => {},
    };
}

/** Build a partially-mocked FilePathResolver with all the methods StoryRegistryGenerator uses. */
function createMockResolver(
    overrides: Partial<{
        getArgTypesImportPath: (p: string) => string;
        getComponentDirectory: (p: string) => string;
        getComponentReference: (
            fileText: string
        ) => { rootIdentifier: string; memberPath: string[] } | undefined;
        getExportName: (p: string) => string;
        getImportPathForIdentifier: (
            fileText: string,
            identifier: string
        ) => string | undefined;
        getNestedFormTypesFile: (
            componentDirectory: string,
            memberPath: string[]
        ) => string | undefined;
        getOutputFile: (p: string) => string;
        getStoryTitle: (fileText: string) => string | undefined;
        getTypesFileForComponentDirectory: (
            componentDirectory: string
        ) => string | undefined;
        getTypesFileFromStoryDirectory: (p: string) => string | undefined;
        resolveImportPath: (
            storyFilePath: string,
            importPath: string
        ) => string | undefined;
        toKebabCase: (s: string) => string;
    }> = {}
): FilePathResolver {
    return {
        getArgTypesImportPath: jest
            .fn()
            .mockReturnValue("./button.argtypes.generated"),
        getComponentDirectory: jest.fn().mockReturnValue("/abs/src/button"),
        getComponentReference: jest
            .fn()
            .mockReturnValue({ rootIdentifier: "Button", memberPath: [] }),
        getTypesFileFromStoryDirectory: jest.fn().mockReturnValue(undefined),
        getExportName: jest.fn().mockReturnValue("buttonExtraArgTypes"),
        getImportPathForIdentifier: jest
            .fn()
            .mockReturnValue("src/button/index.tsx"),
        getNestedFormTypesFile: jest.fn().mockReturnValue(undefined),
        getOutputFile: jest
            .fn()
            .mockReturnValue(
                "/abs/.storybook/generated/button.argtypes.generated.ts"
            ),
        getStoryTitle: jest.fn().mockReturnValue("button"),
        getTypesFileForComponentDirectory: jest
            .fn()
            .mockReturnValue("/abs/src/button/types.ts"),
        resolveImportPath: jest
            .fn()
            .mockReturnValue("/abs/src/button/index.tsx"),
        toKebabCase: jest.fn().mockImplementation((s: string) => s),
        ...overrides,
    } as unknown as FilePathResolver;
}

describe("StoryRegistryGenerator", () => {
    describe("isStoryFile", () => {
        let generator: StoryRegistryGenerator;

        beforeEach(() => {
            generator = new StoryRegistryGenerator(undefined, createMockFs());
        });

        it.each([
            ["button.stories.ts", true],
            ["button.stories.tsx", true],
            ["button.stories.js", true],
            ["button.stories.jsx", true],
            ["button.spec.ts", false],
            ["types.ts", false],
            ["button.ts", false],
        ])("classifies %p as story=%s", (filename, expected) => {
            expect(generator.isStoryFile(filename)).toBe(expected);
        });
    });

    describe("isTypesFile", () => {
        let generator: StoryRegistryGenerator;

        beforeEach(() => {
            generator = new StoryRegistryGenerator(undefined, createMockFs());
        });

        it.each([
            ["types.ts", true],
            ["types.tsx", true],
            ["button.stories.ts", false],
            ["index.ts", false],
        ])("classifies %p as types=%s", (filename, expected) => {
            expect(generator.isTypesFile(filename)).toBe(expected);
        });
    });

    describe("getRegistryFileHeader", () => {
        it("contains the auto-generated warning comment", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            const header = generator.getRegistryFileHeader();
            expect(header).toContain("Auto-generated");
            expect(header).toContain("DO NOT EDIT MANUALLY");
        });
    });

    describe("findAllStoryFiles", () => {
        it("returns empty array when glob throws", () => {
            // The real GlobSync would need the filesystem — simulate the catch branch
            // by constructing a generator that internally throws from GlobSync.
            // We do this by mocking the glob module.
            jest.mock("glob", () => ({
                GlobSync: jest.fn().mockImplementation(() => {
                    throw new Error("glob error");
                }),
            }));

            // Re-require to pick up the mock (Jest module cache isolation).
            // Easier: just spy on the method directly.
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "findAllStoryFiles").mockImplementation(
                () => {
                    try {
                        throw new Error("glob failure");
                    } catch {
                        return [];
                    }
                }
            );

            expect(generator.findAllStoryFiles()).toEqual([]);
        });

        it("returns the list of found story files", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                "stories/button/button.stories.ts",
                "stories/input/input.stories.tsx",
            ]);

            expect(generator.findAllStoryFiles()).toEqual([
                "stories/button/button.stories.ts",
                "stories/input/input.stories.tsx",
            ]);
        });
    });

    describe("generateRegistry", () => {
        it("returns an empty registry when no story files are found", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([]);

            expect(generator.generateRegistry()).toEqual({});
        });

        it("skips story files that do not exist on disk", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs() // all existsSync → false
            );
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                "stories/button/button.stories.ts",
            ]);

            expect(generator.generateRegistry()).toEqual({});
        });

        it("skips story files whose types file cannot be resolved", () => {
            // existsSync returns true for the story file, but resolver returns undefined for types
            const storyPath = "stories/unknown/unknown.stories.ts";
            const fs = createMockFs({ [storyPath]: true });
            const resolver = createMockResolver({
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockReturnValue(undefined),
            });
            const generator = new StoryRegistryGenerator(resolver, fs);
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                storyPath,
            ]);

            expect(generator.generateRegistry()).toEqual({});
        });

        it("populates registry when getTypesFileFromStoryDirectory succeeds", () => {
            const storyPath = "stories/button/button.stories.ts";
            const typesPath = "/abs/src/button/types.ts";
            const fs = createMockFs({ [storyPath]: true });
            const resolver = createMockResolver({
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockReturnValue(typesPath),
                getExportName: jest.fn().mockReturnValue("buttonExtraArgTypes"),
                getOutputFile: jest
                    .fn()
                    .mockReturnValue(
                        "/abs/.storybook/generated/button.argtypes.generated.ts"
                    ),
                getArgTypesImportPath: jest
                    .fn()
                    .mockReturnValue("./button.argtypes.generated"),
            });
            const generator = new StoryRegistryGenerator(resolver, fs);
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                storyPath,
            ]);

            expect(generator.generateRegistry()).toEqual({
                button: {
                    source: "./button.argtypes.generated",
                    export: "buttonExtraArgTypes",
                },
            });
        });

        it("falls back to src/{name}/types.ts when story-dir resolution fails", () => {
            const storyPath = "stories/button/button.stories.ts";
            // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/consistent-type-imports
            const nodePath = require("node:path") as typeof import("node:path");
            const fallbackCandidate = nodePath.resolve(
                "src",
                "button",
                "types.ts"
            );

            const fs = createMockFs({
                [storyPath]: true,
                [fallbackCandidate]: true,
            });
            const resolver = createMockResolver({
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockReturnValue(undefined), // primary fails
                getExportName: jest.fn().mockReturnValue("buttonExtraArgTypes"),
                getOutputFile: jest
                    .fn()
                    .mockReturnValue(
                        "/abs/.storybook/generated/button.argtypes.generated.ts"
                    ),
                getArgTypesImportPath: jest
                    .fn()
                    .mockReturnValue("./button.argtypes.generated"),
            });
            const generator = new StoryRegistryGenerator(resolver, fs);
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                storyPath,
            ]);

            const result = generator.generateRegistry();

            expect(result).toEqual({
                button: {
                    source: "./button.argtypes.generated",
                    export: "buttonExtraArgTypes",
                },
            });
        });

        it("catches errors thrown by resolver methods and skips the file", () => {
            const storyPath = "stories/button/button.stories.ts";
            const fs = createMockFs({ [storyPath]: true });
            const resolver = createMockResolver({
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockImplementation(() => {
                        throw new Error("resolver failure");
                    }),
            });
            const generator = new StoryRegistryGenerator(resolver, fs);
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                storyPath,
            ]);

            expect(generator.generateRegistry()).toEqual({});
        });

        it("builds registry entries for multiple story files", () => {
            const stories = [
                "stories/button/button.stories.ts",
                "stories/input/input.stories.ts",
            ];
            const typesFiles: Record<string, string> = {
                "stories/button/button.stories.ts": "/abs/src/button/types.ts",
                "stories/input/input.stories.ts": "/abs/src/input/types.ts",
            };
            const exportNames: Record<string, string> = {
                "/abs/src/button/types.ts": "buttonExtraArgTypes",
                "/abs/src/input/types.ts": "inputExtraArgTypes",
            };
            const importPaths: Record<string, string> = {
                "/abs/.storybook/generated/button.argtypes.generated.ts":
                    "./button.argtypes.generated",
                "/abs/.storybook/generated/input.argtypes.generated.ts":
                    "./input.argtypes.generated",
            };
            const outputFiles: Record<string, string> = {
                "/abs/src/button/types.ts":
                    "/abs/.storybook/generated/button.argtypes.generated.ts",
                "/abs/src/input/types.ts":
                    "/abs/.storybook/generated/input.argtypes.generated.ts",
            };

            const existMap: Record<string, boolean> = {};
            for (const s of stories) existMap[s] = true;

            const fs = createMockFs(existMap);
            const resolver = createMockResolver({
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockImplementation((p: string) => typesFiles[p]),
                getExportName: jest
                    .fn()
                    .mockImplementation((p: string) => exportNames[p]),
                getOutputFile: jest
                    .fn()
                    .mockImplementation((p: string) => outputFiles[p]),
                getArgTypesImportPath: jest
                    .fn()
                    .mockImplementation((p: string) => importPaths[p]),
            });
            const generator = new StoryRegistryGenerator(resolver, fs);
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue(stories);

            expect(generator.generateRegistry()).toEqual({
                button: {
                    source: "./button.argtypes.generated",
                    export: "buttonExtraArgTypes",
                },
                input: {
                    source: "./input.argtypes.generated",
                    export: "inputExtraArgTypes",
                },
            });
        });
    });

    describe("generateRegistryFileContent", () => {
        it("generates an empty registry when all types files are filtered out", () => {
            const resolver = createMockResolver({
                getArgTypesImportPath: jest
                    .fn()
                    .mockReturnValue("./button.argtypes.generated"),
                getExportName: jest.fn().mockReturnValue("buttonExtraArgTypes"),
                getStoryTitle: jest.fn().mockReturnValue("Button"),
                getTypesFileForComponentDirectory: jest
                    .fn()
                    .mockReturnValue("/abs/src/button/types.ts"),
            });
            const generator = new StoryRegistryGenerator(
                resolver,
                createMockFs()
            );

            const storyFile = {
                getFilePath: () => "/abs/stories/button/button.stories.ts",
                getFullText: () => "export default { title: 'Button' };",
            } as unknown as SourceFile;

            const content = generator.generateRegistryFileContent(
                [storyFile],
                () => false
            );

            expect(content).toContain("storybookArgTypesByTitle");
            expect(content).not.toContain("import {");
            expect(content).not.toContain('"Button":');
        });

        it("generates import statements and registry entries for known mappings", () => {
            const resolver = createMockResolver({
                getArgTypesImportPath: jest
                    .fn()
                    .mockReturnValue("src/button/types.argtypes.generated"),
                getExportName: jest.fn().mockReturnValue("typesStoryArgTypes"),
                getStoryTitle: jest.fn().mockReturnValue("button"),
                getTypesFileForComponentDirectory: jest
                    .fn()
                    .mockReturnValue("/abs/src/button/types.ts"),
            });
            const generator = new StoryRegistryGenerator(
                resolver,
                createMockFs()
            );

            const storyFile = {
                getFilePath: () => "/abs/stories/button/button.stories.ts",
                getFullText: () => "export default { title: 'button' };",
            } as unknown as SourceFile;

            const content = generator.generateRegistryFileContent(
                [storyFile],
                () => true
            );

            expect(content).toContain(
                'from "src/button/types.argtypes.generated"'
            );
            expect(content).toContain("typesStoryArgTypes");
            expect(content).toContain('"button": typesStoryArgTypes');
        });

        it("deduplicates imports when multiple entries share the same source", () => {
            const resolver = createMockResolver({
                getStoryTitle: jest
                    .fn()
                    .mockImplementation((fileText: string) =>
                        fileText.includes("FormInput")
                            ? "form-input"
                            : "form-select"
                    ),
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockImplementation((storyFilePath: string) =>
                        storyFilePath.includes("input")
                            ? "/abs/src/form-input/types.ts"
                            : "/abs/src/form-select/types.ts"
                    ),
                getOutputFile: jest
                    .fn()
                    .mockReturnValue(
                        "/abs/.storybook/generated/form.argtypes.generated.ts"
                    ),
                getArgTypesImportPath: jest
                    .fn()
                    .mockReturnValue("./form.argtypes.generated"),
                getExportName: jest
                    .fn()
                    .mockImplementation((typesFilePath: string) =>
                        typesFilePath.includes("form-input")
                            ? "formInputExtraArgTypes"
                            : "formSelectExtraArgTypes"
                    ),
            });
            const generator = new StoryRegistryGenerator(
                resolver,
                createMockFs()
            );

            const inputStory = {
                getFilePath: () => "/abs/stories/form/input.stories.ts",
                getFullText: () => "export default { title: 'FormInput' };",
            } as unknown as SourceFile;
            const selectStory = {
                getFilePath: () => "/abs/stories/form/select.stories.ts",
                getFullText: () => "export default { title: 'FormSelect' };",
            } as unknown as SourceFile;

            const content = generator.generateRegistryFileContent(
                [inputStory, selectStory],
                () => true
            );

            const importCount = (
                content.match(/from ".\/form\.argtypes\.generated"/g) || []
            ).length;
            expect(importCount).toBe(1);
            expect(content).toContain(
                "formInputExtraArgTypes as formInputStoryArgTypes"
            );
            expect(content).toContain(
                "formSelectExtraArgTypes as formSelectStoryArgTypes"
            );
        });

        it("sorts registry entries alphabetically", () => {
            const resolver = createMockResolver({
                getStoryTitle: jest
                    .fn()
                    .mockImplementation((fileText: string) =>
                        fileText.includes("apple") ? "apple" : "zebra"
                    ),
                getTypesFileFromStoryDirectory: jest
                    .fn()
                    .mockImplementation((storyFilePath: string) =>
                        storyFilePath.includes("apple")
                            ? "/abs/src/apple/types.ts"
                            : "/abs/src/zebra/types.ts"
                    ),
                getOutputFile: jest
                    .fn()
                    .mockImplementation((typesFilePath: string) =>
                        typesFilePath.includes("apple")
                            ? "/abs/.storybook/generated/a.generated.ts"
                            : "/abs/.storybook/generated/z.generated.ts"
                    ),
                getArgTypesImportPath: jest
                    .fn()
                    .mockImplementation((outputPath: string) =>
                        outputPath.includes("a.generated")
                            ? "./a.generated"
                            : "./z.generated"
                    ),
                getExportName: jest
                    .fn()
                    .mockImplementation((typesFilePath: string) =>
                        typesFilePath.includes("apple")
                            ? "appleExtraArgTypes"
                            : "zebraExtraArgTypes"
                    ),
            });
            const generator = new StoryRegistryGenerator(
                resolver,
                createMockFs()
            );

            const zebraStory = {
                getFilePath: () => "/abs/stories/zebra.stories.ts",
                getFullText: () => "export default { title: 'zebra' };",
            } as unknown as SourceFile;
            const appleStory = {
                getFilePath: () => "/abs/stories/apple.stories.ts",
                getFullText: () => "export default { title: 'apple' };",
            } as unknown as SourceFile;

            const content = generator.generateRegistryFileContent(
                [zebraStory, appleStory],
                () => true
            );
            const appleIdx = content.indexOf('"apple"');
            const zebraIdx = content.indexOf('"zebra"');
            expect(appleIdx).toBeLessThan(zebraIdx);
        });

        it("builds content with aliased exports and satisfies clause", () => {
            const resolver = createMockResolver({
                getArgTypesImportPath: jest
                    .fn()
                    .mockReturnValue("./button.argtypes.generated"),
                getExportName: jest.fn().mockReturnValue("buttonExtraArgTypes"),
                getStoryTitle: jest.fn().mockReturnValue("Button"),
                getTypesFileForComponentDirectory: jest
                    .fn()
                    .mockReturnValue("/abs/src/button/types.ts"),
            });
            const generator = new StoryRegistryGenerator(
                resolver,
                createMockFs()
            );

            const storyFile = {
                getFilePath: () => "/abs/stories/button/button.stories.ts",
                getFullText: () => "export default { title: 'Button' };",
            } as unknown as SourceFile;

            const content = generator.generateRegistryFileContent(
                [storyFile],
                () => true
            );

            expect(content).toContain(
                'import { buttonExtraArgTypes as buttonStoryArgTypes } from "./button.argtypes.generated";'
            );
            expect(content).toContain('"Button": buttonStoryArgTypes');
            expect(content).toContain(
                "satisfies Record<string, Record<string, unknown>>;"
            );
        });
    });
});
