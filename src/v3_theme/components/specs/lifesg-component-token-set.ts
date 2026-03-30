import { V3_PrimitiveColour } from "../../colour-primitive/theme-helper";
import { V3_ColourSemantic } from "../../colour-semantic/theme-helper";
import { V3_RadiusValues } from "../../radius/theme-helper";
import type { V3_ComponentTokenSet } from "../types";

export const V3_LifeSGComponentTokenSet: V3_ComponentTokenSet = {
    Button: {
        "button-radius": V3_RadiusValues.sm,
        "button-default-colour-bg": V3_ColourSemantic["bg-primary"],
        "button-default-colour-bg-hover": V3_ColourSemantic["bg-primary-hover"],
        "button-default-colour-text": V3_ColourSemantic["text-inverse"],
        "button-secondary-colour-border": V3_ColourSemantic["border-primary"],
        "button-secondary-colour-text": V3_ColourSemantic["text-primary"],
        "button-light-colour-text": V3_ColourSemantic["text-primary"],
        "button-link-colour-text": V3_ColourSemantic["text-primary"],
    },
    Animation: {
        "loading-dots-spinner-colour": V3_PrimitiveColour["brand-50"],
    },
    Navbar: {
        "navbar-full-height": "6rem",
        "navbar-full-logo-height": "2rem",
        "navbar-compressed-height": "4rem",
        "navbar-compressed-logo-height": "1.5rem",
        "navbar-mobile-height": "3.5rem",
        "navbar-mobile-logo-height": "1.5rem",
        "navbar-colour-bg": V3_ColourSemantic["bg"],
        "navbar-colour-icon": V3_ColourSemantic["icon"],
        "navbar-link-colour-text": V3_ColourSemantic["text"],
        "navbar-link-colour-text-hover": V3_ColourSemantic["text-hover"],
        "navbar-link-colour-text-selected-hover":
            V3_ColourSemantic["text-selected-hover"],
    },
    Footer: {
        "footer-colour-bg": V3_ColourSemantic["bg-strong"],
        "footer-colour-text": V3_ColourSemantic["text"],
        "footer-link-colour-text": V3_ColourSemantic["text"],
        "footer-link-colour-text-hover": V3_ColourSemantic["text-hover"],
        "footer-disclaimer-link-colour-text": V3_ColourSemantic["text"],
        "footer-disclaimer-link-colour-text-hover":
            V3_ColourSemantic["text-subtler"],
    },
};
