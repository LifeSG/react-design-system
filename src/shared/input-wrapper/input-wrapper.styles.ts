import styled from "styled-components";

import { Border, Colour, Font, Radius, Spacing } from "../../theme";

/**
 * basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export const InputBox = styled.div`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    &:focus-within,
    &.inputBoxFocused {
        outline-offset: -1px;
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["border-focus"]};
    }

    &.inputBoxReadOnly {
        border-color: transparent;
        padding: 0;
        background: transparent !important;

        &:focus-within,
        &.inputBoxFocused {
            outline-color: ${Colour["border-focus"]};
        }
    }

    &.inputBoxDisabled {
        background: ${Colour["bg-disabled"]};
        cursor: not-allowed;

        &:focus-within,
        &.inputBoxFocused {
            outline-color: ${Colour["border-disabled"]};
        }
    }

    &.inputBoxError {
        border-color: ${Colour["border-error"]};

        &:focus-within,
        &.inputBoxFocused {
            outline-color: ${Colour["border-error-focus"]};
        }
    }

    &.inputBoxNoBorder {
        border-color: transparent;
        background: transparent;

        &:focus-within {
            outline: none;
        }
    }
`;

export const InputWrapper = styled(InputBox)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Spacing["spacing-16"]} 0 ${Spacing["spacing-16"]};

    &.inputWrapperReadOnly {
        padding-left: 0;
    }

    &.inputWrapperPositionRight {
        flex-direction: row-reverse;
    }
`;

/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export const BasicInput = styled.input`
    ${Font["body-baseline-regular"]}

    &.basicInputSmall {
        ${Font["body-md-regular"]}
    }

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

/**
 * standalone native button with stripped-down styles
 */
export const BasicButton = styled.button`
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
