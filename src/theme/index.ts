import { AnimationValues } from "./animation/theme-helper";
import { BorderValues } from "./border/theme-helper";
import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";
import { FontValues } from "./font/theme-helper";
import { RadiusSetValue } from "./radius/theme-helper";
import { SpacingSetValue } from "./spacing/theme-helper";
import { ThemeSpec } from "./types";
import { TypographyValues } from "./typography/theme-helper";

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};

export const Font = FontValues;

export const Typography = TypographyValues;

export const Animation = AnimationValues;

export const Border = BorderValues;

export const BorderSet = BorderValues;

export const Spacing = SpacingSetValue;

export const Radius = RadiusSetValue;

export const LifeSGTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
};

export const CcubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "ccube",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "rbs",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
};
