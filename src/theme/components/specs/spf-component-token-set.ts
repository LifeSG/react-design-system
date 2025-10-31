import { ColourSemantic } from "../../colour-semantic/theme-helper";
import { RadiusValues } from "../../radius/theme-helper";
import { ComponentTokenSet } from "../types";

export const SPFComponentTokenSet: ComponentTokenSet = {
    Button: {
        "button-radius": RadiusValues.md,
        "button-default-colour-bg": ColourSemantic["bg-primary"],
        "button-default-colour-bg-hover": ColourSemantic["bg-primary-hover"],
        "button-default-colour-text": ColourSemantic["text-inverse"],
        "button-secondary-colour-border": ColourSemantic["border-primary"],
        "button-secondary-colour-text": ColourSemantic["text-primary"],
        "button-light-colour-text": ColourSemantic["text-primary"],
        "button-link-colour-text": ColourSemantic["text-primary"],
    },
    Animation: {
        "loading-dots-spinner-colour": ColourSemantic["icon-primary"],
    },
    Navbar: {
        "navbar-full-height": 96,
        "navbar-full-logo-height": 48,
        "navbar-compressed-height": 80,
        "navbar-compressed-logo-height": 32,
        "navbar-mobile-height": 64,
        "navbar-mobile-logo-height": 32,
        "navbar-colour-bg": ColourSemantic["bg"],
        "navbar-colour-icon": ColourSemantic["icon"],
        "navbar-link-colour-text": ColourSemantic["text-primary-strongest"],
        "navbar-link-colour-text-hover": ColourSemantic["text-subtler"],
        "navbar-link-colour-text-selected-hover":
            ColourSemantic["text-subtler"],
    },
    Footer: {
        "footer-colour-bg": ColourSemantic["bg-inverse"],
        "footer-colour-text": ColourSemantic["text-inverse"],
        "footer-link-colour-text": ColourSemantic["text-inverse"],
        "footer-link-colour-text-hover": ColourSemantic["text-inverse"],
        "footer-disclaimer-link-colour-text": ColourSemantic["text-inverse"],
        "footer-disclaimer-link-colour-text-hover":
            ColourSemantic["text-inverse"],
        "footer-disclaimer-link-colour-icon": ColourSemantic["icon-inverse"],
        "footer-disclaimer-link-colour-icon-hover":
            ColourSemantic["icon-inverse"],
    },
};
