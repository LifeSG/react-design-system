import { getPrimitiveColour } from "../colour-primitive/theme-helper";
import { getCollection, getValue } from "../helpers";
import { Colour } from "../index";
import {
    ColourScheme,
    ColourSet,
    SematicColourCollectionMap,
    SematicColourSet,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "../types";
import { BookingSGColourSet } from "./specs/bookingsg-semantic-tokens";
import { LifeSGColourSet } from "./specs/lifesg-semantic-tokens";

const ColourSpec: ThemeCollectionSpec<
    SematicColourCollectionMap,
    ColourScheme
> = {
    collections: {
        lifesg: LifeSGColourSet,
        bookingsg: LifeSGColourSet,
        rbs: LifeSGColourSet,
        mylegacy: LifeSGColourSet,
        ccube: LifeSGColourSet,
    },
    defaultValue: "lifesg",
};

export const getSemanticColour = (key: keyof SematicColourSet) => {
    return (props: any): string => {
        const theme = props.theme as ThemeSpec;
        const colorSet: SematicColourSet = getCollection(
            ColourSpec,
            theme[ThemeContextKeys.colourScheme]
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

export const ColourSemantic = {
    text: getSemanticColour("text"),
    "text-hover": getSemanticColour("text-hover"),
    "text-selected": getSemanticColour("text-selected"),
    "text-disabled": getSemanticColour("text-disabled"),
    "text-success": getSemanticColour("text-success"),
    "text-inverse": getSemanticColour("text-inverse"),
    "text-subtle": getSemanticColour("text-subtle"),
    "text-subtler": getSemanticColour("text-subtler"),
    "text-subtlest": getSemanticColour("text-subtlest"),
    "text-disabled-subtle": getSemanticColour("text-disabled-subtle"),
    "text-disabled-subtlest": getSemanticColour("text-disabled-subtlest"),
    "text-selected-disabled": getSemanticColour("text-selected-disabled"),
    "text-warning": getSemanticColour("text-warning"),
    "text-error": getSemanticColour("text-error"),
    "text-info": getSemanticColour("text-info"),

    icon: getSemanticColour("icon"),
    "icon-hover": getSemanticColour("icon-hover"),
    "icon-selected": getSemanticColour("icon-selected"),
    "icon-disabled": getSemanticColour("icon-disabled"),
    "icon-success": getSemanticColour("icon-success"),
    "icon-inverse": getSemanticColour("icon-inverse"),
    "icon-subtle": getSemanticColour("icon-subtle"),
    "icon-primary": getSemanticColour("icon-primary"),
    "icon-primary-subtle": getSemanticColour("icon-primary-subtle"),
    "icon-primary-subtlest": getSemanticColour("icon-primary-subtlest"),
    "icon-disabled-subtle": getSemanticColour("icon-disabled-subtle"),
    "icon-selected-disabled": getSemanticColour("icon-selected-disabled"),
    "icon-warning": getSemanticColour("icon-warning"),
    "icon-error": getSemanticColour("icon-error"),
    "icon-info": getSemanticColour("icon-info"),

    border: getSemanticColour("border"),
    "border-hover": getSemanticColour("border-hover"),
    "border-selected": getSemanticColour("border-selected"),
    "border-disabled": getSemanticColour("border-disabled"),
    "border-success": getSemanticColour("border-success"),
    "border-inverse": getSemanticColour("border-inverse"),
    "border-strong": getSemanticColour("border-strong"),
    "border-primary": getSemanticColour("border-primary"),
    "border-primary-subtle": getSemanticColour("border-primary-subtle"),
    "border-hover-strong": getSemanticColour("border-hover-strong"),
    "border-selected-subtle": getSemanticColour("border-selected-subtle"),
    "border-selected-subtlest": getSemanticColour("border-selected-subtlest"),
    "border-focus": getSemanticColour("border-focus"),
    "border-focus-strong": getSemanticColour("border-focus-strong"),
    "border-selected-disabled": getSemanticColour("border-selected-disabled"),
    "border-warning": getSemanticColour("border-warning"),
    "border-error": getSemanticColour("border-error"),
    "border-error-focus": getSemanticColour("border-error-focus"),
    "border-info": getSemanticColour("border-info"),

    background: getSemanticColour("background"),
    "background-hover": getSemanticColour("background-hover"),
    "background-selected": getSemanticColour("background-selected"),
    "background-disabled": getSemanticColour("background-disabled"),
    "background-success": getSemanticColour("background-success"),
    "background-inverse": getSemanticColour("background-inverse"),
    "background-subtle": getSemanticColour("background-subtle"),
    "background-hover-strong": getSemanticColour("background-hover-strong"),
    "background-hover-subtle": getSemanticColour("background-hover-subtle"),
    "background-hover-neutral": getSemanticColour("background-hover-neutral"),
    "background-primary": getSemanticColour("background-primary"),
    "background-primary-hover": getSemanticColour("background-primary-hover"),
    "background-primary-subtle": getSemanticColour("background-primary-subtle"),
    "background-primary-subtlest": getSemanticColour(
        "background-primary-subtlest"
    ),
    "background-primary-subtlest-hover": getSemanticColour(
        "background-primary-subtlest-hover"
    ),
    "background-primary-subtlest-selected": getSemanticColour(
        "background-primary-subtlest-selected"
    ),
    "background-selected-strong": getSemanticColour(
        "background-selected-strong"
    ),
    "background-selected-hover": getSemanticColour("background-selected-hover"),
    "background-selected-disabled": getSemanticColour(
        "background-selected-disabled"
    ),
    "background-warning": getSemanticColour("background-warning"),
    "background-error": getSemanticColour("background-error"),
    "background-info": getSemanticColour("background-info"),

    "overlay-strong": getSemanticColour("overlay-strong"),
    "overlay-subtle": getSemanticColour("overlay-subtle"),
    "overlay-inverse-gradient": getSemanticColour("overlay-inverse-gradient"),

    hyperlink: getSemanticColour("hyperlink"),
    "hyperlink-inverse": getSemanticColour("hyperlink-inverse"),
    "focus-ring": getSemanticColour("focus-ring"),
    "focus-ring-inverse": getSemanticColour("focus-ring-inverse"),
};
