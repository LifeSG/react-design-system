import { css } from "@linaria/core";

import {
    Border,
    Colour,
    ComponentToken,
    Font,
    Motion,
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
    border-radius: ${ComponentToken.Button["radius"]};

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

export const mainIconOnly = css`
    width: auto;
    aspect-ratio: 1 / 1;
    padding: ${Spacing["spacing-8"]};
`;

export const mainHasMinWidth = css`
    min-width: 4rem;
`;

// -------------------------------------------------------------------------
// BUTTON STYLE + TEXT COLOR
// -------------------------------------------------------------------------
export const mainStyleDefault = css`
    background-color: ${ComponentToken.Button["default-colour-bg"]};
    color: ${ComponentToken.Button["default-colour-text"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${ComponentToken.Button[
                "default-colour-bg-hover"
            ]};
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
    border-color: ${ComponentToken.Button["secondary-colour-border"]};
    color: ${ComponentToken.Button["secondary-colour-text"]};
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
    color: ${ComponentToken.Button["light-colour-text"]};
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
    color: ${ComponentToken.Button["link-colour-text"]};
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
    min-height: 3rem;
    ${Font["heading-xs-semibold"]}
`;

export const mainSizeDefaultIconOnly = css`
    min-height: 3rem;
`;

export const mainSizeSmall = css`
    min-height: 2.5rem;
    padding: calc(${Spacing["spacing-8"]} - ${Border["width-010"]})
        ${Spacing["spacing-16"]};
    ${Font["body-md-semibold"]}
`;

export const mainSizeSmallIconOnly = css`
    min-height: 2.5rem;
    padding: calc(${Spacing["spacing-8"]} - ${Border["width-010"]});
`;

export const mainSizeLarge = css`
    min-height: 4rem;
    ${Font["heading-md-semibold"]}
`;

export const mainSizeLargeIconOnly = css`
    min-height: 4rem;
`;

export const spinner = css`
    flex-shrink: 0;
`;

export const spinnerHasChildren = css`
    margin-right: 0.5rem;
`;
