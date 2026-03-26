/**
 * Generates CSS for limiting text to a specified number of lines after which it
 * is truncated with an ellipsis
 */
export const lineClampCss = (lines: number) => `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
