import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../theme";

export const wrapper = css`
    display: flex;
    flex-direction: column;
`;

export const element = css`
    display: block;
    width: 100%;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    overflow: auto;

    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    outline: none;
    background: ${Colour.bg};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};

    &:focus,
    &:active {
        outline: ${Border["width-020"]} ${Border["solid"]} ${Colour["border-focus"]};
        outline-offset: -1px;
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Colour["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        background-clip: padding-box;
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
    }
`;

export const elementReadOnly = css`
    padding: ${Spacing["spacing-12"]} 0;
    background: transparent !important;
    border-color: transparent;

    &:focus,
    &:active {
        outline-color: ${Colour["border-focus"]};
    }
`;

export const elementDisabled = css`
    cursor: not-allowed;
    background: ${Colour["bg-disabled"]};

    &:focus,
    &:active {
        outline-color: ${Colour["border-disabled"]};
    }
`;

export const elementError = css`
    border-color: ${Colour["border-error"]};

    &:focus,
    &:active {
        outline-color: ${Colour["border-error-focus"]};
    }
`;
