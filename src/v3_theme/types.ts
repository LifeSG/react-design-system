import type { ReactNode } from "react";

import type { V2_ThemeSpec } from "../v2_theme/types";
import type { V3_BorderSetOptions } from "./border/types";
import type { V3_BreakpointSetOptions } from "./breakpoint/types";
import type { V3_PrimitiveColourSetOptions } from "./colour-primitive/types";
import type { V3_SemanticColourSetOptions } from "./colour-semantic/types";
import type { V3_ComponentOverrideOptions } from "./components/types";
import type { V3_FontSetOptions } from "./font/types";
import type { V3_FontSpecSetOptions } from "./font-spec/types";
import type { V3_MotionSetOptions } from "./motion/types";
import type { V3_RadiusSetOptions } from "./radius/types";
import type { V3_ShadowSetOptions } from "./shadow/types";
import type { V3_SpacingSetOptions } from "./spacing/types";

export type { V3_BorderSet, V3_BorderSetOptions } from "./border/types";
export type {
    V3_BreakpointSet,
    V3_BreakpointSetOptions,
} from "./breakpoint/types";
export type {
    V3_PrimitiveColourSet,
    V3_PrimitiveColourSetOptions,
} from "./colour-primitive/types";
export type {
    V3_SemanticColourSet,
    V3_SemanticColourSetOptions,
} from "./colour-semantic/types";
export type { V3_FontSet, V3_FontSetOptions } from "./font/types";
export type { V3_FontSpecSet, V3_FontSpecSetOptions } from "./font-spec/types";
export type { V3_MotionSet, V3_MotionSetOptions } from "./motion/types";
export type { V3_RadiusSet, V3_RadiusSetOptions } from "./radius/types";
export type { V3_ShadowSet, V3_ShadowSetOptions } from "./shadow/types";
export type { V3_SpacingSet, V3_SpacingSetOptions } from "./spacing/types";

export type V3_ColourScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube"
    | "oneservice"
    | "pa"
    | "a11yplayground"
    | "supportgowhere"
    | "sgwdigitallobby"
    | "imda"
    | "spf"
    | "smgs";
export type V3_FontScheme =
    | "default"
    | "bookingsg"
    | "mylegacy"
    | "pa"
    | "a11yplayground"
    | "supportgowhere"
    | "sgwdigitallobby"
    | "imda"
    | "spf"
    | "oneservice"
    | "smgs";
export type V3_MotionScheme = "default";
export type V3_BorderScheme = "default";
export type V3_SpacingScheme = "default";
export type V3_RadiusScheme = "default" | "spf";
export type V3_ShadowScheme = "default";
export type V3_BreakpointScheme = "default";
export type V3_ComponentScheme =
    | "default"
    | "pa"
    | "a11yplayground"
    | "lifesg"
    | "spf"
    | "smgs";
export type V3_ResourceScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube"
    | "oneservice"
    | "pa"
    | "a11yplayground"
    | "supportgowhere"
    | "imda"
    | "spf"
    | "smgs";

export type V3_ColourMode = "light" | "dark";

export interface V3_ThemeSpecOptions {
    primitiveColour?: V3_PrimitiveColourSetOptions | undefined;
    primitiveColourDark?: V3_PrimitiveColourSetOptions | undefined;
    semanticColour?: V3_SemanticColourSetOptions | undefined;
    semanticColourDark?: V3_SemanticColourSetOptions | undefined;
    fontSpec?: V3_FontSpecSetOptions | undefined;
    font?: V3_FontSetOptions | undefined;
    motion?: V3_MotionSetOptions | undefined;
    spacing?: V3_SpacingSetOptions | undefined;
    border?: V3_BorderSetOptions | undefined;
    radius?: V3_RadiusSetOptions | undefined;
    shadow?: V3_ShadowSetOptions | undefined;
    resourceScheme?: V3_ResourceScheme | undefined;
    breakpoint?: V3_BreakpointSetOptions | undefined;
}

export interface V3_ThemeSpec {
    colourScheme: V3_ColourScheme;
    colourMode?: V3_ColourMode | undefined;
    fontScheme: V3_FontScheme;
    motionScheme: V3_MotionScheme;
    borderScheme: V3_BorderScheme;
    spacingScheme: V3_SpacingScheme;
    radiusScheme: V3_RadiusScheme;
    shadowScheme: V3_ShadowScheme;
    breakpointScheme: V3_BreakpointScheme;
    resourceScheme: V3_ResourceScheme;
    componentScheme?: V3_ComponentScheme | undefined;
    componentOverrides?: V3_ComponentOverrideOptions | undefined;
    overrides?: V3_ThemeSpecOptions | undefined;

    maxColumns?: any;
    /** @deprecated For backwards compatibility with V2 theme */
    _v2?: V2_ThemeSpec;
}
export interface V3_ThemeStyleProps {
    theme?: V3_ThemeSpec;
}

export interface V3_DSThemeProviderProps {
    theme: V3_ThemeSpec;
    children: ReactNode;
}

export interface V3_DSTheme {
    colourMode: V3_ColourMode;
    theme: V3_ThemeSpec | null;
}
