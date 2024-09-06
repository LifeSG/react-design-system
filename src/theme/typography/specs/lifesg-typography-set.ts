import { css } from "styled-components";

import { getFontValues } from "../../font/theme-helper";
import { FontSet } from "../../font/types";
import { TypographySet } from "../types";

const generateTypographyCSS = (
    fontSizeKey: keyof FontSet,
    fontWeightKey: keyof FontSet,
    lineHeightKey: keyof FontSet,
    letterSpacingKey: keyof FontSet
) => css`
    font-family: ${getFontValues("font-family")};
    font-size: ${getFontValues(fontSizeKey)};
    font-weight: ${getFontValues(fontWeightKey)};
    line-height: ${getFontValues(lineHeightKey)};
    letter-spacing: ${getFontValues(letterSpacingKey)};
`;

export const LifeSgTypographySet: TypographySet = {
    "header-xxl-light": generateTypographyCSS(
        "header-size-xxl",
        "weight-light",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xxl-regular": generateTypographyCSS(
        "header-size-xxl",
        "weight-regular",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xxl-semibold": generateTypographyCSS(
        "header-size-xxl",
        "weight-semibold",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xxl-bold": generateTypographyCSS(
        "header-size-xxl",
        "weight-bold",
        "header-lh-xxl",
        "header-ls-xxl"
    ),
    "header-xl-light": generateTypographyCSS(
        "header-size-xl",
        "weight-light",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-xl-regular": generateTypographyCSS(
        "header-size-xl",
        "weight-regular",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-xl-semibold": generateTypographyCSS(
        "header-size-xl",
        "weight-semibold",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-xl-bold": generateTypographyCSS(
        "header-size-xl",
        "weight-bold",
        "header-lh-xl",
        "header-ls-xl"
    ),
    "header-lg-light": generateTypographyCSS(
        "header-size-lg",
        "weight-light",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-lg-regular": generateTypographyCSS(
        "header-size-lg",
        "weight-regular",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-lg-semibold": generateTypographyCSS(
        "header-size-lg",
        "weight-semibold",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-lg-bold": generateTypographyCSS(
        "header-size-lg",
        "weight-bold",
        "header-lh-lg",
        "header-ls-lg"
    ),
    "header-md-light": generateTypographyCSS(
        "header-size-md",
        "weight-light",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-md-regular": generateTypographyCSS(
        "header-size-md",
        "weight-regular",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-md-semibold": generateTypographyCSS(
        "header-size-md",
        "weight-semibold",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-md-bold": generateTypographyCSS(
        "header-size-md",
        "weight-bold",
        "header-lh-md",
        "header-ls-md"
    ),
    "header-sm-light": generateTypographyCSS(
        "header-size-sm",
        "weight-light",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-sm-regular": generateTypographyCSS(
        "header-size-sm",
        "weight-regular",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-sm-semibold": generateTypographyCSS(
        "header-size-sm",
        "weight-semibold",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-sm-bold": generateTypographyCSS(
        "header-size-sm",
        "weight-bold",
        "header-lh-sm",
        "header-ls-sm"
    ),
    "header-xs-light": generateTypographyCSS(
        "header-size-xs",
        "weight-light",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "header-xs-regular": generateTypographyCSS(
        "header-size-xs",
        "weight-regular",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "header-xs-semibold": generateTypographyCSS(
        "header-size-xs",
        "weight-semibold",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "header-xs-bold": generateTypographyCSS(
        "header-size-xs",
        "weight-bold",
        "header-lh-xs",
        "header-ls-xs"
    ),
    "body-baseline-light": generateTypographyCSS(
        "body-size-baseline",
        "weight-light",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-baseline-regular": generateTypographyCSS(
        "body-size-baseline",
        "weight-regular",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-baseline-semibold": generateTypographyCSS(
        "body-size-baseline",
        "weight-semibold",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-baseline-bold": generateTypographyCSS(
        "body-size-baseline",
        "weight-bold",
        "body-lh-baseline",
        "body-ls-baseline"
    ),
    "body-lg-light": generateTypographyCSS(
        "body-size-lg",
        "weight-light",
        "body-lh-lg",
        "body-ls-lg"
    ),
    "body-lg-regular": generateTypographyCSS(
        "body-size-lg",
        "weight-regular",
        "body-lh-lg",
        "body-ls-lg"
    ),
    "body-lg-semibold": generateTypographyCSS(
        "body-size-lg",
        "weight-semibold",
        "body-lh-lg",
        "body-ls-lg"
    ),
    "body-lg-bold": generateTypographyCSS(
        "body-size-lg",
        "weight-bold",
        "body-lh-lg",
        "body-ls-lg"
    ),
    "body-md-light": generateTypographyCSS(
        "body-size-md",
        "weight-light",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-md-regular": generateTypographyCSS(
        "body-size-md",
        "weight-regular",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-md-semibold": generateTypographyCSS(
        "body-size-md",
        "weight-semibold",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-md-bold": generateTypographyCSS(
        "body-size-md",
        "weight-bold",
        "body-lh-md",
        "body-ls-md"
    ),
    "body-sm-light": generateTypographyCSS(
        "body-size-sm",
        "weight-light",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-sm-regular": generateTypographyCSS(
        "body-size-sm",
        "weight-regular",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-sm-semibold": generateTypographyCSS(
        "body-size-sm",
        "weight-semibold",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "body-sm-bold": generateTypographyCSS(
        "body-size-sm",
        "weight-bold",
        "body-lh-sm",
        "body-ls-sm"
    ),
    "formlabel-baseline-semibold": generateTypographyCSS(
        "formlabel-size-baseline",
        "weight-semibold",
        "formlabel-lh-baseline",
        "formlabel-ls-baseline"
    ),
    "formlabel-lg-semibold": generateTypographyCSS(
        "formlabel-size-lg",
        "weight-semibold",
        "formlabel-lh-lg",
        "formlabel-ls-lg"
    ),
};
