import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { V3_ColourMode, V3_DSThemeProviderProps, V3_ThemeSpec } from "./types";
import { getSystemColourMode } from "./use-theme-mode";

// Wraps styled-components ThemeProvider and automatically handles colourMode
// detection based on system preferences when not explicitly set in theme
export const V3_DSThemeProvider = ({
    theme,
    children,
}: V3_DSThemeProviderProps) => {
    const [computedColourMode, setComputedColourMode] = useState<
        V3_ColourMode | undefined
    >(theme?.colourMode);

    useEffect(() => {
        // If theme is not provided, default to light mode
        if (!theme) {
            setComputedColourMode("light");
            return;
        }

        // If colourMode is explicitly set in theme, use that
        if (theme.colourMode) {
            setComputedColourMode(theme.colourMode);
            return;
        }

        // Otherwise, detect system preference
        const initialMode = getSystemColourMode();
        setComputedColourMode(initialMode);

        // Listen for system preference changes
        if (typeof window !== "undefined" && window.matchMedia) {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );

            const handleChange = (e: MediaQueryListEvent) => {
                // Only update if theme doesn't have explicit colourMode
                if (!theme.colourMode) {
                    setComputedColourMode(e.matches ? "dark" : "light");
                }
            };

            // Use the newer addEventListener if available, fallback to addListener
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener("change", handleChange);
                return () =>
                    mediaQuery.removeEventListener("change", handleChange);
            } else {
                // Fallback for older browsers
                mediaQuery.addListener(handleChange);
                return () => mediaQuery.removeListener(handleChange);
            }
        }
    }, [theme?.colourMode]);

    // Ensure that every theme object has a definitive colourMode
    const enhancedTheme: V3_ThemeSpec = {
        ...theme,
        colourMode: computedColourMode || "light",
    };

    return <ThemeProvider theme={enhancedTheme}>{children}</ThemeProvider>;
};
