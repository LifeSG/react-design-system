import { TypeDependencyCache } from "tools/storybook-argtypes/services/type-dependency-cache";
import { Project, ScriptTarget } from "ts-morph";

function createProject(): Project {
    return new Project({
        useInMemoryFileSystem: true,
        compilerOptions: {
            strict: true,
            target: ScriptTarget.ES2020,
        },
    });
}

describe("TypeDependencyCache", () => {
    let cache: TypeDependencyCache;
    let project: Project;

    beforeEach(() => {
        cache = new TypeDependencyCache();
        project = createProject();
    });

    describe("getLocalTypeNames", () => {
        it("returns exported type and interface names from a source file", () => {
            const sf = project.createSourceFile(
                "local.ts",
                `
                export interface ButtonProps {}
                export type Variant = "primary" | "secondary";
                const localConst = 1;
                `,
                { overwrite: true }
            );

            const names = cache.getLocalTypeNames(sf);
            expect(names.has("ButtonProps")).toBe(true);
            expect(names.has("Variant")).toBe(true);
        });

        it("returns cached result on second call without re-analysing", () => {
            const sf = project.createSourceFile(
                "cached.ts",
                `export interface CachedType {}`,
                { overwrite: true }
            );

            const first = cache.getLocalTypeNames(sf);
            const second = cache.getLocalTypeNames(sf);
            expect(first).toBe(second); // same Set reference
        });
    });

    describe("getPropertyDeclaration", () => {
        it("returns the name of the symbol's first declaration", () => {
            const sf = project.createSourceFile(
                "symbol.ts",
                `export interface Props { color: string; }`,
                { overwrite: true }
            );
            const symbol = sf
                .getInterfaceOrThrow("Props")
                .getPropertyOrThrow("color")
                .getSymbolOrThrow();

            expect(cache.getPropertyDeclaration(symbol)).toBe("color");
        });

        it("returns undefined when the symbol has no declarations", () => {
            // Construct a minimal mock Symbol with no declarations
            const fakeSymbol = {
                getDeclarations: () => [],
            } as unknown as Parameters<
                TypeDependencyCache["getPropertyDeclaration"]
            >[0];

            expect(cache.getPropertyDeclaration(fakeSymbol)).toBeUndefined();
        });

        it("returns undefined when the declaration has no getName method", () => {
            const fakeSymbol = {
                getDeclarations: () => [
                    {
                        /* no getName */
                    },
                ],
            } as unknown as Parameters<
                TypeDependencyCache["getPropertyDeclaration"]
            >[0];

            expect(cache.getPropertyDeclaration(fakeSymbol)).toBeUndefined();
        });
    });

    describe("findReferencedTypeNames", () => {
        it("collects named imports from import declarations", () => {
            const sf = project.createSourceFile(
                "refs.ts",
                `
                import { ButtonProps, Variant } from "./button";
                import type { CardProps } from "./card";
                `,
                { overwrite: true }
            );

            const names = cache.findReferencedTypeNames(sf);
            expect(names.has("ButtonProps")).toBe(true);
            expect(names.has("Variant")).toBe(true);
            expect(names.has("CardProps")).toBe(true);
        });

        it("collects the default import name", () => {
            const sf = project.createSourceFile(
                "defaultimport.ts",
                `import React from "react";`,
                { overwrite: true }
            );

            const names = cache.findReferencedTypeNames(sf);
            expect(names.has("React")).toBe(true);
        });

        it("returns an empty set for a file with no imports", () => {
            const sf = project.createSourceFile(
                "empty.ts",
                `export type Foo = string;`,
                { overwrite: true }
            );
            expect(cache.findReferencedTypeNames(sf).size).toBe(0);
        });
    });

    describe("getWrappedTypeNames", () => {
        it("builds a name map from named imports", () => {
            const sf = project.createSourceFile(
                "wrapped.ts",
                `import { ButtonProps, Variant as ButtonVariant } from "./button";`,
                { overwrite: true }
            );

            const names = cache.getWrappedTypeNames(sf);
            // Direct name mapping
            expect(names.has("ButtonProps")).toBe(true);
            // Aliased import: ButtonVariant maps to ButtonVariant
            expect(names.has("Variant")).toBe(true);
        });

        it("returns cached result on second call", () => {
            const sf = project.createSourceFile(
                "wrapped2.ts",
                `import { Foo } from "./foo";`,
                { overwrite: true }
            );

            const first = cache.getWrappedTypeNames(sf);
            const second = cache.getWrappedTypeNames(sf);
            expect(first).toBe(second);
        });
    });

    describe("isExternalDeclaration", () => {
        it("returns true for a symbol from node_modules", () => {
            // Simulate a node_modules symbol by constructing a fake symbol
            const fakeSymbol = {
                getDeclarations: () => [
                    {
                        getSourceFile: () => ({
                            getFilePath: () =>
                                "/project/node_modules/react/index.d.ts",
                        }),
                    },
                ],
            } as unknown as Parameters<
                TypeDependencyCache["isExternalDeclaration"]
            >[0];

            expect(cache.isExternalDeclaration(fakeSymbol)).toBe(true);
        });

        it("returns false for a symbol from local source", () => {
            const sf = project.createSourceFile(
                "localcheck.ts",
                `export interface LocalType {}`,
                { overwrite: true }
            );
            const symbol = sf
                .getInterfaceOrThrow("LocalType")
                .getSymbolOrThrow();

            expect(cache.isExternalDeclaration(symbol)).toBe(false);
        });

        it("returns true when the symbol has no declarations", () => {
            const fakeSymbol = {
                getDeclarations: () => [],
            } as unknown as Parameters<
                TypeDependencyCache["isExternalDeclaration"]
            >[0];

            expect(cache.isExternalDeclaration(fakeSymbol)).toBe(true);
        });
    });

    describe("getResolvedProperties", () => {
        it("returns an empty array when the symbol has no value declaration", () => {
            const fakeSymbol = {
                getValueDeclaration: () => undefined,
                getMembers: () => [],
            } as unknown as Parameters<
                TypeDependencyCache["getResolvedProperties"]
            >[0];

            expect(cache.getResolvedProperties(fakeSymbol)).toEqual([]);
        });
    });

    describe("clear", () => {
        it("invalidates the local type names cache", () => {
            const sf = project.createSourceFile(
                "clearest.ts",
                `export interface ClearType {}`,
                { overwrite: true }
            );

            const before = cache.getLocalTypeNames(sf);
            cache.clear();
            const after = cache.getLocalTypeNames(sf);

            // After clearing, a new Set is created (different reference)
            expect(before).not.toBe(after);
        });

        it("invalidates the wrapped type names cache", () => {
            const sf = project.createSourceFile(
                "clearwrapped.ts",
                `import { Foo } from "./foo";`,
                { overwrite: true }
            );

            const before = cache.getWrappedTypeNames(sf);
            cache.clear();
            const after = cache.getWrappedTypeNames(sf);

            expect(before).not.toBe(after);
        });
    });

    describe("resolveImportedTypeSourceFile", () => {
        it("returns the source file where an imported type is defined", () => {
            project.createSourceFile(
                "target-type.ts",
                `export interface TargetType {}`,
                { overwrite: true }
            );
            const importer = project.createSourceFile(
                "importer.ts",
                `import { TargetType } from "./target-type";`,
                { overwrite: true }
            );

            const resolved = cache.resolveImportedTypeSourceFile(
                importer,
                "TargetType"
            );
            expect(resolved?.getFilePath()).toContain("target-type.ts");
        });

        it("returns undefined when the imported type name is not found", () => {
            const sf = project.createSourceFile(
                "nomatch.ts",
                `import { SomethingElse } from "./other";`,
                { overwrite: true }
            );

            expect(
                cache.resolveImportedTypeSourceFile(sf, "NotImported")
            ).toBeUndefined();
        });

        it("returns undefined for a file with no imports", () => {
            const sf = project.createSourceFile(
                "noimports.ts",
                `export type Local = string;`,
                { overwrite: true }
            );

            expect(
                cache.resolveImportedTypeSourceFile(sf, "Local")
            ).toBeUndefined();
        });
    });
});
