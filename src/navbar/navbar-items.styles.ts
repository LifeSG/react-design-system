import { css } from "@linaria/core";

import { Colour, ComponentToken, Font, MediaQuery } from "../theme";

// =============================================================================
// WRAPPER
// =============================================================================

export const wrapper = css`
    display: flex;
    list-style: none;
    position: relative;

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const wrapperAlignLeft = css`
    margin-right: auto;
`;

export const mobileWrapper = css`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`;

// =============================================================================
// LINK ITEMS
// =============================================================================
export const linkItem = css`
    display: flex;
    margin: 0 1rem;
    &:first-child {
        margin-left: 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`;

export const linkItemHiddenBranding = css`
    // negative margin to preserve touch target size for link
    &:first-child {
        margin-left: -0.5rem;
    }

    ${MediaQuery.MaxWidth.lg} {
        &:first-child {
            margin-left: 0rem;
        }
    }
`;

export const link = css`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${ComponentToken.Navbar["link-colour-text"]};
    height: 100%;

    &:active,
    &:hover,
    &:focus,
    &:focus-within {
        color: ${ComponentToken.Navbar["link-colour-text-hover"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`;

export const linkSelected = css`
    &:active,
    &:hover,
    &:focus {
        color: ${ComponentToken.Navbar["link-colour-text-selected-hover"]};
    }
`;

export const linkWeightRegular = css`
    ${Font["body-md-regular"]}
`;

export const linkWeightSemibold = css`
    ${Font["body-md-semibold"]}
`;

export const linkWeightBold = css`
    ${Font["body-md-bold"]}
`;

export const linkButton = css`
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    text-align: left;
    margin: 0;
    box-shadow: none;
    font: inherit;
    color: inherit;
`;

export const linkLabel = css`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`;

export const linkIndicator = css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${Colour["border-selected"]};

    ${MediaQuery.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`;

export const linkIndicatorSelected = css`
    .${link}:active &,
    .${link}:hover &,
    .${link}:focus & {
        background-color: ${Colour["border-selected-hover"]};
    }
`;

export const linkIconContainer = css`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`;

export const expandCollapseButton = css`
    padding: 0.5rem;
    transform: rotate(180deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`;

export const expandCollapseButtonExpanded = css`
    transform: rotate(0deg);
`;

export const chevronIcon = css`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Colour.icon};

    .${link}:active &,
    .${link}:hover &,
    .${link}:focus & {
        color: ${Colour["icon-hover"]};
    }
`;

export const chevronIconSelected = css`
    .${link}:active &,
    .${link}:hover &,
    .${link}:focus & {
        color: ${Colour["icon-selected-hover"]};
    }
`;
