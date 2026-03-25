import type { FontSize, FontWeight } from "../types";
/**
 * Generates a CSS font shorthand string using FDS CSS variables.
 *
 * @example
 * generateFont("heading-xxl", "light")
 * // => "font-family: var(--fds-font-family); font-variant: var(--fds-font-variant); ..."
 */
export declare const generateFont: (size: FontSize, weight: FontWeight, options?: {
    noCommonLigatures?: boolean;
    fontVariant?: string;
}) => string;
