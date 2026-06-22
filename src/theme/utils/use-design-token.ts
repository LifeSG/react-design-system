import { useEffect, useState } from "react";

import { useTheme } from "../theme-provider/hooks";
import type { CSSVariableString } from "../types";
import { parseCSSVariableValue } from "./css-variable";

const isEmptyValue = (value: unknown) => {
    return value == null || value === "";
};

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
    const { value, fallback, isToken, normalizeCustom } = options;
    const tokenString = isToken(value) ? value : undefined;
    const resolvedToken = useDesignToken(tokenString);
    const fallbackString = isToken(fallback) ? fallback : undefined;
    const resolvedFallback = useDesignToken(fallbackString);

    if (isToken(value)) {
        if (!isEmptyValue(resolvedToken)) {
            return resolvedToken;
        }
    } else if (!isEmptyValue(value)) {
        return normalizeCustom(value);
    }

    if (isToken(fallback)) {
        if (!isEmptyValue(resolvedFallback)) {
            return resolvedFallback;
        }
    }

    return normalizeCustom(fallback as TCustom);
};
