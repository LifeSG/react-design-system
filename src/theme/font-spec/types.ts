import { FontScheme } from "../types";

export type FontSpecCollectionMap = {
    [key in FontScheme]: FontSpecSet;
};

export type FontSpecSetOptions = Partial<FontSpecSet>;

export type FontSpecSet = {
    // Header sizes
    "heading-size-xxl": string;
    "heading-size-xl": string;
    "heading-size-lg": string;
    "heading-size-md": string;
    "heading-size-sm": string;
    "heading-size-xs": string;

    // Header line heights
    "heading-lh-xxl": string;
    "heading-lh-xl": string;
    "heading-lh-lg": string;
    "heading-lh-md": string;
    "heading-lh-sm": string;
    "heading-lh-xs": string;

    // Header letter spacing
    "heading-ls-xxl": string;
    "heading-ls-xl": string;
    "heading-ls-lg": string;
    "heading-ls-md": string;
    "heading-ls-sm": string;
    "heading-ls-xs": string;

    // Font weights
    "weight-light": string;
    "weight-regular": string;
    "weight-semibold": string;
    "weight-bold": string;

    // Font family
    "font-family": string;

    // Body sizes
    "body-size-baseline": string;
    "body-size-md": string;
    "body-size-sm": string;
    "body-size-xs": string;

    // Body line heights
    "body-lh-baseline": string;
    "body-lh-md": string;
    "body-lh-sm": string;
    "body-lh-xs": string;

    // Body letter spacing
    "body-ls-baseline": string;
    "body-ls-md": string;
    "body-ls-sm": string;
    "body-ls-xs": string;

    // Form label sizes
    "form-label-size": string;
    "form-description-size": string;

    // Form label line heights
    "form-label-lh": string;
    "form-description-lh": string;

    // Form label letter spacing
    "form-label-ls": string;
    "form-description-ls": string;
};
