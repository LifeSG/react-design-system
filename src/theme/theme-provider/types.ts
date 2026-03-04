import type { ThemeMode, ThemeType } from "../types";

export interface ThemeContextValue {
    theme: ThemeType;
    mode: ThemeMode;
    setTheme: (theme: ThemeType) => void;
    setMode: (mode: ThemeMode) => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode;

    // Controlled
    theme?: ThemeType;
    mode?: ThemeMode;

    // Uncontrolled
    initialTheme?: ThemeType;
    initialMode?: ThemeMode;

    onThemeChange?: (theme: ThemeType) => void;
    onModeChange?: (mode: ThemeMode) => void;
}
