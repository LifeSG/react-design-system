import { CSSProp } from "styled-components";
import { PrimitiveColourSetOptions } from "./colour-primitive/types";
import { SemanticColourSetOptions } from "./colour-semantic/types";
import { FontSetOptions } from "./font/types";
import { TypoSetOptions } from "./typography/types";

export type {
    PrimitiveColourSet,
    PrimitiveColourSetOptions,
} from "./colour-primitive/types";
export type {
    SemanticColourSet,
    SemanticColourSetOptions,
} from "./colour-semantic/types";

export type FontSet = {
    // Header sizes
    "header-size-xxl": string;
    "header-size-xl": string;
    "header-size-lg": string;
    "header-size-md": string;
    "header-size-sm": string;
    "header-size-xs": string;

    // Header line heights
    "header-lh-xxl": string;
    "header-lh-xl": string;
    "header-lh-lg": string;
    "header-lh-md": string;
    "header-lh-sm": string;
    "header-lh-xs": string;

    // Header letter spacing
    "header-ls-xxl": string;
    "header-ls-xl": string;
    "header-ls-lg": string;
    "header-ls-md": string;
    "header-ls-sm": string;
    "header-ls-xs": string;

    // Font weights
    "weight-light": string;
    "weight-regular": string;
    "weight-semibold": string;
    "weight-bold": string;

    // Font family
    "font-family": string;

    // Body sizes
    "body-size-baseline": string;
    "body-size-lg": string;
    "body-size-md": string;
    "body-size-sm": string;

    // Body line heights
    "body-lh-baseline": string;
    "body-lh-lg": string;
    "body-lh-md": string;
    "body-lh-sm": string;

    // Body letter spacing
    "body-ls-baseline": string;
    "body-ls-lg": string;
    "body-ls-md": string;
    "body-ls-sm": string;

    // Form label sizes
    "formlabel-size-baseline": string;
    "formlabel-size-lg": string;
};

export type TypographySet = {
    "header-xxl-light": CSSProp | string;
    "header-xxl-regular": CSSProp | string;
    "header-xxl-semibold": CSSProp | string;
    "header-xxl-bold": CSSProp | string;

    "header-xl-light": CSSProp | string;
    "header-xl-regular": CSSProp | string;
    "header-xl-semibold": CSSProp | string;
    "header-xl-bold": CSSProp | string;

    "header-lg-light": CSSProp | string;
    "header-lg-regular": CSSProp | string;
    "header-lg-semibold": CSSProp | string;
    "header-lg-bold": CSSProp | string;

    "header-md-light": CSSProp | string;
    "header-md-regular": CSSProp | string;
    "header-md-semibold": CSSProp | string;
    "header-md-bold": CSSProp | string;

    "header-sm-light": CSSProp | string;
    "header-sm-regular": CSSProp | string;
    "header-sm-semibold": CSSProp | string;
    "header-sm-bold": CSSProp | string;

    "header-xs-light": CSSProp | string;
    "header-xs-regular": CSSProp | string;
    "header-xs-semibold": CSSProp | string;
    "header-xs-bold": CSSProp | string;

    "body-baseline-light": CSSProp | string;
    "body-baseline-regular": CSSProp | string;
    "body-baseline-semibold": CSSProp | string;
    "body-baseline-bold": CSSProp | string;

    "body-lg-light": CSSProp | string;
    "body-lg-regular": CSSProp | string;
    "body-lg-semibold": CSSProp | string;
    "body-lg-bold": CSSProp | string;

    "body-md-light": CSSProp | string;
    "body-md-regular": CSSProp | string;
    "body-md-semibold": CSSProp | string;
    "body-md-bold": CSSProp | string;

    "body-sm-light": CSSProp | string;
    "body-sm-regular": CSSProp | string;
    "body-sm-semibold": CSSProp | string;
    "body-sm-bold": CSSProp | string;

    "formlabel-baseline-semibold": CSSProp | string;
    "formlabel-lg-semibold": CSSProp | string;
};

export type ColourScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube";

export type FontScheme = "lifesg" | "bookingsg" | "rbs" | "mylegacy" | "ccube";

export interface ThemeSpecOptions {
    primitiveColour?: PrimitiveColourSetOptions | undefined;
    semanticColour?: SemanticColourSetOptions | undefined;
    font?: FontSetOptions | undefined;
    typography?: TypoSetOptions | undefined;
}

export interface ThemeSpec {
    colourScheme: ColourScheme;
    fontScheme?: FontScheme;
    overrides?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
