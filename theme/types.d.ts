import { ColorSet, ColorSetOptions } from "../color/types";
import { DesignTokenSet, DesignTokenSetOptions } from "../design-token/types";
import { TextStyleSetOptionsType, TextStyleSetType } from "../text/types";
export declare type ThemeLayout = "normal";
export declare type ColorScheme = "base" | "bookingsg";
export declare type ColorCollectionsMap = {
    [key in ColorScheme]: ColorSet;
};
export declare type TextStyleScheme = "base";
export declare type FontStyleCollectionsMap = {
    [key in TextStyleScheme]: TextStyleSetType;
};
export declare type DesignTokenScheme = "base";
export declare type DesignTokenCollectionsMap = {
    [key in DesignTokenScheme]: DesignTokenSet;
};
export declare enum ThemeContextKeys {
    colorScheme = "colorScheme",
    layout = "layout",
    textStyleScheme = "textStyleScheme",
    designTokenScheme = "designTokenScheme"
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
    /** For specific customisations to any schemes */
    options?: ThemeSpecOptions | undefined;
}
export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
