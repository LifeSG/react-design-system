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

export type MainButtonStyle =
    | "default"
    | "disabled"
    | "secondary"
    | "light"
    | "link";

export type MainButtonSize = "default" | "small" | "large";

export interface MainStyleProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}

export const Main = styled.button<MainStyleProps>`
    padding: ${V3_Spacing["spacing-8"]} ${V3_Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]} transparent;
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
    border-radius: ${V3_ThemeButton["button-radius"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
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

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${V3_Colour["text-disabled"]};
                `;
            default:
                return css`
                    background-color: ${props.$buttonIsDanger
                        ? V3_Colour["bg-error-strong"]
                        : V3_ThemeButton["button-default-colour-bg"]};

                    ${V3_MediaQuery.MaxWidth.sm} {
                        width: 100%;
                    }

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

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${(props) => {
        switch (props.$buttonSizeStyle) {
            case "small":
                return css`
                    height: 2.5rem;
                    ${V3_Font["body-md-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            case "large":
                return css`
                    height: 4rem;
                    ${V3_Font["heading-md-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            default:
                return css`
                    height: 3rem;
                    ${V3_Font["heading-xs-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;
        }
    }}
`;

export const Spinner = styled(ComponentLoadingSpinner)<{
    $hasChildren: boolean;
}>`
    margin-right: ${(props) => (props.$hasChildren ? "0.5rem" : "0")};
`;
