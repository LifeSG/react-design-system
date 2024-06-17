import styled, { css } from "styled-components";
import { Color } from "../../color";
import { DesignToken } from "../../design-token";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
export interface InputWrapperStyleProps {
    $focused?: boolean | undefined;
    $disabled?: boolean | undefined;
    $error?: boolean | undefined;
    $readOnly?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const InputFieldBox = styled.div<InputWrapperStyleProps>`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${(props) =>
        props.$focused &&
        css`
            border: 1px solid ${Color.Accent.Light[1]};
            box-shadow: ${DesignToken.InputBoxShadow};
        `}

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 1px solid transparent;
                background: transparent;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
                ${props.$focused &&
                css`
                    border: 1px solid transparent;
                    box-shadow: none;
                `}
            `;
        } else if (props.$disabled) {
            return css`
                background: ${Color.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Color.Neutral[5]};
                    box-shadow: none;
                }
                ${props.$focused &&
                css`
                    border: 1px solid ${Color.Neutral[5]};
                    box-shadow: none;
                `}
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
                ${props.$focused &&
                css`
                    border: 1px solid ${Color.Validation.Red.Border};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                `}
            `;
        }
    }}
`;
