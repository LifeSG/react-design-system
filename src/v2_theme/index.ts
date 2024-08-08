import { V2_ThemeContextKeys, V2_ThemeSpec } from "./types";

export const V2_BaseTheme: V2_ThemeSpec = {
    [V2_ThemeContextKeys.colorScheme]: "base",
    [V2_ThemeContextKeys.textStyleScheme]: "base",
    [V2_ThemeContextKeys.designTokenScheme]: "base",
    [V2_ThemeContextKeys.resourceScheme]: "base",
};

export const V2_BookingSGTheme: V2_ThemeSpec = {
    [V2_ThemeContextKeys.colorScheme]: "bookingsg",
    [V2_ThemeContextKeys.textStyleScheme]: "base",
    [V2_ThemeContextKeys.designTokenScheme]: "base",
    [V2_ThemeContextKeys.resourceScheme]: "bookingsg",
};

export const V2_RBSTheme: V2_ThemeSpec = {
    [V2_ThemeContextKeys.colorScheme]: "rbs",
    [V2_ThemeContextKeys.textStyleScheme]: "base",
    [V2_ThemeContextKeys.designTokenScheme]: "rbs",
    [V2_ThemeContextKeys.resourceScheme]: "rbs",
};

export const V2_MyLegacyTheme: V2_ThemeSpec = {
    [V2_ThemeContextKeys.colorScheme]: "mylegacy",
    [V2_ThemeContextKeys.textStyleScheme]: "base",
    [V2_ThemeContextKeys.designTokenScheme]: "base",
    [V2_ThemeContextKeys.resourceScheme]: "base",
};

export const V2_CCubeTheme: V2_ThemeSpec = {
    [V2_ThemeContextKeys.colorScheme]: "ccube",
    [V2_ThemeContextKeys.textStyleScheme]: "base",
    [V2_ThemeContextKeys.designTokenScheme]: "base",
    [V2_ThemeContextKeys.resourceScheme]: "ccube",
};

export const V2_OneServiceTheme: V2_ThemeSpec = {
    [V2_ThemeContextKeys.colorScheme]: "oneservice",
    [V2_ThemeContextKeys.textStyleScheme]: "oneservice",
    [V2_ThemeContextKeys.designTokenScheme]: "base",
    [V2_ThemeContextKeys.resourceScheme]: "base",
};

export * from "./types";
