import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Spacing,
} from "../theme";

export const main = css`
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    gap: 0.5rem;
    border-radius: ${Radius.sm};

    svg,
    img {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;

export const mainIconPositionRight = css`
    flex-direction: row-reverse;
`;

export const mainHasMinWidth = css`
    min-width: 4rem;
`;

// -------------------------------------------------------------------------
// BUTTON STYLE + TEXT COLOR
// -------------------------------------------------------------------------
export const mainStyleDefault = css`
    background-color: ${Colour["bg-primary"]};
    color: ${Colour["text-inverse"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-primary-hover"]};
        }
    }
`;

export const mainStyleDefaultDanger = css`
    background-color: ${Colour["bg-error-strong"]};
    color: ${Colour["text-inverse"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-error-strong-hover"]};
        }
    }
`;

export const mainStyleSecondary = css`
    background-color: ${Colour.bg};
    border-color: ${Colour["border-primary"]};
    color: ${Colour["text-primary"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleSecondaryDanger = css`
    background-color: ${Colour.bg};
    border-color: ${Colour["border-error-strong"]};
    color: ${Colour["text-error"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLight = css`
    background-color: ${Colour.bg};
    border-color: ${Colour.border};
    color: ${Colour["text-primary"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLightDanger = css`
    background-color: ${Colour.bg};
    border-color: ${Colour.border};
    color: ${Colour["text-error"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLink = css`
    background-color: transparent;
    color: ${Colour["text-primary"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLinkDanger = css`
    background-color: transparent;
    color: ${Colour["text-error"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleDisabled = css`
    background-color: ${Colour["bg-disabled"]};
    cursor: not-allowed;
    color: ${Colour["text-disabled"]};
    &:hover {
        box-shadow: none;
    }
`;

// -------------------------------------------------------------------------
// BUTTON SIZE
// -------------------------------------------------------------------------
export const mainSizeDefault = css`
    height: 3rem;
    ${Font["heading-xs-semibold"]}
    ${MediaQuery.MaxWidth.xxs} {
        height: auto;
    }
`;

export const mainSizeDefaultIconOnly = css`
    height: 3rem;
    width: 3rem;
`;

export const mainSizeSmall = css`
    height: 2.5rem;
    ${Font["body-md-semibold"]}
    ${MediaQuery.MaxWidth.xxs} {
        height: auto;
    }
`;

export const mainSizeSmallIconOnly = css`
    height: 2.5rem;
    width: 2.5rem;
`;

export const mainSizeLarge = css`
    height: 4rem;
    ${Font["heading-md-semibold"]}
    ${MediaQuery.MaxWidth.xxs} {
        height: auto;
    }
`;

export const mainSizeLargeIconOnly = css`
    height: 4rem;
    width: 4rem;
`;

export const spinnerHasChildren = css`
    margin-right: 0.5rem;
`;
