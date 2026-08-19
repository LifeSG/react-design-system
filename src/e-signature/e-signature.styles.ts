import { css } from "@linaria/core";

import { slotSpacerTokens } from "../modal-v2/slots/slot-styles";
import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../theme";

// -----------------------------------------------------------------------------
// MAIN FIELD
// -----------------------------------------------------------------------------

export const signatureArea = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14.125rem;
`;

export const addSignatureButton = css`
    width: fit-content;
    margin: 0 ${Spacing["spacing-20"]};

    &:disabled {
        border-color: ${Colour["border-strong"]};
    }
`;

export const editSignatureButton = css`
    position: absolute;
    top: ${Spacing["spacing-16"]};
    right: ${Spacing["spacing-16"]};

    &:disabled {
        border-color: ${Colour["border-strong"]};
    }
`;

export const signaturePreviewImage = css`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Spacing["spacing-16"]}) * 2);
    height: 100%;

    [data-fds-theme-mode="dark"] & {
        filter: invert(1);
    }
`;

export const progressBox = css`
    background: ${Colour["bg-primary-subtlest"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    margin: 0 ${Spacing["spacing-20"]};
    padding: ${Spacing["spacing-16"]};
    display: flex;
    gap: ${Spacing["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const instructions = css`
    margin-top: ${Spacing["spacing-16"]};
`;

// -----------------------------------------------------------------------------
// SIGNATURE MODAL
// -----------------------------------------------------------------------------

export const modalCard = css`
    && {
        width: 100%;
        height: 29rem;
        max-width: 672px;
        max-height: none;
        margin: 0 auto;
        padding: ${Spacing["spacing-16"]};
        box-shadow: ${Shadow["lg-strong"]};
    }

    ${MediaQuery.MaxWidth.sm} {
        &[data-mobile-landscape][data-mobile-landscape] {
            height: 100vh;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
        }
    }

    &[data-mobile-landscape="true"][data-mobile-landscape] {
        max-width: none;
        height: 100vh;
        margin: 0;
        border-radius: 0;
        padding: 0;
        box-shadow: none;
    }

    & > [data-has-close-button] {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;

        ${slotSpacerTokens.contentLastChildMarginBottom}: 0;
        ${slotSpacerTokens.footerNotFirstChildMarginTop}: 0;
        ${slotSpacerTokens.footerLastChildMarginBottom}: 0;
    }
`;

export const modalHeader = css`
    && {
        padding: 0 0 ${Spacing["spacing-16"]};
        position: relative;
    }

    & > span {
        ${Font["body-baseline-semibold"]}
        flex: unset;
        width: 100%;
        text-align: center;
    }

    & > button {
        position: absolute;
        top: 0;
        right: 0;
    }

    & > div[aria-hidden] {
        display: none;
    }

    ${MediaQuery.MaxWidth.sm} {
        &[data-mobile-landscape] {
            padding: ${Spacing["spacing-12"]} ${Spacing["spacing-20"]};
        }

        &[data-mobile-landscape] > span {
            ${Font["body-md-semibold"]}
        }

        &[data-mobile-landscape] > button {
            top: ${Spacing["spacing-8"]};
            right: ${Spacing["spacing-20"]};
        }
    }

    &[data-mobile-landscape="true"] {
        padding: ${Spacing["spacing-12"]} ${Spacing["spacing-20"]};

        & > span {
            ${Font["body-md-semibold"]}
        }

        & > button {
            top: ${Spacing["spacing-8"]};
            right: ${Spacing["spacing-20"]};
        }
    }
`;

export const modalContent = css`
    && {
        margin: 0;
    }
    display: flex;
    flex-direction: column;
    min-height: 0;

    ${MediaQuery.MaxWidth.sm} {
        &[data-mobile-landscape] {
            flex: 1;
        }
    }

    &[data-mobile-landscape="true"] {
        flex: 1;
    }
`;

export const eSignatureContainer = css`
    width: 100%;
    height: 20rem;
    border-radius: ${Radius["lg"]};
    overflow: hidden;

    ${MediaQuery.MaxWidth.sm} {
        &[data-mobile-landscape] {
            border-radius: 0;
            flex: 1;
        }
    }

    &[data-mobile-landscape="true"] {
        height: auto;
        flex: 1;
        background: ${Colour["bg-strong"]};
    }
`;

export const eSignatureDrawable = css`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Colour["bg-stronger"]};
    margin: auto;

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        aspect-ratio: 4/3;
    }

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }

    &[data-mobile-landscape="true"] {
        width: auto;
        height: 100%;
    }
`;

export const signatureLine = css`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Colour["border-strong"]};
    pointer-events: none;

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        width: calc(100% - ${Spacing["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`;

export const modalButtons = css`
    && {
        flex-direction: row-reverse;
        margin: ${Spacing["spacing-16"]} 0 0;
        justify-content: space-between;
        column-gap: 0;
    }

    && > button {
        flex: none;
        width: 8.5rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        &[data-mobile-landscape] {
            flex-direction: column;
            margin: ${Spacing["spacing-16"]} ${Spacing["spacing-24"]}
                ${Spacing["spacing-48"]};
            gap: ${Spacing["spacing-16"]};
        }

        &[data-mobile-landscape] > button {
            width: 100%;
        }
    }

    &[data-mobile-landscape="true"] {
        margin: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
    }
`;

export const modalActionButton = css`
    &[data-mobile-landscape="true"] {
        height: 2.5rem;
    }
`;

export const signatureCanvasContainer = css`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const signatureCanvas = css`
    cursor: crosshair;

    [data-fds-theme-mode="dark"] & {
        filter: invert(1);
    }
`;
