import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

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
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    background: ${V3_Colour["bg"]};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-16"]};
    width: 100%;

    ${V3_Font["body-baseline-regular"]}
    color: ${V3_Colour["text"]};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${V3_Border["width-020"]} ${V3_Border["solid"]}
            ${V3_Colour["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${V3_Colour["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${V3_Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${V3_Radius["full"]};
        background-clip: padding-box;
    }

    ${(props) => {
        if (props.readOnly) {
            return css`
                border-color: transparent;
                background: transparent !important;
                padding: ${V3_Spacing["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${V3_Colour["border-focus"]};
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${V3_Colour["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${V3_Colour["border-disabled"]};
                }
            `;
        } else if (props.$error) {
            return css`
                border-color: ${V3_Colour["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${V3_Colour["border-error-focus"]};
                }
            `;
        }
    }}
`;
