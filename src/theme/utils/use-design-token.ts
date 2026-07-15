import { useEffect, useState } from "react";

import { useTheme } from "../theme-provider/hooks";
import type { CSSVariableString } from "../types";
import { parseCSSVariableValue } from "./css-variable";

const isEmptyValue = (value: unknown) => {
    return value == null || value === "";
};

/**
 * Resolves a design-token CSS variable to its computed string value within the
 * nearest `ThemeProvider` scope.
 *
 * @param tokenName A `CSSVariableString` token (e.g. `Colour["text"]`), or
 * `undefined` to skip resolution.
 * @returns The computed CSS value, or `undefined` when the provider has not yet
 * mounted or `tokenName` is `undefined`.
 */
export const useDesignToken = (
    tokenName: CSSVariableString | undefined
): string | undefined => {
    const { theme, mode, themeElement } = useTheme();
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (!themeElement) return;

        setValue(parseCSSVariableValue(tokenName, themeElement));
    }, [theme, mode, themeElement, tokenName]);

    return value;
};

export interface UseResolvedTokenValueOptions<
    TToken extends CSSVariableString,
    TCustom
> {
    /** Value used when `value` is empty. */
    fallback: TToken | TCustom;
    /** Type guard to identify token values. */
    isToken: (value: unknown) => value is TToken;
    /** Normalizer for non-token values. */
    normalizeCustom: (value: TCustom) => string;
    /** Candidate token or custom value. */
    value: TToken | TCustom | null | undefined;
}

/**
 * Resolves token-aware values with consistent fallback behavior.
 * - Empty values (`null`, `undefined`, `""`) use `fallback`.
 * - Token values are resolved through `useDesignToken`.
 * - Non-token values are returned via `normalizeCustom`.
 * @param options Resolution options for token/custom values.
 * @returns Resolved token value or normalized custom/fallback value.
 */
export const useResolvedTokenValue = <
    TToken extends CSSVariableString,
    TCustom
>(
    options: UseResolvedTokenValueOptions<TToken, TCustom>
) => {
    const { value, fallback, isToken: checkToken, normalizeCustom } = options;
    const isToken = checkToken(value);
    const tokenName = isToken ? value : undefined;
    const resolvedToken = useDesignToken(tokenName);
    const isFallbackToken = checkToken(fallback);
    const fallbackTokenName = isFallbackToken ? fallback : undefined;
    const resolvedFallback = useDesignToken(fallbackTokenName);

    if (isToken && !isEmptyValue(resolvedToken)) {
        return resolvedToken;
    }

    if (!isToken && !isEmptyValue(value)) {
        return normalizeCustom(value);
    }

    if (isFallbackToken && !isEmptyValue(resolvedFallback)) {
        return resolvedFallback;
    }

    return normalizeCustom(fallback as TCustom);
};
