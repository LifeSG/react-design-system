import { FontScheme, TypographySet } from "../types";

export type TypoGraphyCollectionMap = {
    [key in FontScheme]: TypographySet;
};

export type TypoSetOptions = Partial<TypographySet>;
