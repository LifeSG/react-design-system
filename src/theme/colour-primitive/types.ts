import { ColourScheme, PrimitiveColourSet } from "../types";

export type ColourCollectionsMap = {
    [key in ColourScheme]: PrimitiveColourSet;
};

export type PrimitiveColourSetOptions = Partial<PrimitiveColourSet>;
