import { v2_MediaQuery } from "../v2_media";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
import { V2_TextStyleHelper } from "../v2_text/helper";

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
    background-color: ${v2_Color.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${V2_TextStyleHelper.getTextStyle("Body", "semibold")}
    color: ${({ $selected }) => $selected && v2_Color.Primary};
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
        ${V2_TextStyleHelper.getTextStyle("BodySmall", "semibold")}
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${v2_Color.Neutral[8]};
                border: 1px solid ${v2_Color.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${v2_Color.Shadow.Red};
                }
            `;
        } else if (props.$selected) {
            return css`
                background: ${v2_Color.Accent.Light[5]};
                border: 1px solid ${v2_Color.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${v2_Color.Shadow.Accent};
                }
            `;
        } else {
            return css`
                &:hover {
                    border: 1px solid ${v2_Color.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${v2_Color.Shadow.Accent};
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
        color: ${v2_Color.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`;
