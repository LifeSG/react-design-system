import { css } from "@linaria/core";

import { MediaQuery, Spacing } from "../theme";

// =============================================================================
// WRAPPER
// =============================================================================
export const wrapper = css`
    display: flex;
    list-style: none;
    margin-left: ${Spacing["spacing-64"]};
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const mobileWrapper = css`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Spacing["spacing-64"]};
        flex-shrink: 0;
    }
`;

export const drawerWrapper = css`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Spacing["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`;

// =============================================================================
// BUTTON ITEMS
// =============================================================================
export const buttonItem = css`
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-right: ${Spacing["spacing-16"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Spacing["spacing-16"]};
        justify-content: center;

        &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0;
        }
    }
`;

export const buttonItemMobile = css`
    ${MediaQuery.MaxWidth.lg} {
        &:not(:last-of-type) {
            margin-bottom: ${Spacing["spacing-16"]};
        }
    }

    ${MediaQuery.MaxWidth.sm} {
        padding: 0 ${Spacing["spacing-16"]};
    }
`;

export const actionButton = css`
    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
    }
`;

// =============================================================================
// DOWNLOAD APP
// =============================================================================
export const downloadAppWrapper = css`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Spacing["spacing-40"]};
    }
`;

export const downloadAppTitle = css`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const downloadAppImageLinkWrapper = css`
    display: flex;
`;

export const downloadAppImageLink = css`
    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${MediaQuery.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`;
