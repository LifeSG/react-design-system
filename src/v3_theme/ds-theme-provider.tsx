import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import type {
    V3_ColourMode,
    V3_DSThemeProviderProps,
    V3_ThemeSpec,
} from "./types";
import { getSystemColourMode } from "./use-theme-mode";
import { V3_DefaultBreakpointSet } from "./breakpoint/specs/default-breakpoint-set";

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

    // Media query detection for breakpoint classes
    useEffect(() => {
        if (typeof window === "undefined") return;

        const breakpoints = V3_DefaultBreakpointSet;
        const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];

        const updateBodyClasses = () => {
            const width = window.innerWidth;
            const classesToAdd: string[] = [];

            // Find the current breakpoint size
            for (const size of sizes) {
                const minKey = `${size}-min` as keyof typeof breakpoints;
                const maxKey = `${size}-max` as keyof typeof breakpoints;
                const minValue = breakpoints[minKey];
                const maxValue = breakpoints[maxKey];

                const matchesMin =
                    typeof minValue === "number" && width >= minValue;
                const matchesMax =
                    typeof maxValue === "number" ? width <= maxValue : true;

                if (matchesMin && matchesMax) {
                    classesToAdd.push(`fds-breakpoint-${size}`);
                    break;
                }
            }

            // Add all applicable min and max breakpoint classes
            sizes.forEach((size) => {
                const minKey = `${size}-min` as keyof typeof breakpoints;
                const maxKey = `${size}-max` as keyof typeof breakpoints;
                const minValue = breakpoints[minKey];
                const maxValue = breakpoints[maxKey];

                if (typeof minValue === "number" && width >= minValue) {
                    classesToAdd.push(`fds-breakpoint-${size}-min`);
                }

                if (typeof maxValue === "number" && width <= maxValue) {
                    classesToAdd.push(`fds-breakpoint-${size}-max`);
                }
            });

            // Remove all existing breakpoint classes
            document.body.className = document.body.className
                .split(" ")
                .filter((cls) => !cls.startsWith("fds-breakpoint-"))
                .join(" ");

            // Add all matched breakpoint classes
            if (classesToAdd.length > 0) {
                document.body.classList.add(...classesToAdd);
            }
        };

        // Initial update
        updateBodyClasses();

        // Listen for window resize
        window.addEventListener("resize", updateBodyClasses);

        // Cleanup
        return () => {
            window.removeEventListener("resize", updateBodyClasses);

            // Remove breakpoint classes on unmount
            if (typeof document !== "undefined") {
                document.body.className = document.body.className
                    .split(" ")
                    .filter((cls) => !cls.startsWith("fds-breakpoint-"))
                    .join(" ");
            }
        };
    }, []);

    // Ensure that every theme object has a definitive colourMode
    const enhancedTheme: V3_ThemeSpec = {
        ...theme,
        colourMode: computedColourMode || "light",
    };

    return <ThemeProvider theme={enhancedTheme}>{children}</ThemeProvider>;
};
