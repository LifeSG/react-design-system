import styled, { css } from "styled-components";
import { Color } from "@lifesg/react-design-system/color";
import { MediaQuery } from "@lifesg/react-design-system/media";
import { DesignToken } from "@lifesg/react-design-system/design-token";
import { MainStyleProps } from "@lifesg/react-design-system";

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
                    background-color: ${Color.Neutral[8]};
                    border: 1px solid
                        ${props.$buttonIsDanger
                            ? DesignToken.Button.Danger.Border
                            : Color.Primary};

                    color: ${props.$buttonIsDanger
                        ? DesignToken.Button.Danger.Primary
                        : Color.Primary};
                `;
            case "light":
                return css`
                    background-color: ${Color.Neutral[8]};
                    border: 1px solid ${Color.Neutral[5]};

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
                        box-shadow: none;
                    }

                    color: ${Color.Neutral[3]};
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
                        ? DesignToken.Button.Danger.Primary
                        : Color.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${props.$buttonIsDanger
                            ? DesignToken.Button.Danger.Hover
                            : Color.Secondary};
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

                    color: ${Color.Neutral[8]};
                `;
        }
    }}// -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
`;
