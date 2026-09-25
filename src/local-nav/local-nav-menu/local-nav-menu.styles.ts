import { css } from "@linaria/core";

import { Colour, Font, Radius, Spacing } from "../../theme";

export const nav = css`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;

export const textLabel = css`
    margin: 0;
`;

export const titleContainer = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    width: 100%;
`;

/* Keeps the left addon aligned with the first line when the title wraps. */
export const leftAddon = css`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    min-height: ${Font.Spec["body-lh-baseline"]};
`;

/* Flushed right; stays vertically centred against the (possibly wrapped) title. */
export const rightAddon = css`
    display: inline-flex;
    align-items: center;
    margin-left: auto;
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
