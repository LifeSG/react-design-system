import { getPrimitiveColor } from "../color-primitive/theme-helper";
import { getCollection, getValue } from "../helpers";
import { Color } from "../index";
import {
    ColorScheme,
    ColorSet,
    SematicColorCollectionMap,
    SematicColorSet,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "../types";
import { BookingSGColorSet } from "./specs/bookingsg-semantic-tokens";
import { LifeSGColorSet } from "./specs/lifesg-semantic-tokens";

const ColorSpec: ThemeCollectionSpec<SematicColorCollectionMap, ColorScheme> = {
    collections: {
        lifesg: LifeSGColorSet,
        bookingsg: LifeSGColorSet,
        rbs: LifeSGColorSet,
        mylegacy: LifeSGColorSet,
        ccube: LifeSGColorSet,
    },
    defaultValue: "lifesg",
};

export const getSemanticColor = (key: keyof SematicColorSet) => {
    return (props: any): string => {
        const theme = props.theme as ThemeSpec;
        const colorSet: SematicColorSet = getCollection(
            ColorSpec,
            theme[ThemeContextKeys.colorScheme]
        );

        // check for an override
        let colorValue =
            theme.overrides && theme.overrides.color
                ? getValue(colorSet, key, theme.overrides.color)
                : colorSet[key];

        // If function, resolve with props
        if (typeof colorValue === "function") {
            return (colorValue as (props: any) => string)(props);
        }

        return colorValue as string;
    };
};

export const ColorSemantic = {
    text: getSemanticColor("text"),
    "text-hover": getSemanticColor("text-hover"),
    "text-selected": getSemanticColor("text-selected"),
    "text-disabled": getSemanticColor("text-disabled"),
    "text-success": getSemanticColor("text-success"),
    "text-inverse": getSemanticColor("text-inverse"),
    "text-subtle": getSemanticColor("text-subtle"),
    "text-subtler": getSemanticColor("text-subtler"),
    "text-subtlest": getSemanticColor("text-subtlest"),
    "text-disabled-subtle": getSemanticColor("text-disabled-subtle"),
    "text-disabled-subtlest": getSemanticColor("text-disabled-subtlest"),
    "text-selected-disabled": getSemanticColor("text-selected-disabled"),
    "text-warning": getSemanticColor("text-warning"),
    "text-error": getSemanticColor("text-error"),
    "text-info": getSemanticColor("text-info"),

    icon: getSemanticColor("icon"),
    "icon-hover": getSemanticColor("icon-hover"),
    "icon-selected": getSemanticColor("icon-selected"),
    "icon-disabled": getSemanticColor("icon-disabled"),
    "icon-success": getSemanticColor("icon-success"),
    "icon-inverse": getSemanticColor("icon-inverse"),
    "icon-subtle": getSemanticColor("icon-subtle"),
    "icon-primary": getSemanticColor("icon-primary"),
    "icon-primary-subtle": getSemanticColor("icon-primary-subtle"),
    "icon-primary-subtlest": getSemanticColor("icon-primary-subtlest"),
    "icon-disabled-subtle": getSemanticColor("icon-disabled-subtle"),
    "icon-selected-disabled": getSemanticColor("icon-selected-disabled"),
    "icon-warning": getSemanticColor("icon-warning"),
    "icon-error": getSemanticColor("icon-error"),
    "icon-info": getSemanticColor("icon-info"),

    border: getSemanticColor("border"),
    "border-hover": getSemanticColor("border-hover"),
    "border-selected": getSemanticColor("border-selected"),
    "border-disabled": getSemanticColor("border-disabled"),
    "border-success": getSemanticColor("border-success"),
    "border-inverse": getSemanticColor("border-inverse"),
    "border-strong": getSemanticColor("border-strong"),
    "border-primary": getSemanticColor("border-primary"),
    "border-primary-subtle": getSemanticColor("border-primary-subtle"),
    "border-hover-strong": getSemanticColor("border-hover-strong"),
    "border-selected-subtle": getSemanticColor("border-selected-subtle"),
    "border-selected-subtlest": getSemanticColor("border-selected-subtlest"),
    "border-focus": getSemanticColor("border-focus"),
    "border-focus-strong": getSemanticColor("border-focus-strong"),
    "border-selected-disabled": getSemanticColor("border-selected-disabled"),
    "border-warning": getSemanticColor("border-warning"),
    "border-error": getSemanticColor("border-error"),
    "border-error-focus": getSemanticColor("border-error-focus"),
    "border-info": getSemanticColor("border-info"),

    background: getSemanticColor("background"),
    "background-hover": getSemanticColor("background-hover"),
    "background-selected": getSemanticColor("background-selected"),
    "background-disabled": getSemanticColor("background-disabled"),
    "background-success": getSemanticColor("background-success"),
    "background-inverse": getSemanticColor("background-inverse"),
    "background-subtle": getSemanticColor("background-subtle"),
    "background-hover-strong": getSemanticColor("background-hover-strong"),
    "background-hover-subtle": getSemanticColor("background-hover-subtle"),
    "background-hover-neutral": getSemanticColor("background-hover-neutral"),
    "background-primary": getSemanticColor("background-primary"),
    "background-primary-hover": getSemanticColor("background-primary-hover"),
    "background-primary-subtle": getSemanticColor("background-primary-subtle"),
    "background-primary-subtlest": getSemanticColor(
        "background-primary-subtlest"
    ),
    "background-primary-subtlest-hover": getSemanticColor(
        "background-primary-subtlest-hover"
    ),
    "background-primary-subtlest-selected": getSemanticColor(
        "background-primary-subtlest-selected"
    ),
    "background-selected-strong": getSemanticColor(
        "background-selected-strong"
    ),
    "background-selected-hover": getSemanticColor("background-selected-hover"),
    "background-selected-disabled": getSemanticColor(
        "background-selected-disabled"
    ),
    "background-warning": getSemanticColor("background-warning"),
    "background-error": getSemanticColor("background-error"),
    "background-info": getSemanticColor("background-info"),

    "overlay-strong": getSemanticColor("overlay-strong"),
    "overlay-subtle": getSemanticColor("overlay-subtle"),
    "overlay-inverse-gradient": getSemanticColor("overlay-inverse-gradient"),

    hyperlink: getSemanticColor("hyperlink"),
    "hyperlink-inverse": getSemanticColor("hyperlink-inverse"),
    "focus-ring": getSemanticColor("focus-ring"),
    "focus-ring-inverse": getSemanticColor("focus-ring-inverse"),
};
