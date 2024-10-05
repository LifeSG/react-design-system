import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { Motion } from "../../src";
import { ThemeSpec } from "../../src/theme/types";

const StyledMotionTest = styled.div`
    transition: transform ${Motion["duration-500"]}, ${Motion["ease-default"]};
`;

describe("StyledMotionTest", () => {
    it("should apply correct motion styles based on the theme", () => {
        const mockTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            motionScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
        };

        const duration = "500ms";
        const easing = "cubic-bezier(0.45,0.05,0.55,0.95)";

        const { container } = render(
            <ThemeProvider theme={mockTheme}>
                <StyledMotionTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "transition",
            `transform ${duration},${easing}`
        );
    });

    it("should apply correct motion styles when overriding motion token", () => {
        const overrideTheme: ThemeSpec = {
            colourScheme: "lifesg",
            fontScheme: "lifesg",
            motionScheme: "lifesg",
            borderScheme: "lifesg",
            spacingScheme: "lifesg",
            radiusScheme: "lifesg",
            breakpointScheme: "lifesg",
            overrides: {
                motion: {
                    "duration-500": "700ms",
                    "ease-default": "cubic-bezier(0.25,0.1,0.25,1)",
                },
            },
        };

        const duration = "700ms";
        const easing = "cubic-bezier(0.25,0.1,0.25,1)";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <StyledMotionTest />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "transition",
            `transform ${duration},${easing}`
        );
    });
});
