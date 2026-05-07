import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../../theme";

export const inputBox = css`
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};

    &:focus-within,
    &[data-focused="true"] {
        outline: ${Border["width-020"]};
        outline-offset: -1px;
    }
`;

export const inputBoxReadOnly = css`
    padding: 0;
    background: transparent !important;
    border-color: transparent;

    &:focus-within,
    &[data-focused="true"] {
        outline-color: ${Colour["border-focus"]};
    }
`;

export const inputBoxDisabled = css`
    cursor: not-allowed;
    background: ${Colour["bg-disabled"]};

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
    background: transparent;
    border-color: transparent;

    &:focus-within,
    &[data-focused="true"] {
        outline: none;
    }
`;

export const inputWrapper = css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: max-content;
    padding: 0 ${Spacing["spacing-16"]} 0 ${Spacing["spacing-16"]};
`;

export const inputWrapperReadOnly = css`
    padding-left: 0;
`;

export const inputWrapperPositionRight = css`
    flex-direction: row-reverse;
`;

export const basicInput = css`
    ${Font["body-baseline-regular"]}
    display: block;
    padding: 0;
    margin: 0;
    color: ${Colour["text"]};
    outline: none;
    background: transparent;
    border: none;
    box-shadow: none;

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

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        margin: 0;
        appearance: none;
    }

    /* Safari (remove top shadow) */
    --webkit-appearance: none;

    /* Firefox */
    --moz-appearance: textfield;
`;

export const basicInputSmall = css`
    ${Font["body-md-regular"]}
`;

export const basicButton = css`
    outline: none;
    background: transparent;
    border: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Border["width-010"]} ${Border["solid"]} ${Colour["border-focus"]};
        border-radius: ${Radius["sm"]};
    }
`;
