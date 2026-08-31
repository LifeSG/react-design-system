import type { CSSProperties } from "react";
import type { ThemeContextValue } from "./types";
type InheritedThemeScope = {
    themeProps: {
        "data-fds-theme"?: string;
        "data-fds-theme-mode"?: string;
    };
    themeStyle: CSSProperties;
};
/**
 * Returns the theme context from the nearest `ThemeProvider`.
 *
 * @returns The active `ThemeContextValue`. When called outside a provider,
 * returns defaults: `theme: "lifesg"`, `mode: "light"`, `themeElement: null`.
 * @keywords context, hook, theme context
 */
export declare const useTheme: () => ThemeContextValue;
/**
 * Builds `data-fds-theme*` attributes and inline CSS variables for re-stamping
 * the current theme onto a detached DOM element (e.g. a portal or floating
 * overlay).
 *
 * @param enabled When `false`, returns empty objects — useful to conditionally
 * skip the attribute injection.
 * @returns `themeProps` (spread onto the root element) and `themeStyle` (inline
 * CSS variables to apply).
 * @keywords design tokens, hook, portal, theming
 */
export declare const useInheritedThemeScope: (enabled: boolean) => InheritedThemeScope;
export {};
