import type { FontSize, FontWeight } from "../types";

export interface FontDeclarationProperties {
    "font-family": string;
    "font-variant": string;
    "font-size": string;
    "font-weight": string;
    "line-height": string;
    "letter-spacing": string;
}

const sizeVarMap: Record<
    FontSize,
    { fontFamily: string; size: string; lh: string; ls: string }
> = {
    "heading-xxl": {
        fontFamily: "var(--fds-heading-font-family)",
        size: "var(--fds-font-heading-size-xxl)",
        lh: "var(--fds-font-heading-lh-xxl)",
        ls: "var(--fds-font-heading-ls-xxl)",
    },
    "heading-xl": {
        fontFamily: "var(--fds-heading-font-family)",
        size: "var(--fds-font-heading-size-xl)",
        lh: "var(--fds-font-heading-lh-xl)",
        ls: "var(--fds-font-heading-ls-xl)",
    },
    "heading-lg": {
        fontFamily: "var(--fds-heading-font-family)",
        size: "var(--fds-font-heading-size-lg)",
        lh: "var(--fds-font-heading-lh-lg)",
        ls: "var(--fds-font-heading-ls-lg)",
    },
    "heading-md": {
        fontFamily: "var(--fds-heading-font-family)",
        size: "var(--fds-font-heading-size-md)",
        lh: "var(--fds-font-heading-lh-md)",
        ls: "var(--fds-font-heading-ls-md)",
    },
    "heading-sm": {
        fontFamily: "var(--fds-heading-font-family)",
        size: "var(--fds-font-heading-size-sm)",
        lh: "var(--fds-font-heading-lh-sm)",
        ls: "var(--fds-font-heading-ls-sm)",
    },
    "heading-xs": {
        fontFamily: "var(--fds-heading-font-family)",
        size: "var(--fds-font-heading-size-xs)",
        lh: "var(--fds-font-heading-lh-xs)",
        ls: "var(--fds-font-heading-ls-xs)",
    },
    "body-baseline": {
        fontFamily: "var(--fds-body-font-family)",
        size: "var(--fds-font-body-size-baseline)",
        lh: "var(--fds-font-body-lh-baseline)",
        ls: "var(--fds-font-body-ls-baseline)",
    },
    "body-md": {
        fontFamily: "var(--fds-body-font-family)",
        size: "var(--fds-font-body-size-md)",
        lh: "var(--fds-font-body-lh-md)",
        ls: "var(--fds-font-body-ls-md)",
    },
    "body-sm": {
        fontFamily: "var(--fds-body-font-family)",
        size: "var(--fds-font-body-size-sm)",
        lh: "var(--fds-font-body-lh-sm)",
        ls: "var(--fds-font-body-ls-sm)",
    },
    "body-xs": {
        fontFamily: "var(--fds-body-font-family)",
        size: "var(--fds-font-body-size-xs)",
        lh: "var(--fds-font-body-lh-xs)",
        ls: "var(--fds-font-body-ls-xs)",
    },
    "form-label": {
        fontFamily: "var(--fds-font-family)",
        size: "var(--fds-font-form-label-size)",
        lh: "var(--fds-font-form-label-lh)",
        ls: "var(--fds-font-form-label-ls)",
    },
    "form-description": {
        fontFamily: "var(--fds-font-family)",
        size: "var(--fds-font-form-description-size)",
        lh: "var(--fds-font-form-description-lh)",
        ls: "var(--fds-font-form-description-ls)",
    },
};

const weightVarMap: Record<FontWeight, string> = {
    light: "var(--fds-font-weight-light)",
    regular: "var(--fds-font-weight-regular)",
    semibold: "var(--fds-font-weight-semibold)",
    bold: "var(--fds-font-weight-bold)",
};

/**
 * Generates a CSS font declaration map using FDS CSS variables.
 *
 * @example
 * generateFontProperties("heading-xxl", "light")
 * // => { "font-family": "var(--fds-font-family)", ... }
 */
export const generateFontProperties = (
    size: FontSize,
    weight: FontWeight,
    options?: { noCommonLigatures?: boolean; fontVariant?: string }
): FontDeclarationProperties => {
    const { fontFamily, size: s, lh, ls } = sizeVarMap[size];
    const w = weightVarMap[weight];

    const extraVariant = [
        options?.fontVariant,
        options?.noCommonLigatures ? "no-common-ligatures" : "",
    ]
        .filter(Boolean)
        .join(" ");

    const fontVariant = `var(--fds-font-variant)${
        extraVariant ? ` ${extraVariant}` : ""
    }`;

    return {
        "font-family": fontFamily,
        "font-variant": fontVariant,
        "font-size": s,
        "font-weight": w,
        "line-height": lh,
        "letter-spacing": ls,
    };
};

/**
 * Generates a CSS declaration string using FDS CSS variables.
 *
 * @example
 * generateFont("heading-xxl", "light")
 * // => "font-family: var(--fds-font-family); font-variant: var(--fds-font-variant); ..."
 */
export const generateFont = (
    size: FontSize,
    weight: FontWeight,
    options?: { noCommonLigatures?: boolean; fontVariant?: string }
): string => {
    const declarations = generateFontProperties(size, weight, options);

    return Object.entries(declarations)
        .map(([key, value]) => `${key}: ${value};`)
        .join(" ");
};
