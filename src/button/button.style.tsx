import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { MediaQuery } from "../media/media";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { TextStyleHelper } from "../text";
import { MainStyleProps } from "./types";
import { DesignToken } from "../design-token";

export const Main = styled.button<MainStyleProps>`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    /* @media (hover: hover) { 
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    } */

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${(props) => {
        switch (props.$buttonStyle) {
            case "secondary":
                return css`
                    background-color: ${Color.Neutral[8]};
                    border: 1px solid
                        ${props.$buttonIsDanger
                            ? DesignToken.Button.Danger.Border
                            : Color.Primary};

                    color: ${props.$buttonIsDanger
                        ? DesignToken.Button.Danger.Primary
                        : Color.Primary};

                    &:hover {
                        background-color: ${Color.Neutral[7]};
                    }
                `;
            case "light":
                return css`
                    background-color: ${Color.Neutral[8]};
                    border: 1px solid ${Color.Neutral[5]};

                    &:hover {
                        background-color: ${Color.Neutral[7]};
                    }

                    color: ${props.$buttonIsDanger
                        ? DesignToken.Button.Danger.Primary
                        : Color.Primary};
                `;
            case "disabled":
                return css`
                    background-color: ${Color.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        /* box-shadow: none; */
                        background-color: ${Color.Neutral[6]};
                    }

                    color: ${Color.Neutral[3]};
                `;
            case "link":
                return css`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    /* &:hover {
                        box-shadow: none;
                    } */

                    color: ${props.$buttonIsDanger
                        ? DesignToken.Button.Danger.Primary
                        : Color.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${props.$buttonIsDanger
                            ? DesignToken.Button.Danger.Hover
                            : Color.PrimaryDark};
                    }
                `;
            default:
                return css`
                    background-color: ${props.$buttonIsDanger
                        ? DesignToken.Button.Danger.BackgroundColor
                        : Color.Primary};
                    border: 1px solid transparent;

                    ${MediaQuery.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    &:hover {
                        background-color: ${props.$buttonIsDanger
                            ? DesignToken.Button.Danger.Hover
                            : Color.PrimaryDark};
                    }

                    color: ${Color.Neutral[8]};
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
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}

                    ${MediaQuery.MaxWidth.mobileS} {
                        height: auto;
                    }
                `;
            default:
                return css`
                    height: 3rem;
                    ${TextStyleHelper.getTextStyle("H4", "semibold")}

                    ${MediaQuery.MaxWidth.mobileS} {
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
            ? DesignToken.Button.Danger.Primary
            : Color.Primary(props);
        switch (props.$buttonStyle) {
            case "secondary":
            case "light":
            case "link":
                break;
            case "disabled":
                color = Color.Neutral[3](props);
                break;
            default:
                color = Color.Neutral[8](props);
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
