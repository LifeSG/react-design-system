import { useEffect, useMemo, useRef, useState } from "react";

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

    const themeMode = isModeControlled ? mode : computedMode;

    const themeElementRef = useRef<HTMLDivElement | null>(null);

    useIsomorphicLayoutEffect(() => {
        const cleanup = setupBreakpointListener();
        return cleanup;
    }, []);

    useEffect(() => {
        if (isModeControlled) return;

        return listenToSystemColourMode(setComputedMode);
    }, [isModeControlled]);

    const contextValue = useMemo(
        () => ({
            theme,
            mode: isModeControlled ? mode : computedMode,
            themeElement: themeElementRef.current,
        }),
        [theme, isModeControlled, mode, computedMode]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <div
                ref={themeElementRef}
                data-fds-theme={theme}
                data-fds-theme-mode={themeMode}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
