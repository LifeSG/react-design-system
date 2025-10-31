import { ColourSemantic } from "../../colour-semantic/theme-helper";
import { RadiusValues } from "../../radius/theme-helper";
import { ComponentTokenSet } from "../types";

export const DefaultComponentTokenSet: ComponentTokenSet = {
    Button: {
        "button-radius": RadiusValues.sm,
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
        "navbar-full-logo-height": 32,
        "navbar-compressed-height": 64,
        "navbar-compressed-logo-height": 24,
        "navbar-mobile-height": 56,
        "navbar-mobile-logo-height": 24,
        "navbar-colour-bg": ColourSemantic["bg"],
        "navbar-colour-icon": ColourSemantic["icon"],
        "navbar-link-colour-text": ColourSemantic["text"],
        "navbar-link-colour-text-hover": ColourSemantic["text-hover"],
        "navbar-link-colour-text-selected-hover":
            ColourSemantic["text-selected-hover"],
    },
    Footer: {
        "footer-colour-bg": ColourSemantic["bg-strong"],
        "footer-colour-text": ColourSemantic["text"],
        "footer-link-colour-text": ColourSemantic["text"],
        "footer-link-colour-text-hover": ColourSemantic["text-hover"],
        "footer-disclaimer-link-colour-text": ColourSemantic["text"],
        "footer-disclaimer-link-colour-text-hover":
            ColourSemantic["text-subtler"],
        "footer-disclaimer-link-colour-icon": ColourSemantic["icon"],
        "footer-disclaimer-link-colour-icon-hover":
            ColourSemantic["icon-subtle"],
    },
};
