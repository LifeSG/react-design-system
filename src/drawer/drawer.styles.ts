import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Motion, Radius, Shadow, Spacing } from "../theme";

export const container = css`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    overflow: hidden;
    background-color: ${Colour["bg"]};
    border-top-left-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};
    box-shadow: ${Shadow["lg-subtle"]};
    transition-property: right, visibility;

    &[data-status="initial"] {
        right: -100%;
        visibility: hidden;
    }

    &[data-status="open"] {
        right: 0;
        visibility: visible;
        transition-timing-function: ${Motion["ease-entrance"]};
        transition-duration: ${Motion["duration-800"]};
    }

    &[data-status="close"] {
        right: -100%;
        visibility: hidden;
        transition-timing-function: ${Motion["ease-exit"]};
        transition-duration: ${Motion["duration-800"]};
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
    gap: ${Spacing["spacing-16"]};
    align-items: center;
    padding-top: ${Spacing["spacing-32"]};
    padding-right: ${Spacing["spacing-16"]};
    padding-bottom: ${Spacing["spacing-16"]};
    /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
    padding-left: calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-32"]});
    background-color: ${Colour["bg"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-8"]};
        padding-top: ${Spacing["spacing-32"]};
        padding-right: ${Spacing["spacing-20"]};
        padding-bottom: ${Spacing["spacing-16"]};
        /* stylelint-disable-next-line declaration-block-no-redundant-longhand-properties */
        padding-left: calc(${Font.Spec["heading-lh-md"]} + ${Spacing["spacing-24"]});
    }
`;

export const closeButton = css`
    position: absolute;
    top: ${Spacing["spacing-32"]};
    left: ${Spacing["spacing-16"]};
    padding: 0;
    color: ${Colour["icon"]};

    &:active,
    &:focus {
        color: ${Colour["icon-hover"]};
    }

    svg {
        width: ${Font.Spec["heading-lh-md"]};
        height: ${Font.Spec["heading-lh-md"]};
    }
`;

export const heading = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const content = css`
    flex: 1;
    overflow-y: auto;
`;
