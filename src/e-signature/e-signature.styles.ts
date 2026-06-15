import { css } from "@linaria/core";

import * as modalBoxStyles from "../modal/modal-box.styles";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

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

export const scrollableModal = css`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`;

export const growContainer = css`
    width: 100%;
    margin: auto;
    padding: ${Spacing["layout-xxl"]} ${Spacing["layout-sm"]};

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`;

export const modalBox = css`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        ${modalBoxStyles.tokens.buttonTopInset}: ${Spacing["spacing-8"]};
        ${modalBoxStyles.tokens.buttonRightInset}: ${Spacing["spacing-20"]};
    }
`;

export const modalTitle = css`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text"]};
    margin-bottom: ${Spacing["spacing-16"]};
    text-align: center;

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        ${Font["body-md-semibold"]}
        margin: ${Spacing["spacing-12"]} 0;
    }
`;

export const eSignatureContainer = css`
    width: 100%;
    height: 20rem;
    border-radius: ${Radius["lg"]};
    overflow: hidden;

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        border-radius: 0;
        flex: 1;
    }

    &[data-mobile-landscape="true"] {
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
    display: flex;
    justify-content: space-between;
    margin-top: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Spacing["spacing-16"]} ${Spacing["spacing-24"]}
            ${Spacing["spacing-48"]};
        gap: ${Spacing["spacing-16"]};
    }

    &[data-mobile-landscape="true"] {
        flex-direction: row;
        margin: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
    }
`;

export const modalActionButton = css`
    width: 8.5rem;

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
    }

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
`;
