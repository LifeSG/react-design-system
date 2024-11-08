import { MotionValues } from "./motion/theme-helper";
import { BorderValues } from "./border/theme-helper";
import { MediaQuery as MediaQueryValues } from "./breakpoint/media-query-helper";
import { BreakpointValues } from "./breakpoint/theme-helper";
import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";
import { FontSpecValues } from "./font-spec/theme-helper";
import { RadiusValues } from "./radius/theme-helper";
import { SpacingValues } from "./spacing/theme-helper";
import { ThemeSpec } from "./types";
import { FontValues } from "./font/theme-helper";

// =============================================================================
// TOKENS
// =============================================================================

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};

export const FontSpec = FontSpecValues;

export const Font = FontValues;

export const Motion = MotionValues;

export const Border = BorderValues;

export const Spacing = SpacingValues;

export const Radius = RadiusValues;

export const Breakpoint = BreakpointValues;

export const MediaQuery = MediaQueryValues;

// =============================================================================
// THEME PRESETS
// =============================================================================

export const LifeSGTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    resourceScheme: "lifesg",
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    resourceScheme: "bookingsg",
};

export const CCubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "ccube",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    resourceScheme: "ccube",
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    resourceScheme: "mylegacy",
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "rbs",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    resourceScheme: "rbs",
};
