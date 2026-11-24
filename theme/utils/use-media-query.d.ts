import { Breakpoint } from "../tokens/breakpoint";
/** Named width breakpoint identifier used for responsive width comparisons. */
type BreakpointName = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type MaxWidthBreakpointName = Exclude<BreakpointName, "xxl">;
type MinWidthBreakpointTokenKey = `${BreakpointName}-min`;
type MaxWidthBreakpointTokenKey = `${MaxWidthBreakpointName}-max`;
type WidthBreakpointTokenKey = MinWidthBreakpointTokenKey | MaxWidthBreakpointTokenKey;
type WidthBreakpointCSSVariableString = (typeof Breakpoint)[WidthBreakpointTokenKey];
type MediaQueryFeature = "aspect-ratio" | "color-index" | "color" | "device-aspect-ratio" | "device-height" | "device-width" | "grid" | "height" | "max-height" | "min-height" | "hover" | "monochrome" | "orientation" | "pointer" | "prefers-color-scheme" | "resolution" | "scan" | "width";
type MediaQueryClauseValue = string | number | boolean;
/** A single media-query feature condition. */
export interface MediaQueryClause {
    feature: MediaQueryFeature;
    /**
     * Value for the media-query feature.
     *
     * - A string or number emits `(feature: value)`.
     * - `true` emits a bare feature clause (e.g. `(hover)`).
     * - `false` or `undefined` omits the clause entirely.
     */
    value: MediaQueryClauseValue | undefined;
}
/** Options for `useMediaQuery`. */
export interface MediaQueryOptions {
    /** Lower-bound breakpoint token. Viewport must be >= this width. */
    minWidth?: WidthBreakpointCSSVariableString;
    /** Upper-bound breakpoint token. Viewport must be <= this width. */
    maxWidth?: WidthBreakpointCSSVariableString;
    /** Extra feature conditions (e.g. `hover`, `orientation`) combined with `and`. */
    clauses?: MediaQueryClause[];
}
/**
 * Returns `true` when the viewport width is at or above the named breakpoint.
 *
 * @param breakpoint Named breakpoint to compare against.
 * @keywords breakpoint, hook, media query, responsive
 */
export declare const useMinWidthMediaQuery: (breakpoint: BreakpointName) => boolean;
/**
 * Returns `true` when the viewport width is at or below the named breakpoint.
 *
 * @param breakpoint Named breakpoint to compare against.
 * @keywords breakpoint, hook, media query, responsive
 */
export declare const useMaxWidthMediaQuery: (breakpoint: MaxWidthBreakpointName) => boolean;
/**
 * Resolves a width breakpoint CSS variable token to its computed pixel string.
 *
 * @returns The resolved pixel value, falling back to default LifeSG breakpoint
 * values when the theme element is not yet mounted, or `""` for unrecognised
 * tokens.
 * @keywords breakpoint, design tokens, hook
 */
export declare const useResolvedBreakpointToken: (breakpointToken: WidthBreakpointCSSVariableString | undefined) => string;
/**
 * Reactive boolean hook that evaluates a media query built from width
 * breakpoint tokens and optional custom feature clauses.
 *
 * @returns `true` when the query matches. When `window.matchMedia` is
 * unavailable (SSR), defaults to `true` for min-width-only queries and
 * `false` for max-width-only.
 * @keywords breakpoint, hook, media query, responsive
 */
export declare const useMediaQuery: (options: MediaQueryOptions) => boolean;
export {};
