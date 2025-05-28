import { CSSProp } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { FontScheme } from "../types";
import { BookingSgFontSet } from "./specs/bookingsg-font-set";
import { DefaultFontSet } from "./specs/default-font-set";
import { PAFontSet } from "./specs/pa-font-set";
import { A11yFontSet } from "./specs/a11y-font-set";
import { FontCollectionMap, FontSet } from "./types";

const FontSpec: ThemeCollectionSpec<FontCollectionMap, FontScheme> = {
    collections: {
        default: DefaultFontSet,
        bookingsg: BookingSgFontSet,
        pa: PAFontSet,
        a11y: A11yFontSet,
    },
    defaultValue: "default",
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
    "heading-xxl-light": getFont("heading-xxl-light"),
    "heading-xxl-regular": getFont("heading-xxl-regular"),
    "heading-xxl-semibold": getFont("heading-xxl-semibold"),
    "heading-xxl-bold": getFont("heading-xxl-bold"),

    "heading-xl-light": getFont("heading-xl-light"),
    "heading-xl-regular": getFont("heading-xl-regular"),
    "heading-xl-semibold": getFont("heading-xl-semibold"),
    "heading-xl-bold": getFont("heading-xl-bold"),

    "heading-lg-light": getFont("heading-lg-light"),
    "heading-lg-regular": getFont("heading-lg-regular"),
    "heading-lg-semibold": getFont("heading-lg-semibold"),
    "heading-lg-bold": getFont("heading-lg-bold"),

    "heading-md-light": getFont("heading-md-light"),
    "heading-md-regular": getFont("heading-md-regular"),
    "heading-md-semibold": getFont("heading-md-semibold"),
    "heading-md-bold": getFont("heading-md-bold"),

    "heading-sm-light": getFont("heading-sm-light"),
    "heading-sm-regular": getFont("heading-sm-regular"),
    "heading-sm-semibold": getFont("heading-sm-semibold"),
    "heading-sm-bold": getFont("heading-sm-bold"),

    "heading-xs-light": getFont("heading-xs-light"),
    "heading-xs-regular": getFont("heading-xs-regular"),
    "heading-xs-semibold": getFont("heading-xs-semibold"),
    "heading-xs-bold": getFont("heading-xs-bold"),

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

    "form-label": getFont("form-label"),
    "form-description": getFont("form-description"),
};
