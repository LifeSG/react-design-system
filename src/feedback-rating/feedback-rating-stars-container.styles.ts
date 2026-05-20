import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme";

export const star = css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Colour["icon-primary"]};
`;

export const label = css`
    margin: 0 ${Spacing["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${MediaQuery.MaxWidth.md} {
        margin: 0 ${Spacing["spacing-8"]};
    }
`;

export const container = css`
    display: flex;
    justify-content: center;
    margin: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    border-radius: ${Radius["sm"]};
    outline: none;
`;

export const containerIsFocused = css`
    outline: ${Border["width-020"]} ${Border["solid"]} ${Colour["icon-primary"]};
    outline-offset: 2px;
`;
