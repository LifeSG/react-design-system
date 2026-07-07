import type { CSSProperties } from "react";
import type { ThemeContextValue } from "./types";
type InheritedThemeScope = {
    themeProps: {
        "data-fds-theme"?: string;
        "data-fds-theme-mode"?: string;
    };
    themeStyle: CSSProperties;
};
export declare const useTheme: () => ThemeContextValue;
export declare const useInheritedThemeScope: (enabled: boolean) => InheritedThemeScope;
export {};
