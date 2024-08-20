import { css } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { FontScheme, ThemeCollectionSpec } from "../types";
import { LifeSgTypographySet } from "./specs/typography-set";
import { TypoGraphyCollectionMap, TypographySet } from "./types";

const TypographySpec: ThemeCollectionSpec<TypoGraphyCollectionMap, FontScheme> =
    {
        collections: {
            lifesg: LifeSgTypographySet,
            bookingsg: LifeSgTypographySet,
            rbs: LifeSgTypographySet,
            mylegacy: LifeSgTypographySet,
            ccube: LifeSgTypographySet,
        },
        defaultValue: "lifesg",
    };

export const getTypography = (key: keyof TypographySet) => {
    return (props: StyledComponentProps) => {
        const theme = props.theme;
        const typographySet: TypographySet = getCollection(
            TypographySpec,
            theme["fontScheme"]
        );

        // Check for an override
        const typographyValue =
            theme.overrides && theme.overrides.typography
                ? getValue(typographySet, key, theme.overrides.typography)
                : typographySet[key];

        // If function, resolve with props
        if (typeof typographyValue === "function") {
            return css`
                ${(typographyValue as (props: any) => string)(props)}
            `;
        }

        return css`
            ${typographyValue}
        `;
    };
};

export const TypographyValues = {
    "header-xxl-light": getTypography("header-xxl-light"),
    "header-xxl-regular": getTypography("header-xxl-regular"),
    "header-xxl-semibold": getTypography("header-xxl-semibold"),
    "header-xxl-bold": getTypography("header-xxl-bold"),

    "header-xl-light": getTypography("header-xl-light"),
    "header-xl-regular": getTypography("header-xl-regular"),
    "header-xl-semibold": getTypography("header-xl-semibold"),
    "header-xl-bold": getTypography("header-xl-bold"),

    "header-lg-light": getTypography("header-lg-light"),
    "header-lg-regular": getTypography("header-lg-regular"),
    "header-lg-semibold": getTypography("header-lg-semibold"),
    "header-lg-bold": getTypography("header-lg-bold"),

    "header-md-light": getTypography("header-md-light"),
    "header-md-regular": getTypography("header-md-regular"),
    "header-md-semibold": getTypography("header-md-semibold"),
    "header-md-bold": getTypography("header-md-bold"),

    "header-sm-light": getTypography("header-sm-light"),
    "header-sm-regular": getTypography("header-sm-regular"),
    "header-sm-semibold": getTypography("header-sm-semibold"),
    "header-sm-bold": getTypography("header-sm-bold"),

    "header-xs-light": getTypography("header-xs-light"),
    "header-xs-regular": getTypography("header-xs-regular"),
    "header-xs-semibold": getTypography("header-xs-semibold"),
    "header-xs-bold": getTypography("header-xs-bold"),

    "body-baseline-light": getTypography("body-baseline-light"),
    "body-baseline-regular": getTypography("body-baseline-regular"),
    "body-baseline-semibold": getTypography("body-baseline-semibold"),
    "body-baseline-bold": getTypography("body-baseline-bold"),

    "body-lg-light": getTypography("body-lg-light"),
    "body-lg-regular": getTypography("body-lg-regular"),
    "body-lg-semibold": getTypography("body-lg-semibold"),
    "body-lg-bold": getTypography("body-lg-bold"),

    "body-md-light": getTypography("body-md-light"),
    "body-md-regular": getTypography("body-md-regular"),
    "body-md-semibold": getTypography("body-md-semibold"),
    "body-md-bold": getTypography("body-md-bold"),

    "body-sm-light": getTypography("body-sm-light"),
    "body-sm-regular": getTypography("body-sm-regular"),
    "body-sm-semibold": getTypography("body-sm-semibold"),
    "body-sm-bold": getTypography("body-sm-bold"),

    "formlabel-baseline-semibold": getTypography("formlabel-baseline-semibold"),
    "formlabel-lg-semibold": getTypography("formlabel-lg-semibold"),
};
