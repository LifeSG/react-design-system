import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { FontScheme } from "../types";
import { BookingSgFontSpecSet } from "./specs/bookingsg-font-spec-set";
import { DefaultFontSpecSet } from "./specs/default-font-spec-set";
import { PAFontSpecSet } from "./specs/pa-font-spec-set";
import { FontSpecCollectionMap, FontSpecSet } from "./types";

const FontSpec: ThemeCollectionSpec<FontSpecCollectionMap, FontScheme> = {
    collections: {
        default: DefaultFontSpecSet,
        bookingsg: BookingSgFontSpecSet,
        pa: PAFontSpecSet,
    },
    defaultValue: "default",
};

export const getFontSpec = (key: keyof FontSpecSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const fontSpecSet: FontSpecSet = getCollection(
            FontSpec,
            theme?.fontScheme
        );

        if (theme?.overrides?.fontSpec) {
            return getValue(fontSpecSet, key, theme.overrides.fontSpec);
        } else {
            return fontSpecSet[key];
        }
    };
};

export const FontSpecValues: {
    [key in keyof FontSpecSet]: (props: StyledComponentProps) => string;
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
