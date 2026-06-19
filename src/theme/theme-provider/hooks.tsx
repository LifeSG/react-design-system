import type { CSSProperties } from "react";
import { useContext, useMemo } from "react";

import { getInheritedInlineCssVariables } from "../utils/css-variable";
import { ThemeContext } from "./context";
import type { ThemeContextValue } from "./types";

type InheritedThemeScope = {
    themeProps: {
        "data-fds-theme"?: string;
        "data-fds-theme-mode"?: string;
    };
    themeStyle: CSSProperties;
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);

    if (!context) {
        return {
            theme: "lifesg",
            mode: "light",
            themeElement: null,
        };
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
