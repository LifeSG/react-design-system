import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
import { SizeType, StyleType } from "./types";

interface StyleProps {
    $styleType: StyleType;
    $sizeType: SizeType;
}

export const Main = styled.button<StyleProps>`
    align-items: center;
    background-color: ${v2_Color.Primary};
    border-radius: 0.25rem;
    color: ${v2_Color.Neutral[8]};
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
                    background-color: ${v2_Color.Neutral[8]};
                    border: 1px solid ${v2_Color.Primary};
                    color: ${v2_Color.Primary};
                `;

            case "light":
                return css`
                    background-color: ${v2_Color.Neutral[8]};
                    border: 1px solid ${v2_Color.Neutral[5]};
                    color: ${v2_Color.Primary};
                `;
            case "primary":
            default:
                return css`
                    background-color: ${v2_Color.Primary};
                    border: none;
                    color: ${v2_Color.Neutral[8]};
                `;
        }
    }}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${v2_Color.Neutral[6]};
        border: 1px solid ${v2_Color.Neutral[6]};
        color: ${v2_Color.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`;
