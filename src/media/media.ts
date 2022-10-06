import { MediaWidths } from "../spec/media-spec";
import { MediaType, MediaWidth } from "./types";

// =============================================================================
// HELPER FUNCTION
// =============================================================================
const getMediaQuerySpec = (type: "max-width" | "min-width") => {
    return Object.keys(MediaWidths).reduce((accumulator, key) => {
        const mediaWidth = MediaWidths[key as keyof MediaWidth];
        accumulator[
            key as keyof MediaType
        ] = `@media screen and (${type}: ${mediaWidth}px)`;

        return accumulator;
    }, {} as MediaType);
};

// =============================================================================
// EXPORTS
// =============================================================================
export const MediaQuery = {
    MaxWidth: getMediaQuerySpec("max-width"),
    MinWidth: getMediaQuerySpec("min-width"),
};
