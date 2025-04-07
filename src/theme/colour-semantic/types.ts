import { ColourScheme } from "../types";

export type SemanticColourCollectionMap = {
    [key in ColourScheme]: SemanticColourSet;
};

export type SemanticColourSetOptions = Partial<SemanticColourSet>;

type SemanticColourValue = string | ((props: any) => string);

export type SemanticColourSet = {
    // text
    text: SemanticColourValue;
    "text-subtle": SemanticColourValue;
    "text-subtler": SemanticColourValue;
    "text-subtlest": SemanticColourValue;
    "text-primary": SemanticColourValue;

    "text-hover": SemanticColourValue;
    "text-selected": SemanticColourValue;
    "text-selected-hover": SemanticColourValue;

    "text-disabled": SemanticColourValue;
    "text-disabled-subtle": SemanticColourValue;
    "text-disabled-subtlest": SemanticColourValue;
    "text-selected-disabled": SemanticColourValue;

    "text-success": SemanticColourValue;
    "text-warning": SemanticColourValue;
    "text-error": SemanticColourValue;
    "text-info": SemanticColourValue;
    "text-inverse": SemanticColourValue;

    // icon
    icon: SemanticColourValue;
    "icon-subtle": SemanticColourValue;
    "icon-strongest": SemanticColourValue;
    "icon-primary": SemanticColourValue;
    "icon-primary-subtle": SemanticColourValue;
    "icon-primary-subtlest": SemanticColourValue;

    "icon-hover": SemanticColourValue;
    "icon-selected": SemanticColourValue;
    "icon-selected-hover": SemanticColourValue;

    "icon-disabled": SemanticColourValue;
    "icon-disabled-subtle": SemanticColourValue;
    "icon-selected-disabled": SemanticColourValue;

    "icon-success": SemanticColourValue;
    "icon-warning": SemanticColourValue;
    "icon-error": SemanticColourValue;
    "icon-error-strong": SemanticColourValue;
    "icon-info": SemanticColourValue;
    "icon-inverse": SemanticColourValue;
    "icon-primary-inverse": SemanticColourValue;

    // border
    border: SemanticColourValue;
    "border-strong": SemanticColourValue;
    "border-stronger": SemanticColourValue;
    "border-primary": SemanticColourValue;
    "border-primary-subtle": SemanticColourValue;

    "border-hover": SemanticColourValue;
    "border-hover-strong": SemanticColourValue;

    "border-selected": SemanticColourValue;
    "border-selected-subtle": SemanticColourValue;
    "border-selected-subtlest": SemanticColourValue;
    "border-selected-hover": SemanticColourValue;

    "border-focus": SemanticColourValue;
    "border-focus-strong": SemanticColourValue;

    "border-disabled": SemanticColourValue;
    "border-selected-disabled": SemanticColourValue;

    "border-success": SemanticColourValue;
    "border-warning": SemanticColourValue;
    "border-error": SemanticColourValue;
    "border-error-focus": SemanticColourValue;
    "border-error-focus-strong": SemanticColourValue;
    "border-error-strong": SemanticColourValue;
    "border-info": SemanticColourValue;

    // background
    bg: SemanticColourValue;
    "bg-strong": SemanticColourValue;
    "bg-stronger": SemanticColourValue;
    "bg-strongest": SemanticColourValue;

    "bg-hover": SemanticColourValue;
    "bg-hover-strong": SemanticColourValue;
    "bg-hover-subtle": SemanticColourValue;
    "bg-hover-neutral": SemanticColourValue;
    "bg-hover-neutral-strong": SemanticColourValue;

    "bg-selected": SemanticColourValue;
    "bg-selected-hover": SemanticColourValue;
    "bg-selected-strong": SemanticColourValue;
    "bg-selected-stronger": SemanticColourValue;
    "bg-selected-strongest": SemanticColourValue;
    "bg-selected-strongest-hover": SemanticColourValue;

    "bg-disabled": SemanticColourValue;
    "bg-selected-disabled": SemanticColourValue;
    "bg-selected-stronger-disabled": SemanticColourValue;

    "bg-success": SemanticColourValue;
    "bg-success-hover": SemanticColourValue;
    "bg-success-strong": SemanticColourValue;
    "bg-success-strong-hover": SemanticColourValue;
    "bg-warning": SemanticColourValue;
    "bg-warning-hover": SemanticColourValue;
    "bg-warning-strong": SemanticColourValue;
    "bg-warning-strong-hover": SemanticColourValue;
    "bg-info": SemanticColourValue;
    "bg-info-hover": SemanticColourValue;
    "bg-info-strong": SemanticColourValue;
    "bg-info-strong-hover": SemanticColourValue;
    "bg-error": SemanticColourValue;
    "bg-error-hover": SemanticColourValue;
    "bg-error-strong": SemanticColourValue;
    "bg-error-strong-hover": SemanticColourValue;

    "bg-inverse": SemanticColourValue;
    "bg-inverse-subtle": SemanticColourValue;
    "bg-inverse-subtler": SemanticColourValue;
    "bg-inverse-subtlest": SemanticColourValue;
    "bg-inverse-hover": SemanticColourValue;

    "bg-primary": SemanticColourValue;
    "bg-primary-subtle": SemanticColourValue;
    "bg-primary-subtler": SemanticColourValue;
    "bg-primary-subtlest": SemanticColourValue;
    "bg-available": SemanticColourValue;

    "bg-primary-hover": SemanticColourValue;
    "bg-primary-subtlest-hover": SemanticColourValue;
    "bg-primary-subtlest-selected": SemanticColourValue;

    // overlay
    "overlay-strong": SemanticColourValue;
    "overlay-subtle": SemanticColourValue;

    // hyperlink
    hyperlink: SemanticColourValue;
    "hyperlink-hover": SemanticColourValue;
    "hyperlink-visited": SemanticColourValue;
    "hyperlink-inverse": SemanticColourValue;

    // focus ring
    "focus-ring": SemanticColourValue;
    "focus-ring-inverse": SemanticColourValue;
};
