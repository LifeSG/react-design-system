import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme";

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
    max-width: 672px;
`;

export const modalHeader = css``;

export const modalContent = css`
    flex: 1;
    display: flex;
    flex-direction: column;

    margin: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        margin: 0;
    }
`;

export const eSignatureContainer = css`
    width: 100%;
    height: 20rem;
    border-radius: ${Radius["lg"]};
    overflow: hidden;

    ${MediaQuery.MaxWidth.sm}, &[data-mobile-landscape="true"] {
        width: unset;
        height: unset;
        border-radius: 0;
        flex: 1;
    }

    &[data-mobile-landscape="true"] {
        background: ${Colour["bg-strong"]};

        display: flex;
        flex-direction: column;
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
        flex: 1;
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

    & > button,
    &[data-mobile-landscape="true"] > button {
        width: 8.5rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        & > button {
            width: 100%;
        }
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
