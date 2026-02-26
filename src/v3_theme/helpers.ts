import get from "lodash/get";
import { V3_ThemeCollectionSpec } from "./internal-types";
import { V3_ThemeSpec } from "./types";

export interface V3_StyledComponentProps {
    theme?: V3_ThemeSpec;
}

export const getValue = <C, T, K extends keyof C | keyof T>(
    collection: C,
    key: K,
    customCollection?: T
): NonNullable<T[K & keyof T] | C[K & keyof C]> => {
    return get(customCollection, key) || get(collection, key);
};

export const getCollection = <T, V, C>(
    collectionSpec: V3_ThemeCollectionSpec<T, V>,
    contextValue?: string
): C => {
    const themeContextValue = contextValue || collectionSpec.defaultValue;
    return get(collectionSpec.collections, themeContextValue as string);
};
