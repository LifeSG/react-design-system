import styled, { css } from "styled-components";
import { SizeType, StyleType } from "./types";
import { Border, Colour } from "../theme";
interface StyleProps {
    $styleType: StyleType;
    $sizeType: SizeType;
}

export const Main = styled.button<StyleProps>`
    align-items: center;
    border-radius: 0.25rem;
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
                    background-color: ${Colour.bg};
                    border: ${Border["width-010"]} ${Border.solid}
                        ${Colour["border-primary"]};
                    color: ${Colour["text-primary"]};

                    :hover {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;

            case "light":
                return css`
                    background-color: ${Colour.bg};
                    border: ${Border["width-010"]} ${Border.solid}
                        ${Colour.border};
                    color: ${Colour["text-primary"]};

                    :hover {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;
            case "primary":
            default:
                return css`
                    background-color: ${Colour["bg-primary"]};
                    border: none;
                    color: ${Colour["text-inverse"]};

                    :hover {
                        background-color: ${Colour["bg-primary-hover"]};
                    }
                `;
        }
    }}

    &:disabled {
        background-color: ${Colour["bg-disabled"]};
        border: ${Border["width-010"]} ${Border["solid"]}
            ${Colour["border-disabled"]};
        color: ${Colour["text-disabled"]};
        cursor: not-allowed;
    }
`;
