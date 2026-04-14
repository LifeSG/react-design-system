import { V3_BorderValues } from "./border/theme-helper";
import { V3_BorderUtilValues } from "./border-util/theme-helper";
import { V3_MediaQuery as V3_MediaQueryValues } from "./breakpoint/media-query-helper";
import { V3_BreakpointValues } from "./breakpoint/theme-helper";
import { V3_PrimitiveColour } from "./colour-primitive/theme-helper";
import { V3_ColourSemantic } from "./colour-semantic/theme-helper";
import { V3_FontValues } from "./font/theme-helper";
import { V3_FontSpecValues } from "./font-spec/theme-helper";
import { V3_MotionValues } from "./motion/theme-helper";
import { V3_RadiusValues } from "./radius/theme-helper";
import { V3_ShadowValues } from "./shadow/theme-helper";
import { V3_SpacingValues } from "./spacing/theme-helper";
import type { V3_ThemeSpec } from "./types";
import { createThemeWithColourMode } from "./use-theme-mode";

export * from "./ds-theme-provider";
export * from "./types";
export * from "./use-theme-mode";

// =============================================================================
// TOKENS
// =============================================================================

export const V3_Colour = {
    ...V3_ColourSemantic,
    Primitive: V3_PrimitiveColour,
};

export const V3_Font = {
    ...V3_FontValues,
    Spec: V3_FontSpecValues,
};

export const V3_Motion = V3_MotionValues;

export const V3_Border = {
    ...V3_BorderValues,
    Util: V3_BorderUtilValues,
};

export const V3_Spacing = V3_SpacingValues;

export const V3_Radius = V3_RadiusValues;

export const V3_Shadow = V3_ShadowValues;

export const V3_Breakpoint = V3_BreakpointValues;

export const V3_MediaQuery = V3_MediaQueryValues;

// =============================================================================
// THEME PRESETS
// =============================================================================

// Theme definitions
const V3_LifeSGThemeBase: V3_ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "lifesg",
    componentScheme: "lifesg",
    _v2: {
        colorScheme: "base",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "base",
    },
};

const V3_BookingSGThemeBase: V3_ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "bookingsg",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "bookingsg",
    _v2: {
        colorScheme: "bookingsg",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "bookingsg",
    },
};

const V3_CCubeThemeBase: V3_ThemeSpec = {
    colourScheme: "ccube",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "ccube",
    _v2: {
        colorScheme: "ccube",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "ccube",
    },
};

const V3_MyLegacyThemeBase: V3_ThemeSpec = {
    colourScheme: "mylegacy",
    fontScheme: "mylegacy",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "mylegacy",
    _v2: {
        colorScheme: "mylegacy",
        textStyleScheme: "base",
        designTokenScheme: "base",
        resourceScheme: "mylegacy",
    },
};

const V3_RBSThemeBase: V3_ThemeSpec = {
    colourScheme: "rbs",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "rbs",
    _v2: {
        colorScheme: "rbs",
        textStyleScheme: "base",
        designTokenScheme: "rbs",
        resourceScheme: "rbs",
    },
};

const V3_OneServiceThemeBase: V3_ThemeSpec = {
    colourScheme: "oneservice",
    fontScheme: "oneservice",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "oneservice",
};

const V3_PAThemeBase: V3_ThemeSpec = {
    colourScheme: "pa",
    fontScheme: "pa",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "pa",
    componentScheme: "pa",
};

const V3_A11yPlaygroundThemeBase: V3_ThemeSpec = {
    colourScheme: "a11yplayground",
    fontScheme: "a11yplayground",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "a11yplayground",
    componentScheme: "a11yplayground",
};

export const V3_SupportGoWhereThemeBase: V3_ThemeSpec = {
    colourScheme: "supportgowhere",
    fontScheme: "supportgowhere",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "supportgowhere",
    componentScheme: "default",
};

export const V3_SGWDigitalLobbyThemeBase: V3_ThemeSpec = {
    colourScheme: "sgwdigitallobby",
    fontScheme: "sgwdigitallobby",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "supportgowhere",
    componentScheme: "default",
};

