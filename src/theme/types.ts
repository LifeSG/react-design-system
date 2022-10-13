import { ColorSet, ColorSetOptions } from "../color/types";
import { TextStyleSetOptionsType, TextStyleSetType } from "../text/types";

export type ThemeLayout = "normal";

// =============================================================================
// COLOR THEMES
// =============================================================================
export type ColorScheme = "base" | "bookingsg";
export type ColorCollectionsMap = {
    [key in ColorScheme]: ColorSet;
};

// =============================================================================
// FONT STYLE THEMES
// =============================================================================
export type TextStyleScheme = "base";
export type FontStyleCollectionsMap = {
    [key in TextStyleScheme]: TextStyleSetType;
};

// =============================================================================
// GENERAL
// =============================================================================
export enum ThemeContextKeys {
    colorScheme = "colorScheme",
    layout = "layout",
    textStyleScheme = "textStyleScheme",
}

export interface ThemeSpecOptions {
    /** for color customisation, can specify subset of set */
    color?: ColorSetOptions | undefined;
    textStyle?: TextStyleSetOptionsType | undefined;
}

export interface ThemeSpec {
    /** Sets the color scheme of the theme */
    [ThemeContextKeys.colorScheme]: ColorScheme;
    /** Sets the text style scheme of the theme */
    [ThemeContextKeys.textStyleScheme]: TextStyleScheme;
    /** Sets the layout scheme of the theme */
    [ThemeContextKeys.layout]?: ThemeLayout | undefined;
    /** For specific customisations to any schemes */
    options?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
