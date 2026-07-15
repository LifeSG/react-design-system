import { useEffect, useState } from "react";

import { Breakpoint } from "../tokens/breakpoint";
import { isTokenFromSet } from "./token-resolver";
import { useResolvedTokenValue } from "./use-design-token";

/** Named width breakpoint identifier used for responsive width comparisons. */
type BreakpointName = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type MaxWidthBreakpointName = Exclude<BreakpointName, "xxl">;
type MinWidthBreakpointTokenKey = `${BreakpointName}-min`;
type MaxWidthBreakpointTokenKey = `${MaxWidthBreakpointName}-max`;
type WidthBreakpointTokenKey =
    | MinWidthBreakpointTokenKey
    | MaxWidthBreakpointTokenKey;
type WidthBreakpointCSSVariableString =
    (typeof Breakpoint)[WidthBreakpointTokenKey];

type MediaQueryFeature =
    | "aspect-ratio"
    | "color-index"
    | "color"
    | "device-aspect-ratio"
    | "device-height"
    | "device-width"
    | "grid"
    | "height"
    | "max-height"
    | "min-height"
    | "hover"
    | "monochrome"
    | "orientation"
    | "pointer"
    | "prefers-color-scheme"
    | "resolution"
    | "scan"
    | "width";

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
 * Default LifeSG breakpoint values for width-based tokens.
 * Extracted from src/theme/styles/default.css.
 */
const WIDTH_BREAKPOINT_DEFAULTS: Record<
    WidthBreakpointCSSVariableString,
    string
> = {
    [Breakpoint["xxs-min"]]: "0",
    [Breakpoint["xs-min"]]: "321px",
    [Breakpoint["sm-min"]]: "376px",
    [Breakpoint["md-min"]]: "481px",
    [Breakpoint["lg-min"]]: "769px",
    [Breakpoint["xl-min"]]: "1201px",
    [Breakpoint["xxl-min"]]: "1441px",
    [Breakpoint["xxs-max"]]: "320px",
    [Breakpoint["xs-max"]]: "375px",
    [Breakpoint["sm-max"]]: "480px",
    [Breakpoint["md-max"]]: "768px",
    [Breakpoint["lg-max"]]: "1200px",
    [Breakpoint["xl-max"]]: "1440px",
};

const WIDTH_BREAKPOINT_TOKEN_SET = new Set<WidthBreakpointCSSVariableString>([
    Breakpoint["xxs-min"],
    Breakpoint["xs-min"],
    Breakpoint["sm-min"],
    Breakpoint["md-min"],
    Breakpoint["lg-min"],
    Breakpoint["xl-min"],
    Breakpoint["xxl-min"],
    Breakpoint["xxs-max"],
    Breakpoint["xs-max"],
    Breakpoint["sm-max"],
    Breakpoint["md-max"],
    Breakpoint["lg-max"],
    Breakpoint["xl-max"],
]);

const isBreakpointToken = (
    value: unknown
): value is WidthBreakpointCSSVariableString => {
    return isTokenFromSet<WidthBreakpointCSSVariableString>(
        value,
        WIDTH_BREAKPOINT_TOKEN_SET
    );
};

const getMinWidthBreakpointToken = (breakpoint: BreakpointName) => {
    return Breakpoint[`${breakpoint}-min`];
};

const getMaxWidthBreakpointToken = (breakpoint: MaxWidthBreakpointName) => {
    return Breakpoint[`${breakpoint}-max`];
};

/**
 * Returns `true` when the viewport width is at or above the named breakpoint.
 *
 * @param breakpoint Named breakpoint to compare against.
 */
export const useMinWidthMediaQuery = (breakpoint: BreakpointName) =>
    useMediaQuery({
        minWidth: getMinWidthBreakpointToken(breakpoint),
    });

/**
 * Returns `true` when the viewport width is at or below the named breakpoint.
 *
 * @param breakpoint Named breakpoint to compare against.
 */
export const useMaxWidthMediaQuery = (breakpoint: MaxWidthBreakpointName) =>
    useMediaQuery({
        maxWidth: getMaxWidthBreakpointToken(breakpoint),
    });

