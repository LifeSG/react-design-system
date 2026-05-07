import { css } from "@linaria/core";

import { Colour, Motion } from "../theme";

export const classes = {} as const;

export const container = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-display-size="small"] {
        width: 1.5rem;
        height: 1.5rem;
    }

    &[data-display-size="default"] {
        width: 2rem;
        height: 2rem;
    }
`;

export const icon = css`
    width: 100%;
    height: 100%;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
`;

export const uncheckedIcon = css`
    color: ${Colour["icon-subtle"]};
`;

export const uncheckedIconDisabled = css`
    color: ${Colour["icon-disabled-subtle"]};
`;

export const checkedIcon = css`
    color: ${Colour["icon-selected"]};
`;

export const checkedIconDisabled = css`
    color: ${Colour["icon-selected-disabled"]};
`;

export const input = css`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    appearance: none;
    cursor: not-allowed;
    background: transparent;
    border: none;
`;

export const inputActive = css`
    cursor: pointer;

    &:hover + svg {
        @media (pointer: fine) {
            color: ${Colour["icon-hover"]};
        }
    }
`;
