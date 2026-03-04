import { act, render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../src/theme";
import * as systemMode from "../../src/theme/theme-provider/system-colour-mode";

const TestComponent = () => {
    const { theme, mode } = useTheme();

    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="mode">{mode}</span>
        </div>
    );
};

describe("ThemeProvider", () => {
    afterEach(() => {
        document.documentElement.removeAttribute("data-fds-theme");
        document.documentElement.removeAttribute("data-fds-theme-mode");
    });

    it("applies theme and mode", () => {
        render(
            <ThemeProvider theme="lifesg" mode="light">
                <TestComponent />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme")).toHaveTextContent("lifesg");
        expect(screen.getByTestId("mode")).toHaveTextContent("light");

        expect(document.documentElement.dataset.fdsTheme).toBe("lifesg");
        expect(document.documentElement.dataset.fdsThemeMode).toBe("light");
    });

    it("respects theme prop", () => {
        const { rerender } = render(
            <ThemeProvider theme="lifesg">
                <TestComponent />
            </ThemeProvider>
        );

        expect(document.documentElement.dataset.fdsTheme).toBe("lifesg");

        act(() => {
            rerender(
                <ThemeProvider theme="bookingsg">
                    <TestComponent />
                </ThemeProvider>
            );
        });

        expect(document.documentElement.dataset.fdsTheme).toBe("bookingsg");
    });

    it("respects mode prop", () => {
        const { rerender } = render(
            <ThemeProvider mode="light">
                <TestComponent />
            </ThemeProvider>
        );

        expect(document.documentElement.dataset.fdsThemeMode).toBe("light");

        act(() => {
            rerender(
                <ThemeProvider mode="dark">
                    <TestComponent />
                </ThemeProvider>
            );
        });

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

        act(() => {
            mockListener("dark");
        });

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

        act(() => {
            mockListener("dark");
        });

        expect(document.documentElement.dataset.fdsThemeMode).toBe("light");
    });
});
