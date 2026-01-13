import { css } from "@linaria/core";
import { styled } from "@linaria/react";

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

const Spacing = {
    "spacing-8": "0.5rem",
    "spacing-16": "1rem",
};

const Border = {
    "width-010": "1px",
    solid: "solid",
};

const Motion = {
    "duration-250": "250ms",
    "ease-default": "cubic-bezier(0.4, 0, 0.2, 1)",
};

const ThemeButton = {
    "button-radius": "4px",
    "button-default-colour-bg": "#0052CC",
    "button-default-colour-bg-hover": "#0065FF",
    "button-default-colour-text": "#FFFFFF",
    "button-secondary-colour-border": "#0052CC",
    "button-secondary-colour-text": "#0052CC",
    "button-light-colour-text": "#172B4D",
    "button-link-colour-text": "#0052CC",
};

const Colour = {
    bg: "#FFFFFF",
    "bg-hover-neutral": "#F4F5F7",
    "bg-disabled": "#EBECF0",
    "bg-error-strong": "#DE350B",
    "bg-error-strong-hover": "#FF5630",
    border: "#DFE1E6",
    "text-disabled": "#A5ADBA",
    "text-error": "#DE350B",
};

const Font = {
    "heading-xs-semibold": `
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.25rem;
    `,
    "heading-md-semibold": `
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.5rem;
    `,
    "body-md-semibold": `
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
    `,
};

const MediaQuery = {
    MaxWidth: {
        xxs: "@media (max-width: 320px)",
        sm: "@media (max-width: 600px)",
    },
};

export const Main = styled.button<MainStyleProps>`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    border-radius: ${ThemeButton["button-radius"]};
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
                    border-color: ${ThemeButton[
                        "button-secondary-colour-border"
                    ]};

                    color: ${ThemeButton["button-secondary-colour-text"]};

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
                        : ThemeButton["button-light-colour-text"]};

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
                        : ThemeButton["button-link-colour-text"]};
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
                        : ThemeButton["button-default-colour-bg"]};

                    ${MediaQuery.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${ThemeButton["button-default-colour-text"]};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${props.$buttonIsDanger
                                ? Colour["bg-error-strong-hover"]
                                : ThemeButton[
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
