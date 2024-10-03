import { MotionValues } from "./motion/theme-helper";
import { BorderValues } from "./border/theme-helper";
import { MediaQuery as MediaQueryValues } from "./breakpoint/media-query-helper";
import { BreakpointValues } from "./breakpoint/theme-helper";
import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";
import { FontValues } from "./font/theme-helper";
import { RadiusValues } from "./radius/theme-helper";
import { SpacingValues } from "./spacing/theme-helper";
import { ThemeSpec } from "./types";
import { TypographyValues } from "./typography/theme-helper";

// =============================================================================
// TOKENS
// =============================================================================

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};

export const Font = FontValues;

export const Typography = TypographyValues;

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
    motion: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    motion: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

export const CCubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "ccube",
    motion: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
    motion: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "rbs",
    motion: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};
