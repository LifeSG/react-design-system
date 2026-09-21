import { css } from "@linaria/core";

import {
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../../theme";

// =============================================================================
// Tokens and attributes
// =============================================================================
export const slotSpacerHasCloseButtonAttribute = "data-has-close-button";
const internalSlotSpacerTokens = {
    firstChildMarginTop:
        "--fds-internal-modalV2-slotSpacer-firstChildMarginTop",
} as const;

export const slotSpacerTokens = {
    firstChildMarginTopWithCloseButton:
        "--fds-internal-modalV2-slotSpacer-firstChildMarginTopWithCloseButton",
    firstChildMarginTopNoCloseButton:
        "--fds-internal-modalV2-slotSpacer-firstChildMarginTopNoCloseButton",

    contentLastChildMarginBottom:
        "--fds-internal-modalV2-slotSpacer-contentLastChildMarginBottom",

    footerNotFirstChildMarginTop:
        "--fds-internal-modalV2-slotSpacer-footerNotFirstChildMarginTop",
    footerLastChildMarginBottom:
        "--fds-internal-modalV2-slotSpacer-footerLastChildMarginBottom",
} as const;

export const headerTokens = {
    padding: "--fds-internal-modalV2-header-padding",
} as const;

// =============================================================================
// STYLING
// =============================================================================
/** Shared by both the windowed (`modalCard`) and `fullscreenModalCard` variants. */
export const cardBase = css`
    :where(&) {
        background: ${Colour.bg};

        display: flex;
        flex-direction: column-reverse;
    }
`;

export const modalCard = css`
    :where(&) {
        width: 40rem;
        margin: ${Spacing["spacing-64"]} auto;
        box-shadow: ${Shadow["xs-strong"]};
        border-radius: ${Radius["lg"]};

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
    }
`;

/*
 * Deliberately high specificity, unlike the other card styles: `fullscreen` has
 * to win over sizing and spacing that a consumer sets via `className` (e.g.
 * e-signature's own modalCard pins height/max-width/padding/box-shadow). That
 * is also why every property it needs to neutralise is reset explicitly here
 * rather than relying on `modalCard` being absent.
 */
export const fullscreenModalCard = css`
    &&[data-fullscreen] {
        width: 100%;
        height: 100vh;
        max-width: none;
        margin: 0;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`;

export const closeButtonContainer = css`
    :where(&) {
        margin-right: ${Spacing["spacing-16"]};
        margin-left: auto;
        margin-top: ${Spacing["spacing-16"]};
        margin-bottom: ${Spacing["spacing-16"]};
    }
`;

/*
 * Applied to a ClickableIcon, so these declarations are deliberately NOT
 * wrapped in :where(): they have to outrank ClickableIcon's own `main` class
 * (which sets `padding: spacing-24` and sizes `svg` to 1.125rem). Dropping
 * them to zero specificity lets those defaults win and inflates the card.
 */
export const styledClickableIcon = css`
    padding: 0;
    color: ${Colour.icon};

    & svg {
        height: 2rem;
        width: 2rem;
    }
`;

export const contentContainer = css`
    :where(&) {
        margin-right: ${Spacing["spacing-64"]};
        margin-left: ${Spacing["spacing-64"]};

        ${MediaQuery.MaxWidth.sm} {
            margin-right: ${Spacing["spacing-20"]};
            margin-left: ${Spacing["spacing-20"]};
        }
    }
`;

export const footerContainer = css`
    :where(&) {
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

        ${MediaQuery.MaxWidth.md} {
            flex-direction: column;
        }
    }

    :where(& > button) {
        flex: 1;
    }
`;

export const slotSpacer = css`
    :where(&) {
        ${internalSlotSpacerTokens.firstChildMarginTop}: var(
            ${slotSpacerTokens.firstChildMarginTopNoCloseButton},
            ${Spacing["spacing-64"]}
        );
    }

    :where(& > .${contentContainer}:last-child) {
        margin-bottom: var(
            ${slotSpacerTokens.contentLastChildMarginBottom},
            ${Spacing["spacing-64"]}
        );
    }

    :where(& > .${footerContainer}:not(:first-child)) {
        margin-top: var(
            ${slotSpacerTokens.footerNotFirstChildMarginTop},
            ${Spacing["spacing-32"]}
        );
    }

    :where(& > .${footerContainer}:last-child) {
        margin-bottom: var(
            ${slotSpacerTokens.footerLastChildMarginBottom},
            ${Spacing["spacing-64"]}
        );
    }

    :where(& > .${contentContainer}:first-child),
    :where(& > .${footerContainer}:first-child) {
        margin-top: var(${internalSlotSpacerTokens.firstChildMarginTop});
    }

    :where(&[${slotSpacerHasCloseButtonAttribute}="true"]) {
        ${internalSlotSpacerTokens.firstChildMarginTop}: var(
            ${slotSpacerTokens.firstChildMarginTopWithCloseButton},
            0
        );
    }

    :where(&[${slotSpacerHasCloseButtonAttribute}="false"]) {
        ${internalSlotSpacerTokens.firstChildMarginTop}: var(
            ${slotSpacerTokens.firstChildMarginTopNoCloseButton},
            ${Spacing["spacing-64"]}
        );
    }
`;

/** Lets the slot area absorb the leftover height of a size-constrained card. */
export const fillHeightSlotSpacer = css`
    :where(&) {
        flex: 1;
        min-height: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const headerContainer = css`
    :where(&) {
        display: flex;
        align-items: center;
        padding: var(${headerTokens.padding}, ${Spacing["spacing-16"]});
    }

    :where(&[data-close-button-position="right"]) {
        flex-direction: row-reverse;
    }
`;

export const headerTitle = css`
    :where(&) {
        ${Font["heading-xs-semibold"]}
        color: ${Colour.text};
        flex: 1;
        text-align: center;
    }
`;

/* Also a ClickableIcon — see the note on styledClickableIcon above. */
export const headerCloseButton = css`
    padding: 0;
    color: ${Colour.icon};
    flex-shrink: 0;

    & svg {
        height: 2rem;
        width: 2rem;
    }
`;

export const headerSpacer = css`
    :where(&) {
        width: 2rem;
        flex-shrink: 0;
    }
`;
