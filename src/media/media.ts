import { MediaWidths } from "../spec/media-spec";
import { IMediaType, IMediaWidth } from "./types";

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
