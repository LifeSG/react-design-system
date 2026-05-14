export declare const DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT = "480px";
/**
 * A safer wrapper around `useMediaQuery` that guards against invalid/empty
 * max-width values (e.g. unresolved tokens), and falls back to a valid default.
 */
export declare const useSafeMaxWidthMediaQuery: (maxWidth: string | undefined, fallback?: string) => boolean;
