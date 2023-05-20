import { MediaQuery } from "../media";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { DesignToken } from "../design-token/design-token";
import { TextStyleHelper } from "../text/helper";

export const Main = styled.button<{ $selected?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Color.Neutral[8]};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 13rem;
    transition: all 200ms ease;
    ${TextStyleHelper.getTextStyle("H4", "semibold")}

    img {
        width: 3.5rem;
        height: 3.5rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
    }

    &:hover {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
        ${TextStyleHelper.getTextStyle("H4", "bold")}
    }
    ${(props) => {
        if (props.$selected) {
            return css`
                background: ${Color.Accent.Light[5]};
                border-color: ${Color.Primary};
                color: ${Color.Primary(props)};

                :hover {
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                }
            `;
        }
    }}

    :disabled {
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        ${TextStyleHelper.getTextStyle("H4", "semibold")}
        color: ${Color.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`;
