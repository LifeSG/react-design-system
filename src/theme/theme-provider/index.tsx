import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";

import { useIsomorphicLayoutEffect } from "../../util";
import { setupBreakpointListener } from "./breakpoint";
import { ThemeContext } from "./context";
import {
    getSystemColourMode,
    listenToSystemColourMode,
} from "./system-colour-mode";
import type { ThemeProviderProps } from "./types";

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    theme = "lifesg",
    mode,
    className,
    style,
}) => {
    const isModeControlled = mode !== undefined;

    const [computedMode, setComputedMode] = useState(
        mode ?? getSystemColourMode()
    );
    const [themeElement, setThemeElement] = useState<HTMLDivElement | null>(
        null
    );

    const themeMode = isModeControlled ? mode : computedMode;

    const setThemeElementRef = (node: HTMLDivElement | null) => {
        setThemeElement(node);
    };

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
            mode: themeMode,
            themeElement,
        }),
        [theme, themeMode, themeElement]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <div
                ref={setThemeElementRef}
                data-fds-theme={theme}
                data-fds-theme-mode={themeMode}
                className={className}
                style={style}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
