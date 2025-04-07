import { css } from "styled-components";

export const lineClampCss = (lines: number) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
