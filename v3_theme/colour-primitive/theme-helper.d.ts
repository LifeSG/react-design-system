import type { V3_StyledComponentProps } from "../helpers";
import type { V3_ThemeCollectionSpec } from "../internal-types";
import type { V3_ColourScheme, V3_PrimitiveColourSet } from "../types";
import type { V3_ColourCollectionsMap } from "./types";
export declare const V3_ColourSpec: V3_ThemeCollectionSpec<V3_ColourCollectionsMap, V3_ColourScheme>;
export declare const V3_DarkColourSpec: V3_ThemeCollectionSpec<V3_ColourCollectionsMap, V3_ColourScheme>;
export declare const getPrimitiveColour: (key: keyof V3_PrimitiveColourSet) => (props: V3_StyledComponentProps) => string;
export declare const V3_PrimitiveColour: {
    [key in keyof V3_PrimitiveColourSet]: (props: V3_StyledComponentProps) => string;
};
