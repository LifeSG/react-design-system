import { render } from "@testing-library/react";
import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { Colour } from "../../src/theme";
import { ThemeSpec } from "../../src/theme/types";
import { MOCK_THEME } from "./mock-theme-data";

const StyledComponentTest = styled.div`
    background-color: ${Colour.Primitive["primary-10"]};
    color: ${Colour["border-primary"]};
`;

describe("Colour Themeing Test", () => {
    it("should apply correct styles based on the theme", () => {
        const bgColor = "#001731";
        const textColor = "#1768BE";

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <StyledComponentTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            bgColor
        );
        expect(container.firstChild).toHaveStyleRule("color", textColor);
    });

    it("should apply correct styles when overriding primitive colour token", () => {
        const overrideTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                primitiveColour: {
                    "primary-10": "#fefefe",
                },
            },
        };

        const bgColor = "#fefefe";
        const textColor = "#1768BE";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <StyledComponentTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            bgColor
        );
        expect(container.firstChild).toHaveStyleRule("color", textColor);
    });

    it("should apply correct styles when overriding semantic colour token", () => {
        const overrideTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                semanticColour: {
                    "border-primary": "#fefefe",
                },
            },
        };

        const bgColor = "#001731";
        const textColor = "#fefefe";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <StyledComponentTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            bgColor
        );
        expect(container.firstChild).toHaveStyleRule("color", textColor);
    });
});
