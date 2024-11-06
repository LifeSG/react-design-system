import { getPrimitiveColour } from "../../colour-primitive/theme-helper";
import { SemanticColourSet } from "../../types";

export const LifeSGColourSet: SemanticColourSet = {
    // text
    text: getPrimitiveColour("neutral-20"),
    "text-subtle": getPrimitiveColour("neutral-30"),
    "text-subtler": getPrimitiveColour("neutral-50"),
    "text-subtlest": getPrimitiveColour("neutral-60"),
    "text-primary": getPrimitiveColour("primary-50"),

    "text-hover": getPrimitiveColour("primary-40"),
    "text-selected": getPrimitiveColour("primary-50"),
    "text-selected-hover": getPrimitiveColour("primary-40"),

    "text-disabled": getPrimitiveColour("neutral-50"),
    "text-disabled-subtle": getPrimitiveColour("neutral-60"),
    "text-disabled-subtlest": getPrimitiveColour("neutral-80"),
    "text-selected-disabled": getPrimitiveColour("neutral-50"),

    "text-success": getPrimitiveColour("success-40"),
    "text-warning": getPrimitiveColour("warning-40"),
    "text-error": getPrimitiveColour("error-40"),
    "text-info": getPrimitiveColour("info-40"),
    "text-inverse": getPrimitiveColour("white"),

    // icon
    icon: getPrimitiveColour("neutral-50"),
    "icon-subtle": getPrimitiveColour("neutral-60"),
    "icon-strongest": getPrimitiveColour("neutral-20"),
    "icon-primary": getPrimitiveColour("primary-50"),
    "icon-primary-subtle": getPrimitiveColour("primary-60"),
    "icon-primary-subtlest": getPrimitiveColour("primary-70"),

    "icon-hover": getPrimitiveColour("primary-40"),
    "icon-selected": getPrimitiveColour("primary-50"),
    "icon-selected-hover": getPrimitiveColour("primary-40"),

    "icon-disabled": getPrimitiveColour("neutral-50"),
    "icon-disabled-subtle": getPrimitiveColour("neutral-60"),
    "icon-selected-disabled": getPrimitiveColour("neutral-60"),

    "icon-success": getPrimitiveColour("success-50"),
    "icon-warning": getPrimitiveColour("warning-60"),
    "icon-error": getPrimitiveColour("error-50"),
    "icon-error-strong": getPrimitiveColour("error-40"),
    "icon-info": getPrimitiveColour("info-50"),
    "icon-inverse": getPrimitiveColour("white"),
    "icon-primary-inverse": "#FEAB10",

    // border
    border: getPrimitiveColour("neutral-90"),
    "border-strong": getPrimitiveColour("neutral-70"),
    "border-stronger": getPrimitiveColour("neutral-30"),
    "border-primary": getPrimitiveColour("primary-50"),
    "border-primary-subtle": getPrimitiveColour("primary-60"),

    "border-hover": getPrimitiveColour("primary-90"),
    "border-hover-strong": getPrimitiveColour("primary-60"),

    "border-selected": getPrimitiveColour("primary-50"),
    "border-selected-subtle": getPrimitiveColour("primary-70"),
    "border-selected-subtlest": getPrimitiveColour("primary-90"),
    "border-selected-hover": getPrimitiveColour("primary-40"),

    "border-focus": getPrimitiveColour("primary-60"),
    "border-focus-strong": getPrimitiveColour("primary-50"),

    "border-disabled": getPrimitiveColour("neutral-90"),
    "border-selected-disabled": getPrimitiveColour("neutral-70"),

    "border-success": getPrimitiveColour("success-60"),
    "border-warning": getPrimitiveColour("warning-60"),
    "border-error": getPrimitiveColour("error-60"),
    "border-error-focus": getPrimitiveColour("error-60"),
    "border-error-strong": getPrimitiveColour("error-40"),
    "border-info": getPrimitiveColour("info-60"),

    // background
    bg: getPrimitiveColour("white"),
    "bg-strong": getPrimitiveColour("neutral-100"),
    "bg-stronger": getPrimitiveColour("neutral-95"),
    "bg-strongest": getPrimitiveColour("neutral-90"),

    "bg-hover": getPrimitiveColour("primary-95"),
    "bg-hover-strong": getPrimitiveColour("primary-90"),
    "bg-hover-subtle": getPrimitiveColour("primary-100"),
    "bg-hover-neutral": getPrimitiveColour("neutral-95"),

    "bg-selected": getPrimitiveColour("primary-95"),
    "bg-selected-hover": getPrimitiveColour("primary-90"),
    "bg-selected-strong": getPrimitiveColour("primary-90"),
    "bg-selected-strongest": getPrimitiveColour("primary-90"),
    "bg-selected-strongest-hover": getPrimitiveColour("primary-40"),

    "bg-disabled": getPrimitiveColour("neutral-95"),
    "bg-selected-disabled": getPrimitiveColour("neutral-95"),

    "bg-success": getPrimitiveColour("success-100"),
    "bg-success-strong": getPrimitiveColour("success-50"),
    "bg-warning": getPrimitiveColour("warning-100"),
    "bg-warning-strong": getPrimitiveColour("warning-50"),
    "bg-info": getPrimitiveColour("info-100"),
    "bg-info-strong": getPrimitiveColour("info-50"),
    "bg-error": getPrimitiveColour("error-100"),
    "bg-error-strong": getPrimitiveColour("error-50"),
    "bg-error-strong-hover": getPrimitiveColour("error-30"),

    "bg-inverse": getPrimitiveColour("neutral-20"),
    "bg-inverse-subtle": getPrimitiveColour("neutral-30"),
    "bg-inverse-subtler": getPrimitiveColour("neutral-50"),
    "bg-inverse-subtlest": getPrimitiveColour("neutral-60"),

    "bg-primary": getPrimitiveColour("primary-50"),
    "bg-primary-subtle": getPrimitiveColour("primary-60"),
    "bg-primary-subtler": getPrimitiveColour("primary-80"),
    "bg-primary-subtlest": getPrimitiveColour("primary-100"),
    "bg-primary-hover": getPrimitiveColour("primary-40"),
    "bg-primary-subtlest-hover": getPrimitiveColour("primary-90"),
    "bg-primary-subtlest-selected": getPrimitiveColour("primary-90"),
    "bg-available": "#6DD0A1",

    // overlay
    "overlay-strong": "rgba(40, 40, 40, 0.85)",
    "overlay-subtle": "rgba(40, 40, 40, 0.20)",

    // hyperlink
    hyperlink: getPrimitiveColour("primary-50"),
    "hyperlink-inverse": "#FFCB6A",

    // focus ring
    "focus-ring": getPrimitiveColour("black"),
    "focus-ring-inverse": getPrimitiveColour("white"),
};
