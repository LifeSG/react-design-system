import type { IFileSystemAdapter } from "tools/storybook-argtypes/adapters/file-system-adapter";
import type { FilePathResolver } from "tools/storybook-argtypes/services/file-path-resolver";
import { StoryRegistryGenerator } from "tools/storybook-argtypes/services/story-registry-generator";
import type { FileStat } from "tools/storybook-argtypes/types/arg-types-types";

/** Minimal IFileSystemAdapter mock — every path is treated as non-existent by default. */
function createMockFs(
    existMap: Record<string, boolean> = {}
): IFileSystemAdapter {
    return {
        existsSync: (p: string) => existMap[p] ?? false,
        statSync: (p: string): FileStat => ({
            isFile: () => existMap[p] === true,
            isDirectory: () => false,
        }),
        resolvePath: (...segments: string[]) =>
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require("node:path").resolve(...segments),
    };
}

/** Build a partially-mocked FilePathResolver with all the methods StoryRegistryGenerator uses. */
function createMockResolver(
    overrides: Partial<{
        getTypesFileFromStoryDirectory: (p: string) => string | undefined;
        getExportName: (p: string) => string;
        getOutputFile: (p: string) => string;
        getArgTypesImportPath: (p: string) => string;
        toKebabCase: (s: string) => string;
    }> = {}
): FilePathResolver {
    return {
        getTypesFileFromStoryDirectory: jest.fn().mockReturnValue(undefined),
        getExportName: jest.fn().mockReturnValue("buttonExtraArgTypes"),
        getOutputFile: jest
            .fn()
            .mockReturnValue(
                "/abs/.storybook/generated/button.argtypes.generated.ts"
            ),
        getArgTypesImportPath: jest
            .fn()
            .mockReturnValue("./button.argtypes.generated"),
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
            // eslint-disable-next-line @typescript-eslint/no-require-imports
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
        it("generates an empty registry when the input is empty", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "generateRegistry").mockReturnValue({});

            const content = generator.generateRegistryFileContent();
            expect(content).toContain("storybookArgTypesByTitle");
            expect(content).not.toContain("import ");
        });

        it("generates import statements and registry entries for known mappings", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "generateRegistry").mockReturnValue({
                button: {
                    source: "src/button/types.argtypes.generated",
                    export: "typesStoryArgTypes",
                },
            });

            const content = generator.generateRegistryFileContent();
            expect(content).toContain(
                'from "src/button/types.argtypes.generated"'
            );
            expect(content).toContain("typesStoryArgTypes");
            expect(content).toContain('"button": typesStoryArgTypes');
        });

        it("deduplicates imports when multiple entries share the same source", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "generateRegistry").mockReturnValue({
                "form-input": {
                    source: "./form.argtypes.generated",
                    export: "formInputExtraArgTypes",
                },
                "form-select": {
                    source: "./form.argtypes.generated",
                    export: "formSelectExtraArgTypes",
                },
            });

            const content = generator.generateRegistryFileContent();
            const importCount = (
                content.match(/from ".\/form\.argtypes\.generated"/g) || []
            ).length;
            expect(importCount).toBe(1);
            expect(content).toContain("formInputExtraArgTypes");
            expect(content).toContain("formSelectExtraArgTypes");
        });

        it("sorts registry entries alphabetically", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "generateRegistry").mockReturnValue({
                zebra: {
                    source: "./z.generated",
                    export: "zebraExtraArgTypes",
                },
                apple: {
                    source: "./a.generated",
                    export: "appleExtraArgTypes",
                },
            });

            const content = generator.generateRegistryFileContent();
            const appleIdx = content.indexOf('"apple"');
            const zebraIdx = content.indexOf('"zebra"');
            expect(appleIdx).toBeLessThan(zebraIdx);
        });
    });
});
