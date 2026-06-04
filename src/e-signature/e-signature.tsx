import { EraserIcon, PencilIcon } from "@lifesg/react-icons";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { ProgressBar } from "../shared/progress-bar";
import {
    Breakpoint,
    DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT,
    useMaxWidthMediaQuery,
    useMediaQuery,
    useResolvedBreakpointToken,
} from "../theme";
import { Typography } from "../typography";
import * as styles from "./e-signature.styles";
import type { ESignatureCanvasRef } from "./e-signature-canvas";
import type { EsignatureProps } from "./types";

// lazy load to fix next.js SSR errors
const ESignatureCanvas = lazy(async () => ({
    default: (await import("./e-signature-canvas")).ESignatureCanvas,
}));

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
    const eSignatureCanvasRef = useRef<ESignatureCanvasRef>(null);
    const [dataURL, setDataURL] = useState<string | null | undefined>(value);
    const isMobile = useMaxWidthMediaQuery("sm");
    const mobileBreakpoint = useResolvedBreakpointToken(
        Breakpoint["sm-max"],
        DEFAULT_MOBILE_MAX_WIDTH_BREAKPOINT
    );
    const isMobileLandscape = useMediaQuery({
        clauses: [
            {
                feature: "orientation",
                value: "landscape",
            },
            {
                feature: "max-height",
                value: mobileBreakpoint,
            },
        ],
    });

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
