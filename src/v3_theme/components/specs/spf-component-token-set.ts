import { V3_ColourSemantic } from "../../colour-semantic/theme-helper";
import { V3_RadiusValues } from "../../radius/theme-helper";
import type { V3_ComponentTokenSet } from "../types";

export const V3_SPFComponentTokenSet: V3_ComponentTokenSet = {
    Button: {
        "button-radius": V3_RadiusValues.md,
        "button-default-colour-bg": V3_ColourSemantic["bg-primary"],
        "button-default-colour-bg-hover": V3_ColourSemantic["bg-primary-hover"],
        "button-default-colour-text": V3_ColourSemantic["text-inverse"],
        "button-secondary-colour-border": V3_ColourSemantic["border-primary"],
        "button-secondary-colour-text": V3_ColourSemantic["text-primary"],
        "button-light-colour-text": V3_ColourSemantic["text-primary"],
        "button-link-colour-text": V3_ColourSemantic["text-primary"],
    },
    Animation: {
        "loading-dots-spinner-colour": V3_ColourSemantic["icon-primary"],
    },
    Navbar: {
        "navbar-full-height": "6rem",
        "navbar-full-logo-height": "3rem",
        "navbar-compressed-height": "5rem",
        "navbar-compressed-logo-height": "2rem",
        "navbar-mobile-height": "4rem",
        "navbar-mobile-logo-height": "2rem",
        "navbar-colour-bg": V3_ColourSemantic["bg"],
        "navbar-colour-icon": V3_ColourSemantic["icon"],
        "navbar-link-colour-text": V3_ColourSemantic["text-primary-strongest"],
        "navbar-link-colour-text-hover": V3_ColourSemantic["text-subtler"],
        "navbar-link-colour-text-selected-hover":
            V3_ColourSemantic["text-subtler"],
    },
    Footer: {
        "footer-colour-bg": V3_ColourSemantic["bg-inverse"],
        "footer-colour-text": V3_ColourSemantic["text-inverse"],
        "footer-link-colour-text": V3_ColourSemantic["text-inverse"],
        "footer-link-colour-text-hover": V3_ColourSemantic["text-inverse"],
        "footer-disclaimer-link-colour-text": V3_ColourSemantic["text-inverse"],
        "footer-disclaimer-link-colour-text-hover":
            V3_ColourSemantic["text-inverse"],
    },
};
