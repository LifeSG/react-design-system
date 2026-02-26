import styled, { css } from "styled-components";
import { SizeType, StyleType } from "./types";
import { V3_Border, V3_Colour, V3_Radius } from "../v3_theme";
interface StyleProps {
    $styleType: StyleType | "disabled";
    $sizeType: SizeType;
}

export const Main = styled.button<StyleProps>`
    align-items: center;
    border-radius: ${V3_Radius["sm"]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${(props) => {
        switch (props.$sizeType) {
            case "large":
                return css`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;
            case "small":
                return css`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;

            default:
                return css`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `;
        }
    }}

    ${(props) => {
        switch (props.$styleType) {
            case "secondary":
                return css`
                    background-color: ${V3_Colour.bg};
                    border: ${V3_Border["width-010"]} ${V3_Border.solid}
                        ${V3_Colour["border-primary"]};
                    color: ${V3_Colour["text-primary"]};

                    &:hover {
                        background-color: ${V3_Colour["bg-hover-neutral"]};
                    }
                `;

            case "light":
                return css`
                    background-color: ${V3_Colour.bg};
                    border: ${V3_Border["width-010"]} ${V3_Border.solid}
                        ${V3_Colour["border-primary"]};
                    color: ${V3_Colour["text-primary"]};

                    &:hover {
                        background-color: ${V3_Colour["bg-hover-neutral"]};
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${V3_Colour["bg-disabled"]};
                    border: ${V3_Border["width-010"]} ${V3_Border.solid}
                        ${V3_Colour["border-disabled"]};
                    color: ${V3_Colour["text-disabled"]};
                    cursor: not-allowed;
                `;
            default:
                return css`
                    background-color: ${V3_Colour["bg-primary"]};
                    border: none;
                    color: ${V3_Colour["text-inverse"]};

                    &:hover {
                        background-color: ${V3_Colour["bg-primary-hover"]};
                    }
                `;
        }
    }}
`;
