import { ArgTypesRowBuilder } from "tools/storybook-argtypes/services/arg-types-row-builder";

describe("ArgTypesRowBuilder", () => {
    let builder: ArgTypesRowBuilder;

    beforeEach(() => {
        builder = new ArgTypesRowBuilder();
    });

    describe("buildArgTypeRow", () => {
        it("builds a minimal row with required fields", () => {
            const row = builder.buildArgTypeRow({
                key: "Button.color",
                name: "color",
                category: "Styling",
            });

            expect(row.key).toBe("Button.color");
            expect(row.value.name).toBe("color");
            expect(row.value.control).toBe("color");
            expect(row.value.table.category).toBe("Styling");
        });

        it("uses summary when typeSummary is provided", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                typeSummary: "string",
            });

            expect(row.value.table.type).toEqual({ summary: "string" });
        });

        it("uses summaryParts when typeSummaryParts has more than 1 entry", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                typeSummaryParts: ["string", "number"],
            });

            expect(row.value.table.type).toEqual({
                summaryParts: ["string", "number"],
            });
        });

        it("falls back to summary when typeSummaryParts has exactly 1 entry", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                typeSummaryParts: ["string"],
            });

            expect(row.value.table.type).toEqual({ summary: undefined });
        });

        it("wraps defaultValue in a summary object", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                defaultValue: "primary",
            });

            expect(row.value.table.defaultValue).toEqual({
                summary: "primary",
            });
        });

        it("omits defaultValue when not provided", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
            });

            expect(row.value.table.defaultValue).toBeUndefined();
        });

        it("sets tabGroup when provided", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                tabGroup: "Tab1",
            });

            expect(row.value.table.tabGroup).toBe("Tab1");
        });

        it("passes deprecated string through", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                deprecated: "Use newProp instead",
            });

            expect(row.value.deprecated).toBe("Use newProp instead");
        });

        it("passes deprecated boolean true through", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                deprecated: true,
            });

            expect(row.value.deprecated).toBe(true);
        });

        it("passes description through", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                description: "My description",
            });

            expect(row.value.description).toBe("My description");
        });

        it("sets required on the type field", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
                required: true,
            });

            expect(row.value.type?.required).toBe(true);
        });

        it("omits deprecated and description when not provided", () => {
            const row = builder.buildArgTypeRow({
                key: "x",
                name: "x",
                category: "Props",
            });

            expect(row.value.deprecated).toBeUndefined();
            expect(row.value.description).toBeUndefined();
        });

        describe("inferControl behavior", () => {
            it("infers boolean control", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "enabled",
                    category: "Props",
                    typeSummary: "boolean",
                });

                expect(row.value.control).toBe("boolean");
            });

            it("infers text control", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "label",
                    category: "Props",
                    typeSummary: "string",
                });

                expect(row.value.control).toBe("text");
            });

            it("infers number control", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "maxItems",
                    category: "Props",
                    typeSummary: "number",
                });

                expect(row.value.control).toBe("number");
            });

            it("infers select control from string-literal summaryParts", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "status",
                    category: "Props",
                    typeSummaryParts: ["'draft'", "'published'"],
                });

                expect(row.value.control).toBe("select");
                expect(row.value.options).toEqual(["draft", "published"]);
            });

            it("infers select control from number-literal summaryParts", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "size",
                    category: "Props",
                    typeSummaryParts: ["1", "2", "3"],
                });

                expect(row.value.control).toBe("select");
                expect(row.value.options).toEqual([1, 2, 3]);
            });

            it("infers select control from literal-union summary when summaryParts is unavailable", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "type",
                    category: "Props",
                    typeSummary: "'a' | 'b' | 'c'",
                });

                expect(row.value.control).toBe("select");
                expect(row.value.options).toEqual(["a", "b", "c"]);
            });

            it("does not infer select for mixed unions", () => {
                const row = builder.buildArgTypeRow({
                    key: "x",
                    name: "content",
                    category: "Props",
                    typeSummary: "string | ReactNode",
                });

                expect(row.value.control).toBe(false);
                expect(row.value.options).toBeUndefined();
            });

            it("only infers color control when prop name ends with color or colour", () => {
                const colorRow = builder.buildArgTypeRow({
                    key: "x",
                    name: "bgColor",
                    category: "Props",
                });
                const colourRow = builder.buildArgTypeRow({
                    key: "x",
                    name: "bgColour",
                    category: "Props",
                });
                const nonColorRow = builder.buildArgTypeRow({
                    key: "x",
                    name: "colorScheme",
                    category: "Props",
                    typeSummary: "string",
                });

                expect(colorRow.value.control).toBe("color");
                expect(colourRow.value.control).toBe("color");
                expect(nonColorRow.value.control).toBe("text");
            });

            it("forces non-playground props to control false", () => {
                const classNameRow = builder.buildArgTypeRow({
                    key: "x",
                    name: "className",
                    category: "Props",
                    typeSummary: "string",
                });
                const dataTestIdRow = builder.buildArgTypeRow({
                    key: "x",
                    name: "data-testid",
                    category: "Props",
                    typeSummary: "string",
                });
                const idRow = builder.buildArgTypeRow({
                    key: "x",
                    name: "id",
                    category: "Props",
                    typeSummary: "string",
                });

                expect(classNameRow.value.control).toBe(false);
                expect(dataTestIdRow.value.control).toBe(false);
                expect(idRow.value.control).toBe(false);
            });
        });
    });
});
