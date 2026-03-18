import { act, render, screen } from "@testing-library/react";
import type { CSSProperties } from "react";
import { ThemeProvider, useTheme } from "src/theme";
import * as breakpoint from "src/theme/theme-provider/breakpoint";
import * as systemMode from "src/theme/theme-provider/system-colour-mode";

import { setupThemeVariables } from "./setup";

const TestComponent = () => {
    const { theme, mode } = useTheme();

    return (
        <div>
            <span data-testid="theme">{theme}</span>
            <span data-testid="mode">{mode}</span>
        </div>
    );
};

function setWindowWidth(width: number) {
    Object.defineProperty(globalThis, "innerWidth", {
        writable: true,
        configurable: true,
        value: width,
    });

    globalThis.dispatchEvent(new Event("resize"));
}

describe("ThemeProvider", () => {
    beforeEach(() => {
        setupThemeVariables();
    });

    afterEach(() => {
        document.body.className = "";
        delete document.documentElement.dataset.fdsTheme;
        delete document.documentElement.dataset.fdsThemeMode;
        jest.restoreAllMocks();
    });

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

    describe("SYSTEM PREFERENCE", () => {
        it("listens to system mode changes when uncontrolled", () => {
            const mockListener = jest.fn();

            jest.spyOn(
                systemMode,
                "listenToSystemColourMode"
            ).mockImplementation((cb) => {
                mockListener.mockImplementation(cb);
                return () => {};
            });

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

            jest.spyOn(
                systemMode,
                "listenToSystemColourMode"
            ).mockImplementation((cb) => {
                mockListener.mockImplementation(cb);
                return () => {};
            });

            render(
                <ThemeProvider mode="light">
                    <TestComponent />
                </ThemeProvider>
            );

            mockListener("dark");

            expect(getWrapper()).toHaveAttribute(
                "data-fds-theme-mode",
                "light"
            );
        });
    });

    describe("BREAKPOINT", () => {
        it("does not crash when breakpoint listener setup returns undefined", () => {
            jest.spyOn(
                breakpoint,
                "setupBreakpointListener"
            ).mockImplementation(() => undefined);

            expect(() =>
                render(
                    <ThemeProvider>
                        <div>test</div>
                    </ThemeProvider>
                )
            ).not.toThrow();
        });

        it("applies correct breakpoint classes on initial load", () => {
            setWindowWidth(500); // md range (481–768)

            render(
                <ThemeProvider>
                    <TestComponent />
                </ThemeProvider>
            );

            const body = document.body;

            expect(body.classList.contains("fds-breakpoint-md")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-max")).toBe(true);
        });

        it("updates breakpoint classes on resize", () => {
            setWindowWidth(500); // md range (481–768)

            render(
                <ThemeProvider>
                    <TestComponent />
                </ThemeProvider>
            );

            const body = document.body;

            expect(body.classList.contains("fds-breakpoint-md")).toBe(true);

            // Resize to lg range (769–1200)
            setWindowWidth(900);

            expect(body.classList.contains("fds-breakpoint-lg")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-lg-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-lg-max")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md")).toBe(false);
            expect(body.classList.contains("fds-breakpoint-md-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-max")).toBe(
                false
            );
            expect(body.classList.contains("fds-breakpoint-sm-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-sm-max")).toBe(
                false
            );
            expect(body.classList.contains("fds-breakpoint-xs-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-xs-max")).toBe(
                false
            );
            expect(body.classList.contains("fds-breakpoint-xxs-min")).toBe(
                true
            );
            expect(body.classList.contains("fds-breakpoint-xxs-max")).toBe(
                false
            );
        });

        it("applies only min and base class for xxl", () => {
            setWindowWidth(1600); // xxl (1441+)

            render(
                <ThemeProvider>
                    <TestComponent />
                </ThemeProvider>
            );

            const body = document.body;

            expect(body.classList.contains("fds-breakpoint-xxl")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-xxl-min")).toBe(
                true
            );
            expect(body.classList.contains("fds-breakpoint-xxl-max")).toBe(
                false
            );
        });

        it("persist breakpoint when still within range", () => {
            setWindowWidth(500); // md range (481–768)

            render(
                <ThemeProvider>
                    <TestComponent />
                </ThemeProvider>
            );

            const body = document.body;

            expect(body.classList.contains("fds-breakpoint-md")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-max")).toBe(true);

            setWindowWidth(600); // md range (481–768)

            expect(body.classList.contains("fds-breakpoint-md")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-min")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-max")).toBe(true);
        });

        it("falls back to root token value when a breakpoint token is missing on theme node", () => {
            setWindowWidth(1000);

            document.documentElement.style.setProperty(
                "--fds-breakpoint-md-max",
                "1000px"
            );

            render(
                <ThemeProvider
                    style={
                        {
                            "--fds-breakpoint-xl-min": "1201px",
                            "--fds-breakpoint-xl-max": "1440px",
                            "--fds-breakpoint-xxl-min": "1441px",
                        } as CSSProperties
                    }
                >
                    <TestComponent />
                </ThemeProvider>
            );

            const body = document.body;
            expect(body.classList.contains("fds-breakpoint-md")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-md-max")).toBe(true);

            // Validate exact fallback boundary value from root token
            setWindowWidth(1001);
            expect(body.classList.contains("fds-breakpoint-md")).toBe(false);
            expect(body.classList.contains("fds-breakpoint-md-max")).toBe(
                false
            );
            expect(body.classList.contains("fds-breakpoint-lg")).toBe(true);
            expect(body.classList.contains("fds-breakpoint-lg-max")).toBe(true);
        });

        it("does not remove non-breakpoint classes", () => {
            document.body.classList.add("random-class");

            setWindowWidth(500);

            render(
                <ThemeProvider>
                    <TestComponent />
                </ThemeProvider>
            );

            expect(document.body.classList.contains("random-class")).toBe(true);
        });
    });
});
