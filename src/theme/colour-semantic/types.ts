import { ColourScheme } from "../types";

export type SemanticColourCollectionMap = {
    [key in ColourScheme]: SemanticColourSet;
};

export type SemanticColourSetOptions = Partial<SemanticColourSet>;

type SemanticColourValue = string | ((props: any) => string);
export type SemanticColourSet = {
    text: SemanticColourValue;
    "text-hover": SemanticColourValue;
    "text-selected": SemanticColourValue;
    "text-disabled": SemanticColourValue;
    "text-success": SemanticColourValue;
    "text-inverse": SemanticColourValue;
    "text-subtle": SemanticColourValue;
    "text-subtler": SemanticColourValue;
    "text-subtlest": SemanticColourValue;
    "text-disabled-subtle": SemanticColourValue;
    "text-disabled-subtlest": SemanticColourValue;
    "text-selected-disabled": SemanticColourValue;
    "text-warning": SemanticColourValue;
    "text-error": SemanticColourValue;
    "text-info": SemanticColourValue;

    icon: SemanticColourValue;
    "icon-hover": SemanticColourValue;
    "icon-selected": SemanticColourValue;
    "icon-disabled": SemanticColourValue;
    "icon-success": SemanticColourValue;
    "icon-inverse": SemanticColourValue;
    "icon-subtle": SemanticColourValue;
    "icon-strongest": SemanticColourValue;
    "icon-primary": SemanticColourValue;
    "icon-primary-subtle": SemanticColourValue;
    "icon-primary-subtlest": SemanticColourValue;
    "icon-disabled-subtle": SemanticColourValue;
    "icon-selected-disabled": SemanticColourValue;
    "icon-warning": SemanticColourValue;
    "icon-error": SemanticColourValue;
    "icon-error-strong": SemanticColourValue;
    "icon-info": SemanticColourValue;

    border: SemanticColourValue;
    "border-hover": SemanticColourValue;
    "border-selected": SemanticColourValue;
    "border-disabled": SemanticColourValue;
    "border-success": SemanticColourValue;
    "border-inverse": SemanticColourValue;
    "border-strong": SemanticColourValue;
    "border-primary": SemanticColourValue;
    "border-primary-subtle": SemanticColourValue;
    "border-hover-strong": SemanticColourValue;
    "border-selected-subtle": SemanticColourValue;
    "border-selected-subtlest": SemanticColourValue;
    "border-focus": SemanticColourValue;
    "border-focus-strong": SemanticColourValue;
    "border-selected-disabled": SemanticColourValue;
    "border-warning": SemanticColourValue;
    "border-error": SemanticColourValue;
    "border-error-focus": SemanticColourValue;
    "border-info": SemanticColourValue;

    background: SemanticColourValue;
    "background-hover": SemanticColourValue;
    "background-selected": SemanticColourValue;
    "background-disabled": SemanticColourValue;
    "background-success": SemanticColourValue;
    "background-inverse": SemanticColourValue;
    "background-strong": SemanticColourValue;
    "background-stronger": SemanticColourValue;
    "background-hover-strong": SemanticColourValue;
    "background-hover-subtle": SemanticColourValue;
    "background-hover-neutral": SemanticColourValue;
    "background-primary": SemanticColourValue;
    "background-primary-hover": SemanticColourValue;
    "background-primary-subtle": SemanticColourValue;
    "background-primary-subtlest": SemanticColourValue;
    "background-primary-subtlest-hover": SemanticColourValue;
    "background-primary-subtlest-selected": SemanticColourValue;
    "background-selected-strong": SemanticColourValue;
    "background-selected-hover": SemanticColourValue;
    "background-selected-disabled": SemanticColourValue;
    "background-warning": SemanticColourValue;
    "background-error": SemanticColourValue;
    "background-info": SemanticColourValue;
    "background-error-strong": SemanticColourValue;
    "background-error-strong-hover": SemanticColourValue;

    "overlay-strong": SemanticColourValue;
    "overlay-subtle": SemanticColourValue;
    "overlay-inverse-gradient": SemanticColourValue;

    hyperlink: SemanticColourValue;
    "hyperlink-inverse": SemanticColourValue;
    "focus-ring": SemanticColourValue;
    "focus-ring-inverse": SemanticColourValue;
};
