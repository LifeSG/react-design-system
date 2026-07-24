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
            expect(row.value.control).toBe(false);
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
    });

    describe("buildInheritedHtmlAttributesRow", () => {
        it("builds a row with a default HTML attributes description", () => {
            const row = builder.buildInheritedHtmlAttributesRow(
                "Button",
                "Props",
                undefined
            );

            expect(row?.key).toBe("Button.__inheritedHtmlProps");
            expect(row?.value.control).toBe(false);
            expect(row?.value.description).toContain("HTML element attributes");
            expect(row?.value.table.category).toBe("Props");
            expect(row?.value.table.type.summary).toBe(
                "HTMLAttributes<HTMLElement>"
            );
        });

        it("uses custom description when provided", () => {
            const row = builder.buildInheritedHtmlAttributesRow(
                "Card",
                "Base",
                "TabA",
                "Custom HTML desc"
            );

            expect(row?.value.description).toBe("Custom HTML desc");
            expect(row?.value.table.tabGroup).toBe("TabA");
        });
    });

    describe("buildInheritedInterfaceRow", () => {
        it("builds a row with a default inherited-from description", () => {
            const row = builder.buildInheritedInterfaceRow(
                "BaseProps",
                "Props",
                undefined
            );

            expect(row.key).toBe("BaseProps");
            expect(row.value.description).toBe(
                "Inherits props from `BaseProps`."
            );
            expect(row.value.table.type.summary).toBe("BaseProps");
            expect(row.value.table.category).toBe("Props");
        });

        it("uses custom description when provided", () => {
            const row = builder.buildInheritedInterfaceRow(
                "SharedProps",
                "Misc",
                "Tab1",
                "See SharedProps"
            );

            expect(row.value.description).toBe("See SharedProps");
            expect(row.value.table.tabGroup).toBe("Tab1");
        });

        it("sets tabGroup when provided", () => {
            const row = builder.buildInheritedInterfaceRow(
                "BaseProps",
                "Props",
                "Main Tab"
            );

            expect(row.value.table.tabGroup).toBe("Main Tab");
        });
    });
});
