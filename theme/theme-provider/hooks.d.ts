import type { CSSProperties } from "react";
type InheritedThemeScope = {
    themeProps: {
        "data-fds-theme"?: string;
        "data-fds-theme-mode"?: string;
    };
    themeStyle: CSSProperties;
};
export declare const useTheme: () => import("./types").ThemeContextValue;
export declare const useInheritedThemeScope: (enabled: boolean) => InheritedThemeScope;
export {};
