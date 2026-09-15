import type { ResolvedThemeMode } from "../types";
export declare function getSystemColourMode(): ResolvedThemeMode;
export declare function listenToSystemColourMode(callback: (mode: ResolvedThemeMode) => void): (() => void) | undefined;
