import { PrimitiveColor } from "./color-primitive/theme-helper";
import { ColorSemantic } from "./color-semantic/theme-helper";

export const Color = {
    ...ColorSemantic,
    Primitive: PrimitiveColor,
};
