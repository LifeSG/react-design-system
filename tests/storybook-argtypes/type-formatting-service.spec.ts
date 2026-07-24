import { TypeFormattingService } from "tools/storybook-argtypes/services/type-formatting-service";
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

describe("TypeFormattingService", () => {
    let service: TypeFormattingService;

    beforeEach(() => {
        service = new TypeFormattingService();
    });

    // ─── pure string methods ──────────────────────────────────────────────────

    describe("cleanType", () => {
        it.each([
            ["removes trailing | undefined", "string | undefined", "string"],
            [
                "removes multiple | undefined occurrences",
                "string | undefined | number | undefined",
                "string | number",
            ],
            [
                "removes leading | prefix after stripping undefined",
                "| string | number",
                "string | number",
            ],
            [
                "collapses multiple spaces",
                "string  |  number",
                "string | number",
            ],
            [
                "strips outer balanced parentheses",
                "(string | number)",
                "string | number",
            ],
            [
                "does not strip non-wrapping parentheses",
                "(string | number) | (boolean | null)",
                "(string | number) | (boolean | null)",
            ],
            ["leaves a simple type unchanged", "string", "string"],
            ["handles undefined-only string", "undefined", "undefined"],
        ])("%s", (_label, input, expected) => {
            expect(service.cleanType(input)).toBe(expected);
        });
    });

    describe("formatUnionSummary", () => {
        it("returns the input unchanged for a single non-union type", () => {
            expect(service.formatUnionSummary("string")).toBe("string");
        });

        it("splits a simple top-level union across newlines", () => {
            expect(
                service.formatUnionSummary("string | number | boolean")
            ).toBe("string\n| number\n| boolean");
        });

        it("does not split a union inside parentheses", () => {
            expect(
                service.formatUnionSummary("(string | number) | boolean")
            ).toBe("(string | number)\n| boolean");
        });

        it("does not split a union inside angle brackets", () => {
            expect(
                service.formatUnionSummary("Array<string | number> | boolean")
            ).toBe("Array<string | number>\n| boolean");
        });

        it("does not split a union inside curly braces", () => {
            expect(
                service.formatUnionSummary("{ a: string | number } | null")
            ).toBe("{ a: string | number }\n| null");
        });

        it("does not split a union inside square brackets", () => {
            expect(
                service.formatUnionSummary("[key: string | number] | null")
            ).toBe("[key: string | number]\n| null");
        });

        it("returns single-member input unchanged", () => {
            expect(service.formatUnionSummary("React.ReactNode")).toBe(
                "React.ReactNode"
            );
        });
    });

    // ─── ts-morph-dependent methods ───────────────────────────────────────────

    describe("isSimpleLiteralUnion", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "literals.ts",
                `
                type StringUnion = "primary" | "secondary" | "danger";
                type NumberUnion = 1 | 2 | 3;
                type BooleanUnion = true | false;
                type MixedLiteral = "active" | 1 | true;
                type NonLiteral = string | number;
                type SingleString = string;
                type NullableString = "a" | "b" | undefined;
                `,
                { overwrite: true }
            );
        });

        function getType(typeName: string) {
            return project
                .getSourceFileOrThrow("literals.ts")
                .getTypeAliasOrThrow(typeName)
                .getType();
        }

        it("returns true for a string literal union", () => {
            expect(service.isSimpleLiteralUnion(getType("StringUnion"))).toBe(
                true
            );
        });

        it("returns true for a number literal union", () => {
            expect(service.isSimpleLiteralUnion(getType("NumberUnion"))).toBe(
                true
            );
        });

        it("returns false for a pure boolean union (true | false)", () => {
            expect(service.isSimpleLiteralUnion(getType("BooleanUnion"))).toBe(
                false
            );
        });

        it("returns true for mixed literal union (string | number | boolean literals)", () => {
            expect(service.isSimpleLiteralUnion(getType("MixedLiteral"))).toBe(
                true
            );
        });

        it("returns false for a non-literal union (string | number)", () => {
            expect(service.isSimpleLiteralUnion(getType("NonLiteral"))).toBe(
                false
            );
        });

        it("returns false for a non-union type", () => {
            expect(service.isSimpleLiteralUnion(getType("SingleString"))).toBe(
                false
            );
        });

        it("returns true for a nullable string literal union (uses getNonNullableType)", () => {
            expect(
                service.isSimpleLiteralUnion(getType("NullableString"))
            ).toBe(true);
        });
    });

    describe("getExpandedLiteralUnionText", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "expanded.ts",
                `
                type Variant = "primary" | "secondary" | "danger";
                type Sizes = 3 | 1 | 2;
                type Mixed = string | "literal";
                type NotUnion = string;
                `,
                { overwrite: true }
            );
        });

        function getTypeAndNode(typeName: string) {
            const sf = project.getSourceFileOrThrow("expanded.ts");
            const decl = sf.getTypeAliasOrThrow(typeName);
            return { type: decl.getType(), node: decl };
        }

        it("returns sorted literal strings for a string literal union", () => {
            const { type, node } = getTypeAndNode("Variant");
            const result = service.getExpandedLiteralUnionText(type, node);
            expect(result).toBe("'danger' | 'primary' | 'secondary'");
        });

        it("returns sorted literal numbers for a number literal union", () => {
            const { type, node } = getTypeAndNode("Sizes");
            const result = service.getExpandedLiteralUnionText(type, node);
            expect(result).toBe("1 | 2 | 3");
        });

        it("returns undefined when the union contains a non-literal member", () => {
            const { type, node } = getTypeAndNode("Mixed");
            expect(
                service.getExpandedLiteralUnionText(type, node)
            ).toBeUndefined();
        });

        it("returns undefined for a non-union type", () => {
            const { type, node } = getTypeAndNode("NotUnion");
            expect(
                service.getExpandedLiteralUnionText(type, node)
            ).toBeUndefined();
        });
    });

    describe("getUnionMemberTexts", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "unionmembers.ts",
                `
                type SmallUnion = "a" | "b" | "c";
                type LargeUnion = "a" | "b" | "c" | "d" | "e" | "f" | "g";
                type BoolUnion = boolean;
                type NotUnion = string;
                `,
                { overwrite: true }
            );
        });

        function getTypeAndNode(typeName: string) {
            const sf = project.getSourceFileOrThrow("unionmembers.ts");
            const decl = sf.getTypeAliasOrThrow(typeName);
            return { type: decl.getType(), node: decl };
        }

        it("returns sorted member texts for a small union", () => {
            const { type, node } = getTypeAndNode("SmallUnion");
            const result = service.getUnionMemberTexts(type, node);
            expect(result).toEqual(["'a'", "'b'", "'c'"]);
        });

        it("returns undefined when the union has more than 6 members", () => {
            const { type, node } = getTypeAndNode("LargeUnion");
            expect(service.getUnionMemberTexts(type, node)).toBeUndefined();
        });

        it("returns undefined for a non-union type", () => {
            const { type, node } = getTypeAndNode("NotUnion");
            expect(service.getUnionMemberTexts(type, node)).toBeUndefined();
        });

        it("returns undefined for boolean (true | false) union", () => {
            const { type, node } = getTypeAndNode("BoolUnion");
            expect(service.getUnionMemberTexts(type, node)).toBeUndefined();
        });
    });

    describe("getPropertyTypeText", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "props.ts",
                `
                interface Props {
                    name: string;
                    count: number | undefined;
                    value: any;
                    mystery: unknown;
                    variant: "a" | "b";
                }
                `,
                { overwrite: true }
            );
        });

        function getProp(propName: string) {
            return project
                .getSourceFileOrThrow("props.ts")
                .getInterfaceOrThrow("Props")
                .getPropertyOrThrow(propName);
        }

        it("returns the cleaned type node text for a simple property", () => {
            expect(service.getPropertyTypeText(getProp("name"))).toBe("string");
        });

        it("strips | undefined from the type node text", () => {
            expect(service.getPropertyTypeText(getProp("count"))).toBe(
                "number"
            );
        });

        // Properties with explicit `any` / `unknown` annotations have a type
        // node, so cleanType returns the raw text. The '-' sentinel is only
        // produced when the resolved type is any/unknown with NO type node.
        it("returns 'any' for a property explicitly typed as any", () => {
            expect(service.getPropertyTypeText(getProp("value"))).toBe("any");
        });

        it("returns 'unknown' for a property explicitly typed as unknown", () => {
            expect(service.getPropertyTypeText(getProp("mystery"))).toBe(
                "unknown"
            );
        });

        it("returns the literal union text for a union property", () => {
            const text = service.getPropertyTypeText(getProp("variant"));
            expect(text).toContain('"a"');
            expect(text).toContain('"b"');
        });
    });

    describe("getIndexSignatureTypeText", () => {
        let project: Project;

        beforeAll(() => {
            project = createProject();
            project.createSourceFile(
                "indexsig.ts",
                `
                interface SimpleDict {
                    [key: string]: string;
                }
                interface UnionDict {
                    [key: string]: string | number | boolean;
                }
                `,
                { overwrite: true }
            );
        });

        function getIndexSig(ifaceName: string) {
            return project
                .getSourceFileOrThrow("indexsig.ts")
                .getInterfaceOrThrow(ifaceName)
                .getIndexSignatures()[0]!;
        }

        it("returns the return type text for a simple index signature", () => {
            expect(
                service.getIndexSignatureTypeText(getIndexSig("SimpleDict"))
            ).toBe("string");
        });

        it("formats a union return type across newlines", () => {
            const result = service.getIndexSignatureTypeText(
                getIndexSig("UnionDict")
            );
            expect(result).toContain("\n|");
        });
    });
});
