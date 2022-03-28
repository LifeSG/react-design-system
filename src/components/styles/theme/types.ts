export type ColorScheme = "base" | "bookingsg";
export type Layout = "normal";

export enum ThemeContextKeys {
    colorScheme = "colorScheme",
    layout = "layout",
}

export interface ThemeSpec {
    [ThemeContextKeys.colorScheme]: ColorScheme;
    [ThemeContextKeys.layout]?: Layout;
}
