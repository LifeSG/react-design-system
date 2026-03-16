import { render, screen } from "@testing-library/react";
import { CSSProperties } from "react";
import { ThemeProvider, useInheritedThemeVariables } from "../../src/theme";
import { setupThemeVariables } from "./setup";

const TestHookConsumer = ({ enabled }: { enabled: boolean }) => {
    const variables = useInheritedThemeVariables(enabled);

    return <div data-testid="theme-variables">{JSON.stringify(variables)}</div>;
};

describe("useInheritedThemeVariables", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    it("returns empty object when disabled", () => {
        render(
            <ThemeProvider style={{ "--fds-colour": "red" } as CSSProperties}>
                <TestHookConsumer enabled={false} />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent("{}");
    });

    it("returns inherited inline --fds* variables when enabled", () => {
        render(
            <ThemeProvider
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
                "--fds-colour": "red",
                "--fds-spacing": "16px",
            })
        );
    });

    it("recomputes values when enabled state changes", () => {
        const { rerender } = render(
            <ThemeProvider style={{ "--fds-colour": "red" } as CSSProperties}>
                <TestHookConsumer enabled={false} />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent("{}");

        rerender(
            <ThemeProvider style={{ "--fds-colour": "red" } as CSSProperties}>
                <TestHookConsumer enabled />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme-variables")).toHaveTextContent(
            JSON.stringify({
                "--fds-colour": "red",
            })
        );
    });
});
