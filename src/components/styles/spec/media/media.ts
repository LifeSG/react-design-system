import { IMediaType, IMediaWidth } from "./types";

export const MediaWidths: IMediaWidth = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 480,
    tablet: 1199,
    desktopM: 1399,
    desktopL: 1999,
    desktop4k: 3840,
};

// =============================================================================
// HELPER FUNCTION
// =============================================================================
const getMediaQuerySpec = (type: "max-width" | "min-width") => {
    return Object.keys(MediaWidths).reduce((accumulator, key) => {
        const mediaWidth = MediaWidths[key as keyof IMediaWidth];
        accumulator[
            key as keyof IMediaType
        ] = `@media screen and (${type}: ${mediaWidth}px)`;

        return accumulator;
    }, {} as IMediaType);
};

// =============================================================================
// EXPORTS
// =============================================================================
export const MediaQuery = {
    MaxWidth: getMediaQuerySpec("max-width"),
    MinWidth: getMediaQuerySpec("min-width"),
};
