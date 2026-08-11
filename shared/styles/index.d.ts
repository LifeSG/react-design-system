/**
 * Generates CSS for limiting text to a specified number of lines after which it
 * is truncated with an ellipsis.
 */
export declare const lineClampCss: (lines: number) => string;
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
export declare const lineClampDynamicCss: (variableName: string) => string;
