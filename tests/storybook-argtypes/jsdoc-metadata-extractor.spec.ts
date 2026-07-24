import { JsDocMetadataExtractor } from "tools/storybook-argtypes/services/jsdoc-metadata-extractor";
import type { JsDocMeta } from "tools/storybook-argtypes/types/arg-types-types";
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

describe("JsDocMetadataExtractor", () => {
    let extractor: JsDocMetadataExtractor;

    beforeEach(() => {
        extractor = new JsDocMetadataExtractor();
    });

    // ─── pure methods (no ts-morph) ───────────────────────────────────────────

    describe("getTagCommentText", () => {
        it("returns the trimmed string comment", () => {
            const tag = { getCommentText: () => "  Use newProp  " };
            expect(extractor.getTagCommentText(tag)).toBe("Use newProp");
        });

        it("returns undefined when getCommentText returns undefined", () => {
            const tag = { getCommentText: () => undefined };
            expect(extractor.getTagCommentText(tag)).toBeUndefined();
        });

        it("returns undefined when getCommentText returns a non-string value", () => {
            // getCommentText can return WrappedNode[] in some ts-morph versions
            const tag = {
                getCommentText: () => undefined as unknown as string,
            };
            expect(extractor.getTagCommentText(tag)).toBeUndefined();
        });
    });

    describe("mergeJsDocMeta", () => {
        it("merges descriptions, deduplicating identical values", () => {
            const metas: JsDocMeta[] = [
                { description: "Same description" },
                { description: "Same description" },
                { description: "Different description" },
            ];
            const merged = extractor.mergeJsDocMeta(metas);
            expect(merged.description).toBe(
                "Same description\n\nDifferent description"
            );
        });

        it("takes the first deprecated value found", () => {
            const metas: JsDocMeta[] = [
                { deprecated: "Use newProp" },
                { deprecated: true },
            ];
            expect(extractor.mergeJsDocMeta(metas).deprecated).toBe(
                "Use newProp"
            );
        });

        it("takes the first defaultValue found", () => {
            const metas: JsDocMeta[] = [
                { defaultValue: "primary" },
                { defaultValue: "secondary" },
            ];
            expect(extractor.mergeJsDocMeta(metas).defaultValue).toBe(
                "primary"
            );
        });

        it("deduplicates remarks", () => {
            const metas: JsDocMeta[] = [
                { remarks: "Note A" },
                { remarks: "Note A" },
            ];
            expect(extractor.mergeJsDocMeta(metas).remarks).toBe("Note A");
        });

        it("deduplicates examples", () => {
            const metas: JsDocMeta[] = [
                { examples: ["ex1", "ex2"] },
                { examples: ["ex2", "ex3"] },
            ];
            const merged = extractor.mergeJsDocMeta(metas);
            expect(merged.examples).toEqual(["ex1", "ex2", "ex3"]);
        });

        it("returns empty meta when all inputs are empty", () => {
            const merged = extractor.mergeJsDocMeta([{}, {}]);
            expect(merged.description).toBeUndefined();
            expect(merged.deprecated).toBeUndefined();
            expect(merged.defaultValue).toBeUndefined();
            expect(merged.remarks).toBeUndefined();
            expect(merged.examples).toBeUndefined();
        });
    });

    describe("toStorybookDescription", () => {
        it("returns undefined for empty meta", () => {
            expect(extractor.toStorybookDescription({})).toBeUndefined();
        });

        it("returns description only when that is the only field", () => {
            const result = extractor.toStorybookDescription({
                description: "My description",
            });
            expect(result).toBe("My description");
        });

        it("formats deprecated true as a generic message", () => {
            const result = extractor.toStorybookDescription({
                deprecated: true,
            });
            expect(result).toContain("==Deprecated:");
            expect(result).toContain("This API is deprecated.");
            expect(result).toContain("==");
        });

        it("formats deprecated string with the provided message", () => {
            const result = extractor.toStorybookDescription({
                deprecated: "Use newProp instead",
            });
            expect(result).toContain("==Deprecated:\nUse newProp instead==");
        });

        it("formats remarks with a Remarks: prefix", () => {
            const result = extractor.toStorybookDescription({
                remarks: "Important note",
            });
            expect(result).toBe("Remarks:\nImportant note");
        });

        it("formats examples with an Example: prefix per item", () => {
            const result = extractor.toStorybookDescription({
                examples: ["First example", "Second example"],
            });
            expect(result).toContain("Example:\nFirst example");
            expect(result).toContain("Example:\nSecond example");
        });

        it("joins all fields with double newlines", () => {
            const result = extractor.toStorybookDescription({
                description: "Desc",
                deprecated: true,
                remarks: "Note",
            });
            const parts = result!.split("\n\n");
            expect(parts).toHaveLength(3);
            expect(parts[0]).toBe("Desc");
        });
    });

    // ─── ts-morph-dependent methods ───────────────────────────────────────────

    describe("getLeadingNonJsDocComments", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "leading.ts",
                `
// A plain line comment
interface LineCommentedIface {}

/* A block comment */
interface BlockCommentedIface {}

/** A JSDoc comment */
interface JsDocIface {}

interface NoCommentIface {}
                `,
                { overwrite: true }
            );
        });

        function getIface(name: string) {
            return project
                .getSourceFileOrThrow("leading.ts")
                .getInterfaceOrThrow(name);
        }

        it("returns the text of line comments (without // prefix)", () => {
            const comments = extractor.getLeadingNonJsDocComments(
                getIface("LineCommentedIface")
            );
            expect(comments).toEqual(["A plain line comment"]);
        });

        it("returns the text of block comments (without /* */ delimiters)", () => {
            const comments = extractor.getLeadingNonJsDocComments(
                getIface("BlockCommentedIface")
            );
            expect(comments.length).toBeGreaterThanOrEqual(1);
            expect(comments.some((c) => c.includes("block comment"))).toBe(
                true
            );
        });

        it("excludes JSDoc comments (/** */)", () => {
            const comments = extractor.getLeadingNonJsDocComments(
                getIface("JsDocIface")
            );
            expect(comments).toEqual([]);
        });

        it("returns empty array when no comments exist", () => {
            const comments = extractor.getLeadingNonJsDocComments(
                getIface("NoCommentIface")
            );
            expect(comments).toEqual([]);
        });
    });

    describe("getStorybookSectionsFromLeadingComment", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "sections.ts",
                `
// @storybookSection Tab1, Tab2
interface MultiSectionIface {}

// @storybookSection OnlyOne
interface SingleSectionIface {}

// @storybookSection
interface EmptySectionIface {}

interface NoSectionIface {}
                `,
                { overwrite: true }
            );
        });

        function getIface(name: string) {
            return project
                .getSourceFileOrThrow("sections.ts")
                .getInterfaceOrThrow(name);
        }

        it("splits a comma-separated @storybookSection into trimmed parts", () => {
            const sections = extractor.getStorybookSectionsFromLeadingComment(
                getIface("MultiSectionIface")
            );
            expect(sections).toEqual(["Tab1", "Tab2"]);
        });

        it("returns a single-element array for a single section", () => {
            const sections = extractor.getStorybookSectionsFromLeadingComment(
                getIface("SingleSectionIface")
            );
            expect(sections).toEqual(["OnlyOne"]);
        });

        it("returns empty array when @storybookSection marker has no value", () => {
            const sections = extractor.getStorybookSectionsFromLeadingComment(
                getIface("EmptySectionIface")
            );
            expect(sections).toEqual([]);
        });

        it("returns empty array when no @storybookSection marker exists", () => {
            const sections = extractor.getStorybookSectionsFromLeadingComment(
                getIface("NoSectionIface")
            );
            expect(sections).toEqual([]);
        });
    });

    describe("hasSkipTag", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "skip.ts",
                `
// @storybookSkipProps
interface SkippedIface {}

// storybookSkipProps
interface AlsoSkippedIface {}

// @storybookSomethingElse
interface NotSkippedIface {}

interface NoCommentIface {}
                `,
                { overwrite: true }
            );
        });

        function getIface(name: string) {
            return project
                .getSourceFileOrThrow("skip.ts")
                .getInterfaceOrThrow(name);
        }

        it("returns true when @storybookSkipProps is present", () => {
            expect(extractor.hasSkipTag(getIface("SkippedIface"))).toBe(true);
        });

        it("returns true when storybookSkipProps is present without @", () => {
            expect(extractor.hasSkipTag(getIface("AlsoSkippedIface"))).toBe(
                true
            );
        });

        it("returns false for an unrelated comment marker", () => {
            expect(extractor.hasSkipTag(getIface("NotSkippedIface"))).toBe(
                false
            );
        });

        it("returns false when there are no comments", () => {
            expect(extractor.hasSkipTag(getIface("NoCommentIface"))).toBe(
                false
            );
        });
    });

    describe("getJsDocMeta", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "jsdoc.ts",
                `
/**
 * My component description
 * @deprecated Use NewComponent instead
 * @default "primary"
 * @remarks This is an important remark
 * @example \`<Component />\`
 */
interface FullyDocumentedIface {}

/** Only a description */
interface DescriptionOnlyIface {}

/**
 * @deprecated
 */
interface BooleanDeprecatedIface {}

interface UndocumentedIface {
    /** Prop description */
    name: string;
}

// @storybookSection Tab1, Tab2
interface SectionedIface {}
                `,
                { overwrite: true }
            );
        });

        function getIface(name: string) {
            return project
                .getSourceFileOrThrow("jsdoc.ts")
                .getInterfaceOrThrow(name);
        }

        it("extracts description from the JSDoc comment text", () => {
            const meta = extractor.getJsDocMeta(
                getIface("FullyDocumentedIface")
            );
            expect(meta.description).toBe("My component description");
        });

        it("extracts deprecated string from @deprecated tag", () => {
            const meta = extractor.getJsDocMeta(
                getIface("FullyDocumentedIface")
            );
            expect(meta.deprecated).toBe("Use NewComponent instead");
        });

        it("sets deprecated to true when @deprecated has no comment text", () => {
            const meta = extractor.getJsDocMeta(
                getIface("BooleanDeprecatedIface")
            );
            expect(meta.deprecated).toBe(true);
        });

        it("extracts defaultValue from @default tag", () => {
            const meta = extractor.getJsDocMeta(
                getIface("FullyDocumentedIface")
            );
            expect(meta.defaultValue).toBe('"primary"');
        });

        it("extracts remarks from @remarks tag", () => {
            const meta = extractor.getJsDocMeta(
                getIface("FullyDocumentedIface")
            );
            expect(meta.remarks).toBe("This is an important remark");
        });

        it("extracts examples from @example tag", () => {
            const meta = extractor.getJsDocMeta(
                getIface("FullyDocumentedIface")
            );
            expect(meta.examples).toEqual(["`<Component />`"]);
        });

        it("returns only description for a description-only JSDoc", () => {
            const meta = extractor.getJsDocMeta(
                getIface("DescriptionOnlyIface")
            );
            expect(meta.description).toBe("Only a description");
            expect(meta.deprecated).toBeUndefined();
            expect(meta.defaultValue).toBeUndefined();
            expect(meta.remarks).toBeUndefined();
            expect(meta.examples).toBeUndefined();
        });

        it("returns empty meta for an undocumented interface", () => {
            const meta = extractor.getJsDocMeta(getIface("UndocumentedIface"));
            expect(meta.description).toBeUndefined();
        });

        it("extracts tabGroups from @storybookSection for interface nodes", () => {
            const meta = extractor.getJsDocMeta(getIface("SectionedIface"));
            expect(meta.tabGroups).toEqual(["Tab1", "Tab2"]);
        });

        it("does not include tabGroups for property nodes", () => {
            const prop = project
                .getSourceFileOrThrow("jsdoc.ts")
                .getInterfaceOrThrow("UndocumentedIface")
                .getPropertyOrThrow("name");
            const meta = extractor.getJsDocMeta(prop);
            expect(meta.tabGroups).toBeUndefined();
        });
    });
});
