import { ThemeCollectionSpec } from "./internal-types";
import { ThemeSpec } from "./types";
export interface StyledComponentProps {
    theme?: ThemeSpec;
}
export declare const getValue: <C, T, K extends keyof C | keyof T>(collection: C, key: K, customCollection?: T) => NonNullable<T[K & keyof T] | C[K & keyof C]>;
export declare const getCollection: <T, V, C>(collectionSpec: ThemeCollectionSpec<T, V>, contextValue?: string) => C;
