import { ColorSet, ColorSetOptions } from "../color/types";
import { DesignTokenSet, DesignTokenSetOptions } from "../design-token/types";
import { TextStyleSetOptionsType, TextStyleSetType } from "../text/types";

export type ThemeLayout = "normal";

// =============================================================================
// COLOR THEMES
// =============================================================================
export type ColorScheme = "base" | "bookingsg" | "rbs" | "mylegacy" | "ccube";
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
// DESIGN TOKEN THEMES
// =============================================================================
export type DesignTokenScheme = "base" | "rbs";
export type DesignTokenCollectionsMap = {
    [key in DesignTokenScheme]: DesignTokenSet;
};

// =============================================================================
// RESOURCE THEMES
// =============================================================================
export type ResourceScheme = "base" | "bookingsg" | "rbs";

// =============================================================================
// GENERAL
// =============================================================================
export enum ThemeContextKeys {
    colorScheme = "colorScheme",
    layout = "layout",
    textStyleScheme = "textStyleScheme",
    designTokenScheme = "designTokenScheme",
    resourceScheme = "resourceScheme",
}

export interface ThemeSpecOptions {
    /** for color customisation, can specify subset of set */
    color?: ColorSetOptions | undefined;
    textStyle?: TextStyleSetOptionsType | undefined;
    designToken?: DesignTokenSetOptions | undefined;
}

export interface ThemeSpec {
    /** Sets the color scheme of the theme */
    [ThemeContextKeys.colorScheme]: ColorScheme;
    /** Sets the text style scheme of the theme */
    [ThemeContextKeys.textStyleScheme]: TextStyleScheme;
    /** Sets the design token scheme of the theme */
    [ThemeContextKeys.designTokenScheme]: DesignTokenScheme;
    /** Sets the layout scheme of the theme */
    [ThemeContextKeys.layout]?: ThemeLayout | undefined;
    /** Sets the resource scheme (e.g. images, text) of the theme */
    [ThemeContextKeys.resourceScheme]: ResourceScheme;
    /** For specific customisations to any schemes */
    options?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
