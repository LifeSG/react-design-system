import type { FontSize, FontWeight } from "../types";
export interface FontDeclarationProperties {
    "font-family": string;
    "font-variant": string;
    "font-size": string;
    "font-weight": string;
    "line-height": string;
    "letter-spacing": string;
}
/**
 * Generates a CSS font declaration map using FDS CSS variables.
 *
 * @example
 * generateFontProperties("heading-xxl", "light")
 * // => { "font-family": "var(--fds-font-family-heading)", ... }
 */
export declare const generateFontProperties: (size: FontSize, weight: FontWeight, options?: {
    noCommonLigatures?: boolean;
    fontVariant?: string;
}) => FontDeclarationProperties;
/**
 * Generates a CSS declaration string using FDS CSS variables.
 *
 * @example
 * generateFont("heading-xxl", "light")
 * // => "font-family: var(--fds-font-family-heading); font-variant: var(--fds-font-variant); ..."
 */
export declare const generateFont: (size: FontSize, weight: FontWeight, options?: {
    noCommonLigatures?: boolean;
    fontVariant?: string;
}) => string;
