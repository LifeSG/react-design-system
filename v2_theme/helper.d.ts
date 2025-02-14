import { V2_ThemeCollectionSpec } from "./types";
/**
 *
 * @param collection the collection of theme-specific style attributes
 * @param attributePath (optional) the path to the value within the selected collection
 * @param attributePath (optional) the path to the value within the selected collection
 * @returns style value
 */
export declare const getValue: <C, T>(collection: C, attributePath?: string, customCollection?: T) => string | number;
/**
 * Gets the theme set based on the theme context value
 * @param collectionSpec the collections of theme-specific style attributes
 * @param contextValue (optional) the theme context value
 * @returns the selected collection
 */
export declare const getCollection: <T, V, C>(collectionSpec: V2_ThemeCollectionSpec<T, V>, contextValue?: string) => C;
