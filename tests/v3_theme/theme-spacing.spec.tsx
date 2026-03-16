import "jest-styled-components";

import { render } from "@testing-library/react";
import { V3_Spacing } from "src";
import type { V3_ThemeSpec } from "src/v3_theme/types";
import styled, { ThemeProvider } from "styled-components";

import { MOCK_THEME } from "./mock-theme-data";

const SpacingTestComponent = styled.div`
    margin: ${V3_Spacing["spacing-16"]};
    padding: ${V3_Spacing["layout-lg"]};
`;

describe("Spacing Themeing Test", () => {
    it("should apply correct spacing based on the theme", () => {
        const marginValue = "16px";
        const paddingValue = "32px";

        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <SpacingTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule("margin", marginValue);
        expect(container.firstChild).toHaveStyleRule("padding", paddingValue);
    });

    it("should apply correct spacing when overriding spacing token", () => {
        const overrideTheme: V3_ThemeSpec = {
            ...MOCK_THEME,
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
        const overrideTheme: V3_ThemeSpec = {
            ...MOCK_THEME,
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
