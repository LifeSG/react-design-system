import { V3_StyledComponentProps, getCollection, getValue } from "../helpers";
import { V3_ThemeCollectionSpec } from "../internal-types";
import { V3_FontScheme } from "../types";
import { V3_A11yPlaygroundFontSpecSet } from "./specs/a11yplayground-font-spec-set";
import { V3_BookingSgFontSpecSet } from "./specs/bookingsg-font-spec-set";
import { V3_DefaultFontSpecSet } from "./specs/default-font-spec-set";
import { V3_IMDAFontSpecSet } from "./specs/imda-font-spec-set";
import { V3_MyLegacyFontSpecSet } from "./specs/mylegacy-font-spec-set";
import { V3_OneServiceFontSpecSet } from "./specs/oneservice-font-spec-set";
import { V3_PAFontSpecSet } from "./specs/pa-font-spec-set";
import { V3_SGWDigitalLobbyFontSpecSet } from "./specs/sgw-digital-lobby-font-spec-set";
import { V3_SPFFontSpecSet } from "./specs/spf-font-spec-set";
import { V3_SupportGoWhereFontSpecSet } from "./specs/supportgowhere-font-spec-set";
import { V3_FontSpecCollectionMap, V3_FontSpecSet } from "./types";

const V3_FontSpec: V3_ThemeCollectionSpec<
    V3_FontSpecCollectionMap,
    V3_FontScheme
> = {
    collections: {
        default: V3_DefaultFontSpecSet,
        bookingsg: V3_BookingSgFontSpecSet,
        mylegacy: V3_MyLegacyFontSpecSet,
        pa: V3_PAFontSpecSet,
        a11yplayground: V3_A11yPlaygroundFontSpecSet,
        supportgowhere: V3_SupportGoWhereFontSpecSet,
        sgwdigitallobby: V3_SGWDigitalLobbyFontSpecSet,
        imda: V3_IMDAFontSpecSet,
        spf: V3_SPFFontSpecSet,
        oneservice: V3_OneServiceFontSpecSet,
    },
    defaultValue: "default",
};

export const getFontSpec = (key: keyof V3_FontSpecSet) => {
    return (props: V3_StyledComponentProps): string => {
        const theme = props.theme;
        const fontSpecSet: V3_FontSpecSet = getCollection(
            V3_FontSpec,
            theme?.fontScheme
        );

        if (theme?.overrides?.fontSpec) {
            return getValue(fontSpecSet, key, theme.overrides.fontSpec);
        } else {
            return fontSpecSet[key];
        }
    };
};

export const V3_FontSpecValues: {
    [key in keyof V3_FontSpecSet]: (props: V3_StyledComponentProps) => string;
} = {
    "heading-size-xxl": getFontSpec("heading-size-xxl"),
    "heading-size-xl": getFontSpec("heading-size-xl"),
    "heading-size-lg": getFontSpec("heading-size-lg"),
    "heading-size-md": getFontSpec("heading-size-md"),
    "heading-size-sm": getFontSpec("heading-size-sm"),
    "heading-size-xs": getFontSpec("heading-size-xs"),

    "heading-lh-xxl": getFontSpec("heading-lh-xxl"),
    "heading-lh-xl": getFontSpec("heading-lh-xl"),
    "heading-lh-lg": getFontSpec("heading-lh-lg"),
    "heading-lh-md": getFontSpec("heading-lh-md"),
    "heading-lh-sm": getFontSpec("heading-lh-sm"),
    "heading-lh-xs": getFontSpec("heading-lh-xs"),

    "heading-ls-xxl": getFontSpec("heading-ls-xxl"),
    "heading-ls-xl": getFontSpec("heading-ls-xl"),
    "heading-ls-lg": getFontSpec("heading-ls-lg"),
    "heading-ls-md": getFontSpec("heading-ls-md"),
    "heading-ls-sm": getFontSpec("heading-ls-sm"),
    "heading-ls-xs": getFontSpec("heading-ls-xs"),

    "weight-light": getFontSpec("weight-light"),
    "weight-regular": getFontSpec("weight-regular"),
    "weight-semibold": getFontSpec("weight-semibold"),
    "weight-bold": getFontSpec("weight-bold"),
    "font-family": getFontSpec("font-family"),

    "body-size-baseline": getFontSpec("body-size-baseline"),
    "body-size-md": getFontSpec("body-size-md"),
    "body-size-sm": getFontSpec("body-size-sm"),
    "body-size-xs": getFontSpec("body-size-xs"),

    "body-lh-baseline": getFontSpec("body-lh-baseline"),
    "body-lh-md": getFontSpec("body-lh-md"),
    "body-lh-sm": getFontSpec("body-lh-sm"),
    "body-lh-xs": getFontSpec("body-lh-xs"),

    "body-ls-baseline": getFontSpec("body-ls-baseline"),
    "body-ls-md": getFontSpec("body-ls-md"),
    "body-ls-sm": getFontSpec("body-ls-sm"),
    "body-ls-xs": getFontSpec("body-ls-xs"),

    "form-label-size": getFontSpec("form-label-size"),
    "form-description-size": getFontSpec("form-description-size"),

    "form-label-lh": getFontSpec("form-label-lh"),
    "form-description-lh": getFontSpec("form-description-lh"),

    "form-label-ls": getFontSpec("form-label-ls"),
    "form-description-ls": getFontSpec("form-description-ls"),
};
