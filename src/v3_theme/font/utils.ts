import { css } from "styled-components";

import { getFontSpec } from "../font-spec/theme-helper";
import type { V3_FontSet, V3_FontSpecSet } from "../types";
import type { V3_FontSetAdditionalOptions } from "./types";

export const generateFontCSS = (
    fontFamilyKey: keyof V3_FontSpecSet,
    fontSizeKey: keyof V3_FontSpecSet,
    fontWeightKey: keyof V3_FontSpecSet,
    lineHeightKey: keyof V3_FontSpecSet,
    letterSpacingKey: keyof V3_FontSpecSet,
    options?: V3_FontSetAdditionalOptions
) => {
    const { disableLigatures } = options || {};

    return css`
        font-family: ${getFontSpec(fontFamilyKey)};
        font-size: ${getFontSpec(fontSizeKey)};
        font-weight: ${getFontSpec(fontWeightKey)};
        line-height: ${getFontSpec(lineHeightKey)};
        letter-spacing: ${getFontSpec(letterSpacingKey)};

        font-variant: ${disableLigatures ? "no-common-ligatures" : "normal"};
    `;
};

export const getFontSet = (
    options: V3_FontSetAdditionalOptions = {}
): V3_FontSet => ({
    "heading-xxl-light": generateFontCSS(
        "heading-font-family",
        "heading-size-xxl",
        "weight-light",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xxl-regular": generateFontCSS(
        "heading-font-family",
        "heading-size-xxl",
        "weight-regular",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xxl-semibold": generateFontCSS(
        "heading-font-family",
        "heading-size-xxl",
        "weight-semibold",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xxl-bold": generateFontCSS(
        "heading-font-family",
        "heading-size-xxl",
        "weight-bold",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xl-light": generateFontCSS(
        "heading-font-family",
        "heading-size-xl",
        "weight-light",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-xl-regular": generateFontCSS(
        "heading-font-family",
        "heading-size-xl",
        "weight-regular",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-xl-semibold": generateFontCSS(
        "heading-font-family",
        "heading-size-xl",
        "weight-semibold",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-xl-bold": generateFontCSS(
        "heading-font-family",
        "heading-size-xl",
        "weight-bold",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-lg-light": generateFontCSS(
        "heading-font-family",
        "heading-size-lg",
        "weight-light",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-lg-regular": generateFontCSS(
        "heading-font-family",
        "heading-size-lg",
        "weight-regular",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-lg-semibold": generateFontCSS(
        "heading-font-family",
        "heading-size-lg",
        "weight-semibold",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-lg-bold": generateFontCSS(
        "heading-font-family",
        "heading-size-lg",
        "weight-bold",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-md-light": generateFontCSS(
        "heading-font-family",
        "heading-size-md",
        "weight-light",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-md-regular": generateFontCSS(
        "heading-font-family",
        "heading-size-md",
        "weight-regular",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-md-semibold": generateFontCSS(
        "heading-font-family",
        "heading-size-md",
        "weight-semibold",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-md-bold": generateFontCSS(
        "heading-font-family",
        "heading-size-md",
        "weight-bold",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-sm-light": generateFontCSS(
        "heading-font-family",
        "heading-size-sm",
        "weight-light",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-sm-regular": generateFontCSS(
        "heading-font-family",
        "heading-size-sm",
        "weight-regular",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-sm-semibold": generateFontCSS(
        "heading-font-family",
        "heading-size-sm",
        "weight-semibold",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-sm-bold": generateFontCSS(
        "heading-font-family",
        "heading-size-sm",
        "weight-bold",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-xs-light": generateFontCSS(
        "heading-font-family",
        "heading-size-xs",
        "weight-light",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "heading-xs-regular": generateFontCSS(
        "heading-font-family",
        "heading-size-xs",
        "weight-regular",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "heading-xs-semibold": generateFontCSS(
        "heading-font-family",
        "heading-size-xs",
        "weight-semibold",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "heading-xs-bold": generateFontCSS(
        "heading-font-family",
        "heading-size-xs",
        "weight-bold",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "body-baseline-light": generateFontCSS(
        "body-font-family",
        "body-size-baseline",
        "weight-light",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-baseline-regular": generateFontCSS(
        "body-font-family",
        "body-size-baseline",
        "weight-regular",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-baseline-semibold": generateFontCSS(
        "body-font-family",
        "body-size-baseline",
        "weight-semibold",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-baseline-bold": generateFontCSS(
        "body-font-family",
        "body-size-baseline",
        "weight-bold",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-md-light": generateFontCSS(
        "body-font-family",
        "body-size-md",
        "weight-light",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-md-regular": generateFontCSS(
        "body-font-family",
        "body-size-md",
        "weight-regular",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-md-semibold": generateFontCSS(
        "body-font-family",
        "body-size-md",
        "weight-semibold",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-md-bold": generateFontCSS(
        "body-font-family",
        "body-size-md",
        "weight-bold",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-sm-light": generateFontCSS(
        "body-font-family",
        "body-size-sm",
        "weight-light",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-sm-regular": generateFontCSS(
        "body-font-family",
        "body-size-sm",
        "weight-regular",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-sm-semibold": generateFontCSS(
        "body-font-family",
        "body-size-sm",
        "weight-semibold",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-sm-bold": generateFontCSS(
        "body-font-family",
        "body-size-sm",
        "weight-bold",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-xs-light": generateFontCSS(
        "body-font-family",
        "body-size-xs",
        "weight-light",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "body-xs-regular": generateFontCSS(
        "body-font-family",
        "body-size-xs",
        "weight-regular",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "body-xs-semibold": generateFontCSS(
        "body-font-family",
        "body-size-xs",
        "weight-semibold",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "body-xs-bold": generateFontCSS(
        "body-font-family",
        "body-size-xs",
        "weight-bold",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "form-label": generateFontCSS(
        "body-font-family",
        "form-label-size",
        "weight-semibold",
        "form-label-lh",
        "form-label-ls",
        options
    ),
    "form-description": generateFontCSS(
        "body-font-family",
        "form-description-size",
        "weight-regular",
        "form-description-lh",
        "form-description-ls",
        options
    ),
});
