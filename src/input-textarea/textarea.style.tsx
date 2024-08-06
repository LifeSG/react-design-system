import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { v2_DesignToken } from "../v2_design-token";
import { V2_TextStyleHelper } from "../v2_text";
import { Transition } from "../transition";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface StyleProps {
    error?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Element = styled.textarea<StyleProps>`
    border: 1px solid ${V2_Color.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Transition.Base};

    ${V2_TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${V2_Color.Neutral[1]};
    background: ${V2_Color.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${V2_Color.Accent.Light[1]};
        box-shadow: ${v2_DesignToken.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${V2_Color.Neutral[3]};
    }

    ${(props) => {
        if (props.readOnly) {
            return css`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${V2_Color.Neutral[6](props)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${V2_Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.error) {
            return css`
                border: 1px solid ${V2_Color.Validation.Red.Border(props)};

                :focus,
                :active {
                    border: 1px solid ${V2_Color.Validation.Red.Border(props)};
                    box-shadow: ${v2_DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;
