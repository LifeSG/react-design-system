import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";
import { FontValues } from "./font/theme-helper";
import { ThemeSpec } from "./types";
import { TypographyValues } from "./typography/theme-helper";

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};

export const Font = FontValues;

export const Typo = TypographyValues;

export const LifeSGTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
};

export const CcubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "ccube",
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "rbs",
};
