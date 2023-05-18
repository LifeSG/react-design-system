import { MediaQuery } from "../media";
import styled from "styled-components";
import { Color } from "../color/color";
import { DesignToken } from "src/design-token/design-token";
import { TextStyleHelper } from "src/text/helper";

export const Main = styled.button`
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
    h4 {
        ${TextStyleHelper.getTextStyle("H4", "semibold")}
    }

    img {
        width: 3.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        padding: 1.5rem 0rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        padding: 1rem 0rem;
    }

    :focus:active {
        box-shadow: ${DesignToken.ElevationBoxShadow};
        h4 {
            ${TextStyleHelper.getTextStyle("H4", "bold")}
        }
    }
    @media (hover: hover) {
        &:hover {
            box-shadow: 0px 8px 16px -8px ${Color.Shadow.Elevation};
            h4 {
                ${TextStyleHelper.getTextStyle("H4", "bold")}
            }
        }
    }
    :disabled {
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        h4 {
            ${TextStyleHelper.getTextStyle("H4", "semibold")}
        }
        outline: none;
        cursor: not-allowed;
    }
`;
