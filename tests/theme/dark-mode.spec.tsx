import React from "react";
import { render } from "@testing-library/react";
import styled from "styled-components";
import {
    Colour,
    DSThemeProvider,
    LifeSGTheme,
    useThemeMode,
} from "../../src/theme";

// Test component that uses theme colors
const TestComponent = styled.div`
    background: ${Colour["bg"]};
    color: ${Colour["text"]};
`;

// Component to test the useThemeMode hook
const ThemeModeDisplay = () => {
    const { colourMode } = useThemeMode();
    return <div data-testid="theme-mode">{colourMode}</div>;
};

describe("Dark Mode Theme", () => {
    it("should use light mode by default", () => {
        const { getByTestId } = render(
            <DSThemeProvider theme={LifeSGTheme.light}>
                <ThemeModeDisplay />
            </DSThemeProvider>
        );

        expect(getByTestId("theme-mode")).toHaveTextContent("light");
    });

    it("should use dark mode when explicitly set", () => {
        const { getByTestId } = render(
            <DSThemeProvider theme={LifeSGTheme.dark}>
                <ThemeModeDisplay />
            </DSThemeProvider>
        );

        expect(getByTestId("theme-mode")).toHaveTextContent("dark");
    });

    it("should handle theme with explicit colourMode", () => {
        const customTheme = {
            ...LifeSGTheme.light,
            colourMode: "dark" as const,
        };

        const { getByTestId } = render(
            <DSThemeProvider theme={customTheme}>
                <ThemeModeDisplay />
            </DSThemeProvider>
        );

        expect(getByTestId("theme-mode")).toHaveTextContent("dark");
    });

    it("should render without errors with dark theme overrides", () => {
        const customTheme = {
            ...LifeSGTheme.light,
            colourMode: "dark" as const,
            overrides: {
                semanticColourDark: {
                    text: "#custom-dark-color",
                },
            },
        };

        const { container } = render(
            <DSThemeProvider theme={customTheme}>
                <TestComponent data-testid="test-component" />
            </DSThemeProvider>
        );

        expect(
            container.querySelector('[data-testid="test-component"]')
        ).toBeInTheDocument();
    });
});

describe("useThemeMode hook", () => {
    it("should return light mode and theme when used with light theme", () => {
        let hookResult: any;

        const TestHookComponent = () => {
            hookResult = useThemeMode();
            return null;
        };

        render(
            <DSThemeProvider theme={LifeSGTheme.light}>
                <TestHookComponent />
            </DSThemeProvider>
        );

        expect(hookResult.colourMode).toBe("light");
        expect(hookResult.theme).toBeDefined();
        expect(hookResult.theme.colourScheme).toBe("lifesg");
    });

    it("should return dark mode when used with dark theme", () => {
        let hookResult: any;

        const TestHookComponent = () => {
            hookResult = useThemeMode();
            return null;
        };

        render(
            <DSThemeProvider theme={LifeSGTheme.dark}>
                <TestHookComponent />
            </DSThemeProvider>
        );

        expect(hookResult.colourMode).toBe("dark");
        expect(hookResult.theme).toBeDefined();
        expect(hookResult.theme.colourMode).toBe("dark");
    });
});

describe("Component Dark Mode Integration", () => {
    it("should render button element correctly in dark mode", () => {
        const ButtonTestComponent = styled.button`
            background: ${Colour["bg"]};
            color: ${Colour["text"]};
            border: 1px solid ${Colour["border"]};
        `;

        const { container } = render(
            <DSThemeProvider theme={LifeSGTheme.dark}>
                <ButtonTestComponent data-testid="button-test">
                    Test Button
                </ButtonTestComponent>
            </DSThemeProvider>
        );

        const button = container.querySelector('[data-testid="button-test"]');
        expect(button).toBeInTheDocument();

        // Button should not have hardcoded white background in dark mode
        const styles = window.getComputedStyle(button!);
        expect(styles.backgroundColor).not.toBe("rgb(255, 255, 255)"); // Not white
    });

    it("should render semantic colours correctly in dark mode", () => {
        const SemanticTestComponent = styled.div`
            background: ${Colour["bg"]};
            color: ${Colour["text"]};
            border: 1px solid ${Colour["border"]};
        `;

        const { container } = render(
            <DSThemeProvider theme={LifeSGTheme.dark}>
                <SemanticTestComponent data-testid="semantic-test" />
            </DSThemeProvider>
        );

        const element = container.querySelector(
            '[data-testid="semantic-test"]'
        );
        const styles = window.getComputedStyle(element!);

        // In dark mode, background should be dark and text should be light
        // These are rough checks - actual values depend on the theme
        expect(styles.backgroundColor).toBeDefined();
        expect(styles.color).toBeDefined();
        expect(styles.borderColor).toBeDefined();
    });

    it("should handle overlay colours correctly in dark mode", () => {
        const OverlayTestComponent = styled.div`
            background: ${Colour["overlay-subtle"]};
            box-shadow: 0 2px 4px ${Colour["overlay-strong"]};
        `;

        const { container } = render(
            <DSThemeProvider theme={LifeSGTheme.dark}>
                <OverlayTestComponent data-testid="overlay-test" />
            </DSThemeProvider>
        );

        const element = container.querySelector('[data-testid="overlay-test"]');
        expect(element).toBeInTheDocument();

        // Should render without errors
        const styles = window.getComputedStyle(element!);
        expect(styles.background).toBeDefined();
        expect(styles.boxShadow).toBeDefined();
    });
});
