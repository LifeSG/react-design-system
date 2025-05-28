import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { ColourScheme, SemanticColourSet } from "../types";
import { LifeSGColourSet } from "./specs/lifesg-semantic-tokens";
import { PAColourSet } from "./specs/pa-semantic-tokens";
import { SemanticColourCollectionMap } from "./types";

const ColourSpec: ThemeCollectionSpec<
    SemanticColourCollectionMap,
    ColourScheme
> = {
    collections: {
        lifesg: LifeSGColourSet,
        bookingsg: LifeSGColourSet,
        rbs: LifeSGColourSet,
        mylegacy: LifeSGColourSet,
        ccube: LifeSGColourSet,
        oneservice: LifeSGColourSet,
        pa: PAColourSet,
        a11yplayground: LifeSGColourSet,
    },
    defaultValue: "lifesg",
};

export const getSemanticColour = (key: keyof SemanticColourSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const colorSet: SemanticColourSet = getCollection(
            ColourSpec,
            theme?.colourScheme
        );

        // check for an override
        const colorValue = theme?.overrides?.semanticColour
            ? getValue(colorSet, key, theme.overrides.semanticColour)
            : colorSet[key];

        // If function, resolve with props
        if (typeof colorValue === "function") {
            return (colorValue as (props: any) => string)(props);
        }

        return colorValue as string;
    };
};

