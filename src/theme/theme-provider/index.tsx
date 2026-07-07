import type { Ref } from "react";
import { forwardRef, useEffect, useMemo, useState } from "react";

import { mergeRefs, useIsomorphicLayoutEffect } from "../../util";
import type { ResolvedThemeMode } from "../types";
import { setupBreakpointListener } from "./breakpoint";
import { ThemeContext } from "./context";
import { listenToSystemColourMode } from "./system-colour-mode";
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

    const [computedMode, setComputedMode] = useState<ResolvedThemeMode>(
        isModeControlled ? mode : "light"
    );
    const [themeElement, setThemeElement] = useState<HTMLDivElement | null>(
        null
    );

    // Re-subscribe when the source node or token set changes:
    // - `themeElement`: scoped breakpoint tokens may live on this element
    // - `theme` / `themeMode`: breakpoint token values can differ across theme/mode
    useIsomorphicLayoutEffect(() => {
        const sourceElement = themeElement ?? document.documentElement;
        const cleanup = setupBreakpointListener(sourceElement);
        return cleanup;
    }, [themeElement, theme, computedMode]);

    useEffect(() => {
        if (isModeControlled) {
            setComputedMode(mode);
            return;
        }

        return listenToSystemColourMode(setComputedMode);
    }, [isModeControlled, mode]);

    const contextValue = useMemo(
        () => ({
            theme,
            mode: computedMode,
            themeElement,
        }),
        [theme, computedMode, themeElement]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <div
                ref={mergeRefs(ref, setThemeElement)}
                data-fds-theme={theme}
                data-fds-theme-mode={computedMode}
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
