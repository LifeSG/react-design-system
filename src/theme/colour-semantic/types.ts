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

    "bg-hover": SemanticColourValue;
    "bg-selected": SemanticColourValue;
    "bg-disabled": SemanticColourValue;
    "bg-success": SemanticColourValue;
    "bg-inverse": SemanticColourValue;
    "bg-stronger": SemanticColourValue;
    "bg-hover-strong": SemanticColourValue;
    "bg-hover-subtle": SemanticColourValue;
    "bg-hover-neutral": SemanticColourValue;
    "bg-primary": SemanticColourValue;
    "bg-primary-hover": SemanticColourValue;
    "bg-primary-subtle": SemanticColourValue;
    "bg-primary-subtlest": SemanticColourValue;
    "bg-primary-subtlest-hover": SemanticColourValue;
    "bg-primary-subtlest-selected": SemanticColourValue;
    "bg-selected-strong": SemanticColourValue;
    "bg-selected-hover": SemanticColourValue;
    "bg-selected-disabled": SemanticColourValue;
    "bg-warning": SemanticColourValue;
    "bg-error": SemanticColourValue;
    "bg-info": SemanticColourValue;
    "bg-error-strong": SemanticColourValue;
    "bg-error-strong-hover": SemanticColourValue;

    "overlay-strong": SemanticColourValue;
    "overlay-subtle": SemanticColourValue;
    "overlay-inverse-gradient": SemanticColourValue;

    hyperlink: SemanticColourValue;
    "hyperlink-inverse": SemanticColourValue;
    "focus-ring": SemanticColourValue;
    "focus-ring-inverse": SemanticColourValue;

    // new
    "text-primary": SemanticColourValue;
    "text-selected-hover": SemanticColourValue;
    "icon-selected-hover": SemanticColourValue;
    "border-selected-hover": SemanticColourValue;
    bg: SemanticColourValue;
    "bg-primary-subtler": SemanticColourValue;
    "bg-success-strong": SemanticColourValue;
    "bg-inverse-subtle": SemanticColourValue;
    "bg-inverse-subtler": SemanticColourValue;
    "bg-inverse-subtlest": SemanticColourValue;
    "bg-strong": SemanticColourValue;
    "bg-strongest": SemanticColourValue;
    "bg-selected-strongest": SemanticColourValue;
    "bg-warning-strong": SemanticColourValue;
    "bg-info-strong": SemanticColourValue;
    "border-error-strong": SemanticColourValue;
};
