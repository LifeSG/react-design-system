/* eslint-disable @typescript-eslint/naming-convention */
import { V2_ColorSet, V2_ColorSetOptions } from "../v2_color/types";

import {
    V2_DesignTokenSet,
    V2_DesignTokenSetOptions,
} from "../v2_design-token/types";
import {
    V2_TextStyleSetOptionsType,
    V2_TextStyleSetType,
} from "../v2_text/types";

export type V2_ThemeLayout = "normal";

// =============================================================================
// COLOR THEMES
// =============================================================================
export type V2_ColorScheme =
    | "base"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube"
    | "oneservice";
export type V2_ColorCollectionsMap = {
    [key in V2_ColorScheme]: V2_ColorSet;
};

// =============================================================================
// FONT STYLE THEMES
// =============================================================================
export type V2_TextStyleScheme = "base" | "oneservice" | "plusJakartaSans";
export type V2_FontStyleCollectionsMap = {
    [key in V2_TextStyleScheme]: V2_TextStyleSetType;
};

// =============================================================================
// DESIGN TOKEN THEMES
// =============================================================================
export type V2_DesignTokenScheme = "base" | "rbs";
export type V2_DesignTokenCollectionsMap = {
    [key in V2_DesignTokenScheme]: V2_DesignTokenSet;
};

// =============================================================================
// RESOURCE THEMES
// =============================================================================
export type V2_ResourceScheme =
    | "base"
    | "bookingsg"
    | "rbs"
    | "ccube"
    | "mylegacy";

// =============================================================================
// GENERAL
// =============================================================================
export enum V2_ThemeContextKeys {
    colorScheme = "colorScheme",
    layout = "layout",
    textStyleScheme = "textStyleScheme",
    designTokenScheme = "designTokenScheme",
    resourceScheme = "resourceScheme",
}

export interface V2_ThemeSpecOptions {
    /** for color customisation, can specify subset of set */
    color?: V2_ColorSetOptions | undefined;
    textStyle?: V2_TextStyleSetOptionsType | undefined;
    designToken?: V2_DesignTokenSetOptions | undefined;
}

export interface V2_ThemeSpec {
    /** Sets the color scheme of the theme */
    [V2_ThemeContextKeys.colorScheme]: V2_ColorScheme;
    /** Sets the text style scheme of the theme */
    [V2_ThemeContextKeys.textStyleScheme]: V2_TextStyleScheme;
    /** Sets the design token scheme of the theme */
    [V2_ThemeContextKeys.designTokenScheme]: V2_DesignTokenScheme;
    /** Sets the layout scheme of the theme */
    [V2_ThemeContextKeys.layout]?: V2_ThemeLayout | undefined;
    /** Sets the resource scheme (e.g. images, text) of the theme */
    [V2_ThemeContextKeys.resourceScheme]: V2_ResourceScheme;
    /** For specific customisations to any schemes */
    options?: V2_ThemeSpecOptions | undefined;
}

export interface V2_ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
