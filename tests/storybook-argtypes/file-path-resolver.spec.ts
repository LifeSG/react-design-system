import * as path from "node:path";

import type { IFileSystemAdapter } from "tools/storybook-argtypes/adapters/file-system-adapter";
import { FilePathResolver } from "tools/storybook-argtypes/services/file-path-resolver";
import type { FileStat } from "tools/storybook-argtypes/types/arg-types-types";

/** Creates a mock IFileSystemAdapter where each key in existMap is a real file. */
function createMockFs(
    existMap: Record<string, boolean> = {}
): IFileSystemAdapter {
    return {
        existsSync: (p: string) => existMap[p] ?? false,
        statSync: (p: string): FileStat => ({
            isFile: () => existMap[p] === true,
            isDirectory: () => false,
        }),
        resolvePath: (...segments: string[]) => path.resolve(...segments),
    };
}

describe("FilePathResolver", () => {
    describe("getOutputFile", () => {
        it("appends .argtypes.generated.ts to the source file basename", () => {
            const resolver = new FilePathResolver();
            expect(resolver.getOutputFile("src/button/types.ts")).toBe(
                "src/button/types.argtypes.generated.ts"
            );
        });

        it("works for deeply nested paths", () => {
            const resolver = new FilePathResolver();
            expect(resolver.getOutputFile("src/form/form-label/types.ts")).toBe(
                "src/form/form-label/types.argtypes.generated.ts"
            );
        });
    });

    describe("getExportName", () => {
        it("converts a kebab-case filename to camelCase + StoryArgTypes", () => {
            const resolver = new FilePathResolver();
            expect(resolver.getExportName("src/button/types.ts")).toBe(
                "typesStoryArgTypes"
            );
        });

        it("converts a multi-segment kebab name correctly", () => {
            const resolver = new FilePathResolver();
            // "form-custom-field" → "formCustomField"
            expect(
                resolver.getExportName("src/form/form-custom-field/types.ts")
            ).toBe("typesStoryArgTypes");
        });
    });

    describe("getArgTypesImportPath", () => {
        it("strips the .ts extension from the output file path", () => {
            const resolver = new FilePathResolver();
            expect(
                resolver.getArgTypesImportPath(
                    "src/button/types.argtypes.generated.ts"
                )
            ).toBe("src/button/types.argtypes.generated");
        });
    });

    describe("toCamelCase", () => {
        it.each([
            ["button", "button"],
            ["form-label", "formLabel"],
            ["form-custom-field", "formCustomField"],
            ["input-multi-select", "inputMultiSelect"],
        ])("converts %p to %p", (input, expected) => {
            const resolver = new FilePathResolver();
            expect(resolver.toCamelCase(input)).toBe(expected);
        });
    });

    describe("getStoryTitle", () => {
        const resolver = new FilePathResolver();

        it("extracts title from export const Meta pattern", () => {
            const fileText = `
                export const Meta = {
                    title: 'Button/Primary',
                    component: Button,
                };
            `;
            expect(resolver.getStoryTitle(fileText)).toBe("Button/Primary");
        });

        it("extracts title from export default pattern", () => {
            const fileText = `
                export default {
                    title: "Form/Label",
                    component: FormLabel,
                };
            `;
            expect(resolver.getStoryTitle(fileText)).toBe("Form/Label");
        });

        it("returns empty string when no title is found", () => {
            expect(resolver.getStoryTitle("const x = 1;")).toBe("");
        });
    });

    describe("getImportPathForIdentifier", () => {
        const resolver = new FilePathResolver();

        it("returns the import path for a named import", () => {
            const fileText = `import { Button } from '../button';`;
            expect(
                resolver.getImportPathForIdentifier(fileText, "Button")
            ).toBe("../button");
        });

        it("returns empty string when identifier is not imported", () => {
            const fileText = `import { Card } from '../card';`;
            expect(
                resolver.getImportPathForIdentifier(fileText, "Button")
            ).toBe("");
        });
    });

    describe("buildResolutionCandidates", () => {
        it("returns baseName.ts, index.ts, and types.ts candidates", () => {
            const resolver = new FilePathResolver();
            const candidates = resolver.buildResolutionCandidates("src/button");
            expect(candidates).toEqual([
                path.join("src/button", "button.ts"),
                path.join("src/button", "index.ts"),
                path.join("src/button", "types.ts"),
            ]);
        });
    });

    describe("resolveImportPath", () => {
        it("returns the absolute path when the direct .ts file exists", () => {
            const storyFilePath = "stories/button.stories.ts";
            const importPath = "../button";
            const storyDir = path.dirname(storyFilePath);
            const expectedPath = path.resolve(storyDir, importPath + ".ts");
            const mockFs = createMockFs({ [expectedPath]: true });
            const resolver = new FilePathResolver(mockFs);

            const result = resolver.resolveImportPath(
                storyFilePath,
                importPath
            );
            expect(result).toBe(expectedPath);
        });

        it("returns the index.ts path when the directory/index.ts exists", () => {
            const storyFilePath = "stories/button.stories.ts";
            const importPath = "../button";
            const storyDir = path.dirname(storyFilePath);
            const indexPath = path.resolve(storyDir, importPath, "index.ts");
            const mockFs = createMockFs({ [indexPath]: true });
            const resolver = new FilePathResolver(mockFs);

            const result = resolver.resolveImportPath(
                storyFilePath,
                importPath
            );
            expect(result).toBe(indexPath);
        });

        it("returns empty string when neither path exists", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.resolveImportPath(
                    "stories/button.stories.ts",
                    "../button"
                )
            ).toBe("");
        });
    });

    describe("getComponentDirectory", () => {
        it("returns the parent directory of the source file", () => {
            const resolver = new FilePathResolver();
            expect(resolver.getComponentDirectory("src/button/types.ts")).toBe(
                "src/button"
            );
        });
    });

    describe("getTypesFileForComponentDirectory", () => {
        it("returns the first matching candidate that exists as a file", () => {
            const typesPath = path.join("src/button", "types.ts");
            const mockFs = createMockFs({ [typesPath]: true });
            const resolver = new FilePathResolver(mockFs);

            expect(
                resolver.getTypesFileForComponentDirectory("src/button")
            ).toBe(typesPath);
        });

        it("returns empty string when no candidate exists", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getTypesFileForComponentDirectory("src/nonexistent")
            ).toBe("");
        });
    });

    describe("getNestedFormTypesFile", () => {
        it("maps a CamelCase component name to form-{kebab}/types.ts", () => {
            const candidate = "src/form/form-custom-field/types.ts";
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);

            expect(resolver.getNestedFormTypesFile("CustomField")).toBe(
                candidate
            );
        });

        it("returns undefined when the mapped types.ts does not exist", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getNestedFormTypesFile("NonExistentField")
            ).toBeUndefined();
        });

        it("returns undefined for an empty component name", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(resolver.getNestedFormTypesFile("")).toBeUndefined();
        });
    });

    describe("getTypesFileFromStoryDirectory", () => {
        it("resolves 'button.stories.ts' to src/button/types.ts", () => {
            const candidate = path.resolve("src/button/types.ts");
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);

            const result = resolver.getTypesFileFromStoryDirectory(
                "stories/button/button.stories.ts"
            );
            expect(result).toBe(candidate);
        });

        it("returns empty string when no types file is found", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getTypesFileFromStoryDirectory(
                    "stories/nonexistent.stories.ts"
                )
            ).toBe("");
        });
    });
});
