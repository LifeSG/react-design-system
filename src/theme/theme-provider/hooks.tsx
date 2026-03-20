import type { CSSProperties } from "react";
import { useContext, useMemo } from "react";

import { getInheritedInlineCssVariables } from "../utils/css-variable";
import { ThemeContext } from "./context";

type InheritedThemeScope = {
    themeProps: {
        "data-fds-theme"?: string;
        "data-fds-theme-mode"?: string;
    };
    themeStyle: CSSProperties;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
};

export const useInheritedThemeScope = (
    enabled: boolean
): InheritedThemeScope => {
    const themeContext = useContext(ThemeContext);

    return useMemo(() => {
        if (!enabled) {
            return {
                themeProps: {},
                themeStyle: {},
            };
        }

        return {
            themeProps: {
                "data-fds-theme": themeContext?.theme,
                "data-fds-theme-mode": themeContext?.mode,
            },
            themeStyle: getInheritedInlineCssVariables(
                themeContext?.themeElement ?? null
            ),
        };
    }, [
        enabled,
        themeContext?.mode,
        themeContext?.theme,
        themeContext?.themeElement,
    ]);
};
