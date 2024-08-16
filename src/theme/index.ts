import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};
