import { PrimitiveColourSetOptions } from "./colour-primitive/types";
import { SemanticColourSetOptions } from "./colour-semantic/types";

export type {
    PrimitiveColourSet,
    PrimitiveColourSetOptions,
} from "./colour-primitive/types";
export type {
    SemanticColourSet,
    SemanticColourSetOptions,
} from "./colour-semantic/types";

export type ColourScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube";

export interface ThemeSpecOptions {
    primitiveColour?: PrimitiveColourSetOptions | undefined;
    semanticColour?: SemanticColourSetOptions | undefined;
}

export interface ThemeSpec {
    colourScheme: ColourScheme;
    overrides?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
