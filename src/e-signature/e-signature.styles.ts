import styled, { css } from "styled-components";

import { Button } from "../button";
import { DashedBorder } from "../dashed-border";
import { Modal } from "../modal";
import { Border, Colour, Radius } from "../theme";
import { Typography } from "../typography";
import {
    V3_Border,
    V3_Breakpoint,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface SignatureAreaProps {
    $disabled: boolean | undefined;
}

// =============================================================================
// CUSTOM MEDIA QUERIES
// =============================================================================
// for mobileL and below in both orientations
const mobileMediaQuery = css`
    ${(props) => `
        ${V3_MediaQuery.MaxWidth.sm(props)},
        (orientation: landscape) and (max-height: ${V3_Breakpoint["sm-max"](
            props
        )}px)
    `}
`;
const mobileLandscapeMediaQuery = css`
    ${(props) => `
        @media (orientation: landscape) and (max-height: ${V3_Breakpoint[
            "sm-max"
        ](props)}px)
    `}
`;

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN FIELD
// -----------------------------------------------------------------------------

export const SignatureArea = styled(DashedBorder).attrs<SignatureAreaProps>(
    (props) => ({
        thickness: Border["width-040"],
        radius: Radius["sm"],
        colour: props.$disabled ? Colour["border-disabled"] : Colour["border"],
        backgroundColor: props.$disabled ? Colour["bg-disabled"] : Colour["bg"],
    })
)<SignatureAreaProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14.125rem;
`;

export const AddSignatureButton = styled(Button.Default)`
    width: fit-content;
    margin: 0 ${V3_Spacing["spacing-20"]};

    &:disabled {
        border-color: ${V3_Colour["border-strong"]};
    }
`;

export const EditSignatureButton = styled(Button)`
    position: absolute;
    top: ${V3_Spacing["spacing-16"]};
    right: ${V3_Spacing["spacing-16"]};

    &:disabled {
        border-color: ${V3_Colour["border-strong"]};
    }
`;

export const SignaturePreviewImage = styled.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${V3_Spacing["spacing-16"]}) * 2);
    height: 100%;
`;

export const ProgressBox = styled.div`
    background: ${V3_Colour["bg-primary-subtlest"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-radius: ${V3_Radius["sm"]};
    margin: 0 ${V3_Spacing["spacing-20"]};
    padding: ${V3_Spacing["spacing-16"]};
    display: flex;
    gap: ${V3_Spacing["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const Instructions = styled(Typography.BodySM)`
    margin-top: ${V3_Spacing["spacing-16"]};
`;

// -----------------------------------------------------------------------------
// SIGNATURE MODAL
// -----------------------------------------------------------------------------

export const ScrollableModal = styled(Modal)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`;

export const GrowContainer = styled.div`
    width: 100%;
    margin: auto;
    padding: ${V3_Spacing["layout-xxl"]} ${V3_Spacing["layout-sm"]};

    ${mobileMediaQuery} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`;

export const ModalBox = styled(Modal.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${V3_Spacing["spacing-16"]};

    ${mobileMediaQuery} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${V3_Spacing["spacing-8"]};
        --close-button-right-inset: ${V3_Spacing["spacing-20"]};
    }
`;

export const ModalTitle = styled.h2`
    ${V3_Font["body-baseline-semibold"]}
    color: ${V3_Colour["text"]};
    margin-bottom: ${V3_Spacing["spacing-16"]};
    text-align: center;

    ${mobileMediaQuery} {
        ${V3_Font["body-md-semibold"]}
        margin: ${V3_Spacing["spacing-12"]} 0;
    }
`;

export const ESignatureContainer = styled.div`
    width: 100%;
    height: 20rem;
    border-radius: ${V3_Radius["lg"]};
    overflow: hidden;

    ${mobileMediaQuery} {
        border-radius: 0;
        flex: 1;
    }

    ${mobileLandscapeMediaQuery} {
        background: ${V3_Colour["bg-strong"]};
    }
`;

export const ESignatureDrawable = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${V3_Colour["bg-stronger"]};
    margin: auto;

    ${mobileMediaQuery} {
        aspect-ratio: 4/3;
    }
    ${V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${mobileLandscapeMediaQuery} {
        width: auto;
        height: 100%;
    }
`;

export const SignatureLine = styled.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${V3_Colour["border-strong"]};
    pointer-events: none;

    ${mobileMediaQuery} {
        width: calc(100% - ${V3_Spacing["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`;

export const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${V3_Spacing["spacing-16"]};

    ${V3_MediaQuery.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-24"]}
            ${V3_Spacing["spacing-48"]};
        gap: ${V3_Spacing["spacing-16"]};
    }

    ${mobileLandscapeMediaQuery} {
        flex-direction: row;
        margin: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-20"]};
    }
`;

export const ModalActionButton = styled(Button.Default)`
    width: 8.5rem;
    ${V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
    ${mobileLandscapeMediaQuery} {
        height: 2.5rem;
    }
`;

export const SignatureCanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const SignatureCanvas = styled.canvas`
    cursor: crosshair;
`;
