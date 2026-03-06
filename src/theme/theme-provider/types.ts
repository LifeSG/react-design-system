import type { ThemeMode, ThemeType } from "../types";
import type { CSSProperties } from "react";

export interface ThemeContextValue {
    theme: ThemeType;
    mode: ThemeMode;
    /**
     * Element that hosts the current theme scope. Useful for scoped theming.
     */
    themeElement: HTMLElement | null;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: ThemeType;
    mode?: ThemeMode;
    className?: string;
    style?: CSSProperties;
}
