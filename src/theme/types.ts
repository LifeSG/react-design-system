import { PrimitiveColourSetOptions } from "./colour-primitive/types";
import { SemanticColourSetOptions } from "./colour-semantic/types";
import { TypographySetOptions } from "./typography/types";
import { FontSetOptions } from "./font/types";
import { MotionSetOptions } from "./motion/types";
import { BorderSetOptions } from "./border/types";
import { SpacingSetOptions } from "./spacing/types";
import { RadiusSetOptions } from "./radius/types";
import { BreakpointSetOptions } from "./breakpoint/types";

export type {
    PrimitiveColourSet,
    PrimitiveColourSetOptions,
} from "./colour-primitive/types";
export type {
    SemanticColourSet,
    SemanticColourSetOptions,
} from "./colour-semantic/types";

export type { FontSet, FontSetOptions } from "./font/types";

export type { TypographySet, TypographySetOptions } from "./typography/types";

export type { MotionSet, MotionSetOptions } from "./motion/types";

export type { BorderSet, BorderSetOptions } from "./border/types";

export type { RadiusSet, RadiusSetOptions } from "./radius/types";

export type { SpacingSet, SpacingSetOptions } from "./spacing/types";

export type { BreakpointSet, BreakpointSetOptions } from "./breakpoint/types";

export type ColourScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube";

export type FontScheme = "lifesg" | "bookingsg" | "rbs" | "mylegacy" | "ccube";
export type MotionScheme = "lifesg";
export type BorderScheme = "lifesg";
export type SpacingScheme = "lifesg";
export type RadiusScheme = "lifesg";
export type BreakpointScheme = "lifesg";

export interface ThemeSpecOptions {
    primitiveColour?: PrimitiveColourSetOptions | undefined;
    semanticColour?: SemanticColourSetOptions | undefined;
    font?: FontSetOptions | undefined;
    motion?: MotionSetOptions | undefined;
    spacing?: SpacingSetOptions | undefined;
    border?: BorderSetOptions | undefined;
    radius?: RadiusSetOptions | undefined;
    breakpoint?: BreakpointSetOptions | undefined;
    typography?: TypographySetOptions | undefined;
}

export interface ThemeSpec {
    colourScheme: ColourScheme;
    fontScheme: FontScheme;
    motionScheme: MotionScheme;
    borderScheme: BorderScheme;
    spacingScheme: SpacingScheme;
    radiusScheme: RadiusScheme;
    breakpointScheme: BreakpointScheme;
    overrides?: ThemeSpecOptions | undefined;

    maxColumns?: any;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
