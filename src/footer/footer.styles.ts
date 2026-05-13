import { css } from "@linaria/core";

import { ComponentToken, MediaQuery, Spacing } from "../theme";
import type { ThemeType } from "../theme/types";

// =============================================================================
// GENERIC
// =============================================================================

export const baseFooter = css`
    background: ${ComponentToken.Footer["colour-bg"]};
`;

export const footerLink = css`
    color: ${ComponentToken.Footer["link-colour-text"]};

    &:hover {
        color: ${ComponentToken.Footer["link-colour-text-hover"]};
    }
`;

// =============================================================================
// TOP SECTION
// =============================================================================

export const fullWidthDivider = css`
    width: 100%;
`;

export const topSection = css`
    padding: ${Spacing["spacing-64"]} 0;

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-32"]} 0;

        [data-id="container"] {
            flex-direction: column;
            gap: ${Spacing["spacing-32"]};
        }
    }
`;

export const logoSection = css`
    display: flex;
    width: fit-content;
    margin-right: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        margin-right: 0;
    }
`;

export const logoImage = css`
    max-height: 4rem;
    max-width: 100%;
    object-fit: contain;
`;

export const logoSize: Partial<Record<ThemeType, string>> = {
    lifesg: css`
        width: 4rem;
    `,
    bookingsg: css`
        width: 4rem;
    `,
    mylegacy: css`
        width: 10rem;
        max-height: 2rem;
    `,
    ccube: css`
        width: 10rem;
    `,
    supportgowhere: css`
        width: 10rem;
    `,
};

export const linkSectionWrapper = css`
    display: flex;
    gap: ${Spacing["spacing-32"]};
    flex: 1 1 auto;
    max-width: calc(32% + ${Spacing["spacing-32"]});

    ${MediaQuery.MaxWidth.lg} {
        max-width: 100%;
    }
`;

export const linkSection = css`
    flex: 1 1 50%;
    list-style-type: none;

    &:nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        &:not(:last-child) {
            margin-bottom: ${Spacing["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${MediaQuery.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${MediaQuery.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        &:nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`;

export const addonSection = css`
    flex: 0 1 33%;
    margin-left: auto;

    ${MediaQuery.MaxWidth.lg} {
        flex: 1 1 100%;
        margin-left: 0;
    }
`;

// =============================================================================
// BOTTOM SECTION
// =============================================================================

export const bottomSection = css`
    padding: ${Spacing["spacing-20"]} 0;

    [data-id="container"] {
        column-gap: ${Spacing["spacing-32"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        border-top: none;
        padding: ${Spacing["spacing-16"]} 0;

        [data-id="container"] {
            flex-direction: column;
        }
    }
`;

export const bottomSectionContent = css`
    flex: 1 1 50%;
    display: flex;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        gap: ${Spacing["spacing-8"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`;

export const copyrightSection = css`
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.lg} {
        margin-top: ${Spacing["spacing-16"]};
        justify-content: flex-start;
    }
`;

export const copyrightText = css`
    color: ${ComponentToken.Footer["colour-text"]};
`;

export const disclaimerTextLink = css`
    color: ${ComponentToken.Footer["disclaimer-link-colour-text"]};
    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }

    &:hover {
        color: ${ComponentToken.Footer["disclaimer-link-colour-text-hover"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`;
