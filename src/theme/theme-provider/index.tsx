import React, { useEffect, useLayoutEffect, useState } from "react";
import { ThemeContext } from "./context";
import type { ThemeMode, ThemeType } from "../types";
import type { ThemeProviderProps } from "./types";
import {
    getSystemColourMode,
    listenToSystemColourMode,
} from "./system-colour-mode";

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme: controlledTheme,
    mode: controlledMode,
    initialTheme = "lifesg",
    initialMode,
    onThemeChange,
    onModeChange,
}) => {
    const isThemeControlled = controlledTheme !== undefined;
    const isModeControlled = controlledMode !== undefined;

    const [internalTheme, setInternalTheme] = useState(initialTheme);
    const [internalMode, setInternalMode] = useState(
        initialMode ?? getSystemColourMode()
    );
    console.log({ internalMode });

    const theme = isThemeControlled ? controlledTheme : internalTheme;

    const mode = isModeControlled ? controlledMode : internalMode;

    useIsomorphicLayoutEffect(() => {
        document.documentElement.dataset.fdsTheme = theme;
    }, [theme]);

    useIsomorphicLayoutEffect(() => {
        document.documentElement.dataset.fdsThemeMode = mode;
    }, [mode]);

    useEffect(() => {
        if (isModeControlled) return;

        const cleanup = listenToSystemColourMode((newMode) => {
            setInternalMode(newMode);
        });

        return cleanup;
    }, [isModeControlled]);

    const setTheme = (nextTheme: ThemeType) => {
        if (!isThemeControlled) {
            setInternalTheme(nextTheme);
        }
        onThemeChange?.(nextTheme);
    };

    const setMode = (nextMode: ThemeMode) => {
        if (!isModeControlled) {
            setInternalMode(nextMode);
        }
        onModeChange?.(nextMode);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                mode,
                setTheme,
                setMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
