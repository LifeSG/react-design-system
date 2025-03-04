import { CSSProp } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { FontScheme, ThemeCollectionSpec } from "../types";
import { LifeSgFontSet } from "./specs/lifesg-font-set";
import { FontCollectionMap, FontSet } from "./types";

const FontSpec: ThemeCollectionSpec<FontCollectionMap, FontScheme> = {
    collections: {
        lifesg: LifeSgFontSet,
        bookingsg: LifeSgFontSet,
        rbs: LifeSgFontSet,
        mylegacy: LifeSgFontSet,
        ccube: LifeSgFontSet,
        pa: LifeSgFontSet,
    },
    defaultValue: "lifesg",
};

export const getFont = (key: keyof FontSet) => {
    return (props: StyledComponentProps): CSSProp | string => {
        const theme = props.theme;
        const fontSet: FontSet = getCollection(FontSpec, theme?.fontScheme);

        // Check for an override
        const fontValue = theme?.overrides?.font
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
    "header-xxl-light": getFont("header-xxl-light"),
    "header-xxl-regular": getFont("header-xxl-regular"),
    "header-xxl-semibold": getFont("header-xxl-semibold"),
    "header-xxl-bold": getFont("header-xxl-bold"),

    "header-xl-light": getFont("header-xl-light"),
    "header-xl-regular": getFont("header-xl-regular"),
    "header-xl-semibold": getFont("header-xl-semibold"),
    "header-xl-bold": getFont("header-xl-bold"),

    "header-lg-light": getFont("header-lg-light"),
    "header-lg-regular": getFont("header-lg-regular"),
    "header-lg-semibold": getFont("header-lg-semibold"),
    "header-lg-bold": getFont("header-lg-bold"),

    "header-md-light": getFont("header-md-light"),
    "header-md-regular": getFont("header-md-regular"),
    "header-md-semibold": getFont("header-md-semibold"),
    "header-md-bold": getFont("header-md-bold"),

    "header-sm-light": getFont("header-sm-light"),
    "header-sm-regular": getFont("header-sm-regular"),
    "header-sm-semibold": getFont("header-sm-semibold"),
    "header-sm-bold": getFont("header-sm-bold"),

    "header-xs-light": getFont("header-xs-light"),
    "header-xs-regular": getFont("header-xs-regular"),
    "header-xs-semibold": getFont("header-xs-semibold"),
    "header-xs-bold": getFont("header-xs-bold"),

    "body-baseline-light": getFont("body-baseline-light"),
    "body-baseline-regular": getFont("body-baseline-regular"),
    "body-baseline-semibold": getFont("body-baseline-semibold"),
    "body-baseline-bold": getFont("body-baseline-bold"),

    "body-md-light": getFont("body-md-light"),
    "body-md-regular": getFont("body-md-regular"),
    "body-md-semibold": getFont("body-md-semibold"),
    "body-md-bold": getFont("body-md-bold"),

    "body-sm-light": getFont("body-sm-light"),
    "body-sm-regular": getFont("body-sm-regular"),
    "body-sm-semibold": getFont("body-sm-semibold"),
    "body-sm-bold": getFont("body-sm-bold"),

    "body-xs-light": getFont("body-xs-light"),
    "body-xs-regular": getFont("body-xs-regular"),
    "body-xs-semibold": getFont("body-xs-semibold"),
    "body-xs-bold": getFont("body-xs-bold"),

    "formlabel-baseline-semibold": getFont("formlabel-baseline-semibold"),
    "formlabel-lg-semibold": getFont("formlabel-lg-semibold"),
};
