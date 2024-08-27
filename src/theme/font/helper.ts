import { StyledComponentProps, getCollection } from "../helpers";
import { FontScheme, ThemeCollectionSpec } from "../types";
import { LifeSgFontSet } from "./specs/font-set";
import { getValue } from "../helpers";
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
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const fontSet: FontSet = getCollection(FontSpec, theme.fontScheme);

        if (theme.overrides && theme.overrides.font) {
            return getValue(fontSet, key, theme.overrides.font);
        } else {
            return fontSet[key];
        }
    };
};

export const FontValues: {
    [key in keyof FontSet]: (props: StyledComponentProps) => string;
} = {
    "header-size-xxl": getFontValues("header-size-xxl"),
    "header-size-xl": getFontValues("header-size-xl"),
    "header-size-lg": getFontValues("header-size-lg"),
    "header-size-md": getFontValues("header-size-md"),
    "header-size-sm": getFontValues("header-size-sm"),
    "header-size-xs": getFontValues("header-size-xs"),

    "header-lh-xxl": getFontValues("header-lh-xxl"),
    "header-lh-xl": getFontValues("header-lh-xl"),
    "header-lh-lg": getFontValues("header-lh-lg"),
    "header-lh-md": getFontValues("header-lh-md"),
    "header-lh-sm": getFontValues("header-lh-sm"),
    "header-lh-xs": getFontValues("header-lh-xs"),

    "header-ls-xxl": getFontValues("header-ls-xxl"),
    "header-ls-xl": getFontValues("header-ls-xl"),
    "header-ls-lg": getFontValues("header-ls-lg"),
    "header-ls-md": getFontValues("header-ls-md"),
    "header-ls-sm": getFontValues("header-ls-sm"),
    "header-ls-xs": getFontValues("header-ls-xs"),

    "weight-light": getFontValues("weight-light"),
    "weight-regular": getFontValues("weight-regular"),
    "weight-semibold": getFontValues("weight-semibold"),
    "weight-bold": getFontValues("weight-bold"),
    "font-family": getFontValues("font-family"),

    "body-size-baseline": getFontValues("body-size-baseline"),
    "body-size-lg": getFontValues("body-size-lg"),
    "body-size-md": getFontValues("body-size-md"),
    "body-size-sm": getFontValues("body-size-sm"),

    "body-lh-baseline": getFontValues("body-lh-baseline"),
    "body-lh-lg": getFontValues("body-lh-lg"),
    "body-lh-md": getFontValues("body-lh-md"),
    "body-lh-sm": getFontValues("body-lh-sm"),

    "body-ls-baseline": getFontValues("body-ls-baseline"),
    "body-ls-lg": getFontValues("body-ls-lg"),
    "body-ls-md": getFontValues("body-ls-md"),
    "body-ls-sm": getFontValues("body-ls-sm"),

    "formlabel-size-baseline": getFontValues("formlabel-size-baseline"),
    "formlabel-size-lg": getFontValues("formlabel-size-lg"),
};
