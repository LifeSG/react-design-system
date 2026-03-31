import { generateFont, generateFontProperties } from "src/theme/utils";

describe("font utils", () => {
    it("generates structured font declarations", () => {
        expect(generateFontProperties("body-md", "regular")).toEqual({
            "font-family": "var(--fds-font-family)",
            "font-variant": "var(--fds-font-variant)",
            "font-size": "var(--fds-font-body-size-md)",
            "font-weight": "var(--fds-font-weight-regular)",
            "line-height": "var(--fds-font-body-lh-md)",
            "letter-spacing": "var(--fds-font-body-ls-md)",
        });
    });

    it("appends variant options into font-variant", () => {
        expect(
            generateFontProperties("body-md", "regular", {
                fontVariant: "small-caps",
                noCommonLigatures: true,
            })["font-variant"]
        ).toBe("var(--fds-font-variant) small-caps no-common-ligatures");
    });

    it("keeps generateFont string output compatible", () => {
        expect(generateFont("body-md", "regular")).toBe(
            "font-family: var(--fds-font-family); " +
                "font-variant: var(--fds-font-variant); " +
                "font-size: var(--fds-font-body-size-md); " +
                "font-weight: var(--fds-font-weight-regular); " +
                "line-height: var(--fds-font-body-lh-md); " +
                "letter-spacing: var(--fds-font-body-ls-md);"
        );
    });
});
