import { useContext, useMemo } from "react";

import { getInheritedInlineCssVariables } from "../utils/css-variable";
import { ThemeContext } from "./context";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
};

export const useInheritedThemeVariables = (enabled: boolean) => {
    const themeContext = useContext(ThemeContext);

    return useMemo(() => {
        if (!enabled) return {};

        return getInheritedInlineCssVariables(
            themeContext?.themeElement ?? null
        );
    }, [enabled, themeContext?.themeElement]);
};
