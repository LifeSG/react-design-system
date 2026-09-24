import { jest } from "@jest/globals";
import type * as ThemeHooks from "src/theme/theme-provider/hooks";
import type { ThemeContextValue } from "src/theme/theme-provider/types";

// Polyfill PointerEvent for jsdom (extends MouseEvent to get button, clientX, etc.)
if (typeof globalThis.PointerEvent === "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- globalThis lacks PointerEvent type in jsdom
    (globalThis as any).PointerEvent = MouseEvent;
}

const getFallbackThemeContext = (): ThemeContextValue => ({
    theme: "lifesg",
    mode: "light",
    fontPreset: undefined,
    themeElement:
        typeof document === "undefined" ? null : document.documentElement,
});

Object.defineProperty(globalThis, "scrollTo", {
    writable: true,
    value: () => {
        // noop for jsdom
    },
});

jest.mock("src/theme/theme-provider/hooks", () => {
    const actual: typeof ThemeHooks = jest.requireActual(
        "src/theme/theme-provider/hooks"
    );

    return {
        ...actual,
        useTheme: () => {
            try {
                return actual.useTheme();
            } catch (error) {
                if (
                    error instanceof Error &&
                    error.message ===
                        "useTheme must be used within ThemeProvider"
                ) {
                    return getFallbackThemeContext();
                }

                throw error;
            }
        },
    };
});
