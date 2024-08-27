import { PrimitiveColourSetOptions } from "./colour-primitive/types";
import { SemanticColourSetOptions } from "./colour-semantic/types";
import { TypographySetOptions } from "./typography/types";
import { FontSetOptions } from "./font/types";

export type {
    PrimitiveColourSet,
    PrimitiveColourSetOptions,
} from "./colour-primitive/types";
export type {
    SemanticColourSet,
    SemanticColourSetOptions,
} from "./colour-semantic/types";

export type { FontSet, FontSetOptions } from "./font/types";

export type {
    TypographySet,
    TypographySetOptions as TypoSetOptions,
} from "./typography/types";

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
    typography?: TypographySetOptions | undefined;
}

export interface ThemeSpec {
    colourScheme: ColourScheme;
    fontScheme: FontScheme;
    overrides?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
