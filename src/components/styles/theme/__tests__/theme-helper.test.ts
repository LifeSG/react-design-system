import { getValue } from "../theme-helper";

describe("theme-helper", () => {
    describe("getValue", () => {
        it("should return the correct value if the attribute path is provided (non-nested)", () => {
            const themeMap = {
                a: { name: "A", description: "Item A" },
                b: { name: "B", description: "Item B" },
            };

            const themeFn = getValue(themeMap, "first", "a", "name");

            expect(themeFn({ theme: MOCK_THEME })).toBe("A");
        });

        it("should return the correct value if the attribute path is provided (nested)", () => {
            const themeMap = {
                a: {
                    level1: {
                        level2: {
                            level3: "Item A",
                        },
                    },
                },
                b: {
                    level1: {
                        level2: {
                            level3: "Item B",
                        },
                    },
                },
            };

            const themeFn = getValue(
                themeMap,
                "first",
                "a",
                "level1.level2.level3"
            );

            expect(themeFn({ theme: MOCK_THEME })).toBe("Item A");
        });

        it("should return the correct value if the attribute path is not provided (flat structure)", () => {
            const themeMap = {
                a: "Item A",
                b: "Item B",
            };

            const themeFn = getValue(themeMap, "first", "a");

            expect(themeFn({ theme: MOCK_THEME })).toBe("Item A");
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const MOCK_THEME = {
    first: "a",
};
