import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { ProgressBar } from "../shared/progress-bar";
import { useMaxWidthMediaQuery } from "../theme";
import { Typography } from "../typography";
import * as styles from "./e-signature.styles";
import type { ESignatureCanvasRef } from "./e-signature-canvas";
import type { EsignatureProps } from "./types";

// lazy load to fix next.js SSR errors
const ESignatureCanvas = lazy(async () => ({
    default: (await import("./e-signature-canvas")).ESignatureCanvas,
}));

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const checkIsMobileLandscape = () => {
    if (typeof window === "undefined") {
        return false;
    }

    const breakpointRaw = getComputedStyle(document.documentElement)
        .getPropertyValue("--fds-breakpoint-sm-max")
        .trim();
    const breakpointPx = Number.parseFloat(breakpointRaw);
    const maxHeight = Number.isFinite(breakpointPx) ? breakpointPx : 0;

    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    return isLandscape && window.innerHeight <= maxHeight;
};

const {
    AddSignatureButton,
    EditSignatureButton,
    ESignatureContainer,
    ESignatureDrawable,
    GrowContainer,
    Instructions,
    ModalActionButton,
    ModalBox,
    ModalButtons,
    ModalTitle,
    ProgressBox,
    ScrollableModal,
    SignatureArea,
    SignatureLine,
    SignaturePreviewImage,
} = styles;

export const ESignature = (props: EsignatureProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        description,
        id,
        loadingProgress,
        loadingLabel = "Uploading...",
        onChange,
        value,
        disabled,
        ...otherProps
    } = props;
    const [showModal, setShowModal] = useState(false);
    const [isMobileLandscape, setIsMobileLandscape] = useState(false);
    const eSignatureCanvasRef = useRef<ESignatureCanvasRef>(null);
    const [dataURL, setDataURL] = useState<string | null | undefined>(value);
    const isMobile = useMaxWidthMediaQuery("sm");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClearDrawing = () => {
        eSignatureCanvasRef.current?.clear();
    };

    const handleClickSave = () => {
        if (eSignatureCanvasRef.current) {
            const dataURL = eSignatureCanvasRef.current.export();
            setDataURL(dataURL);
            setShowModal(false);
            onChange?.(dataURL);
        }
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setDataURL(value);
    }, [value]);

    useEffect(() => {
        const updateIsMobileLandscape = () => {
            setIsMobileLandscape(checkIsMobileLandscape());
        };

        updateIsMobileLandscape();
        window.addEventListener("resize", updateIsMobileLandscape);
        window.addEventListener("orientationchange", updateIsMobileLandscape);

        return () => {
            window.removeEventListener("resize", updateIsMobileLandscape);
            window.removeEventListener(
                "orientationchange",
                updateIsMobileLandscape
            );
        };
    }, []);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSignatureArea = () => {
        if (!dataURL) {
            return (
                <AddSignatureButton
                    type="button"
                    styleType="secondary"
                    aria-label="Add signature"
                    id={id}
                    onClick={() => setShowModal(true)}
                    disabled={disabled}
                >
                    Add signature
                </AddSignatureButton>
            );
        }

        return (
            <>
                <SignaturePreviewImage src={dataURL} alt="Signature preview" />
                <EditSignatureButton
                    styleType="light"
                    onClick={() => setShowModal(true)}
                    id={id}
                    icon={<PencilIcon />}
                    aria-label="Edit signature"
                    disabled={disabled}
                />
            </>
        );
    };

    const renderLoadingIndicator = () => {
        return (
            <ProgressBox>
                {loadingLabel && (
                    <Typography.BodyMD>{loadingLabel}</Typography.BodyMD>
                )}
                <ProgressBar
                    progress={loadingProgress ?? 0}
                    data-testid={`${id || "e-signature"}-progress-bar`}
                />
            </ProgressBox>
        );
    };

    const renderModal = () => {
        return (
            <ScrollableModal data-testid="signature-modal" show={showModal}>
                <GrowContainer>
                    <ModalBox onClose={() => setShowModal(false)}>
                        <ModalTitle>Signature</ModalTitle>
                        <ESignatureContainer>
                            <ESignatureDrawable>
                                <SignatureLine />
                                <Suspense fallback={null}>
                                    {showModal && (
                                        <ESignatureCanvas
                                            ref={eSignatureCanvasRef}
                                            baseImageDataURL={dataURL}
                                        />
                                    )}
                                </Suspense>
                            </ESignatureDrawable>
                        </ESignatureContainer>
                        <ModalButtons>
                            <ModalActionButton
                                sizeType={
                                    isMobileLandscape ? "small" : "default"
                                }
                                type="button"
                                styleType={
                                    isMobile && !isMobileLandscape
                                        ? "light"
                                        : "link"
                                }
                                icon={<EraserIcon />}
                                onClick={handleClearDrawing}
                            >
                                Clear
                            </ModalActionButton>
                            <ModalActionButton
                                sizeType={
                                    isMobileLandscape ? "small" : "default"
                                }
                                type="button"
                                onClick={handleClickSave}
                            >
                                Save
                            </ModalActionButton>
                        </ModalButtons>
                    </ModalBox>
                </GrowContainer>
            </ScrollableModal>
        );
    };

    const renderDescription = () => {
        if (!description) return null;
        return <Instructions>{description}</Instructions>;
    };

    return (
        <div {...otherProps}>
            <SignatureArea $disabled={disabled}>
                {typeof loadingProgress === "number"
                    ? renderLoadingIndicator()
                    : renderSignatureArea()}
            </SignatureArea>
            {renderModal()}
            {renderDescription()}
        </div>
    );
};
