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
    describe("getStoryTitle", () => {
        const resolver = new FilePathResolver();

        it("extracts title from a story meta object", () => {
            const fileText = `
                export const meta = {
                    title: 'Button/Primary',
                    component: Button,
                };
            `;
            expect(resolver.getStoryTitle(fileText)).toBe("Button/Primary");
        });

        it("works with double quotes", () => {
            expect(
                resolver.getStoryTitle(`export default { title: "Form/Label" }`)
            ).toBe("Form/Label");
        });

        it("works with backtick strings", () => {
            expect(resolver.getStoryTitle("title: `Input/Select`")).toBe(
                "Input/Select"
            );
        });

        it("returns undefined when no title is found", () => {
            expect(resolver.getStoryTitle("const x = 1;")).toBeUndefined();
        });
    });

    describe("getComponentReference", () => {
        const resolver = new FilePathResolver();

        it("extracts a simple component reference", () => {
            expect(
                resolver.getComponentReference("component: Button,")
            ).toEqual({ rootIdentifier: "Button", memberPath: [] });
        });

        it("extracts a nested component reference like Form.CustomField", () => {
            expect(
                resolver.getComponentReference("component: Form.CustomField,")
            ).toEqual({ rootIdentifier: "Form", memberPath: ["CustomField"] });
        });

        it("handles deeper nesting", () => {
            expect(resolver.getComponentReference("component: A.B.C,")).toEqual(
                { rootIdentifier: "A", memberPath: ["B", "C"] }
            );
        });

        it("returns undefined when no component property is found", () => {
            expect(
                resolver.getComponentReference("const x = 1;")
            ).toBeUndefined();
        });
    });

    describe("getImportPathForIdentifier", () => {
        const resolver = new FilePathResolver();

        it("returns the import path for a named import", () => {
            expect(
                resolver.getImportPathForIdentifier(
                    `import { Button } from '../button';`,
                    "Button"
                )
            ).toBe("../button");
        });

        it("returns the path for a default import", () => {
            expect(
                resolver.getImportPathForIdentifier(
                    `import Form from '../form';`,
                    "Form"
                )
            ).toBe("../form");
        });

        it("does not match a different identifier in the same import", () => {
            expect(
                resolver.getImportPathForIdentifier(
                    `import { Card } from '../card';`,
                    "Button"
                )
            ).toBeUndefined();
        });

        it("returns undefined when the identifier is not imported", () => {
            expect(
                resolver.getImportPathForIdentifier("const x = 1;", "Button")
            ).toBeUndefined();
        });
    });

    describe("resolveImportPath", () => {
        it("resolves a src/-prefixed path to the direct file", () => {
            const basePath = path.resolve("src/button");
            const candidate = `${basePath}.ts`;
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.resolveImportPath(
                    "stories/button.stories.ts",
                    "src/button"
                )
            ).toBe(candidate);
        });

        it("resolves a relative path to a .ts file", () => {
            const storyFilePath = "stories/button.stories.ts";
            const importPath = "../button";
            const basePath = path.resolve(
                path.dirname(storyFilePath),
                importPath
            );
            const candidate = `${basePath}.ts`;
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(resolver.resolveImportPath(storyFilePath, importPath)).toBe(
                candidate
            );
        });

        it("resolves a relative path to a .tsx file", () => {
            const storyFilePath = "stories/button.stories.ts";
            const importPath = "../button";
            const basePath = path.resolve(
                path.dirname(storyFilePath),
                importPath
            );
            const candidate = `${basePath}.tsx`;
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(resolver.resolveImportPath(storyFilePath, importPath)).toBe(
                candidate
            );
        });

        it("falls back to index.ts when the direct file does not exist", () => {
            const storyFilePath = "stories/button.stories.ts";
            const importPath = "../button";
            const basePath = path.resolve(
                path.dirname(storyFilePath),
                importPath
            );
            const candidate = path.join(basePath, "index.ts");
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(resolver.resolveImportPath(storyFilePath, importPath)).toBe(
                candidate
            );
        });

        it("falls back to index.tsx", () => {
            const storyFilePath = "stories/button.stories.ts";
            const importPath = "../button";
            const basePath = path.resolve(
                path.dirname(storyFilePath),
                importPath
            );
            const candidate = path.join(basePath, "index.tsx");
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(resolver.resolveImportPath(storyFilePath, importPath)).toBe(
                candidate
            );
        });

        it("returns undefined when no candidate exists", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.resolveImportPath(
                    "stories/button.stories.ts",
                    "../button"
                )
            ).toBeUndefined();
        });

        it("returns undefined for npm package imports (no ./ or src/ prefix)", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.resolveImportPath("stories/button.stories.ts", "react")
            ).toBeUndefined();
        });
    });

    describe("getComponentDirectory", () => {
        it("returns the parent directory of the source file", () => {
            const resolver = new FilePathResolver();
            expect(resolver.getComponentDirectory("src/button/types.ts")).toBe(
                "src/button"
            );
        });

        it("works for nested paths", () => {
            const resolver = new FilePathResolver();
            expect(
                resolver.getComponentDirectory("src/form/form-label/types.ts")
            ).toBe("src/form/form-label");
        });
    });

    describe("getTypesFileForComponentDirectory", () => {
        it("returns types.ts when it exists", () => {
            const typesPath = path.join("src/button", "types.ts");
            const mockFs = createMockFs({ [typesPath]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.getTypesFileForComponentDirectory("src/button")
            ).toBe(typesPath);
        });

        it("returns undefined when types.ts does not exist", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getTypesFileForComponentDirectory("src/nonexistent")
            ).toBeUndefined();
        });
    });

    describe("getNestedFormTypesFile", () => {
        it("maps form directory + CustomField member to form-custom-field/types.ts", () => {
            const formDir = path.resolve("src/form");
            const candidate = path.join(
                formDir,
                "form-custom-field",
                "types.ts"
            );
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.getNestedFormTypesFile(formDir, ["CustomField"])
            ).toBe(candidate);
        });

        it("uses the last member in the path (leaf)", () => {
            const formDir = path.resolve("src/form");
            const candidate = path.join(formDir, "form-label", "types.ts");
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.getNestedFormTypesFile(formDir, [
                    "SomeParent",
                    "Label",
                ])
            ).toBe(candidate);
        });

        it("returns undefined for non-form directories", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getNestedFormTypesFile(path.resolve("src/button"), [
                    "CustomField",
                ])
            ).toBeUndefined();
        });

        it("returns undefined for an empty memberPath", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getNestedFormTypesFile(path.resolve("src/form"), [])
            ).toBeUndefined();
        });

        it("returns undefined when the types file does not exist", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getNestedFormTypesFile(path.resolve("src/form"), [
                    "NonExistentField",
                ])
            ).toBeUndefined();
        });
    });

    describe("getTypesFileFromStoryDirectory", () => {
        it("resolves a story file to its component types.ts via the fallback directory", () => {
            const candidate = path.resolve("src/button/types.ts");
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.getTypesFileFromStoryDirectory(
                    "stories/button/button.stories.ts"
                )
            ).toBe(candidate);
        });

        it("resolves a story with a stripped subdir prefix (form-custom-field => form/custom-field)", () => {
            const candidate = path.resolve("src/form/custom-field/types.ts");
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.getTypesFileFromStoryDirectory(
                    "stories/form/form-custom-field.stories.ts"
                )
            ).toBe(candidate);
        });

        it("resolves via the full story base name when the stripped name has no match", () => {
            // "popover-inline" under "stories/popover/" — stripping "popover-" gives "inline"
            // which doesn't exist; fall through to full name "popover-inline"
            const candidate = path.resolve(
                "src/popover/popover-inline/types.ts"
            );
            const mockFs = createMockFs({ [candidate]: true });
            const resolver = new FilePathResolver(mockFs);
            expect(
                resolver.getTypesFileFromStoryDirectory(
                    "stories/popover/popover-inline.stories.ts"
                )
            ).toBe(candidate);
        });

        it("returns undefined when no types file is found", () => {
            const resolver = new FilePathResolver(createMockFs());
            expect(
                resolver.getTypesFileFromStoryDirectory(
                    "stories/nonexistent/nonexistent.stories.ts"
                )
            ).toBeUndefined();
        });
    });
});
