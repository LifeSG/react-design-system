import { css } from "@linaria/core";

import { Border, Colour, Font, Radius } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const wrapperBase = css`
    border-radius: ${Radius["full"]};
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${Font["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: ${Border["width-010"]} ${Border.solid};
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
    background: ${Colour.bg};
    border-color: ${Colour.border};
    color: ${Colour.text};
`;

export const wrapperOutlineGrey = css`
    background: ${Colour["bg-stronger"]};
    border-color: ${Colour["border-strong"]};
    color: ${Colour["text-subtler"]};
`;

export const wrapperOutlineGreen = css`
    background: ${Colour["bg-success"]};
    border-color: ${Colour["border-success"]};
    color: ${Colour["text-success"]};
`;

export const wrapperOutlineYellow = css`
    background: ${Colour["bg-warning"]};
    border-color: ${Colour["border-warning"]};
    color: ${Colour["text-warning"]};
`;

export const wrapperOutlineRed = css`
    background: ${Colour["bg-error"]};
    border-color: ${Colour["border-error"]};
    color: ${Colour["text-error"]};
`;

export const wrapperOutlineBlue = css`
    background: ${Colour["bg-info"]};
    border-color: ${Colour["border-info"]};
    color: ${Colour["text-info"]};
`;

export const wrapperOutlinePrimary = css`
    background: ${Colour["bg-primary-subtlest"]};
    border-color: ${Colour["border-primary"]};
    color: ${Colour["text-primary"]};
`;

export const label = css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;
