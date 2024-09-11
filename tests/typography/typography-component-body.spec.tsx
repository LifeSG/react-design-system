import { render } from "@testing-library/react";
import "jest-styled-components";
import { Typography } from "../../src/typography/typography";
import { ThemeSpec } from "../../src/theme/types";
import { ThemeProvider } from "styled-components";

describe("Typography Components", () => {
    it("renders BodyBL with correct styles", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Typography.BodyBL weight="regular">
                    This is body text
                </Typography.BodyBL>
            </ThemeProvider>
        );

        const p = container.firstChild;
        expect(p).toHaveStyleRule("font-size", "1.125rem");
        expect(p).toHaveStyleRule("line-height", "1.625rem");
        expect(p).toHaveStyleRule("letter-spacing", "0rem");
        expect(p).toHaveStyleRule("font-weight", "400");
        expect(p).toHaveStyleRule("color", "#282828");
    });

    it("renders BodyLG with correct styles", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <Typography.BodyLG weight="semibold" inline>
                    This is large body text
                </Typography.BodyLG>
            </ThemeProvider>
        );

        const p = container.firstChild;
        expect(p).toHaveStyleRule("font-size", "1rem");
        expect(p).toHaveStyleRule("line-height", "1.5rem");
        expect(p).toHaveStyleRule("letter-spacing", "0.014rem");
        expect(p).toHaveStyleRule("font-weight", "600");
        expect(p).toHaveStyleRule("display", "inline");
        expect(p).toHaveStyleRule("color", "#282828");
    });

    it("renders BodyMD with paragraph styling", () => {
        const { container } = render(
            <Typography.BodyMD paragraph>
                This is medium body text
            </Typography.BodyMD>
        );

        const p = container.firstChild;
        expect(p).toHaveStyleRule("font-size", "0.875rem");
        expect(p).toHaveStyleRule("line-height", "1.6rem");
        expect(p).toHaveStyleRule("letter-spacing", "0.012rem");
        expect(p).toHaveStyleRule("margin-bottom", "0.9187500000000001rem");
        expect(p).toHaveStyleRule("display", "block");
        expect(p).toHaveStyleRule("color", "#282828");
    });
});
