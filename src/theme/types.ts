import {
    Border,
    Breakpoint,
    Component,
    FontSpec,
    Motion,
    PrimitiveColours,
    Radius,
    SemanticColours,
    Shadow,
    Spacing,
} from "./tokens";

export type ThemeType =
    | "a11y-playground"
    | "bookingsg"
    | "ccube"
    | "default"
    | "imda"
    | "lifesg"
    | "mylegacy"
    | "oneservice"
    | "pa"
    | "rbs"
    | "sgw-digital-lobby"
    | "spf"
    | "supportgowhere";

export type ThemeMode = "light" | "dark";

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

type ValueOf<T> = T[keyof T];

export type BreakpointCSSVariableString = ValueOf<typeof Breakpoint>;
export type BorderCSSVariableString = ValueOf<typeof Border>;
export type ComponentCSSVariableString = ValueOf<typeof Component>;
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
    | ComponentCSSVariableString
    | FontSpecCSSVariableString
    | MotionCSSVariableString
    | RadiusCSSVariableString
    | ShadowCSSVariableString
    | SpacingCSSVariableString;
