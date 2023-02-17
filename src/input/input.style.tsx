import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { DesignToken } from "../design-token";
import { TextStyleHelper } from "../text/helper";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface InputStyleProps {
    error?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    type?: React.HTMLInputTypeAttribute;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<InputStyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    display: flex;
    position: relative;
    flex-direction: row;
    height: max-content;
    width: 100%;
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};
    padding: 0 1rem;

    :focus-within {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }

    ${(props) => {
        // Hiding of spinners for number type input
        if (props.type === "number") {
            return css`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `;
        }
    }}

    ${(props) => {
        if (props.readOnly) {
            return css`
                border: none;
                padding: 0;
                background: transparent !important;
                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    outline: none;
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

export const InputElement = styled.input<InputStyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
    width: 100%;

    padding: 0 0 0.1rem; // Somehow the input text appears lower

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

export const ClearContainer = styled.button<InputStyleProps>`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Color.Neutral[3]};
    background-color: transparent;
    border: none;
`;

export const ClearIcon = styled(CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
`;
