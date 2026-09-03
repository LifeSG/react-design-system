import type { CSSProperties } from "react";

import type {
    ResolvedThemeMode,
    ThemeFontPreset,
    ThemeMode,
    ThemeType,
} from "../types";

/** Value exposed by the `ThemeProvider` context. */
export interface ThemeContextValue {
    /** Active theme token set name. */
    theme: ThemeType;
    /** Resolved colour mode. */
    mode: ResolvedThemeMode;
    /** Active font preset, if set. */
    fontPreset: ThemeFontPreset | undefined;
    /**
     * Element that hosts the current theme scope. Useful for scoped theming.
     */
    themeElement: HTMLElement | null;
}

/** Props for the `ThemeProvider` component. */
export interface ThemeProviderProps {
    children: React.ReactNode;
    className?: string | undefined;
    /**
     * Colour mode applied to the themed subtree.
     *
     * @default "auto"
     */
    mode?: ThemeMode | undefined;
    style?: CSSProperties | undefined;
    /**
     * Design token set to activate.
     *
     * @default "lifesg"
     */
    theme?: ThemeType | undefined;
    /**
     * Optional font preset to apply to the themed subtree.
     * Applicable to WISE product themes (wise, vica, websg, wogaa).
     */
    fontPreset?: ThemeFontPreset | undefined;
}
