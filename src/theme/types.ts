import { Tokens } from "./tokens";
import { Border } from "./tokens/border";
import { Breakpoint } from "./tokens/breakpoint";
import { Colour, PrimitiveColours } from "./tokens/colour";
import { Component } from "./tokens/component";
import { FontSpec } from "./tokens/font";
import { Motion } from "./tokens/motion";
import { Radius } from "./tokens/radius";
import { Shadow } from "./tokens/shadow";
import { Spacing } from "./tokens/spacing";

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
type StringValueOf<T> = Extract<T[keyof T], string>;

export type BreakpointCSSVariableString = ValueOf<typeof Breakpoint>;
export type BorderCSSVariableString = ValueOf<typeof Border>;
export type FontSpecCSSVariableString = ValueOf<typeof FontSpec>;
export type MotionCSSVariableString = ValueOf<typeof Motion>;
export type PrimitiveColourCSSVariableString = ValueOf<typeof PrimitiveColours>;
export type RadiusCSSVariableString = ValueOf<typeof Radius>;
export type ColourCSSVariableString =
    | PrimitiveColourCSSVariableString
    | StringValueOf<typeof Colour>;
export type ShadowCSSVariableString = ValueOf<typeof Shadow>;
export type SpacingCSSVariableString = ValueOf<typeof Spacing>;
export type ComponentCSSVariableString = ValueOf<typeof Component>;

export type CSSVariableString = ValueOf<typeof Tokens>;
