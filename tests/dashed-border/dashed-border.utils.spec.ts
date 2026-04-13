import { createSvgBackgroundImage } from "src/dashed-border/dashed-border.utils";
import {
    isColourToken,
    isRadiusToken,
    isThicknessToken,
} from "src/util/styling-helper";
import { BorderThickness, Colour, Radius } from "src/theme";

const decodeSvgDataUrl = (value: string) => {
    const match = /^url\("data:image\/svg\+xml,(.*)"\)$/.exec(value);
    if (!match) {
        throw new Error(`Invalid SVG data url format: ${value}`);
    }

    return decodeURIComponent(match[1]);
};

describe("dashed-border utils", () => {
    describe("token guards", () => {
        it("matches thickness tokens from BorderThickness set", () => {
            expect(isThicknessToken(BorderThickness["width-020"])).toBe(true);
            expect(isThicknessToken("2px")).toBe(false);
        });

        it("matches radius tokens from Radius set", () => {
            expect(isRadiusToken(Radius.sm)).toBe(true);
            expect(isRadiusToken("4px")).toBe(false);
        });

        it("matches colour tokens by colour prefix", () => {
            expect(isColourToken(Colour["border"])).toBe(true);
            expect(isColourToken("#123456")).toBe(false);
            expect(isColourToken("var(--fds-radius-sm)")).toBe(false);
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
