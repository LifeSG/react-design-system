import { v2_ColorSet, v2_ColorSetOptions } from "../v2_color/types";

import {
    v2_DesignTokenSet,
    v2_DesignTokenSetOptions,
} from "../v2_design-token/types";
import {
    V2_TextStyleSetOptionsType,
    V2_TextStyleSetType,
} from "../v2_text/types";

export type ThemeLayout = "normal";

// =============================================================================
// COLOR THEMES
// =============================================================================
export type ColorScheme =
    | "base"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube"
    | "oneservice";
export type ColorCollectionsMap = {
    [key in ColorScheme]: v2_ColorSet;
};

// =============================================================================
// FONT STYLE THEMES
// =============================================================================
export type TextStyleScheme = "base" | "oneservice";
export type FontStyleCollectionsMap = {
    [key in TextStyleScheme]: V2_TextStyleSetType;
};

// =============================================================================
// DESIGN TOKEN THEMES
// =============================================================================
export type DesignTokenScheme = "base" | "rbs";
export type DesignTokenCollectionsMap = {
    [key in DesignTokenScheme]: v2_DesignTokenSet;
};

// =============================================================================
// RESOURCE THEMES
// =============================================================================
export type ResourceScheme = "base" | "bookingsg" | "rbs" | "ccube";

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
    color?: v2_ColorSetOptions | undefined;
    textStyle?: V2_TextStyleSetOptionsType | undefined;
    designToken?: v2_DesignTokenSetOptions | undefined;
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
