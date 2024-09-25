import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ColourScheme, SemanticColourSet, ThemeCollectionSpec } from "../types";
import { LifeSGColourSet } from "./specs/lifesg-semantic-tokens";
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
    },
    defaultValue: "lifesg",
};

export const getSemanticColour = (key: keyof SemanticColourSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const colorSet: SemanticColourSet = getCollection(
            ColourSpec,
            theme.colourScheme
        );

        // check for an override
        const colorValue =
            theme.overrides && theme.overrides.semanticColour
                ? getValue(colorSet, key, theme.overrides.semanticColour)
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
    "icon-strongest": getSemanticColour("icon-strongest"),
    "icon-primary": getSemanticColour("icon-primary"),
    "icon-primary-subtle": getSemanticColour("icon-primary-subtle"),
    "icon-primary-subtlest": getSemanticColour("icon-primary-subtlest"),
    "icon-disabled-subtle": getSemanticColour("icon-disabled-subtle"),
    "icon-selected-disabled": getSemanticColour("icon-selected-disabled"),
    "icon-warning": getSemanticColour("icon-warning"),
    "icon-error": getSemanticColour("icon-error"),
    "icon-error-strong": getSemanticColour("icon-error-strong"),
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

    "bg-hover": getSemanticColour("bg-hover"),
    "bg-selected": getSemanticColour("bg-selected"),
    "bg-disabled": getSemanticColour("bg-disabled"),
    "bg-success": getSemanticColour("bg-success"),
    "bg-inverse": getSemanticColour("bg-inverse"),
    "bg-stronger": getSemanticColour("bg-stronger"),
    "bg-hover-strong": getSemanticColour("bg-hover-strong"),
    "bg-hover-subtle": getSemanticColour("bg-hover-subtle"),
    "bg-hover-neutral": getSemanticColour("bg-hover-neutral"),
    "bg-primary": getSemanticColour("bg-primary"),
    "bg-primary-hover": getSemanticColour("bg-primary-hover"),
    "bg-primary-subtle": getSemanticColour("bg-primary-subtle"),
    "bg-primary-subtlest": getSemanticColour("bg-primary-subtlest"),
    "bg-primary-subtlest-hover": getSemanticColour("bg-primary-subtlest-hover"),
    "bg-primary-subtlest-selected": getSemanticColour(
        "bg-primary-subtlest-selected"
    ),
    "bg-selected-strong": getSemanticColour("bg-selected-strong"),
    "bg-selected-hover": getSemanticColour("bg-selected-hover"),
    "bg-selected-disabled": getSemanticColour("bg-selected-disabled"),
    "bg-warning": getSemanticColour("bg-warning"),
    "bg-error": getSemanticColour("bg-error"),
    "bg-info": getSemanticColour("bg-info"),
    "bg-error-strong": getSemanticColour("bg-error-strong"),
    "bg-error-strong-hover": getSemanticColour("bg-error-strong-hover"),

    "overlay-strong": getSemanticColour("overlay-strong"),
    "overlay-subtle": getSemanticColour("overlay-subtle"),
    "overlay-inverse-gradient": getSemanticColour("overlay-inverse-gradient"),

    hyperlink: getSemanticColour("hyperlink"),
    "hyperlink-inverse": getSemanticColour("hyperlink-inverse"),
    "focus-ring": getSemanticColour("focus-ring"),
    "focus-ring-inverse": getSemanticColour("focus-ring-inverse"),

    // new changes:
    "text-primary": getSemanticColour("text-primary"),
    "text-selected-hover": getSemanticColour("text-selected-hover"),
    "icon-selected-hover": getSemanticColour("icon-selected-hover"),
    "border-selected-hover": getSemanticColour("border-selected-hover"),
    bg: getSemanticColour("bg"),
    "bg-primary-subtler": getSemanticColour("bg-primary-subtler"),
    "bg-success-strong": getSemanticColour("bg-success-strong"),
    "bg-inverse-subtle": getSemanticColour("bg-inverse-subtle"),
    "bg-inverse-subtler": getSemanticColour("bg-inverse-subtler"),
    "bg-inverse-subtlest": getSemanticColour("bg-inverse-subtlest"),
    "bg-strong": getSemanticColour("bg-strong"),
    "bg-strongest": getSemanticColour("bg-strongest"),
    "bg-selected-strongest": getSemanticColour("bg-selected-strongest"),
    "bg-warning-strong": getSemanticColour("bg-warning-strong"),
    "bg-info-strong": getSemanticColour("bg-info-strong"),
    "border-error-strong": getSemanticColour("border-error-strong"),
};
