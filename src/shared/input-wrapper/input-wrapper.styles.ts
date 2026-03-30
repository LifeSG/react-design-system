import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../../theme";

/**
 * basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export const inputBox = css`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    &:focus-within,
    &[data-focused="true"] {
        outline-offset: -1px;
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["border-focus"]};
    }
`;

export const inputBoxReadOnly = css`
    border-color: transparent;
    padding: 0;
    background: transparent !important;

    &:focus-within,
    &[data-focused="true"] {
        outline-color: ${Colour["border-focus"]};
    }
`;

export const inputBoxDisabled = css`
    background: ${Colour["bg-disabled"]};
    cursor: not-allowed;

    &:focus-within,
    &[data-focused="true"] {
        outline-color: ${Colour["border-disabled"]};
    }
`;

export const inputBoxError = css`
    border-color: ${Colour["border-error"]};

    &:focus-within,
    &[data-focused="true"] {
        outline-color: ${Colour["border-error-focus"]};
    }
`;

export const inputBoxNoBorder = css`
    border-color: transparent;
    background: transparent;

    &:focus-within {
        outline: none;
    }
`;

export const inputWrapper = css`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]} 0 ${Spacing["spacing-16"]};
`;

export const inputWrapperReadOnly = css`
    padding-left: 0;
`;

export const inputWrapperPositionRight = css`
    flex-direction: row-reverse;
`;

/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export const basicInput = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Colour["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Colour["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;

export const basicInputSmall = css`
    ${Font["body-md-regular"]}
`;

/**
 * standalone native button with stripped-down styles
 */
export const basicButton = css`
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
`;
