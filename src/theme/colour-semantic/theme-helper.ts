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
            theme["colourScheme"]
        );

        // check for an override
        const colorValue =
            theme.overrides && theme.overrides.sematiccolour
                ? getValue(colorSet, key, theme.overrides.sematiccolour)
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

    background: getSemanticColour("background"),
    "background-hover": getSemanticColour("background-hover"),
    "background-selected": getSemanticColour("background-selected"),
    "background-disabled": getSemanticColour("background-disabled"),
    "background-success": getSemanticColour("background-success"),
    "background-inverse": getSemanticColour("background-inverse"),
    "background-strong": getSemanticColour("background-strong"),
    "background-stronger": getSemanticColour("background-stronger"),
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
    "background-error-strong": getSemanticColour("background-error-strong"),
    "background-error-strong-hover": getSemanticColour(
        "background-error-strong-hover"
    ),

    "overlay-strong": getSemanticColour("overlay-strong"),
    "overlay-subtle": getSemanticColour("overlay-subtle"),
    "overlay-inverse-gradient": getSemanticColour("overlay-inverse-gradient"),

    hyperlink: getSemanticColour("hyperlink"),
    "hyperlink-inverse": getSemanticColour("hyperlink-inverse"),
    "focus-ring": getSemanticColour("focus-ring"),
    "focus-ring-inverse": getSemanticColour("focus-ring-inverse"),
};
