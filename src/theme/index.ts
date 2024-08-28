import { Border } from "../time-slot-bar/time-slot-bar.styles";
import { AnimationValues } from "./animation/theme-helper";
import { BorderValues } from "./border/helper";
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

export const Typography = TypographyValues;

export const Animation = AnimationValues;

export const BorderSet = BorderValues;

export const LifeSGTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    animationScheme: "lifesg",
};

export const CcubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "ccube",
    animationScheme: "lifesg",
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
    animationScheme: "lifesg",
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "rbs",
    animationScheme: "lifesg",
};
