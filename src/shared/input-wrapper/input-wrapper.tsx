import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";

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
}

export interface InputStyleProps {
    $variant?: "small" | "default" | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const defaultFocusCss = css`
    outline-offset: -1px;
    outline: ${Border["width-020"]} ${Border["solid"]} ${Colour["border-focus"]};
`;

const readOnlyFocusCss = css`
    outline-color: ${Colour["border-focus"]};
`;

const disabledFocusCss = css`
    outline-color: ${Colour["border-disabled"]};
`;

const errorFocusCss = css`
    outline-color: ${Colour["border-error-focus"]};
`;

/**
 * basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export const InputBox = styled.div<InputWrapperStyleProps>`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};

    :focus-within {
        ${defaultFocusCss}
    }
    ${(props) => props.$focused && defaultFocusCss}

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${readOnlyFocusCss}
                }
                ${props.$focused && readOnlyFocusCss}
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Colour["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${disabledFocusCss}
                }
                ${props.$focused && disabledFocusCss}
            `;
        } else if (props.$error) {
            return css`
                border-color: ${Colour["border-error"]};

                :focus-within {
                    ${errorFocusCss}
                }
                ${props.$focused && errorFocusCss}
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
    padding: 0 ${Spacing["spacing-16"]};
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
            ? Font["body-md-regular"]
            : Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Colour["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Colour["text-subtler"]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
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

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Border["width-010"]} ${Border["solid"]}
            ${Colour["border-focus"]};
        border-radius: ${Radius["sm"]};
    }
`;
