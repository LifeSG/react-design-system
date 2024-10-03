import { CSSProp } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { FontScheme, ThemeCollectionSpec } from "../types";
import { LifeSgFontSet } from "./specs/lifesg-typography-set";
import { FontCollectionMap, FontSet } from "./types";

const FontSpec: ThemeCollectionSpec<FontCollectionMap, FontScheme> = {
    collections: {
        lifesg: LifeSgFontSet,
        bookingsg: LifeSgFontSet,
        rbs: LifeSgFontSet,
        mylegacy: LifeSgFontSet,
        ccube: LifeSgFontSet,
    },
    defaultValue: "lifesg",
};

export const getFontValues = (key: keyof FontSet) => {
    return (props: StyledComponentProps): CSSProp | string => {
        const theme = props.theme;
        const fontSet: FontSet = getCollection(FontSpec, theme.fontScheme);

        // Check for an override
        const fontValue =
            theme.overrides && theme.overrides.font
                ? getValue(fontSet, key, theme.overrides.font)
                : fontSet[key];

        // If function, resolve with props
        return typeof fontValue === "function"
            ? (fontValue as (props: any) => string)(props)
            : fontValue;
    };
};

export const FontValues: {
    [key in keyof FontSet]: (props: StyledComponentProps) => CSSProp;
} = {
    "header-xxl-light": getFontValues("header-xxl-light"),
    "header-xxl-regular": getFontValues("header-xxl-regular"),
    "header-xxl-semibold": getFontValues("header-xxl-semibold"),
    "header-xxl-bold": getFontValues("header-xxl-bold"),

    "header-xl-light": getFontValues("header-xl-light"),
    "header-xl-regular": getFontValues("header-xl-regular"),
    "header-xl-semibold": getFontValues("header-xl-semibold"),
    "header-xl-bold": getFontValues("header-xl-bold"),

    "header-lg-light": getFontValues("header-lg-light"),
    "header-lg-regular": getFontValues("header-lg-regular"),
    "header-lg-semibold": getFontValues("header-lg-semibold"),
    "header-lg-bold": getFontValues("header-lg-bold"),

    "header-md-light": getFontValues("header-md-light"),
    "header-md-regular": getFontValues("header-md-regular"),
    "header-md-semibold": getFontValues("header-md-semibold"),
    "header-md-bold": getFontValues("header-md-bold"),

    "header-sm-light": getFontValues("header-sm-light"),
    "header-sm-regular": getFontValues("header-sm-regular"),
    "header-sm-semibold": getFontValues("header-sm-semibold"),
    "header-sm-bold": getFontValues("header-sm-bold"),

    "header-xs-light": getFontValues("header-xs-light"),
    "header-xs-regular": getFontValues("header-xs-regular"),
    "header-xs-semibold": getFontValues("header-xs-semibold"),
    "header-xs-bold": getFontValues("header-xs-bold"),

    "body-baseline-light": getFontValues("body-baseline-light"),
    "body-baseline-regular": getFontValues("body-baseline-regular"),
    "body-baseline-semibold": getFontValues("body-baseline-semibold"),
    "body-baseline-bold": getFontValues("body-baseline-bold"),

    "body-lg-light": getFontValues("body-lg-light"),
    "body-lg-regular": getFontValues("body-lg-regular"),
    "body-lg-semibold": getFontValues("body-lg-semibold"),
    "body-lg-bold": getFontValues("body-lg-bold"),

    "body-md-light": getFontValues("body-md-light"),
    "body-md-regular": getFontValues("body-md-regular"),
    "body-md-semibold": getFontValues("body-md-semibold"),
    "body-md-bold": getFontValues("body-md-bold"),

    "body-sm-light": getFontValues("body-sm-light"),
    "body-sm-regular": getFontValues("body-sm-regular"),
    "body-sm-semibold": getFontValues("body-sm-semibold"),
    "body-sm-bold": getFontValues("body-sm-bold"),

    "formlabel-baseline-semibold": getFontValues("formlabel-baseline-semibold"),
    "formlabel-lg-semibold": getFontValues("formlabel-lg-semibold"),
};
