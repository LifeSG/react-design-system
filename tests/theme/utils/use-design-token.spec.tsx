import { render, screen, waitFor } from "@testing-library/react";
import type { CSSVariableString } from "src/theme";
import { ThemeProvider } from "src/theme";
import {
    isTokenWithPrefix,
    useDesignToken,
    useResolvedTokenValue,
} from "src/theme/utils";

import { setupThemeVariables } from "../setup";

const TestComponent = ({ tokenName }: { tokenName: CSSVariableString }) => {
    const value = useDesignToken(tokenName);
    return <div data-testid="token-value">{value}</div>;
};

describe("useDesignToken", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    it("fetches and returns the CSS variable value", async () => {
        render(
            <ThemeProvider>
                <TestComponent tokenName="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "481px"
            );
        });
    });

    it("updates value when tokenName changes", async () => {
        const { rerender } = render(
            <ThemeProvider>
                <TestComponent tokenName="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "481px"
            );
        });

        rerender(
            <ThemeProvider>
                <TestComponent tokenName="var(--fds-breakpoint-lg-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "769px"
            );
        });
    });

    it("updates value when theme changes", async () => {
        const { rerender } = render(
            <ThemeProvider theme="lifesg" mode="light">
                <TestComponent tokenName="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "481px"
            );
        });

        // Simulate theme change by updating the CSS variable value
        document.documentElement.style.setProperty(
            "--fds-breakpoint-md-min",
            "482px",
            "important"
        );

        rerender(
            <ThemeProvider theme="bookingsg" mode="light">
                <TestComponent tokenName="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        // Should still work with theme change
        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "482px"
            );
        });
    });

    it("updates value when mode changes", async () => {
        const { rerender } = render(
            <ThemeProvider theme="lifesg" mode="light">
                <TestComponent tokenName="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "481px"
            );
        });

        // Simulate mode change by updating the CSS variable value
        document.documentElement.style.setProperty(
            "--fds-breakpoint-md-min",
            "482px",
            "important"
        );

        rerender(
            <ThemeProvider theme="lifesg" mode="dark">
                <TestComponent tokenName="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        // Hook should re-run due to mode change in dependency array and get the updated value
        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "482px"
            );
        });
    });

    it("returns different CSS variable values", async () => {
        const { rerender } = render(
            <ThemeProvider>
                <TestComponent tokenName="var(--fds-breakpoint-xxs-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent("0");
        });

        rerender(
            <ThemeProvider>
                <TestComponent tokenName="var(--fds-breakpoint-md-max)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("token-value")).toHaveTextContent(
                "768px"
            );
        });
    });
});

const ResolvedValueTestComponent = ({
    value,
}: {
    value: CSSVariableString | string | number | undefined;
}) => {
    const resolved = useResolvedTokenValue({
        value,
        fallback: "var(--fds-breakpoint-md-min)",
        isToken: (candidate): candidate is CSSVariableString =>
            isTokenWithPrefix<CSSVariableString>(candidate, "var(--fds-"),
        normalizeCustom: (custom) => String(custom),
    });

    return <div data-testid="resolved-value">{resolved}</div>;
};

describe("useResolvedTokenValue", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    it("resolves token values", async () => {
        render(
            <ThemeProvider>
                <ResolvedValueTestComponent value="var(--fds-breakpoint-md-min)" />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("resolved-value")).toHaveTextContent(
                "481px"
            );
        });
    });

    it("returns fallback when value is empty", async () => {
        render(
            <ThemeProvider>
                <ResolvedValueTestComponent value={undefined} />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("resolved-value")).toHaveTextContent(
                "481px"
            );
        });
    });

    it("returns custom values as-is after normalization", async () => {
        render(
            <ThemeProvider>
                <ResolvedValueTestComponent value={12} />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("resolved-value")).toHaveTextContent(
                "12"
            );
        });
    });
});
