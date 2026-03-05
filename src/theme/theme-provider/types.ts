import type { ThemeMode, ThemeType } from "../types";

export interface ThemeContextValue {
    theme: ThemeType;
    mode: ThemeMode;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: ThemeType;
    mode?: ThemeMode;
}
