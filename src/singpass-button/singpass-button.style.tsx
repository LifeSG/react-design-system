import styled, { css } from "styled-components";
import { Colour, MediaQuery, Motion, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";
import { SingpassButtonStyleType } from "./types";

export type MainButtonSize = "default" | "small" | "large";

export interface MainStyleProps {
    $buttonStyle: SingpassButtonStyleType;
    $buttonSizeStyle?: MainButtonSize | undefined;
}

export const Main = styled.button<MainStyleProps>`
    padding: 10px ${Spacing["spacing-16"]} 6px;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    border-radius: ${ThemeButton["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => {
        if (props.$buttonStyle === "red-filled") {
            return css`
                background-color: #f4333d;
                border: none;

                &:hover,
                &:active {
                    background-color: #b0262d;
                }
            `;
        }

        return css`
            background-color: ${Colour.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                background-color: #f5f5f7;
            }
        `;
    }}

    ${(props) => {
        switch (props.$buttonSizeStyle) {
            case "small":
                return css`
                    min-height: 2.5rem;

                    ${MediaQuery.MaxWidth.xxs} {
                        min-height: auto;
                    }
                `;

            case "large":
                return css`
                    min-height: 4rem;
                `;

            default:
                return css`
                    min-height: 3rem;

                    ${MediaQuery.MaxWidth.xxs} {
                        min-height: auto;
                    }
                `;
        }
    }}
`;

interface SvgContainerProps {
    $buttonSizeStyle?: MainButtonSize | undefined;
}
export const SvgContainer = styled.div<SvgContainerProps>`
    width: ${(props) => {
        switch (props.$buttonSizeStyle) {
            case "large":
                return 16;
            case "small":
                return 9;
            default:
                return 11;
        }
    }}rem;
`;
