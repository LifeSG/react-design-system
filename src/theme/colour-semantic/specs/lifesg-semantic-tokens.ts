import { getPrimitiveColour } from "../../colour-primitive/theme-helper";
import { SemanticColourSet } from "../../types";

// ============================================================================
// LIGHT MODE COLOURS
// ============================================================================

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
    "text-selected-disabled": getPrimitiveColour("neutral-20"),

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
    "icon-primary-inverse": getPrimitiveColour("primary-inverse"),

    // border
    border: getPrimitiveColour("neutral-90"),
    "border-strong": getPrimitiveColour("neutral-70"),
    "border-stronger": getPrimitiveColour("neutral-50"),
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
    "border-error-focus-strong": getPrimitiveColour("error-40"),
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
    "bg-hover-neutral": getPrimitiveColour("neutral-100"),
    "bg-hover-neutral-strong": getPrimitiveColour("neutral-90"),

    "bg-selected": getPrimitiveColour("primary-95"),
    "bg-selected-hover": getPrimitiveColour("primary-90"),
    "bg-selected-strong": getPrimitiveColour("primary-90"),
    "bg-selected-stronger": getPrimitiveColour("primary-70"),
    "bg-selected-strongest": getPrimitiveColour("primary-50"),
    "bg-selected-strongest-hover": getPrimitiveColour("primary-40"),

    "bg-disabled": getPrimitiveColour("neutral-95"),
    "bg-selected-disabled": getPrimitiveColour("neutral-95"),
    "bg-selected-stronger-disabled": getPrimitiveColour("neutral-70"),

    "bg-success": getPrimitiveColour("success-100"),
    "bg-success-hover": getPrimitiveColour("success-95"),
    "bg-success-strong": getPrimitiveColour("success-50"),
    "bg-success-strong-hover": getPrimitiveColour("success-40"),
    "bg-warning": getPrimitiveColour("warning-100"),
    "bg-warning-hover": getPrimitiveColour("warning-95"),
    "bg-warning-strong": getPrimitiveColour("warning-50"),
    "bg-warning-strong-hover": getPrimitiveColour("warning-40"),
    "bg-info": getPrimitiveColour("info-100"),
    "bg-info-hover": getPrimitiveColour("info-95"),
    "bg-info-strong": getPrimitiveColour("info-50"),
    "bg-info-strong-hover": getPrimitiveColour("info-40"),
    "bg-error": getPrimitiveColour("error-100"),
    "bg-error-hover": getPrimitiveColour("error-95"),
    "bg-error-strong": getPrimitiveColour("error-50"),
    "bg-error-strong-hover": getPrimitiveColour("error-40"),

    "bg-inverse": getPrimitiveColour("neutral-20"),
    "bg-inverse-subtle": getPrimitiveColour("neutral-30"),
    "bg-inverse-subtler": getPrimitiveColour("neutral-50"),
    "bg-inverse-subtlest": getPrimitiveColour("neutral-60"),
    "bg-inverse-hover": getPrimitiveColour("neutral-40"),

    "bg-primary": getPrimitiveColour("primary-50"),
    "bg-primary-subtle": getPrimitiveColour("primary-60"),
    "bg-primary-subtler": getPrimitiveColour("primary-95"),
    "bg-primary-subtlest": getPrimitiveColour("primary-100"),
    "bg-available": "#6DD0A1",

    "bg-primary-hover": getPrimitiveColour("primary-40"),
    "bg-primary-subtlest-hover": getPrimitiveColour("primary-90"),
    "bg-primary-subtlest-selected": getPrimitiveColour("primary-90"),

    // overlay
    "overlay-strong": "rgba(40, 40, 40, 0.85)",
    "overlay-subtle": "rgba(40, 40, 40, 0.20)",

    // hyperlink
    hyperlink: getPrimitiveColour("primary-50"),
    "hyperlink-hover": getPrimitiveColour("primary-40"),
    "hyperlink-visited": getPrimitiveColour("primary-40"),
    "hyperlink-inverse": getPrimitiveColour("primary-inverse"),

    // focus ring
    "focus-ring": getPrimitiveColour("primary-50"),
    "focus-ring-inverse": getPrimitiveColour("white"),
};

