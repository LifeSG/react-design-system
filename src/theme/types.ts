import { V2_ThemeSpec } from "../v2_theme/types";
import { BorderSetOptions } from "./border/types";
import { BreakpointSetOptions } from "./breakpoint/types";
import { PrimitiveColourSetOptions } from "./colour-primitive/types";
import { SemanticColourSetOptions } from "./colour-semantic/types";
import { FontSpecSetOptions } from "./font-spec/types";
import { FontSetOptions } from "./font/types";
import { MotionSetOptions } from "./motion/types";
import { RadiusSetOptions } from "./radius/types";
import { SpacingSetOptions } from "./spacing/types";

export type {
    PrimitiveColourSet,
    PrimitiveColourSetOptions,
} from "./colour-primitive/types";
export type {
    SemanticColourSet,
    SemanticColourSetOptions,
} from "./colour-semantic/types";

export type { FontSpecSet, FontSpecSetOptions } from "./font-spec/types";

export type { FontSet, FontSetOptions } from "./font/types";

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
    | "ccube"
    | "pa";

export type FontScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube"
    | "pa";
export type MotionScheme = "lifesg";
export type BorderScheme = "lifesg";
export type SpacingScheme = "lifesg";
export type RadiusScheme = "lifesg";
export type BreakpointScheme = "lifesg";
export type ResourceScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube"
    | "pa";

export interface ThemeSpecOptions {
    primitiveColour?: PrimitiveColourSetOptions | undefined;
    semanticColour?: SemanticColourSetOptions | undefined;
    fontSpec?: FontSpecSetOptions | undefined;
    font?: FontSetOptions | undefined;
    motion?: MotionSetOptions | undefined;
    spacing?: SpacingSetOptions | undefined;
    border?: BorderSetOptions | undefined;
    radius?: RadiusSetOptions | undefined;
    resourceScheme?: ResourceScheme | undefined;
    breakpoint?: BreakpointSetOptions | undefined;
}

export interface ThemeSpec {
    colourScheme: ColourScheme;
    fontScheme: FontScheme;
    motionScheme: MotionScheme;
    borderScheme: BorderScheme;
    spacingScheme: SpacingScheme;
    radiusScheme: RadiusScheme;
    breakpointScheme: BreakpointScheme;
    resourceScheme: ResourceScheme;
    overrides?: ThemeSpecOptions | undefined;

    maxColumns?: any;
    /** @deprecated For backwards compatibility with V2 theme */
    _v2?: V2_ThemeSpec;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
