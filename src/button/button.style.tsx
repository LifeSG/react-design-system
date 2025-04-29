import styled, { css } from "styled-components";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { Border, Colour, Font, MediaQuery, Motion, Spacing } from "../theme";
import {
    ButtonDefaultColourBg,
    ButtonDefaultColourBgHover,
    ButtonDefaultColourText,
    ButtonLightColourText,
    ButtonLinkColourText,
    ButtonRadius,
    ButtonSecondaryColourBorder,
    ButtonSecondaryColourText,
} from "./button.token";

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
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    border-radius: ${ButtonRadius};
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
                    background-color: ${Colour.Primitive.white};
                    border-color: ${props.$buttonIsDanger
                        ? Colour["border-error-strong"]
                        : ButtonSecondaryColourBorder};

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : ButtonSecondaryColourText};

                    &:hover,
                    &:active {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;
            case "light":
                return css`
                    background-color: ${Colour.bg};
                    border-color: ${Colour.border};

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : ButtonLightColourText};

                    &:hover,
                    &:active {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;

            case "link":
                return css`
                    background-color: transparent;

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : ButtonLinkColourText};
                    &:hover,
                    &:active {
                        background-color: ${Colour["bg-hover-neutral"]};
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
                        : ButtonDefaultColourBg};

                    ${MediaQuery.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${ButtonDefaultColourText};

                    &:hover,
                    &:active {
                        background-color: ${props.$buttonIsDanger
                            ? Colour["bg-error-strong-hover"]
                            : ButtonDefaultColourBgHover};
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

                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            case "large":
                return css`
                    height: 4rem;
                    ${Font["heading-md-semibold"]}

                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            default:
                return css`
                    height: 3rem;
                    ${Font["heading-xs-semibold"]}

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
