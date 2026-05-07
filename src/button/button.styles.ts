import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Motion, Radius, Spacing } from "../theme";

export const main = css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    cursor: pointer;
    border: ${Border["width-010"]} ${Border["solid"]} transparent;
    border-radius: ${Radius.sm};
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};

    svg,
    img {
        flex-shrink: 0;
        width: 1em;
        height: 1em;
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
    color: ${Colour["text-inverse"]};
    background-color: ${Colour["bg-primary"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-primary-hover"]};
        }
    }
`;

export const mainStyleDefaultDanger = css`
    color: ${Colour["text-inverse"]};
    background-color: ${Colour["bg-error-strong"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-error-strong-hover"]};
        }
    }
`;

export const mainStyleSecondary = css`
    color: ${Colour["text-primary"]};
    background-color: ${Colour.bg};
    border-color: ${Colour["border-primary"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleSecondaryDanger = css`
    color: ${Colour["text-error"]};
    background-color: ${Colour.bg};
    border-color: ${Colour["border-error-strong"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLight = css`
    color: ${Colour["text-primary"]};
    background-color: ${Colour.bg};
    border-color: ${Colour.border};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLightDanger = css`
    color: ${Colour["text-error"]};
    background-color: ${Colour.bg};
    border-color: ${Colour.border};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLink = css`
    color: ${Colour["text-primary"]};
    background-color: transparent;

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleLinkDanger = css`
    color: ${Colour["text-error"]};
    background-color: transparent;

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainStyleDisabled = css`
    color: ${Colour["text-disabled"]};
    cursor: not-allowed;
    background-color: ${Colour["bg-disabled"]};

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
    width: 3rem;
    height: 3rem;
`;

export const mainSizeSmall = css`
    height: 2.5rem;
    ${Font["body-md-semibold"]}
    ${MediaQuery.MaxWidth.xxs} {
        height: auto;
    }
`;

export const mainSizeSmallIconOnly = css`
    width: 2.5rem;
    height: 2.5rem;
`;

export const mainSizeLarge = css`
    height: 4rem;
    ${Font["heading-md-semibold"]}
    ${MediaQuery.MaxWidth.xxs} {
        height: auto;
    }
`;

export const mainSizeLargeIconOnly = css`
    width: 4rem;
    height: 4rem;
`;

export const spinnerHasChildren = css`
    margin-right: 0.5rem;
`;
