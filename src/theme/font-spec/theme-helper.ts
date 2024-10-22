import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { FontScheme, ThemeCollectionSpec } from "../types";
import { BookingSgFontSpecSet } from "./specs/bookingsg-font-spec-set";
import { LifeSgFontSpecSet } from "./specs/lifesg-font-spec-set";
import { FontSpecCollectionMap, FontSpecSet } from "./types";

const FontSpec: ThemeCollectionSpec<FontSpecCollectionMap, FontScheme> = {
    collections: {
        lifesg: LifeSgFontSpecSet,
        bookingsg: BookingSgFontSpecSet,
        rbs: LifeSgFontSpecSet,
        mylegacy: LifeSgFontSpecSet,
        ccube: LifeSgFontSpecSet,
    },
    defaultValue: "lifesg",
};

export const getFontSpec = (key: keyof FontSpecSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const fontSpecSet: FontSpecSet = getCollection(
            FontSpec,
            theme.fontScheme
        );

        if (theme.overrides && theme.overrides.fontSpec) {
            return getValue(fontSpecSet, key, theme.overrides.fontSpec);
        } else {
            return fontSpecSet[key];
        }
    };
};

export const FontSpecValues: {
    [key in keyof FontSpecSet]: (props: StyledComponentProps) => string;
} = {
    "header-size-xxl": getFontSpec("header-size-xxl"),
    "header-size-xl": getFontSpec("header-size-xl"),
    "header-size-lg": getFontSpec("header-size-lg"),
    "header-size-md": getFontSpec("header-size-md"),
    "header-size-sm": getFontSpec("header-size-sm"),
    "header-size-xs": getFontSpec("header-size-xs"),

    "header-lh-xxl": getFontSpec("header-lh-xxl"),
    "header-lh-xl": getFontSpec("header-lh-xl"),
    "header-lh-lg": getFontSpec("header-lh-lg"),
    "header-lh-md": getFontSpec("header-lh-md"),
    "header-lh-sm": getFontSpec("header-lh-sm"),
    "header-lh-xs": getFontSpec("header-lh-xs"),

    "header-ls-xxl": getFontSpec("header-ls-xxl"),
    "header-ls-xl": getFontSpec("header-ls-xl"),
    "header-ls-lg": getFontSpec("header-ls-lg"),
    "header-ls-md": getFontSpec("header-ls-md"),
    "header-ls-sm": getFontSpec("header-ls-sm"),
    "header-ls-xs": getFontSpec("header-ls-xs"),

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

    "formlabel-size-baseline": getFontSpec("formlabel-size-baseline"),
    "formlabel-size-lg": getFontSpec("formlabel-size-lg"),

    "formlabel-lh-baseline": getFontSpec("formlabel-lh-baseline"),
    "formlabel-lh-lg": getFontSpec("formlabel-lh-lg"),

    "formlabel-ls-baseline": getFontSpec("formlabel-ls-baseline"),
    "formlabel-ls-lg": getFontSpec("formlabel-ls-lg"),
};
