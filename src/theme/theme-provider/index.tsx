import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context";
import type { ThemeProviderProps } from "./types";
import {
    getSystemColourMode,
    listenToSystemColourMode,
} from "./system-colour-mode";
import { useIsomorphicLayoutEffect } from "../../util";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme = "lifesg",
    mode,
}) => {
    const isModeControlled = mode !== undefined;

    const [computedMode, setComputedMode] = useState(
        mode ?? getSystemColourMode()
    );

    useIsomorphicLayoutEffect(() => {
        document.documentElement.dataset.fdsTheme = theme;
    }, [theme]);

    useIsomorphicLayoutEffect(() => {
        document.documentElement.dataset.fdsThemeMode = isModeControlled
            ? mode!
            : computedMode;
    }, [theme, mode, computedMode, isModeControlled]);

    useEffect(() => {
        if (isModeControlled) return;

        return listenToSystemColourMode(setComputedMode);
    }, [isModeControlled]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                mode: isModeControlled ? mode! : computedMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
