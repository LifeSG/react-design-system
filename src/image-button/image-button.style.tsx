import styled, { css } from "styled-components";
import { Colour, Font } from "../theme";
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
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${Font["body-baseline-semibold"]}
    color: ${({ $selected }) => $selected && Colour["text-primary"]};
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
        ${Font["body-lg-semibold"]}
    }

    ${(props) => {
        if (props.$error) {
            return css`
                background: ${Colour.bg};
                border: 1px solid ${Colour["border-error"]};
            `;
        } else if (props.$selected) {
            return css`
                background: ${Colour["bg-selected"]};
                border: 1px solid ${Colour["border-selected"]};

                &:hover {
                    background: ${Colour["bg-selected-hover"]};
                    border: 1px solid ${Colour["border-selected-hover"]};
                }
            `;
        } else {
            return css`
                &:hover {
                    border: 1px solid ${Colour["border-hover-strong"]};
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
        color: ${Colour["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`;
