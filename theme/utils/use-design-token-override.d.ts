import type { CSSVariableString, ResolvedThemeMode } from "../types";
interface UseDesignTokenOverrideOptions {
    token: CSSVariableString;
    mode?: ResolvedThemeMode;
}
/**
 * Resolves a design token's value in a specific theme mode,
 * defaulting to light mode regardless of the current theme mode.
 */
export declare const useDesignTokenOverride: ({ token, mode, }: UseDesignTokenOverrideOptions) => string | undefined;
export {};
