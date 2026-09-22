import { Colour, Radius } from "../../theme/tokens";

/**
 * Generates CSS for a styled scrollbar. Pass "vertical" for panels that scroll
 * vertically and "horizontal" for containers that scroll horizontally.
 */
export const scrollbarCss = (axis: "vertical" | "horizontal") => `
    &::-webkit-scrollbar {
        ${axis === "vertical" ? "width" : "height"}: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }
`;

/**
 * Generates CSS for limiting text to a specified number of lines after which it
 * is truncated with an ellipsis.
 */
export const lineClampCss = (lines: number) => `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

/**
 * Generates CSS for limiting text to a number of lines (specified via a CSS
 * variable) after which it is truncated with an ellipsis.
 *
 * @example
 * ```
 * css`
 *   ${lineClampDynamicCss("--my-variable")}
 *   --my-variable: 3;
 * `
 * ```
 */
export const lineClampDynamicCss = (variableName: string) => `
    /* reset variable to prevent leaking to child components */
    ${variableName}: initial;
    display: -webkit-box;
    -webkit-line-clamp: var(${variableName});
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
