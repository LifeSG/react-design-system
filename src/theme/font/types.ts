import { FontScheme, FontSet } from "../types";

export type FontCollectionMap = {
    [key in FontScheme]: FontSet;
};

export type FontSetOptions = Partial<FontSet>;
