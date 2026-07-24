import * as nodePath from "node:path";

import { ArgTypesGenerator } from "tools/storybook-argtypes/arg-types-generator";
import { TsMorphProjectFactory } from "tools/storybook-argtypes/index";

// ---------------------------------------------------------------------------
// Mock node:fs/promises so generateForSourceFile never touches the real disk.
// ---------------------------------------------------------------------------
jest.mock("node:fs/promises", () => ({
    __esModule: true,
    default: {
        mkdir: jest.fn().mockResolvedValue(undefined),
        writeFile: jest.fn().mockResolvedValue(undefined),
    },
}));

jest.mock("node:child_process", () => ({
    spawnSync: jest.fn().mockReturnValue({ status: 0 }),
}));

// Import AFTER the mock so we get the mocked version.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fsMock = require("node:fs/promises").default as {
    mkdir: jest.Mock;
    writeFile: jest.Mock;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Absolute base dir for all test source files — inside the project root
 *  so ts-morph's module resolution can follow relative imports. */
const TEST_BASE = nodePath.resolve("src/__argtypes_generator_test__") as string;

function testPath(...segments: string[]): string {
    return nodePath.join(TEST_BASE, ...segments);
}

/** Create a source file in the singleton ts-morph project and return a
 *  cleanup function that removes it again. */
