import styled, { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { Font, Typo } from "../../src/theme";
import { ThemeSpec } from "../../src/theme/types";
import "jest-styled-components";

const StyledTypographyTest = styled.div`
    ${Typo["header-xxl-bold"]};
`;

const StyledFontSet = styled.div`
    font-size: ${Font["header-size-xs"]};
`;

// "header-size-xs": "1.125rem",

describe("StyledTypographyTest", () => {
    it("should apply correct typography styles based on the theme", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
        };

        const fontSize = "3rem";
        const fontWeight = "700";
        const lineHeight = "3.5rem";
        const letterSpacing = "-0.056rem";

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledTypographyTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("font-size", fontSize);
        expect(container.firstChild).toHaveStyleRule("font-weight", fontWeight);
        expect(container.firstChild).toHaveStyleRule("line-height", lineHeight);
        expect(container.firstChild).toHaveStyleRule(
            "letter-spacing",
            letterSpacing
        );
    });

    it("should apply correct typography styles based on the overridden theme", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            overrides: {
                typography: {
                    "header-xxl-bold": {
                        "font-size": "4rem",
                        "font-weight": "800",
                        "line-height": "4.5rem",
                        "letter-spacing": "-0.1rem",
                    },
                },
            },
        };

        const fontSize = "4rem";
        const fontWeight = "800";
        const lineHeight = "4.5rem";
        const letterSpacing = "-0.1rem";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <StyledTypographyTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("font-size", fontSize);
        expect(container.firstChild).toHaveStyleRule("font-weight", fontWeight);
        expect(container.firstChild).toHaveStyleRule("line-height", lineHeight);
        expect(container.firstChild).toHaveStyleRule(
            "letter-spacing",
            letterSpacing
        );
    });

    it("should apply correct typography styles based on the overridden theme", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
        };

        const fontSize = "1.125rem";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <StyledFontSet />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("font-size", fontSize);
    });
});
