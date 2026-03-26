import { css } from "styled-components";
import { FontSet, FontSpecSet } from "../types";
import { getFontSpec } from "../font-spec/theme-helper";
import { FontSetAdditionalOptions } from "./types";

export const generateFontCSS = (
    fontSizeKey: keyof FontSpecSet,
    fontWeightKey: keyof FontSpecSet,
    lineHeightKey: keyof FontSpecSet,
    letterSpacingKey: keyof FontSpecSet,
    options?: FontSetAdditionalOptions
) => {
    const { disableLigatures } = options || {};

    return css`
        font-family: ${getFontSpec("font-family")};
        font-size: ${getFontSpec(fontSizeKey)};
        font-weight: ${getFontSpec(fontWeightKey)};
        line-height: ${getFontSpec(lineHeightKey)};
        letter-spacing: ${getFontSpec(letterSpacingKey)};

        font-variant: ${disableLigatures ? "no-common-ligatures" : "normal"};
    `;
};

export const getFontSet = (
    options: FontSetAdditionalOptions = {}
): FontSet => ({
    "heading-xxl-light": generateFontCSS(
        "heading-size-xxl",
        "weight-light",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xxl-regular": generateFontCSS(
        "heading-size-xxl",
        "weight-regular",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xxl-semibold": generateFontCSS(
        "heading-size-xxl",
        "weight-semibold",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xxl-bold": generateFontCSS(
        "heading-size-xxl",
        "weight-bold",
        "heading-lh-xxl",
        "heading-ls-xxl",
        options
    ),
    "heading-xl-light": generateFontCSS(
        "heading-size-xl",
        "weight-light",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-xl-regular": generateFontCSS(
        "heading-size-xl",
        "weight-regular",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-xl-semibold": generateFontCSS(
        "heading-size-xl",
        "weight-semibold",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-xl-bold": generateFontCSS(
        "heading-size-xl",
        "weight-bold",
        "heading-lh-xl",
        "heading-ls-xl",
        options
    ),
    "heading-lg-light": generateFontCSS(
        "heading-size-lg",
        "weight-light",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-lg-regular": generateFontCSS(
        "heading-size-lg",
        "weight-regular",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-lg-semibold": generateFontCSS(
        "heading-size-lg",
        "weight-semibold",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-lg-bold": generateFontCSS(
        "heading-size-lg",
        "weight-bold",
        "heading-lh-lg",
        "heading-ls-lg",
        options
    ),
    "heading-md-light": generateFontCSS(
        "heading-size-md",
        "weight-light",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-md-regular": generateFontCSS(
        "heading-size-md",
        "weight-regular",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-md-semibold": generateFontCSS(
        "heading-size-md",
        "weight-semibold",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-md-bold": generateFontCSS(
        "heading-size-md",
        "weight-bold",
        "heading-lh-md",
        "heading-ls-md",
        options
    ),
    "heading-sm-light": generateFontCSS(
        "heading-size-sm",
        "weight-light",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-sm-regular": generateFontCSS(
        "heading-size-sm",
        "weight-regular",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-sm-semibold": generateFontCSS(
        "heading-size-sm",
        "weight-semibold",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-sm-bold": generateFontCSS(
        "heading-size-sm",
        "weight-bold",
        "heading-lh-sm",
        "heading-ls-sm",
        options
    ),
    "heading-xs-light": generateFontCSS(
        "heading-size-xs",
        "weight-light",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "heading-xs-regular": generateFontCSS(
        "heading-size-xs",
        "weight-regular",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "heading-xs-semibold": generateFontCSS(
        "heading-size-xs",
        "weight-semibold",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "heading-xs-bold": generateFontCSS(
        "heading-size-xs",
        "weight-bold",
        "heading-lh-xs",
        "heading-ls-xs",
        options
    ),
    "body-baseline-light": generateFontCSS(
        "body-size-baseline",
        "weight-light",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-baseline-regular": generateFontCSS(
        "body-size-baseline",
        "weight-regular",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-baseline-semibold": generateFontCSS(
        "body-size-baseline",
        "weight-semibold",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-baseline-bold": generateFontCSS(
        "body-size-baseline",
        "weight-bold",
        "body-lh-baseline",
        "body-ls-baseline",
        options
    ),
    "body-md-light": generateFontCSS(
        "body-size-md",
        "weight-light",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-md-regular": generateFontCSS(
        "body-size-md",
        "weight-regular",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-md-semibold": generateFontCSS(
        "body-size-md",
        "weight-semibold",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-md-bold": generateFontCSS(
        "body-size-md",
        "weight-bold",
        "body-lh-md",
        "body-ls-md",
        options
    ),
    "body-sm-light": generateFontCSS(
        "body-size-sm",
        "weight-light",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-sm-regular": generateFontCSS(
        "body-size-sm",
        "weight-regular",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-sm-semibold": generateFontCSS(
        "body-size-sm",
        "weight-semibold",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-sm-bold": generateFontCSS(
        "body-size-sm",
        "weight-bold",
        "body-lh-sm",
        "body-ls-sm",
        options
    ),
    "body-xs-light": generateFontCSS(
        "body-size-xs",
        "weight-light",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "body-xs-regular": generateFontCSS(
        "body-size-xs",
        "weight-regular",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "body-xs-semibold": generateFontCSS(
        "body-size-xs",
        "weight-semibold",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "body-xs-bold": generateFontCSS(
        "body-size-xs",
        "weight-bold",
        "body-lh-xs",
        "body-ls-xs",
        options
    ),
    "form-label": generateFontCSS(
        "form-label-size",
        "weight-semibold",
        "form-label-lh",
        "form-label-ls",
        options
    ),
    "form-description": generateFontCSS(
        "form-description-size",
        "weight-regular",
        "form-description-lh",
        "form-description-ls",
        options
    ),
});
