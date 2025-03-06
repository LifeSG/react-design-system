import styled, { css } from "styled-components";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { Modal } from "../modal";
import {
    Border,
    Breakpoint,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Spacing,
} from "../theme";
import { Typography } from "../typography";

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
        ${MediaQuery.MaxWidth.sm(props)},
        (orientation: landscape) and (max-height: ${Breakpoint["sm-max"](
            props
        )}px)
    `}
`;
const mobileLandscapeMediaQuery = css`
    ${(props) => `
        @media (orientation: landscape) and (max-height: ${Breakpoint["sm-max"](
            props
        )}px)
    `}
`;

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN FIELD
// -----------------------------------------------------------------------------

export const SignatureArea = styled.div<SignatureAreaProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) =>
        css`
            ${Border.Util["dashed-default"]({
                radius: Radius["sm"],
                thickness: Border["width-040"],
                colour: props.$disabled
                    ? Colour["border-disabled"]
                    : Colour["border"],
            })}

            background-color: ${props.$disabled
                ? Colour["bg-disabled"]
                : Colour["bg"]};
        `}
    height: 14.125rem;
`;

export const AddSignatureButton = styled(Button.Default)`
    width: fit-content;
    margin: 0 ${Spacing["spacing-20"]};

    :disabled {
        border-color: ${Colour["border-strong"]};
    }
`;

export const EditSignatureButton = styled(IconButton)`
    position: absolute;
    top: ${Spacing["spacing-16"]};
    right: ${Spacing["spacing-16"]};

    :disabled {
        border-color: ${Colour["border-strong"]};
    }
`;

export const SignaturePreviewImage = styled.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Spacing["spacing-16"]}) * 2);
    height: 100%;
`;

export const ProgressBox = styled.div`
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

export const Instructions = styled(Typography.BodySM)`
    margin-top: ${Spacing["spacing-16"]};
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
    padding: ${Spacing["layout-xxl"]} ${Spacing["layout-sm"]};

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
    padding: ${Spacing["spacing-16"]};

    ${mobileMediaQuery} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Spacing["spacing-8"]};
        --close-button-right-inset: ${Spacing["spacing-20"]};
    }
`;

export const ModalTitle = styled.h2`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text"]};
    margin-bottom: ${Spacing["spacing-16"]};
    text-align: center;

    ${mobileMediaQuery} {
        ${Font["body-md-semibold"]}
        margin: ${Spacing["spacing-12"]} 0;
    }
`;

export const ESignatureContainer = styled.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Radius["lg"]};
    overflow: hidden;

    ${mobileMediaQuery} {
        border-radius: 0;
        flex: 1;
    }

    ${mobileLandscapeMediaQuery} {
        background: ${Colour["bg-strong"]};
    }
`;

export const ESignatureDrawable = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Colour["bg-stronger"]};
    margin: auto;

    ${mobileMediaQuery} {
        aspect-ratio: 4/3;
    }
    ${MediaQuery.MaxWidth.sm} {
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
    background-color: ${Colour["border-strong"]};
    pointer-events: none;

    ${mobileMediaQuery} {
        width: calc(100% - ${Spacing["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`;

export const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Spacing["spacing-16"]} ${Spacing["spacing-24"]}
            ${Spacing["spacing-48"]};
        gap: ${Spacing["spacing-16"]};
    }

    ${mobileLandscapeMediaQuery} {
        flex-direction: row;
        margin: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
    }
`;

export const ModalActionButton = styled(Button.Default)`
    width: 8.5rem;
    ${MediaQuery.MaxWidth.sm} {
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
