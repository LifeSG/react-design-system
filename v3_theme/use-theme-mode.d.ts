import type { V3_ColourMode, V3_DSTheme, V3_ThemeSpec } from "./types";
export declare const useDSTheme: () => V3_DSTheme;
export declare const getSystemColourMode: () => V3_ColourMode;
export declare const createThemeWithColourMode: (baseTheme: V3_ThemeSpec, colourMode: V3_ColourMode) => V3_ThemeSpec;
