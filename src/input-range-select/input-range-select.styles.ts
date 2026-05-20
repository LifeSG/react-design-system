import { css } from "@linaria/core";

import { Colour, Spacing } from "../theme";

export const clearButtonContainer = css`
    position: absolute;
    display: flex;
    align-items: center;
    right: ${Spacing["spacing-16"]};
`;

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
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
