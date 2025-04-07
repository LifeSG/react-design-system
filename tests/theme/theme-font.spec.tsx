import styled, { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { ThemeSpec } from "../../src/theme/types";
import "jest-styled-components";
import { Font } from "../../src";
import { MOCK_THEME } from "./mock-theme-data";

const StyledFontTest = styled.div`
    ${Font["heading-xxl-bold"]};
`;

const StyledFontSpecSet = styled.div`
    font-size: ${Font.Spec["heading-size-xs"]};
`;

describe("StyledFontTests", () => {
    it("should apply correct font styles based on the theme", () => {
        const fontSize = "3rem";
        const fontWeight = "700";
        const lineHeight = "3.5rem";
        const letterSpacing = "-0.056rem";

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledFontTest />
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

    it("should apply correct font styles when overriding font token", () => {
        const overrideTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                font: {
                    "heading-xxl-bold": {
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
                <StyledFontTest />
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

    it("should apply correct font spec styles based on the theme", () => {
        const fontSize = "1.125rem";

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledFontSpecSet />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("font-size", fontSize);
    });
});
