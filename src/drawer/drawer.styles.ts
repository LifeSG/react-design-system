import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Motion,
    Radius,
    Shadow,
    Spacing,
} from "../theme";

export const container = css`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;

    height: 100%;
    width: 40%;
    overflow: hidden;

    background-color: ${Colour["bg"]};
    box-shadow: ${Shadow["lg-subtle"]};
    border-top-left-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};

    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        transition-duration: ${Motion["duration-800"]};
        transition-timing-function: ${Motion["ease-entrance"]};
        right: 0;
        visibility: visible;
    }

    &[data-status="close"] {
        transition-duration: ${Motion["duration-800"]};
        transition-timing-function: ${Motion["ease-exit"]};
        right: -100%;
        visibility: hidden;
    }

    ${MediaQuery.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const header = css`
    top: 0;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-16"]}
        ${Spacing["spacing-16"]} ${Spacing["spacing-16"]};
    background-color: ${Colour["bg"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-8"]};
        padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]}
            ${Spacing["spacing-16"]} ${Spacing["spacing-16"]};
    }
`;

/**
 * When a call-to-action is present the header content is taller than a lone
 * heading, so the top padding is reduced to match the bottom — keeping the
 * heading and buttons evenly spaced within the header.
 */
export const headerWithCallToAction = css`
    padding-top: ${Spacing["spacing-16"]};
`;

export const headerStacked = css`
    flex-direction: column;
    align-items: stretch;
    gap: ${Spacing["spacing-16"]};
`;

export const titleRow = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    min-width: 0;

    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-8"]};
    }
`;

export const callToAction = css`
    display: flex;
    gap: ${Spacing["spacing-16"]};
    flex-shrink: 0;
    margin-left: auto;
`;

export const callToActionStacked = css`
    /* indent to line up with the heading (past the close icon + its gap) */
    margin-left: calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-8"]});
`;

export const closeButton = css`
    flex-shrink: 0;
    color: ${Colour["icon"]};
    padding: 0;
    &:active,
    &:focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        height: ${Font.Spec["heading-lh-md"]};
        width: ${Font.Spec["heading-lh-md"]};
    }
`;

export const heading = css`
    flex: 1;
    min-width: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const content = css`
    flex: 1;
    overflow-y: auto;
`;
