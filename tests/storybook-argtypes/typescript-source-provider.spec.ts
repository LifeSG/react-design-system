import { TypeScriptSourceProvider } from "tools/storybook-argtypes/services/typescript-source-provider";
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

describe("TypeScriptSourceProvider", () => {
    let provider: TypeScriptSourceProvider;
    let project: Project;

    beforeEach(() => {
        project = createProject();
        provider = new TypeScriptSourceProvider();
        // Bypass the real TsMorphProjectFactory singleton for test isolation
        jest.spyOn(provider, "getProject").mockReturnValue(project);
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

            const sf = provider.getSourceFile("src/types.ts");
            expect(sf.getFilePath()).toContain("src/types.ts");
        });

        it("throws a descriptive error when the file does not exist", () => {
            expect(() => provider.getSourceFile("does-not-exist.ts")).toThrow(
                "Could not find source file: does-not-exist.ts"
            );
        });
    });

    describe("getProject", () => {
        it("returns a Project instance from TsMorphProjectFactory (unmocked)", () => {
            const freshProvider = new TypeScriptSourceProvider();
            // Calling getProject() on a fresh provider hits the real factory.
            // We just verify it returns an object with the Project API shape.
            const proj = freshProvider.getProject();
            expect(typeof proj.getSourceFiles).toBe("function");
        });
    });
});
