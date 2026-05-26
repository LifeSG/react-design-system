import { useEffect, useState } from "react";

import { Breakpoint } from "../tokens/breakpoint";
import type { BreakpointCSSVariableString } from "../types";
import { normalizeCssLengthValue } from "./css-variable";
import { isTokenFromSet } from "./token-resolver";
import { useResolvedTokenValue } from "./use-design-token";

export type BreakpointName = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type MaxWidthBreakpointName = Exclude<BreakpointName, "xxl">;

type MediaQueryFeature =
    | "aspect-ratio"
    | "color-index"
    | "color"
    | "device-aspect-ratio"
    | "device-height"
    | "device-width"
    | "grid"
    | "height"
    | "hover"
    | "monochrome"
    | "orientation"
    | "pointer"
    | "prefers-color-scheme"
    | "resolution"
    | "scan"
    | "width";

export type MediaQueryClauseValue = string | number | boolean;

export interface MediaQueryClause {
    feature: MediaQueryFeature;
    value: MediaQueryClauseValue;
}

export interface MediaQueryOptions {
    minWidth?: BreakpointCSSVariableString;
    maxWidth?: BreakpointCSSVariableString;
    clauses?: MediaQueryClause[];
}

export const DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT = "480px";

const BREAKPOINT_TOKEN_SET = new Set<string>(Object.values(Breakpoint));

const isBreakpointToken = (
    value: unknown
): value is BreakpointCSSVariableString => {
    return isTokenFromSet<BreakpointCSSVariableString>(
        value,
        BREAKPOINT_TOKEN_SET
    );
};

const getMinWidthBreakpointToken = (breakpoint: BreakpointName) => {
    return Breakpoint[`${breakpoint}-min`];
};

const getMaxWidthBreakpointToken = (breakpoint: MaxWidthBreakpointName) => {
    return Breakpoint[`${breakpoint}-max`];
};

export const useMinWidthMediaQuery = (breakpoint: BreakpointName) =>
    useMediaQuery({
        minWidth: getMinWidthBreakpointToken(breakpoint),
    });

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
    if (!clause?.feature) {
        return undefined;
    }

    const trimmedFeature = clause.feature.trim();

    if (!trimmedFeature) {
        return undefined;
    }

    if (clause.value === true) {
        return `(${trimmedFeature})`;
    }

    if (clause.value === false) {
        return undefined;
    }

    const value = `${clause.value}`.trim();

    if (!value) {
        return undefined;
    }

    return `(${trimmedFeature}: ${value})`;
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

const useResolvedBreakpointToken = (
    breakpointToken: BreakpointCSSVariableString | undefined,
    fallbackLength?: string
): string | undefined => {
    const resolvedTokenValue = useResolvedTokenValue<
        BreakpointCSSVariableString,
        string
    >({
        value: breakpointToken,
        fallback: fallbackLength ?? breakpointToken ?? "",
        isToken: isBreakpointToken,
        normalizeCustom: (value) => value,
    });

    return (
        normalizeCssLengthValue(resolvedTokenValue) ??
        normalizeCssLengthValue(fallbackLength)
    );
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

/**
 * @deprecated Use `useMaxWidthMediaQuery` from `use-breakpoint-hooks` instead.
 * This wrapper is legacy and will be removed.
 *
 * A safer wrapper around `useMediaQuery` that guards against invalid/empty
 * max-width values (e.g. unresolved tokens), and falls back to a valid default.
 */
export const useSafeMaxWidthMediaQuery = (
    maxWidth: BreakpointCSSVariableString | string | undefined,
    fallback: string = DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT
) => {
    const normalizedFallback =
        normalizeCssLengthValue(fallback) ??
        DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT;
    const breakpointToken = isBreakpointToken(maxWidth) ? maxWidth : undefined;
    const resolvedTokenMaxWidth = useResolvedBreakpointToken(breakpointToken);
    const normalizedRawMaxWidth = normalizeCssLengthValue(maxWidth);
    const resolvedMaxWidth =
        resolvedTokenMaxWidth ?? normalizedRawMaxWidth ?? normalizedFallback;

    const queryString =
        getMediaQueryClause("max-width", resolvedMaxWidth) ?? "";

    return useMatchMediaQuery(queryString, false);
};
