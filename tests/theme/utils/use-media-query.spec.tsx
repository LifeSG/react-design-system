import { act, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "src/theme";
import { Breakpoint } from "src/theme/tokens/breakpoint";
import type { MediaQueryOptions } from "src/theme/utils/use-media-query";
import {
    useMediaQuery,
    useResolvedBreakpointToken,
} from "src/theme/utils/use-media-query";

import { createMatchMediaMock } from "../../_common";
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
    let matchMediaMock: ReturnType<typeof createMatchMediaMock>;

    beforeEach(() => {
        setupThemeVariables();
        matchMediaMock = createMatchMediaMock();
    });

    afterEach(() => {
        matchMediaMock.restore();
    });

    it("builds a query from resolved widths", async () => {
        const { matchMedia } = matchMediaMock.mock({ initialMatches: true });

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
        const { matchMedia } = matchMediaMock.mock({ initialMatches: true });

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
        const { matchMedia } = matchMediaMock.mock({ initialMatches: true });

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
        const { matchMedia } = matchMediaMock.mock({ initialMatches: true });

        renderWithTheme(
            <CoreConsumer
                options={{
                    clauses: [
                        { feature: "orientation", value: "" },
                        { feature: "pointer", value: false },
                        { feature: "pointer", value: undefined },
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
        const { mediaQueryLists } = matchMediaMock.mock();

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
        const { mediaQueryLists } = matchMediaMock.mock();

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

describe("useResolvedBreakpointToken", () => {
    type Token = Parameters<typeof useResolvedBreakpointToken>[0];

    const TestComponent = ({ token }: { token: Token }) => {
        const resolvedValue = useResolvedBreakpointToken(token);
        return <div data-testid="resolved">{resolvedValue}</div>;
    };

    it("resolves breakpoint tokens to their corresponding CSS variable values", () => {
        render(
            <ThemeProvider
                style={
                    {
                        "--fds-breakpoint-md-min": "100px",
                    } as React.CSSProperties
                }
            >
                <TestComponent token={Breakpoint["md-min"]} />
            </ThemeProvider>
        );

        expect(screen.getByTestId("resolved").textContent).toBe("100px");
    });

    it.each`
        variable                 | expected
        ${Breakpoint["xxs-min"]} | ${"0"}
        ${Breakpoint["xxs-max"]} | ${"320px"}
        ${Breakpoint["xs-min"]}  | ${"321px"}
        ${Breakpoint["xs-max"]}  | ${"375px"}
        ${Breakpoint["sm-min"]}  | ${"376px"}
        ${Breakpoint["sm-max"]}  | ${"480px"}
        ${Breakpoint["md-min"]}  | ${"481px"}
        ${Breakpoint["md-max"]}  | ${"768px"}
        ${Breakpoint["lg-min"]}  | ${"769px"}
        ${Breakpoint["lg-max"]}  | ${"1200px"}
        ${Breakpoint["xl-min"]}  | ${"1201px"}
        ${Breakpoint["xl-max"]}  | ${"1440px"}
        ${Breakpoint["xxl-min"]} | ${"1441px"}
    `(
        "returns a default if $variable token cannot be resolved",
        ({ variable, expected }) => {
            render(
                <ThemeProvider>
                    <TestComponent token={variable} />
                </ThemeProvider>
            );

            expect(screen.getByTestId("resolved").textContent).toBe(expected);
        }
    );
});
