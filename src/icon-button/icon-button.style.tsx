import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { ButtonStyle, SizeType } from "./types";

interface StyleProps {
    $outline: "none" | "browser";
    $highlight: boolean;
    $sizeType: SizeType;
    $buttonStyle: ButtonStyle;
}

export const Main = styled.button<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.125rem;
    background-color: ${Color.Primary};
    color: ${Color.Neutral[8]};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    img,
    svg {
        height: 0.875rem;
        width: 0.875rem;
    }
    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${(props) => {
        switch (props.$sizeType) {
            case "large":
                return css`
                    padding: 1.375rem;

                    img,
                    svg {
                        height: 1.25rem;
                        width: 1.25rem;
                    }
                `;
            case "small":
                return css`
                    padding: 0.875rem;

                    img,
                    svg {
                        height: 0.75rem;
                        width: 0.75rem;
                    }
                `;

            default:
                return css`
                    padding: 1.125rem;

                    img,
                    svg {
                        height: 0.875rem;
                        width: 0.875rem;
                    }
                `;
        }
    }}

    ${(props) => {
        switch (props.$buttonStyle) {
            case "primary":
                return css`
                    background-color: ${Color.Primary};
                    color: ${Color.Neutral[8]};
                    border: none;
                `;
            case "secondary":
                return css`
                    background-color: ${Color.Neutral[8]};
                    color: ${Color.Primary};
                    border: 1px solid ${Color.Primary};
                `;

            case "light":
                return css`
                    background-color: ${Color.Neutral[8]};
                    color: ${Color.Primary};
                    border: 1px solid ${Color.Neutral[5]};
                `;

            case "disabled":
                return css`
                    background-color: ${Color.Neutral[6]};
                    color: ${Color.Primary};
                    border: non;
                    cursor: not-allowed;
                `;

            default:
                return css`
                    background-color: ${Color.Primary};
                    color: ${Color.Neutral[8]};
                    border: none;
                `;
        }
    }}

    &:active,
    &:focus {
        ${({ $outline }) => $outline === "none" && "outline: none;"}

        ${({ $highlight }) =>
            $highlight &&
            css`
                background-color: ${Color.Neutral[7]};
            `}

            ${(props) => {
            switch (props.$buttonStyle) {
                case "primary":
                    return css`
                        background-color: ${Color.Primary};
                        color: ${Color.Neutral[8]};
                        border: none;
                    `;
                case "secondary":
                    return css`
                        background-color: ${Color.Neutral[8]};
                        color: ${Color.Primary};
                        border: 1px solid ${Color.Primary};
                    `;

                case "light":
                    return css`
                        background-color: ${Color.Neutral[8]};
                        color: ${Color.Primary};
                        border: 1px solid ${Color.Neutral[5]};
                    `;

                case "disabled":
                    return css`
                        background-color: ${Color.Neutral[6]};
                        color: ${Color.Primary};
                        border: non;
                        cursor: not-allowed;
                    `;

                default:
                    return css`
                        background-color: ${Color.Primary};
                        color: ${Color.Neutral[8]};
                        border: none;
                    `;
            }
        }}
    }
`;
