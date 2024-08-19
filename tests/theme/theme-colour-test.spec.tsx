import { render } from "@testing-library/react";
import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { Colour } from "../../src/theme";
import { ThemeSpec } from "../../src/theme/types";

const StyledComponentTest = styled.div`
    background-color: ${Colour.Primitive["primary-10"]};
    color: ${Colour["border-primary"]};
`;

describe("Colour Themeing Test", () => {
    it("should apply correct styles based on the theme", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
        };

        const bgColor = "#001731";
        const textColor = "#1768BE";

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledComponentTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "background-color",
            bgColor
        );
        expect(container.firstChild).toHaveStyleRule("color", textColor);
    });

    it("should apply correct styles based on the theme", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            overrides: {
                colour: {
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

    it("should apply correct styles based on the theme", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            overrides: {
                sematiccolour: {
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
