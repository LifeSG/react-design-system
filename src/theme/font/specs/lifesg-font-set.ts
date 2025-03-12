import { css } from "styled-components";
import { getFontSpec } from "../../font-spec/theme-helper";
import { FontSpecSet } from "../../font-spec/types";
import { FontSet } from "../types";

const generateFontCSS = (
    fontSizeKey: keyof FontSpecSet,
    fontWeightKey: keyof FontSpecSet,
    lineHeightKey: keyof FontSpecSet,
    letterSpacingKey: keyof FontSpecSet
) => css`
    font-family: ${getFontSpec("font-family")};
    font-size: ${getFontSpec(fontSizeKey)};
    font-weight: ${getFontSpec(fontWeightKey)};
    line-height: ${getFontSpec(lineHeightKey)};
    letter-spacing: ${getFontSpec(letterSpacingKey)};
`;

export const LifeSgFontSet: FontSet = {
    "header-xxl-light": generateFontCSS(
        "header-size-xxl",
        "weight-light",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xxl-regular": generateFontCSS(
        "header-size-xxl",
        "weight-regular",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xxl-semibold": generateFontCSS(
        "header-size-xxl",
        "weight-semibold",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xxl-bold": generateFontCSS(
        "header-size-xxl",
        "weight-bold",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xl-light": generateFontCSS(
        "header-size-xl",
        "weight-light",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-xl-regular": generateFontCSS(
        "header-size-xl",
        "weight-regular",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-xl-semibold": generateFontCSS(
        "header-size-xl",
        "weight-semibold",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-xl-bold": generateFontCSS(
        "header-size-xl",
        "weight-bold",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-lg-light": generateFontCSS(
        "header-size-lg",
        "weight-light",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-lg-regular": generateFontCSS(
        "header-size-lg",
        "weight-regular",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-lg-semibold": generateFontCSS(
        "header-size-lg",
        "weight-semibold",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-lg-bold": generateFontCSS(
        "header-size-lg",
        "weight-bold",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-md-light": generateFontCSS(
        "header-size-md",
        "weight-light",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-md-regular": generateFontCSS(
        "header-size-md",
        "weight-regular",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-md-semibold": generateFontCSS(
        "header-size-md",
        "weight-semibold",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-md-bold": generateFontCSS(
        "header-size-md",
        "weight-bold",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-sm-light": generateFontCSS(
        "header-size-sm",
        "weight-light",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-sm-regular": generateFontCSS(
        "header-size-sm",
        "weight-regular",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-sm-semibold": generateFontCSS(
        "header-size-sm",
        "weight-semibold",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-sm-bold": generateFontCSS(
        "header-size-sm",
        "weight-bold",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-xs-light": generateFontCSS(
        "header-size-xs",
        "weight-light",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "header-xs-regular": generateFontCSS(
        "header-size-xs",
        "weight-regular",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "header-xs-semibold": generateFontCSS(
        "header-size-xs",
        "weight-semibold",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "header-xs-bold": generateFontCSS(
        "header-size-xs",
        "weight-bold",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "body-baseline-light": generateFontCSS(
        "body-size-baseline",
        "weight-light",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-baseline-regular": generateFontCSS(
        "body-size-baseline",
        "weight-regular",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-baseline-semibold": generateFontCSS(
        "body-size-baseline",
        "weight-semibold",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-baseline-bold": generateFontCSS(
        "body-size-baseline",
        "weight-bold",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-md-light": generateFontCSS(
        "body-size-md",
        "weight-light",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-md-regular": generateFontCSS(
        "body-size-md",
        "weight-regular",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-md-semibold": generateFontCSS(
        "body-size-md",
        "weight-semibold",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-md-bold": generateFontCSS(
        "body-size-md",
        "weight-bold",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-sm-light": generateFontCSS(
        "body-size-sm",
        "weight-light",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-sm-regular": generateFontCSS(
        "body-size-sm",
        "weight-regular",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-sm-semibold": generateFontCSS(
        "body-size-sm",
        "weight-semibold",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-sm-bold": generateFontCSS(
        "body-size-sm",
        "weight-bold",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-xs-light": generateFontCSS(
        "body-size-xs",
        "weight-light",
        "body-lh-xs",
        "body-ls-xs"
    ),
    "body-xs-regular": generateFontCSS(
        "body-size-xs",
        "weight-regular",
        "body-lh-xs",
        "body-ls-xs"
    ),
    "body-xs-semibold": generateFontCSS(
        "body-size-xs",
        "weight-semibold",
        "body-lh-xs",
        "body-ls-xs"
    ),
    "body-xs-bold": generateFontCSS(
        "body-size-xs",
        "weight-bold",
        "body-lh-xs",
        "body-ls-xs"
    ),
    "form-label": generateFontCSS(
        "form-label-size",
        "weight-semibold",
        "form-label-lh",
        "form-label-ls"
    ),
    "form-description": generateFontCSS(
        "form-description-size",
        "weight-regular",
        "form-description-lh",
        "form-description-ls"
    ),
};
