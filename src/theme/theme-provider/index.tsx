import type { Ref } from "react";
import { forwardRef, useEffect, useMemo, useState } from "react";

import { mergeRefs, useIsomorphicLayoutEffect } from "../../util";
import { setupBreakpointListener } from "./breakpoint";
import { ThemeContext } from "./context";
import {
    getSystemColourMode,
    listenToSystemColourMode,
} from "./system-colour-mode";
import type { ThemeProviderProps } from "./types";

const InnerThemeProvider = (
    {
        children,
        theme = "lifesg",
        mode = "auto",
        className,
        style,
    }: ThemeProviderProps,
    ref: Ref<HTMLDivElement>
) => {
    const isModeControlled = mode !== "auto";

    const [computedMode, setComputedMode] = useState(() =>
        isModeControlled ? mode : getSystemColourMode()
    );
    const [themeElement, setThemeElement] = useState<HTMLDivElement | null>(
        null
    );

    const themeMode = isModeControlled ? mode : computedMode;

    // Re-subscribe when the source node or token set changes:
    // - `themeElement`: scoped breakpoint tokens may live on this element
    // - `theme` / `themeMode`: breakpoint token values can differ across theme/mode
    useIsomorphicLayoutEffect(() => {
        const sourceElement = themeElement ?? document.documentElement;
        const cleanup = setupBreakpointListener(sourceElement);
        return cleanup;
    }, [themeElement, theme, themeMode]);

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
                ref={mergeRefs(ref, setThemeElement)}
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

export const ThemeProvider = forwardRef<HTMLDivElement, ThemeProviderProps>(
    InnerThemeProvider
);
