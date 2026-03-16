import type { CSSProp } from "styled-components";

import type { V3_StyledComponentProps } from "../helpers";
import { getCollection, getValue } from "../helpers";
import type { V3_ThemeCollectionSpec } from "../internal-types";
import type { V3_FontScheme } from "../types";
import { V3_A11yPlaygroundFontSet } from "./specs/a11yplayground-font-set";
import { V3_BookingSgFontSet } from "./specs/bookingsg-font-set";
import { V3_DefaultFontSet } from "./specs/default-font-set";
import { V3_IMDAFontSet } from "./specs/imda-font-set";
import { V3_OneServiceFontSet } from "./specs/oneservice-font-set";
import { V3_PAFontSet } from "./specs/pa-font-set";
import { V3_SPFFontSet } from "./specs/spf-font-set";
import { V3_SupportGoWhereFontSet } from "./specs/supportgowhere-font-set";
import type { V3_FontCollectionMap, V3_FontSet } from "./types";

const FontSpec: V3_ThemeCollectionSpec<V3_FontCollectionMap, V3_FontScheme> = {
    collections: {
        default: V3_DefaultFontSet,
        bookingsg: V3_BookingSgFontSet,
        mylegacy: V3_DefaultFontSet,
        pa: V3_PAFontSet,
        a11yplayground: V3_A11yPlaygroundFontSet,
        supportgowhere: V3_SupportGoWhereFontSet,
        sgwdigitallobby: V3_SupportGoWhereFontSet,
        imda: V3_IMDAFontSet,
        spf: V3_SPFFontSet,
        oneservice: V3_OneServiceFontSet,
    },
    defaultValue: "default",
};

export const getFont = (key: keyof V3_FontSet) => {
    return (props: V3_StyledComponentProps): CSSProp | string => {
        const theme = props.theme;
        const fontSet: V3_FontSet = getCollection(FontSpec, theme?.fontScheme);

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

export const V3_FontValues: {
    [key in keyof V3_FontSet]: (props: V3_StyledComponentProps) => CSSProp;
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