const getMediaQueryClause = (
    feature: "min-width" | "max-width",
    value: string | undefined
) => {
    if (!value) {
        return undefined;
    }

    return `(${feature}: ${value})`;
};

const getCustomMediaQueryClause = (
    clause: MediaQueryClause | null | undefined
) => {
    if (clause?.value === undefined) {
        return undefined;
    }

    if (clause.value === true) {
        return `(${clause.feature})`;
    }

    if (clause.value === false) {
        return undefined;
    }

    const value = `${clause.value}`.trim();

    if (!value) {
        return undefined;
    }

    return `(${clause.feature}: ${value})`;
};

const getDefaultMatch = (hasMinWidth: boolean, hasMaxWidth: boolean) => {
    if (hasMaxWidth) {
        return false;
    }

    if (hasMinWidth) {
        return true;
    }

    return false;
};

const getCurrentMatch = (queryString: string, defaultMatch: boolean) => {
    if (!queryString) {
        return defaultMatch;
    }

    if (!globalThis.window?.matchMedia) {
        return defaultMatch;
    }

    return globalThis.window.matchMedia(queryString).matches;
};

/**
 * Resolves a width breakpoint CSS variable token to its computed pixel string.
 *
 * @returns The resolved pixel value, falling back to default LifeSG breakpoint
 * values when the theme element is not yet mounted, or `""` for unrecognised
 * tokens.
 */
export const useResolvedBreakpointToken = (
    breakpointToken: WidthBreakpointCSSVariableString | undefined
): string => {
    const effectiveFallback =
        isBreakpointToken(breakpointToken) &&
        WIDTH_BREAKPOINT_DEFAULTS[breakpointToken]
            ? WIDTH_BREAKPOINT_DEFAULTS[breakpointToken]
            : "";

    return useResolvedTokenValue<WidthBreakpointCSSVariableString, string>({
        value: breakpointToken,
        fallback: effectiveFallback,
        isToken: isBreakpointToken,
        normalizeCustom: (value) => value,
    });
};

const useMatchMediaQuery = (
    queryString: string,
    defaultMatch: boolean
): boolean => {
    const [matches, setMatches] = useState(() =>
        getCurrentMatch(queryString, defaultMatch)
    );

    useEffect(() => {
        if (!queryString || !globalThis.window?.matchMedia) {
            setMatches(defaultMatch);
            return;
        }

        const mediaQueryList = globalThis.window.matchMedia(queryString);
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        setMatches(mediaQueryList.matches);
        mediaQueryList.addEventListener("change", handleChange);

        return () => {
            mediaQueryList.removeEventListener("change", handleChange);
        };
    }, [defaultMatch, queryString]);

    return matches;
};

/**
 * Reactive boolean hook that evaluates a media query built from width
 * breakpoint tokens and optional custom feature clauses.
 *
 * @returns `true` when the query matches. When `window.matchMedia` is
 * unavailable (SSR), defaults to `true` for min-width-only queries and
 * `false` for max-width-only.
 */
export const useMediaQuery = (options: MediaQueryOptions): boolean => {
    const { minWidth, maxWidth, clauses = [] } = options;
    const normalizedMinWidth = useResolvedBreakpointToken(minWidth);
    const normalizedMaxWidth = useResolvedBreakpointToken(maxWidth);
    const widthClauses = [
        getMediaQueryClause("min-width", normalizedMinWidth),
        getMediaQueryClause("max-width", normalizedMaxWidth),
    ].filter((value): value is string => !!value);
    const customClauses = clauses
        .map(getCustomMediaQueryClause)
        .filter((value): value is string => !!value);
    const queryString = [...widthClauses, ...customClauses].join(" and ");
    const hasMinWidth = !!normalizedMinWidth;
    const hasMaxWidth = !!normalizedMaxWidth;
    const defaultMatch = getDefaultMatch(hasMinWidth, hasMaxWidth);

    return useMatchMediaQuery(queryString, defaultMatch);
};
