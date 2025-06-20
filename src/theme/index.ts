import { BorderUtilValues } from "./border-util/theme-helper";
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
import { createThemeWithColourMode } from "./use-theme-mode";

export * from "./types";
export * from "./ds-theme-provider";
export * from "./use-theme-mode";

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

// =============================================================================
// THEME PRESETS
// =============================================================================

// Theme definitions
const LifeSGThemeBase: ThemeSpec = {
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

const BookingSGThemeBase: ThemeSpec = {
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

const CCubeThemeBase: ThemeSpec = {
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

const MyLegacyThemeBase: ThemeSpec = {
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

const RBSThemeBase: ThemeSpec = {
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

const OneServiceThemeBase: ThemeSpec = {
    colourScheme: "oneservice",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "oneservice",
};

const PAThemeBase: ThemeSpec = {
    colourScheme: "pa",
    fontScheme: "pa",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "pa",
    componentScheme: "pa",
};

const A11yPlaygroundThemeBase: ThemeSpec = {
    colourScheme: "a11yplayground",
    fontScheme: "a11yplayground",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "a11yplayground",
    componentScheme: "default",
};

// =============================================================================
// THEME COLLECTIONS
// =============================================================================

// Theme presets with backward compatibility and light/dark variants
export const LifeSGTheme = {
    ...LifeSGThemeBase,
    light: createThemeWithColourMode(LifeSGThemeBase, "light"),
    dark: createThemeWithColourMode(LifeSGThemeBase, "dark"),
};

export const BookingSGTheme = {
    ...BookingSGThemeBase,
    light: createThemeWithColourMode(BookingSGThemeBase, "light"),
    dark: createThemeWithColourMode(BookingSGThemeBase, "dark"),
};

export const CCubeTheme = {
    ...CCubeThemeBase,
    light: createThemeWithColourMode(CCubeThemeBase, "light"),
    dark: createThemeWithColourMode(CCubeThemeBase, "dark"),
};

export const MyLegacyTheme = {
    ...MyLegacyThemeBase,
    light: createThemeWithColourMode(MyLegacyThemeBase, "light"),
    dark: createThemeWithColourMode(MyLegacyThemeBase, "dark"),
};

export const RBSTheme = {
    ...RBSThemeBase,
    light: createThemeWithColourMode(RBSThemeBase, "light"),
    dark: createThemeWithColourMode(RBSThemeBase, "dark"),
};

export const OneServiceTheme = {
    ...OneServiceThemeBase,
    light: createThemeWithColourMode(OneServiceThemeBase, "light"),
    dark: createThemeWithColourMode(OneServiceThemeBase, "dark"),
};

export const PATheme = {
    ...PAThemeBase,
    light: createThemeWithColourMode(PAThemeBase, "light"),
    dark: createThemeWithColourMode(PAThemeBase, "dark"),
};

export const A11yPlaygroundTheme = {
    ...A11yPlaygroundThemeBase,
    light: createThemeWithColourMode(A11yPlaygroundThemeBase, "light"),
    dark: createThemeWithColourMode(A11yPlaygroundThemeBase, "dark"),
};
