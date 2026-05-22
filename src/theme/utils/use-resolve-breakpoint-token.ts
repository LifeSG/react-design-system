import { Breakpoint } from "../tokens/breakpoint";
import type { BreakpointCSSVariableString } from "../types";
import {
    extractFdsCssVariableName,
    normalizeCssLengthValue,
} from "./css-variable";
import { isTokenFromSet } from "./token-resolver";
import { useResolvedTokenValue } from "./use-design-token";

type BreakpointTokenName = keyof typeof Breakpoint;

const BREAKPOINT_TOKEN_SET = new Set<string>(Object.values(Breakpoint));

const isBreakpointToken = (
    value: unknown
): value is BreakpointCSSVariableString => {
    return isTokenFromSet<BreakpointCSSVariableString>(
        value,
        BREAKPOINT_TOKEN_SET
    );
};

const normalizeTokenName = (
    breakpointOrLength: string
): BreakpointTokenName | undefined => {
    const trimmed = breakpointOrLength.trim();
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
 * Resolves a breakpoint token key or CSS variable (for example "md-min" or
 * "var(--fds-breakpoint-md-min)") to a concrete CSS length.
 * Falls back to supplied CSS length when unresolved.
 * Returns undefined when neither the token nor the fallback resolves to a valid CSS length.
 */
export const useResolveBreakpointToken = (
    breakpointOrLength: string,
    fallbackLength?: string
): string | undefined => {
    const normalizedTokenName = normalizeTokenName(breakpointOrLength);
    const cssVariableToken = normalizedTokenName
        ? Breakpoint[normalizedTokenName]
        : undefined;
    const resolvedTokenValue = useResolvedTokenValue<
        BreakpointCSSVariableString,
        string
    >({
        value: cssVariableToken,
        fallback: fallbackLength ?? breakpointOrLength,
        isToken: isBreakpointToken,
        normalizeCustom: (value) => value,
    });

    return (
        normalizeCssLengthValue(resolvedTokenValue) ??
        normalizeCssLengthValue(fallbackLength)
    );
};
