import type { IFileSystemAdapter } from "tools/storybook-argtypes/adapters/file-system-adapter";
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

    describe("generateRegistry", () => {
        it("returns an empty registry when no story files are found", () => {
            // Override findAllStoryFiles to return empty
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([]);

            expect(generator.generateRegistry()).toEqual({});
        });

        it("skips story files whose corresponding types file does not exist", () => {
            const generator = new StoryRegistryGenerator(
                undefined,
                createMockFs()
            );
            jest.spyOn(generator, "findAllStoryFiles").mockReturnValue([
                "stories/unknown-component.stories.ts",
            ]);

            expect(generator.generateRegistry()).toEqual({});
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
            // The generator writes `{\n};\n` (not `{}`) — just verify no entries were added
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
    });
});
