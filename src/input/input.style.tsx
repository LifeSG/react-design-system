import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import { TextStyleHelper } from "../text/helper";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
export interface InputStyleProps {
    type?: React.HTMLInputTypeAttribute;
}

// =============================================================================
// STYLING
// =============================================================================
export const InputElement = styled.input<InputStyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${v2_Color.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${v2_Color.Neutral[3]};
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

        if (props.disabled) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}
`;

export const ClearContainer = styled.button<InputStyleProps>`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${v2_Color.Neutral[3]};
    background-color: transparent;
    border: none;
`;

export const ClearIcon = styled(CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;

export const BasicWrapper = styled.div`
    display: flex;
    width: 100%;
`;
