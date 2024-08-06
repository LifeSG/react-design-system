import { v2_MediaQuery } from "../v2_media";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { TextStyleHelper } from "../text/helper";

export const Main = styled.button<{
    $selected?: boolean;
    $error?: boolean;
}>`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Color.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${TextStyleHelper.getTextStyle("Body", "semibold")}
    color: ${({ $selected }) => $selected && Color.Primary};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${TextStyleHelper.getTextStyle("BodySmall", "semibold")}
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${Color.Neutral[8]};
                border: 1px solid ${Color.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                }
            `;
        } else if (props.$selected) {
            return css`
                background: ${Color.Accent.Light[5]};
                border: 1px solid ${Color.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                }
            `;
        } else {
            return css`
                &:hover {
                    border: 1px solid ${Color.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                }
            `;
        }
    }}

    :disabled {
        &:hover {
            border: 1px solid transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Color.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`;
