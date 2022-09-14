import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { MediaQuery } from "../media/media";
import { ComponentLoadingSpinner } from "../shared/loading-spinner";
import { TextStyleHelper } from "../text";
import { MainStyleProps } from "./types";

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
                    background-color: ${Color.Neutral[8](props)};
                    border: 1px solid ${Color.Primary(props)};

                    span {
                        color: ${Color.Primary(props)};
                    }
                `;
            case "light":
                return css`
                    background-color: ${Color.Neutral[8](props)};
                    border: 1px solid ${Color.Neutral[5](props)};

                    span {
                        color: ${Color.Primary(props)};
                    }
                `;
            case "disabled":
                return css`
                    background-color: ${Color.Neutral[6](props)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Color.Neutral[3](props)};
                    }
                `;
            case "link":
                return css`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Color.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Color.Secondary};
                        }
                    }
                `;
            default:
                return css`
                    background-color: ${Color.Primary(props)};
                    border: 1px solid transparent;

                    ${MediaQuery.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Color.Neutral[8](props)};
                    }
                `;
        }
    }}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${(props) => {
        switch (props.$buttonSize) {
            case "small":
                return css`
                    height: 2.5rem;
                    span {
                        ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    }

                    ${MediaQuery.MaxWidth.mobileS} {
                        height: auto;
                    }
                `;
            default:
                return css`
                    height: 3rem;
                    span {
                        ${TextStyleHelper.getTextStyle("H4", "semibold")}
                    }

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
        let color;
        switch (props.$buttonStyle) {
            case "secondary":
                color = Color.Primary(props);
                break;
            case "light":
                color = Color.Primary(props);
                break;
            case "link":
                color = Color.Primary(props);
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
