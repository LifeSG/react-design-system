import { css } from "@linaria/core";

import { Font } from "../theme";
import { createFontSizeStyles, createFontWeightStyles } from "./helper";
import type { TypographySize, TypographyWeight } from "./types";

const typographySizeSpec: Record<
    TypographySize,
    { size: string; lineHeight: string; letterSpacing: string }
> = {
    "heading-xxl": {
        size: Font.Spec["heading-size-xxl"],
        lineHeight: Font.Spec["heading-lh-xxl"],
        letterSpacing: Font.Spec["heading-ls-xxl"],
    },
    "heading-xl": {
        size: Font.Spec["heading-size-xl"],
        lineHeight: Font.Spec["heading-lh-xl"],
        letterSpacing: Font.Spec["heading-ls-xl"],
    },
    "heading-lg": {
        size: Font.Spec["heading-size-lg"],
        lineHeight: Font.Spec["heading-lh-lg"],
        letterSpacing: Font.Spec["heading-ls-lg"],
    },
    "heading-md": {
        size: Font.Spec["heading-size-md"],
        lineHeight: Font.Spec["heading-lh-md"],
        letterSpacing: Font.Spec["heading-ls-md"],
    },
    "heading-sm": {
        size: Font.Spec["heading-size-sm"],
        lineHeight: Font.Spec["heading-lh-sm"],
        letterSpacing: Font.Spec["heading-ls-sm"],
    },
    "heading-xs": {
        size: Font.Spec["heading-size-xs"],
        lineHeight: Font.Spec["heading-lh-xs"],
        letterSpacing: Font.Spec["heading-ls-xs"],
    },
    "body-baseline": {
        size: Font.Spec["body-size-baseline"],
        lineHeight: Font.Spec["body-lh-baseline"],
        letterSpacing: Font.Spec["body-ls-baseline"],
    },
    "body-md": {
        size: Font.Spec["body-size-md"],
        lineHeight: Font.Spec["body-lh-md"],
        letterSpacing: Font.Spec["body-ls-md"],
    },
    "body-sm": {
        size: Font.Spec["body-size-sm"],
        lineHeight: Font.Spec["body-lh-sm"],
        letterSpacing: Font.Spec["body-ls-sm"],
    },
    "body-xs": {
        size: Font.Spec["body-size-xs"],
        lineHeight: Font.Spec["body-lh-xs"],
        letterSpacing: Font.Spec["body-ls-xs"],
    },
};

export const typographySize: Record<TypographySize, string> = {
    "heading-xxl": css`
        ${createFontSizeStyles(typographySizeSpec["heading-xxl"])}
    `,
    "heading-xl": css`
        ${createFontSizeStyles(typographySizeSpec["heading-xl"])}
    `,
    "heading-lg": css`
        ${createFontSizeStyles(typographySizeSpec["heading-lg"])}
    `,
    "heading-md": css`
        ${createFontSizeStyles(typographySizeSpec["heading-md"])}
    `,
    "heading-sm": css`
        ${createFontSizeStyles(typographySizeSpec["heading-sm"])}
    `,
    "heading-xs": css`
        ${createFontSizeStyles(typographySizeSpec["heading-xs"])}
    `,
    "body-baseline": css`
        ${createFontSizeStyles(typographySizeSpec["body-baseline"])}
    `,
    "body-md": css`
        ${createFontSizeStyles(typographySizeSpec["body-md"])}
    `,
    "body-sm": css`
        ${createFontSizeStyles(typographySizeSpec["body-sm"])}
    `,
    "body-xs": css`
        ${createFontSizeStyles(typographySizeSpec["body-xs"])}
    `,
};

export const typographyWeight: Record<TypographyWeight, string> = {
    light: css`
        ${createFontWeightStyles(Font.Spec["weight-light"])}
    `,
    regular: css`
        ${createFontWeightStyles(Font.Spec["weight-regular"])}
    `,
    semibold: css`
        ${createFontWeightStyles(Font.Spec["weight-semibold"])}
    `,
    bold: css`
        ${createFontWeightStyles(Font.Spec["weight-bold"])}
    `,
};
