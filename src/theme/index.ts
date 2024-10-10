import {
    V2_BaseTheme,
    V2_BookingSGTheme,
    V2_CCubeTheme,
    V2_MyLegacyTheme,
    V2_RBSTheme,
} from "../v2_theme";
import { BorderValues } from "./border/theme-helper";
import { MediaQuery as MediaQueryValues } from "./breakpoint/media-query-helper";
import { BreakpointValues } from "./breakpoint/theme-helper";
import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";
import { FontSpecValues } from "./font-spec/theme-helper";
import { FontValues } from "./font/theme-helper";
import { MotionValues } from "./motion/theme-helper";
import { RadiusValues } from "./radius/theme-helper";
import { SpacingValues } from "./spacing/theme-helper";
import { ThemeSpec } from "./types";

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
    _v2: V2_BaseTheme,
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    _v2: V2_BookingSGTheme,
};

export const CCubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "ccube",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    _v2: V2_CCubeTheme,
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    _v2: V2_MyLegacyTheme,
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "rbs",
    motionScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    _v2: V2_RBSTheme,
};
