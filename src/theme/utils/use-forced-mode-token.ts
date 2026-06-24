import { useEffect, useState } from "react";

import { useTheme } from "../theme-provider/hooks";
import type { CSSVariableString, ResolvedThemeMode } from "../types";
import { parseCSSVariableValue } from "./css-variable";

/**
 * Resolves a design token's value in a specific theme mode,
 * defaulting to light mode regardless of the current theme mode.
 */
export const useForcedModeToken = (
    tokenName: CSSVariableString,
    mode: ResolvedThemeMode = "light"
): string | undefined => {
    const { theme, themeElement } = useTheme();
    const [value, setValue] = useState<string | undefined>();

    useEffect(() => {
        if (!themeElement) return;

        const tempEl = document.createElement("div");
        tempEl.dataset.fdsTheme = theme;
        tempEl.dataset.fdsThemeMode = mode;
        tempEl.style.display = "none";
        themeElement.appendChild(tempEl);

        const resolved = parseCSSVariableValue(tokenName, tempEl);
        setValue(resolved || undefined);

        tempEl.remove();
    }, [theme, themeElement, tokenName, mode]);

    return value;
};
