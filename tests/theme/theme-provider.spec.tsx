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
    const getWrapper = () =>
        document.querySelector<HTMLElement>("[data-fds-theme]");

    it("applies theme and mode", () => {
        render(
            <ThemeProvider theme="lifesg" mode="light">
                <TestComponent />
            </ThemeProvider>
        );

        expect(screen.getByTestId("theme")).toHaveTextContent("lifesg");
        expect(screen.getByTestId("mode")).toHaveTextContent("light");

        const wrapper = getWrapper();
        expect(wrapper).toHaveAttribute("data-fds-theme", "lifesg");
        expect(wrapper).toHaveAttribute("data-fds-theme-mode", "light");
    });

    it("passes className and style to theme wrapper", () => {
        render(
            <ThemeProvider
                theme="lifesg"
                className="custom-theme-root"
                style={{ minHeight: "24px" }}
            >
                <TestComponent />
            </ThemeProvider>
        );

        const wrapper = getWrapper();
        expect(wrapper).toHaveClass("custom-theme-root");
        expect(wrapper).toHaveStyle({ minHeight: "24px" });
    });

    it("respects theme prop", () => {
        const { rerender } = render(
            <ThemeProvider theme="lifesg">
                <TestComponent />
            </ThemeProvider>
        );

        expect(getWrapper()).toHaveAttribute("data-fds-theme", "lifesg");

        act(() => {
            rerender(
                <ThemeProvider theme="bookingsg">
                    <TestComponent />
                </ThemeProvider>
            );
        });

        expect(getWrapper()).toHaveAttribute("data-fds-theme", "bookingsg");
    });

    it("respects mode prop", () => {
        const { rerender } = render(
            <ThemeProvider mode="light">
                <TestComponent />
            </ThemeProvider>
        );

        expect(getWrapper()).toHaveAttribute("data-fds-theme-mode", "light");

        act(() => {
            rerender(
                <ThemeProvider mode="dark">
                    <TestComponent />
                </ThemeProvider>
            );
        });

        expect(getWrapper()).toHaveAttribute("data-fds-theme-mode", "dark");
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

        expect(getWrapper()).toHaveAttribute("data-fds-theme-mode", "dark");
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

        expect(getWrapper()).toHaveAttribute("data-fds-theme-mode", "light");
    });

    it("supports nested theming", () => {
        render(
            <ThemeProvider theme="lifesg" mode="light">
                <ThemeProvider theme="bookingsg" mode="dark">
                    <TestComponent />
                </ThemeProvider>
            </ThemeProvider>
        );

        const wrappers = document.querySelectorAll("[data-fds-theme]");
        expect(wrappers).toHaveLength(2);

        expect(wrappers[0]).toHaveAttribute("data-fds-theme", "lifesg");
        expect(wrappers[0]).toHaveAttribute("data-fds-theme-mode", "light");

        expect(wrappers[1]).toHaveAttribute("data-fds-theme", "bookingsg");
        expect(wrappers[1]).toHaveAttribute("data-fds-theme-mode", "dark");
    });
});
