import styled, { css } from "styled-components";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { Colour, Font, MediaQuery } from "../theme";

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
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
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
                    border: 1px solid
                        ${props.$buttonIsDanger
                            ? Colour["border-error-strong"]
                            : Colour["border-primary"]};

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : Colour["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;
            case "light":
                return css`
                    background-color: ${Colour.bg};
                    border: 1px solid ${Colour.border};

                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : Colour["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;

            case "link":
                return css`
                    background-color: transparent;
                    border: transparent;
                    color: ${props.$buttonIsDanger
                        ? Colour["text-error"]
                        : Colour["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Colour["bg-hover-neutral"]};
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${Colour["bg-disabled"]};
                    border: 1px solid transparent;
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
                        : Colour["bg-primary"]};
                    border: 1px solid transparent;

                    ${MediaQuery.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Colour["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${props.$buttonIsDanger
                            ? Colour["bg-error-strong-hover"]
                            : Colour["bg-primary-hover"]};
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
                    ${Font["header-md-semibold"]}

                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;

            default:
                return css`
                    height: 3rem;
                    ${Font["header-xs-semibold"]}

                    ${MediaQuery.MaxWidth.xxs} {
                        height: auto;
                    }
                `;
        }
    }}
`;

export const Spinner = styled(ComponentLoadingSpinner)<MainStyleProps>`
    margin-right: 0.5rem;
    ${(props) => {
        let color = props.$buttonIsDanger
            ? Colour["text-error"]
            : Colour["text-primary"](props);
        switch (props.$buttonStyle) {
            case "secondary":
            case "light":
            case "link":
                break;
            case "disabled":
                color = Colour["text-disabled"](props);
                break;
            default:
                color = Colour["text-inverse"](props);
                break;
        }

        return css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${color} transparent transparent transparent;
            }
        `;
    }}
`;