function addSourceFile(relPath: string, content: string) {
    const project = TsMorphProjectFactory.getProject();
    const sf = project.createSourceFile(testPath(relPath), content, {
        overwrite: true,
    });
    return () => project.removeSourceFile(sf);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("ArgTypesGenerator", () => {
    let generator: ArgTypesGenerator;

    beforeEach(() => {
        generator = new ArgTypesGenerator();
        fsMock.mkdir.mockClear();
        fsMock.writeFile.mockClear();
    });

    // -------------------------------------------------------------------------
    // Path helpers — delegates to FilePathResolver
    // -------------------------------------------------------------------------

    describe("getOutputFile", () => {
        it("derives the .argtypes.generated.ts path from the component directory name", () => {
            const result = generator.getOutputFile(
                "/abs/src/form-input/types.ts"
            );
            expect(result).toContain("form-input.argtypes.generated.ts");
        });
    });

    describe("getExportName", () => {
        it("camel-cases a kebab component name and appends ExtraArgTypes", () => {
            expect(
                generator.getExportName("/abs/src/form-input/types.ts")
            ).toBe("formInputExtraArgTypes");
        });

        it("handles single-word component names", () => {
            expect(generator.getExportName("/abs/src/button/types.ts")).toBe(
                "buttonExtraArgTypes"
            );
        });
    });

    describe("getArgTypesImportPath", () => {
        it("returns a relative path without the .ts extension", () => {
            const outputFile = generator.getOutputFile(
                "/abs/src/button/types.ts"
            );
            const importPath = generator.getArgTypesImportPath(outputFile);
            expect(importPath).not.toContain(".ts");
            expect(importPath).toMatch(/^\.\//);
        });
    });

    // -------------------------------------------------------------------------
    // generateForSourceFile
    // -------------------------------------------------------------------------

    describe("generateForSourceFile", () => {
        /** Parse the JSON object from a generated file's write call. */
        function parseGeneratedArgTypes(
            content: string
        ): Record<string, unknown> {
            return JSON.parse(
                content
                    .replace(/^[\s\S]*?= /, "")
                    .replace(/ satisfies[\s\S]*$/, "")
                    .trim()
            );
        }

        it("skips writing when the file has a @storybookSkipFile comment", async () => {
            const cleanup = addSourceFile(
                "skipped/types.ts",
                "// @storybookSkipFile\nexport interface SkippedProps { label: string; }"
            );
            try {
                await generator.generateForSourceFile(
                    testPath("skipped/types.ts")
                );
                expect(fsMock.writeFile).not.toHaveBeenCalled();
            } finally {
                cleanup();
            }
        });

        it("writes a generated file for a simple interface", async () => {
            const cleanup = addSourceFile(
                "simple-comp/types.ts",
                `export interface SimpleCompProps {
                    label: string;
                    disabled?: boolean;
                }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("simple-comp/types.ts")
                );

                expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
                const [writtenPath, content] = fsMock.writeFile.mock
                    .calls[0] as [string, string];

                expect(writtenPath).toContain(
                    "simple-comp.argtypes.generated.ts"
                );
                expect(content).toContain("simpleCompExtraArgTypes");
                expect(content).toContain('"SimpleCompProps.disabled"');
                expect(content).toContain('"SimpleCompProps.label"');
            } finally {
                cleanup();
            }
        });

        it("marks required properties correctly", async () => {
            const cleanup = addSourceFile(
                "required-comp/types.ts",
                `export interface RequiredCompProps {
                    required: string;
                    optional?: number;
                }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("required-comp/types.ts")
                );

                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = JSON.parse(
                    content
                        .replace(/^[\s\S]*?= /, "")
                        .replace(/ satisfies[\s\S]*$/, "")
                        .trim()
                );

                expect(parsed["RequiredCompProps.required"].type.required).toBe(
                    true
                );
                expect(parsed["RequiredCompProps.optional"].type.required).toBe(
                    false
                );
            } finally {
                cleanup();
            }
        });

        it("does not include @storybookSection tabGroup from an imported type", async () => {
            // Parent file has @storybookSection — its section tag should NOT
            // bleed into child-comp's generated output.
            const cleanupParent = addSourceFile(
                "tabgroup-parent/types.ts",
                `// @storybookSection ParentSection
export interface ParentSectionProps { size: string; }`
            );
            const cleanupChild = addSourceFile(
                "tabgroup-child/types.ts",
                `import type { ParentSectionProps } from "../tabgroup-parent/types";
export interface ChildProps extends ParentSectionProps { label: string; }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("tabgroup-child/types.ts")
                );

                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                expect(content).not.toContain('"tabGroup"');
            } finally {
                cleanupParent();
                cleanupChild();
            }
        });

        it("includes the tabGroup when the local interface declares @storybookSection", async () => {
            const cleanup = addSourceFile(
                "tabgroup-own/types.ts",
                `// @storybookSection MySection
export interface OwnSectionProps { color: string; }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("tabgroup-own/types.ts")
                );

                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                expect(content).toContain('"tabGroup"');
                expect(content).toContain("MySection");
            } finally {
                cleanup();
            }
        });

        it("omits a standalone simple literal union (not referenced by any interface)", async () => {
            const cleanup = addSourceFile(
                "standalone-union/types.ts",
                `export type StandaloneVariant = "primary" | "secondary";`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("standalone-union/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                expect(Object.keys(parsed)).not.toContain("StandaloneVariant");
            } finally {
                cleanup();
            }
        });

        it("generates property rows for an Omit type alias", async () => {
            const cleanup = addSourceFile(
                "omit-alias/types.ts",
                `export interface BaseProps {
    label: string;
    disabled?: boolean;
    internal: string;
}
export type PublicProps = Omit<BaseProps, "internal">;`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("omit-alias/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                expect(Object.keys(parsed)).toContain("PublicProps.label");
                expect(Object.keys(parsed)).toContain("PublicProps.disabled");
                // omitted property should not appear
                expect(Object.keys(parsed)).not.toContain(
                    "PublicProps.internal"
                );
                // no top-level summary for an Omit alias
                expect(Object.keys(parsed)).not.toContain("PublicProps");
            } finally {
                cleanup();
            }
        });

        it("generates property rows for a type-literal alias ({ ... })", async () => {
            const cleanup = addSourceFile(
                "type-literal/types.ts",
                `export type Config = { width: number; height?: number; };`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("type-literal/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                expect(Object.keys(parsed)).toContain("Config.width");
                expect(Object.keys(parsed)).toContain("Config.height");
            } finally {
                cleanup();
            }
        });

        it("generates property rows for an intersection type alias (A & B)", async () => {
            const cleanup = addSourceFile(
                "intersection/types.ts",
                `export type Combined = { alpha: string } & { beta: number };`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("intersection/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                expect(Object.keys(parsed)).toContain("Combined.alpha");
                expect(Object.keys(parsed)).toContain("Combined.beta");
                // No top-level summary row for intersection types
                expect(Object.keys(parsed)).not.toContain("Combined");
            } finally {
                cleanup();
            }
        });

        it("generates a summary row and property rows for a non-literal union type (A | B)", async () => {
            const cleanup = addSourceFile(
                "object-union/types.ts",
                `export type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rect"; width: number };`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("object-union/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                expect(Object.keys(parsed)).toContain("Shape");
                expect(
                    Object.keys(parsed).some((k) => k.startsWith("Shape."))
                ).toBe(true);
            } finally {
                cleanup();
            }
        });

        it("generates a single summary row for a non-composite type alias (callback)", async () => {
            const cleanup = addSourceFile(
                "fn-alias/types.ts",
                `export type ClickHandler = (event: MouseEvent) => void;`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("fn-alias/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                expect(Object.keys(parsed)).toContain("ClickHandler");
                expect(
                    Object.keys(parsed).filter((k) =>
                        k.startsWith("ClickHandler.")
                    )
                ).toHaveLength(0);
            } finally {
                cleanup();
            }
        });

        it("suppresses tabGroup from an imported type-alias @storybookSection", async () => {
            const cleanupParent = addSourceFile(
                "tabgroup-alias-parent/types.ts",
                `// @storybookSection AliasSection
export type BaseConfig = { width: number; };`
            );
            const cleanupChild = addSourceFile(
                "tabgroup-alias-child/types.ts",
                `import type { BaseConfig } from "../tabgroup-alias-parent/types";
export type ExtendedConfig = BaseConfig & { height: number };`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("tabgroup-alias-child/types.ts")
                );
                const [, content] = fsMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                expect(content).not.toContain('"tabGroup"');
            } finally {
                cleanupParent();
                cleanupChild();
            }
        });
    });

    // -------------------------------------------------------------------------
    // generateAll
    // -------------------------------------------------------------------------

    describe("generateAll", () => {
        it("calls generateStorybookArgTypesRegistry after processing source files", async () => {
            jest.spyOn(generator, "generateForSourceFile").mockResolvedValue(
                undefined
            );
            jest.spyOn(
                generator,
                "generateStorybookArgTypesRegistry"
            ).mockResolvedValue(undefined);

            await generator.generateAll();

            expect(
                generator.generateStorybookArgTypesRegistry
            ).toHaveBeenCalledTimes(1);
            expect(generator.generateForSourceFile).toHaveBeenCalled();
        });
    });

    // -------------------------------------------------------------------------
    // formatGenerated
    // -------------------------------------------------------------------------

    describe("formatGenerated", () => {
        it("invokes pretty-quick on the generated output directory", () => {
            const { spawnSync } = jest.requireMock("node:child_process") as {
                spawnSync: jest.Mock;
            };

            generator.formatGenerated();

            expect(spawnSync).toHaveBeenCalledWith("npx", [
                "pretty-quick",
                "--pattern",
                ".storybook/generated/**/*",
            ]);
        });
    });
});
