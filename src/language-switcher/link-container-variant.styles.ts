import { css } from "@linaria/core";

import { Border, Colour, Font, Motion, Radius, Spacing } from "../theme";

// =============================================================================
// LINK CONTAINER STYLES
// =============================================================================
export const linkContainerWrapper = css`
    display: inline-flex;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    align-items: center;
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background: ${Colour["bg"]};
`;

export const linkList = css`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 0 ${Spacing["spacing-8"]};
    flex-wrap: wrap;
`;

export const linkListItem = css`
    display: flex;
    align-items: center;
`;

export const linkItem = css`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: none;
    border-radius: ${Radius["md"]};
    ${Font["body-md-semibold"]}
    color: ${Colour["text-subtler"]};
    text-align: center;
    transition: color ${Motion["duration-150"]} ${Motion["ease-default"]};
    background: none;
    cursor: pointer;

    &:hover {
        color: ${Colour["text-hover"]};
        text-decoration: underline;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

export const linkItemActive = css`
    background: ${Colour["bg-primary-subtler"]};
    color: ${Colour["text-selected"]};
    cursor: default;

    &:hover {
        color: ${Colour["text-selected"]};
        text-decoration: none;
    }
`;
