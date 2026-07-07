import { Colour } from "../../theme";
import type { FadeColorSet, FadeWrapperProps } from "./types";

export function getFadeColorSet(
    fadeColor: FadeWrapperProps["fadeColor"] | undefined
): FadeColorSet {
    if (Array.isArray(fadeColor) && fadeColor.length > 0) {
        return {
            left: fadeColor,
            right: fadeColor,
        };
    }

    if (fadeColor) {
        return fadeColor as FadeColorSet;
    }

    return {
        left: undefined,
        right: undefined,
    };
}

export function getFadeBackgroundColorValue(
    color: string[] | undefined,
    showIndicator: boolean
) {
    if (color && color.length > 0) {
        return color.join(", ");
    }

    if (showIndicator) {
        return `${Colour.bg}, ${Colour.bg}`;
    }

    return null;
}
