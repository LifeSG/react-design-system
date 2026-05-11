import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../../theme";

export const inputSection = css`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
`;

export const baseInput = css`
    ${Font["body-baseline-regular"]}
    position: absolute;
    inset: 0;
    display: block;
    padding: 0;
    margin: 0;
    color: ${Colour["text"]};
    text-align: center;
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
        -webkit-appearance: none;
    }

    /* Safari (remove top shadow) */
    --webkit-appearance: none;

    /* Firefox */
    --moz-appearance: textfield;
`;

export const baseInputHover = css`
    color: ${Colour["text-subtler"]};
`;

export const divider = css`
    ${Font["body-baseline-regular"]}
`;

export const dividerInactive = css`
    color: ${Colour["text"]};
`;

export const dividerHover = css`
    color: ${Colour["text-subtler"]};
`;

export const inputContainer = css`
    display: flex;
    gap: ${Spacing["spacing-4"]};
    align-items: center;
`;

export const inputSizerBase = css`
    position: relative;
    display: inline-block;

    &::after {
        ${Font["body-baseline-regular"]}
        visibility: hidden;
        white-space: pre;
        pointer-events: none;
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
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${Colour["text-subtler"]};
    background-color: ${Colour["bg"]};
`;

export const placeholderDisabled = css`
    cursor: not-allowed;
    background-color: ${Colour["bg-disabled"]};
`;

export const placeholderHide = css`
    display: none;
`;
