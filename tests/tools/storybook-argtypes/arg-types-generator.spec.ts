import * as nodePath from "node:path";

import type { IFileSystemAdapter } from "tools/storybook-argtypes/adapters/file-system-adapter";
import { ArgTypesGenerator } from "tools/storybook-argtypes/arg-types-generator";
import { STORYBOOK_ARGTYPES_FILE } from "tools/storybook-argtypes/config/arg-types-config";
import { StoryRegistryGenerator } from "tools/storybook-argtypes/services";
import type { FileStat } from "tools/storybook-argtypes/types";

import { TsMorphProjectFactory } from "../../../tools/shared/ts-morph-project-factory";

jest.mock("node:child_process", () => ({
    spawnSync: jest.fn().mockReturnValue({ status: 0 }),
}));

function createMockFsAdapter(): jest.Mocked<IFileSystemAdapter> {
    return {
        existsSync: jest.fn().mockReturnValue(false),
        mkdir: jest.fn().mockResolvedValue(undefined),
        resolvePath: jest.fn((...segments: string[]) =>
            nodePath.resolve(...segments)
        ),
        rm: jest.fn().mockResolvedValue(undefined),
        statSync: jest.fn(
            (_path: string) =>
                ({
                    isDirectory: () => false,
                    isFile: () => false,
                } as FileStat)
        ),
        writeFile: jest.fn().mockResolvedValue(undefined),
    };
}

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
    let fsAdapterMock: jest.Mocked<IFileSystemAdapter>;

    beforeEach(() => {
        fsAdapterMock = createMockFsAdapter();
        generator = new ArgTypesGenerator(fsAdapterMock);
        fsAdapterMock.mkdir.mockClear();
        fsAdapterMock.writeFile.mockClear();
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
                expect(fsAdapterMock.writeFile).not.toHaveBeenCalled();
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

                expect(fsAdapterMock.writeFile).toHaveBeenCalledTimes(1);
                const [writtenPath, content] = fsAdapterMock.writeFile.mock
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

                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                `
                // @storybookSection ParentSection
                export interface ParentSectionProps { size: string; }`
            );
            const cleanupChild = addSourceFile(
                "tabgroup-child/types.ts",
                `
                import type { ParentSectionProps } from "../tabgroup-parent/types";
                export interface ChildProps extends ParentSectionProps { label: string; }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("tabgroup-child/types.ts")
                );

                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                `
                // @storybookSection MySection
                export interface OwnSectionProps { color: string; }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("tabgroup-own/types.ts")
                );

                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
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
                `
                // @storybookSection AliasSection
                export type BaseConfig = { width: number; };`
            );
            const cleanupChild = addSourceFile(
                "tabgroup-alias-child/types.ts",
                `
                import type { BaseConfig } from "../tabgroup-alias-parent/types";
                export type ExtendedConfig = BaseConfig & { height: number };`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("tabgroup-alias-child/types.ts")
                );
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                expect(content).not.toContain('"tabGroup"');
            } finally {
                cleanupParent();
                cleanupChild();
            }
        });

        // ---------------------------------------------------------------------
        // HTML attribute inheritance rows
        // ---------------------------------------------------------------------

        it("emits a __inheritedHtmlProps row when an interface extends an HTML attributes type", async () => {
            const cleanup = addSourceFile(
                "html-attrs/types.ts",
                `
                import type { HTMLAttributes } from "react";
                export interface DivProps extends HTMLAttributes<HTMLDivElement> {
                    label: string;
                }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("html-attrs/types.ts")
                );
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                const keys = Object.keys(parsed);

                expect(keys).toContain("DivProps.__inheritedHtmlProps");
                const row = parsed["DivProps.__inheritedHtmlProps"] as {
                    description: string;
                };
                expect(row.description).toContain("HTMLDivElement");
            } finally {
                cleanup();
            }
        });

        it("lists all element types in the __inheritedHtmlProps description when multiple HTML attributes are extended", async () => {
            const cleanup = addSourceFile(
                "html-attrs-multi/types.ts",
                `
                import type { HTMLAttributes, InputHTMLAttributes } from "react";
                export interface MultiHtmlProps
                    extends HTMLAttributes<HTMLDivElement>,
                        InputHTMLAttributes<HTMLInputElement> {
                    label: string;
                }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("html-attrs-multi/types.ts")
                );
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);
                const row = parsed["MultiHtmlProps.__inheritedHtmlProps"] as {
                    description: string;
                };

                expect(row.description).toContain("HTMLDivElement");
                expect(row.description).toContain("HTMLInputElement");
            } finally {
                cleanup();
            }
        });

        it("does not emit a __inheritedHtmlProps row when there are no HTML attribute extends", async () => {
            const cleanup = addSourceFile(
                "no-html-attrs/types.ts",
                `export interface PlainProps { label: string; }`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("no-html-attrs/types.ts")
                );
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                expect(content).not.toContain("__inheritedHtmlProps");
            } finally {
                cleanup();
            }
        });

        // ---------------------------------------------------------------------
        // Inherited interface description (empty interface + non-HTML extends)
        // ---------------------------------------------------------------------

        it("emits a single stub row with 'Inherits props from' for an empty interface extending one non-HTML base", async () => {
            const cleanup = addSourceFile(
                "empty-extends/types.ts",
                `
                export interface BaseComp { size: string; }
                export interface EmptyExtends extends BaseComp {}`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("empty-extends/types.ts")
                );
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);

                expect(Object.keys(parsed)).toContain("EmptyExtends");
                const row = parsed["EmptyExtends"] as { description: string };
                expect(row.description).toContain(
                    "Inherits props from `BaseComp`."
                );
            } finally {
                cleanup();
            }
        });

        it("lists all non-HTML bases alphabetically in the description for an empty interface with multiple extends", async () => {
            const cleanup = addSourceFile(
                "empty-extends-multi/types.ts",
                `
                export interface ZBase { size: string; }
                export interface ABase { color: string; }
                export interface EmptyMultiExtends extends ZBase, ABase {}`
            );
            try {
                await generator.generateForSourceFile(
                    testPath("empty-extends-multi/types.ts")
                );
                const [, content] = fsAdapterMock.writeFile.mock.calls[0] as [
                    string,
                    string
                ];
                const parsed = parseGeneratedArgTypes(content);

                expect(Object.keys(parsed)).toContain("EmptyMultiExtends");
                const row = parsed["EmptyMultiExtends"] as {
                    description: string;
                };
                // Alphabetically sorted: ABase before ZBase
                expect(row.description).toContain(
                    "Inherits props from `ABase`, `ZBase`."
                );
            } finally {
                cleanup();
            }
        });

        // ---------------------------------------------------------------------
        // Imported type key-prefix behaviour (the needsKeyPrefix branch)
        // The imported type must appear as a *property type* (not in extends)
        // so that shouldSkipImportedTypeRows does not suppress it.
        // ---------------------------------------------------------------------

        describe("imported type key prefixing across multiple @storybookSection groups", () => {
            it("does not prefix keys when the imported type belongs to a single tab group", async () => {
                const cleanupShared = addSourceFile(
                    "keyprefix-shared/types.ts",
                    `export interface SharedProps { size: string; }`
                );
                const cleanupLocal = addSourceFile(
                    "keyprefix-single/types.ts",
                    `
                    import type { SharedProps } from "../keyprefix-shared/types";
                    // @storybookSection Tab1
                    export interface SingleTabProps {
                        config: SharedProps;
                        color: string;
                    }`
                );
                try {
                    await generator.generateForSourceFile(
                        testPath("keyprefix-single/types.ts")
                    );
                    const [, content] = fsAdapterMock.writeFile.mock
                        .calls[0] as [string, string];
                    const parsed = parseGeneratedArgTypes(content);
                    const keys = Object.keys(parsed);

                    // SharedProps rows appear without any key prefix
                    expect(keys).toContain("SharedProps.size");
                    expect(keys.some((k) => k.startsWith("Tab1__"))).toBe(
                        false
                    );
                } finally {
                    cleanupShared();
                    cleanupLocal();
                }
            });

            it("prefixes keys with each tab group name when the same imported type is referenced in multiple @storybookSection groups", async () => {
                const cleanupShared = addSourceFile(
                    "keyprefix-multi-shared/types.ts",
                    `export interface MultiSharedProps { size: string; }`
                );
                const cleanupLocal = addSourceFile(
                    "keyprefix-multi/types.ts",
                    `
                    import type { MultiSharedProps } from "../keyprefix-multi-shared/types";

                    // @storybookSection Tab1
                    export interface Tab1Props {
                        config: MultiSharedProps;
                        color: string;
                    }

                    // @storybookSection Tab2
                    export interface Tab2Props {
                        data: MultiSharedProps;
                        weight: number;
                    }`
                );
                try {
                    await generator.generateForSourceFile(
                        testPath("keyprefix-multi/types.ts")
                    );
                    const [, content] = fsAdapterMock.writeFile.mock
                        .calls[0] as [string, string];
                    const parsed = parseGeneratedArgTypes(content);
                    const keys = Object.keys(parsed);

                    // Rows appear once per tab group, each prefixed
                    expect(keys).toContain("Tab1__MultiSharedProps.size");
                    expect(keys).toContain("Tab2__MultiSharedProps.size");
                    // No un-prefixed variant
                    expect(keys).not.toContain("MultiSharedProps.size");
                } finally {
                    cleanupShared();
                    cleanupLocal();
                }
            });

            it("emits un-prefixed rows for the undefined slot even when other named groups exist", async () => {
                const cleanupShared = addSourceFile(
                    "keyprefix-mixed-shared/types.ts",
                    `export interface MixedSharedProps { size: string; }`
                );
                const cleanupLocal = addSourceFile(
                    "keyprefix-mixed/types.ts",
                    `
                    import type { MixedSharedProps } from "../keyprefix-mixed-shared/types";

                    // no section tag — adds undefined slot to the set
                    export interface NoSectionProps {
                        config: MixedSharedProps;
                        color: string;
                    }

                    // @storybookSection Tab1
                    export interface WithSectionProps {
                        data: MixedSharedProps;
                        weight: number;
                    }`
                );
                try {
                    await generator.generateForSourceFile(
                        testPath("keyprefix-mixed/types.ts")
                    );
                    const [, content] = fsAdapterMock.writeFile.mock
                        .calls[0] as [string, string];
                    const parsed = parseGeneratedArgTypes(content);
                    const keys = Object.keys(parsed);

                    // undefined slot → rows without any prefix
                    expect(keys).toContain("MixedSharedProps.size");
                    // named slot → rows with prefix
                    expect(keys).toContain("Tab1__MixedSharedProps.size");
                } finally {
                    cleanupShared();
                    cleanupLocal();
                }
            });
        });
    });

    // -------------------------------------------------------------------------
    // generateStorybookArgTypesRegistry
    // -------------------------------------------------------------------------

    describe("generateStorybookArgTypesRegistry", () => {
        it("writes the generated registry content to STORYBOOK_ARGTYPES_FILE", async () => {
            jest.spyOn(
                StoryRegistryGenerator.prototype,
                "generateRegistryFileContent"
            ).mockReturnValue("// generated registry");

            await generator.generateStorybookArgTypesRegistry();

            expect(fsAdapterMock.mkdir).toHaveBeenCalledWith(
                nodePath.dirname(STORYBOOK_ARGTYPES_FILE),
                { recursive: true }
            );
            expect(fsAdapterMock.writeFile).toHaveBeenCalledWith(
                STORYBOOK_ARGTYPES_FILE,
                "// generated registry"
            );

            jest.restoreAllMocks();
        });

        it("the types-file filter returns true for a normal source file", async () => {
            let capturedFilter: ((path: string) => boolean) | undefined;
            jest.spyOn(
                StoryRegistryGenerator.prototype,
                "generateRegistryFileContent"
            ).mockImplementation((_files, filter) => {
                capturedFilter = filter;
                return "";
            });

            await generator.generateStorybookArgTypesRegistry();

            const cleanup = addSourceFile(
                "registry-normal/types.ts",
                `export interface NormalProps { label: string; }`
            );
            try {
                expect(
                    capturedFilter!(testPath("registry-normal/types.ts"))
                ).toBe(true);
            } finally {
                cleanup();
                jest.restoreAllMocks();
            }
        });

        it("the types-file filter returns false for a file marked @storybookSkipFile", async () => {
            let capturedFilter: ((path: string) => boolean) | undefined;
            jest.spyOn(
                StoryRegistryGenerator.prototype,
                "generateRegistryFileContent"
            ).mockImplementation((_files, filter) => {
                capturedFilter = filter;
                return "";
            });

            await generator.generateStorybookArgTypesRegistry();

            const cleanup = addSourceFile(
                "registry-skipped/types.ts",
                `// @storybookSkipFile\nexport interface SkippedProps { label: string; }`
            );
            try {
                expect(
                    capturedFilter!(testPath("registry-skipped/types.ts"))
                ).toBe(false);
            } finally {
                cleanup();
                jest.restoreAllMocks();
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
        it("delegates to GeneratedFileFormatter with the storybook output pattern", () => {
            const { GeneratedFileFormatter } = jest.requireActual(
                "tools/shared/generated-file-formatter"
            );
            const formatSpy = jest
                .spyOn(GeneratedFileFormatter.prototype, "format")
                .mockImplementation(() => undefined);

            generator.formatGenerated();

            expect(formatSpy).toHaveBeenCalledWith(".storybook/generated/**/*");
            formatSpy.mockRestore();
        });
    });
});