export const ColourSemantic: {
    [key in keyof SemanticColourSet]: (props: StyledComponentProps) => string;
} = {
    // text
    text: getSemanticColour("text"),
    "text-subtle": getSemanticColour("text-subtle"),
    "text-subtler": getSemanticColour("text-subtler"),
    "text-subtlest": getSemanticColour("text-subtlest"),
    "text-primary": getSemanticColour("text-primary"),

    "text-hover": getSemanticColour("text-hover"),
    "text-selected": getSemanticColour("text-selected"),
    "text-selected-hover": getSemanticColour("text-selected-hover"),

    "text-disabled": getSemanticColour("text-disabled"),
    "text-disabled-subtle": getSemanticColour("text-disabled-subtle"),
    "text-disabled-subtlest": getSemanticColour("text-disabled-subtlest"),
    "text-selected-disabled": getSemanticColour("text-selected-disabled"),

    "text-success": getSemanticColour("text-success"),
    "text-warning": getSemanticColour("text-warning"),
    "text-error": getSemanticColour("text-error"),
    "text-info": getSemanticColour("text-info"),
    "text-inverse": getSemanticColour("text-inverse"),

    // icon
    icon: getSemanticColour("icon"),
    "icon-subtle": getSemanticColour("icon-subtle"),
    "icon-strongest": getSemanticColour("icon-strongest"),
    "icon-primary": getSemanticColour("icon-primary"),
    "icon-primary-subtle": getSemanticColour("icon-primary-subtle"),
    "icon-primary-subtlest": getSemanticColour("icon-primary-subtlest"),

    "icon-hover": getSemanticColour("icon-hover"),
    "icon-selected": getSemanticColour("icon-selected"),
    "icon-selected-hover": getSemanticColour("icon-selected-hover"),

    "icon-disabled": getSemanticColour("icon-disabled"),
    "icon-disabled-subtle": getSemanticColour("icon-disabled-subtle"),
    "icon-selected-disabled": getSemanticColour("icon-selected-disabled"),

    "icon-success": getSemanticColour("icon-success"),
    "icon-warning": getSemanticColour("icon-warning"),
    "icon-error": getSemanticColour("icon-error"),
    "icon-error-strong": getSemanticColour("icon-error-strong"),
    "icon-info": getSemanticColour("icon-info"),
    "icon-inverse": getSemanticColour("icon-inverse"),
    "icon-primary-inverse": getSemanticColour("icon-primary-inverse"),

    // border
    border: getSemanticColour("border"),
    "border-strong": getSemanticColour("border-strong"),
    "border-stronger": getSemanticColour("border-stronger"),
    "border-primary": getSemanticColour("border-primary"),
    "border-primary-subtle": getSemanticColour("border-primary-subtle"),

    "border-hover": getSemanticColour("border-hover"),
    "border-hover-strong": getSemanticColour("border-hover-strong"),

    "border-selected": getSemanticColour("border-selected"),
    "border-selected-subtle": getSemanticColour("border-selected-subtle"),
    "border-selected-subtlest": getSemanticColour("border-selected-subtlest"),
    "border-selected-hover": getSemanticColour("border-selected-hover"),

    "border-focus": getSemanticColour("border-focus"),
    "border-focus-strong": getSemanticColour("border-focus-strong"),

    "border-disabled": getSemanticColour("border-disabled"),
    "border-selected-disabled": getSemanticColour("border-selected-disabled"),

    "border-success": getSemanticColour("border-success"),
    "border-warning": getSemanticColour("border-warning"),
    "border-error": getSemanticColour("border-error"),
    "border-error-focus": getSemanticColour("border-error-focus"),
    "border-error-focus-strong": getSemanticColour("border-error-focus-strong"),
    "border-error-strong": getSemanticColour("border-error-strong"),
    "border-info": getSemanticColour("border-info"),

    // background
    bg: getSemanticColour("bg"),
    "bg-strong": getSemanticColour("bg-strong"),
    "bg-stronger": getSemanticColour("bg-stronger"),
    "bg-strongest": getSemanticColour("bg-strongest"),

    "bg-hover": getSemanticColour("bg-hover"),
    "bg-hover-strong": getSemanticColour("bg-hover-strong"),
    "bg-hover-subtle": getSemanticColour("bg-hover-subtle"),
    "bg-hover-neutral": getSemanticColour("bg-hover-neutral"),
    "bg-hover-neutral-strong": getSemanticColour("bg-hover-neutral-strong"),

    "bg-selected": getSemanticColour("bg-selected"),
    "bg-selected-hover": getSemanticColour("bg-selected-hover"),
    "bg-selected-strong": getSemanticColour("bg-selected-strong"),
    "bg-selected-stronger": getSemanticColour("bg-selected-stronger"),
    "bg-selected-strongest": getSemanticColour("bg-selected-strongest"),
    "bg-selected-strongest-hover": getSemanticColour(
        "bg-selected-strongest-hover"
    ),

    "bg-disabled": getSemanticColour("bg-disabled"),
    "bg-selected-disabled": getSemanticColour("bg-selected-disabled"),
    "bg-selected-stronger-disabled": getSemanticColour(
        "bg-selected-stronger-disabled"
    ),

    "bg-success": getSemanticColour("bg-success"),
    "bg-success-hover": getSemanticColour("bg-success-hover"),
    "bg-success-strong": getSemanticColour("bg-success-strong"),
    "bg-success-strong-hover": getSemanticColour("bg-success-strong-hover"),
    "bg-warning": getSemanticColour("bg-warning"),
    "bg-warning-hover": getSemanticColour("bg-warning-hover"),
    "bg-warning-strong": getSemanticColour("bg-warning-strong"),
    "bg-warning-strong-hover": getSemanticColour("bg-warning-strong-hover"),
    "bg-info": getSemanticColour("bg-info"),
    "bg-info-hover": getSemanticColour("bg-info-hover"),
    "bg-info-strong": getSemanticColour("bg-info-strong"),
    "bg-info-strong-hover": getSemanticColour("bg-info-strong-hover"),
    "bg-error": getSemanticColour("bg-error"),
    "bg-error-hover": getSemanticColour("bg-error-hover"),
    "bg-error-strong": getSemanticColour("bg-error-strong"),
    "bg-error-strong-hover": getSemanticColour("bg-error-strong-hover"),

    "bg-inverse": getSemanticColour("bg-inverse"),
    "bg-inverse-subtle": getSemanticColour("bg-inverse-subtle"),
    "bg-inverse-subtler": getSemanticColour("bg-inverse-subtler"),
    "bg-inverse-subtlest": getSemanticColour("bg-inverse-subtlest"),
    "bg-inverse-hover": getSemanticColour("bg-inverse-hover"),

    "bg-primary": getSemanticColour("bg-primary"),
    "bg-primary-subtle": getSemanticColour("bg-primary-subtle"),
    "bg-primary-subtler": getSemanticColour("bg-primary-subtler"),
    "bg-primary-subtlest": getSemanticColour("bg-primary-subtlest"),
    "bg-available": getSemanticColour("bg-available"),

    "bg-primary-hover": getSemanticColour("bg-primary-hover"),
    "bg-primary-subtlest-hover": getSemanticColour("bg-primary-subtlest-hover"),
    "bg-primary-subtlest-selected": getSemanticColour(
        "bg-primary-subtlest-selected"
    ),

    // overlay
    "overlay-strong": getSemanticColour("overlay-strong"),
    "overlay-subtle": getSemanticColour("overlay-subtle"),

    // hyperlink
    hyperlink: getSemanticColour("hyperlink"),
    "hyperlink-hover": getSemanticColour("hyperlink-hover"),
    "hyperlink-visited": getSemanticColour("hyperlink-visited"),
    "hyperlink-inverse": getSemanticColour("hyperlink-inverse"),

    // focus ring
    "focus-ring": getSemanticColour("focus-ring"),
    "focus-ring-inverse": getSemanticColour("focus-ring-inverse"),
};
