import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const inputSection = css`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`;

export const baseInput = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    text-align: center;
    position: absolute;
    inset: 0;

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

export const baseInputHover = css`
    color: ${Colour["text-subtler"]};
`;

export const divider = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
`;

export const dividerHover = css`
    color: ${Colour["text-subtler"]};
`;

export const inputContainer = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};
`;

export const inputSizerBase = css`
    display: inline-block;
    position: relative;

    &::after {
        ${Font["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`;

export const dayInputSizer = css`
    &::after {
        content: "DD";
    }
`;

export const monthInputSizer = css`
    &::after {
        content: "MM";
    }
`;

export const yearInputSizer = css`
    &::after {
        content: "YYYY";
    }
`;

export const placeholder = css`
    ${Font["body-baseline-regular"]}
    background-color: ${Colour["bg"]};
    color: ${Colour["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const placeholderDisabled = css`
    background-color: ${Colour["bg-disabled"]};
    cursor: not-allowed;
`;

export const placeholderHide = css`
    display: none;
`;
