import { css } from "@linaria/core";

import { Colour, Motion, Radius, Spacing } from "../../tokens";

export const root = css`
    border: 1px solid transparent;
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

export const iconRight = css`
    flex-direction: row-reverse;
`;

export const hasMinWidth = css`
    min-width: 4rem;
`;

export const styleDefault = css`
    background-color: ${Colour["bg-primary"]};
    color: ${Colour["text-inverse"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-primary-hover"]};
        }
    }
`;

export const styleDefaultDanger = css`
    background-color: ${Colour["bg-error-strong"]};
    color: ${Colour["text-inverse"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-error-strong-hover"]};
        }
    }
`;

export const styleSecondary = css`
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

export const styleSecondaryDanger = css`
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

export const styleLight = css`
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

export const styleLightDanger = css`
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

export const styleLink = css`
    background-color: transparent;
    color: ${Colour["text-primary"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const styleLinkDanger = css`
    background-color: transparent;
    color: ${Colour["text-error"]};
    &:hover,
    &:active {
        @media (pointer: fine) {
            background-color: ${Colour["bg-hover-neutral"]};
        }
    }
`;

export const styleDisabled = css`
    background-color: ${Colour["bg-disabled"]};
    cursor: not-allowed;
    color: ${Colour["text-disabled"]};
    &:hover {
        box-shadow: none;
    }
`;

export const sizeDefault = css`
    height: 3rem;
    font-size: 14px;
    font-weight: 600;
`;

export const sizeDefaultIconOnly = css`
    height: 3rem;
    width: 3rem;
`;

export const sizeSmall = css`
    height: 2.5rem;
    font-size: 14px;
    font-weight: 600;
`;

export const sizeSmallIconOnly = css`
    height: 2.5rem;
    width: 2.5rem;
`;

export const sizeLarge = css`
    height: 4rem;
    font-size: 16px;
    font-weight: 600;
`;

export const sizeLargeIconOnly = css`
    height: 4rem;
    width: 4rem;
`;

export const spinner = css`
    flex-shrink: 0;
`;

export const spinnerHasChildren = css`
    margin-right: 0.5rem;
`;
