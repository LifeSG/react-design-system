import styled, { css } from "styled-components";
import { Color } from "../../color";
import { DesignToken } from "../../design-token";
import { TextStyleHelper } from "../../text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
export interface InputWrapperStyleProps {
    $disabled?: boolean | undefined;
    $error?: boolean | undefined;
    $readOnly?: boolean | undefined;
    $position?: "left" | "right" | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const InputWrapper = styled.div<InputWrapperStyleProps>`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Color.Neutral[5]};
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

/**
 * standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export const BasicInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
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
