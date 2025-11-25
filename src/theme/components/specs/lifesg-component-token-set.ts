import { Colour } from "src/theme";
import { ColourSemantic } from "../../colour-semantic/theme-helper";
import { RadiusValues } from "../../radius/theme-helper";
import { ComponentTokenSet } from "../types";

export const LifeSGComponentTokenSet: ComponentTokenSet = {
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
        "loading-dots-spinner-colour": Colour.Primitive["brand-50"],
    },
    Navbar: {
        "navbar-full-height": "6rem",
        "navbar-full-logo-height": "2rem",
        "navbar-compressed-height": "4rem",
        "navbar-compressed-logo-height": "1.5rem",
        "navbar-mobile-height": "3.5rem",
        "navbar-mobile-logo-height": "1.5rem",
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
    },
};
