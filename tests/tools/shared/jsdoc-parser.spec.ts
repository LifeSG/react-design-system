import { JsDocParser } from "tools/shared/jsdoc-parser";
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

describe("JsDocParser", () => {
    const parser = new JsDocParser();

    describe("getTagCommentText", () => {
        it("returns a trimmed tag comment", () => {
            const tag = { getCommentText: () => "  abc  " };
            expect(parser.getTagCommentText(tag)).toBe("abc");
        });

        it("returns undefined for missing comment text", () => {
            const tag = { getCommentText: () => undefined };
            expect(parser.getTagCommentText(tag)).toBeUndefined();
        });
    });

    describe("splitCommaSeparatedValues", () => {
        it("splits and trims values", () => {
            expect(parser.splitCommaSeparatedValues("a, b, c")).toEqual([
                "a",
                "b",
                "c",
            ]);
        });

        it("returns empty array when value is undefined", () => {
            expect(parser.splitCommaSeparatedValues(undefined)).toEqual([]);
        });
    });

    describe("normalizeCommentText", () => {
        it("normalizes newlines to spaces when requested", () => {
            expect(
                parser.normalizeCommentText("line1\nline2", {
                    normalizeNewlinesToSpaces: true,
                })
            ).toBe("line1 line2");
        });
    });

    describe("getDescriptionFromNode", () => {
        it("joins JSDoc descriptions with double newlines by default", () => {
            const project = createProject();
            project.createSourceFile(
                "desc.ts",
                `
                /** first */
                /** second */
                interface MultiDoc {}
                `,
                { overwrite: true }
            );

            const iface = project
                .getSourceFileOrThrow("desc.ts")
                .getInterfaceOrThrow("MultiDoc");

            expect(parser.getDescriptionFromNode(iface)).toBe(
                "first\n\nsecond"
            );
        });
    });

    describe("leading comments", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "leading.ts",
                `
                // @marker one, two
                interface MarkerIface {}

                // plain comment
                interface PlainIface {}

                /** jsdoc */
                interface JsDocIface {}
                `,
                { overwrite: true }
            );
        });

        function getIface(name: string) {
            return project
                .getSourceFileOrThrow("leading.ts")
                .getInterfaceOrThrow(name);
        }

        it("returns only non-jsdoc leading comments", () => {
            expect(
                parser.getLeadingNonJsDocComments(getIface("JsDocIface"))
            ).toEqual([]);
            expect(
                parser.getLeadingNonJsDocComments(getIface("PlainIface"))
            ).toEqual(["plain comment"]);
        });

        it("extracts marker values from leading comments", () => {
            expect(
                parser.getMarkerValuesFromLeadingComments(
                    getIface("MarkerIface"),
                    "@marker"
                )
            ).toEqual(["one", "two"]);
        });
    });
});
