import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context";
import type { ThemeMode, ThemeType } from "../types";
import type { ThemeProviderProps } from "./types";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme: controlledTheme,
    mode: controlledMode,
    initialTheme = "lifesg",
    initialMode = "light",
    onThemeChange,
    onModeChange,
}) => {
    const [internalTheme, setInternalTheme] = useState(initialTheme);
    const [internalMode, setInternalMode] = useState(initialMode);

    const theme = controlledTheme ?? internalTheme;
    const mode = controlledMode ?? internalMode;

    useEffect(() => {
        document.documentElement.dataset.fdsTheme = theme;
    }, [theme]);

    useEffect(() => {
        document.documentElement.dataset.fdsThemeMode = mode;
    }, [mode]);

    const setTheme = (nextTheme: ThemeType) => {
        if (!controlledTheme) {
            setInternalTheme(nextTheme);
        }
        onThemeChange?.(nextTheme);
    };

    const setMode = (nextMode: ThemeMode) => {
        if (!controlledMode) {
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
