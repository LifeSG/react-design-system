import { render } from "@testing-library/react";
import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { ThemeSpec } from "../../src/theme/types";
import { Spacing } from "../../src";

const SpacingTestComponent = styled.div`
    margin: ${Spacing["spacing-16"]};
    padding: ${Spacing["layout-lg"]};
`;

describe("Spacing Themeing Test", () => {
    it("should apply correct spacing based on the theme", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const marginValue = "16px";
        const paddingValue = "32px";

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <SpacingTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("margin", marginValue);
        expect(container.firstChild).toHaveStyleRule("padding", paddingValue);
    });

    it("should apply correct spacing when overriding spacing token", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
            overrides: {
                spacing: {
                    "spacing-16": 2,
                },
            },
        };

        const marginValue = "2px";
        const paddingValue = "32px";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <SpacingTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("margin", marginValue);
        expect(container.firstChild).toHaveStyleRule("padding", paddingValue);
    });

    it("should apply correct spacing when overriding spacing token", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
            overrides: {
                spacing: {
                    "spacing-16": 3,
                    "layout-lg": 40,
                },
            },
        };

        const marginValue = "3px";
        const paddingValue = "40px";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <SpacingTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("margin", marginValue);
        expect(container.firstChild).toHaveStyleRule("padding", paddingValue);
    });
});
