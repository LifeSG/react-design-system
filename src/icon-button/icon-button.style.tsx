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
    padding: 1rem;
    background-color: ${Color.Primary};
    color: ${Color.Neutral[8]};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    img,
    svg {
        height: 1.125rem;
        width: 1.125rem;
    }
    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${(props) => {
        switch (props.$sizeType) {
            case "large":
                return css`
                    padding: 1.25rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;
            case "small":
                return css`
                    padding: 0.75rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;

            default:
                return css`
                    padding: 1rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
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

            default:
                return css`
                    background-color: ${Color.Primary};
                    color: ${Color.Neutral[8]};
                    border: none;
                `;
        }
    }}
    &:disabled {
        background-color: ${Color.Neutral[6]};
        color: ${Color.Primary};
        border: non;
        cursor: not-allowed;
    }

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

                default:
                    return css`
                        background-color: ${Color.Primary};
                        color: ${Color.Neutral[8]};
                        border: none;
                    `;
            }
        }}

        :disabled {
            background-color: ${Color.Neutral[6]};
            color: ${Color.Primary};
            border: non;
            cursor: not-allowed;
        }
    }
`;
