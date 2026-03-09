import styled, { css } from "styled-components";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { V3_MediaQuery } from "../v3_theme";
import {
    Border,
    Button as ButtonTokens,
    Colour,
    Font,
    Motion,
    Spacing,
} from "../theme";

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
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${Border["width-010"]} ${Border.solid} transparent;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    border-radius: ${ButtonTokens.radius};
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
                    background-color: ${Colour.bg};
                    border-color: ${props.$buttonIsDanger
                        ? Colour["border-error-strong"]
                        : ButtonTokens["secondary-colour-border"]};

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : ButtonTokens["secondary-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Colour["bg-hover-neutral"]};
                        }
                    }
                `;
            case "light":
                return css`
                    background-color: ${Colour.bg};
                    border-color: ${Colour.border};

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : ButtonTokens["light-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Colour["bg-hover-neutral"]};
                        }
                    }
                `;

            case "link":
                return css`
                    background-color: transparent;

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : ButtonTokens["link-colour-text"]};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Colour["bg-hover-neutral"]};
                        }
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${Colour["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Colour["text-disabled"]};
                `;
            default:
                return css`
                    background-color: ${props.$buttonIsDanger
                        ? Colour["bg-error-strong"]
                        : ButtonTokens["default-colour-bg"]};

                    ${V3_MediaQuery.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${ButtonTokens["default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${props.$buttonIsDanger
                                ? Colour["bg-error-strong-hover"]
                                : ButtonTokens["default-colour-bg-hover"]};
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
                    ${Font["body-md-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            case "large":
                return css`
                    height: 4rem;
                    ${Font["heading-md-semibold"]}

                    ${V3_MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            default:
                return css`
                    height: 3rem;
                    ${Font["heading-xs-semibold"]}

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
