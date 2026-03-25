import type { V3_ThemeCollectionSpec } from "./internal-types";
import type { V3_ThemeSpec } from "./types";
export interface V3_StyledComponentProps {
    theme?: V3_ThemeSpec;
}
export declare const getValue: <C, T, K extends keyof C | keyof T>(collection: C, key: K, customCollection?: T) => NonNullable<T[K & keyof T] | C[K & keyof C]>;
export declare const getCollection: <T, V, C>(collectionSpec: V3_ThemeCollectionSpec<T, V>, contextValue?: string) => C;
