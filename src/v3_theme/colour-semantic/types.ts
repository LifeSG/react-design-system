import { V3_ColourScheme } from "../types";

export type V3_SemanticColourCollectionMap = {
    [key in V3_ColourScheme]: V3_SemanticColourSet;
};

export type V3_SemanticColourSetOptions = Partial<V3_SemanticColourSet>;

type V3_SemanticColourValue = string | ((props: any) => string);

export type V3_SemanticColourSet = {
    // text
    text: V3_SemanticColourValue;
    "text-subtle": V3_SemanticColourValue;
    "text-subtler": V3_SemanticColourValue;
    "text-subtlest": V3_SemanticColourValue;
    "text-primary": V3_SemanticColourValue;
    "text-primary-strongest": V3_SemanticColourValue;

    "text-hover": V3_SemanticColourValue;
    "text-selected": V3_SemanticColourValue;
    "text-selected-hover": V3_SemanticColourValue;

    "text-disabled": V3_SemanticColourValue;
    "text-disabled-subtle": V3_SemanticColourValue;
    "text-disabled-subtlest": V3_SemanticColourValue;
    "text-selected-disabled": V3_SemanticColourValue;

    "text-success": V3_SemanticColourValue;
    "text-warning": V3_SemanticColourValue;
    "text-error": V3_SemanticColourValue;
    "text-info": V3_SemanticColourValue;
    "text-inverse": V3_SemanticColourValue;

    // icon
    icon: V3_SemanticColourValue;
    "icon-subtle": V3_SemanticColourValue;
    "icon-strongest": V3_SemanticColourValue;
    "icon-primary": V3_SemanticColourValue;
    "icon-primary-subtle": V3_SemanticColourValue;
    "icon-primary-subtlest": V3_SemanticColourValue;

    "icon-hover": V3_SemanticColourValue;
    "icon-selected": V3_SemanticColourValue;
    "icon-selected-hover": V3_SemanticColourValue;

    "icon-disabled": V3_SemanticColourValue;
    "icon-disabled-subtle": V3_SemanticColourValue;
    "icon-selected-disabled": V3_SemanticColourValue;

    "icon-success": V3_SemanticColourValue;
    "icon-warning": V3_SemanticColourValue;
    "icon-error": V3_SemanticColourValue;
    "icon-error-strong": V3_SemanticColourValue;
    "icon-info": V3_SemanticColourValue;
    "icon-inverse": V3_SemanticColourValue;
    "icon-primary-inverse": V3_SemanticColourValue;

    // border
    border: V3_SemanticColourValue;
    "border-strong": V3_SemanticColourValue;
    "border-stronger": V3_SemanticColourValue;
    "border-primary": V3_SemanticColourValue;
    "border-primary-subtle": V3_SemanticColourValue;

    "border-hover": V3_SemanticColourValue;
    "border-hover-strong": V3_SemanticColourValue;

    "border-selected": V3_SemanticColourValue;
    "border-selected-subtle": V3_SemanticColourValue;
    "border-selected-subtlest": V3_SemanticColourValue;
    "border-selected-hover": V3_SemanticColourValue;

    "border-focus": V3_SemanticColourValue;
    "border-focus-strong": V3_SemanticColourValue;

    "border-disabled": V3_SemanticColourValue;
    "border-selected-disabled": V3_SemanticColourValue;

    "border-success": V3_SemanticColourValue;
    "border-warning": V3_SemanticColourValue;
    "border-error": V3_SemanticColourValue;
    "border-error-focus": V3_SemanticColourValue;
    "border-error-focus-strong": V3_SemanticColourValue;
    "border-error-strong": V3_SemanticColourValue;
    "border-info": V3_SemanticColourValue;

    // background
    bg: V3_SemanticColourValue;
    "bg-strong": V3_SemanticColourValue;
    "bg-stronger": V3_SemanticColourValue;
    "bg-strongest": V3_SemanticColourValue;

    "bg-hover": V3_SemanticColourValue;
    "bg-hover-strong": V3_SemanticColourValue;
    "bg-hover-subtle": V3_SemanticColourValue;
    "bg-hover-neutral": V3_SemanticColourValue;
    "bg-hover-neutral-strong": V3_SemanticColourValue;

    "bg-selected": V3_SemanticColourValue;
    "bg-selected-hover": V3_SemanticColourValue;
    "bg-selected-strong": V3_SemanticColourValue;
    "bg-selected-stronger": V3_SemanticColourValue;
    "bg-selected-strongest": V3_SemanticColourValue;
    "bg-selected-strongest-hover": V3_SemanticColourValue;

    "bg-disabled": V3_SemanticColourValue;
    "bg-selected-disabled": V3_SemanticColourValue;
    "bg-selected-stronger-disabled": V3_SemanticColourValue;

    "bg-success": V3_SemanticColourValue;
    "bg-success-hover": V3_SemanticColourValue;
    "bg-success-strong": V3_SemanticColourValue;
    "bg-success-strong-hover": V3_SemanticColourValue;
    "bg-warning": V3_SemanticColourValue;
    "bg-warning-hover": V3_SemanticColourValue;
    "bg-warning-strong": V3_SemanticColourValue;
    "bg-warning-strong-hover": V3_SemanticColourValue;
    "bg-info": V3_SemanticColourValue;
    "bg-info-hover": V3_SemanticColourValue;
    "bg-info-strong": V3_SemanticColourValue;
    "bg-info-strong-hover": V3_SemanticColourValue;
    "bg-error": V3_SemanticColourValue;
    "bg-error-hover": V3_SemanticColourValue;
    "bg-error-strong": V3_SemanticColourValue;
    "bg-error-strong-hover": V3_SemanticColourValue;

    "bg-inverse": V3_SemanticColourValue;
    "bg-inverse-subtle": V3_SemanticColourValue;
    "bg-inverse-subtler": V3_SemanticColourValue;
    "bg-inverse-subtlest": V3_SemanticColourValue;
    "bg-inverse-hover": V3_SemanticColourValue;

    "bg-primary": V3_SemanticColourValue;
    "bg-primary-subtle": V3_SemanticColourValue;
    "bg-primary-subtler": V3_SemanticColourValue;
    "bg-primary-subtlest": V3_SemanticColourValue;
    "bg-available": V3_SemanticColourValue;

    "bg-primary-hover": V3_SemanticColourValue;
    "bg-primary-subtlest-hover": V3_SemanticColourValue;
    "bg-primary-subtlest-selected": V3_SemanticColourValue;

    // overlay
    "overlay-strong": V3_SemanticColourValue;
    "overlay-subtle": V3_SemanticColourValue;

    // hyperlink
    hyperlink: V3_SemanticColourValue;
    "hyperlink-hover": V3_SemanticColourValue;
    "hyperlink-visited": V3_SemanticColourValue;
    "hyperlink-inverse": V3_SemanticColourValue;

    // focus ring
    "focus-ring": V3_SemanticColourValue;
    "focus-ring-inverse": V3_SemanticColourValue;
};
