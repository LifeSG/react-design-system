import { css } from "@linaria/core";

import { Colour, Spacing } from "../../theme";

export const main = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Spacing["spacing-24"]};
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    svg {
        height: 1.125rem;
        width: 1.125rem;
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
