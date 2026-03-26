import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Motion, Radius } from "../theme";

export const main = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Colour.bg};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    border-radius: ${Radius["md"]};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text"]};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    &:hover {
        border: ${Border["width-010"]} ${Border.solid}
            ${Colour["border-hover-strong"]};
    }

    ${MediaQuery.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${Font["body-md-semibold"]}
    }
`;

export const mainSelectedText = css`
    color: ${Colour["text-primary"]};
`;

export const mainSelected = css`
    background: ${Colour["bg-selected"]};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-selected"]};

    &:hover {
        background: ${Colour["bg-selected-hover"]};
        border: ${Border["width-010"]} ${Border.solid}
            ${Colour["border-selected-hover"]};
    }
`;

export const mainError = css`
    background: ${Colour.bg};
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border-error"]};
`;

export const mainDisabled = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;

    img {
        filter: grayscale(100%);
    }

    &:hover {
        border: ${Border["width-010"]} ${Border.solid} transparent;
    }
`;
