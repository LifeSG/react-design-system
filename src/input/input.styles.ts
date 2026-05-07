import { css } from "@linaria/core";

import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const inputElement = css`
    width: 100%;
    height: calc(3rem - 2px); /* exclude top and bottom borders */
`;

export const inputElementDisabled = css`
    color: ${Colour["text-subtler"]};

    &:hover {
        cursor: not-allowed;
    }
`;

export const inputElementPaddingLeft = css`
    padding-left: ${Spacing["spacing-16"]};
`;

export const inputElementPaddingRight = css`
    padding-right: ${Spacing["spacing-16"]};
`;

export const clearButton = css`
    height: auto;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    color: ${Colour.icon};
    cursor: pointer;
`;

export const clearButtonNoBorder = css`
    margin-right: calc(${Spacing["spacing-12"]} * -1);
`;

export const clearIcon = css`
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
`;

export const noBorderWrapper = css`
    display: flex;
    width: 100%;
`;

export const defaultWrapper = css`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const defaultWrapperReadOnly = css`
    padding: 0;
    background: transparent !important;
    border-color: transparent;

    &:focus-within {
        outline-color: ${Colour["border-focus"]};
    }
`;

export const defaultWrapperDisabled = css`
    cursor: not-allowed;
    background: ${Colour["bg-disabled"]};

    &:focus-within {
        outline-color: ${Colour["border-disabled"]};
    }
`;

export const defaultWrapperError = css`
    border-color: ${Colour["border-error"]};

    &:focus-within {
        outline-color: ${Colour["border-error-focus"]};
    }
`;
