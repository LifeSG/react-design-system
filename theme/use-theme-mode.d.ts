import { ColourMode, DSTheme, ThemeSpec } from "./types";
export declare const useDSTheme: () => DSTheme;
export declare const getSystemColourMode: () => ColourMode;
export declare const createThemeWithColourMode: (baseTheme: ThemeSpec, colourMode: ColourMode) => ThemeSpec;
