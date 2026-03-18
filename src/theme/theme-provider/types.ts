import type { CSSProperties } from "react";

import type { ThemeMode, ThemeType } from "../types";

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
    className?: string | undefined;
    mode?: ThemeMode | undefined;
    style?: CSSProperties | undefined;
    theme?: ThemeType | undefined;
}
