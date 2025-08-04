export declare const VisuallyHidden: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
/**
 * Handle compatibility of `inert` across React versions.
 * 19+ provides official support as a boolean, while it is handled as string in older versions
 */
export declare const inertValue: (value: boolean | undefined) => boolean | "true" | undefined;
