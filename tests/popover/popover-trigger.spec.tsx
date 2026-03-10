import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useMemo, useRef } from "react";
import { PopoverTrigger } from "../../src/popover-v2";
import { ThemeProvider, useTheme } from "../../src/theme";
import { useApplyStyle } from "../../src/theme/utils";
import { V3_LifeSGTheme } from "../../src/v3_theme";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const Wrapper = () => {
    const ancestorRef = useRef<HTMLDivElement>(null);
    const { themeElement } = useTheme();
    const themeElementRef = useMemo(
        () => ({ current: themeElement }),
        [themeElement]
    );

    useApplyStyle(themeElementRef, {
        "--fds-unit-test-token": "value",
    });

    return (
        <div ref={ancestorRef}>
            <PopoverTrigger popoverContent={<div>Portal content</div>}>
                <button type="button">Open</button>
            </PopoverTrigger>
        </div>
    );
};

describe("PopoverTrigger floating theme propagation", () => {
    beforeEach(() => {
        globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
            cb(0);
            return 0;
        };
    });

    const renderWithProviders = (mode: "light" | "dark" = "light") => {
        return render(
            <ThemeProvider theme="lifesg" mode={mode}>
                <StyledComponentsThemeProvider
                    theme={{ ...V3_LifeSGTheme, colourMode: mode }}
                >
                    <Wrapper />
                </StyledComponentsThemeProvider>
            </ThemeProvider>
        );
    };

    it("copies theme data attributes and inherited inline variables to portal root", async () => {
        renderWithProviders("light");

        await userEvent.click(screen.getByRole("button", { name: "Open" }));

        await waitFor(() => {
            expect(screen.getByText("Portal content")).toBeInTheDocument();
        });

        const popover = screen.getByTestId("popover");
        const portalRoot = popover.parentElement;

        expect(portalRoot).toHaveAttribute("data-fds-theme", "lifesg");
        expect(portalRoot).toHaveAttribute("data-fds-theme-mode", "light");
        expect(
            portalRoot?.style.getPropertyValue("--fds-unit-test-token")
        ).toBe("value");
    });

    it("updates floating mode attribute when provider mode changes", async () => {
        const { rerender } = renderWithProviders("light");

        await userEvent.click(screen.getByRole("button", { name: "Open" }));

        await waitFor(() => {
            expect(screen.getByText("Portal content")).toBeInTheDocument();
        });

        rerender(
            <ThemeProvider theme="lifesg" mode="dark">
                <StyledComponentsThemeProvider
                    theme={{ ...V3_LifeSGTheme, colourMode: "dark" }}
                >
                    <Wrapper />
                </StyledComponentsThemeProvider>
            </ThemeProvider>
        );

        await waitFor(() => {
            const popover = screen.getByTestId("popover");
            const portalRoot = popover.parentElement;
            expect(portalRoot).toHaveAttribute("data-fds-theme-mode", "dark");
        });
    });
});
