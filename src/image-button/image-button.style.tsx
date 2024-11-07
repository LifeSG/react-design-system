import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius } from "../theme";
import { MediaQuery } from "../theme";

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
    background-color: ${Colour.bg};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    border-radius: ${Radius.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    ${Font["body-baseline-semibold"]}
    color: ${({ $selected }) =>
        $selected ? Colour["text-primary"] : Colour["text"]};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${Font["body-md-semibold"]}
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${Colour.bg};
                border: ${Border["width-010"]} ${Border.solid}
                    ${Colour["border-error"]};
            `;
        } else if (props.$selected) {
            return css`
                background: ${Colour["bg-selected"]};
                border: ${Border["width-010"]} ${Border.solid}
                    ${Colour["border-selected"]};

                &:hover {
                    background: ${Colour["bg-selected-hover"]};
                    border: ${Border["width-010"]} ${Border.solid}
                        ${Colour["border-selected-hover"]};
                }
            `;
        } else {
            return css`
                &:hover {
                    border: ${Border["width-010"]} ${Border.solid}
                        ${Colour["border-hover-strong"]};
                }
            `;
        }
    }}

    :disabled {
        &:hover {
            border: ${Border["width-010"]} ${Border.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Colour["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`;
