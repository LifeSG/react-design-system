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

export const THEME_TYPES = [
    "a11y-playground",
    "bookingsg",
    "ccube",
    "imda",
    "lifesg",
    "mylegacy",
    "oneservice",
    "pa",
    "rbs",
    "sgw-digital-lobby",
    "spf",
    "supportgowhere",
] as const;

export type ThemeType = (typeof THEME_TYPES)[number];
export type ThemeMode = "light" | "dark" | "auto";

export type ResolvedThemeMode = "light" | "dark";

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

export type FontWeight = "light" | "regular" | "semibold" | "bold";

export type BreakpointCSSVariableString = ValueOf<typeof Breakpoint>;
export type BorderCSSVariableString = ValueOf<typeof Border>;
export type ComponentTokenCSSVariableString =
    | ValueOf<typeof ComponentToken.Animation>
    | ValueOf<typeof ComponentToken.Button>
    | ValueOf<typeof ComponentToken.Footer>
    | ValueOf<typeof ComponentToken.Navbar>;
export type FontSpecCSSVariableString = ValueOf<typeof FontSpec>;
export type MotionCSSVariableString = ValueOf<typeof Motion>;
export type PrimitiveColourCSSVariableString = ValueOf<typeof PrimitiveColours>;
export type RadiusCSSVariableString = ValueOf<typeof Radius>;
export type SemanticColourCSSVariableString = ValueOf<typeof SemanticColours>;
export type ColourCSSVariableString =
    | PrimitiveColourCSSVariableString
    | SemanticColourCSSVariableString;
export type ShadowCSSVariableString = ValueOf<typeof Shadow>;
export type SpacingCSSVariableString = ValueOf<typeof Spacing>;

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

type ExtractCleanCSSVariableName<T extends string> =
    T extends `var(${infer Name})` ? Name : never;
export type CSSVariableKey = ExtractCleanCSSVariableName<CSSVariableString>;
