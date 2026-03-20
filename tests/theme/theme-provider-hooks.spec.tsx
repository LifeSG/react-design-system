import { render, screen } from "@testing-library/react";
import type { CSSProperties } from "react";
import { ThemeProvider, useInheritedThemeScope } from "src/theme";

import { setupThemeVariables } from "./setup";

const TestHookConsumer = ({ enabled }: { enabled: boolean }) => {
    const inheritedTheme = useInheritedThemeScope(enabled);

    return (
        <div data-testid="theme-variables">
            {JSON.stringify(inheritedTheme)}
        </div>
    );
};

describe("useInheritedThemeScope", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    it("returns empty object when disabled", () => {
        render(
            <ThemeProvider
                mode="light"
                style={{ "--fds-colour": "red" } as CSSProperties}
            >
                <TestHookConsumer enabled={false} />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent(
            JSON.stringify({
                themeProps: {},
                themeStyle: {},
            })
        );
    });

    it("returns inherited inline --fds* variables when enabled", () => {
        render(
            <ThemeProvider
                mode="light"
                style={
                    {
                        "--fds-colour": "red",
                        "--fds-spacing": "16px",
                        "--not-fds": "blue",
                    } as CSSProperties
                }
            >
                <TestHookConsumer enabled />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent(
            JSON.stringify({
                themeProps: {
                    "data-fds-theme": "lifesg",
                    "data-fds-theme-mode": "light",
                },
                themeStyle: {
                    "--fds-colour": "red",
                    "--fds-spacing": "16px",
                },
            })
        );
    });

    it("recomputes values when enabled state changes", () => {
        const { rerender } = render(
            <ThemeProvider
                mode="light"
                style={{ "--fds-colour": "red" } as CSSProperties}
            >
                <TestHookConsumer enabled={false} />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent(
            JSON.stringify({
                themeProps: {},
                themeStyle: {},
            })
        );

        rerender(
            <ThemeProvider
                mode="light"
                style={{ "--fds-colour": "red" } as CSSProperties}
            >
                <TestHookConsumer enabled />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent(
            JSON.stringify({
                themeProps: {
                    "data-fds-theme": "lifesg",
                    "data-fds-theme-mode": "light",
                },
                themeStyle: {
                    "--fds-colour": "red",
                },
            })
        );
    });
});
