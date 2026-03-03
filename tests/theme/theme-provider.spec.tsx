import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../src/theme";

const TestComponent = () => {
    const { theme, mode, setTheme, setMode } = useTheme();

    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="mode">{mode}</span>

            <button onClick={() => setTheme("bookingsg")}>Change Theme</button>

            <button onClick={() => setMode("dark")}>Change Mode</button>
        </div>
    );
};

describe("ThemeProvider", () => {
    afterEach(() => {
        document.documentElement.removeAttribute("data-fds-theme");
        document.documentElement.removeAttribute("data-fds-theme-mode");
    });

    it("applies initial theme and mode", () => {
        render(
            <ThemeProvider initialTheme="lifesg" initialMode="light">
                <TestComponent />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme")).toHaveTextContent("lifesg");
        expect(screen.getByTestId("mode")).toHaveTextContent("light");

        expect(document.documentElement.dataset.fdsTheme).toBe("lifesg");
        expect(document.documentElement.dataset.fdsThemeMode).toBe("light");
    });

    it("updates theme at runtime", () => {
        render(
            <ThemeProvider initialTheme="lifesg">
                <TestComponent />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText("Change Theme"));

        expect(screen.getByTestId("theme")).toHaveTextContent("bookingsg");
        expect(document.documentElement.dataset.fdsTheme).toBe("bookingsg");
    });

    it("updates mode at runtime", () => {
        render(
            <ThemeProvider initialMode="light">
                <TestComponent />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText("Change Mode"));

        expect(screen.getByTestId("mode")).toHaveTextContent("dark");
        expect(document.documentElement.dataset.fdsThemeMode).toBe("dark");
    });

    it("respects controlled theme prop", () => {
        const { rerender } = render(
            <ThemeProvider theme="lifesg">
                <TestComponent />
            </ThemeProvider>
        );

        expect(document.documentElement.dataset.fdsTheme).toBe("lifesg");

        rerender(
            <ThemeProvider theme="bookingsg">
                <TestComponent />
            </ThemeProvider>
        );

        expect(document.documentElement.dataset.fdsTheme).toBe("bookingsg");
    });
});
