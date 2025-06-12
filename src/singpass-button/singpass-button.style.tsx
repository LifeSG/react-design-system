import styled, { css } from "styled-components";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { Colour, MediaQuery, Motion, Spacing } from "../theme";
import { ThemeButton } from "../theme/components/theme-helper";
import { SingpassButtonStyleType } from "./types";

export type MainButtonSize = "default" | "small" | "large";

export interface MainStyleProps {
    $buttonStyle: SingpassButtonStyleType;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $singpassLogoOverride?: SingpassLogoOverride;
}

export interface SingpassLogoOverride {
    height?: number;
    translateY?: number;
    paddingLeft?: number;
}

export const Main = styled.button<MainStyleProps>`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    min-width: 4rem;
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
                color: ${Colour.Primitive.white};

                &:hover,
                &:active {
                    background-color: #B0262D};
                }
            `;
        }

        return css`
            background-color: ${Colour.Primitive.white};
            border: 1px #c8c9cc solid;

            &:hover,
            &:active {
                background-color: #F5F5F7};
            }
        `;
    }}

    ${(props) => {
        switch (props.$buttonSizeStyle) {
            case "small":
                return css`
                    height: 2.5rem;

                    img {
                        height: ${props.$singpassLogoOverride
                            ? props.$singpassLogoOverride.height
                            : 1.7}ex;
                        transform: translateY(
                            ${props.$singpassLogoOverride
                                ? props.$singpassLogoOverride.translateY
                                : 0.45}ex
                        );
                        padding-left: ${props.$singpassLogoOverride
                            ? props.$singpassLogoOverride.paddingLeft
                            : 0.7}ex;
                    }

                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            case "large":
                return css`
                    height: 4rem;

                    img {
                        height: ${props.$singpassLogoOverride
                            ? props.$singpassLogoOverride.height
                            : 2.8}ex;
                        transform: translateY(
                            ${props.$singpassLogoOverride
                                ? props.$singpassLogoOverride.translateY
                                : 0.8}ex
                        );
                        padding-left: ${props.$singpassLogoOverride
                            ? props.$singpassLogoOverride.paddingLeft
                            : 1}ex;
                    }
                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            default:
                return css`
                    height: 3rem;

                    img {
                        height: ${props.$singpassLogoOverride
                            ? props.$singpassLogoOverride.height
                            : 2}ex;
                        transform: translateY(
                            ${props.$singpassLogoOverride
                                ? props.$singpassLogoOverride.translateY
                                : 0.6}ex
                        );
                        padding-left: ${props.$singpassLogoOverride
                            ? props.$singpassLogoOverride.paddingLeft
                            : 0.75}ex;
                    }

                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;
        }
    }}
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
`;
