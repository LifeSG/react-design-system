import { css } from "@linaria/core";

import { Colour, Spacing } from "../../theme";

export const main = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${Spacing["spacing-24"]};
    cursor: pointer;
    background-color: transparent;
    border: none;

    img {
        width: 1rem;
        height: 1rem;
    }

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`;

export const outlineNone = css`
    &:active,
    &:focus {
        outline: none;
    }
`;

export const highlight = css`
    &:active,
    &:focus {
        background-color: ${Colour["bg-hover-neutral"]};
    }
`;
