import type { CSSVariableString } from "../types";
/**
 * Resolves a design-token CSS variable to its computed string value within the
 * nearest `ThemeProvider` scope.
 *
 * @param tokenName A `CSSVariableString` token (e.g. `Colour["text"]`), or
 * `undefined` to skip resolution.
 * @returns The computed CSS value, or `undefined` when the provider has not yet
 * mounted or `tokenName` is `undefined`.
 */
export declare const useDesignToken: (tokenName: CSSVariableString | undefined) => string | undefined;
export interface UseResolvedTokenValueOptions<TToken extends CSSVariableString, TCustom> {
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
export declare const useResolvedTokenValue: <TToken extends CSSVariableString, TCustom>(options: UseResolvedTokenValueOptions<TToken, TCustom>) => string;
