import type { ResolvedThemeMode } from "../types";

export function getSystemColourMode(): ResolvedThemeMode {
    if (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }

    return "light";
}

export function listenToSystemColourMode(
    callback: (mode: ResolvedThemeMode) => void
) {
    if (typeof window === "undefined" || !window.matchMedia) {
        return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set the initial value
    callback(mediaQuery.matches ? "dark" : "light");

    const handler = (e: MediaQueryListEvent) => {
        callback(e.matches ? "dark" : "light");
    };

    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
}
