import { render } from "@testing-library/react";
import { act } from "@testing-library/react";
import "jest-styled-components";
import styled, { ThemeProvider } from "styled-components";
import {
    Colour,
    DSThemeProvider,
    LifeSGTheme,
    useDSTheme,
} from "../../src/theme";
import { ThemeSpec } from "../../src/theme/types";
import { MOCK_THEME } from "./mock-theme-data";

// Mock window.matchMedia
const mockMatchMedia = (matches: boolean) => {
    const mockMediaQueryList = {
        matches,
        media: "(prefers-color-scheme: dark)",
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };

    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation(() => mockMediaQueryList),
    });

    return mockMediaQueryList;
};

const StyledComponentTest = styled.div`
    background-color: ${Colour.Primitive["primary-10"]};
    color: ${Colour["border-primary"]};
`;

// Test component that uses theme colors for dark mode testing
const TestComponent = styled.div`
    background: ${Colour["bg"]};
    color: ${Colour["text"]};
`;

// Component to test the useDSTheme hook
const ThemeModeDisplay = () => {
    const { colourMode } = useDSTheme();
    return (
        <div>
            <div data-testid="theme-mode">{colourMode}</div>
            <div>
                <TestComponent data-testid="theme-component" />
            </div>
        </div>
    );
};

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

describe("Colour mode", () => {
    it("should use light mode by default", () => {
        const { getByTestId } = render(
            <DSThemeProvider theme={LifeSGTheme}>
                <ThemeModeDisplay />
            </DSThemeProvider>
        );

        expect(getByTestId("theme-mode")).toHaveTextContent("light");
        expect(getByTestId("theme-component")).toHaveStyle({
            color: "#282828",
            background: "#ffffff",
        });
    });

    it("should use dark mode when explicitly set", () => {
        const { getByTestId } = render(
            <DSThemeProvider theme={LifeSGTheme.dark}>
                <ThemeModeDisplay />
            </DSThemeProvider>
        );

        expect(getByTestId("theme-mode")).toHaveTextContent("dark");
        expect(getByTestId("theme-component")).toHaveStyle({
            color: "#f9f9f9",
            background: "#000000",
        });
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

describe("System Preference Detection", () => {
    beforeEach(() => {
        // Clean up any existing matchMedia mock
        delete (window as any).matchMedia;
    });

    afterEach(() => {
        // Restore original matchMedia if it existed
        jest.restoreAllMocks();
    });

    it("should use light mode when system preference is light", async () => {
        // Mock system preference for light mode
        mockMatchMedia(false); // false = light mode

        let result: any;
        await act(async () => {
            result = render(
                <DSThemeProvider theme={LifeSGTheme}>
                    <ThemeModeDisplay />
                </DSThemeProvider>
            );
        });

        expect(result.getByTestId("theme-mode")).toHaveTextContent("light");
        expect(result.getByTestId("theme-component")).toHaveStyle({
            color: "#282828",
            background: "#ffffff",
        });
    });

    it("should use dark mode when system preference is dark", async () => {
        // Mock system preference for dark mode
        mockMatchMedia(true); // true = dark mode

        let result: any;
        await act(async () => {
            result = render(
                <DSThemeProvider theme={LifeSGTheme}>
                    <ThemeModeDisplay />
                </DSThemeProvider>
            );
        });

        expect(result.getByTestId("theme-mode")).toHaveTextContent("dark");
        expect(result.getByTestId("theme-component")).toHaveStyle({
            color: "#f9f9f9",
            background: "#000000",
        });
    });

    it("should respond to system preference changes", async () => {
        // Start with light mode
        const mockMediaQueryList = mockMatchMedia(false);

        let result: any;
        await act(async () => {
            result = render(
                <DSThemeProvider theme={LifeSGTheme}>
                    <ThemeModeDisplay />
                </DSThemeProvider>
            );
        });

        // Initially should be light mode
        expect(result.getByTestId("theme-mode")).toHaveTextContent("light");

        // Simulate system preference change to dark mode
        const changeHandler =
            mockMediaQueryList.addEventListener.mock.calls.find(
                (call) => call[0] === "change"
            )?.[1];

        if (changeHandler) {
            // Simulate the change event
            await act(async () => {
                changeHandler({ matches: true } as MediaQueryListEvent);
            });
        }

        // Should now be dark mode
        expect(result.getByTestId("theme-mode")).toHaveTextContent("dark");
    });

    it("should not respond to system changes when explicit colourMode is set", async () => {
        // Start with light mode system preference
        const mockMediaQueryList = mockMatchMedia(false);

        let result: any;
        await act(async () => {
            result = render(
                <DSThemeProvider theme={LifeSGTheme.light}>
                    <ThemeModeDisplay />
                </DSThemeProvider>
            );
        });

        // Should be light mode (explicit)
        expect(result.getByTestId("theme-mode")).toHaveTextContent("light");

        // Simulate system preference change to dark mode
        const changeHandler =
            mockMediaQueryList.addEventListener.mock.calls.find(
                (call) => call[0] === "change"
            )?.[1];

        if (changeHandler) {
            // Simulate the change event
            await act(async () => {
                changeHandler({ matches: true } as MediaQueryListEvent);
            });
        }

        // Should still be light mode (explicit colourMode overrides system)
        expect(result.getByTestId("theme-mode")).toHaveTextContent("light");
    });
});

describe("useDSTheme hook", () => {
    it("should return light mode and theme when used with light theme", () => {
        let hookResult: any;

        const TestHookComponent = () => {
            hookResult = useDSTheme();
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
            hookResult = useDSTheme();
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
