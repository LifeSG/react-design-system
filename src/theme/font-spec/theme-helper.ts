import { StyledComponentProps, getCollection } from "../helpers";
import { FontScheme, ThemeCollectionSpec } from "../types";
import { LifeSgFontSpecSet } from "./specs/lifesg-font-set";
import { getValue } from "../helpers";
import { FontSpecCollectionMap, FontSpecSet } from "./types";

const FontSpec: ThemeCollectionSpec<FontSpecCollectionMap, FontScheme> = {
    collections: {
        lifesg: LifeSgFontSpecSet,
        bookingsg: LifeSgFontSpecSet,
        rbs: LifeSgFontSpecSet,
        mylegacy: LifeSgFontSpecSet,
        ccube: LifeSgFontSpecSet,
    },
    defaultValue: "lifesg",
};

export const getFontSpecValues = (key: keyof FontSpecSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const fontSpecSet: FontSpecSet = getCollection(
            FontSpec,
            theme.fontScheme
        );

        if (theme.overrides && theme.overrides.fontspec) {
            return getValue(fontSpecSet, key, theme.overrides.fontspec);
        } else {
            return fontSpecSet[key];
        }
    };
};

export const FontSpecValues: {
    [key in keyof FontSpecSet]: (props: StyledComponentProps) => string;
} = {
    "header-size-xxl": getFontSpecValues("header-size-xxl"),
    "header-size-xl": getFontSpecValues("header-size-xl"),
    "header-size-lg": getFontSpecValues("header-size-lg"),
    "header-size-md": getFontSpecValues("header-size-md"),
    "header-size-sm": getFontSpecValues("header-size-sm"),
    "header-size-xs": getFontSpecValues("header-size-xs"),

    "header-lh-xxl": getFontSpecValues("header-lh-xxl"),
    "header-lh-xl": getFontSpecValues("header-lh-xl"),
    "header-lh-lg": getFontSpecValues("header-lh-lg"),
    "header-lh-md": getFontSpecValues("header-lh-md"),
    "header-lh-sm": getFontSpecValues("header-lh-sm"),
    "header-lh-xs": getFontSpecValues("header-lh-xs"),

    "header-ls-xxl": getFontSpecValues("header-ls-xxl"),
    "header-ls-xl": getFontSpecValues("header-ls-xl"),
    "header-ls-lg": getFontSpecValues("header-ls-lg"),
    "header-ls-md": getFontSpecValues("header-ls-md"),
    "header-ls-sm": getFontSpecValues("header-ls-sm"),
    "header-ls-xs": getFontSpecValues("header-ls-xs"),

    "weight-light": getFontSpecValues("weight-light"),
    "weight-regular": getFontSpecValues("weight-regular"),
    "weight-semibold": getFontSpecValues("weight-semibold"),
    "weight-bold": getFontSpecValues("weight-bold"),
    "font-family": getFontSpecValues("font-family"),

    "body-size-baseline": getFontSpecValues("body-size-baseline"),
    "body-size-lg": getFontSpecValues("body-size-lg"),
    "body-size-md": getFontSpecValues("body-size-md"),
    "body-size-sm": getFontSpecValues("body-size-sm"),

    "body-lh-baseline": getFontSpecValues("body-lh-baseline"),
    "body-lh-lg": getFontSpecValues("body-lh-lg"),
    "body-lh-md": getFontSpecValues("body-lh-md"),
    "body-lh-sm": getFontSpecValues("body-lh-sm"),

    "body-ls-baseline": getFontSpecValues("body-ls-baseline"),
    "body-ls-lg": getFontSpecValues("body-ls-lg"),
    "body-ls-md": getFontSpecValues("body-ls-md"),
    "body-ls-sm": getFontSpecValues("body-ls-sm"),

    "formlabel-size-baseline": getFontSpecValues("formlabel-size-baseline"),
    "formlabel-size-lg": getFontSpecValues("formlabel-size-lg"),

    "formlabel-lh-baseline": getFontSpecValues("formlabel-lh-baseline"),
    "formlabel-lh-lg": getFontSpecValues("formlabel-lh-lg"),

    "formlabel-ls-baseline": getFontSpecValues("formlabel-ls-baseline"),
    "formlabel-ls-lg": getFontSpecValues("formlabel-ls-lg"),
};
