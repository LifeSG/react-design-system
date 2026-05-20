import { css } from "@linaria/core";

import { Colour, Radius } from "../theme";

export const styledInputWrapper = css`
    height: 3rem;
`;

export const rangeSelectorButton = css`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${Colour.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["border-focus"]};
        border-radius: ${Radius.sm};
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
