import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";

import { ThemeSpec } from "./types";

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};

export const LifeSGTheme: ThemeSpec = {
    colourScheme: "lifesg",
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
};

export const CcubeTheme: ThemeSpec = {
    colourScheme: "ccube",
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
};