// ============================================================================
// DARK MODE COLOURS
// ============================================================================

// currently used for testing and fallback for dark mode
export const LifeSGDarkColourSet: SemanticColourSet = {
    // text
    text: getPrimitiveColour("neutral-100"),
    "text-subtle": getPrimitiveColour("neutral-80"),
    "text-subtler": getPrimitiveColour("neutral-60"),
    "text-subtlest": getPrimitiveColour("neutral-50"),
    "text-primary": getPrimitiveColour("primary-60"),

    "text-hover": getPrimitiveColour("primary-70"),
    "text-selected": getPrimitiveColour("primary-60"),
    "text-selected-hover": getPrimitiveColour("primary-70"),

    "text-disabled": getPrimitiveColour("neutral-60"),
    "text-disabled-subtle": getPrimitiveColour("neutral-50"),
    "text-disabled-subtlest": getPrimitiveColour("neutral-30"),
    "text-selected-disabled": getPrimitiveColour("neutral-90"),

    "text-success": getPrimitiveColour("success-70"),
    "text-warning": getPrimitiveColour("warning-70"),
    "text-error": getPrimitiveColour("error-70"),
    "text-info": getPrimitiveColour("info-70"),
    "text-inverse": getPrimitiveColour("black"),

    // icon - adjusted for dark mode
    icon: getPrimitiveColour("neutral-60"),
    "icon-subtle": getPrimitiveColour("neutral-50"),
    "icon-strongest": getPrimitiveColour("neutral-90"),
    "icon-primary": getPrimitiveColour("primary-60"),
    "icon-primary-subtle": getPrimitiveColour("primary-50"),
    "icon-primary-subtlest": getPrimitiveColour("primary-40"),

    "icon-hover": getPrimitiveColour("primary-70"),
    "icon-selected": getPrimitiveColour("primary-60"),
    "icon-selected-hover": getPrimitiveColour("primary-70"),

    "icon-disabled": getPrimitiveColour("neutral-60"),
    "icon-disabled-subtle": getPrimitiveColour("neutral-50"),
    "icon-selected-disabled": getPrimitiveColour("neutral-50"),

    "icon-success": getPrimitiveColour("success-60"),
    "icon-warning": getPrimitiveColour("warning-50"),
    "icon-error": getPrimitiveColour("error-60"),
    "icon-error-strong": getPrimitiveColour("error-70"),
    "icon-info": getPrimitiveColour("info-60"),
    "icon-inverse": getPrimitiveColour("black"),
    "icon-primary-inverse": getPrimitiveColour("primary-inverse"),

    // border - adjusted for dark mode
    border: getPrimitiveColour("neutral-20"),
    "border-strong": getPrimitiveColour("neutral-40"),
    "border-stronger": getPrimitiveColour("neutral-60"),
    "border-primary": getPrimitiveColour("primary-60"),
    "border-primary-subtle": getPrimitiveColour("primary-50"),

    "border-hover": getPrimitiveColour("primary-20"),
    "border-hover-strong": getPrimitiveColour("primary-50"),

    "border-selected": getPrimitiveColour("primary-60"),
    "border-selected-subtle": getPrimitiveColour("primary-40"),
    "border-selected-subtlest": getPrimitiveColour("primary-20"),
    "border-selected-hover": getPrimitiveColour("primary-70"),

    "border-focus": getPrimitiveColour("primary-50"),
    "border-focus-strong": getPrimitiveColour("primary-60"),

    "border-disabled": getPrimitiveColour("neutral-20"),
    "border-selected-disabled": getPrimitiveColour("neutral-40"),

    "border-success": getPrimitiveColour("success-50"),
    "border-warning": getPrimitiveColour("warning-50"),
    "border-error": getPrimitiveColour("error-50"),
    "border-error-focus": getPrimitiveColour("error-50"),
    "border-error-focus-strong": getPrimitiveColour("error-70"),
    "border-error-strong": getPrimitiveColour("error-70"),
    "border-info": getPrimitiveColour("info-50"),

    // background - dark backgrounds
    bg: getPrimitiveColour("black"),
    "bg-strong": getPrimitiveColour("neutral-10"),
    "bg-stronger": getPrimitiveColour("neutral-20"),
    "bg-strongest": getPrimitiveColour("neutral-20"),

    "bg-hover": getPrimitiveColour("primary-20"),
    "bg-hover-strong": getPrimitiveColour("primary-20"),
    "bg-hover-subtle": getPrimitiveColour("primary-10"),
    "bg-hover-neutral": getPrimitiveColour("neutral-10"),
    "bg-hover-neutral-strong": getPrimitiveColour("neutral-20"),

    "bg-selected": getPrimitiveColour("primary-20"),
    "bg-selected-hover": getPrimitiveColour("primary-20"),
    "bg-selected-strong": getPrimitiveColour("primary-20"),
    "bg-selected-stronger": getPrimitiveColour("primary-40"),
    "bg-selected-strongest": getPrimitiveColour("primary-60"),
    "bg-selected-strongest-hover": getPrimitiveColour("primary-70"),

    "bg-disabled": getPrimitiveColour("neutral-20"),
    "bg-selected-disabled": getPrimitiveColour("neutral-20"),
    "bg-selected-stronger-disabled": getPrimitiveColour("neutral-40"),

    "bg-success": getPrimitiveColour("success-10"),
    "bg-success-hover": getPrimitiveColour("success-20"),
    "bg-success-strong": getPrimitiveColour("success-60"),
    "bg-success-strong-hover": getPrimitiveColour("success-70"),
    "bg-warning": getPrimitiveColour("warning-10"),
    "bg-warning-hover": getPrimitiveColour("warning-20"),
    "bg-warning-strong": getPrimitiveColour("warning-60"),
    "bg-warning-strong-hover": getPrimitiveColour("warning-70"),
    "bg-info": getPrimitiveColour("info-10"),
    "bg-info-hover": getPrimitiveColour("info-20"),
    "bg-info-strong": getPrimitiveColour("info-60"),
    "bg-info-strong-hover": getPrimitiveColour("info-70"),
    "bg-error": getPrimitiveColour("error-10"),
    "bg-error-hover": getPrimitiveColour("error-20"),
    "bg-error-strong": getPrimitiveColour("error-60"),
    "bg-error-strong-hover": getPrimitiveColour("error-70"),

    "bg-inverse": getPrimitiveColour("neutral-90"),
    "bg-inverse-subtle": getPrimitiveColour("neutral-80"),
    "bg-inverse-subtler": getPrimitiveColour("neutral-60"),
    "bg-inverse-subtlest": getPrimitiveColour("neutral-50"),
    "bg-inverse-hover": getPrimitiveColour("neutral-70"),

    "bg-primary": getPrimitiveColour("primary-60"),
    "bg-primary-subtle": getPrimitiveColour("primary-50"),
    "bg-primary-subtler": getPrimitiveColour("primary-20"),
    "bg-primary-subtlest": getPrimitiveColour("primary-10"),
    "bg-available": "#185339", // Darker green for dark mode

    "bg-primary-hover": getPrimitiveColour("primary-70"),
    "bg-primary-subtlest-hover": getPrimitiveColour("primary-20"),
    "bg-primary-subtlest-selected": getPrimitiveColour("primary-20"),

    // overlay - lighter overlays for dark backgrounds
    "overlay-strong": "rgba(78, 78, 78, 0.80)",
    "overlay-subtle": "rgba(78, 78, 78, 0.50)",

    // hyperlink - adjusted for dark mode
    hyperlink: getPrimitiveColour("primary-60"),
    "hyperlink-hover": getPrimitiveColour("primary-70"),
    "hyperlink-visited": getPrimitiveColour("primary-70"),
    "hyperlink-inverse": getPrimitiveColour("primary-inverse"),

    // focus ring - adjusted for dark mode
    "focus-ring": getPrimitiveColour("primary-60"),
    "focus-ring-inverse": getPrimitiveColour("black"),
};
