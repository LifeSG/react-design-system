import { render } from "@testing-library/react";
import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import { ThemeSpec } from "../../src/theme/types";
import { Radius } from "../../src";
import { MOCK_THEME } from "./mock-theme-data";

const RadiusTestComponent = styled.div`
    border-radius: ${Radius.sm};
`;

describe("Radius Theming Test", () => {
    it("should apply correct border-radius based on the theme", () => {
        const radiusValue = "4px";

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <RadiusTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "border-radius",
            radiusValue
        );
    });

    it("should apply correct border-radius when overriding radius token", () => {
        const overrideTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                radius: {
                    sm: 6,
                },
            },
        };

        const radiusValue = "6px";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <RadiusTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "border-radius",
            radiusValue
        );
    });

    it("should apply correct border-radius when overriding multiple radius tokens", () => {
        const RadiusTestComponent2 = styled.div`
            border-radius: ${Radius.sm};
            line-height: ${Radius.md};
        `;

        const overrideTheme: ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                radius: {
                    sm: 6,
                    md: 10,
                },
            },
        };

        const radiusValue = "6px";
        const radiusValue2 = "10px";

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <RadiusTestComponent2 />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "border-radius",
            radiusValue
        );

        expect(container.firstChild).toHaveStyleRule(
            "line-height",
            radiusValue2
        );
    });
});
