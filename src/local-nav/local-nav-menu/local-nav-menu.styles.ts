import { css } from "@linaria/core";

import { Colour, Radius, Spacing } from "../../theme";

export const nav = css`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;

export const textLabel = css`
    margin: 0;
`;

export const navItem = css`
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        top: 0;
        background-color: ${Colour["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover,
    &:focus-within {
        background-color: ${Colour["bg-hover-subtle"]};
    }
`;

export const navItemSelected = css`
    &::before {
        background-color: ${Colour["bg-primary"]};
    }
`;

export const navItemContent = css`
    display: block;
    padding: ${Spacing["spacing-16"]};
    padding-left: ${Spacing["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${Radius["sm"]};
    }
`;
