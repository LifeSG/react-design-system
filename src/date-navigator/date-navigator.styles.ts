import { css } from "@linaria/core";

import { Colour, Radius, Spacing } from "../theme";

export const container = css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colour["bg-strong"]};
    border-radius: ${Radius["sm"]};
`;

export const headerArrowButton = css`
    margin: ${Spacing["spacing-8"]};
`;

export const dateTextButton = css`
    color: ${Colour["text"]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;
`;

export const dateTextButtonEnableDateClick = css`
    color: ${Colour["text-primary"]};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-underline-position: under;
    }
`;
