import { StyledComponentProps } from "../helpers";
import { ColourScheme, PrimitiveColourSet, ThemeCollectionSpec } from "../types";
import { ColourCollectionsMap } from "./types";
export declare const ColourSpec: ThemeCollectionSpec<ColourCollectionsMap, ColourScheme>;
export declare const getPrimitiveColour: (key: keyof PrimitiveColourSet) => (props: StyledComponentProps) => string;
export declare const PrimitiveColour: {
    [key in keyof PrimitiveColourSet]: (props: StyledComponentProps) => string;
};
