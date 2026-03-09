import { css } from "@linaria/core";
import {
    Border,
    Button as ButtonTokens,
    Colour,
    Font,
    Motion,
    Spacing,
} from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const main = css`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${Border["width-010"]} ${Border.solid} transparent;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    border-radius: ${ButtonTokens.radius};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const mainDefault = css`
    background-color: ${ButtonTokens["default-colour-bg"]};
    color: ${ButtonTokens["default-colour-text"]};

    @media screen and (max-width: 480px) {
        width: 100%;
    }

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${ButtonTokens["default-colour-bg-hover"]};
        }
    }
`;

export const mainDefaultDanger = css`
    background-color: ${Colour["bg-error-strong"]};
    color: ${ButtonTokens["default-colour-text"]};

    @media screen and (max-width: 480px) {
        width: 100%;
    }

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-error-strong-hover"]};
        }
    }
`;

export const mainSecondary = css`
    background-color: ${Colour.bg};
    border-color: ${ButtonTokens["secondary-colour-border"]};
    color: ${ButtonTokens["secondary-colour-text"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainSecondaryDanger = css`
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

export const mainLight = css`
    background-color: ${Colour.bg};
    border-color: ${Colour.border};
    color: ${ButtonTokens["light-colour-text"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainLightDanger = css`
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

export const mainLink = css`
    background-color: transparent;
    color: ${ButtonTokens["link-colour-text"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainLinkDanger = css`
    background-color: transparent;
    color: ${Colour["text-error"]};

    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const mainDisabled = css`
    background-color: ${Colour["bg-disabled"]};
    cursor: not-allowed;
    color: ${Colour["text-disabled"]};

    &:hover {
        box-shadow: none;
    }
`;

export const mainSizeDefault = css`
    height: 3rem;
    ${Font["heading-xs-semibold"]}

    @media screen and (max-width: 320px) {
        height: auto;
    }
`;

export const mainSmall = css`
    height: 2.5rem;
    ${Font["body-md-semibold"]}

    @media screen and (max-width: 320px) {
        height: auto;
    }
`;

export const mainLarge = css`
    height: 4rem;
    ${Font["heading-md-semibold"]}

    @media screen and (max-width: 320px) {
        height: auto;
    }
`;

export const spinnerWithChildren = css`
    margin-right: 0.5rem;
`;
