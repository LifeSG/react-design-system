import styled from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { IconButton } from "../icon-button";
import { Modal } from "../modal";
import { Text, TextStyleHelper } from "../text";
import { MediaQuery, MediaWidths } from "../media";

// =============================================================================
// CUSTOM MEDIA QUERIES
// =============================================================================
// for mobileL and below in both orientations
const mobileMediaQuery = ` ${MediaQuery.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${MediaWidths.mobileL}px)`;
const mobileLandscapeMediaQuery = `@media(orientation: landscape) and (max-height: ${MediaWidths.mobileL}px)`;

// =============================================================================
// STYLING
// =============================================================================
export const SignatureArea = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${(props) =>
        `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(
            Color.Neutral[5](props)
        )}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${Color.Neutral[8]};
    border-radius: 0.25rem;
    height: 14.125rem;
`;
export const AddSignatureButton = styled(Button.Default)`
    max-width: 10.875rem;
    width: 100%;
    margin: 0 2rem;
`;
export const EditSignatureButton = styled(IconButton)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;
export const SignaturePreviewImage = styled.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`;
export const Instructions = styled(Text.H6)`
    margin-top: 1rem;
`;

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
    padding: 5rem 1.25rem;

    ${mobileMediaQuery} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`;

export const ModalBox = styled(Modal.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${mobileMediaQuery} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`;

export const ModalTitle = styled.h4`
    ${TextStyleHelper.getTextStyle("H4", "semibold")}
    margin-bottom: 1rem;
    color: ${Color.Neutral[1]};
    text-align: center;

    ${mobileMediaQuery} {
        ${TextStyleHelper.getTextStyle("H5", "semibold")}
        margin: 0.75rem 0;
    }
`;
export const ESignatureContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
    background: ${Color.Neutral[6]};
    border-radius: 0.75rem;
    overflow: hidden;

    ${mobileMediaQuery} {
        border-radius: 0;
        flex: 1;
    }
`;
export const SignatureLine = styled.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Color.Neutral[4]};
    pointer-events: none;

    ${mobileMediaQuery} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`;

export const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${mobileLandscapeMediaQuery} {
        flex-direction: row;
        padding: 0 1.25rem 1rem;
        gap: 0;
    }
`;
export const ModalActionButton = styled(Button.Default)`
    width: 8.5rem;
    ${MediaQuery.MaxWidth.mobileL} {
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
