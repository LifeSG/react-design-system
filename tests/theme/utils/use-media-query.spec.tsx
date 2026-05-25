import { act, render, screen } from "@testing-library/react";
import {
    type MediaQueryOptions,
    useMediaQuery,
    useSafeMaxWidthMediaQuery,
} from "src/theme/utils/use-media-query";
import { useResolveBreakpointToken } from "src/theme/utils/use-resolve-breakpoint-token";

jest.mock("src/theme/utils/use-resolve-breakpoint-token", () => ({
    useResolveBreakpointToken: jest.fn(),
}));

const mockUseResolveBreakpointToken = jest.mocked(useResolveBreakpointToken);

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
    maxWidth?: string;
}) => {
    const result = useSafeMaxWidthMediaQuery(maxWidth, fallback);

    return <div data-testid="result">{String(result)}</div>;
};

describe("useMediaQuery", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        createMatchMediaMock();
        mockUseResolveBreakpointToken.mockImplementation((value, fallback) => {
            const candidate = (value || fallback || "").trim();

            if (candidate === "md-min") return "481px";
            if (candidate === "sm-max") return "480px";
            if (candidate === "lg-max") return "1200px";
            if (candidate === "") return undefined;

            return candidate;
        });
    });

    afterAll(() => {
        Object.defineProperty(globalThis.window, "matchMedia", {
            configurable: true,
            value: originalMatchMedia,
            writable: true,
        });
    });

    it("builds a query from resolved widths", () => {
        const { matchMedia } = createMatchMediaMock(true);

        render(
            <CoreConsumer
                options={{
                    maxWidth: 768,
                    minWidth: "md-min",
                }}
            />
        );

        expect(matchMedia).toHaveBeenCalledWith(
            "(min-width: 481px) and (max-width: 768px)"
        );
        expect(screen.getByTestId("result").textContent).toBe("true");
    });

    it("updates when the media query match changes", () => {
        const { mediaQueryLists } = createMatchMediaMock(false);

        render(<CoreConsumer options={{ minWidth: "md-min" }} />);

        const mediaQueryList = mediaQueryLists.get("(min-width: 481px)");

        expect(screen.getByTestId("result").textContent).toBe("false");

        act(() => {
            mediaQueryList?.dispatch(true);
        });

        expect(screen.getByTestId("result").textContent).toBe("true");
    });

    it("returns desktop-safe defaults when matchMedia is unavailable", () => {
        Object.defineProperty(globalThis.window, "matchMedia", {
            configurable: true,
            value: undefined,
            writable: true,
        });

        const { rerender } = render(
            <CoreConsumer options={{ minWidth: "md-min" }} />
        );

        expect(screen.getByTestId("result").textContent).toBe("true");

        rerender(<CoreConsumer options={{ maxWidth: "sm-max" }} />);

        expect(screen.getByTestId("result").textContent).toBe("false");
    });

    it("keeps the safe max-width wrapper fallback behavior", () => {
        const { matchMedia } = createMatchMediaMock(true);

        mockUseResolveBreakpointToken.mockImplementation((value, fallback) => {
            if (value === "not-a-breakpoint") {
                return fallback;
            }

            return (value || fallback || "").trim() || undefined;
        });

        render(<SafeMaxWidthConsumer maxWidth="not-a-breakpoint" />);

        expect(matchMedia).toHaveBeenCalledWith("(max-width: 480px)");
        expect(screen.getByTestId("result").textContent).toBe("true");
    });
});
