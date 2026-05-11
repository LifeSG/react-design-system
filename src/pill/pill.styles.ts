import { css } from "@linaria/core";

import { Border, Colour, Font, Radius } from "../theme";

export const wrapperBase = css`
    ${Font["body-xs-semibold"]}
    display: flex;
    gap: 0.25rem;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    padding: 0.125rem 0.5rem;
    border: ${Border["width-010"]} ${Border.solid};
    border-radius: ${Radius["full"]};

    svg {
        flex-shrink: 0;
    }
`;

export const wrapperSolid = css`
    color: ${Colour["text-inverse"]};
    border-color: transparent;
`;

export const wrapperSolidBlack = css`
    background: ${Colour["bg-inverse"]};
`;

export const wrapperSolidGrey = css`
    background: ${Colour["bg-inverse-subtler"]};
`;

export const wrapperSolidGreen = css`
    background: ${Colour["bg-success-strong"]};
`;

export const wrapperSolidYellow = css`
    background: ${Colour["bg-warning-strong"]};
`;

export const wrapperSolidRed = css`
    background: ${Colour["bg-error-strong"]};
`;

export const wrapperSolidBlue = css`
    background: ${Colour["bg-info-strong"]};
`;

export const wrapperSolidPrimary = css`
    background: ${Colour["bg-primary"]};
`;

export const wrapperOutlineBlack = css`
    color: ${Colour.text};
    background: ${Colour.bg};
    border-color: ${Colour.border};
`;

export const wrapperOutlineGrey = css`
    color: ${Colour["text-subtler"]};
    background: ${Colour["bg-stronger"]};
    border-color: ${Colour["border-strong"]};
`;

export const wrapperOutlineGreen = css`
    color: ${Colour["text-success"]};
    background: ${Colour["bg-success"]};
    border-color: ${Colour["border-success"]};
`;

export const wrapperOutlineYellow = css`
    color: ${Colour["text-warning"]};
    background: ${Colour["bg-warning"]};
    border-color: ${Colour["border-warning"]};
`;

export const wrapperOutlineRed = css`
    color: ${Colour["text-error"]};
    background: ${Colour["bg-error"]};
    border-color: ${Colour["border-error"]};
`;

export const wrapperOutlineBlue = css`
    color: ${Colour["text-info"]};
    background: ${Colour["bg-info"]};
    border-color: ${Colour["border-info"]};
`;

export const wrapperOutlinePrimary = css`
    color: ${Colour["text-primary"]};
    background: ${Colour["bg-primary-subtlest"]};
    border-color: ${Colour["border-primary"]};
`;

export const label = css`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-align: left;
    -webkit-box-orient: vertical;
`;
