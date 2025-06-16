import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ColourMode, ThemeSpec } from "./types";

export interface DSTheme {
    colourMode: ColourMode;
    theme: ThemeSpec | null;
}

// Hook to access the current theme mode and theme object
export const useDSTheme = (): DSTheme => {
    const theme = useContext(ThemeContext) as ThemeSpec;

    if (!theme) {
        console.warn(
            "useDSTheme must be used within a DSThemeProvider or ThemeProvider"
        );
        return {
            colourMode: "light" as ColourMode,
            theme: null,
        };
    }

    return {
        colourMode: theme.colourMode || "light",
        theme,
    };
};

// =============================================================================
// THEME UTILITIES
// =============================================================================

// Utility function to detect system color scheme preference
export const getSystemColourMode = (): ColourMode => {
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }
    return "light";
};

// Utility function to create a theme with a specific color mode
export const createThemeWithColourMode = (
    baseTheme: ThemeSpec,
    colourMode: ColourMode
): ThemeSpec => ({
    ...baseTheme,
    colourMode,
});
