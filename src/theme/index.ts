import { BorderUtilValues } from "./border-util/theme-helper";
import { BorderValues } from "./border/theme-helper";
import { MediaQuery as MediaQueryValues } from "./breakpoint/media-query-helper";
import { BreakpointValues } from "./breakpoint/theme-helper";
import { PrimitiveColour } from "./colour-primitive/theme-helper";
import { ColourSemantic } from "./colour-semantic/theme-helper";
import { ComponentSet } from "./components/theme-helper";
import { FontSpecValues } from "./font-spec/theme-helper";
import { FontValues } from "./font/theme-helper";
import { MotionValues } from "./motion/theme-helper";
import { RadiusValues } from "./radius/theme-helper";
import { SpacingValues } from "./spacing/theme-helper";
import { ThemeSpec } from "./types";

export * from "./types";

// =============================================================================
// TOKENS
// =============================================================================

export const Colour = {
    ...ColourSemantic,
    Primitive: PrimitiveColour,
};

export const Font = {
    ...FontValues,
    Spec: FontSpecValues,
};

export const Motion = MotionValues;

export const Border = {
    ...BorderValues,
    Util: BorderUtilValues,
};

export const Spacing = SpacingValues;

export const Radius = RadiusValues;

export const Breakpoint = BreakpointValues;

export const MediaQuery = MediaQueryValues;

export const Components = ComponentSet;

// =============================================================================
// THEME PRESETS
// =============================================================================

export const LifeSGTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "lifesg",
    _v2: {
        colorScheme: "base",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "base",
    },
};

export const BookingSGTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "bookingsg",
    _v2: {
        colorScheme: "bookingsg",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "bookingsg",
    },
};

export const CCubeTheme: ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "ccube",
    _v2: {
        colorScheme: "ccube",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "ccube",
    },
};

export const MyLegacyTheme: ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "mylegacy",
    _v2: {
        colorScheme: "mylegacy",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "mylegacy",
    },
};

export const RBSTheme: ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "rbs",
    _v2: {
        colorScheme: "rbs",
        textStyleScheme: "base",
        designTokenScheme: "rbs",
        resourceScheme: "rbs",
    },
};

export const OneServiceTheme: ThemeSpec = {
    colourScheme: "oneservice",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "oneservice",
};

export const PATheme: ThemeSpec = {
    colourScheme: "pa",
    fontScheme: "pa",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "pa",
    components: "pa",
};
