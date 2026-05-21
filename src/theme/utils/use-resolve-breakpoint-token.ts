import { Breakpoint } from "../tokens";
import type { BreakpointCSSVariableString } from "../types";
import {
    extractFdsCssVariableName,
    normalizeCssLengthValue,
} from "./css-variable";
import { useResolvedTokenValue } from "./use-design-token";

type BreakpointTokenName = keyof typeof Breakpoint;

const BREAKPOINT_TOKEN_SET = new Set<string>(Object.values(Breakpoint));

const isBreakpointCssVariable = (
    value: unknown
): value is BreakpointCSSVariableString => {
    return typeof value === "string" && BREAKPOINT_TOKEN_SET.has(value);
};

const normalizeTokenName = (
    tokenName: string
): BreakpointTokenName | undefined => {
    const trimmed = tokenName.trim();
    const extractedVariableName = extractFdsCssVariableName(trimmed);

    if (extractedVariableName?.startsWith("--fds-breakpoint-")) {
        const normalized = extractedVariableName
            .slice("--fds-breakpoint-".length)
            .trim() as BreakpointTokenName;

        return normalized in Breakpoint ? normalized : undefined;
    }

    const normalized = trimmed as BreakpointTokenName;

    return normalized in Breakpoint ? normalized : undefined;
};

/**
 * Resolves breakpoint tokens like "md-min" to concrete CSS lengths.
 * Falls back to supplied fallback when unresolved.
 * Returns undefined when neither the token nor the fallback resolves to a valid CSS length.
 */
export const useResolveBreakpointToken = (
    tokenName: string,
    fallback?: string
): string | undefined => {
    const normalizedTokenName = normalizeTokenName(tokenName);
    const cssVariableToken = normalizedTokenName
        ? Breakpoint[normalizedTokenName]
        : undefined;
    const resolvedTokenValue = useResolvedTokenValue<
        BreakpointCSSVariableString,
        string
    >({
        value: cssVariableToken,
        fallback: fallback ?? tokenName,
        isToken: isBreakpointCssVariable,
        normalizeCustom: (value) => value,
    });
    const normalizedResolvedTokenValue =
        normalizeCssLengthValue(resolvedTokenValue);
    const normalizedFallback = normalizeCssLengthValue(fallback);

    if (normalizedResolvedTokenValue) {
        return normalizedResolvedTokenValue;
    }

    if (normalizedFallback) {
        return normalizedFallback;
    }

    return undefined;
};
