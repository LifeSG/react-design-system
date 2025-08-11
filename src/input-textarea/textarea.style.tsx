import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $error?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Element = styled.textarea<StyleProps>`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg"]};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    width: 100%;

    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${Border["width-020"]} ${Border["solid"]}
            ${Colour["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Colour["text-subtler"]};
    }

    ${(props) => {
        if (props.readOnly) {
            return css`
                border-color: transparent;
                background: transparent !important;

                &:focus,
                &:active {
                    outline-color: ${Colour["border-focus"]};
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${Colour["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${Colour["border-disabled"]};
                }
            `;
        } else if (props.$error) {
            return css`
                border-color: ${Colour["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${Colour["border-error-focus"]};
                }
            `;
        }
    }}
`;
