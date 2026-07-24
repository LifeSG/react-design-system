import { TypeScriptSourceAnalyzer } from "tools/storybook-argtypes/services/typescript-source-analyzer";
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

describe("TypeScriptSourceAnalyzer", () => {
    let analyzer: TypeScriptSourceAnalyzer;
    let project: Project;

    beforeEach(() => {
        project = createProject();
        analyzer = new TypeScriptSourceAnalyzer();
        // Bypass the real TsMorphProjectFactory singleton for test isolation
        jest.spyOn(analyzer, "getProject").mockReturnValue(project);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe("getSourceFile", () => {
        it("returns a source file already present in the project", () => {
            project.createSourceFile(
                "src/types.ts",
                `export type Foo = string;`
            );

            const sf = analyzer.getSourceFile("src/types.ts");
            expect(sf.getFilePath()).toContain("src/types.ts");
        });

        it("throws a descriptive error when the file does not exist", () => {
            expect(() => analyzer.getSourceFile("does-not-exist.ts")).toThrow(
                "Could not find source file: does-not-exist.ts"
            );
        });
    });

    describe("isSkippedFile", () => {
        it("returns false for a normal source file with no special comments", () => {
            const sf = project.createSourceFile(
                "normal.ts",
                `export type Foo = string;`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(false);
        });

        it("returns false for a file with a standard JSDoc comment", () => {
            const sf = project.createSourceFile(
                "jsdoc.ts",
                `/** Standard JSDoc */\nexport type Foo = string;`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(false);
        });

        it("returns false for a file with a line comment that has no skip marker", () => {
            const sf = project.createSourceFile(
                "linecomment.ts",
                `// Just a regular comment\nexport type Foo = string;`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(false);
        });

        it("returns true for a file with a // @storybookSkipFile line comment", () => {
            const sf = project.createSourceFile(
                "skipped.ts",
                `// @storybookSkipFile\nexport type Foo = string;`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(true);
        });

        it("returns true when @storybookSkipFile appears after other text on the line", () => {
            const sf = project.createSourceFile(
                "skippedmid.ts",
                `// Generated file @storybookSkipFile\nexport type Foo = string;`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(true);
        });

        it("returns false for a block comment containing @storybookSkipFile (only line comments count)", () => {
            const sf = project.createSourceFile(
                "blockskip.ts",
                `/* @storybookSkipFile */\nexport type Foo = string;`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(false);
        });

        it("returns false when @storybookSkipFile appears after the first statement", () => {
            const sf = project.createSourceFile(
                "afterstatement.ts",
                `export type Foo = string; // @storybookSkipFile`
            );
            expect(analyzer.isSkippedFile(sf)).toBe(false);
        });

        it("returns false for an empty file (no statements)", () => {
            const sf = project.createSourceFile("emptyfile.ts", ``);
            expect(analyzer.isSkippedFile(sf)).toBe(false);
        });
    });

    describe("getProject", () => {
        it("returns a Project instance from TsMorphProjectFactory (unmocked)", () => {
            const freshAnalyzer = new TypeScriptSourceAnalyzer();
            // Calling getProject() on a fresh analyzer hits the real factory.
            // We just verify it returns an object with the Project API shape.
            const proj = freshAnalyzer.getProject();
            expect(typeof proj.getSourceFiles).toBe("function");
        });
    });
});
