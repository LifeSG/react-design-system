import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Motion,
    V3_Radius,
} from "../v3_theme";

export const Main = styled.button<{
    $selected?: boolean;
    $error?: boolean;
    $disabled?: boolean;
}>`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${V3_Colour.bg};
    border: ${V3_Border["width-010"]} ${V3_Border.solid} transparent;
    border-radius: ${V3_Radius["md"]};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${V3_Motion["duration-250"]} ${V3_Motion["ease-default"]};
    ${V3_Font["body-baseline-semibold"]}
    color: ${({ $selected }) =>
        $selected ? V3_Colour["text-primary"] : V3_Colour["text"]};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${V3_Font["body-md-semibold"]}
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${V3_Colour.bg};
                border: ${V3_Border["width-010"]} ${V3_Border.solid}
                    ${V3_Colour["border-error"]};
            `;
        } else if (props.$selected) {
            return css`
                background: ${V3_Colour["bg-selected"]};
                border: ${V3_Border["width-010"]} ${V3_Border.solid}
                    ${V3_Colour["border-selected"]};

                &:hover {
                    background: ${V3_Colour["bg-selected-hover"]};
                    border: ${V3_Border["width-010"]} ${V3_Border.solid}
                        ${V3_Colour["border-selected-hover"]};
                }
            `;
        } else {
            return css`
                &:hover {
                    border: ${V3_Border["width-010"]} ${V3_Border.solid}
                        ${V3_Colour["border-hover-strong"]};
                }
            `;
        }
    }}

    ${(props) =>
        props.$disabled &&
        css`
            &:hover {
                border: ${V3_Border["width-010"]} ${V3_Border.solid} transparent;
            }
            box-shadow: none;
            img {
                filter: grayscale(100%);
            }
            color: ${V3_Colour["text-disabled"]};
            cursor: not-allowed;
        `}
`;
