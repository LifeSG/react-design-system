import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { V3_ColourMode, V3_DSTheme, V3_ThemeSpec } from "./types";

// Hook to access the current theme mode and theme object
export const useDSTheme = (): V3_DSTheme => {
    const theme = useContext(ThemeContext) as V3_ThemeSpec;

    if (!theme) {
        console.warn(
            "useDSTheme must be used within a DSThemeProvider or ThemeProvider"
        );
        return {
            colourMode: "light",
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
export const getSystemColourMode = (): V3_ColourMode => {
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }
    return "light";
};

// Utility function to create a theme with a specific color mode
export const createThemeWithColourMode = (
    baseTheme: V3_ThemeSpec,
    colourMode: V3_ColourMode
): V3_ThemeSpec => ({
    ...baseTheme,
    colourMode,
});
