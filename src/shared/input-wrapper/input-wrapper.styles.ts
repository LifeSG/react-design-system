import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
export interface InputWrapperStyleProps {
    $disabled?: boolean | undefined;
    $error?: boolean | undefined;
    $readOnly?: boolean | undefined;
    $focused?: boolean | undefined;
    $position?: "left" | "right" | undefined;
    $noBorder?: boolean | undefined;
}

export interface InputStyleProps {
    $variant?: "small" | "default" | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const defaultFocusCss = css`
    outline-offset: -1px;
    outline: ${V3_Border["width-020"]} ${V3_Border["solid"]}
        ${V3_Colour["border-focus"]};
`;

const readOnlyFocusCss = css`
    outline-color: ${V3_Colour["border-focus"]};
`;

const disabledFocusCss = css`
    outline-color: ${V3_Colour["border-disabled"]};
`;

const errorFocusCss = css`
    outline-color: ${V3_Colour["border-error-focus"]};
`;

const noFocusCss = css`
    outline: none;
`;

/**
 * basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export const InputBox = styled.div<InputWrapperStyleProps>`
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    background: ${V3_Colour["bg"]};

    &:focus-within {
        ${defaultFocusCss}
    }
    ${(props) => props.$focused && !props.$noBorder && defaultFocusCss}

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${readOnlyFocusCss}
                }
                ${props.$focused && readOnlyFocusCss}
            `;
        } else if (props.$disabled) {
            return css`
                background: ${V3_Colour["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${disabledFocusCss}
                }
                ${props.$focused && disabledFocusCss}
            `;
        } else if (props.$error) {
            return css`
                border-color: ${V3_Colour["border-error"]};

                &:focus-within {
                    ${errorFocusCss}
                }
                ${props.$focused && errorFocusCss}
            `;
        }
    }}
    ${(props) => {
        if (props.$noBorder) {
            return css`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${noFocusCss}
                }
            `;
        }
    }}
`;

export const InputWrapper = styled(InputBox)<InputWrapperStyleProps>`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${V3_Spacing["spacing-16"]} 0
        ${(props) => (props.$readOnly ? "0" : V3_Spacing["spacing-16"])};
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};
`;

/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export const BasicInput = styled.input<InputStyleProps>`
    ${(props) =>
        props.$variant === "small"
            ? V3_Font["body-md-regular"]
            : V3_Font["body-baseline-regular"]}
    color: ${V3_Colour["text"]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${V3_Colour["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${V3_Colour["text-subtler"]};
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
export const BasicButton = styled.button<InputStyleProps>`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${V3_Border["width-010"]} ${V3_Border["solid"]}
            ${V3_Colour["border-focus"]};
        border-radius: ${V3_Radius["sm"]};
    }
`;
