import { MediaWidths as MediaWidthsSpec } from "../v2_spec/media-spec";
import { V2_MediaType, V2_MediaWidth } from "./types";

// =============================================================================
// HELPER FUNCTION
// =============================================================================
const getMediaQuerySpec = (type: "max-width" | "min-width") => {
    return Object.keys(MediaWidthsSpec).reduce((accumulator, key) => {
        const mediaWidth = MediaWidthsSpec[key as keyof V2_MediaWidth];
        accumulator[
            key as keyof V2_MediaType
        ] = `@media screen and (${type}: ${mediaWidth}px)`;

        return accumulator;
    }, {} as V2_MediaType);
};

// =============================================================================
// EXPORTS
// =============================================================================

/** @deprecated */
export const V2_MediaQuery = {
    MaxWidth: getMediaQuerySpec("max-width"),
    MinWidth: getMediaQuerySpec("min-width"),
};

/** @deprecated */
export const V2_MediaWidths = MediaWidthsSpec;
