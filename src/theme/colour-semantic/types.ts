import { ColourScheme, SemanticColourSet } from "../types";

export type SemanticColourCollectionMap = {
    [key in ColourScheme]: SemanticColourSet;
};

export type SemanticColourSetOptions = Partial<SemanticColourSet>;
