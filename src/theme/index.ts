import { ThemeContextKeys, ThemeSpec } from "./types";

export const BaseTheme: ThemeSpec = {
    [ThemeContextKeys.colorScheme]: "base",
    [ThemeContextKeys.textStyleScheme]: "base",
    [ThemeContextKeys.designTokenScheme]: "base",
    [ThemeContextKeys.resourceScheme]: "base",
};

export const BookingSGTheme: ThemeSpec = {
    [ThemeContextKeys.colorScheme]: "bookingsg",
    [ThemeContextKeys.textStyleScheme]: "base",
    [ThemeContextKeys.designTokenScheme]: "base",
    [ThemeContextKeys.resourceScheme]: "bookingsg",
};

export * from "./types";
