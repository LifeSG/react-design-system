import { StyledComponentProps } from "../helpers";
import { SemanticColourSet } from "../types";
export declare const getSemanticColour: (key: keyof SemanticColourSet) => (props: StyledComponentProps) => string;
export declare const ColourSemantic: {
    [key in keyof SemanticColourSet]: (props: StyledComponentProps) => string;
};
