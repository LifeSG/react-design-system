import { TypeDependencyResolver } from "tools/storybook-argtypes/services/type-dependency-resolver";
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

describe("TypeDependencyResolver", () => {
    let resolver: TypeDependencyResolver;
    let project: Project;

    beforeEach(() => {
        resolver = new TypeDependencyResolver();
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

            const names = resolver.getLocalTypeNames(sf);
            expect(names.has("ButtonProps")).toBe(true);
            expect(names.has("Variant")).toBe(true);
        });

        it("returns cached result on second call without re-analysing", () => {
            const sf = project.createSourceFile(
                "cached.ts",
                `export interface CachedType {}`,
                { overwrite: true }
            );

            const first = resolver.getLocalTypeNames(sf);
            const second = resolver.getLocalTypeNames(sf);
            expect(first).toBe(second); // same Set reference
        });
    });

    describe("getPropertyDeclaration", () => {
        it("returns the first property-signature declaration", () => {
            const sf = project.createSourceFile(
                "symbol.ts",
                `export interface Props { color: string; }`,
                { overwrite: true }
            );
            const symbol = sf
                .getInterfaceOrThrow("Props")
                .getPropertyOrThrow("color")
                .getSymbolOrThrow();

            expect(resolver.getPropertyDeclaration(symbol)?.getName()).toBe(
                "color"
            );
        });

        it("returns undefined when the symbol has no declarations", () => {
            // Construct a minimal mock Symbol with no declarations
            const fakeSymbol = {
                getDeclarations: () => [],
            } as unknown as Parameters<
                TypeDependencyResolver["getPropertyDeclaration"]
            >[0];

            expect(
                resolver.getPropertyDeclaration(fakeSymbol)
            ).toBeUndefined();
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
                TypeDependencyResolver["isExternalDeclaration"]
            >[0];

            expect(resolver.isExternalDeclaration(fakeSymbol)).toBe(true);
        });

        it("returns true for a symbol from custom-types/", () => {
            const fakeSymbol = {
                getDeclarations: () => [
                    {
                        getSourceFile: () => ({
                            getFilePath: () => "/project/custom-types/svg.d.ts",
                        }),
                    },
                ],
            } as unknown as Parameters<
                TypeDependencyResolver["isExternalDeclaration"]
            >[0];

            expect(resolver.isExternalDeclaration(fakeSymbol)).toBe(true);
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

            expect(resolver.isExternalDeclaration(symbol)).toBe(false);
        });

        it("returns true when the symbol has no declarations", () => {
            const fakeSymbol = {
                getDeclarations: () => [],
            } as unknown as Parameters<
                TypeDependencyResolver["isExternalDeclaration"]
            >[0];

            expect(resolver.isExternalDeclaration(fakeSymbol)).toBe(true);
        });
    });

    describe("getResolvedProperties", () => {
        it("returns sorted non-external properties from an interface", () => {
            project.createSourceFile(
                "/project/node_modules/pkg/index.d.ts",
                `export interface ExternalProps { ext: string }`,
                { overwrite: true }
            );
            const sf = project.createSourceFile(
                "props.ts",
                `
                import type { ExternalProps } from "pkg";

                export interface LocalProps extends ExternalProps {
                    zed: number;
                    alpha: string;
                }
                `,
                { overwrite: true }
            );

            const declaration = sf.getInterfaceOrThrow("LocalProps");
            const props = resolver.getResolvedProperties(declaration);
            const names = props.map((symbol) => symbol.getName());

            expect(names).toEqual(["alpha", "zed"]);
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

            const resolved = resolver.resolveImportedTypeSourceFile(
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
                resolver.resolveImportedTypeSourceFile(sf, "NotImported")
            ).toBeUndefined();
        });

        it("returns undefined for a file with no imports", () => {
            const sf = project.createSourceFile(
                "noimports.ts",
                `export type Local = string;`,
                { overwrite: true }
            );

            expect(
                resolver.resolveImportedTypeSourceFile(sf, "Local")
            ).toBeUndefined();
        });

        it("returns undefined when the named import exists but the module is not in the project", () => {
            // The named import IS found, but the module specifier can't be resolved
            // (external package not in the in-memory project), so both the
            // declaration path and the moduleSpecifierSourceFile path are null.
            const sf = project.createSourceFile(
                "extern-import.ts",
                `import { SomeExternalType } from "external-package";`,
                { overwrite: true }
            );

            expect(
                resolver.resolveImportedTypeSourceFile(
                    sf,
                    "SomeExternalType"
                )
            ).toBeUndefined();
        });

        it("falls back to module specifier source file when import has no type declaration", () => {
            // The imported name is a value export (not Interface/TypeAlias),
            // so aliased-symbol resolution finds no matching declaration.
            // The fallback returns the module's source file itself.
            project.createSourceFile(
                "value-module.ts",
                `export const someValue = 42;`,
                { overwrite: true }
            );
            const importer = project.createSourceFile(
                "value-importer.ts",
                `import { someValue } from "./value-module";`,
                { overwrite: true }
            );

            const resolved = resolver.resolveImportedTypeSourceFile(
                importer,
                "someValue"
            );
            expect(resolved?.getFilePath()).toContain("value-module.ts");
        });
    });

    describe("getOrCreateWrappedTypeNames", () => {
        it("stores factory result and returns the same map on repeated calls", () => {
            const sf = project.createSourceFile(
                "wrapped.ts",
                `export interface Wrapped {}`,
                { overwrite: true }
            );
            const firstMap = new Map<string, Set<string | undefined>>([
                ["Wrapped", new Set([undefined])],
            ]);
            const secondMap = new Map<string, Set<string | undefined>>([
                ["Other", new Set(["Tab"])]
            ]);

            const first = resolver.getOrCreateWrappedTypeNames(
                sf,
                () => firstMap
            );
            const second = resolver.getOrCreateWrappedTypeNames(
                sf,
                () => secondMap
            );

            expect(first).toBe(firstMap);
            expect(second).toBe(firstMap);
        });
    });

    describe("clear", () => {
        it("invalidates the local type names cache", () => {
            const sf = project.createSourceFile(
                "clearest.ts",
                `export interface ClearType {}`,
                { overwrite: true }
            );

            const before = resolver.getLocalTypeNames(sf);
            resolver.clear();
            const after = resolver.getLocalTypeNames(sf);

            expect(before).not.toBe(after);
        });

        it("invalidates wrapped type names cache", () => {
            const sf = project.createSourceFile(
                "clearwrapped.ts",
                `export interface Wrapped {}`,
                { overwrite: true }
            );

            const before = resolver.getOrCreateWrappedTypeNames(
                sf,
                () => new Map([["Wrapped", new Set([undefined])]])
            );

            resolver.clear();

            const after = resolver.getOrCreateWrappedTypeNames(
                sf,
                () => new Map([["Wrapped", new Set(["A"])]] )
            );

            expect(before).not.toBe(after);
        });
    });
});
