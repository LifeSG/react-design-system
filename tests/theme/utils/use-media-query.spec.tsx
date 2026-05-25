import { act, render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "src/theme";
import { Breakpoint } from "src/theme/tokens/breakpoint";
import type { BreakpointCSSVariableString } from "src/theme/types";
import {
    type MediaQueryOptions,
    useMediaQuery,
    useSafeMaxWidthMediaQuery,
} from "src/theme/utils/use-media-query";

import { getThemeVariablesStyle, setupThemeVariables } from "../setup";

type MockMediaQueryList = {
    addEventListener: jest.Mock;
    dispatch: (matches: boolean) => void;
    matches: boolean;
    media: string;
    removeEventListener: jest.Mock;
};

const originalMatchMedia = globalThis.window.matchMedia;

const createMatchMediaMock = (initialMatches = false) => {
    const mediaQueryLists = new Map<string, MockMediaQueryList>();
    const matchMedia = jest.fn((query: string) => {
        const existingMediaQueryList = mediaQueryLists.get(query);

        if (existingMediaQueryList) {
            return existingMediaQueryList;
        }

        let changeListener: ((event: MediaQueryListEvent) => void) | undefined;

        const mediaQueryList: MockMediaQueryList = {
            addEventListener: jest.fn(
                (
                    eventName: string,
                    listener: (event: MediaQueryListEvent) => void
                ) => {
                    if (eventName === "change") {
                        changeListener = listener;
                    }
                }
            ),
            dispatch: (matches: boolean) => {
                mediaQueryList.matches = matches;
                changeListener?.({ matches } as MediaQueryListEvent);
            },
            matches: initialMatches,
            media: query,
            removeEventListener: jest.fn(
                (
                    eventName: string,
                    listener: (event: MediaQueryListEvent) => void
                ) => {
                    if (eventName === "change" && changeListener === listener) {
                        changeListener = undefined;
                    }
                }
            ),
        };

        mediaQueryLists.set(query, mediaQueryList);

        return mediaQueryList;
    });

    Object.defineProperty(globalThis.window, "matchMedia", {
        configurable: true,
        value: matchMedia,
        writable: true,
    });

    return { matchMedia, mediaQueryLists };
};

const CoreConsumer = ({ options }: { options: MediaQueryOptions }) => {
    const result = useMediaQuery(options);

    return <div data-testid="result">{String(result)}</div>;
};

const SafeMaxWidthConsumer = ({
    fallback,
    maxWidth,
}: {
    fallback?: string;
    maxWidth?: BreakpointCSSVariableString;
}) => {
    const result = useSafeMaxWidthMediaQuery(maxWidth, fallback);

    return <div data-testid="result">{String(result)}</div>;
};

const renderWithTheme = (ui: React.ReactElement) => {
    return render(
        <ThemeProvider style={getThemeVariablesStyle()}>{ui}</ThemeProvider>
    );
};

describe("useMediaQuery", () => {
    beforeEach(() => {
        setupThemeVariables();
        createMatchMediaMock();
    });

    afterAll(() => {
        Object.defineProperty(globalThis.window, "matchMedia", {
            configurable: true,
            value: originalMatchMedia,
            writable: true,
        });
    });

    it("builds a query from resolved widths", async () => {
        const { matchMedia } = createMatchMediaMock(true);

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

    it("updates when the media query match changes", async () => {
        const { mediaQueryLists } = createMatchMediaMock(false);

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

    it("keeps the safe max-width wrapper fallback behavior", async () => {
        const { matchMedia } = createMatchMediaMock(true);

        renderWithTheme(
            <SafeMaxWidthConsumer fallback="480px" maxWidth={undefined} />
        );

        await waitFor(() => {
            expect(matchMedia).toHaveBeenCalledWith("(max-width: 480px)");
        });
        await waitFor(() => {
            expect(screen.getByTestId("result").textContent).toBe("true");
        });
    });
});
