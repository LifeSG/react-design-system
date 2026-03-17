import {
    createSvgBackgroundImage,
    getBackgroundColorToken,
    getColourToken,
    getEffectiveBackgroundColor,
    getEffectiveColour,
    getEffectiveRadius,
    getEffectiveThickness,
    getRadiusToken,
    getThicknessToken,
} from "src/dashed-border/dashed-border.utils";
import { BorderThickness, Colour, Radius } from "src/theme";

const decodeSvgDataUrl = (value: string) => {
    const match = /^url\("data:image\/svg\+xml,(.*)"\)$/.exec(value);
    if (!match) {
        throw new Error(`Invalid SVG data url format: ${value}`);
    }

    return decodeURIComponent(match[1]);
};

describe("dashed-border utils", () => {
    describe("token fallback helpers", () => {
        it("returns provided thickness token or default token", () => {
            expect(getThicknessToken(BorderThickness["width-020"])).toBe(
                BorderThickness["width-020"]
            );
            expect(getThicknessToken("3px")).toBe(BorderThickness["width-040"]);
        });

        it("returns provided radius token or default token", () => {
            expect(getRadiusToken(Radius.sm)).toBe(Radius.sm);
            expect(getRadiusToken("12px")).toBe(Radius.sm);
        });

        it("returns provided colour token or default token", () => {
            expect(getColourToken(Colour["border"])).toBe(Colour["border"]);
            expect(getColourToken("#333")).toBe(Colour["border"]);
            expect(getColourToken("var(--fds-radius-sm)")).toBe(
                Colour["border"]
            );
        });

        it("returns provided background token or default token", () => {
            expect(getBackgroundColorToken(Colour.bg)).toBe(Colour.bg);
            expect(getBackgroundColorToken("#fff")).toBe(Colour.bg);
            expect(getBackgroundColorToken(undefined)).toBe(Colour.bg);
        });
    });

    describe("effective value helpers", () => {
        it("resolves thickness token and supports custom values", () => {
            const resolvedThickness = "1px";

            expect(
                getEffectiveThickness({
                    thickness: BorderThickness["width-020"],
                    resolvedThickness,
                })
            ).toBe("1px");
            expect(
                getEffectiveThickness({
                    thickness: "3px",
                    resolvedThickness,
                })
            ).toBe("3px");
            expect(
                getEffectiveThickness({
                    thickness: 2,
                    resolvedThickness,
                })
            ).toBe("2px");
        });

        it("falls back to token string when thickness token is unresolved", () => {
            expect(
                getEffectiveThickness({
                    thickness: BorderThickness["width-020"],
                    resolvedThickness: "",
                })
            ).toBe(BorderThickness["width-020"]);
        });

        it("resolves radius token and supports custom values", () => {
            const resolvedRadius = "8px";

            expect(
                getEffectiveRadius({
                    radius: Radius.sm,
                    resolvedRadius,
                })
            ).toBe(resolvedRadius);
            expect(
                getEffectiveRadius({
                    radius: "14px",
                    resolvedRadius,
                })
            ).toBe("14px");
            expect(
                getEffectiveRadius({
                    radius: 14,
                    resolvedRadius,
                })
            ).toBe("14px");
        });

        it("falls back to token string when radius token is unresolved", () => {
            expect(
                getEffectiveRadius({
                    radius: Radius.sm,
                    resolvedRadius: "",
                })
            ).toBe(Radius.sm);
        });

        it("resolves colour token and supports custom colours", () => {
            const resolvedColour = "#1f1f1f";

            expect(
                getEffectiveColour({
                    colour: Colour["border"],
                    resolvedColour,
                })
            ).toBe(resolvedColour);
            expect(
                getEffectiveColour({
                    colour: "#123456",
                    resolvedColour,
                })
            ).toBe("#123456");
        });

        it("falls back to token string when colour token is unresolved", () => {
            expect(
                getEffectiveColour({
                    colour: Colour["border"],
                    resolvedColour: "",
                })
            ).toBe(Colour["border"]);
        });

        it("handles background color token, custom value, and undefined", () => {
            const resolvedBackgroundColor = "#ffffff";

            expect(
                getEffectiveBackgroundColor({
                    backgroundColor: Colour.bg,
                    resolvedBackgroundColor,
                })
            ).toBe(resolvedBackgroundColor);
            expect(
                getEffectiveBackgroundColor({
                    backgroundColor: "rgb(1, 2, 3)",
                    resolvedBackgroundColor,
                })
            ).toBe("rgb(1, 2, 3)");
            expect(
                getEffectiveBackgroundColor({
                    backgroundColor: undefined,
                    resolvedBackgroundColor,
                })
            ).toBe("none");
        });

        it("falls back to token string when background token is unresolved", () => {
            expect(
                getEffectiveBackgroundColor({
                    backgroundColor: Colour.bg,
                    resolvedBackgroundColor: "",
                })
            ).toBe(Colour.bg);
        });

        it("treats empty background color as none", () => {
            expect(
                getEffectiveBackgroundColor({
                    backgroundColor: "",
                    resolvedBackgroundColor: "#fff",
                })
            ).toBe("none");
        });
    });

    describe("createSvgBackgroundImage", () => {
        it("generates an SVG background URL with enabled stroke", () => {
            const svgUrl = createSvgBackgroundImage({
                radius: "8px",
                colour: "#111",
                thickness: "2px",
                enabled: true,
            });
            const svg = decodeSvgDataUrl(svgUrl);

            expect(svg).toContain("rx='8px'");
            expect(svg).toContain("stroke='#111'");
            expect(svg).toContain("stroke-width='2px'");
            expect(svg).toContain("stroke-dasharray='4, 8'");
        });

        it("disables stroke when enabled is false", () => {
            const svgUrl = createSvgBackgroundImage({
                radius: "8px",
                colour: "#111",
                thickness: "2px",
                enabled: false,
            });
            const svg = decodeSvgDataUrl(svgUrl);

            expect(svg).toContain("stroke='none'");
            expect(svg).toContain("stroke-width='0'");
        });

        it("returns a valid SVG data URI wrapper", () => {
            const svgUrl = createSvgBackgroundImage({
                radius: "4px",
                colour: "#000",
                thickness: "1px",
                enabled: true,
            });

            expect(svgUrl.startsWith('url("data:image/svg+xml,')).toBe(true);
            expect(svgUrl.endsWith('")')).toBe(true);
        });
    });
});
