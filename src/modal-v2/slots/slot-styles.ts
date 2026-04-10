import { css } from "@linaria/core";

import {
    Breakpoint,
    Colour,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../../theme";

export const modalCard = css`
    width: 40rem;
    margin: ${Spacing["spacing-64"]} auto;
    background: ${Colour.bg};
    box-shadow: ${Shadow["xs-strong"]};
    border-radius: ${Radius["lg"]};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${Breakpoint["xxl-margin"]} * 2);

    ${MediaQuery.MaxWidth.xl} {
        max-width: calc(100% - ${Breakpoint["xl-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.lg} {
        max-width: calc(100% - ${Breakpoint["lg-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.md} {
        max-width: calc(100% - ${Breakpoint["md-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.sm} {
        max-width: calc(100% - ${Breakpoint["sm-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xs} {
        max-width: calc(100% - ${Breakpoint["xs-margin"]} * 2);
    }

    ${MediaQuery.MaxWidth.xxs} {
        max-width: calc(100% - ${Breakpoint["xxs-margin"]} * 2);
    }
`;

export const closeButtonContainer = css`
    margin-right: ${Spacing["spacing-16"]};
    margin-left: auto;
    margin-top: ${Spacing["spacing-16"]};
    margin-bottom: ${Spacing["spacing-16"]};
`;

export const styledClickableIcon = css`
    padding: 0;
    color: ${Colour.icon};

    & svg {
        height: 2rem;
        width: 2rem;
    }
`;

export const contentContainer = css`
    margin-right: ${Spacing["spacing-64"]};
    margin-left: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: ${Spacing["spacing-20"]};
        margin-left: ${Spacing["spacing-20"]};
    }
`;

export const footerContainer = css`
    margin-right: ${Spacing["spacing-64"]};
    margin-left: ${Spacing["spacing-64"]};

    ${MediaQuery.MaxWidth.sm} {
        margin-right: ${Spacing["spacing-20"]};
        margin-left: ${Spacing["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${Spacing["spacing-32"]};
    row-gap: ${Spacing["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }
`;

export const slotSpacerHasCloseButton = "modalV2SlotSpacerHasCloseButton";
export const slotSpacerNoCloseButton = "modalV2SlotSpacerNoCloseButton";

export const slotSpacer = css`
    & > .${contentContainer}:last-child {
        margin-bottom: ${Spacing["spacing-64"]};
    }

    & > .${footerContainer}:not(:first-child) {
        margin-top: ${Spacing["spacing-32"]};
    }

    & > .${footerContainer}:last-child {
        margin-bottom: ${Spacing["spacing-64"]};
    }

    &.${slotSpacerHasCloseButton} {
        &
            > .${contentContainer}:first-child,
            &
            > .${footerContainer}:first-child {
            margin-top: 0;
        }
    }

    &.${slotSpacerNoCloseButton} {
        &
            > .${contentContainer}:first-child,
            &
            > .${footerContainer}:first-child {
            margin-top: ${Spacing["spacing-64"]};
        }
    }
`;
