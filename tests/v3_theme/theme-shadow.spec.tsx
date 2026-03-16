import "jest-styled-components";

import { render } from "@testing-library/react";
import { V3_Shadow } from "src";
import type { V3_ThemeSpec } from "src/v3_theme/types";
import styled, { ThemeProvider } from "styled-components";

import { MOCK_THEME } from "./mock-theme-data";

const ShadowTestComponent = styled.div`
    box-shadow: ${V3_Shadow["md-subtle"]};
`;

describe("Shadow Theming Test", () => {
    it("should apply correct box-shadow based on the theme", () => {
        const { container } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ShadowTestComponent />
            </ThemeProvider>
        );

        // Check that the shadow value is generated with CSS relative color syntax
        expect(container.firstChild).toHaveStyleRule(
            "box-shadow",
            expect.stringMatching(/rgba\(from .+ r g b \/ \d+%\)/)
        );
    });

    it("should apply correct box-shadow when overriding shadow token", () => {
        const customShadowFunction = () => "0 8px 16px rgba(0, 0, 0, 0.15)";

        const overrideTheme: V3_ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                shadow: {
                    "md-subtle": customShadowFunction,
                },
            },
        };

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <ShadowTestComponent />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "box-shadow",
            "0 8px 16px rgba(0, 0, 0, 0.15)"
        );
    });

    it("should apply correct box-shadow when overriding multiple shadow tokens", () => {
        const ShadowTestComponent2 = styled.div`
            box-shadow: ${V3_Shadow["sm-subtle"]};
            filter: drop-shadow(${V3_Shadow["lg-strong"]});
        `;

        const customSmFunction = () => "0 2px 4px rgba(0, 0, 0, 0.1)";
        const customLgFunction = () => "0 12px 20px rgba(0, 0, 0, 0.15)";

        const overrideTheme: V3_ThemeSpec = {
            ...MOCK_THEME,
            overrides: {
                shadow: {
                    "sm-subtle": customSmFunction,
                    "lg-strong": customLgFunction,
                },
            },
        };

        const { container } = render(
            <ThemeProvider theme={overrideTheme}>
                <ShadowTestComponent2 />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule(
            "box-shadow",
            "0 2px 4px rgba(0, 0, 0, 0.1)"
        );

        expect(container.firstChild).toHaveStyleRule(
            "filter",
            "drop-shadow(0 12px 20px rgba(0, 0, 0, 0.15))"
        );
    });

    it("should provide all shadow token variants", () => {
        // Test that all shadow tokens are accessible and are functions
        expect(typeof V3_Shadow["xs-subtle"]).toBe("function");
        expect(typeof V3_Shadow["xs-strong"]).toBe("function");
        expect(typeof V3_Shadow["xs-focus-strong"]).toBe("function");
        expect(typeof V3_Shadow["xs-error-strong"]).toBe("function");
        expect(typeof V3_Shadow["sm-subtle"]).toBe("function");
        expect(typeof V3_Shadow["sm-strong"]).toBe("function");
        expect(typeof V3_Shadow["md-subtle"]).toBe("function");
        expect(typeof V3_Shadow["md-strong"]).toBe("function");
        expect(typeof V3_Shadow["lg-subtle"]).toBe("function");
        expect(typeof V3_Shadow["lg-strong"]).toBe("function");
    });

    it("should handle semantic shadow tokens correctly", () => {
        const PrimaryShadowComponent = styled.div`
            box-shadow: ${V3_Shadow["xs-focus-strong"]};
        `;

        const ErrorShadowComponent = styled.div`
            box-shadow: ${V3_Shadow["xs-error-strong"]};
        `;

        const { container: primaryContainer } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <PrimaryShadowComponent />
            </ThemeProvider>
        );

        const { container: errorContainer } = render(
            <ThemeProvider theme={MOCK_THEME}>
                <ErrorShadowComponent />
            </ThemeProvider>
        );

        // Check that semantic shadows use CSS relative color syntax
        expect(primaryContainer.firstChild).toHaveStyleRule(
            "box-shadow",
            expect.stringMatching(/rgba\(from .+ r g b \/ \d+%\)/)
        );

        expect(errorContainer.firstChild).toHaveStyleRule(
            "box-shadow",
            expect.stringMatching(/rgba\(from .+ r g b \/ \d+%\)/)
        );
    });
});
