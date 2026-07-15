import { useEffect, useState } from "react";

import { useTheme } from "../theme-provider/hooks";
import type { CSSVariableString, ResolvedThemeMode } from "../types";
import { parseCSSVariableValue } from "./css-variable";

interface UseDesignTokenOverrideOptions {
    token: CSSVariableString;
    mode?: ResolvedThemeMode;
}

/**
 * Resolves a design token's value in a specific theme mode,
 * regardless of the current active mode.
 *
 * @param options.token The CSS variable token to resolve.
 * @param options.mode The mode to resolve in.
 *
 * @returns The computed CSS value, or `undefined` when the theme element has
 * not yet mounted.
 *
 * @default options.mode "light"
 */
export const useDesignTokenOverride = ({
    token,
    mode = "light",
}: UseDesignTokenOverrideOptions): string | undefined => {
    const { theme, themeElement } = useTheme();
    const [value, setValue] = useState<string | undefined>();

    useEffect(() => {
        if (!themeElement) return;

        const tempEl = document.createElement("div");
        tempEl.dataset.fdsTheme = theme;
        tempEl.dataset.fdsThemeMode = mode;
        tempEl.style.display = "none";
        themeElement.appendChild(tempEl);

        const resolved = parseCSSVariableValue(token, tempEl);
        setValue(resolved || undefined);

        tempEl.remove();
    }, [theme, themeElement, token, mode]);

    return value;
};
