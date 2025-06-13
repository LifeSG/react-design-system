import { StyledComponentProps } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { ColourScheme, SemanticColourSet } from "../types";
import { SemanticColourCollectionMap } from "./types";
export declare const ColourSpec: ThemeCollectionSpec<SemanticColourCollectionMap, ColourScheme>;
export declare const getSemanticColour: (key: keyof SemanticColourSet) => (props: StyledComponentProps) => string;
export declare const ColourSemantic: {
    [key in keyof SemanticColourSet]: (props: StyledComponentProps) => string;
};
