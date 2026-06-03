import { jest } from "@jest/globals";

export type MockMediaQueryList = {
    addEventListener: (
        eventName: string,
        listener: (event: MediaQueryListEvent) => void
    ) => void;
    dispatch: (matches: boolean) => void;
    matches: boolean;
    media: string;
    removeEventListener: (
        eventName: string,
        listener: (event: MediaQueryListEvent) => void
    ) => void;
};

type CreateMatchMediaMockOptions = {
    initialMatches?: boolean;
};

export const createMatchMediaMock = ({
    initialMatches = false,
}: CreateMatchMediaMockOptions = {}) => {
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
