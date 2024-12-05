import { CrossIcon } from "@lifesg/react-icons/cross";
import styled, { css } from "styled-components";
import { Colour, Font } from "../theme";

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
    ${Font["body-baseline-regular"]}
    color: ${Colour["text-subtle"]};

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
        color: ${Colour.text};
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

    color: ${Colour.text};
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
