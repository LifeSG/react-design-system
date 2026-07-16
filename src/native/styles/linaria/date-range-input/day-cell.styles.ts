import { css } from "@linaria/core";

import { Colour } from "../../tokens";

export const root = css`
    display: inline-flex;
`;

export const cell = css`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: ${Colour["text"]};
    font-family: inherit;
    position: relative;
    transition: background-color 0.15s ease;
`;

export const otherMonth = css`
    color: ${Colour["text-disabled"]};
`;

export const today = css`
    font-weight: 700;
    color: ${Colour["text-primary"]};
`;

export const disabled = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;
    opacity: 0.5;
`;

export const selectedStart = css`
    background: ${Colour["bg-selected-strongest"]};
    color: ${Colour["text-inverse"]};
`;

export const selectedEnd = css`
    background: ${Colour["bg-selected-strongest"]};
    color: ${Colour["text-inverse"]};
`;

export const inRange = css`
    background: ${Colour["bg-selected"]};
    border-radius: 0;
`;
