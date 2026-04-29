import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const inputElementStyles = css`
    /* Base input styles from BasicInput */
    ${Font["body-baseline-regular"]};
    color: ${Colour["text"]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Colour["text-subtler"]};
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Safari (remove top shadow) */
    -webkit-appearance: none;

    /* Firefox */
    -moz-appearance: textfield;

    /* Component specific styles */
    width: 100%;
    height: calc(3rem - 2px); /* exclude top and bottom borders */
`;

export const inputElementDisabledStyles = css`
    color: ${Colour["text-subtler"]};

    &:hover {
        cursor: not-allowed;
    }
`;

export const inputElementPaddingLeftStyles = css`
    padding-left: ${Spacing["spacing-16"]};
`;

export const inputElementPaddingRightStyles = css`
    padding-right: ${Spacing["spacing-16"]};
`;

export const clearButtonStyles = css`
    /* Base button styles from BasicButton */
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Border["width-010"]} ${Border["solid"]}
            ${Colour["border-focus"]};
        border-radius: ${Radius["sm"]};
    }

    /* Component specific styles */
    height: auto;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    cursor: pointer;
    color: ${Colour.icon};
`;

export const clearButtonNoBorderStyles = css`
    margin-right: calc(${Spacing["spacing-12"]} * -1);
`;

export const clearIconStyles = css`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;

export const noBorderWrapperStyles = css`
    display: flex;
    width: 100%;
`;

export const defaultWrapperStyles = css`
    /* Base wrapper styles from InputBox */
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    &:focus-within {
        outline-offset: -1px;
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["border-focus"]};
    }

    /* Component layout styles */
    display: flex;
    align-items: center;
    width: 100%;
`;

export const defaultWrapperReadOnlyStyles = css`
    border-color: transparent;
    padding: 0;
    background: transparent !important;

    &:focus-within {
        outline-color: ${Colour["border-focus"]};
    }
`;

export const defaultWrapperDisabledStyles = css`
    background: ${Colour["bg-disabled"]};
    cursor: not-allowed;

    &:focus-within {
        outline-color: ${Colour["border-disabled"]};
    }
`;

export const defaultWrapperErrorStyles = css`
    border-color: ${Colour["border-error"]};

    &:focus-within {
        outline-color: ${Colour["border-error-focus"]};
    }
`;
