import { css } from "@linaria/core";

import { lineClampCss } from "../../shared/styles";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const item = css`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
    }
`;

export const box = css`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    cursor: pointer;

    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-16"]};
    }

    &:hover {
        background: ${Colour["bg-hover"]};
    }
`;

export const boxError = css`
    background: ${Colour["bg-error"]};
    border-color: ${Colour["border-error"]};

    &:hover {
        background: ${Colour["bg-error"]};
    }
`;

export const contentSection = css`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const contentSectionHasThumbnail = css`
    ${MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        align-items: center;
    }
`;

export const nameSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`;

export const extendedNameSection = css`
    display: flex;
    flex: 1;
    align-items: center;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const fileSizeSection = css`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${Spacing["spacing-8"]};

    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${Spacing["spacing-8"]};

        ${lineClampCss(2)}
    }
`;

export const itemNameText = css`
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.lg} {
        ${lineClampCss(2)}
    }
`;

export const errorIcon = css`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

const baseErrorMessage = `
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-error"]};
`;

export const desktopErrorMessage = css`
    ${baseErrorMessage}
    margin-top: ${Spacing["spacing-8"]};
    display: flex;
    gap: ${Spacing["spacing-4"]};

    ${MediaQuery.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`;

export const mobileErrorMessage = css`
    ${baseErrorMessage}
    display: none;
    visibility: hidden;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        gap: ${Spacing["spacing-4"]};
        visibility: visible;
        margin-top: ${Spacing["spacing-8"]};
    }
`;

export const actionContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.lg} {
        margin-left: ${Spacing["spacing-16"]};
    }
`;

export const iconButton = css`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }
`;

export const thumbnailContainer = css`
    width: auto;
    margin-right: ${Spacing["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${MediaQuery.MaxWidth.lg} {
        margin-right: ${Spacing["spacing-16"]};
    }
`;

export const thumbnail = css`
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${MediaQuery.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`;
