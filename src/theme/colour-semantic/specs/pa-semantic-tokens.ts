import { getPrimitiveColour } from "../../colour-primitive/theme-helper";
import { SemanticColourSet } from "../../types";

export const PAColourSet: SemanticColourSet = {
    // text
    text: getPrimitiveColour("neutral-30"),
    "text-subtle": getPrimitiveColour("neutral-40"),
    "text-subtler": getPrimitiveColour("neutral-50"),
    "text-subtlest": getPrimitiveColour("neutral-70"),
    "text-primary": getPrimitiveColour("neutral-10"),

    "text-hover": getPrimitiveColour("neutral-70"),
    "text-selected": getPrimitiveColour("neutral-20"),
    "text-selected-hover": getPrimitiveColour("neutral-10"),

    "text-disabled": getPrimitiveColour("neutral-50"),
    "text-disabled-subtle": getPrimitiveColour("neutral-60"),
    "text-disabled-subtlest": getPrimitiveColour("neutral-80"),
    "text-selected-disabled": getPrimitiveColour("neutral-40"),

    "text-success": getPrimitiveColour("success-40"),
    "text-warning": getPrimitiveColour("warning-40"),
    "text-error": getPrimitiveColour("brand-30"),
    "text-info": getPrimitiveColour("neutral-40"),
    "text-inverse": getPrimitiveColour("neutral-100"),

    // icon
    icon: getPrimitiveColour("neutral-40"),
    "icon-subtle": getPrimitiveColour("neutral-50"),
    "icon-strongest": getPrimitiveColour("neutral-10"),
    "icon-primary": getPrimitiveColour("neutral-10"),
    "icon-primary-subtle": getPrimitiveColour("neutral-30"),
    "icon-primary-subtlest": getPrimitiveColour("neutral-60"),

    "icon-hover": getPrimitiveColour("neutral-70"),
    "icon-selected": getPrimitiveColour("brand-20"),
    "icon-selected-hover": getPrimitiveColour("brand-10"),

    "icon-disabled": getPrimitiveColour("neutral-50"),
    "icon-disabled-subtle": getPrimitiveColour("neutral-60"),
    "icon-selected-disabled": getPrimitiveColour("neutral-40"),

    "icon-success": getPrimitiveColour("success-40"),
    "icon-warning": getPrimitiveColour("warning-60"),
    "icon-error": getPrimitiveColour("brand-30"),
    "icon-error-strong": getPrimitiveColour("brand-10"),
    "icon-info": getPrimitiveColour("neutral-40"),
    "icon-inverse": getPrimitiveColour("neutral-100"),
    "icon-primary-inverse": "#F9B371",

    // border
    border: getPrimitiveColour("neutral-90"),
    "border-strong": getPrimitiveColour("neutral-30"),
    "border-stronger": getPrimitiveColour("neutral-20"),
    "border-primary": getPrimitiveColour("neutral-40"),
    "border-primary-subtle": getPrimitiveColour("neutral-60"),

    "border-hover": getPrimitiveColour("neutral-80"),
    "border-hover-strong": getPrimitiveColour("neutral-10"),

    "border-selected": getPrimitiveColour("brand-20"),
    "border-selected-subtle": getPrimitiveColour("neutral-40"),
    "border-selected-subtlest": getPrimitiveColour("neutral-70"),
    "border-selected-hover": getPrimitiveColour("neutral-10"),

    "border-focus": getPrimitiveColour("neutral-20"),
    "border-focus-strong": getPrimitiveColour("neutral-10"),

    "border-disabled": getPrimitiveColour("neutral-90"),
    "border-selected-disabled": getPrimitiveColour("neutral-80"),

    "border-success": getPrimitiveColour("success-40"),
    "border-warning": getPrimitiveColour("warning-60"),
    "border-error": getPrimitiveColour("brand-30"),
    "border-error-focus": getPrimitiveColour("brand-20"),
    "border-error-focus-strong": getPrimitiveColour("brand-10"),
    "border-error-strong": getPrimitiveColour("brand-20"),
    "border-info": getPrimitiveColour("neutral-40"),

    // background
    bg: getPrimitiveColour("neutral-100"),
    "bg-strong": getPrimitiveColour("neutral-95"),
    "bg-stronger": getPrimitiveColour("neutral-90"),
    "bg-strongest": getPrimitiveColour("neutral-80"),

    "bg-hover": getPrimitiveColour("brand-90"),
    "bg-hover-strong": getPrimitiveColour("brand-80"),
    "bg-hover-subtle": getPrimitiveColour("neutral-90"),
    "bg-hover-neutral": getPrimitiveColour("neutral-90"),
    "bg-hover-neutral-strong": getPrimitiveColour("neutral-90"),

    "bg-selected": getPrimitiveColour("brand-100"),
    "bg-selected-hover": getPrimitiveColour("brand-30"),
    "bg-selected-strong": getPrimitiveColour("brand-50"),
    "bg-selected-stronger": getPrimitiveColour("brand-40"),
    "bg-selected-strongest": getPrimitiveColour("brand-20"),
    "bg-selected-strongest-hover": getPrimitiveColour("brand-10"),

    "bg-disabled": getPrimitiveColour("neutral-90"),
    "bg-selected-disabled": getPrimitiveColour("neutral-90"),
    "bg-selected-stronger-disabled": getPrimitiveColour("neutral-80"),

    "bg-success": getPrimitiveColour("success-100"),
    "bg-success-hover": getPrimitiveColour("success-95"),
    "bg-success-strong": getPrimitiveColour("success-50"),
    "bg-success-strong-hover": getPrimitiveColour("success-40"),
    "bg-warning": getPrimitiveColour("warning-100"),
    "bg-warning-hover": getPrimitiveColour("warning-95"),
    "bg-warning-strong": getPrimitiveColour("warning-50"),
    "bg-warning-strong-hover": getPrimitiveColour("warning-40"),
    "bg-info": getPrimitiveColour("neutral-95"),
    "bg-info-hover": getPrimitiveColour("info-95"),
    "bg-info-strong": getPrimitiveColour("info-50"),
    "bg-info-strong-hover": getPrimitiveColour("info-40"),
    "bg-error": getPrimitiveColour("brand-100"),
    "bg-error-hover": getPrimitiveColour("error-95"),
    "bg-error-strong": getPrimitiveColour("error-50"),
    "bg-error-strong-hover": getPrimitiveColour("error-40"),

    "bg-inverse": getPrimitiveColour("neutral-40"),
    "bg-inverse-subtle": getPrimitiveColour("neutral-60"),
    "bg-inverse-subtler": getPrimitiveColour("neutral-70"),
    "bg-inverse-subtlest": getPrimitiveColour("neutral-80"),
    "bg-inverse-hover": getPrimitiveColour("neutral-30"),

    "bg-primary": getPrimitiveColour("brand-20"),
    "bg-primary-subtle": getPrimitiveColour("brand-60"),
    "bg-primary-subtler": getPrimitiveColour("brand-80"),
    "bg-primary-subtlest": getPrimitiveColour("brand-100"),
    "bg-available": getPrimitiveColour("success-60"),

    "bg-primary-hover": getPrimitiveColour("brand-10"),
    "bg-primary-subtlest-hover": getPrimitiveColour("brand-80"),
    "bg-primary-subtlest-selected": getPrimitiveColour("brand-40"),

    // overlay
    "overlay-strong": "rgba(25, 25, 25, 0.95)",
    "overlay-subtle": "rgba(25, 25, 25, 0.20)",

    // hyperlink
    hyperlink: getPrimitiveColour("neutral-10"),
    "hyperlink-hover": getPrimitiveColour("neutral-40"),
    "hyperlink-visited": getPrimitiveColour("neutral-50"),
    "hyperlink-inverse": "#F8AE68",

    // focus ring
    "focus-ring": getPrimitiveColour("black"),
    "focus-ring-inverse": getPrimitiveColour("white"),
};
