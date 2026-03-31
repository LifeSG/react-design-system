import styled, { css } from "styled-components";

import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Motion,
    V3_Spacing,
} from "../v3_theme";
import { V3_ThemeButton } from "../v3_theme/components/theme-helper";
import type {
    ButtonIconPosition,
    ButtonSizeType,
    ButtonStyleType,
} from "./types";

export interface MainStyleProps {
    $buttonStyle: ButtonStyleType | "disabled";
    $buttonSize: ButtonSizeType;
    $buttonIsDanger?: boolean;
    $hasIcon?: boolean;
    $iconOnly?: boolean;
    $iconPosition?: ButtonIconPosition;
}

export const Main = styled.button<MainStyleProps>`
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]} transparent;
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
    gap: 0.5rem;
    flex-direction: ${(props) =>
        props.$iconPosition === "right" ? "row-reverse" : "row"};
    border-radius: ${V3_ThemeButton["button-radius"]};
    ${(props) => !props.$iconOnly && "min-width: 4rem;"}

    svg,
    img {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }

    // -------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -------------------------------------------------------------------------
    ${(props) => {
        switch (props.$buttonStyle) {
            case "secondary":
                return css`
                    background-color: ${V3_Colour.bg};
                    border-color: ${props.$buttonIsDanger
                        ? V3_Colour["border-error-strong"]
                        : V3_ThemeButton["button-secondary-colour-border"]};

                    color: ${props.$buttonIsDanger
                        ? V3_Colour["text-error"]
                        : V3_ThemeButton["button-secondary-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${V3_Colour["bg-hover-neutral"]};
                        }
                    }
                `;
            case "light":
                return css`
                    background-color: ${V3_Colour.bg};
                    border-color: ${V3_Colour.border};

                    color: ${props.$buttonIsDanger
                        ? V3_Colour["text-error"]
                        : V3_ThemeButton["button-light-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${V3_Colour["bg-hover-neutral"]};
                        }
                    }
                `;
            case "link":
                return css`
                    background-color: transparent;

                    color: ${props.$buttonIsDanger
                        ? V3_Colour["text-error"]
                        : V3_ThemeButton["button-link-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${V3_Colour["bg-hover-neutral"]};
                        }
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${V3_Colour["bg-disabled"]};
                    cursor: not-allowed;
                    color: ${V3_Colour["text-disabled"]};

                    &:hover {
                        box-shadow: none;
                    }
                `;
            default:
                return css`
                    background-color: ${props.$buttonIsDanger
                        ? V3_Colour["bg-error-strong"]
                        : V3_ThemeButton["button-default-colour-bg"]};

                    color: ${V3_ThemeButton["button-default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${props.$buttonIsDanger
                                ? V3_Colour["bg-error-strong-hover"]
                                : V3_ThemeButton[
                                      "button-default-colour-bg-hover"
                                  ]};
                        }
                    }
                `;
        }
    }}

    // -------------------------------------------------------------------------
    // BUTTON SIZE
    // -------------------------------------------------------------------------
    ${(props) => {
        switch (props.$buttonSize) {
            case "small":
                return css`
                    height: 2.5rem;
                    ${V3_Font["body-md-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }

                    ${props.$iconOnly &&
                    css`
                        width: 2.5rem;
                    `}
                `;
            case "large":
                return css`
                    height: 4rem;
                    ${V3_Font["heading-md-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }

                    ${props.$iconOnly &&
                    css`
                        width: 4rem;
                    `}
                `;
            default:
                return css`
                    height: 3rem;
                    ${V3_Font["heading-xs-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }

                    ${props.$iconOnly &&
                    css`
                        width: 3rem;
                    `}
                `;
        }
    }}
`;

export const Spinner = styled(ComponentLoadingSpinner)<{
    $hasChildren: boolean;
}>`
    margin-right: ${(props) => (props.$hasChildren ? "0.5rem" : "0")};
`;
