import { css } from "@linaria/core";

import { Colour, Motion } from "../theme";

export const classes = {
    iconDisabled: "radioButtonIconDisabled",
} as const;

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &[data-display-size="small"] {
        height: 1.5rem;
        width: 1.5rem;
    }

    &[data-display-size="default"] {
        height: 2rem;
        width: 2rem;
    }
`;

export const uncheckedIcon = css`
    height: 100%;
    width: 100%;
    color: ${Colour["icon-subtle"]};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    &.${classes.iconDisabled} {
        color: ${Colour["icon-disabled-subtle"]};
    }
`;

export const checkedIcon = css`
    height: 100%;
    width: 100%;
    color: ${Colour["icon-selected"]};

    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    &.${classes.iconDisabled} {
        color: ${Colour["icon-selected-disabled"]};
    }
`;

export const input = css`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: not-allowed;
    z-index: 1;

    appearance: none;
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
