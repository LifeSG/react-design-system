import type React from "react";
import { useEffect, useState } from "react";

import { useIsomorphicLayoutEffect } from "../../util";
import { setupBreakpointListener } from "./breakpoint";
import { ThemeContext } from "./context";
import {
    getSystemColourMode,
    listenToSystemColourMode,
} from "./system-colour-mode";
import type { ThemeProviderProps } from "./types";

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
    }, [mode, computedMode, isModeControlled]);

    useIsomorphicLayoutEffect(() => {
        const cleanup = setupBreakpointListener();
        return cleanup;
    }, []);

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
