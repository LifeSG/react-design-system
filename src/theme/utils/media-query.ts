import { useMediaQuery } from "react-responsive";

const CSS_LENGTH_PATTERN = /^-?\d*\.?\d+(px|rem)$/i;

export const DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT = "480px";

const isValidMaxWidthValue = (value: string | undefined) => {
    if (!value) return false;

    return CSS_LENGTH_PATTERN.test(value.trim());
};

/**
 * A safer wrapper around `useMediaQuery` that guards against invalid/empty
 * max-width values (e.g. unresolved tokens), and falls back to a valid default.
 */
export const useSafeMaxWidthMediaQuery = (
    maxWidth: string | undefined,
    fallback: string = DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT
) => {
    const resolvedMaxWidth = isValidMaxWidthValue(maxWidth)
        ? maxWidth!.trim()
        : fallback;

    return useMediaQuery({ maxWidth: resolvedMaxWidth });
};
