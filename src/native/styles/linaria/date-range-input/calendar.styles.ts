import { css } from "@linaria/core";

import { Colour } from "../../tokens";

export const root = css`
    display: block;
`;

export const grid = css`
    padding: 8px;
`;

export const weekdayHeader = css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    margin-bottom: 4px;

    span {
        font-size: 12px;
        font-weight: 600;
        color: ${Colour["text-subtler"]};
        padding: 4px 0;
    }
`;

export const weekRow = css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
`;
