import { get } from "lodash";
import { ThemeCollectionSpec } from "./types";

export const getValue = <C, T, K extends keyof C | keyof T>(
    collection: C,
    key: K,
    customCollection?: T
): T[K & keyof T] | C[K & keyof C] | undefined => {
    return get(customCollection, key) || get(collection, key);
};

export const getCollection = <T, V, C>(
    collectionSpec: ThemeCollectionSpec<T, V>,
    contextValue?: string
): C => {
    const themeContextValue = contextValue || collectionSpec.defaultValue;
    return get(collectionSpec.collections, themeContextValue as string);
};
