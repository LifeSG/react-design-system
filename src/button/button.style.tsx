import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color/color";
import { V2_MediaQuery } from "../v2_media/media";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { V2_TextStyleHelper } from "../v2_text";
import { MainStyleProps } from "./types";
import { V2_DesignToken } from "../v2_design-token";

export const Main = styled.button<MainStyleProps>`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${(props) => {
        switch (props.$buttonStyle) {
            case "secondary":
                return css`
                    background-color: ${V2_Color.Neutral[8]};
                    border: 1px solid
                        ${props.$buttonIsDanger
                            ? V2_DesignToken.Button.Danger.Border
                            : V2_Color.Primary};

                    color: ${props.$buttonIsDanger
                        ? V2_DesignToken.Button.Danger.Primary
                        : V2_Color.Primary};
                `;
            case "light":
                return css`
                    background-color: ${V2_Color.Neutral[8]};
                    border: 1px solid ${V2_Color.Neutral[5]};

                    color: ${props.$buttonIsDanger
                        ? V2_DesignToken.Button.Danger.Primary
                        : V2_Color.Primary};
                `;
            case "disabled":
                return css`
                    background-color: ${V2_Color.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${V2_Color.Neutral[3]};
                `;
            case "link":
                return css`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${props.$buttonIsDanger
                        ? V2_DesignToken.Button.Danger.Primary
                        : V2_Color.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${props.$buttonIsDanger
                            ? V2_DesignToken.Button.Danger.Hover
                            : V2_Color.Secondary};
                    }
                `;
            default:
                return css`
                    background-color: ${props.$buttonIsDanger
                        ? V2_DesignToken.Button.Danger.BackgroundColor
                        : V2_Color.Primary};
                    border: 1px solid transparent;

                    ${V2_MediaQuery.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    color: ${V2_Color.Neutral[8]};
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
                    ${V2_TextStyleHelper.getTextStyle("H5", "semibold")}

                    ${V2_MediaQuery.MaxWidth.mobileS} {
                        height: auto;
                    }
                `;
            default:
                return css`
                    height: 3rem;
                    ${V2_TextStyleHelper.getTextStyle("H4", "semibold")}

                    ${V2_MediaQuery.MaxWidth.mobileS} {
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
            ? V2_DesignToken.Button.Danger.Primary
            : V2_Color.Primary(props);
        switch (props.$buttonStyle) {
            case "secondary":
            case "light":
            case "link":
                break;
            case "disabled":
                color = V2_Color.Neutral[3](props);
                break;
            default:
                color = V2_Color.Neutral[8](props);
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
