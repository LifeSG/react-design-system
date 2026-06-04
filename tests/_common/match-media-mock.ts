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

export type MatchMediaMockController = {
    matchMedia: jest.MockedFunction<(query: string) => MockMediaQueryList>;
    mediaQueryLists: Map<string, MockMediaQueryList>;
    mock: (options?: CreateMatchMediaMockOptions) => {
        matchMedia: jest.MockedFunction<(query: string) => MockMediaQueryList>;
        mediaQueryLists: Map<string, MockMediaQueryList>;
    };
    restore: () => void;
};

export const createMatchMediaMock = ({
    initialMatches = false,
}: CreateMatchMediaMockOptions = {}): MatchMediaMockController => {
    const originalMatchMediaDescriptor = Object.getOwnPropertyDescriptor(
        globalThis.window,
        "matchMedia"
    );
    let mediaQueryLists = new Map<string, MockMediaQueryList>();
    let matchMedia: jest.MockedFunction<(query: string) => MockMediaQueryList> =
        jest.fn<(query: string) => MockMediaQueryList>();

    const mock: MatchMediaMockController["mock"] = (
        options: CreateMatchMediaMockOptions = {}
    ) => {
        const { initialMatches = false } = options;

        mediaQueryLists = new Map<string, MockMediaQueryList>();
        matchMedia = jest.fn((query: string) => {
            const existingMediaQueryList = mediaQueryLists.get(query);

            if (existingMediaQueryList) {
                return existingMediaQueryList;
            }

            let changeListener:
                | ((event: MediaQueryListEvent) => void)
                | undefined;

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
                        if (
                            eventName === "change" &&
                            changeListener === listener
                        ) {
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

    const restore = () => {
        if (originalMatchMediaDescriptor) {
            Object.defineProperty(
                globalThis.window,
                "matchMedia",
                originalMatchMediaDescriptor
            );
            return;
        }

        delete (globalThis.window as Partial<Window>).matchMedia;
    };

    mock({ initialMatches });

    return {
        get matchMedia() {
            return matchMedia;
        },
        get mediaQueryLists() {
            return mediaQueryLists;
        },
        mock,
        restore,
    };
};
