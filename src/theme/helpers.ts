import get from "lodash/get";
import { ThemeCollectionSpec } from "./internal-types";
import { ThemeSpec } from "./types";

export interface StyledComponentProps {
    theme: ThemeSpec;
}

export const getValue = <C, T, K extends keyof C | keyof T>(
    collection: C,
    key: K,
    customCollection?: T
): NonNullable<T[K & keyof T] | C[K & keyof C]> => {
    return get(customCollection, key) || get(collection, key);
};

export const getCollection = <T, V, C>(
    collectionSpec: ThemeCollectionSpec<T, V>,
    contextValue?: string
): C => {
    const themeContextValue = contextValue || collectionSpec.defaultValue;
    return get(collectionSpec.collections, themeContextValue as string);
};
