import styled, { css } from "styled-components";
import { Color } from "../color";
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
    height: 100%;
    width: 100%;
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};

    :focus-within {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
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
                padding: 0.2rem 0 0.3rem;
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
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `;
        }
    }}
`;

export const InputElement = styled.input<InputStyleProps>`
    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
    width: 100%;

    ${TextStyleHelper.getTextStyle("Body", "regular")}
    padding: 0.2rem 1rem 0.3rem; // Somehow the input text appears lower

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

export const ClearContainer = styled.button<InputStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.6875rem 0 1rem;
    cursor: pointer;

    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[3]};
    background-color: transparent;
    border: none;

    /* SVG Icon */
    svg {
        height: 1.125rem;
        width: 1.125rem;
        color: ${Color.Neutral[3]};
        #path {
            fill: ${Color.Neutral[3]};
        }
    }
`;
