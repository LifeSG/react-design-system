import get from "lodash/get";

/**
 *
 * @param themeMap the map of collections of theme-specific style attributes
 * @param contextKey key in the theme object to retrieve the selected theme attribute
 * @param defaultContextValue a default theme attribute value
 * @param attributePath the path to the value within the selected collection
 * @returns
 */
export const getValue = (
    themeMap: any,
    contextKey: string,
    defaultContextValue: string,
    attributePath?: string
) => {
    return (props: any) => {
        const themeContextValue =
            (props.theme && props.theme[contextKey]) || defaultContextValue;
        const themeSet = themeMap[themeContextValue];

        return attributePath ? get(themeSet, attributePath) : themeSet;
    };
};
