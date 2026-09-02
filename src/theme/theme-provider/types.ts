import type { CSSProperties } from "react";

import type {
    ResolvedThemeMode,
    ThemeFontVariant,
    ThemeMode,
    ThemeType,
} from "../types";

/** Value exposed by the `ThemeProvider` context. */
export interface ThemeContextValue {
    /** Active theme token set name. */
    theme: ThemeType;
    /** Resolved colour mode. */
    mode: ResolvedThemeMode;
    /** Active font variant, if set. */
    fontVariant: ThemeFontVariant | undefined;
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
     * Optional font variant to apply to the themed subtree.
     * Currently only applicable to WISE product themes (wise, vica, websg).
     */
    fontVariant?: ThemeFontVariant | undefined;
}
