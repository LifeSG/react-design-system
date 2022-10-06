import { ThemeContextKeys, ThemeSpec } from "./types";

export const BaseTheme: ThemeSpec = {
    [ThemeContextKeys.colorScheme]: "base",
    [ThemeContextKeys.textStyleScheme]: "base",
};

export const BookingSGTheme: ThemeSpec = {
    [ThemeContextKeys.colorScheme]: "bookingsg",
    [ThemeContextKeys.textStyleScheme]: "base",
};

export * from "./types";
