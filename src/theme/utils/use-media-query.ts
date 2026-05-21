import { useEffect, useState } from "react";

import { normalizeCssLengthValue } from "./css-variable";
import { toCssValue } from "./token-resolver";
import { useResolveBreakpointToken } from "./use-resolve-breakpoint-token";

export type BreakpointName = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const useMinWidthMediaQuery = (
    breakpoint: BreakpointName,
    orientation?: MediaQueryOrientation
) =>
    useMediaQuery({
        minWidth: `${breakpoint}-min`,
        orientation,
    });

export const useMaxWidthMediaQuery = (
    breakpoint: BreakpointName,
    orientation?: MediaQueryOrientation
) =>
    useMediaQuery({
        maxWidth: `${breakpoint}-max`,
        orientation,
    });

export const useOrientation = (orientation: MediaQueryOrientation) =>
    useMediaQuery({ orientation });

export type MediaQueryOrientation = "landscape" | "portrait";
export const DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT = "480px";

export interface MediaQueryOptions {
    minWidth?: number | string;
    maxWidth?: number | string;
    orientation?: MediaQueryOrientation;
}

const getWidthCandidate = (value: number | string | undefined) => {
    if (value == null || value === "") {
        return "";
    }

    return typeof value === "number" ? toCssValue(value) : value;
};

const getMediaQueryClause = (
    feature: "min-width" | "max-width",
    value: string | undefined
) => {
    if (!value) {
        return undefined;
    }

    return `(${feature}: ${value})`;
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

export const useMediaQuery = (options: MediaQueryOptions): boolean => {
    const { minWidth, maxWidth, orientation } = options;
    const resolvedMinWidth = useResolveBreakpointToken(
        getWidthCandidate(minWidth)
    );
    const resolvedMaxWidth = useResolveBreakpointToken(
        getWidthCandidate(maxWidth)
    );
    const normalizedMinWidth = normalizeCssLengthValue(resolvedMinWidth);
    const normalizedMaxWidth = normalizeCssLengthValue(resolvedMaxWidth);
    const clauses = [
        getMediaQueryClause("min-width", normalizedMinWidth),
        getMediaQueryClause("max-width", normalizedMaxWidth),
        orientation ? `(orientation: ${orientation})` : undefined,
    ].filter((value): value is string => Boolean(value));
    const queryString = clauses.join(" and ");
    const hasMinWidth = Boolean(normalizedMinWidth);
    const hasMaxWidth = Boolean(normalizedMaxWidth);
    const defaultMatch = getDefaultMatch(hasMinWidth, hasMaxWidth);
    const [matches, setMatches] = useState(() =>
        getCurrentMatch(queryString, defaultMatch)
    );

    useEffect(() => {
        setMatches(getCurrentMatch(queryString, defaultMatch));

        if (!queryString || !globalThis.window?.matchMedia) {
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
 * @deprecated Use `useMaxWidthMediaQuery` from `use-breakpoint-hooks` instead.
 * This wrapper is legacy and will be removed.
 *
 * A safer wrapper around `useMediaQuery` that guards against invalid/empty
 * max-width values (e.g. unresolved tokens), and falls back to a valid default.
 */
export const useSafeMaxWidthMediaQuery = (
    maxWidth: string | undefined,
    fallback: string = DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT
) => {
    const normalizedFallback =
        normalizeCssLengthValue(fallback) ??
        DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT;
    const resolvedMaxWidth =
        useResolveBreakpointToken(maxWidth ?? "", normalizedFallback) ??
        normalizedFallback;

    return useMediaQuery({ maxWidth: resolvedMaxWidth });
};
