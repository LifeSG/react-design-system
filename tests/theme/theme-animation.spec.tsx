import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { Animation } from "../../src";
import { ThemeSpec } from "../../src/theme/types";

const StyledAnimationTest = styled.div`
    transition: transform ${Animation["duration-500"]},
        ${Animation["ease-default"]};
`;

describe("StyledAnimationTest", () => {
    it("should apply correct animation styles based on the theme", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
        };

        const duration = "500ms";
        const easing = "cubic-bezier(0.45,0.05,0.55,0.95)";

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledAnimationTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "transition",
            `transform ${duration}, ${easing}`
        );
    });

    it("should apply correct animation styles when overriding animation token", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            animationScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            overrides: {
                animation: {
                    "duration-500": "700ms",
                    "ease-default": "cubic-bezier(0.25,0.1,0.25,1)",
                },
            },
        };

        const duration = "700ms";
        const easing = "cubic-bezier(0.25,0.1,0.25,1)";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <StyledAnimationTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "transition",
            `transform ${duration}, ${easing}`
        );
    });
});
