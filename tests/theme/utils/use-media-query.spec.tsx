import { act, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "src/theme";
import { Breakpoint } from "src/theme/tokens/breakpoint";
import {
    type MediaQueryOptions,
    useMediaQuery,
} from "src/theme/utils/use-media-query";

import { createMatchMediaMock } from "../../_common/createMatchMediaMock";
import { getThemeVariablesStyle, setupThemeVariables } from "../setup";

const CoreConsumer = ({ options }: { options: MediaQueryOptions }) => {
    const result = useMediaQuery(options);

    return <div data-testid="result">{String(result)}</div>;
};

const renderWithTheme = (ui: React.ReactElement) => {
    return render(
        <ThemeProvider style={getThemeVariablesStyle()}>{ui}</ThemeProvider>
    );
};

describe("useMediaQuery", () => {
    let restoreMatchMedia: (() => void) | undefined;

    beforeEach(() => {
        setupThemeVariables();
        ({ restore: restoreMatchMedia } = createMatchMediaMock());
    });

    afterEach(() => {
        restoreMatchMedia?.();
        restoreMatchMedia = undefined;
    });

    it("builds a query from resolved widths", async () => {
        const { matchMedia } = createMatchMediaMock({ initialMatches: true });

        renderWithTheme(
            <CoreConsumer
                options={{
                    maxWidth: Breakpoint["lg-max"],
                    minWidth: Breakpoint["md-min"],
                }}
            />
        );

        await waitFor(() => {
            expect(matchMedia).toHaveBeenCalledWith(
                "(min-width: 481px) and (max-width: 1200px)"
            );
        });
        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("true");
        });
    });

    it("builds a query from resolved widths and custom clauses", async () => {
        const { matchMedia } = createMatchMediaMock({ initialMatches: true });

        renderWithTheme(
            <CoreConsumer
                options={{
                    maxWidth: Breakpoint["lg-max"],
                    minWidth: Breakpoint["md-min"],
                    clauses: [
                        { feature: "orientation", value: "landscape" },
                        { feature: "hover", value: true },
                    ],
                }}
            />
        );

        await waitFor(() => {
            expect(matchMedia).toHaveBeenCalledWith(
                "(min-width: 481px) and (max-width: 1200px) and (orientation: landscape) and (hover)"
            );
        });
        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("true");
        });
    });

    it("builds a query from custom clauses only", async () => {
        const { matchMedia } = createMatchMediaMock({ initialMatches: true });

        renderWithTheme(
            <CoreConsumer
                options={{
                    clauses: [
                        { feature: "orientation", value: "portrait" },
                        { feature: "height", value: "480px" },
                    ],
                }}
            />
        );

        await waitFor(() => {
            expect(matchMedia).toHaveBeenCalledWith(
                "(orientation: portrait) and (height: 480px)"
            );
        });
        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("true");
        });
    });

    it("drops invalid or disabled custom clauses", async () => {
        const { matchMedia } = createMatchMediaMock({ initialMatches: true });

        renderWithTheme(
            <CoreConsumer
                options={{
                    clauses: [
                        { feature: "orientation", value: "" },
                        { feature: "pointer", value: false },
                        { feature: "orientation", value: "landscape" },
                    ],
                }}
            />
        );

        await waitFor(() => {
            expect(matchMedia).toHaveBeenCalledWith("(orientation: landscape)");
        });
        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("true");
        });
    });

    it("updates when the media query match changes", async () => {
        const { mediaQueryLists } = createMatchMediaMock();

        renderWithTheme(
            <CoreConsumer options={{ minWidth: Breakpoint["md-min"] }} />
        );

        await waitFor(() => {
            expect(mediaQueryLists.has("(min-width: 481px)")).toBe(true);
        });

        const mediaQueryList = mediaQueryLists.get("(min-width: 481px)");

        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("false");
        });

        act(() => {
            mediaQueryList?.dispatch(true);
        });

        expect(screen.getByTestId("result").textContent).toBe("true");
    });

    it("updates listeners when options change between renders", async () => {
        const { mediaQueryLists } = createMatchMediaMock();

        const { rerender } = renderWithTheme(
            <CoreConsumer
                options={{
                    clauses: [{ feature: "orientation", value: "portrait" }],
                }}
            />
        );

        await waitFor(() => {
            expect(mediaQueryLists.has("(orientation: portrait)")).toBe(true);
        });

        rerender(
            <ThemeProvider style={getThemeVariablesStyle()}>
                <CoreConsumer
                    options={{
                        clauses: [
                            { feature: "orientation", value: "landscape" },
                        ],
                    }}
                />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(mediaQueryLists.has("(orientation: landscape)")).toBe(true);
        });
    });

    it("returns desktop-safe defaults when matchMedia is unavailable", async () => {
        Object.defineProperty(globalThis.window, "matchMedia", {
            configurable: true,
            value: undefined,
            writable: true,
        });

        const { rerender } = renderWithTheme(
            <CoreConsumer options={{ minWidth: Breakpoint["md-min"] }} />
        );

        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("true");
        });

        rerender(
            <ThemeProvider style={getThemeVariablesStyle()}>
                <CoreConsumer options={{ maxWidth: Breakpoint["sm-max"] }} />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("false");
        });
    });
});
