import { ColourSemantic } from "../../colour-semantic/theme-helper";
import { RadiusValues } from "../../radius/theme-helper";
import { ComponentTokenSet } from "../types";

export const PAComponentTokenSet: ComponentTokenSet = {
    Button: {
        "button-radius": RadiusValues.full,
        "button-default-colour-bg": ColourSemantic["bg-primary"],
        "button-default-colour-bg-hover": ColourSemantic["bg-primary-hover"],
        "button-default-colour-text": ColourSemantic["text-inverse"],
        "button-secondary-colour-border": ColourSemantic["border-primary"],
        "button-secondary-colour-text": ColourSemantic["text-primary"],
        "button-light-colour-text": ColourSemantic["text-primary"],
        "button-link-colour-text": ColourSemantic["text-primary"],
    },
};
