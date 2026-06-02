import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../../theme";

export const container = css`
    width: auto;
    margin-right: ${Spacing["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`;

export const thumbnail = css`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    object-fit: cover;

    ${MediaQuery.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`;

export const thumbnailPdf = css`
    border: none;
`;

export const replaceButton = css`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Spacing["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Font["body-md-semibold"]}
    color: ${Colour["text-primary"]};

    &:hover {
        color: ${Colour["text-hover"]};
    }
`;
