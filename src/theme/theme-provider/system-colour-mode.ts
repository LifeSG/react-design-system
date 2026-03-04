import type { ThemeMode } from "../types";

export function getSystemColourMode(): ThemeMode {
    if (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }

    return "light";
}

export function listenToSystemColourMode(callback: (mode: ThemeMode) => void) {
    if (typeof window === "undefined" || !window.matchMedia) {
        return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
        console.log({ e });
        callback(e.matches ? "dark" : "light");
    };

    if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
}
