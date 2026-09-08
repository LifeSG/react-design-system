import type { CSSVariableString, ResolvedThemeMode } from "../types";
interface UseDesignTokenOverrideOptions {
    token: CSSVariableString;
    mode?: ResolvedThemeMode;
}
/**
 * Resolves a design token's value in a specific theme mode,
 * regardless of the current active mode.
 *
 * @param options.token The CSS variable token to resolve.
 * @param options.mode The mode to resolve in.
 *
 * @returns The computed CSS value, or `undefined` when the theme element has
 * not yet mounted.
 *
 * @default options.mode "light"
 */
export declare const useDesignTokenOverride: ({ token, mode, }: UseDesignTokenOverrideOptions) => string | undefined;
export {};
