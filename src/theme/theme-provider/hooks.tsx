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

/**
 * Returns the theme context from the nearest `ThemeProvider`.
 *
 * @returns The active `ThemeContextValue`. When called outside a provider,
 * returns defaults: `theme: "lifesg"`, `mode: "light"`, `themeElement: null`.
 */
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

/**
 * Builds `data-fds-theme*` attributes and inline CSS variables for re-stamping
 * the current theme onto a detached DOM element (e.g. a portal or floating
 * overlay).
 *
 * @param enabled When `false`, returns empty objects — useful to conditionally
 * skip the attribute injection.
 * @returns `themeProps` (spread onto the root element) and `themeStyle` (inline
 * CSS variables to apply).
 */
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
