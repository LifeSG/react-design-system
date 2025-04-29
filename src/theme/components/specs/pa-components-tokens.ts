import { PrimitiveColour } from "../../colour-primitive/theme-helper";
import { RadiusValues } from "../../radius/theme-helper";
import { Components } from "../types";

export const PaComponents: Components = {
    Button: {
        "button-radius": RadiusValues.full,
        "button-default-colour-bg": PrimitiveColour["brand-20"],
        "button-default-colour-bg-hover": PrimitiveColour["brand-10"],
    },
};
