import { css } from "@linaria/core";

import { Colour } from "../../tokens";

export const root = css`
    display: inline-flex;
`;

export const section = css`
    display: flex;
    align-items: center;
    cursor: text;
    flex: 1;
    position: relative;
`;

export const container = css`
    display: flex;
    align-items: center;
`;

export const input = css`
    border: none;
    outline: none;
    background: transparent;
    font-family: inherit;
    font-size: 14px;
    color: ${Colour["text"]};
    text-align: center;
    padding: 0;

    &::placeholder {
        color: ${Colour["text-disabled"]};
    }
`;

export const inputDay = css`
    width: 24px;
`;

export const inputMonth = css`
    width: 24px;
`;

export const inputYear = css`
    width: 40px;
`;

export const divider = css`
    color: ${Colour["text-disabled"]};
    font-size: 14px;
    margin: 0 1px;
    user-select: none;
`;

export const dividerActive = css`
    color: ${Colour["text"]};
`;