const V3_IMDAThemeBase: V3_ThemeSpec = {
    colourScheme: "imda",
    fontScheme: "imda",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "imda",
    componentScheme: "default",
};

const V3_SPFThemeBase: V3_ThemeSpec = {
    colourScheme: "spf",
    fontScheme: "spf",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "spf",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "spf",
    componentScheme: "spf",
};

const V3_SMGSThemeBase: V3_ThemeSpec = {
    colourScheme: "smgs",
    fontScheme: "smgs",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    shadowScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "smgs",
    componentScheme: "smgs",
};

// =============================================================================
// THEME COLLECTIONS
// =============================================================================

// Theme presets with backward compatibility and light/dark variants
export const V3_LifeSGTheme = {
    ...V3_LifeSGThemeBase,
    light: createThemeWithColourMode(V3_LifeSGThemeBase, "light"),
    dark: createThemeWithColourMode(V3_LifeSGThemeBase, "dark"),
};

export const V3_BookingSGTheme = {
    ...V3_BookingSGThemeBase,
    light: createThemeWithColourMode(V3_BookingSGThemeBase, "light"),
    dark: createThemeWithColourMode(V3_BookingSGThemeBase, "dark"),
};

export const V3_CCubeTheme = {
    ...V3_CCubeThemeBase,
    light: createThemeWithColourMode(V3_CCubeThemeBase, "light"),
    dark: createThemeWithColourMode(V3_CCubeThemeBase, "dark"),
};

export const V3_MyLegacyTheme = {
    ...V3_MyLegacyThemeBase,
    light: createThemeWithColourMode(V3_MyLegacyThemeBase, "light"),
    dark: createThemeWithColourMode(V3_MyLegacyThemeBase, "dark"),
};

export const V3_RBSTheme = {
    ...V3_RBSThemeBase,
    light: createThemeWithColourMode(V3_RBSThemeBase, "light"),
    dark: createThemeWithColourMode(V3_RBSThemeBase, "dark"),
};

export const V3_OneServiceTheme = {
    ...V3_OneServiceThemeBase,
    light: createThemeWithColourMode(V3_OneServiceThemeBase, "light"),
    dark: createThemeWithColourMode(V3_OneServiceThemeBase, "dark"),
};

export const V3_PATheme = {
    ...V3_PAThemeBase,
    light: createThemeWithColourMode(V3_PAThemeBase, "light"),
    dark: createThemeWithColourMode(V3_PAThemeBase, "dark"),
};

export const V3_A11yPlaygroundTheme = {
    ...V3_A11yPlaygroundThemeBase,
    light: createThemeWithColourMode(V3_A11yPlaygroundThemeBase, "light"),
    dark: createThemeWithColourMode(V3_A11yPlaygroundThemeBase, "dark"),
};

export const V3_SupportGoWhereTheme = {
    ...V3_SupportGoWhereThemeBase,
    light: createThemeWithColourMode(V3_SupportGoWhereThemeBase, "light"),
    dark: createThemeWithColourMode(V3_SupportGoWhereThemeBase, "dark"),
};

export const V3_SGWDigitalLobbyTheme = {
    ...V3_SGWDigitalLobbyThemeBase,
    light: createThemeWithColourMode(V3_SGWDigitalLobbyThemeBase, "light"),
    dark: createThemeWithColourMode(V3_SGWDigitalLobbyThemeBase, "dark"),
};

export const V3_IMDATheme = {
    ...V3_IMDAThemeBase,
    light: createThemeWithColourMode(V3_IMDAThemeBase, "light"),
    dark: createThemeWithColourMode(V3_IMDAThemeBase, "dark"),
};

export const V3_SPFTheme = {
    ...V3_SPFThemeBase,
    light: createThemeWithColourMode(V3_SPFThemeBase, "light"),
    dark: createThemeWithColourMode(V3_SPFThemeBase, "dark"),
};

export const V3_SMGSTheme = {
    ...V3_SMGSThemeBase,
    light: createThemeWithColourMode(V3_SMGSThemeBase, "light"),
    dark: createThemeWithColourMode(V3_SMGSThemeBase, "dark"),
};
