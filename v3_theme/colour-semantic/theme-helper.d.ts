import type { V3_StyledComponentProps } from "../helpers";
import type { V3_ThemeCollectionSpec } from "../internal-types";
import type { V3_ColourScheme, V3_SemanticColourSet } from "../types";
import type { V3_SemanticColourCollectionMap } from "./types";
export declare const V3_ColourSpec: V3_ThemeCollectionSpec<V3_SemanticColourCollectionMap, V3_ColourScheme>;
export declare const V3_DarkColourSpec: V3_ThemeCollectionSpec<V3_SemanticColourCollectionMap, V3_ColourScheme>;
export declare const getSemanticColour: (key: keyof V3_SemanticColourSet) => (props: V3_StyledComponentProps) => string;
export declare const V3_ColourSemantic: {
    [key in keyof V3_SemanticColourSet]: (props: V3_StyledComponentProps) => string;
};
