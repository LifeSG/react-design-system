import { FontScheme } from "../types";

export type FontSpecCollectionMap = {
    [key in FontScheme]: FontSpecSet;
};

export type FontSpecSetOptions = Partial<FontSpecSet>;

export type FontSpecSet = {
    // Header sizes
    "header-size-xxl": string;
    "header-size-xl": string;
    "header-size-lg": string;
    "header-size-md": string;
    "header-size-sm": string;
    "header-size-xs": string;

    // Header line heights
    "header-lh-xxl": string;
    "header-lh-xl": string;
    "header-lh-lg": string;
    "header-lh-md": string;
    "header-lh-sm": string;
    "header-lh-xs": string;

    // Header letter spacing
    "header-ls-xxl": string;
    "header-ls-xl": string;
    "header-ls-lg": string;
    "header-ls-md": string;
    "header-ls-sm": string;
    "header-ls-xs": string;

    // Font weights
    "weight-light": string;
    "weight-regular": string;
    "weight-semibold": string;
    "weight-bold": string;

    // Font family
    "font-family": string;

    // Body sizes
    "body-size-baseline": string;
    "body-size-lg": string;
    "body-size-md": string;
    "body-size-sm": string;

    // Body line heights
    "body-lh-baseline": string;
    "body-lh-lg": string;
    "body-lh-md": string;
    "body-lh-sm": string;

    // Body letter spacing
    "body-ls-baseline": string;
    "body-ls-lg": string;
    "body-ls-md": string;
    "body-ls-sm": string;

    // Form label sizes
    "formlabel-size-baseline": string;
    "formlabel-size-lg": string;

    // Form label line heights
    "formlabel-lh-baseline": string;
    "formlabel-lh-lg": string;

    // Form label letter spacing
    "formlabel-ls-baseline": string;
    "formlabel-ls-lg": string;
};
