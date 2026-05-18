import { css } from "@linaria/core";

import { Colour, Spacing } from "../theme";

export const clearIconContainer = css`
    height: auto;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    cursor: pointer;
    color: ${Colour.icon};

    /* Position styles */
    position: absolute;
    right: 0;
    padding-left: ${Spacing["spacing-8"]};
    margin-right: 0;
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
