import { MediaWidths as MediaWidthsSpec } from "../spec/media-spec";
import { v2_MediaType, v2_MediaWidth } from "./types";

// =============================================================================
// HELPER FUNCTION
// =============================================================================
const getMediaQuerySpec = (type: "max-width" | "min-width") => {
    return Object.keys(MediaWidthsSpec).reduce((accumulator, key) => {
        const mediaWidth = MediaWidthsSpec[key as keyof v2_MediaWidth];
        accumulator[
            key as keyof v2_MediaType
        ] = `@media screen and (${type}: ${mediaWidth}px)`;

        return accumulator;
    }, {} as v2_MediaType);
};

// =============================================================================
// EXPORTS
// =============================================================================

/** @deprecated */
export const v2_MediaQuery = {
    MaxWidth: getMediaQuerySpec("max-width"),
    MinWidth: getMediaQuerySpec("min-width"),
};

/** @deprecated */
export const v2_MediaWidths = MediaWidthsSpec;
