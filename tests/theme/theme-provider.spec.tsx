import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../src/theme";
import * as systemMode from "../../src/theme/theme-provider/system-colour-mode";

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
        const spy = jest.fn();

        render(
            <ThemeProvider initialTheme="lifesg" onThemeChange={spy}>
                <TestComponent />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText("Change Theme"));

        expect(spy).toHaveBeenCalledWith("bookingsg");

        expect(screen.getByTestId("theme")).toHaveTextContent("bookingsg");
        expect(document.documentElement.dataset.fdsTheme).toBe("bookingsg");
    });

    it("updates mode at runtime", () => {
        const spy = jest.fn();

        render(
            <ThemeProvider initialMode="light" onModeChange={spy}>
                <TestComponent />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText("Change Mode"));

        expect(spy).toHaveBeenCalledWith("dark");

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

    it("respects controlled mode prop", () => {
        const { rerender } = render(
            <ThemeProvider mode="light">
                <TestComponent />
            </ThemeProvider>
        );

        expect(document.documentElement.dataset.fdsThemeMode).toBe("light");

        rerender(
            <ThemeProvider mode="dark">
                <TestComponent />
            </ThemeProvider>
        );

        expect(document.documentElement.dataset.fdsThemeMode).toBe("dark");
    });

    it("listens to system mode changes when uncontrolled", () => {
        const mockListener = jest.fn();

        jest.spyOn(systemMode, "listenToSystemColourMode").mockImplementation(
            (cb) => {
                mockListener.mockImplementation(cb);
                return () => {};
            }
        );

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        mockListener("dark");

        expect(document.documentElement.dataset.fdsThemeMode).toBe("dark");
    });

    it("does NOT react to system changes when controlled", () => {
        const mockListener = jest.fn();

        jest.spyOn(systemMode, "listenToSystemColourMode").mockImplementation(
            (cb) => {
                mockListener.mockImplementation(cb);
                return () => {};
            }
        );

        render(
            <ThemeProvider mode="light">
                <TestComponent />
            </ThemeProvider>
        );

        mockListener("dark");

        expect(document.documentElement.dataset.fdsThemeMode).toBe("light");
    });
});
