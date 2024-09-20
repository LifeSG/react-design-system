import styled, { css } from "styled-components";
import { Color } from "../../color";
import { DesignToken } from "../../design-token";
import { TextStyleHelper } from "../../text";
import { DropdownVariantType } from "../dropdown-list/types";

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
    $variant?: DropdownVariantType | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
const defaultFocusCss = css`
    border: 1px solid ${Color.Accent.Light[1]};
    box-shadow: ${DesignToken.InputBoxShadow};
`;

const readOnlyFocusCss = css`
    border: 1px solid ${Color.Accent.Light[1]};
    box-shadow: none;
`;

const disabledFocusCss = css`
    border: 1px solid ${Color.Neutral[5]};
    box-shadow: none;
`;

const errorFocusCss = css`
    border: 1px solid ${Color.Validation.Red.Border};
    box-shadow: ${DesignToken.InputErrorBoxShadow};
`;

/**
 * basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export const InputBox = styled.div<InputWrapperStyleProps>`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};

    :focus-within {
        ${defaultFocusCss}
    }
    ${(props) => props.$focused && defaultFocusCss}

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${readOnlyFocusCss}
                }
                ${props.$focused && readOnlyFocusCss}
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${disabledFocusCss}
                }
                ${props.$focused && disabledFocusCss}
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border};

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
    padding: 0 1rem;
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};
`;

/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export const BasicInput = styled.input<InputStyleProps>`
    ${(props) =>
        TextStyleHelper.getTextStyle(
            props.$variant === "small" ? "BodySmall" : "Body",
            "regular"
        )}
    color: ${Color.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
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
        outline: 2px auto ${Color.Primary};
    }
`;

/**
 * visually hide input while keeping it accessible to screen readers
 * referenced from https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
 * */
export const VisuallyHiddenInput = styled.input`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
