import { useEffect, useState } from "react";

import { useTheme } from "../theme/theme-provider/hooks";
import type { CSSVariableString, ResolvedThemeMode } from "../theme/types";
import { parseCSSVariableValue } from "../theme/utils/css-variable";

/**
 * Resolves a design token's value in a specific theme mode,
 * defaulting to light mode regardless of the current theme mode.
 */
export const useForcedModeToken = (
    tokenName: CSSVariableString | undefined,
    mode: ResolvedThemeMode = "light"
): string | undefined => {
    const { theme, themeElement } = useTheme();
    const [value, setValue] = useState<string | undefined>();

    useEffect(() => {
        if (!themeElement || !tokenName) return;

        const tempEl = document.createElement("div");
        tempEl.setAttribute("data-fds-theme", theme);
        tempEl.setAttribute("data-fds-theme-mode", mode);
        tempEl.style.display = "none";
        themeElement.appendChild(tempEl);

        const resolved = parseCSSVariableValue(tokenName, tempEl);
        setValue(resolved || undefined);

        themeElement.removeChild(tempEl);
    }, [theme, themeElement, tokenName, mode]);

    return value;
};
