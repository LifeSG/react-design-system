import {
    getEffectiveTokenOrCustom,
    getResolvedValue,
    getTokenOrDefault,
    isTokenFromSet,
    isTokenWithPrefix,
    toCssValue,
} from "../../../src/theme/utils";

describe("token-resolver utils", () => {
    describe("getResolvedValue", () => {
        it("returns resolved value when present", () => {
            expect(getResolvedValue("2px", "var(--fds-border-width-020)")).toBe(
                "2px"
            );
        });

        it("falls back when resolved value is empty", () => {
            expect(getResolvedValue("", "var(--fds-border-width-020)")).toBe(
                "var(--fds-border-width-020)"
            );
            expect(getResolvedValue("   ", "var(--fds-border-width-020)")).toBe(
                "var(--fds-border-width-020)"
            );
        });
    });

    describe("toCssValue", () => {
        it("converts number to px", () => {
            expect(toCssValue(4)).toBe("4px");
        });

        it("returns string as-is", () => {
            expect(toCssValue("1rem")).toBe("1rem");
        });
    });

    describe("isTokenFromSet", () => {
        const tokenSet = new Set<string>(["var(--fds-radius-sm)"]);

        it("returns true for values in token set", () => {
            expect(
                isTokenFromSet<"var(--fds-radius-sm)">(
                    "var(--fds-radius-sm)",
                    tokenSet
                )
            ).toBe(true);
        });

        it("returns false for non-token values", () => {
            expect(isTokenFromSet("12px", tokenSet)).toBe(false);
            expect(isTokenFromSet(12, tokenSet)).toBe(false);
        });
    });

    describe("isTokenWithPrefix", () => {
        it("returns true for matching prefix", () => {
            expect(
                isTokenWithPrefix<"var(--fds-colour-border)">(
                    "var(--fds-colour-border)",
                    "var(--fds-colour-"
                )
            ).toBe(true);
        });

        it("returns false for non-matching values", () => {
            expect(isTokenWithPrefix("#fff", "var(--fds-colour-")).toBe(false);
            expect(isTokenWithPrefix(undefined, "var(--fds-colour-")).toBe(
                false
            );
        });
    });

    describe("getTokenOrDefault", () => {
        const guard = (value: unknown): value is "var(--fds-radius-sm)" =>
            value === "var(--fds-radius-sm)";

        it("returns original value when guard passes", () => {
            expect(
                getTokenOrDefault(
                    "var(--fds-radius-sm)",
                    guard,
                    "var(--fds-radius-sm)"
                )
            ).toBe("var(--fds-radius-sm)");
        });

        it("returns fallback when guard fails", () => {
            expect(
                getTokenOrDefault("12px", guard, "var(--fds-radius-sm)")
            ).toBe("var(--fds-radius-sm)");
        });
    });

    describe("getEffectiveTokenOrCustom", () => {
        const guard = (
            value: unknown
        ): value is "var(--fds-border-width-020)" =>
            value === "var(--fds-border-width-020)";

        it("uses resolved token value for token input", () => {
            expect(
                getEffectiveTokenOrCustom({
                    value: "var(--fds-border-width-020)",
                    resolvedValue: "2px",
                    guard,
                    normalizeCustom: String,
                })
            ).toBe("2px");
        });

        it("falls back to token string when unresolved", () => {
            expect(
                getEffectiveTokenOrCustom({
                    value: "var(--fds-border-width-020)",
                    resolvedValue: "",
                    guard,
                    normalizeCustom: String,
                })
            ).toBe("var(--fds-border-width-020)");
        });

        it("normalizes custom values when value is not a token", () => {
            expect(
                getEffectiveTokenOrCustom({
                    value: 3,
                    resolvedValue: "unused",
                    guard,
                    normalizeCustom: (value) => `${value}px`,
                })
            ).toBe("3px");
        });
    });
});
