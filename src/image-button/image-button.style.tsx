import { MediaQuery } from "../media";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { DesignToken } from "src/design-token/design-token";

interface StyleProps {
    $outline: "none" | "browser";
    $disabled?: boolean;
}

export const Main = styled.button<StyleProps>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: transparent;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 13rem;
    height: 8.625rem;
    transition: all 200ms ease;
    img {
        width: 3.5rem;
    }
    ${MediaQuery.MaxWidth.tablet} {
        padding: 0rem 1.5rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        padding: 0rem 1rem;
    }
    ${(props) => {
        if (props.$disabled) {
            return css`
                img {
                    filter: grayscale(100%);
                }
                outline: none;
                cursor: not-allowed;
            `;
        } else {
            return css`
                :focus:active {
                    box-shadow: ${DesignToken.ElevationBoxShadow};
                }
                :focus {
                    ${props.$outline === "none" && "outline: none;"}
                }
                @media (hover: hover) {
                    &:hover {
                        box-shadow: 0px 8px 16px -8px rgba(75, 83, 159, 0.24);
                    }
                }
            `;
        }
    }}
`;
