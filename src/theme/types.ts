import type { ValueOf } from "../util/utility-types";
import type {
    Border,
    Breakpoint,
    ComponentToken,
    FontSpec,
    Motion,
    PrimitiveColours,
    Radius,
    SemanticColours,
    Shadow,
    Spacing,
} from "./tokens";

/** All available theme names. */
export const THEME_TYPES = [
    "a11y-playground",
    "bookingsg",
    "careercompass",
    "ccube",
    "imda",
    "lifesg",
    "mylegacy",
    "oneservice",
    "pa",
    "rbs",
    "sgw-digital-lobby",
    "smgs",
    "spf",
    "supportgowhere",
] as const;

/** Union of all supported theme names. */
export type ThemeType = (typeof THEME_TYPES)[number];
/**
 * Colour mode accepted by `ThemeProvider`.
 * — `"auto"` follows OS preference.
 * - `"light"` light mode.
 * - `"dark"` dark mode.
 */
export type ThemeMode = "light" | "dark" | "auto";

/** Resolved colour mode. */
export type ResolvedThemeMode = "light" | "dark";

/** Available typography size presets. */
export type FontSize =
    | "heading-xxl"
    | "heading-xl"
    | "heading-lg"
    | "heading-md"
    | "heading-sm"
    | "heading-xs"
    | "body-baseline"
    | "body-md"
    | "body-sm"
    | "body-xs"
    | "form-label"
    | "form-description";

/** Available typography weight presets. */
export type FontWeight = "light" | "regular" | "semibold" | "bold";

/** Accepted breakpoint CSS variable strings. */
export type BreakpointCSSVariableString = ValueOf<typeof Breakpoint>;
/** Accepted border CSS variable strings. */
export type BorderCSSVariableString = ValueOf<typeof Border>;
/** Accepted component-scoped CSS variable strings. */
export type ComponentTokenCSSVariableString =
    | ValueOf<typeof ComponentToken.Animation>
    | ValueOf<typeof ComponentToken.Button>
    | ValueOf<typeof ComponentToken.Footer>
    | ValueOf<typeof ComponentToken.Navbar>;
/** Accepted font CSS variable strings. */
export type FontSpecCSSVariableString = ValueOf<typeof FontSpec>;
/** Accepted motion CSS variable strings. */
export type MotionCSSVariableString = ValueOf<typeof Motion>;
/** Accepted primitive colour CSS variable strings. */
export type PrimitiveColourCSSVariableString = ValueOf<typeof PrimitiveColours>;
/** Accepted radius CSS variable strings. */
export type RadiusCSSVariableString = ValueOf<typeof Radius>;
/** Accepted semantic colour CSS variable strings. */
export type SemanticColourCSSVariableString = ValueOf<typeof SemanticColours>;
/** Accepted colour CSS variable strings. */
export type ColourCSSVariableString =
    | PrimitiveColourCSSVariableString
    | SemanticColourCSSVariableString;
/** Accepted shadow CSS variable strings. */
export type ShadowCSSVariableString = ValueOf<typeof Shadow>;
/** Accepted spacing and layout CSS variable strings. */
export type SpacingCSSVariableString = ValueOf<typeof Spacing>;

/** Union of all design-token CSS variable string literals. */
export type CSSVariableString =
    | BreakpointCSSVariableString
    | BorderCSSVariableString
    | ColourCSSVariableString
    | ComponentTokenCSSVariableString
    | FontSpecCSSVariableString
    | MotionCSSVariableString
    | RadiusCSSVariableString
    | ShadowCSSVariableString
    | SpacingCSSVariableString;
