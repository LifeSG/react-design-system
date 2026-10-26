type TokenGuard<TToken extends string> = (value: unknown) => value is TToken;
/**
 * Prefers a resolved token value and falls back to the original token string
 * when the token has not been resolved yet.
 * @param resolved Resolved value from a token lookup.
 * @param fallback Original token string used as fallback.
 * @returns Resolved value when available, otherwise the fallback token string.
 */
export declare const getResolvedValue: (resolved: string | undefined, fallback: string) => string;
/**
 * Converts numeric CSS values to px while preserving string inputs.
 * @param value CSS value as number or string.
 * @returns CSS value string.
 */
export declare const toCssValue: (value: string | number) => string;
/**
 * Checks whether a value is one of the known token literals.
 * @param value Unknown value to validate.
 * @param tokenSet Set of allowed token strings.
 * @returns True when value is a string token in the provided set.
 */
export declare const isTokenFromSet: <TToken extends string>(value: unknown, tokenSet: Set<string>) => value is TToken;
/**
 * Checks whether a value is a token by matching a token prefix.
 * @param value Unknown value to validate.
 * @param prefix Token prefix to match.
 * @returns True when value is a string starting with the given prefix.
 */
export declare const isTokenWithPrefix: <TToken extends string>(value: unknown, prefix: string) => value is TToken;
/**
 * Uses a token value when valid, otherwise falls back to a default token.
 * @param value Candidate token value.
 * @param guard Type guard that validates the token.
 * @param fallback Default token to use when value is invalid.
 * @returns Valid token value or fallback token.
 */
export declare const getTokenOrDefault: <TToken extends string>(value: unknown, guard: TokenGuard<TToken>, fallback: TToken) => TToken;
/**
 * Resolves token values through the resolved token string and normalizes
 * non-token values through a caller-provided normalizer.
 * @param args.value Token or custom value.
 * @param args.resolvedValue Resolved token value from lookup.
 * @param args.guard Type guard that checks whether the value is a token.
 * @param args.normalizeCustom Normalizer for custom (non-token) values.
 * @returns Effective CSS value string.
 */
export declare const getEffectiveTokenOrCustom: <TToken extends string, TCustom>({ value, resolvedValue, guard, normalizeCustom, }: {
    value: TToken | TCustom;
    resolvedValue: string | undefined;
    guard: TokenGuard<TToken>;
    normalizeCustom: (value: TCustom) => string;
}) => string;
export {};
