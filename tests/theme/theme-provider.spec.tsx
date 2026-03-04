import { act, render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../src/theme";
import * as systemMode from "../../src/theme/theme-provider/system-colour-mode";
import * as breakpoint from "../../src/theme/theme-provider/breakpoint";

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
    Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: width,
    });

    window.dispatchEvent(new Event("resize"));
}

describe("ThemeProvider", () => {
    afterEach(() => {
        document.body.className = "";
        document.documentElement.removeAttribute("data-fds-theme");
        document.documentElement.removeAttribute("data-fds-theme-mode");
        jest.restoreAllMocks();
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

            expect(document.documentElement.dataset.fdsThemeMode).toBe("dark");
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

            expect(document.documentElement.dataset.fdsThemeMode).toBe("light");
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
